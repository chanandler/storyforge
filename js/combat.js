/**
 * StoryForge — Combat System
 * Turn-based combat with attacks, magic, potions, and flee
 */

// eslint-disable-next-line no-unused-vars
const Combat = (() => {
  'use strict';

  let currentEnemy = null;
  let enemyHp = 0;
  let enemyMaxHp = 0;
  let combatActive = false;
  let onCombatEnd = null;
  let combatLogEntries = [];

  function startCombat(enemyId, winScene, loseScene) {
    const template = Engine.getEnemy(enemyId);
    if (!template) {
      console.error('Enemy not found:', enemyId);
      return;
    }

    currentEnemy = { ...template };
    enemyHp = template.hp;
    enemyMaxHp = template.hp;
    combatActive = true;
    combatLogEntries = [];

    onCombatEnd = (won) => {
      combatActive = false;
      if (won) {
        Engine.goToScene(winScene);
      } else {
        Engine.goToScene(loseScene);
      }
    };

    addLog(`${currentEnemy.icon} ${currentEnemy.name} appears!`, 'system');
    UI.showCombat(currentEnemy, enemyHp, enemyMaxHp, combatLogEntries);
  }

  function addLog(message, type) {
    combatLogEntries.push({ message, type });
  }

  function playerAttack() {
    if (!combatActive) return;

    const state = Engine.getState();
    const attack = Engine.getTotalAttack();
    const variance = Math.floor(Math.random() * 3) - 1;
    const damage = Math.max(1, attack + variance - Math.floor(currentEnemy.defense / 2));

    enemyHp -= damage;
    addLog(`You strike for ${damage} damage!`, 'player-action');

    if (enemyHp <= 0) {
      enemyHp = 0;
      handleEnemyDefeated();
      return;
    }

    UI.updateCombat(currentEnemy, enemyHp, enemyMaxHp, combatLogEntries);

    // Enemy turn after short delay
    setTimeout(() => enemyTurn(), 600);
    UI.disableCombatActions();
  }

  function playerMagic() {
    if (!combatActive) return;
    const state = Engine.getState();

    if (state.mana < 10) {
      addLog('Not enough mana!', 'system');
      UI.updateCombat(currentEnemy, enemyHp, enemyMaxHp, combatLogEntries);
      return;
    }

    state.mana -= 10;
    const magic = Engine.getTotalMagic();
    const damage = Math.max(5, magic * 3 + Math.floor(Math.random() * 5));

    enemyHp -= damage;
    addLog(`✨ You cast a spell for ${damage} magical damage!`, 'player-action');

    if (enemyHp <= 0) {
      enemyHp = 0;
      handleEnemyDefeated();
      return;
    }

    UI.updateCombat(currentEnemy, enemyHp, enemyMaxHp, combatLogEntries);
    setTimeout(() => enemyTurn(), 600);
    UI.disableCombatActions();
  }

  function playerUsePotion() {
    if (!combatActive) return;
    const state = Engine.getState();

    // Try health potion first
    const hpIdx = state.inventory.indexOf('health_potion');
    if (hpIdx !== -1) {
      state.inventory.splice(hpIdx, 1);
      const heal = 30;
      state.health = Math.min(state.health + heal, state.maxHealth);
      addLog(`🧪 You drink a health potion. +${heal} HP!`, 'player-action');
      UI.updateCombat(currentEnemy, enemyHp, enemyMaxHp, combatLogEntries);
      UI.updateStatusBar(state);
      setTimeout(() => enemyTurn(), 600);
      UI.disableCombatActions();
      return;
    }

    // Try mana potion
    const mpIdx = state.inventory.indexOf('mana_potion');
    if (mpIdx !== -1) {
      state.inventory.splice(mpIdx, 1);
      const restore = 25;
      state.mana = Math.min(state.mana + restore, state.maxMana);
      addLog(`💧 You drink a mana potion. +${restore} MP!`, 'player-action');
      UI.updateCombat(currentEnemy, enemyHp, enemyMaxHp, combatLogEntries);
      UI.updateStatusBar(state);
      setTimeout(() => enemyTurn(), 600);
      UI.disableCombatActions();
      return;
    }

    addLog('No potions available!', 'system');
    UI.updateCombat(currentEnemy, enemyHp, enemyMaxHp, combatLogEntries);
  }

  function playerFlee() {
    if (!combatActive) return;

    const chance = Math.random();
    if (chance > 0.4) {
      addLog('You successfully flee!', 'system');
      UI.updateCombat(currentEnemy, enemyHp, enemyMaxHp, combatLogEntries);
      combatActive = false;
      setTimeout(() => {
        UI.hideCombat();
        Engine.goToScene('thornvale_prepare');
      }, 800);
    } else {
      addLog('You fail to escape!', 'system');
      UI.updateCombat(currentEnemy, enemyHp, enemyMaxHp, combatLogEntries);
      setTimeout(() => enemyTurn(), 600);
      UI.disableCombatActions();
    }
  }

  function enemyTurn() {
    if (!combatActive) return;

    const state = Engine.getState();
    const defense = Engine.getTotalDefense();
    const variance = Math.floor(Math.random() * 3) - 1;
    const damage = Math.max(1, currentEnemy.attack + variance - Math.floor(defense / 2));

    state.health -= damage;
    addLog(`${currentEnemy.icon} ${currentEnemy.name} attacks for ${damage} damage!`, 'enemy-action');

    if (state.health <= 0) {
      state.health = 0;
      addLog('You have been defeated...', 'system');
      UI.updateCombat(currentEnemy, enemyHp, enemyMaxHp, combatLogEntries);
      UI.updateStatusBar(state);
      setTimeout(() => {
        UI.hideCombat();
        if (onCombatEnd) onCombatEnd(false);
      }, 1200);
      return;
    }

    UI.updateCombat(currentEnemy, enemyHp, enemyMaxHp, combatLogEntries);
    UI.updateStatusBar(state);
    UI.enableCombatActions();
  }

  function handleEnemyDefeated() {
    const state = Engine.getState();

    addLog(`${currentEnemy.name} is defeated!`, 'system');

    // Award XP and gold
    const leveled = Engine.addXP(currentEnemy.xp);
    state.gold += currentEnemy.gold;

    addLog(`+${currentEnemy.xp} XP, +${currentEnemy.gold} gold`, 'system');
    if (leveled) {
      addLog(`⬆️ Level Up! You are now level ${state.level}!`, 'system');
    }

    // Award loot (but not quest items from loot — those come from story)
    for (const lootId of currentEnemy.loot) {
      const item = Engine.getItem(lootId);
      if (item && item.type !== 'quest') {
        state.inventory.push(lootId);
        addLog(`Found: ${item.icon} ${item.name}`, 'system');
      }
    }

    UI.updateCombat(currentEnemy, 0, enemyMaxHp, combatLogEntries);
    UI.updateStatusBar(state);

    setTimeout(() => {
      UI.hideCombat();
      if (onCombatEnd) onCombatEnd(true);
    }, 1500);
  }

  function isActive() {
    return combatActive;
  }

  return {
    startCombat,
    playerAttack,
    playerMagic,
    playerUsePotion,
    playerFlee,
    isActive
  };
})();

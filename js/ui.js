/**
 * StoryForge — UI Controller
 * Handles DOM updates, overlays, notifications, and rendering
 */

// eslint-disable-next-line no-unused-vars
const UI = (() => {
  'use strict';

  // DOM References
  const els = {};

  function init() {
    els.storyText = document.getElementById('story-text');
    els.choicesPanel = document.getElementById('choices-panel');
    els.sceneImage = document.getElementById('scene-image');
    els.healthBar = document.getElementById('health-bar');
    els.healthText = document.getElementById('health-text');
    els.manaBar = document.getElementById('mana-bar');
    els.manaText = document.getElementById('mana-text');
    els.goldText = document.getElementById('gold-text');
    els.overlay = document.getElementById('overlay');
    els.overlayBody = document.getElementById('overlay-body');
    els.overlayClose = document.getElementById('overlay-close');
    els.combatOverlay = document.getElementById('combat-overlay');
    els.combatEnemyInfo = document.getElementById('combat-enemy-info');
    els.combatLog = document.getElementById('combat-log');
    els.combatActions = document.getElementById('combat-actions');
    els.notification = document.getElementById('notification');
    els.gameFooter = document.getElementById('game-footer');
    els.sceneImageContainer = document.getElementById('scene-image-container');

    // Header buttons
    document.getElementById('inventory-btn').addEventListener('click', showInventory);
    document.getElementById('stats-btn').addEventListener('click', showStats);
    document.getElementById('map-btn').addEventListener('click', showMap);
    document.getElementById('settings-btn').addEventListener('click', showSettings);
    els.overlayClose.addEventListener('click', hideOverlay);
    els.overlay.addEventListener('click', (e) => {
      if (e.target === els.overlay) hideOverlay();
    });

    // Keyboard support
    document.addEventListener('keydown', handleKeyboard);
  }

  function handleKeyboard(e) {
    if (Combat.isActive()) return;

    // Number keys for choices
    if (e.key >= '1' && e.key <= '9') {
      const index = parseInt(e.key) - 1;
      const buttons = els.choicesPanel.querySelectorAll('.choice-btn:not(.disabled)');
      if (buttons[index]) {
        buttons[index].click();
      }
    }

    // Escape to close overlay
    if (e.key === 'Escape') {
      hideOverlay();
    }
  }

  function renderScene(sceneId, scene) {
    const state = Engine.getState();

    // Background
    if (scene.background) {
      els.sceneImage.style.background = scene.background;
    }

    // Hide stats for title/ending screens
    if (scene.hideStats) {
      els.gameFooter.style.display = 'none';
      els.sceneImageContainer.style.display = 'none';
    } else {
      els.gameFooter.style.display = '';
      els.sceneImageContainer.style.display = '';
    }

    // Custom renders
    if (scene.customRender) {
      renderCustomScene(scene.customRender, state);
    } else {
      els.storyText.innerHTML = scene.text;
    }

    // Add scene transition animation
    els.storyText.classList.remove('scene-transition');
    void els.storyText.offsetWidth; // trigger reflow
    els.storyText.classList.add('scene-transition');

    // Render choices
    renderChoices(scene, state);

    // Scroll story to top
    const storyPanel = document.getElementById('story-panel');
    storyPanel.scrollTop = 0;

    // Handle combat scenes
    if (scene.combat) {
      setTimeout(() => {
        Combat.startCombat(scene.combat, scene.onCombatWin, scene.onCombatLose);
      }, 500);
    }

    // Update status bar
    updateStatusBar(state);

    // Auto-save after each scene (except title)
    if (sceneId !== 'title' && sceneId !== 'how_to_play') {
      Engine.saveGame();
    }
  }

  function renderChoices(scene, state) {
    els.choicesPanel.innerHTML = '';

    scene.choices.forEach((choice, index) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';

      if (choice.type) {
        btn.classList.add(`choice-${choice.type}`);
      }

      let label = choice.text;
      const conditionMet = !choice.condition || choice.condition(state);

      if (!conditionMet) {
        btn.classList.add('disabled');
        if (choice.requirementText) {
          label += `<span class="choice-requirement">${choice.requirementText}</span>`;
        }
      } else if (choice.requirementText && choice.condition) {
        label += `<span class="choice-requirement met">✓ ${choice.requirementText}</span>`;
      }

      btn.innerHTML = label;
      btn.setAttribute('aria-label', choice.text);
      btn.style.animationDelay = `${0.1 + index * 0.1}s`;

      if (conditionMet) {
        btn.addEventListener('click', () => {
          Engine.makeChoice(index);
        });
      }

      els.choicesPanel.appendChild(btn);
    });
  }

  function renderCustomScene(type, state) {
    switch (type) {
      case 'title_screen':
        els.storyText.innerHTML = `
          <div class="title-screen">
            <h2>⚔️ The Shattered Crown ⚔️</h2>
            <p class="subtitle">A StoryForge Adventure</p>
            <p>The Crown of Dawn has been shattered.<br>
            Darkness spreads across the realm of Eldermoor.<br>
            One ranger holds the fate of the kingdom.</p>
            ${Engine.hasSave() ? '<p style="color:var(--accent-green);margin-top:20px;">💾 Saved game found</p>' : ''}
            <p class="version-note">Use the number keys (1-9) for quick choices</p>
          </div>
        `;
        break;

      case 'ending_victory':
      case 'ending_victory_crown':
        els.storyText.innerHTML = `
          <div class="ending-screen victory">
            <h2>🌅 Victory! 🌅</h2>
            <div class="ending-text">${STORY.SCENES[state.currentScene].text}</div>
          </div>
        `;
        break;

      case 'ending_defeat':
        els.storyText.innerHTML = `
          <div class="ending-screen defeat">
            <h2>💀 Defeat 💀</h2>
            <div class="ending-text">${STORY.SCENES[state.currentScene].text}</div>
          </div>
        `;
        break;

      case 'epilogue':
        renderEpilogue(state);
        break;
    }
  }

  function renderEpilogue(state) {
    const shards = Engine.getShardCount();
    const decisions = [];

    if (state.flags.lyra_companion) decisions.push('🤝 Allied with Lyra');
    else if (state.flags.lyra_at_crossroads) decisions.push('🚶 Went alone');

    if (state.flags.calmed_wolf) decisions.push('🐺 Calmed the Shadow Wolf');
    if (state.flags.elara_peaceful) decisions.push('🕊️ Talked Elara down peacefully');
    else if (state.flags.elara_blessed) decisions.push('✨ Purified Elara with magic');
    else if (state.flags.fought_elara) decisions.push('⚔️ Fought the corrupted Elara');

    if (state.flags.wraith_peaceful) decisions.push('👻 Put the wraith to rest peacefully');
    if (state.flags.mercs_survived) decisions.push('🤝 Saved the mercenaries');
    if (state.flags.abandoned_mercs) decisions.push('💀 Left the mercenaries to die');

    if (state.flags.dragon_oath) decisions.push('🐲 Swore an oath to Stormfang');
    else if (state.flags.dragon_peaceful) decisions.push('💎 Showed Stormfang the shards');
    else if (state.flags.fought_dragon) decisions.push('⚔️ Defeated Stormfang in combat');

    if (state.flags.wore_crown) decisions.push('👑 Wore the Crown of Dawn');
    if (state.flags.best_ending) decisions.push('🌟 Achieved the best ending!');

    els.storyText.innerHTML = `
      <div class="ending-screen victory">
        <h2>📜 Your Journey 📜</h2>
        <div style="text-align:left;max-width:400px;margin:0 auto;">
          <p><strong>Level:</strong> ${state.level}</p>
          <p><strong>Gold earned:</strong> ${state.gold}</p>
          <p><strong>Shards collected:</strong> ${shards}/5</p>
          <p><strong>Scenes visited:</strong> ${state.visitedScenes.length}</p>
          <p style="margin-top:16px;"><strong>Key decisions:</strong></p>
          ${decisions.map(d => `<p style="margin-left:8px;">${d}</p>`).join('')}
          ${state.flags.best_ending ? '<p style="margin-top:16px;color:var(--text-highlight);text-align:center;font-style:italic;">🏆 You achieved the ultimate victory — the Crown wielder ending! 🏆</p>' : ''}
        </div>
      </div>
    `;
  }

  function updateStatusBar(state) {
    const healthPct = (state.health / state.maxHealth) * 100;
    const manaPct = (state.mana / state.maxMana) * 100;

    els.healthBar.style.width = `${healthPct}%`;
    els.healthText.textContent = `${state.health}/${state.maxHealth}`;
    els.manaBar.style.width = `${manaPct}%`;
    els.manaText.textContent = `${state.mana}/${state.maxMana}`;
    els.goldText.textContent = state.gold;

    // Low health warning
    if (healthPct < 25) {
      els.healthBar.classList.add('low');
    } else {
      els.healthBar.classList.remove('low');
    }
  }

  // ===== Overlays =====

  function showOverlay(html) {
    els.overlayBody.innerHTML = html;
    els.overlay.classList.remove('hidden');
  }

  function hideOverlay() {
    els.overlay.classList.add('hidden');
  }

  function showInventory() {
    const items = Engine.getInventoryItems();
    const state = Engine.getState();

    if (items.length === 0) {
      showOverlay(`
        <h3 class="overlay-title">🎒 Inventory</h3>
        <p class="overlay-subtitle">Your pack is empty.</p>
      `);
      return;
    }

    // Group items by type
    const grouped = {};
    for (const item of items) {
      if (!grouped[item.type]) grouped[item.type] = [];
      // Avoid duplicate display for stacked consumables
      const existing = grouped[item.type].find(i => i.id === item.id);
      if (existing) {
        existing.count = (existing.count || 1) + 1;
      } else {
        grouped[item.type].push({ ...item, count: 1 });
      }
    }

    const typeLabels = {
      weapon: '⚔️ Weapons',
      armor: '🛡️ Armor',
      accessory: '📿 Accessories',
      consumable: '🧪 Consumables',
      tool: '🔧 Tools',
      quest: '💎 Quest Items'
    };

    let html = '<h3 class="overlay-title">🎒 Inventory</h3>';

    for (const [type, typeItems] of Object.entries(grouped)) {
      html += `<p style="margin-top:12px;color:var(--text-secondary);font-size:0.85rem;">${typeLabels[type] || type}</p>`;
      html += '<div class="inventory-grid">';
      for (const item of typeItems) {
        const countBadge = item.count > 1 ? ` (×${item.count})` : '';
        const useBtn = item.type === 'consumable' && !Combat.isActive()
          ? `<button class="settings-btn" style="margin-top:6px;font-size:0.75rem;padding:4px 8px;" onclick="UI.useItemFromInventory('${item.id}')">Use</button>`
          : '';
        html += `
          <div class="inventory-item">
            <span class="item-icon">${item.icon}</span>
            <span class="item-name">${item.name}${countBadge}</span>
            <span class="item-desc">${item.description}</span>
            ${item.stats ? `<span class="item-desc" style="color:var(--accent-green);">${Object.entries(item.stats).map(([k,v]) => `+${v} ${k}`).join(', ')}</span>` : ''}
            ${useBtn}
          </div>
        `;
      }
      html += '</div>';
    }

    showOverlay(html);
  }

  function useItemFromInventory(itemId) {
    const success = Engine.useConsumable(itemId);
    if (success) {
      showNotification(`Used ${Engine.getItem(itemId)?.name || 'item'}!`);
      updateStatusBar(Engine.getState());
      showInventory(); // refresh
    }
  }

  function showStats() {
    const state = Engine.getState();
    const weapon = Engine.getEquippedWeapon();
    const armor = Engine.getEquippedArmor();
    const xpNeeded = state.level * 50;

    showOverlay(`
      <h3 class="overlay-title">⚔️ Character Stats</h3>
      <p class="overlay-subtitle">Kael — Level ${state.level} Ranger</p>
      <div class="stats-grid">
        <div class="stat-row">
          <span class="stat-label">❤️ Health</span>
          <span class="stat-num">${state.health}/${state.maxHealth}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">✨ Mana</span>
          <span class="stat-num">${state.mana}/${state.maxMana}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">⚔️ Attack</span>
          <span class="stat-num">${Engine.getTotalAttack()} (base: ${state.stats.attack})</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">🛡️ Defense</span>
          <span class="stat-num">${Engine.getTotalDefense()} (base: ${state.stats.defense})</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">🔮 Magic</span>
          <span class="stat-num">${Engine.getTotalMagic()} (base: ${state.stats.magic})</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">📊 XP</span>
          <span class="stat-num">${state.xp}/${xpNeeded}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">💰 Gold</span>
          <span class="stat-num">${state.gold}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">🗡️ Weapon</span>
          <span class="stat-num">${weapon ? weapon.name : 'None'}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">🛡️ Armor</span>
          <span class="stat-num">${armor ? armor.name : 'None'}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">💎 Crown Shards</span>
          <span class="stat-num">${Engine.getShardCount()}/5</span>
        </div>
      </div>
    `);
  }

  function showMap() {
    let html = '<h3 class="overlay-title">🗺️ Map of Eldermoor</h3>';
    html += '<p class="overlay-subtitle">Discovered locations</p>';
    html += '<div class="map-container">';

    const state = Engine.getState();
    for (const [id, loc] of Object.entries(STORY.LOCATIONS)) {
      const isCurrent = state.location === id;
      const isDiscovered = loc.discovered;
      const isVisited = state.visitedScenes.some(s => s.includes(id.split('_')[0]));

      let className = 'map-location';
      let status = '';
      if (!isDiscovered) {
        className += ' locked';
        status = '🔒 Unknown';
      } else if (isCurrent) {
        className += ' current';
        status = '📍 You are here';
      } else if (isVisited) {
        className += ' visited';
        status = '✓ Visited';
      } else {
        status = '— Discovered';
      }

      html += `
        <div class="${className}">
          <span class="loc-icon">${isDiscovered ? loc.icon : '❓'}</span>
          <span class="loc-name">${isDiscovered ? loc.name : '???'}</span>
          <span class="loc-status">${status}</span>
        </div>
      `;
    }

    html += '</div>';
    showOverlay(html);
  }

  function showSettings() {
    showOverlay(`
      <h3 class="overlay-title">⚙️ Settings</h3>
      <div class="settings-group">
        <div class="settings-row">
          <label>Save Game</label>
          <button class="settings-btn" onclick="Engine.saveGame(); UI.showNotification('Game saved!');">💾 Save</button>
        </div>
        <div class="settings-row">
          <label>Load Game</label>
          <button class="settings-btn" onclick="if(Engine.loadGame()){Engine.goToScene(Engine.getState().currentScene);UI.hideOverlay();UI.showNotification('Game loaded!');}else{UI.showNotification('No save found.');}">📂 Load</button>
        </div>
        <div class="settings-row">
          <label>Delete Save</label>
          <button class="settings-btn danger" onclick="if(confirm('Delete saved game?')){Engine.deleteSave();UI.showNotification('Save deleted.');}">🗑️ Delete</button>
        </div>
        <div class="settings-row">
          <label>New Game</label>
          <button class="settings-btn danger" onclick="if(confirm('Start a new game? Current progress will be lost.')){Engine.resetGame();Engine.goToScene('title');UI.hideOverlay();}">🔄 New Game</button>
        </div>
      </div>
    `);
  }

  // ===== Combat UI =====

  function showCombat(enemy, hp, maxHp, log) {
    els.combatOverlay.classList.remove('hidden');
    updateCombat(enemy, hp, maxHp, log);
    renderCombatActions(true);
  }

  function hideCombat() {
    els.combatOverlay.classList.add('hidden');
  }

  function updateCombat(enemy, hp, maxHp, log) {
    const hpPct = (hp / maxHp) * 100;
    els.combatEnemyInfo.innerHTML = `
      <div class="enemy-name">${enemy.icon} ${enemy.name}</div>
      <div class="enemy-hp-bar">
        <div class="enemy-hp-fill" style="width:${hpPct}%"></div>
      </div>
      <div style="font-size:0.85rem;color:var(--text-secondary);margin-top:4px;">HP: ${Math.max(0, hp)}/${maxHp}</div>
    `;

    els.combatLog.innerHTML = log
      .map(entry => `<div class="combat-log-entry ${entry.type}">${entry.message}</div>`)
      .join('');

    // Scroll log to bottom
    els.combatLog.scrollTop = els.combatLog.scrollHeight;
  }

  function renderCombatActions(enabled) {
    const state = Engine.getState();
    const hasPotion = state.inventory.includes('health_potion') || state.inventory.includes('mana_potion');

    els.combatActions.innerHTML = `
      <button class="combat-btn" onclick="Combat.playerAttack()" ${!enabled ? 'disabled' : ''}>⚔️ Attack</button>
      <button class="combat-btn" onclick="Combat.playerMagic()" ${!enabled || state.mana < 10 ? 'disabled' : ''}>✨ Magic${state.mana >= 10 ? '' : ' (10 MP)'}</button>
      <button class="combat-btn" onclick="Combat.playerUsePotion()" ${!enabled || !hasPotion ? 'disabled' : ''}>🧪 Potion</button>
      <button class="combat-btn" onclick="Combat.playerFlee()" ${!enabled ? 'disabled' : ''}>🏃 Flee</button>
    `;
  }

  function disableCombatActions() {
    renderCombatActions(false);
  }

  function enableCombatActions() {
    renderCombatActions(true);
  }

  // ===== Notifications =====

  let notifTimeout = null;

  function showNotification(text, duration) {
    duration = duration || 2500;
    els.notification.textContent = text;
    els.notification.classList.remove('hidden');
    if (notifTimeout) clearTimeout(notifTimeout);
    notifTimeout = setTimeout(() => {
      els.notification.classList.add('hidden');
    }, duration);
  }

  return {
    init,
    renderScene,
    updateStatusBar,
    showOverlay,
    hideOverlay,
    showInventory,
    showStats,
    showMap,
    showSettings,
    showCombat,
    hideCombat,
    updateCombat,
    disableCombatActions,
    enableCombatActions,
    showNotification,
    useItemFromInventory
  };
})();

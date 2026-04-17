/**
 * StoryForge — Game Engine
 * Manages game state, scene transitions, save/load, and inventory
 */

// eslint-disable-next-line no-unused-vars
const Engine = (() => {
  'use strict';

  const SAVE_KEY = 'storyforge_save';

  function createInitialState() {
    return {
      currentScene: 'title',
      health: 100,
      maxHealth: 100,
      mana: 50,
      maxMana: 50,
      gold: 0,
      xp: 0,
      level: 1,
      inventory: [],
      flags: {},
      stats: {
        attack: 2,
        defense: 1,
        magic: 1
      },
      location: 'thornvale',
      visitedScenes: [],
      combatLog: []
    };
  }

  let state = createInitialState();
  let onStateChange = null;
  let onSceneChange = null;

  function getState() {
    return state;
  }

  function setState(newState) {
    state = newState;
    if (onStateChange) onStateChange(state);
  }

  function setCallbacks(stateChangeCb, sceneChangeCb) {
    onStateChange = stateChangeCb;
    onSceneChange = sceneChangeCb;
  }

  function getScene(sceneId) {
    return STORY.SCENES[sceneId] || null;
  }

  function getItem(itemId) {
    return STORY.ITEMS[itemId] || null;
  }

  function getEnemy(enemyId) {
    return STORY.ENEMIES[enemyId] || null;
  }

  function goToScene(sceneId) {
    const scene = getScene(sceneId);
    if (!scene) {
      console.error('Scene not found:', sceneId);
      return;
    }

    state.currentScene = sceneId;
    if (!state.visitedScenes.includes(sceneId)) {
      state.visitedScenes.push(sceneId);
    }

    // Execute onEnter
    if (scene.onEnter) {
      scene.onEnter(state);
    }

    // Check for death
    if (state.health <= 0) {
      state.health = 1;
    }

    // Clamp values
    state.health = Math.min(state.health, state.maxHealth);
    state.mana = Math.min(state.mana, state.maxMana);

    if (onStateChange) onStateChange(state);
    if (onSceneChange) onSceneChange(sceneId, scene);
  }

  function makeChoice(choiceIndex) {
    const scene = getScene(state.currentScene);
    if (!scene || !scene.choices[choiceIndex]) return;

    const choice = scene.choices[choiceIndex];

    // Check condition
    if (choice.condition && !choice.condition(state)) return;

    // Execute onSelect
    if (choice.onSelect) {
      choice.onSelect(state);
    }

    goToScene(choice.next);
  }

  function getEquippedWeapon() {
    const weapons = state.inventory
      .map(id => getItem(id))
      .filter(item => item && item.type === 'weapon');
    if (weapons.length === 0) return null;
    return weapons.reduce((best, w) => (w.stats.attack > (best.stats.attack || 0) ? w : best));
  }

  function getEquippedArmor() {
    const armors = state.inventory
      .map(id => getItem(id))
      .filter(item => item && item.type === 'armor');
    if (armors.length === 0) return null;
    return armors.reduce((best, a) => (a.stats.defense > (best.stats.defense || 0) ? a : best));
  }

  function getAccessoryBonuses() {
    const accessories = state.inventory
      .map(id => getItem(id))
      .filter(item => item && item.type === 'accessory');
    const bonuses = { attack: 0, defense: 0, magic: 0 };
    for (const acc of accessories) {
      if (acc.stats) {
        bonuses.attack += acc.stats.attack || 0;
        bonuses.defense += acc.stats.defense || 0;
        bonuses.magic += acc.stats.magic || 0;
      }
    }
    return bonuses;
  }

  function getTotalAttack() {
    const weapon = getEquippedWeapon();
    const accBonus = getAccessoryBonuses();
    return state.stats.attack + (weapon ? weapon.stats.attack : 0) + accBonus.attack;
  }

  function getTotalDefense() {
    const armor = getEquippedArmor();
    const accBonus = getAccessoryBonuses();
    return state.stats.defense + (armor ? armor.stats.defense : 0) + accBonus.defense;
  }

  function getTotalMagic() {
    const accBonus = getAccessoryBonuses();
    const weapon = getEquippedWeapon();
    return state.stats.magic + accBonus.magic + (weapon && weapon.stats.magic ? weapon.stats.magic : 0);
  }

  function useConsumable(itemId) {
    const idx = state.inventory.indexOf(itemId);
    if (idx === -1) return false;

    const item = getItem(itemId);
    if (!item || item.type !== 'consumable') return false;

    if (item.effect.health) {
      state.health = Math.min(state.health + item.effect.health, state.maxHealth);
    }
    if (item.effect.mana) {
      state.mana = Math.min(state.mana + item.effect.mana, state.maxMana);
    }

    state.inventory.splice(idx, 1);
    if (onStateChange) onStateChange(state);
    return true;
  }

  function addXP(amount) {
    state.xp += amount;
    const xpThreshold = state.level * 50;
    if (state.xp >= xpThreshold) {
      state.level++;
      state.xp -= xpThreshold;
      state.maxHealth += 10;
      state.maxMana += 5;
      state.health = state.maxHealth;
      state.mana = state.maxMana;
      state.stats.attack += 1;
      state.stats.defense += 1;
      return true; // leveled up
    }
    return false;
  }

  function saveGame() {
    try {
      const saveData = JSON.stringify(state);
      localStorage.setItem(SAVE_KEY, saveData);
      return true;
    } catch {
      return false;
    }
  }

  function loadGame() {
    try {
      const saveData = localStorage.getItem(SAVE_KEY);
      if (!saveData) return false;
      const loaded = JSON.parse(saveData);
      state = loaded;
      // Restore location discoveries from flags
      if (state.flags.game_started) {
        STORY.LOCATIONS.thornvale.discovered = true;
      }
      if (state.flags.woods_complete || state.visitedScenes.includes('woods_entrance')) {
        STORY.LOCATIONS.whispering_woods.discovered = true;
      }
      if (state.flags.crypt_complete || state.visitedScenes.includes('crypt_entrance')) {
        STORY.LOCATIONS.ancient_crypt.discovered = true;
      }
      if (state.flags.mountain_complete || state.visitedScenes.includes('mountain_entrance')) {
        STORY.LOCATIONS.stormfang_peak.discovered = true;
      }
      if (state.flags.city_complete || state.visitedScenes.includes('city_entrance')) {
        STORY.LOCATIONS.fallen_city.discovered = true;
      }
      if (state.flags.batch001_memory_echo_complete || state.visitedScenes.includes('batch001_memory_echo')) {
        STORY.LOCATIONS.thornvale_hinterlands.discovered = true;
      }
      if (
        state.flags.batch001_wilds_settlers ||
        state.flags.batch001_wilds_wildkin ||
        state.flags.batch001_wilds_mediated ||
        state.visitedScenes.includes('batch001_wilds_conflict')
      ) {
        STORY.LOCATIONS.whispering_wilds.discovered = true;
      }
      if (
        state.flags.batch001_sanctuary_unlocked ||
        state.visitedScenes.includes('batch001_cryptward_sanctuary')
      ) {
        STORY.LOCATIONS.cryptward_depths.discovered = true;
      }
      if (
        state.flags.batch001_stormfang_cleansed ||
        state.flags.batch001_stormfang_spreading ||
        state.visitedScenes.includes('batch001_stormfang_territory')
      ) {
        STORY.LOCATIONS.stormfang_range.discovered = true;
      }
      if (
        state.flags.batch001_auralis_weather_done ||
        state.visitedScenes.includes('batch001_auralis_weather')
      ) {
        STORY.LOCATIONS.auralis_ruins.discovered = true;
      }
      if (state.flags.batch001_archive_texts || state.visitedScenes.includes('batch001_sunken_archive')) {
        STORY.LOCATIONS.sunken_marshes.discovered = true;
      }
      if (state.flags.batch001_archive_texts || state.flags.batch001_ashen_restored) {
        STORY.LOCATIONS.ashen_steppe.discovered = true;
        STORY.LOCATIONS.moonlit_coast.discovered = true;
      }
      if (
        state.flags.batch001_ashen_restored ||
        state.flags.batch001_moonlit_arc_complete ||
        state.flags.batch001_glass_lyra_arc ||
        state.flags.batch001_glass_solo
      ) {
        STORY.LOCATIONS.glass_dunes.discovered = true;
      }
      if (
        state.flags.batch001_ashen_restored ||
        state.flags.batch001_ironroot_hidden_mission ||
        state.flags.batch001_ironroot_rumors
      ) {
        STORY.LOCATIONS.ironroot_forest.discovered = true;
      }
      if (
        state.flags.batch002_wilds_elite_stabilized ||
        state.visitedScenes.includes('batch002_wilds_elite')
      ) {
        STORY.LOCATIONS.whispering_wilds.discovered = true;
      }
      if (state.flags.batch002_crypt_weather_done || state.visitedScenes.includes('batch002_crypt_weather')) {
        STORY.LOCATIONS.cryptward_depths.discovered = true;
      }
      if (state.flags.batch002_storm_archive_texts || state.visitedScenes.includes('batch002_storm_archive')) {
        STORY.LOCATIONS.stormfang_range.discovered = true;
      }
      if (state.flags.batch002_storm_archive_texts || state.flags.batch002_auralis_restored) {
        STORY.LOCATIONS.auralis_ruins.discovered = true;
      }
      if (
        state.flags.batch002_storm_archive_texts ||
        state.flags.batch002_auralis_restored ||
        state.flags.batch002_sunken_arc_complete ||
        state.visitedScenes.includes('batch002_sunken_puzzle')
      ) {
        STORY.LOCATIONS.sunken_marshes.discovered = true;
      }
      if (
        state.flags.batch002_auralis_restored ||
        state.flags.batch002_ashen_lyra_arc ||
        state.flags.batch002_ashen_solo ||
        state.visitedScenes.includes('batch002_ashen_companion')
      ) {
        STORY.LOCATIONS.ashen_steppe.discovered = true;
      }
      if (
        state.flags.batch002_sunken_arc_complete ||
        state.flags.batch002_moonlit_intrigue_exposed ||
        state.flags.batch002_moonlit_intrigue_covered ||
        state.visitedScenes.includes('batch002_moonlit_festival')
      ) {
        STORY.LOCATIONS.moonlit_coast.discovered = true;
      }
      if (
        state.flags.batch002_moonlit_intrigue_exposed ||
        state.flags.batch002_moonlit_intrigue_covered ||
        state.flags.batch002_glass_route_resolved ||
        state.visitedScenes.includes('batch002_glass_smuggler')
      ) {
        STORY.LOCATIONS.glass_dunes.discovered = true;
      }
      if (
        state.flags.batch002_glass_route_resolved ||
        state.flags.batch002_order_support ||
        state.visitedScenes.includes('batch002_ironroot_trial')
      ) {
        STORY.LOCATIONS.ironroot_forest.discovered = true;
      }
      if (state.flags.batch002_rescue_complete || state.visitedScenes.includes('batch002_thornvale_rescue')) {
        STORY.LOCATIONS.thornvale_hinterlands.discovered = true;
      }
      const visitedSceneSet = new Set(state.visitedScenes || []);
      for (const location of STORY.FRONTIER_LOCATIONS) {
        const locationId = location.id;
        const locationData = STORY.LOCATIONS[locationId];
        if (!locationData) continue;
        if (
          state.flags[`frontier_discovered_${locationId}`] ||
          visitedSceneSet.has(`frontier_site_${locationId}`)
        ) {
          locationData.discovered = true;
        }
      }
      if (onStateChange) onStateChange(state);
      return true;
    } catch {
      return false;
    }
  }

  function deleteSave() {
    try {
      localStorage.removeItem(SAVE_KEY);
      return true;
    } catch {
      return false;
    }
  }

  function hasSave() {
    try {
      return localStorage.getItem(SAVE_KEY) !== null;
    } catch {
      return false;
    }
  }

  function resetGame() {
    state = createInitialState();
    // Reset location discoveries
    for (const loc of Object.values(STORY.LOCATIONS)) {
      loc.discovered = false;
    }
    STORY.LOCATIONS.thornvale.discovered = true;
    if (onStateChange) onStateChange(state);
  }

  function getInventoryItems() {
    return state.inventory.map(id => getItem(id)).filter(Boolean);
  }

  function getShardCount() {
    return state.inventory.filter(id => id.startsWith('shard_')).length;
  }

  return {
    getState,
    setState,
    setCallbacks,
    getScene,
    getItem,
    getEnemy,
    goToScene,
    makeChoice,
    getEquippedWeapon,
    getEquippedArmor,
    getTotalAttack,
    getTotalDefense,
    getTotalMagic,
    getAccessoryBonuses,
    useConsumable,
    addXP,
    saveGame,
    loadGame,
    deleteSave,
    hasSave,
    resetGame,
    getInventoryItems,
    getShardCount,
    createInitialState
  };
})();

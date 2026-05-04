/**
 * StoryForge — The Shattered Crown
 * Story Data: Scenes, Items, Enemies, Locations
 *
 * STORY SYNOPSIS:
 * The kingdom of Eldermoor has fallen into darkness. King Aldric was betrayed
 * by his court wizard, Malachar, who shattered the Crown of Dawn — an ancient
 * artifact that held the realm's protective magic. The five shards were scattered
 * across the land, and now monsters pour through the weakened barriers.
 *
 * You are Kael, a former ranger of the King's Watch, who discovers a dying
 * messenger carrying one of the shards. Your quest: gather the remaining shards,
 * reforge the Crown, and confront Malachar in his dark tower before the realm
 * falls forever.
 */

// eslint-disable-next-line no-unused-vars
const STORY = (() => {
  'use strict';

  // ==================== ITEMS ====================
  const ITEMS = {
    rusty_sword: {
      id: 'rusty_sword',
      name: 'Rusty Sword',
      icon: '🗡️',
      description: 'A battered but serviceable blade.',
      type: 'weapon',
      stats: { attack: 3 }
    },
    iron_sword: {
      id: 'iron_sword',
      name: 'Iron Sword',
      icon: '⚔️',
      description: 'A well-forged iron blade.',
      type: 'weapon',
      stats: { attack: 6 }
    },
    enchanted_blade: {
      id: 'enchanted_blade',
      name: 'Moonfire Blade',
      icon: '🌟',
      description: 'A silvery blade that glows with pale fire.',
      type: 'weapon',
      stats: { attack: 10, magic: 3 }
    },
    leather_armor: {
      id: 'leather_armor',
      name: 'Leather Armor',
      icon: '🦺',
      description: 'Light but sturdy protection.',
      type: 'armor',
      stats: { defense: 3 }
    },
    chainmail: {
      id: 'chainmail',
      name: 'Chainmail',
      icon: '🛡️',
      description: 'Interlocking metal rings offer solid defense.',
      type: 'armor',
      stats: { defense: 6 }
    },
    health_potion: {
      id: 'health_potion',
      name: 'Health Potion',
      icon: '🧪',
      description: 'Restores 30 health.',
      type: 'consumable',
      effect: { health: 30 }
    },
    mana_potion: {
      id: 'mana_potion',
      name: 'Mana Potion',
      icon: '💧',
      description: 'Restores 25 mana.',
      type: 'consumable',
      effect: { mana: 25 }
    },
    shard_messenger: {
      id: 'shard_messenger',
      name: 'Crown Shard (First)',
      icon: '💎',
      description: 'A glowing fragment of the Crown of Dawn. Warm to the touch.',
      type: 'quest'
    },
    shard_forest: {
      id: 'shard_forest',
      name: 'Crown Shard (Heartwood)',
      icon: '💎',
      description: 'Found deep in the Whispering Woods, pulsing with green light.',
      type: 'quest'
    },
    shard_crypt: {
      id: 'shard_crypt',
      name: 'Crown Shard (Crypt)',
      icon: '💎',
      description: 'Recovered from the ancient crypt, cold as ice.',
      type: 'quest'
    },
    shard_mountain: {
      id: 'shard_mountain',
      name: 'Crown Shard (Peak)',
      icon: '💎',
      description: 'Won from the dragon\'s hoard atop Stormfang Peak.',
      type: 'quest'
    },
    shard_city: {
      id: 'shard_city',
      name: 'Crown Shard (Royal)',
      icon: '💎',
      description: 'Hidden in the ruins of the royal palace.',
      type: 'quest'
    },
    old_map: {
      id: 'old_map',
      name: 'Weathered Map',
      icon: '🗺️',
      description: 'Shows the locations rumored to hold crown shards.',
      type: 'quest'
    },
    elara_amulet: {
      id: 'elara_amulet',
      name: 'Elara\'s Amulet',
      icon: '📿',
      description: 'A protective charm given by the forest witch.',
      type: 'accessory',
      stats: { magic: 5, defense: 2 }
    },
    lockpick: {
      id: 'lockpick',
      name: 'Lockpick Set',
      icon: '🔧',
      description: 'For when diplomacy fails.',
      type: 'tool'
    },
    rope: {
      id: 'rope',
      name: 'Strong Rope',
      icon: '🪢',
      description: '50 feet of good hempen rope.',
      type: 'tool'
    },
    fire_scroll: {
      id: 'fire_scroll',
      name: 'Scroll of Fireball',
      icon: '📜',
      description: 'Unleashes a devastating ball of flame. Single use.',
      type: 'consumable',
      effect: { combat_damage: 40 }
    },
    shield_ring: {
      id: 'shield_ring',
      name: 'Ring of Warding',
      icon: '💍',
      description: 'Grants magical protection.',
      type: 'accessory',
      stats: { defense: 4, magic: 2 }
    }
  };

  // ==================== ENEMIES ====================
  const ENEMIES = {
    goblin: {
      name: 'Goblin Scout',
      icon: '👺',
      hp: 25,
      attack: 4,
      defense: 1,
      xp: 15,
      gold: 5,
      loot: ['health_potion']
    },
    goblin_chief: {
      name: 'Goblin Chieftain',
      icon: '👹',
      hp: 50,
      attack: 7,
      defense: 3,
      xp: 35,
      gold: 20,
      loot: ['iron_sword', 'health_potion']
    },
    wolf: {
      name: 'Shadow Wolf',
      icon: '🐺',
      hp: 30,
      attack: 6,
      defense: 2,
      xp: 20,
      gold: 0,
      loot: []
    },
    skeleton: {
      name: 'Skeletal Guardian',
      icon: '💀',
      hp: 35,
      attack: 5,
      defense: 4,
      xp: 25,
      gold: 10,
      loot: ['mana_potion']
    },
    wraith: {
      name: 'Cursed Wraith',
      icon: '👻',
      hp: 45,
      attack: 8,
      defense: 2,
      xp: 40,
      gold: 15,
      loot: ['mana_potion']
    },
    forest_spider: {
      name: 'Giant Forest Spider',
      icon: '🕷️',
      hp: 40,
      attack: 7,
      defense: 3,
      xp: 30,
      gold: 8,
      loot: ['health_potion']
    },
    bandit: {
      name: 'Bandit',
      icon: '🗡️',
      hp: 35,
      attack: 6,
      defense: 3,
      xp: 25,
      gold: 15,
      loot: ['lockpick']
    },
    drake: {
      name: 'Young Drake',
      icon: '🐉',
      hp: 80,
      attack: 12,
      defense: 6,
      xp: 60,
      gold: 40,
      loot: ['fire_scroll']
    },
    stormfang: {
      name: 'Stormfang the Ancient',
      icon: '🐲',
      hp: 120,
      attack: 15,
      defense: 8,
      xp: 100,
      gold: 80,
      loot: ['shard_mountain']
    },
    malachar: {
      name: 'Malachar the Betrayer',
      icon: '🧙‍♂️',
      hp: 150,
      attack: 18,
      defense: 10,
      xp: 200,
      gold: 0,
      loot: [],
      isBoss: true
    }
  };

  // ==================== LOCATIONS ====================
  const LOCATIONS = {
    thornvale: { name: 'Thornvale Village', icon: '🏘️', discovered: true },
    crossroads: { name: 'The Crossroads', icon: '⛩️', discovered: false },
    whispering_woods: { name: 'Whispering Woods', icon: '🌲', discovered: false },
    ancient_crypt: { name: 'The Ancient Crypt', icon: '⚰️', discovered: false },
    stormfang_peak: { name: 'Stormfang Peak', icon: '🏔️', discovered: false },
    fallen_city: { name: 'Fallen City of Auralis', icon: '🏰', discovered: false },
    thornvale_hinterlands: { name: 'Thornvale Hinterlands', icon: '🌾', discovered: false },
    whispering_wilds: { name: 'Whispering Wilds', icon: '🍃', discovered: false },
    cryptward_depths: { name: 'Cryptward Depths', icon: '🕯️', discovered: false },
    stormfang_range: { name: 'Stormfang Range', icon: '⛰️', discovered: false },
    auralis_ruins: { name: 'Auralis Ruins', icon: '🏛️', discovered: false },
    sunken_marshes: { name: 'Sunken Marshes', icon: '🐊', discovered: false },
    ashen_steppe: { name: 'Ashen Steppe', icon: '🔥', discovered: false },
    moonlit_coast: { name: 'Moonlit Coast', icon: '🌙', discovered: false },
    glass_dunes: { name: 'Glass Dunes', icon: '🏜️', discovered: false },
    ironroot_forest: { name: 'Ironroot Forest', icon: '🌳', discovered: false },
    dark_tower: { name: 'Malachar\'s Tower', icon: '🗼', discovered: false }
  };

  const FRONTIER_CLUSTERS = [
    { id: 'northern_reach', name: 'Northern Reach', icon: '🧊', background: 'linear-gradient(180deg, #2c3e5f 0%, #141d2f 100%)' },
    { id: 'verdant_wilds', name: 'Verdant Wilds', icon: '🌿', background: 'linear-gradient(180deg, #285138 0%, #11261a 100%)' },
    { id: 'shattered_frontier', name: 'Shattered Frontier', icon: '⛰️', background: 'linear-gradient(180deg, #4a2b23 0%, #1f110e 100%)' },
    { id: 'coastal_veil', name: 'Coastal Veil', icon: '🌊', background: 'linear-gradient(180deg, #1f4254 0%, #0d1d25 100%)' },
    { id: 'high_arcana', name: 'High Arcana', icon: '✨', background: 'linear-gradient(180deg, #3c2a5e 0%, #19112a 100%)' },
    { id: 'sunken_depths', name: 'Sunken Depths', icon: '⛏️', background: 'linear-gradient(180deg, #2a1f3a 0%, #0f0b16 100%)' },
    { id: 'forsaken_plains', name: 'Forsaken Plains', icon: '💀', background: 'linear-gradient(180deg, #3d3120 0%, #19140c 100%)' },
    { id: 'twilight_reaches', name: 'Twilight Reaches', icon: '🌑', background: 'linear-gradient(180deg, #1a2040 0%, #090d1e 100%)' },
    { id: 'ancient_heartlands', name: 'Ancient Heartlands', icon: '🏛️', background: 'linear-gradient(180deg, #3b2e18 0%, #1a1408 100%)' },
    { id: 'storm_peaks', name: 'Storm Peaks', icon: '⛈️', background: 'linear-gradient(180deg, #283040 0%, #101520 100%)' }
  ];

  const FRONTIER_LOCATIONS = [
    { id: 'frontier_frostmere_expanse', name: 'Frostmere Expanse', icon: '❄️', cluster: 'northern_reach', theme: 'frozen trade roads and buried ward-stones' },
    { id: 'frontier_aurora_cliffs', name: 'Aurora Cliffs', icon: '🌌', cluster: 'northern_reach', theme: 'glowing cliff paths watched by sky-hunters' },
    { id: 'frontier_wolfsgrin_pass', name: 'Wolfsgrin Pass', icon: '🐺', cluster: 'northern_reach', theme: 'howling passes where caravans vanish at dusk' },
    { id: 'frontier_starfall_tarn', name: 'Starfall Tarn', icon: '🌠', cluster: 'northern_reach', theme: 'meteor-scarred waters resonating with shard light' },
    { id: 'frontier_rimewatch_bastion', name: 'Rimewatch Bastion', icon: '🛡️', cluster: 'northern_reach', theme: 'an abandoned stronghold guarding the winter frontier' },
    { id: 'frontier_silverpine_hollow', name: 'Silverpine Hollow', icon: '🌲', cluster: 'northern_reach', theme: 'needlewoods hiding old ranger relay caches' },
    { id: 'frontier_skyforge_ledge', name: 'Skyforge Ledge', icon: '⚒️', cluster: 'northern_reach', theme: 'wind-blasted forges fed by dragonfire vents' },
    { id: 'frontier_glacial_echo_cavern', name: 'Glacial Echo Cavern', icon: '🧊', cluster: 'northern_reach', theme: 'ice tunnels that replay voices from prior wars' },
    { id: 'frontier_wintergate_stairs', name: 'Wintergate Stairs', icon: '🏔️', cluster: 'northern_reach', theme: 'switchback stairs linking valley citadels' },
    { id: 'frontier_pale_comet_fields', name: 'Pale Comet Fields', icon: '☄️', cluster: 'northern_reach', theme: 'frost plains seeded with celestial fragments' },

    { id: 'frontier_briarheart_basin', name: 'Briarheart Basin', icon: '🌿', cluster: 'verdant_wilds', theme: 'thorn-choked basin villages split by old pacts' },
    { id: 'frontier_emberleaf_grove', name: 'Emberleaf Grove', icon: '🍂', cluster: 'verdant_wilds', theme: 'burning-canopy groves sustained by ember sap' },
    { id: 'frontier_mossveil_crossing', name: 'Mossveil Crossing', icon: '🌫️', cluster: 'verdant_wilds', theme: 'fogged bridges connecting hidden shrine paths' },
    { id: 'frontier_sunpetal_meadow', name: 'Sunpetal Meadow', icon: '🌼', cluster: 'verdant_wilds', theme: 'bright grasslands masking sinkhole catacombs' },
    { id: 'frontier_thistlekeep_ruins', name: 'Thistlekeep Ruins', icon: '🏚️', cluster: 'verdant_wilds', theme: 'collapsed keeps overtaken by razor-vines' },
    { id: 'frontier_rootwake_hollow', name: 'Rootwake Hollow', icon: '🪵', cluster: 'verdant_wilds', theme: 'hollow roots where smugglers run root-routes' },
    { id: 'frontier_greenwarden_spire', name: 'Greenwarden Spire', icon: '🗼', cluster: 'verdant_wilds', theme: 'watchtowers held by rival forest wardens' },
    { id: 'frontier_vinebound_causeway', name: 'Vinebound Causeway', icon: '🛤️', cluster: 'verdant_wilds', theme: 'ancient stone roads strangled by sentient vines' },
    { id: 'frontier_dewglass_orchard', name: 'Dewglass Orchard', icon: '🍏', cluster: 'verdant_wilds', theme: 'orchards where crystal fruit stores memory echoes' },
    { id: 'frontier_hollowfern_den', name: 'Hollowfern Den', icon: '🦌', cluster: 'verdant_wilds', theme: 'wildkin gathering dens beneath giant ferns' },

    { id: 'frontier_cinderbreak_ridge', name: 'Cinderbreak Ridge', icon: '🔥', cluster: 'shattered_frontier', theme: 'rift ridges fractured by repeating firestorms' },
    { id: 'frontier_obsidian_mile', name: 'Obsidian Mile', icon: '🪨', cluster: 'shattered_frontier', theme: 'blackglass highways patrolled by mercenary bands' },
    { id: 'frontier_thunderbone_quarry', name: 'Thunderbone Quarry', icon: '⛏️', cluster: 'shattered_frontier', theme: 'quarries where fossilized leviathan bones hum' },
    { id: 'frontier_ashbarrow_cut', name: 'Ashbarrow Cut', icon: '🗿', cluster: 'shattered_frontier', theme: 'funeral roads sealed under drifting ash' },
    { id: 'frontier_slagwind_falls', name: 'Slagwind Falls', icon: '🌋', cluster: 'shattered_frontier', theme: 'molten cataracts forging weapons in open air' },
    { id: 'frontier_redglass_fissure', name: 'Redglass Fissure', icon: '🟥', cluster: 'shattered_frontier', theme: 'crimson fault-lines pulsing with corrupted mana' },
    { id: 'frontier_basalt_reach', name: 'Basalt Reach', icon: '🏞️', cluster: 'shattered_frontier', theme: 'columned badlands with hidden siege vaults' },
    { id: 'frontier_emberdrift_pit', name: 'Emberdrift Pit', icon: '🔥', cluster: 'shattered_frontier', theme: 'collapsed pits emitting prophetic smoke plumes' },
    { id: 'frontier_blackflare_badlands', name: 'Blackflare Badlands', icon: '⚡', cluster: 'shattered_frontier', theme: 'storm-scoured flats lit by black lightning' },
    { id: 'frontier_molten_crown_crater', name: 'Molten Crown Crater', icon: '👑', cluster: 'shattered_frontier', theme: 'impact crater tied to Crown-shard disturbances' },

    { id: 'frontier_tidewrack_harbor', name: 'Tidewrack Harbor', icon: '⚓', cluster: 'coastal_veil', theme: 'storm-broken docks ruled by salvage guilds' },
    { id: 'frontier_moonwake_inlet', name: 'Moonwake Inlet', icon: '🌙', cluster: 'coastal_veil', theme: 'night-tide inlets revealing hidden channels' },
    { id: 'frontier_sirens_rest', name: 'Siren\'s Rest', icon: '🎶', cluster: 'coastal_veil', theme: 'reef sanctuaries where songs alter sea routes' },
    { id: 'frontier_brineglass_reef', name: 'Brineglass Reef', icon: '🪸', cluster: 'coastal_veil', theme: 'glass reefs sheltering contraband vaults' },
    { id: 'frontier_stormlantern_point', name: 'Stormlantern Point', icon: '🏮', cluster: 'coastal_veil', theme: 'signal towers coordinating blackout fleets' },
    { id: 'frontier_kelpwarden_stride', name: 'Kelpwarden Stride', icon: '🌊', cluster: 'coastal_veil', theme: 'tidal roads defended by kelp-bound wardens' },
    { id: 'frontier_whisperbay_grotto', name: 'Whisperbay Grotto', icon: '🦪', cluster: 'coastal_veil', theme: 'caves where echoes map submerged ruins' },
    { id: 'frontier_dawnbreaker_jetty', name: 'Dawnbreaker Jetty', icon: '🌅', cluster: 'coastal_veil', theme: 'military piers staging dawn interception raids' },
    { id: 'frontier_shellspire_isle', name: 'Shellspire Isle', icon: '🏝️', cluster: 'coastal_veil', theme: 'isolated island spires guarded by shell golems' },
    { id: 'frontier_lanterns_end', name: 'Lantern\'s End', icon: '🕯️', cluster: 'coastal_veil', theme: 'graveyard harbor where lost fleets reappear' },

    { id: 'frontier_runescar_plateau', name: 'Runescar Plateau', icon: '🔮', cluster: 'high_arcana', theme: 'plateaus etched with unstable battle-runes' },
    { id: 'frontier_mirrored_atrium', name: 'Mirrored Atrium', icon: '🪞', cluster: 'high_arcana', theme: 'reflective halls duplicating spell effects' },
    { id: 'frontier_aetherloom_sanctum', name: 'Aetherloom Sanctum', icon: '✨', cluster: 'high_arcana', theme: 'sanctums weaving leyline strands into wards' },
    { id: 'frontier_glyphwatch_observatory', name: 'Glyphwatch Observatory', icon: '🔭', cluster: 'high_arcana', theme: 'observatories tracking shard resonance storms' },
    { id: 'frontier_prismvault_gallery', name: 'Prismvault Gallery', icon: '💎', cluster: 'high_arcana', theme: 'vault galleries refracting memory projections' },
    { id: 'frontier_oathfire_citadel', name: 'Oathfire Citadel', icon: '🏯', cluster: 'high_arcana', theme: 'citadel courts where oath-magic binds factions' },
    { id: 'frontier_chronicle_terrace', name: 'Chronicle Terrace', icon: '📜', cluster: 'high_arcana', theme: 'scriptorium terraces preserving war annals' },
    { id: 'frontier_starlit_reservoir', name: 'Starlit Reservoir', icon: '🌠', cluster: 'high_arcana', theme: 'mana reservoirs filled by starfall runoff' },
    { id: 'frontier_nullstone_labyrinth', name: 'Nullstone Labyrinth', icon: '🧩', cluster: 'high_arcana', theme: 'anti-magic maze chambers with shifting geometry' },
    { id: 'frontier_crownward_threshold', name: 'Crownward Threshold', icon: '👑', cluster: 'high_arcana', theme: 'sealed threshold where Crown wards can be reforged' },

    { id: 'frontier_ashvein_tunnels', name: 'Ashvein Tunnels', icon: '⛏️', cluster: 'sunken_depths', theme: 'mineral-rich mine shafts laced with petrified shard-dust' },
    { id: 'frontier_rootcore_chasm', name: 'Rootcore Chasm', icon: '🪨', cluster: 'sunken_depths', theme: 'deep rift where ancient root-systems drink from ley-pools' },
    { id: 'frontier_blackwater_grotto', name: 'Blackwater Grotto', icon: '🖤', cluster: 'sunken_depths', theme: 'submerged cavern networks haunted by echo-wraiths' },
    { id: 'frontier_crystalbone_vault', name: 'Crystalbone Vault', icon: '💎', cluster: 'sunken_depths', theme: 'ossified chambers where crystal growths encase old soldiers' },
    { id: 'frontier_duskstone_passage', name: 'Duskstone Passage', icon: '🌘', cluster: 'sunken_depths', theme: 'lightless corridors connecting sunken citadels to the surface' },
    { id: 'frontier_veinfire_hollow', name: 'Veinfire Hollow', icon: '🔥', cluster: 'sunken_depths', theme: 'geothermal pockets where molten conduits power old ward-engines' },
    { id: 'frontier_saltpyre_depths', name: 'Saltpyre Depths', icon: '🧂', cluster: 'sunken_depths', theme: 'salt-encrusted lower mines once used for long-term siege storage' },
    { id: 'frontier_ironmarrow_pit', name: 'Ironmarrow Pit', icon: '⚙️', cluster: 'sunken_depths', theme: 'abandoned forge pits where iron automata still patrol' },
    { id: 'frontier_underwatch_station', name: 'Underwatch Station', icon: '👁️', cluster: 'sunken_depths', theme: 'deep sentinel posts monitoring seismic shard disturbances' },
    { id: 'frontier_shatterstone_descent', name: 'Shatterstone Descent', icon: '🪜', cluster: 'sunken_depths', theme: 'collapsed stairways leading to a pre-Crown ruin complex' },

    { id: 'frontier_bonedrift_flats', name: 'Bonedrift Flats', icon: '💀', cluster: 'forsaken_plains', theme: 'salt flats strewn with the remnants of a cursed army\'s march' },
    { id: 'frontier_wraithwind_moor', name: 'Wraithwind Moor', icon: '🌬️', cluster: 'forsaken_plains', theme: 'windswept moors where soul-winds carry unfinished last words' },
    { id: 'frontier_ashfield_expanse', name: 'Ashfield Expanse', icon: '🌫️', cluster: 'forsaken_plains', theme: 'grey plains where a catastrophic battle left permanent scorch-marks' },
    { id: 'frontier_hexcairn_circle', name: 'Hexcairn Circle', icon: '🗿', cluster: 'forsaken_plains', theme: 'standing stones arranged in curse-binding configurations' },
    { id: 'frontier_blightroot_basin', name: 'Blightroot Basin', icon: '☠️', cluster: 'forsaken_plains', theme: 'poisoned basin where corrupted soil resists all restoration' },
    { id: 'frontier_greymarsh_hollow', name: 'Greymarsh Hollow', icon: '🌧️', cluster: 'forsaken_plains', theme: 'perpetually rain-soaked hollow sheltering outcast communities' },
    { id: 'frontier_deadwatch_keep', name: 'Deadwatch Keep', icon: '🏰', cluster: 'forsaken_plains', theme: 'crumbling keep where undead sentinels await orders that never came' },
    { id: 'frontier_silentbell_village', name: 'Silentbell Village', icon: '🔔', cluster: 'forsaken_plains', theme: 'abandoned settlement frozen in mid-evacuation by a curse' },
    { id: 'frontier_dustshroud_crossing', name: 'Dustshroud Crossing', icon: '🏜️', cluster: 'forsaken_plains', theme: 'dust-storm corridor where supply caravans disappear without trace' },
    { id: 'frontier_sorrow_reach', name: 'Sorrow Reach', icon: '🕯️', cluster: 'forsaken_plains', theme: 'memorial road lit by ghost-lanterns honoring those lost in the Sundering' },

    { id: 'frontier_duskbloom_glade', name: 'Duskbloom Glade', icon: '🌙', cluster: 'twilight_reaches', theme: 'bioluminescent groves that only bloom under moonlight' },
    { id: 'frontier_veilshard_crossing', name: 'Veilshard Crossing', icon: '🔮', cluster: 'twilight_reaches', theme: 'planar fault lines where the veil thins at dusk' },
    { id: 'frontier_starweave_ridge', name: 'Starweave Ridge', icon: '🌟', cluster: 'twilight_reaches', theme: 'ridgelines where starfall patterns encode lost navigation charts' },
    { id: 'frontier_shadowvane_spire', name: 'Shadowvane Spire', icon: '🗼', cluster: 'twilight_reaches', theme: 'night-watching tower that casts shadows predicting enemy routes' },
    { id: 'frontier_nightblood_falls', name: 'Nightblood Falls', icon: '🌑', cluster: 'twilight_reaches', theme: 'dark waterfall whose flow reverses when the Crown is disturbed' },
    { id: 'frontier_gloomhaven_archive', name: 'Gloomhaven Archive', icon: '📚', cluster: 'twilight_reaches', theme: 'ink-black library preserving forbidden ward-dissolution techniques' },
    { id: 'frontier_eclipse_plateau', name: 'Eclipse Plateau', icon: '☀️', cluster: 'twilight_reaches', theme: 'high plateau where permanent partial eclipse reveals hidden glyphs' },
    { id: 'frontier_dawnveil_sanctum', name: 'Dawnveil Sanctum', icon: '🌅', cluster: 'twilight_reaches', theme: 'dawn-lit sanctuary where twilight-cursed souls seek restoration' },
    { id: 'frontier_halfmoon_bastion', name: 'Halfmoon Bastion', icon: '🌗', cluster: 'twilight_reaches', theme: 'crescent-shaped fortress used as a lunar-cycle observation post' },
    { id: 'frontier_whispernight_vale', name: 'Whispernight Vale', icon: '🌌', cluster: 'twilight_reaches', theme: 'valley that falls supernaturally silent each night, hiding old war councils' },

    { id: 'frontier_sunstone_amphitheatre', name: 'Sunstone Amphitheatre', icon: '🏛️', cluster: 'ancient_heartlands', theme: 'open-air arena where ancient faction tribunals once settled disputes' },
    { id: 'frontier_verdant_citadel', name: 'Verdant Citadel', icon: '🏯', cluster: 'ancient_heartlands', theme: 'vine-wrapped citadel maintained as a diplomatic neutral ground' },
    { id: 'frontier_goldvein_aqueduct', name: 'Goldvein Aqueduct', icon: '💧', cluster: 'ancient_heartlands', theme: 'ancient water channels encoding Crown-era territorial agreements' },
    { id: 'frontier_ashpath_monument', name: 'Ashpath Monument', icon: '🗽', cluster: 'ancient_heartlands', theme: 'towering memorial marking the original boundary of the realm' },
    { id: 'frontier_rootpillar_shrine', name: 'Rootpillar Shrine', icon: '🌳', cluster: 'ancient_heartlands', theme: 'living-wood shrine tended by the last surviving elder-grove keepers' },
    { id: 'frontier_emberhearth_village', name: 'Emberhearth Village', icon: '🏘️', cluster: 'ancient_heartlands', theme: 'founding village whose unbroken lineage holds pre-Sundering records' },
    { id: 'frontier_stonewarden_barracks', name: 'Stonewarden Barracks', icon: '⚔️', cluster: 'ancient_heartlands', theme: 'original Crown guard barracks repurposed by resistance scouts' },
    { id: 'frontier_covenant_crossroads', name: 'Covenant Crossroads', icon: '⛩️', cluster: 'ancient_heartlands', theme: 'ceremonial junction where four old faction roads still converge' },
    { id: 'frontier_eldermark_vault', name: 'Eldermark Vault', icon: '🔑', cluster: 'ancient_heartlands', theme: 'sealed treasury holding originals of the Crown\'s founding compacts' },
    { id: 'frontier_hearthstone_plaza', name: 'Hearthstone Plaza', icon: '🪨', cluster: 'ancient_heartlands', theme: 'market plaza whose cornerstone radiates residual binding-magic' },

    { id: 'frontier_stormwall_gate', name: 'Stormwall Gate', icon: '⛈️', cluster: 'storm_peaks', theme: 'storm-lashed gatehouse controlling the sole pass through the high peaks' },
    { id: 'frontier_thundercleft_bridge', name: 'Thundercleft Bridge', icon: '⚡', cluster: 'storm_peaks', theme: 'lightning-struck stone bridge crackling with trapped storm-energy' },
    { id: 'frontier_galewatch_outpost', name: 'Galewatch Outpost', icon: '🌪️', cluster: 'storm_peaks', theme: 'weather-station outpost tracking shard-storm migration patterns' },
    { id: 'frontier_strikecrown_summit', name: 'Strikecrown Summit', icon: '🏔️', cluster: 'storm_peaks', theme: 'peak where lightning perpetually crowns a buried ward-anchor' },
    { id: 'frontier_cloudspire_roost', name: 'Cloudspire Roost', icon: '🦅', cluster: 'storm_peaks', theme: 'storm-eagle nesting spires used as aerial scout relay stations' },
    { id: 'frontier_howling_col', name: 'Howling Col', icon: '🌬️', cluster: 'storm_peaks', theme: 'wind-funnel col whose acoustics carry messages across the range' },
    { id: 'frontier_frostfire_ridge', name: 'Frostfire Ridge', icon: '❄️', cluster: 'storm_peaks', theme: 'ridge where ice storms and volcanic vents collide into unstable terrain' },
    { id: 'frontier_boltstone_quarry', name: 'Boltstone Quarry', icon: '🪨', cluster: 'storm_peaks', theme: 'quarry of lightning-fused stone prized for ward-construction' },
    { id: 'frontier_stormcaller_shrine', name: 'Stormcaller Shrine', icon: '🙏', cluster: 'storm_peaks', theme: 'mountain shrine where weather-mages once petitioned storm-spirits' },
    { id: 'frontier_cloudbreach_descent', name: 'Cloudbreach Descent', icon: '🌩️', cluster: 'storm_peaks', theme: 'steep descent through permanent cloud cover hiding a lost supply cache' }
  ];

  FRONTIER_LOCATIONS.forEach((location) => {
    LOCATIONS[location.id] = { name: location.name, icon: location.icon, discovered: false };
  });

  const BATCH004_LEGEND_MAX_CLUES = 3;
  const completeBatch004LegendPartIX = (state) => {
    state.flags.batch004_legend_part_ix_complete = true;
    LOCATIONS.cryptward_depths.discovered = true;
  };
  const BATCH005_LEGEND_MAX_CLUES = 3;
  const completeBatch005LegendPartVI = (state) => {
    state.flags.batch005_legend_part_vi_complete = true;
    LOCATIONS.thornvale_hinterlands.discovered = true;
  };

  // ==================== SCENES ====================
  const SCENES = {

    // ===== TITLE & INTRO =====
    title: {
      text: '',
      customRender: 'title_screen',
      background: 'linear-gradient(135deg, #0a0a2e 0%, #1a0a2e 50%, #0a1a2e 100%)',
      choices: [
        { text: '⚔️ Begin Your Quest', next: 'intro_1' },
        { text: '📖 How to Play', next: 'how_to_play' }
      ],
      hideStats: true
    },

    how_to_play: {
      text: `<p><strong class="story-emphasis">How to Play</strong></p>
<p>Welcome, adventurer! This is an interactive story where your choices shape the tale.</p>
<p>• <strong>Read</strong> the story text carefully — clues are hidden within.</p>
<p>• <strong>Choose</strong> your actions wisely. Some paths are dangerous, others reward cunning.</p>
<p>• <strong>Manage</strong> your health, mana, gold, and inventory using the buttons above.</p>
<p>• <strong>Fight</strong> enemies in turn-based combat. Use potions and spells to gain advantage.</p>
<p>• <strong>Collect</strong> the five Crown Shards to unlock the final chapter.</p>
<p>• Some choices require specific items or stats. Look for the hints!</p>`,
      background: 'linear-gradient(135deg, #0a0a2e 0%, #1a0a2e 50%, #0a1a2e 100%)',
      choices: [
        { text: '← Back to Title', next: 'title' }
      ],
      hideStats: true
    },

    intro_1: {
      text: `<p>The rain has not stopped for three days.</p>
<p>You crouch beneath the half-collapsed eave of an old watchtower, your ranger's cloak soaked through, listening to the downpour hammer the Thornvale road. Once, this was the safest stretch in Eldermoor. Now the darkness has changed things.</p>
<p>Since the <span class="story-emphasis">Crown of Dawn</span> was shattered six moons ago, the protective wards that kept monsters at bay have failed one by one. Villages burn. Roads are haunted. The king is dead — or worse.</p>
<p>You left the King's Watch when there was no king left to watch for. Now you survive, like everyone else, one day at a time.</p>
<p>A sound cuts through the rain. A horse — galloping hard, and a voice crying out.</p>`,
      background: 'linear-gradient(180deg, #1a1a2e 0%, #2d1b3d 100%)',
      choices: [
        { text: 'Step out onto the road to investigate', next: 'intro_2' },
        { text: 'Stay hidden and observe first', next: 'intro_2_cautious' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale';
        state.flags.game_started = true;
      }
    },

    intro_2: {
      text: `<p>You push out into the downpour, hand on your sword hilt. Through the curtain of rain, a horse stumbles toward you — riderless now. Its saddle is slick with blood.</p>
<p>Twenty paces back, a figure lies crumpled in the mud. A man in a courier's uniform, bearing the broken seal of the royal house. He's been run through — goblin arrows, by the look of it.</p>
<p>He sees you approach and reaches out with trembling fingers. <span class="story-dialogue">"Ranger... please..."</span> His voice is barely a whisper. <span class="story-dialogue">"Take it. The shard. Don't let them... have it..."</span></p>
<p>He presses something into your hand: a fragment of crystal that blazes with warm golden light. A <span class="story-emphasis">shard of the Crown of Dawn</span>.</p>
<p>Then the messenger goes still.</p>`,
      background: 'linear-gradient(180deg, #1a1a2e 0%, #2d1b3d 100%)',
      choices: [
        { text: 'Search the messenger for any other clues', next: 'intro_3_search' },
        { text: 'Take the shard and move quickly — his killers may be near', next: 'intro_3_flee' }
      ],
      onEnter: (state) => {
        state.inventory.push('shard_messenger');
        state.inventory.push('rusty_sword');
        state.inventory.push('leather_armor');
        state.flags.shard_count = 1;
      }
    },

    intro_2_cautious: {
      text: `<p>Ranger instincts keep you in the shadows. You press against the wet stone and watch.</p>
<p>A horse comes thundering down the road, then skids to a halt, riderless. Behind it, a man in a courier's uniform collapses face-first into the mud. Three goblin arrows protrude from his back.</p>
<p>You scan the treeline. Nothing moves — the attackers have fled, or are biding their time. After a long minute, you slip out to the fallen man.</p>
<p>He's still breathing, barely. His eyes find yours. <span class="story-dialogue">"You... ranger? Take this..."</span> He forces something into your hand — a crystal fragment blazing with warm golden light. <span class="story-dialogue">"Crown shard... they're after it... five pieces... save the realm..."</span></p>
<p>His eyes go glassy. He's gone. But your caution has given you a moment — you hear rustling in the trees. The goblins are coming back.</p>`,
      background: 'linear-gradient(180deg, #1a1a2e 0%, #2d1b3d 100%)',
      choices: [
        { text: 'Quickly search the messenger before fleeing', next: 'intro_3_search_fast' },
        { text: 'Take the shard and vanish into the night', next: 'intro_3_flee' }
      ],
      onEnter: (state) => {
        state.inventory.push('shard_messenger');
        state.inventory.push('rusty_sword');
        state.inventory.push('leather_armor');
        state.flags.shard_count = 1;
        state.flags.cautious_intro = true;
      }
    },

    intro_3_search: {
      text: `<p>You kneel beside the messenger and search his satchel with practiced hands. Inside you find:</p>
<p>• A <span class="story-emphasis">weathered map</span> showing five locations marked with golden ink</p>
<p>• A handful of coins — <span class="story-action">+15 gold</span></p>
<p>• A small <span class="story-emphasis">health potion</span></p>
<p>The map shows the kingdom of Eldermoor with five stars drawn upon it — the locations of the other Crown shards. The messenger was trying to bring this to someone. Now that someone is you.</p>
<p>In the distance, you hear guttural shouts. Goblins. They've tracked the messenger this far, and they'll be on you soon.</p>
<p>You pocket everything and rise. Thornvale Village lies an hour's walk south. You should find allies there — or at least a warm fire and information.</p>`,
      background: 'linear-gradient(180deg, #1a1a2e 0%, #2d1b3d 100%)',
      choices: [
        { text: 'Head to Thornvale Village', next: 'thornvale_arrive' }
      ],
      onEnter: (state) => {
        state.inventory.push('old_map');
        state.inventory.push('health_potion');
        state.gold += 15;
        state.flags.has_map = true;
      }
    },

    intro_3_search_fast: {
      text: `<p>Moving quickly, you rifle through the messenger's satchel. Your fingers close around a <span class="story-emphasis">weathered map</span> and a pouch of coins — <span class="story-action">+10 gold</span>.</p>
<p>The goblins burst from the treeline — four of them, crude weapons raised. But you're already moving, slipping between the trees with a ranger's silent grace. They never even see you leave.</p>
<p>By the time you stop to catch your breath, the rain has softened to a drizzle. You examine the map by moonlight: five locations marked with golden stars. The Crown shards.</p>
<p>Thornvale Village lies nearby. A place to rest and plan your next move.</p>`,
      background: 'linear-gradient(180deg, #1a1a2e 0%, #2d1b3d 100%)',
      choices: [
        { text: 'Head to Thornvale Village', next: 'thornvale_arrive' }
      ],
      onEnter: (state) => {
        state.inventory.push('old_map');
        state.gold += 10;
        state.flags.has_map = true;
      }
    },

    intro_3_flee: {
      text: `<p>No time to linger. You clutch the shard and melt into the darkness with practiced ease, leaving the dead courier to the rain.</p>
<p>The crystal throbs with warmth in your palm, its golden light dimming as if it senses the danger. You wrap it in cloth and tuck it away.</p>
<p>One shard of five. The dying man spoke of saving the realm. You've been trying not to care about realms since the Watch disbanded, but there's a familiar weight settling on your shoulders — duty, calling again.</p>
<p>Through the drizzle, you spot the distant lights of Thornvale Village. A warm fire, perhaps some answers.</p>`,
      background: 'linear-gradient(180deg, #1a1a2e 0%, #2d1b3d 100%)',
      choices: [
        { text: 'Head to Thornvale Village', next: 'thornvale_arrive' }
      ]
    },

    // ===== THORNVALE VILLAGE =====
    thornvale_arrive: {
      text: `<p>Thornvale is a shadow of what it was. Half the buildings are shuttered, and the streets are empty save for a nervous-looking night patrol. But the tavern — <span class="story-emphasis">The Broken Antler</span> — still has warm light spilling from its windows.</p>
<p>The village square has a few points of interest:</p>
<p>• The <strong>tavern</strong> — for information and rest</p>
<p>• The <strong>blacksmith's shop</strong> — Durgan the smith still keeps his forge hot</p>
<p>• The <strong>village elder's house</strong> — Elder Mira knows the old stories</p>`,
      background: 'linear-gradient(180deg, #1a2a1a 0%, #0a1a0a 100%)',
      choices: [
        { text: '🍺 Enter The Broken Antler tavern', next: 'tavern' },
        { text: '🔨 Visit the blacksmith', next: 'blacksmith' },
        { text: '🏠 Seek out Elder Mira', next: 'elder_mira' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale';
        LOCATIONS.thornvale.discovered = true;
      }
    },

    tavern: {
      text: `<p>The Broken Antler is crowded with refugees and locals nursing cheap ale. The warmth of the fire is immediate relief. The barkeep, a stout woman named <span class="story-emphasis">Hilda</span>, eyes you from behind the counter.</p>
<p><span class="story-dialogue">"Ranger, eh? Haven't seen one of your lot in months. Sit down, I'll pour you something."</span></p>
<p>As you settle at the bar, you notice a hooded figure in the corner watching you intently. At another table, a group of rough-looking men are arguing over a map.</p>`,
      background: 'linear-gradient(180deg, #2a1a0a 0%, #1a0a00 100%)',
      choices: [
        { text: 'Talk to Hilda about the state of things', next: 'tavern_hilda' },
        { text: 'Approach the hooded figure', next: 'tavern_hooded' },
        { text: 'Eavesdrop on the arguing men', next: 'tavern_men' },
        { text: '← Return to the village square', next: 'thornvale_arrive' }
      ]
    },

    tavern_hilda: {
      text: `<p>Hilda pours you an ale and leans in. <span class="story-dialogue">"Things are bad and getting worse. Goblins from the north, wolves from the woods, and last week something big flew over the mountains. A drake, maybe worse."</span></p>
<p>She glances around, then lowers her voice. <span class="story-dialogue">"The old mage at the crossroads — Fenwick — he says the Crown of Dawn could be reforged if someone found all five pieces. Most folk think that's fairy tales. But you're carrying something, aren't you? I can see the light through your pack."</span></p>
<p>She slides you a <span class="story-emphasis">health potion</span>. <span class="story-dialogue">"On the house. If you're fool enough to go looking for the other shards, you'll need it. Talk to Elder Mira — she knows the old paths."</span></p>`,
      background: 'linear-gradient(180deg, #2a1a0a 0%, #1a0a00 100%)',
      choices: [
        { text: 'Ask about the hooded figure', next: 'tavern_hooded_info' },
        { text: 'Thank her and return to the square', next: 'thornvale_arrive' },
        { text: '🏠 Go see Elder Mira', next: 'elder_mira' }
      ],
      onEnter: (state) => {
        if (!state.flags.hilda_potion) {
          state.inventory.push('health_potion');
          state.flags.hilda_potion = true;
        }
      }
    },

    tavern_hooded_info: {
      text: `<p>Hilda glances at the corner. <span class="story-dialogue">"That one? Showed up two days ago. Doesn't talk to anyone, orders water, tips well. I think she's waiting for someone. Or watching."</span></p>
<p>She shrugs. <span class="story-dialogue">"Not my business. But if you want to talk to her, be polite. She's got a sword under that cloak."</span></p>`,
      background: 'linear-gradient(180deg, #2a1a0a 0%, #1a0a00 100%)',
      choices: [
        { text: 'Approach the hooded figure', next: 'tavern_hooded' },
        { text: '← Return to village square', next: 'thornvale_arrive' }
      ]
    },

    tavern_hooded: {
      text: `<p>You approach the hooded figure's table. Up close, you can see she's a young woman with sharp green eyes and a thin scar across her jaw. She watches you sit down without invitation.</p>
<p><span class="story-dialogue">"Kael of the King's Watch,"</span> she says. It's not a question. <span class="story-dialogue">"My name is <span class="story-emphasis">Lyra</span>. I've been looking for someone like you."</span></p>
<p>She pulls back her cloak to reveal an insignia — the broken crown symbol of the Loyalist resistance. <span class="story-dialogue">"The queen still lives, hidden in the north. She sent me south to find the Crown shards before Malachar's agents do. I see you already have one."</span></p>
<p>She fixes you with a steady gaze. <span class="story-dialogue">"I'm good with a blade, and I know the roads. Let me come with you."</span></p>`,
      background: 'linear-gradient(180deg, #2a1a0a 0%, #1a0a00 100%)',
      choices: [
        { text: '"Welcome aboard, Lyra." (Gain a companion)', next: 'lyra_joins' },
        { text: '"I work alone. But I\'ll take any information you have."', next: 'lyra_info_only' },
        { text: '"How do I know you\'re not one of Malachar\'s spies?"', next: 'lyra_trust' }
      ]
    },

    lyra_joins: {
      text: `<p>Lyra allows herself a brief smile. <span class="story-dialogue">"Smart choice. Two blades are better than one on these roads."</span></p>
<p>She pulls out her own map and compares it with what you know. <span class="story-dialogue">"The nearest shard is in the <span class="story-emphasis">Whispering Woods</span> — guarded by something dark that's taken root in the old grove. The second is in the <span class="story-emphasis">Ancient Crypt</span> beneath Hollowreach. After that... the mountain, and the fallen city."</span></p>
<p>She stands, adjusting her sword belt. <span class="story-dialogue">"Rest tonight. We leave at dawn."</span></p>
<p><span class="story-action">Lyra has joined your party! (+3 Attack in combat)</span></p>`,
      background: 'linear-gradient(180deg, #2a1a0a 0%, #1a0a00 100%)',
      choices: [
        { text: 'Rest at the tavern, then prepare to leave', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.flags.lyra_companion = true;
        state.stats.attack += 3;
        LOCATIONS.whispering_woods.discovered = true;
        LOCATIONS.ancient_crypt.discovered = true;
        LOCATIONS.crossroads.discovered = true;
      }
    },

    lyra_trust: {
      text: `<p>Lyra doesn't flinch. She pulls a ring from her finger and sets it on the table — it bears the personal seal of Queen Isolde, unmistakable to anyone who served the Crown.</p>
<p><span class="story-dialogue">"Because I carry this. And because Malachar's agents wouldn't bother talking to you — they'd just put an arrow in your back."</span></p>
<p>Fair point. You nod slowly.</p>`,
      background: 'linear-gradient(180deg, #2a1a0a 0%, #1a0a00 100%)',
      choices: [
        { text: '"Alright. You\'re in." (Gain a companion)', next: 'lyra_joins' },
        { text: '"I appreciate the proof. But I still work alone."', next: 'lyra_info_only' }
      ]
    },

    lyra_info_only: {
      text: `<p>Lyra's expression flickers — disappointment, quickly masked. <span class="story-dialogue">"Your choice, ranger. But take this."</span></p>
<p>She slides a folded piece of parchment across the table — notes on the locations of two shards: the <span class="story-emphasis">Whispering Woods</span> and the <span class="story-emphasis">Ancient Crypt</span>.</p>
<p><span class="story-dialogue">"If you change your mind, I'll be heading to the Crossroads. Find me there."</span></p>
<p>She drops a coin on the table and melts into the crowd.</p>`,
      background: 'linear-gradient(180deg, #2a1a0a 0%, #1a0a00 100%)',
      choices: [
        { text: 'Return to the village square to prepare', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.flags.lyra_at_crossroads = true;
        LOCATIONS.whispering_woods.discovered = true;
        LOCATIONS.ancient_crypt.discovered = true;
        LOCATIONS.crossroads.discovered = true;
      }
    },

    tavern_men: {
      text: `<p>You settle at a nearby table and pretend to nurse your ale while listening. The men are mercenaries — or bandits, hard to tell the difference these days.</p>
<p><span class="story-dialogue">"...telling you, the crypt is full of gold. The old kings were buried with their treasures."</span></p>
<p><span class="story-dialogue">"And the dead walk down there now, you fool. Since the Crown broke, nothing stays dead."</span></p>
<p><span class="story-dialogue">"So we go armed and careful. In and out. Split the take four ways."</span></p>
<p>Interesting. The <span class="story-emphasis">Ancient Crypt</span> beneath Hollowreach — you've heard of it. If a Crown shard is there, these men might lead you to it... or get in your way.</p>`,
      background: 'linear-gradient(180deg, #2a1a0a 0%, #1a0a00 100%)',
      choices: [
        { text: 'Offer to join their expedition', next: 'tavern_men_join' },
        { text: 'Note the information and leave quietly', next: 'thornvale_arrive' }
      ],
      onEnter: (state) => {
        LOCATIONS.ancient_crypt.discovered = true;
        state.flags.heard_mercs = true;
      }
    },

    tavern_men_join: {
      text: `<p>You pull up a chair. The men tense until they see your ranger's cloak.</p>
<p><span class="story-dialogue">"A ranger? Hah. Thought you lot all ran when the king died."</span> The leader, a scarred man named <span class="story-emphasis">Brick</span>, sizes you up. <span class="story-dialogue">"But you look useful enough. Fine — five-way split, you watch our backs in the dark. Deal?"</span></p>
<p>You shake on it. They'll be useful muscle, even if you don't trust them further than you can throw them.</p>
<p><span class="story-action">Noted: The mercenaries will meet you at the Ancient Crypt entrance.</span></p>`,
      background: 'linear-gradient(180deg, #2a1a0a 0%, #1a0a00 100%)',
      choices: [
        { text: 'Return to the village square to prepare', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.flags.merc_alliance = true;
      }
    },

    blacksmith: {
      text: `<p>Durgan's forge glows red in the night. The old dwarf (yes, a dwarf — one of the few remaining in Eldermoor) hammers at a horseshoe with mechanical precision.</p>
<p><span class="story-dialogue">"Eh? Customer? Been a while."</span> He squints at you. <span class="story-dialogue">"Ranger gear. Battered. You need better steel if you're heading into the wilds."</span></p>
<p>He gestures to his wares:</p>
<p>• <span class="story-emphasis">Iron Sword</span> — 25 gold (Attack +6)</p>
<p>• <span class="story-emphasis">Chainmail</span> — 30 gold (Defense +6)</p>
<p>• <span class="story-emphasis">Health Potion</span> — 10 gold</p>
<p>• <span class="story-emphasis">Rope</span> — 5 gold</p>`,
      background: 'linear-gradient(180deg, #2a1a0a 0%, #1a0a00 100%)',
      choices: [
        {
          text: 'Buy Iron Sword (25 gold)',
          next: 'blacksmith_bought',
          condition: (state) => state.gold >= 25 && !state.inventory.includes('iron_sword'),
          requirementText: 'Requires 25 gold',
          onSelect: (state) => { state.gold -= 25; state.inventory.push('iron_sword'); }
        },
        {
          text: 'Buy Chainmail (30 gold)',
          next: 'blacksmith_bought',
          condition: (state) => state.gold >= 30 && !state.inventory.includes('chainmail'),
          requirementText: 'Requires 30 gold',
          onSelect: (state) => { state.gold -= 30; state.inventory.push('chainmail'); }
        },
        {
          text: 'Buy Health Potion (10 gold)',
          next: 'blacksmith_bought',
          condition: (state) => state.gold >= 10,
          requirementText: 'Requires 10 gold',
          onSelect: (state) => { state.gold -= 10; state.inventory.push('health_potion'); }
        },
        {
          text: 'Buy Rope (5 gold)',
          next: 'blacksmith_bought',
          condition: (state) => state.gold >= 5 && !state.inventory.includes('rope'),
          requirementText: 'Requires 5 gold',
          onSelect: (state) => { state.gold -= 5; state.inventory.push('rope'); }
        },
        { text: '← Return to village square', next: 'thornvale_arrive' }
      ]
    },

    blacksmith_bought: {
      text: `<p>Durgan nods approvingly as gold changes hands. <span class="story-dialogue">"Good choice. That'll serve you well."</span></p>
<p>He leans on his hammer. <span class="story-dialogue">"Word of advice, ranger — if you find anything <em>special</em> out there, bring it to me. I'm one of the few smiths left who can work with enchanted metal. Might be able to help you, for the right materials."</span></p>`,
      background: 'linear-gradient(180deg, #2a1a0a 0%, #1a0a00 100%)',
      choices: [
        { text: 'Browse more wares', next: 'blacksmith' },
        { text: '← Return to village square', next: 'thornvale_arrive' }
      ]
    },

    elder_mira: {
      text: `<p>Elder Mira's cottage is modest but warm, filled with the scent of dried herbs. The old woman sits by a low fire, wrapped in shawls. Despite her frail appearance, her eyes are knife-sharp.</p>
<p><span class="story-dialogue">"I felt you coming, ranger. Or rather, I felt <em>it</em>."</span> She gestures to your pack. <span class="story-dialogue">"A shard of the Crown. So the old prophecy stirs at last."</span></p>
<p>She pours you tea and speaks: <span class="story-dialogue">"Five shards, five trials. The Crown was broken by dark magic, and only by gathering all five pieces can it be reforged at the Forge of Dawn — hidden beneath the ruins of Auralis."</span></p>
<p><span class="story-dialogue">"But beware: Malachar knows the shards call to each other. He will send his servants to stop you."</span></p>`,
      background: 'linear-gradient(180deg, #1a1a0a 0%, #0a0a00 100%)',
      choices: [
        { text: '"Where should I look first?"', next: 'elder_advice' },
        { text: '"Who is Malachar, really?"', next: 'elder_malachar' },
        { text: '"Thank you. I should prepare to leave."', next: 'thornvale_prepare' }
      ]
    },

    elder_advice: {
      text: `<p>Mira unfolds a cloth embroidered with a map of the old kingdom. <span class="story-dialogue">"The shards were drawn to places of power when they scattered."</span></p>
<p><span class="story-dialogue">"One lies in the <span class="story-emphasis">Whispering Woods</span>, in the sacred grove — now corrupted by dark magic. The forest witch, Elara, may yet live there. Seek her help."</span></p>
<p><span class="story-dialogue">"Another rests in the <span class="story-emphasis">Ancient Crypt</span> beneath Hollowreach, among the tombs of the old kings."</span></p>
<p><span class="story-dialogue">"A third burns atop <span class="story-emphasis">Stormfang Peak</span>, guarded by the last of the great drakes."</span></p>
<p><span class="story-dialogue">"And the fourth hides in the <span class="story-emphasis">Fallen City of Auralis</span> itself, in the ruins of the palace."</span></p>
<p>She presses a small <span class="story-emphasis">Ring of Warding</span> into your hands. <span class="story-dialogue">"My adventuring days are past. Take this — it will help against dark magic."</span></p>`,
      background: 'linear-gradient(180deg, #1a1a0a 0%, #0a0a00 100%)',
      choices: [
        { text: '"Who is Malachar?"', next: 'elder_malachar' },
        { text: '"Thank you, Elder. I\'ll prepare to leave."', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        if (!state.flags.mira_gift) {
          state.inventory.push('shield_ring');
          state.flags.mira_gift = true;
          LOCATIONS.whispering_woods.discovered = true;
          LOCATIONS.ancient_crypt.discovered = true;
          LOCATIONS.stormfang_peak.discovered = true;
          LOCATIONS.fallen_city.discovered = true;
        }
      }
    },

    elder_malachar: {
      text: `<p>Mira's expression darkens. <span class="story-dialogue">"Malachar was the king's most trusted advisor — the Royal Sorcerer. Brilliant. Ambitious. And ultimately, corrupted."</span></p>
<p><span class="story-dialogue">"He found something in the old texts — a way to draw power from the Crown itself. When King Aldric refused to let him experiment on it, Malachar took matters into his own hands."</span></p>
<p><span class="story-dialogue">"He shattered the Crown in a ritual that killed the king and half the court. The backlash should have killed him too, but he absorbed the dark energy. Now he sits in his tower on the edge of the Void, growing stronger while the realm crumbles."</span></p>
<p><span class="story-dialogue">"He wants the shards to complete his ritual. If he succeeds..."</span> She doesn't finish. She doesn't need to.</p>`,
      background: 'linear-gradient(180deg, #1a1a0a 0%, #0a0a00 100%)',
      choices: [
        { text: '"Where should I look for shards?"', next: 'elder_advice' },
        { text: '"I\'ll stop him. Time to prepare."', next: 'thornvale_prepare' }
      ]
    },

    thornvale_prepare: {
      text: `<p>Dawn breaks grey and cold. You've gathered what you can from Thornvale. The road ahead is dangerous, but every day you wait, Malachar grows stronger.</p>
<p>The map shows several paths from here. Where will you go first?</p>`,
      background: 'linear-gradient(180deg, #1a2a1a 0%, #0a1a0a 100%)',
      choices: [
        {
          text: '🌲 The Whispering Woods — seek the forest shard',
          next: 'woods_entrance',
          condition: () => LOCATIONS.whispering_woods.discovered
        },
        {
          text: '⚰️ The Ancient Crypt — delve for the crypt shard',
          next: 'crypt_entrance',
          condition: () => LOCATIONS.ancient_crypt.discovered
        },
        {
          text: '🏔️ Stormfang Peak — brave the mountain',
          next: 'mountain_entrance',
          condition: (state) => LOCATIONS.stormfang_peak.discovered && state.flags.shard_count >= 2,
          requirementText: 'Requires 2+ shards and knowledge of location'
        },
        {
          text: '🏰 Fallen City of Auralis — explore the ruins',
          next: 'city_entrance',
          condition: (state) => LOCATIONS.fallen_city.discovered && state.flags.shard_count >= 3,
          requirementText: 'Requires 3+ shards and knowledge of location'
        },
        { text: '🧭 Investigate frontier operations (Batch I)', next: 'batch001_hub' },
        { text: '🔨 Visit the blacksmith before leaving', next: 'blacksmith' },
        { text: '🍺 Stop by the tavern', next: 'tavern' }
      ],
      onEnter: (state) => {
        state.health = state.maxHealth;
        state.mana = state.maxMana;
      }
    },

    // ===== BATCH 001 IDEAS =====
    batch001_hub: {
      text: `<p>You spread your maps over a weather-worn planning table in Thornvale's outer camp. New reports are flooding in from frontier scouts — each one a chance to slow Malachar's spread before it reaches full strength.</p>
<p>These operations are dangerous, but their outcomes can permanently change travel routes, allies, and what resources remain available to the resistance.</p>`,
      background: 'linear-gradient(180deg, #1c2f1c 0%, #0f1a0f 100%)',
      choices: [
        { text: '1️⃣ Memory-Echo Landmark (Thornvale Hinterlands)', next: 'batch001_memory_echo' },
        { text: '2️⃣ Settlement Conflict (Whispering Wilds)', next: 'batch001_wilds_conflict' },
        { text: '3️⃣ Hidden Sanctuary Attack (Cryptward Depths)', next: 'batch001_cryptward_sanctuary' },
        { text: '4️⃣ Elite Territory Sweep (Stormfang Range)', next: 'batch001_stormfang_territory' },
        {
          text: '5️⃣ Weather-Bound Ruin Event (Auralis Ruins)',
          next: 'batch001_auralis_weather',
          condition: (state) => state.flags.shard_count >= 3 && state.flags.batch001_stormfang_cleansed,
          requirementText: 'Requires 3+ shards and a stabilized stormfront'
        },
        { text: '6️⃣ Lore Archive Recovery (Sunken Marshes)', next: 'batch001_sunken_archive' },
        {
          text: '7️⃣ Landmark Restoration (Ashen Steppe)',
          next: 'batch001_ashen_restoration',
          condition: (state) => state.flags.batch001_archive_texts,
          requirementText: 'Requires recovered archive texts'
        },
        {
          text: '8️⃣ Ruins Puzzle Wing (Moonlit Coast)',
          next: 'batch001_moonlit_puzzle',
          condition: (state) => state.flags.batch001_archive_texts,
          requirementText: 'Requires archive map markers'
        },
        {
          text: '9️⃣ Companion Stop (Glass Dunes)',
          next: 'batch001_glass_stop',
          condition: (state) => state.flags.batch001_ashen_restored || state.flags.batch001_archive_texts,
          requirementText: 'Requires restored routes'
        },
        {
          text: '🔟 Festival Intrigue (Ironroot Forest)',
          next: 'batch001_ironroot_festival',
          condition: (state) => state.flags.batch001_ashen_restored || state.flags.batch001_archive_texts,
          requirementText: 'Requires restored routes'
        },
        {
          text: '🏕️ Rest at the Hidden Sanctuary',
          next: 'batch001_sanctuary_rest',
          condition: (state) => state.flags.batch001_sanctuary_unlocked,
          requirementText: 'Requires sanctuary to be protected'
        },
        {
          text: '🛒 Visit the frontier vendor camp',
          next: 'batch001_vendor_camp',
          condition: (state) => state.flags.batch001_wilds_settlers || state.flags.batch001_wilds_wildkin || state.flags.batch001_wilds_mediated,
          requirementText: 'Requires resolving the Whispering Wilds conflict'
        },
        {
          text: '➡️ Advance to Batch 002 operations',
          next: 'batch002_hub',
          condition: (state) =>
            state.flags.batch001_memory_echo_complete ||
            state.flags.batch001_wilds_settlers ||
            state.flags.batch001_wilds_wildkin ||
            state.flags.batch001_wilds_mediated ||
            state.flags.batch001_sanctuary_unlocked,
          requirementText: 'Requires frontline progress from Batch 001'
        },
        { text: '← Return to core quest planning', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch001_memory_echo: {
      text: `<p>In the Thornvale Hinterlands, half-buried monoliths hum with old Crown resonance. Resistance scouts call it a <span class="story-emphasis">memory-echo landmark</span>.</p>
<p>The echo basin is dormant until a relic is set within its ring. If awakened, it projects scenes from the years before Malachar's betrayal — and hints at how shard recoveries are linked.</p>`,
      background: 'linear-gradient(180deg, #2a2f1a 0%, #11150a 100%)',
      choices: [
        {
          text: 'Place a relic in the basin and trigger the memory-echo',
          next: 'batch001_memory_echo_triggered',
          condition: (state) => ['old_map', 'shard_messenger', 'elara_amulet', 'shield_ring'].some(item => state.inventory.includes(item)),
          requirementText: 'Requires a relic from prior adventures'
        },
        { text: 'Record the landmark and return to camp', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch001_memory_echo_triggered: {
      text: `<p>The relic ignites with dawn-light and the monoliths answer. A vision unfolds: royal couriers moving shard fragments along hidden roads, each route tied to fallback sanctuaries and resistance cells.</p>
<p>You map the sequence. Future shard hunts now have stronger context — and fewer blind jumps.</p>`,
      background: 'linear-gradient(180deg, #3a3f2a 0%, #1a1f0a 100%)',
      choices: [
        { text: 'Return to the frontier planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        if (!state.flags.batch001_memory_echo_complete) {
          state.flags.batch001_memory_echo_complete = true;
          state.xp += 25;
        }
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch001_wilds_conflict: {
      text: `<p>Whispering Wilds is split between settlers rebuilding outposts and wardens protecting ancient groves. Their standoff has already disrupted caravans and supply depots.</p>
<p>Your ruling here will permanently decide which faction controls nearby route vendors.</p>`,
      background: 'linear-gradient(180deg, #1a3a2a 0%, #0b1a12 100%)',
      choices: [
        { text: 'Back the settlers and fortify trade roads', next: 'batch001_wilds_settlers' },
        { text: 'Back the grove wardens and restrict logging routes', next: 'batch001_wilds_wildkin' },
        {
          text: 'Use Lyra\'s contacts to broker a fragile truce',
          next: 'batch001_wilds_mediated',
          condition: (state) => state.flags.lyra_companion,
          requirementText: 'Requires Lyra as companion'
        },
        { text: 'Withdraw and return to camp', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch001_wilds_settlers: {
      text: `<p>You authorize palisades, escort details, and toll rights for settler caravans. Trade stabilizes quickly, but some wardens denounce your decision.</p>
<p><span class="story-action">Settler vendors now dominate frontier supply lines.</span></p>`,
      background: 'linear-gradient(180deg, #2a4028 0%, #111f10 100%)',
      choices: [
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        state.flags.batch001_wilds_settlers = true;
        state.flags.batch001_wilds_wildkin = false;
        state.flags.batch001_wilds_mediated = false;
        state.gold += 15;
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch001_wilds_wildkin: {
      text: `<p>You side with the wardens, preserving sacred groves and closing exploitative road cuts. Caravans shrink, but healers and herbalists emerge from hiding.</p>
<p><span class="story-action">Wildkin vendors now shape frontier inventories.</span></p>`,
      background: 'linear-gradient(180deg, #1f4a33 0%, #0c2318 100%)',
      choices: [
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        state.flags.batch001_wilds_settlers = false;
        state.flags.batch001_wilds_wildkin = true;
        state.flags.batch001_wilds_mediated = false;
        state.inventory.push('mana_potion');
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch001_wilds_mediated: {
      text: `<p>With Lyra mediating between militia captains and grove wardens, you establish rotating stewardship: escorted trade windows and protected sacred zones.</p>
<p>The compromise keeps both factions active and preserves companion story continuity with the Loyalists.</p>`,
      background: 'linear-gradient(180deg, #24503a 0%, #10281e 100%)',
      choices: [
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        state.flags.batch001_wilds_settlers = false;
        state.flags.batch001_wilds_wildkin = false;
        state.flags.batch001_wilds_mediated = true;
        state.flags.batch001_lyra_continuity = true;
        state.inventory.push('health_potion');
        state.inventory.push('mana_potion');
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch001_vendor_camp: {
      text: `<p>The frontier vendor camp has changed based on your Whispering Wilds ruling.</p>
<p>Settler contracts offer steel and rations. Wildkin channels provide rare herbs. A mediated truce offers a balanced mix, but in lower volume.</p>`,
      background: 'linear-gradient(180deg, #2a2a1a 0%, #121208 100%)',
      choices: [
        {
          text: 'Buy hardened field kit (20 gold, +1 defense)',
          next: 'batch001_hub',
          condition: (state) => state.flags.batch001_wilds_settlers && state.gold >= 20,
          onSelect: (state) => {
            state.gold -= 20;
            state.stats.defense += 1;
          }
        },
        {
          text: 'Buy spirit tinctures (15 gold, +20 mana)',
          next: 'batch001_hub',
          condition: (state) => state.flags.batch001_wilds_wildkin && state.gold >= 15,
          onSelect: (state) => {
            state.gold -= 15;
            state.mana = Math.min(state.maxMana, state.mana + 20);
          }
        },
        {
          text: 'Buy balanced campaign pack (18 gold, +15 health/+15 mana)',
          next: 'batch001_hub',
          condition: (state) => state.flags.batch001_wilds_mediated && state.gold >= 18,
          onSelect: (state) => {
            state.gold -= 18;
            state.health = Math.min(state.maxHealth, state.health + 15);
            state.mana = Math.min(state.maxMana, state.mana + 15);
          }
        },
        { text: 'Leave without trading', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch001_cryptward_sanctuary: {
      text: `<p>In Cryptward Depths, resistance scouts have found a hidden sanctuary carved behind collapsed catacombs. Midway through your inspection, revenants breach the outer wards.</p>
<p>If you hold the line now, this site can become a recurring safe hub for future operations.</p>`,
      background: 'linear-gradient(180deg, #2b223a 0%, #120c1a 100%)',
      choices: [
        { text: 'Defend the sanctuary entrance', next: 'batch001_cryptward_defend' },
        { text: 'Order evacuation and abandon the site', next: 'batch001_cryptward_abandon' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    batch001_cryptward_defend: {
      text: `<p>You and the scouts hold choke points until dawn. The wards stabilize, and the sanctuary survives. Runners begin stockpiling medicine and maps inside.</p>
<p><span class="story-action">Hidden sanctuary unlocked as a recurring safe hub.</span></p>`,
      background: 'linear-gradient(180deg, #3a2f4a 0%, #191224 100%)',
      choices: [
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        state.flags.batch001_sanctuary_unlocked = true;
        state.xp += 20;
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    batch001_cryptward_abandon: {
      text: `<p>You pull everyone out before the wards collapse. The scouts survive, but the sanctuary is lost to the depths — and future campaigns lose a valuable foothold.</p>`,
      background: 'linear-gradient(180deg, #2a1f36 0%, #130d1a 100%)',
      choices: [
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        state.flags.batch001_sanctuary_unlocked = false;
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    batch001_sanctuary_rest: {
      text: `<p>Within the hidden sanctuary, warded braziers mute the corruption beyond the walls. You rest, rearm, and review reports from multiple fronts.</p>
<p><span class="story-action">Health and mana fully restored.</span></p>`,
      background: 'linear-gradient(180deg, #2f2740 0%, #140f20 100%)',
      choices: [
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        state.health = state.maxHealth;
        state.mana = state.maxMana;
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    batch001_stormfang_territory: {
      text: `<p>An elite patrol zone has formed in Stormfang Range, marked by obsidian totems channeling Malachar's influence. The threat evolves as your chapter progress advances.</p>
<p>Early strikes disrupt scouts. Late strikes force direct engagements with corrupted captains.</p>`,
      background: 'linear-gradient(180deg, #313131 0%, #121212 100%)',
      choices: [
        {
          text: 'Launch an early disruption raid',
          next: 'batch001_stormfang_early',
          condition: (state) => (state.flags.shard_count ?? 0) < 3
        },
        {
          text: 'Lead a late-stage purge against elite captains',
          next: 'batch001_stormfang_late',
          condition: (state) => (state.flags.shard_count ?? 0) >= 3
        },
        { text: 'Pull back and reassess', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        LOCATIONS.stormfang_range.discovered = true;
      }
    },

    batch001_stormfang_early: {
      text: `<p>Your strike team topples totems and scatters outriders before the network matures. Malachar's hold weakens across the pass.</p>`,
      background: 'linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)',
      choices: [
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        state.flags.batch001_stormfang_cleansed = true;
        state.flags.batch001_stormfang_spreading = false;
        state.xp += 15;
        LOCATIONS.stormfang_range.discovered = true;
      }
    },

    batch001_stormfang_late: {
      text: `<p>The territory has hardened. Corrupted elites press from multiple ridgelines, but you break their command banner and collapse the influence web.</p>
<p><span class="story-action">Heavy cost paid, but regional corruption recedes.</span></p>`,
      background: 'linear-gradient(180deg, #444 0%, #1b1b1b 100%)',
      choices: [
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        state.flags.batch001_stormfang_cleansed = true;
        state.flags.batch001_stormfang_spreading = false;
        state.health = Math.max(1, state.health - 18);
        state.xp += 30;
        LOCATIONS.stormfang_range.discovered = true;
      }
    },

    batch001_auralis_weather: {
      text: `<p>At Auralis Ruins, a razorstorm opens only during this rare world-state window. Lightning reveals hidden sigils for moments at a time before ash clouds swallow them again.</p>
<p>You navigate the storm-limited corridor and secure notes pointing toward deeper late-game convergence routes into Malachar's network.</p>`,
      background: 'linear-gradient(180deg, #2f2a3a 0%, #140f1e 100%)',
      choices: [
        { text: 'Extract before the weather window closes', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'auralis_ruins';
        if (!state.flags.batch001_auralis_weather_done) {
          state.flags.batch001_auralis_weather_done = true;
          state.flags.batch001_late_game_route = true;
          state.gold += 20;
        }
        LOCATIONS.auralis_ruins.discovered = true;
      }
    },

    batch001_sunken_archive: {
      text: `<p>Deep in the Sunken Marshes, you uncover a sealed archive room. Floodwater has ruined most shelves, but several codices survive in waxed cases.</p>
<p>Recovered texts identify route markers for distant location clusters and hidden approaches.</p>`,
      background: 'linear-gradient(180deg, #1a342f 0%, #0b1714 100%)',
      choices: [
        { text: 'Recover and catalog the surviving texts', next: 'batch001_sunken_archive_recovered' },
        { text: 'Mark the room and leave', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch001_sunken_archive_recovered: {
      text: `<p>You secure the codices and decode regional overlays. New markers appear for the Ashen Steppe and Moonlit Coast, with references to further links beyond them.</p>`,
      background: 'linear-gradient(180deg, #24423d 0%, #10211d 100%)',
      choices: [
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        state.flags.batch001_archive_texts = true;
        LOCATIONS.sunken_marshes.discovered = true;
        LOCATIONS.ashen_steppe.discovered = true;
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch001_ashen_restoration: {
      text: `<p>At Ashen Steppe, a shattered waystone network blocks safe movement between frontier cells. With archive instructions in hand, you can attempt a full restoration.</p>`,
      background: 'linear-gradient(180deg, #4a2f20 0%, #1f120a 100%)',
      choices: [
        {
          text: 'Restore all waystones and reopen travel links',
          next: 'batch001_ashen_restored'
        },
        { text: 'Abort and conserve resources', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch001_ashen_restored: {
      text: `<p>One by one, the waystones reignite. Travel lanes stabilize and long-blocked story scenes become reachable across neighboring regions.</p>`,
      background: 'linear-gradient(180deg, #5a3a2a 0%, #29170c 100%)',
      choices: [
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        state.flags.batch001_ashen_restored = true;
        LOCATIONS.glass_dunes.discovered = true;
        LOCATIONS.ironroot_forest.discovered = true;
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch001_moonlit_puzzle: {
      text: `<p>The Moonlit Coast ruins contain a puzzle wing with three sealed chambers. Each solved chamber reveals one thread in a long-form narrative arc about the Crown's custodians.</p>`,
      background: 'linear-gradient(180deg, #20314a 0%, #0d1520 100%)',
      choices: [
        {
          text: 'Solve the next chamber',
          next: 'batch001_moonlit_chamber_solved',
          condition: (state) => (state.flags.batch001_moonlit_threads ?? 0) < 3,
          requirementText: 'Three total chambers available'
        },
        {
          text: 'Review recovered narrative threads',
          next: 'batch001_moonlit_thread_review',
          condition: (state) => (state.flags.batch001_moonlit_threads ?? 0) > 0,
          requirementText: 'Requires at least one solved chamber'
        },
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch001_moonlit_chamber_solved: {
      text: `<p>You align mirrors, sigils, and tide-lock mechanisms. Another chamber opens, adding a new thread to the custodians' saga.</p>`,
      background: 'linear-gradient(180deg, #2a3f5f 0%, #111d2d 100%)',
      choices: [
        { text: 'Continue within the puzzle wing', next: 'batch001_moonlit_puzzle' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        const threads = Math.min(3, (state.flags.batch001_moonlit_threads ?? 0) + 1);
        state.flags.batch001_moonlit_threads = threads;
        if (threads >= 3) {
          state.flags.batch001_moonlit_arc_complete = true;
          LOCATIONS.glass_dunes.discovered = true;
        }
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch001_moonlit_thread_review: {
      text: `<p>The recovered threads connect royal custodians, resistance hideaways, and shard fallback paths. As the arc fills in, your campaign options broaden.</p>`,
      background: 'linear-gradient(180deg, #243851 0%, #0f1b2a 100%)',
      choices: [
        { text: 'Return to the puzzle wing', next: 'batch001_moonlit_puzzle' },
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch001_glass_stop: {
      text: `<p>At Glass Dunes, old watch-posts cut across mirror-bright sands. This stop can deepen companion arcs and unlock alternate outcomes in later branches.</p>`,
      background: 'linear-gradient(180deg, #5c4a2a 0%, #241a0d 100%)',
      choices: [
        {
          text: 'Share command decisions with Lyra at the dune watch',
          next: 'batch001_glass_lyra',
          condition: (state) => state.flags.lyra_companion,
          requirementText: 'Requires Lyra as active companion'
        },
        { text: 'Scout the watch-posts alone', next: 'batch001_glass_solo' },
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch001_glass_lyra: {
      text: `<p>Lyra opens up about Loyalist failures and what she risked to keep Queen Isolde hidden. Together, you define fallback priorities for civilians over relics if a crisis forces the choice.</p>
<p><span class="story-action">Alternate story outcome unlocked: Loyalist Evacuation Route.</span></p>`,
      background: 'linear-gradient(180deg, #6a5531 0%, #2b2010 100%)',
      choices: [
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        state.flags.batch001_glass_lyra_arc = true;
        state.flags.batch001_alternate_outcome = true;
        state.xp += 15;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch001_glass_solo: {
      text: `<p>You log wind paths, cache points, and hazard timings. The solo route is efficient but lacks companion-driven branching insight.</p>`,
      background: 'linear-gradient(180deg, #6a5531 0%, #2b2010 100%)',
      choices: [
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        state.flags.batch001_glass_solo = true;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch001_ironroot_festival: {
      text: `<p>Ironroot Forest's local festival is all lanterns, masks, and music — and perfect cover for political handlers trading sealed directives.</p>
<p>A hidden mission entry point can be exposed if you follow the right signal chain.</p>`,
      background: 'linear-gradient(180deg, #2f4a2f 0%, #101d10 100%)',
      choices: [
        { text: 'Track the masked couriers and expose the intrigue network', next: 'batch001_ironroot_exposed' },
        { text: 'Blend in and gather passive rumors', next: 'batch001_ironroot_rumors' },
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch001_ironroot_exposed: {
      text: `<p>You decode the lantern sequence and intercept a courier exchange. Beneath a stage trapdoor, you find a mission cache tied to anti-Loyalist conspirators.</p>
<p><span class="story-action">Hidden mission entry unlocked for future chapter content.</span></p>`,
      background: 'linear-gradient(180deg, #3a5a3a 0%, #162816 100%)',
      choices: [
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        state.flags.batch001_ironroot_hidden_mission = true;
        state.gold += 12;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch001_ironroot_rumors: {
      text: `<p>You keep your head down, collect names, and leave with useful hints — but the deeper conspiracy remains buried for now.</p>`,
      background: 'linear-gradient(180deg, #3a5a3a 0%, #162816 100%)',
      choices: [
        { text: 'Return to the planning table', next: 'batch001_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        state.flags.batch001_ironroot_rumors = true;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    // ===== BATCH 002 IDEAS =====
    batch002_hub: {
      text: `<p>Fresh courier stacks arrive from frontier command. Batch 002 operations widen the theater: evolving elite zones, weather-state windows, trial diplomacy, and rescue responses shaped by earlier village outcomes.</p>
<p>These missions tie directly into shard-recovery pacing, companion continuity, and faction support for the late campaign.</p>`,
      background: 'linear-gradient(180deg, #203424 0%, #0d1a10 100%)',
      choices: [
        { text: '1️⃣ Elite Territory Escalation (Whispering Wilds)', next: 'batch002_wilds_elite' },
        {
          text: '2️⃣ Weather-Bound Window (Cryptward Depths)',
          next: 'batch002_crypt_weather',
          condition: (state) => (state.flags.shard_count ?? 0) >= 2,
          requirementText: 'Requires 2+ Crown shards'
        },
        { text: '3️⃣ Lore Archive Sweep (Stormfang Range)', next: 'batch002_storm_archive' },
        {
          text: '4️⃣ Landmark Restoration (Auralis Ruins)',
          next: 'batch002_auralis_restoration',
          condition: (state) => state.flags.batch002_storm_archive_texts,
          requirementText: 'Requires Stormfang archive texts'
        },
        {
          text: '5️⃣ Ruins Puzzle Wing (Sunken Marshes)',
          next: 'batch002_sunken_puzzle',
          condition: (state) => state.flags.batch002_auralis_restored || state.flags.batch002_storm_archive_texts,
          requirementText: 'Requires archive-led route unlocks'
        },
        {
          text: '6️⃣ Companion Stop (Ashen Steppe)',
          next: 'batch002_ashen_companion',
          condition: (state) => state.flags.batch002_auralis_restored || state.flags.batch002_storm_archive_texts,
          requirementText: 'Requires restored route intel'
        },
        {
          text: '7️⃣ Festival Intrigue (Moonlit Coast)',
          next: 'batch002_moonlit_festival',
          condition: (state) => (state.flags.batch002_sunken_threads ?? 0) > 0 || state.flags.batch001_moonlit_arc_complete,
          requirementText: 'Requires ruins-thread progress'
        },
        {
          text: '8️⃣ Smuggler Route Node (Glass Dunes)',
          next: 'batch002_glass_smuggler',
          condition: (state) => state.flags.batch002_moonlit_intrigue_exposed || state.flags.batch002_moonlit_intrigue_covered,
          requirementText: 'Requires Moonlit intrigue lead'
        },
        {
          text: '9️⃣ Guardian Trial Site (Ironroot Forest)',
          next: 'batch002_ironroot_trial',
          condition: (state) => state.flags.batch002_glass_route_resolved,
          requirementText: 'Requires Glass Dunes route decision'
        },
        { text: '🔟 Multi-Stage Rescue (Thornvale Hinterlands)', next: 'batch002_thornvale_rescue' },
        {
          text: '➡️ Advance to Batch 003 operations',
          next: 'batch003_hub',
          condition: (state) => state.flags.batch002_rescue_complete || state.flags.batch002_wilds_elite_stabilized,
          requirementText: 'Requires completing the Batch 002 rescue or wilds escalation'
        },
        { text: '← Return to Batch 001 planning', next: 'batch001_hub' },
        { text: '← Return to core quest planning', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch002_wilds_elite: {
      text: `<p>Whispering Wilds now hosts a hardened elite patrol lattice. If disrupted early, supply lanes stabilize. If left to mature, captain cadres tighten Malachar's grip.</p>`,
      background: 'linear-gradient(180deg, #214936 0%, #0e2118 100%)',
      choices: [
        {
          text: 'Disrupt the lattice before it matures',
          next: 'batch002_wilds_elite_early',
          condition: (state) => (state.flags.shard_count ?? 0) < 3
        },
        {
          text: 'Break mature captain formations in a direct sweep',
          next: 'batch002_wilds_elite_late',
          condition: (state) => (state.flags.shard_count ?? 0) >= 3
        },
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch002_wilds_elite_early: {
      text: `<p>Your teams strike signal posts and command runners before elite patrols synchronize. Regional pressure drops and escort routes become safer.</p>`,
      background: 'linear-gradient(180deg, #2a5a45 0%, #12291e 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        state.flags.batch002_wilds_elite_stabilized = true;
        state.xp += 20;
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch002_wilds_elite_late: {
      text: `<p>The wilds are already fortified. You win the sweep, but not cheaply. Captain cells are broken and Malachar's frontier leverage recedes.</p>`,
      background: 'linear-gradient(180deg, #30614b 0%, #142b20 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        state.flags.batch002_wilds_elite_stabilized = true;
        state.health = Math.max(1, state.health - 14);
        state.xp += 30;
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch002_crypt_weather: {
      text: `<p>Cryptward Depths opens only under a narrow weather-state convergence: cold lightning above, pressure-drop below. In that window, a sealed fault corridor becomes traversable.</p>`,
      background: 'linear-gradient(180deg, #2a2440 0%, #120d1d 100%)',
      choices: [
        { text: 'Enter the convergence corridor before it collapses', next: 'batch002_crypt_weather_done' },
        { text: 'Wait for a safer cycle and withdraw', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    batch002_crypt_weather_done: {
      text: `<p>You clear the corridor and recover route glyphs tied to future shard logistics. The weather window closes behind you moments later.</p>`,
      background: 'linear-gradient(180deg, #352f50 0%, #171228 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        if (!state.flags.batch002_crypt_weather_done) {
          state.flags.batch002_crypt_weather_done = true;
          state.gold += 18;
        }
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    batch002_storm_archive: {
      text: `<p>In Stormfang Range, collapsed watch sanctums hide an old archive room. Surviving field codices map out distant marker chains and restoration dependencies.</p>`,
      background: 'linear-gradient(180deg, #34343f 0%, #171721 100%)',
      choices: [
        { text: 'Recover and decode the surviving codices', next: 'batch002_storm_archive_recovered' },
        { text: 'Mark the archive for later retrieval', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        LOCATIONS.stormfang_range.discovered = true;
      }
    },

    batch002_storm_archive_recovered: {
      text: `<p>Your translation crew identifies marker references for Auralis restoration sectors and submerged puzzle wings farther south.</p>`,
      background: 'linear-gradient(180deg, #3e3e49 0%, #1c1c28 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        state.flags.batch002_storm_archive_texts = true;
        LOCATIONS.stormfang_range.discovered = true;
        LOCATIONS.auralis_ruins.discovered = true;
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch002_auralis_restoration: {
      text: `<p>Auralis Ruins contains fractured relay obelisks once used to open inter-region travel links. With archive data in hand, you can attempt full restoration.</p>`,
      background: 'linear-gradient(180deg, #3a2d46 0%, #180f23 100%)',
      choices: [
        { text: 'Rebuild the relay network and reopen links', next: 'batch002_auralis_restored' },
        { text: 'Preserve resources and stand down', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'auralis_ruins';
        LOCATIONS.auralis_ruins.discovered = true;
      }
    },

    batch002_auralis_restored: {
      text: `<p>The relays surge back to life. Route channels across the frontier synchronize, opening safer movement into Ashen Steppe and the marsh puzzle corridors.</p>`,
      background: 'linear-gradient(180deg, #4a3856 0%, #211433 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'auralis_ruins';
        state.flags.batch002_auralis_restored = true;
        LOCATIONS.auralis_ruins.discovered = true;
        LOCATIONS.ashen_steppe.discovered = true;
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch002_sunken_puzzle: {
      text: `<p>Sunken Marshes hides a puzzle wing of flood-lock chambers. Each solved chamber reveals another thread in a longer campaign narrative tied to Crown logistics.</p>`,
      background: 'linear-gradient(180deg, #1e3d39 0%, #0b1a18 100%)',
      choices: [
        {
          text: 'Solve the next flood-lock chamber',
          next: 'batch002_sunken_chamber_solved',
          condition: (state) => (state.flags.batch002_sunken_threads ?? 0) < 3,
          requirementText: 'Three total chambers available'
        },
        {
          text: 'Review recovered narrative threads',
          next: 'batch002_sunken_review',
          condition: (state) => (state.flags.batch002_sunken_threads ?? 0) > 0,
          requirementText: 'Requires at least one solved chamber'
        },
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch002_sunken_chamber_solved: {
      text: `<p>You align tide-gates and glyph seals. Another chamber yields a logistics thread linking shards, safehouses, and fallback route timing.</p>`,
      background: 'linear-gradient(180deg, #29514b 0%, #112622 100%)',
      choices: [
        { text: 'Continue in the puzzle wing', next: 'batch002_sunken_puzzle' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        const threads = Math.min(3, (state.flags.batch002_sunken_threads ?? 0) + 1);
        state.flags.batch002_sunken_threads = threads;
        if (threads >= 3) {
          state.flags.batch002_sunken_arc_complete = true;
          LOCATIONS.moonlit_coast.discovered = true;
        }
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch002_sunken_review: {
      text: `<p>Collected threads clarify faction movement patterns across chapters, improving future route planning and late-game positioning.</p>`,
      background: 'linear-gradient(180deg, #224640 0%, #0f211d 100%)',
      choices: [
        { text: 'Return to the puzzle wing', next: 'batch002_sunken_puzzle' },
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch002_ashen_companion: {
      text: `<p>Ashen Steppe offers a companion-specific debrief point where command priorities can reframe later chapter outcomes.</p>`,
      background: 'linear-gradient(180deg, #573a27 0%, #25160d 100%)',
      choices: [
        {
          text: 'Coordinate fallback priorities with Lyra',
          next: 'batch002_ashen_lyra',
          condition: (state) => state.flags.lyra_companion,
          requirementText: 'Requires Lyra as active companion'
        },
        { text: 'Audit the steppe routes alone', next: 'batch002_ashen_solo' },
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch002_ashen_lyra: {
      text: `<p>Lyra helps prioritize civilian extraction chains over artifact retrieval in collapse scenarios.</p>
<p><span class="story-action">Alternate outcome path reinforced for late-story branches.</span></p>`,
      background: 'linear-gradient(180deg, #654430 0%, #2b1c11 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        if (!state.flags.batch002_ashen_lyra_arc) {
          state.flags.batch002_ashen_lyra_arc = true;
          state.flags.batch002_alternate_outcome = true;
          state.xp += 15;
        }
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch002_ashen_solo: {
      text: `<p>You map contingency corridors and supply bursts alone — efficient, but with less companion-driven narrative leverage.</p>`,
      background: 'linear-gradient(180deg, #654430 0%, #2b1c11 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        state.flags.batch002_ashen_solo = true;
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch002_moonlit_festival: {
      text: `<p>Moonlit Coast's local festival is dense with masks, tide-lantern processions, and covert handlers exchanging coded route tokens.</p>`,
      background: 'linear-gradient(180deg, #2a3d5c 0%, #101a2a 100%)',
      choices: [
        { text: 'Expose the token network and seize mission leads', next: 'batch002_moonlit_exposed' },
        { text: 'Maintain cover and extract rumors quietly', next: 'batch002_moonlit_covered' },
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch002_moonlit_exposed: {
      text: `<p>You crack the signal chain and surface a hidden mission entry linked to smuggler intermediaries in Glass Dunes.</p>`,
      background: 'linear-gradient(180deg, #355077 0%, #16253b 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        state.flags.batch002_moonlit_intrigue_exposed = true;
        state.flags.batch002_moonlit_intrigue_covered = false;
        LOCATIONS.moonlit_coast.discovered = true;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch002_moonlit_covered: {
      text: `<p>You gather low-noise intelligence without burning contacts. The deeper network stays hidden, but route rumors point toward Glass Dunes.</p>`,
      background: 'linear-gradient(180deg, #355077 0%, #16253b 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        state.flags.batch002_moonlit_intrigue_exposed = false;
        state.flags.batch002_moonlit_intrigue_covered = true;
        LOCATIONS.moonlit_coast.discovered = true;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch002_glass_smuggler: {
      text: `<p>At Glass Dunes, smugglers control a cross-hub route spine. Your decision here will ripple into regional trade access.</p>`,
      background: 'linear-gradient(180deg, #6b5632 0%, #2d2111 100%)',
      choices: [
        { text: 'Cut a regulated deal with the route masters', next: 'batch002_glass_deal' },
        { text: 'Shut down the route by force and seize manifests', next: 'batch002_glass_crackdown' },
        {
          text: 'Broker humanitarian passage corridors',
          next: 'batch002_glass_humanitarian',
          condition: (state) => state.flags.batch002_ashen_lyra_arc || state.flags.lyra_companion,
          requirementText: 'Requires companion diplomacy leverage'
        },
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch002_glass_deal: {
      text: `<p>You impose escort quotas and taxation marks. Trade volume rises, but gray-market influence remains in play.</p>`,
      background: 'linear-gradient(180deg, #785f36 0%, #332513 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        state.flags.batch002_trade_access_open = true;
        state.flags.batch002_trade_access_restricted = false;
        state.flags.batch002_trade_access_humanitarian = false;
        state.flags.batch002_glass_route_resolved = true;
        state.gold += 20;
        LOCATIONS.glass_dunes.discovered = true;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch002_glass_crackdown: {
      text: `<p>Your teams dismantle route cells and confiscate contraband ledgers. Smuggling drops, and trade narrows into guarded military channels.</p>`,
      background: 'linear-gradient(180deg, #785f36 0%, #332513 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        state.flags.batch002_trade_access_open = false;
        state.flags.batch002_trade_access_restricted = true;
        state.flags.batch002_trade_access_humanitarian = false;
        state.flags.batch002_glass_route_resolved = true;
        state.inventory.push('health_potion');
        LOCATIONS.glass_dunes.discovered = true;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch002_glass_humanitarian: {
      text: `<p>You secure protected movement corridors for civilians and medics, balancing control with access across distant hubs.</p>`,
      background: 'linear-gradient(180deg, #785f36 0%, #332513 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        state.flags.batch002_trade_access_open = false;
        state.flags.batch002_trade_access_restricted = false;
        state.flags.batch002_trade_access_humanitarian = true;
        state.flags.batch002_glass_route_resolved = true;
        state.inventory.push('mana_potion');
        LOCATIONS.glass_dunes.discovered = true;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch002_ironroot_trial: {
      text: `<p>In Ironroot Forest, an ancient guardian trial site reactivates. The order you support here will define which faction aids your campaign later.</p>`,
      background: 'linear-gradient(180deg, #2e5134 0%, #112116 100%)',
      choices: [
        { text: 'Support the Wardens of Stone (defense doctrine)', next: 'batch002_trial_stone' },
        { text: 'Support the Dawnbound Spears (offense doctrine)', next: 'batch002_trial_spears' },
        { text: 'Support the Ember Scribes (arcane doctrine)', next: 'batch002_trial_scribes' },
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch002_trial_stone: {
      text: `<p>The Wardens of Stone swear support and reinforce resistance shield lines.</p>`,
      background: 'linear-gradient(180deg, #3a6240 0%, #182c1d 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        state.flags.batch002_order_support = 'stone';
        if (!state.flags.batch002_trial_rewarded) {
          state.stats.defense += 1;
          state.flags.batch002_trial_rewarded = true;
        }
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch002_trial_spears: {
      text: `<p>The Dawnbound Spears commit skirmish units and route-breaker detachments to your command.</p>`,
      background: 'linear-gradient(180deg, #3a6240 0%, #182c1d 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        state.flags.batch002_order_support = 'spears';
        if (!state.flags.batch002_trial_rewarded) {
          state.stats.attack += 1;
          state.flags.batch002_trial_rewarded = true;
        }
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch002_trial_scribes: {
      text: `<p>The Ember Scribes align with your cause and open sigil channels for battlefield support magic.</p>`,
      background: 'linear-gradient(180deg, #3a6240 0%, #182c1d 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        state.flags.batch002_order_support = 'scribes';
        if (!state.flags.batch002_trial_rewarded) {
          state.stats.magic += 1;
          state.flags.batch002_trial_rewarded = true;
        }
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch002_thornvale_rescue: {
      text: `<p>A chained rescue operation unfolds across Thornvale Hinterlands. Civilian behavior shifts depending on whether prior village calls were answered — or ignored.</p>`,
      background: 'linear-gradient(180deg, #324a2c 0%, #141f12 100%)',
      choices: [
        {
          text: 'Lead with trust networks and local guides',
          next: 'batch002_rescue_helped',
          condition: (state) => state.flags.mercs_survived,
          requirementText: 'Requires prior village aid reputation'
        },
        {
          text: 'Push a hard extraction through panic lines',
          next: 'batch002_rescue_ignored',
          condition: (state) => state.flags.abandoned_mercs,
          requirementText: 'Available after prior abandonment outcomes'
        },
        { text: 'Run a standard phased evacuation plan', next: 'batch002_rescue_neutral' },
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch002_rescue_helped: {
      text: `<p>Villagers trust your call signs and move quickly. The rescue chain completes with minimal loss and stronger future cooperation.</p>`,
      background: 'linear-gradient(180deg, #3d5a36 0%, #1a2a16 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        state.flags.batch002_rescue_outcome = 'helped';
        state.flags.batch002_rescue_complete = true;
        state.gold += 15;
        state.xp += 25;
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch002_rescue_ignored: {
      text: `<p>Mistrust slows evacuations and tempers flare. You still extract survivors, but the operation is rough and costly.</p>`,
      background: 'linear-gradient(180deg, #3d5a36 0%, #1a2a16 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        state.flags.batch002_rescue_outcome = 'ignored';
        state.flags.batch002_rescue_complete = true;
        state.health = Math.max(1, state.health - 12);
        state.xp += 15;
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch002_rescue_neutral: {
      text: `<p>The phased plan works, though slower than trusted networks. Most civilians are extracted and routes remain viable for future operations.</p>`,
      background: 'linear-gradient(180deg, #3d5a36 0%, #1a2a16 100%)',
      choices: [
        { text: 'Return to Batch 002 planning', next: 'batch002_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        state.flags.batch002_rescue_outcome = 'neutral';
        state.flags.batch002_rescue_complete = true;
        state.xp += 18;
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    // ===== BATCH 003 IDEAS =====
    batch003_hub: {
      text: `<p>Batch 003 operations shift from emergency stabilization to regional leverage: restored links, puzzle intelligence, faction diplomacy, and relic synthesis that can influence endgame support.</p>
<p>Command expects outcomes here to reshape travel access, alliance posture, and how resistance chapters align against Malachar.</p>`,
      background: 'linear-gradient(180deg, #263347 0%, #0f1724 100%)',
      choices: [
        { text: '1️⃣ Landmark Restoration (Cryptward Depths)', next: 'batch003_crypt_restoration' },
        { text: '2️⃣ Ruins Puzzle Wing (Stormfang Range)', next: 'batch003_storm_puzzle' },
        {
          text: '3️⃣ Companion Stop (Auralis Ruins)',
          next: 'batch003_auralis_companion',
          condition: (state) => state.flags.batch003_crypt_restored || state.flags.batch002_storm_archive_texts,
          requirementText: 'Requires restoration or prior archive intel'
        },
        { text: '4️⃣ Festival Intrigue (Sunken Marshes)', next: 'batch003_sunken_festival' },
        {
          text: '5️⃣ Smuggler Route Node (Ashen Steppe)',
          next: 'batch003_ashen_smuggler',
          condition: (state) => state.flags.batch003_sunken_intrigue_exposed || state.flags.batch003_sunken_intrigue_covered,
          requirementText: 'Requires Sunken festival lead'
        },
        {
          text: '6️⃣ Guardian Trial Site (Moonlit Coast)',
          next: 'batch003_moonlit_trial',
          condition: (state) => state.flags.batch003_ashen_route_resolved,
          requirementText: 'Requires Ashen route decision'
        },
        {
          text: '7️⃣ Multi-Stage Rescue (Glass Dunes)',
          next: 'batch003_glass_rescue',
          condition: (state) => state.flags.batch003_moonlit_trial_complete,
          requirementText: 'Requires Moonlit trial outcome'
        },
        { text: '8️⃣ Cursed Landmark (Ironroot Forest)', next: 'batch003_ironroot_curse' },
        {
          text: '9️⃣ Diplomatic Summit Venue (Thornvale Hinterlands)',
          next: 'batch003_thornvale_summit',
          condition: (state) => state.flags.batch003_ironroot_curse_touched,
          requirementText: 'Requires engaging the Ironroot cursed landmark'
        },
        {
          text: '🔟 Relic-Forging Enclave (Whispering Wilds)',
          next: 'batch003_wilds_relic_forge',
          condition: (state) => state.flags.batch003_summit_outcome,
          requirementText: 'Requires summit outcome'
        },
        {
          text: '🗺️ Launch Frontier Network Operations (50 new locations)',
          next: 'batch003_frontier_hub',
          condition: (state) => state.flags.batch003_relic_forge_complete || state.flags.batch003_glass_rescue_complete,
          requirementText: 'Requires Batch 003 forge or rescue progress'
        },
        {
          text: '➡️ Advance to Batch 004 operations',
          next: 'batch004_hub',
          condition: (state) =>
            state.flags.batch003_relic_forge_complete ||
            state.flags.batch003_glass_rescue_complete ||
            state.flags.frontier_network_unlocked,
          requirementText: 'Requires major Batch 003 progress'
        },
        { text: '← Return to Batch 002 planning', next: 'batch002_hub' },
        { text: '← Return to core quest planning', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch003_crypt_restoration: {
      text: `<p>In Cryptward Depths, broken ward pylons once linked emergency corridors between burial vaults and ridge outposts. Restoring them would reopen a safer travel lattice.</p>`,
      background: 'linear-gradient(180deg, #2f2c45 0%, #141224 100%)',
      choices: [
        { text: 'Rebind the pylons and reopen the corridor links', next: 'batch003_crypt_restored' },
        { text: 'Withdraw and preserve supplies', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    batch003_crypt_restored: {
      text: `<p>The pylon chain stabilizes. Relay glyphs reactivate and old travel lines reconnect, opening a cleaner approach toward Stormfang and Auralis operations.</p>`,
      background: 'linear-gradient(180deg, #3a3657 0%, #1a1630 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        state.flags.batch003_crypt_restored = true;
        state.xp += 20;
        LOCATIONS.cryptward_depths.discovered = true;
        LOCATIONS.stormfang_range.discovered = true;
        LOCATIONS.auralis_ruins.discovered = true;
      }
    },

    batch003_storm_puzzle: {
      text: `<p>Stormfang Range shelters a sealed puzzle wing of pressure locks and rune pivots. Each solved chamber reveals one thread from a long-form resistance chronicle.</p>`,
      background: 'linear-gradient(180deg, #3b3b48 0%, #171722 100%)',
      choices: [
        {
          text: 'Solve the next chamber in the wing',
          next: 'batch003_storm_chamber_solved',
          condition: (state) => (state.flags.batch003_storm_threads ?? 0) < 3,
          requirementText: 'Three total chambers available'
        },
        {
          text: 'Review the recovered chronicle threads',
          next: 'batch003_storm_review',
          condition: (state) => (state.flags.batch003_storm_threads ?? 0) > 0,
          requirementText: 'Requires at least one solved chamber'
        },
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        LOCATIONS.stormfang_range.discovered = true;
      }
    },

    batch003_storm_chamber_solved: {
      text: `<p>You align runic load stones and unlock another chamber. The chronicle expands with new links between shard movement, escorts, and fallback routes.</p>`,
      background: 'linear-gradient(180deg, #474757 0%, #1f1f30 100%)',
      choices: [
        { text: 'Continue in the puzzle wing', next: 'batch003_storm_puzzle' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        const threads = Math.min(3, (state.flags.batch003_storm_threads ?? 0) + 1);
        state.flags.batch003_storm_threads = threads;
        if (threads >= 3) {
          state.flags.batch003_storm_arc_complete = true;
          LOCATIONS.auralis_ruins.discovered = true;
        }
        LOCATIONS.stormfang_range.discovered = true;
      }
    },

    batch003_storm_review: {
      text: `<p>The compiled threads sharpen your operational timeline and expose weak points in enemy redeployment windows.</p>`,
      background: 'linear-gradient(180deg, #404050 0%, #1b1b2b 100%)',
      choices: [
        { text: 'Return to the puzzle wing', next: 'batch003_storm_puzzle' },
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        LOCATIONS.stormfang_range.discovered = true;
      }
    },

    batch003_auralis_companion: {
      text: `<p>Auralis Ruins hosts a companion stop where command choices can pivot personal arcs and alter support behavior in later chapters.</p>`,
      background: 'linear-gradient(180deg, #3d2f4f 0%, #170f24 100%)',
      choices: [
        {
          text: 'Coordinate chapter priorities with Lyra',
          next: 'batch003_auralis_lyra',
          condition: (state) => state.flags.lyra_companion,
          requirementText: 'Requires Lyra as active companion'
        },
        { text: 'Conduct a solo strategic debrief', next: 'batch003_auralis_solo' },
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'auralis_ruins';
        LOCATIONS.auralis_ruins.discovered = true;
      }
    },

    batch003_auralis_lyra: {
      text: `<p>Lyra helps prioritize civilian protection triggers and alliance continuity over artifact-first doctrine.</p>
<p><span class="story-action">Companion-aligned branch reinforced for future chapter outcomes.</span></p>`,
      background: 'linear-gradient(180deg, #4a3a60 0%, #211437 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'auralis_ruins';
        state.flags.batch003_auralis_companion_done = true;
        if (!state.flags.batch003_auralis_lyra_arc) {
          state.flags.batch003_auralis_lyra_arc = true;
          state.flags.batch003_alternate_outcome = true;
          state.xp += 16;
        }
        LOCATIONS.auralis_ruins.discovered = true;
      }
    },

    batch003_auralis_solo: {
      text: `<p>You map command pathways alone, gaining precision but less interpersonal leverage for downstream alliance choices.</p>`,
      background: 'linear-gradient(180deg, #4a3a60 0%, #211437 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'auralis_ruins';
        state.flags.batch003_auralis_companion_done = true;
        state.flags.batch003_auralis_solo = true;
        LOCATIONS.auralis_ruins.discovered = true;
      }
    },

    batch003_sunken_festival: {
      text: `<p>Sunken Marshes hosts a lantern procession over floodways — ideal cover for brokers exchanging coded directives and mission ciphers.</p>`,
      background: 'linear-gradient(180deg, #254c46 0%, #0d201d 100%)',
      choices: [
        { text: 'Track and expose the courier lattice', next: 'batch003_sunken_exposed' },
        { text: 'Blend in and extract low-noise rumors', next: 'batch003_sunken_covered' },
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch003_sunken_exposed: {
      text: `<p>You crack the signal pattern and uncover route records pointing toward Ashen Steppe smuggler coordinators.</p>`,
      background: 'linear-gradient(180deg, #30615a 0%, #13312b 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        state.flags.batch003_sunken_intrigue_exposed = true;
        state.flags.batch003_sunken_intrigue_covered = false;
        LOCATIONS.sunken_marshes.discovered = true;
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch003_sunken_covered: {
      text: `<p>You keep contacts intact and leave with indirect route hints. The deeper network survives, but Ashen handlers are now traceable.</p>`,
      background: 'linear-gradient(180deg, #30615a 0%, #13312b 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        state.flags.batch003_sunken_intrigue_exposed = false;
        state.flags.batch003_sunken_intrigue_covered = true;
        LOCATIONS.sunken_marshes.discovered = true;
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch003_ashen_smuggler: {
      text: `<p>Ashen Steppe's smuggler spine now controls cross-desert handoffs. Your ruling here will ripple into route access and support reliability.</p>`,
      background: 'linear-gradient(180deg, #67462d 0%, #29170e 100%)',
      choices: [
        { text: 'Approve controlled trade compacts', next: 'batch003_ashen_deal' },
        { text: 'Disrupt cells and seize route ledgers', next: 'batch003_ashen_crackdown' },
        {
          text: 'Prioritize protected humanitarian corridors',
          next: 'batch003_ashen_humanitarian',
          condition: (state) => state.flags.batch003_auralis_lyra_arc || state.flags.lyra_companion,
          requirementText: 'Requires companion diplomacy leverage'
        },
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch003_ashen_deal: {
      text: `<p>You legalize escorted lanes and tariff markers. Throughput improves, though gray-market pressure remains.</p>`,
      background: 'linear-gradient(180deg, #765136 0%, #311c11 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        state.flags.batch003_ashen_trade_open = true;
        state.flags.batch003_ashen_trade_restricted = false;
        state.flags.batch003_ashen_trade_humanitarian = false;
        state.flags.batch003_ashen_route_resolved = true;
        state.gold += 18;
        LOCATIONS.ashen_steppe.discovered = true;
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch003_ashen_crackdown: {
      text: `<p>Your strike teams dismantle route cells and tighten convoy control. Smuggling falls, but movement flexibility narrows.</p>`,
      background: 'linear-gradient(180deg, #765136 0%, #311c11 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        state.flags.batch003_ashen_trade_open = false;
        state.flags.batch003_ashen_trade_restricted = true;
        state.flags.batch003_ashen_trade_humanitarian = false;
        state.flags.batch003_ashen_route_resolved = true;
        state.inventory.push('health_potion');
        LOCATIONS.ashen_steppe.discovered = true;
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch003_ashen_humanitarian: {
      text: `<p>You enforce protected passage windows for civilians and healers, balancing order with access across steppe routes.</p>`,
      background: 'linear-gradient(180deg, #765136 0%, #311c11 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        state.flags.batch003_ashen_trade_open = false;
        state.flags.batch003_ashen_trade_restricted = false;
        state.flags.batch003_ashen_trade_humanitarian = true;
        state.flags.batch003_ashen_route_resolved = true;
        state.inventory.push('mana_potion');
        LOCATIONS.ashen_steppe.discovered = true;
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch003_moonlit_trial: {
      text: `<p>At Moonlit Coast, a guardian trial site reawakens. The order you endorse here determines which doctrine reinforces your campaign.</p>`,
      background: 'linear-gradient(180deg, #2f4568 0%, #131f31 100%)',
      choices: [
        { text: 'Support the Wardens of Stone (defense doctrine)', next: 'batch003_moonlit_stone' },
        { text: 'Support the Dawnbound Spears (offense doctrine)', next: 'batch003_moonlit_spears' },
        { text: 'Support the Ember Scribes (arcane doctrine)', next: 'batch003_moonlit_scribes' },
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch003_moonlit_stone: {
      text: `<p>The Wardens of Stone commit defensive cadres and reinforce your evacuation and holding plans.</p>`,
      background: 'linear-gradient(180deg, #3d5b84 0%, #1b2f47 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        state.flags.batch003_trial_order = 'stone';
        state.flags.batch003_moonlit_trial_complete = true;
        if (!state.flags.batch003_trial_rewarded) {
          state.stats.defense += 1;
          state.flags.batch003_trial_rewarded = true;
        }
        LOCATIONS.moonlit_coast.discovered = true;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch003_moonlit_spears: {
      text: `<p>The Dawnbound Spears align with your campaign and bolster rapid-strike doctrine for late chapters.</p>`,
      background: 'linear-gradient(180deg, #3d5b84 0%, #1b2f47 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        state.flags.batch003_trial_order = 'spears';
        state.flags.batch003_moonlit_trial_complete = true;
        if (!state.flags.batch003_trial_rewarded) {
          state.stats.attack += 1;
          state.flags.batch003_trial_rewarded = true;
        }
        LOCATIONS.moonlit_coast.discovered = true;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch003_moonlit_scribes: {
      text: `<p>The Ember Scribes commit arcane analysts and improve your ability to counter ritual escalations.</p>`,
      background: 'linear-gradient(180deg, #3d5b84 0%, #1b2f47 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        state.flags.batch003_trial_order = 'scribes';
        state.flags.batch003_moonlit_trial_complete = true;
        if (!state.flags.batch003_trial_rewarded) {
          state.stats.magic += 1;
          state.flags.batch003_trial_rewarded = true;
        }
        LOCATIONS.moonlit_coast.discovered = true;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch003_glass_rescue: {
      text: `<p>A staged rescue unfolds across shifting dune corridors. Civilian response depends on whether nearby communities view your command as trustworthy.</p>`,
      background: 'linear-gradient(180deg, #6a5532 0%, #2a1f10 100%)',
      choices: [
        {
          text: 'Coordinate with trusted scout families',
          next: 'batch003_glass_rescue_helped',
          condition: (state) => state.flags.mercs_survived,
          requirementText: 'Requires prior aid reputation'
        },
        {
          text: 'Force extraction through unstable crowd lines',
          next: 'batch003_glass_rescue_ignored',
          condition: (state) => state.flags.abandoned_mercs,
          requirementText: 'Available after abandonment outcomes'
        },
        { text: 'Run a balanced phased rescue plan', next: 'batch003_glass_rescue_neutral' },
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch003_glass_rescue_helped: {
      text: `<p>Trusted routes hold, evac chains stay orderly, and most civilians clear the hazard corridor before nightfall.</p>`,
      background: 'linear-gradient(180deg, #775f37 0%, #322413 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        state.flags.batch003_glass_rescue_outcome = 'helped';
        state.flags.batch003_glass_rescue_complete = true;
        state.gold += 16;
        state.xp += 24;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch003_glass_rescue_ignored: {
      text: `<p>Mistrust triggers delays and flareups. You still clear survivors, but the extraction costs blood and time.</p>`,
      background: 'linear-gradient(180deg, #775f37 0%, #322413 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        state.flags.batch003_glass_rescue_outcome = 'ignored';
        state.flags.batch003_glass_rescue_complete = true;
        state.health = Math.max(1, state.health - 10);
        state.xp += 14;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch003_glass_rescue_neutral: {
      text: `<p>The phased operation lands with moderate losses and keeps rescue lanes viable for follow-on missions.</p>`,
      background: 'linear-gradient(180deg, #775f37 0%, #322413 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        state.flags.batch003_glass_rescue_outcome = 'neutral';
        state.flags.batch003_glass_rescue_complete = true;
        state.xp += 18;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch003_ironroot_curse: {
      text: `<p>A cursed landmark in Ironroot Forest pulses with unstable corruption. Its intensity can be reduced, redirected, or left to worsen based on your intervention.</p>`,
      background: 'linear-gradient(180deg, #315035 0%, #121f15 100%)',
      choices: [
        { text: 'Purge corruption through warding rites', next: 'batch003_ironroot_curse_purged' },
        { text: 'Contain the curse behind monitored seals', next: 'batch003_ironroot_curse_contained' },
        { text: 'Leave it active and focus on other fronts', next: 'batch003_ironroot_curse_ignored' },
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        state.flags.batch003_ironroot_curse_touched = true;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch003_ironroot_curse_purged: {
      text: `<p>Your rites break the corruption cycle. Local resistance movement improves as hostile pressure drops.</p>`,
      background: 'linear-gradient(180deg, #3a6140 0%, #182b1d 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        state.flags.batch003_ironroot_corruption = 'purged';
        state.flags.batch003_ironroot_curse_resolved = true;
        state.xp += 20;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch003_ironroot_curse_contained: {
      text: `<p>You establish containment seals and watcher rotations. The curse remains, but escalation is slowed and controlled.</p>`,
      background: 'linear-gradient(180deg, #3a6140 0%, #182b1d 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        state.flags.batch003_ironroot_corruption = 'contained';
        state.flags.batch003_ironroot_curse_resolved = true;
        state.gold += 12;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch003_ironroot_curse_ignored: {
      text: `<p>You defer intervention. Corruption pressure rises, but command resources remain free for immediate operations elsewhere.</p>`,
      background: 'linear-gradient(180deg, #3a6140 0%, #182b1d 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        state.flags.batch003_ironroot_corruption = 'worsening';
        state.flags.batch003_ironroot_curse_resolved = true;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch003_thornvale_summit: {
      text: `<p>Thornvale Hinterlands hosts a diplomatic summit where faction delegates negotiate resource rights, corridor security, and command legitimacy.</p>`,
      background: 'linear-gradient(180deg, #334a33 0%, #141f14 100%)',
      choices: [
        { text: 'Broker a practical coalition accord', next: 'batch003_summit_accord' },
        { text: 'Press a hardline defense compact', next: 'batch003_summit_hardline' },
        { text: 'Leave negotiations unresolved but open', next: 'batch003_summit_stalemate' },
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch003_summit_accord: {
      text: `<p>You secure a working coalition. Future regional conflicts are reduced as shared command protocols take hold.</p>`,
      background: 'linear-gradient(180deg, #3f5a3f 0%, #1a2a1a 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        state.flags.batch003_summit_outcome = 'accord';
        state.flags.batch003_conflict_pressure_low = true;
        state.flags.batch003_conflict_pressure_high = false;
        state.flags.batch003_conflict_pressure_unstable = false;
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch003_summit_hardline: {
      text: `<p>You secure strict defense commitments quickly, but some factions feel sidelined and tensions remain brittle.</p>`,
      background: 'linear-gradient(180deg, #3f5a3f 0%, #1a2a1a 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        state.flags.batch003_summit_outcome = 'hardline';
        state.flags.batch003_conflict_pressure_low = false;
        state.flags.batch003_conflict_pressure_high = true;
        state.flags.batch003_conflict_pressure_unstable = false;
        state.stats.defense += 1;
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch003_summit_stalemate: {
      text: `<p>The summit ends without full agreement. Channels stay open, but future conflicts remain volatile and dependent on local commanders.</p>`,
      background: 'linear-gradient(180deg, #3f5a3f 0%, #1a2a1a 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        state.flags.batch003_summit_outcome = 'stalemate';
        state.flags.batch003_conflict_pressure_low = false;
        state.flags.batch003_conflict_pressure_high = false;
        state.flags.batch003_conflict_pressure_unstable = true;
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch003_wilds_relic_forge: {
      text: `<p>Whispering Wilds shelters a relic-forging enclave where materials from many operations can be fused into campaign-shaping outputs.</p>`,
      background: 'linear-gradient(180deg, #2d563a 0%, #132617 100%)',
      choices: [
        {
          text: 'Forge a Dawnroute Sigil (mobility and logistics focus)',
          next: 'batch003_forge_dawnroute',
          condition: (state) => state.inventory.includes('old_map') || state.flags.batch003_storm_arc_complete,
          requirementText: 'Requires map intelligence or completed Stormfang puzzle threads'
        },
        {
          text: 'Forge a Wardheart Seal (defensive coalition focus)',
          next: 'batch003_forge_wardheart',
          condition: (state) => state.flags.batch003_summit_outcome === 'accord' || state.flags.batch003_summit_outcome === 'hardline',
          requirementText: 'Requires a resolved summit doctrine'
        },
        { text: 'Stabilize enclave output and return', next: 'batch003_forge_stabilized' },
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch003_forge_dawnroute: {
      text: `<p>You forge the Dawnroute Sigil, linking route intelligence into faster deployment and cleaner fallback timing.</p>`,
      background: 'linear-gradient(180deg, #367047 0%, #17311f 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        state.flags.batch003_forge_choice = 'dawnroute';
        state.flags.batch003_relic_forge_complete = true;
        state.xp += 22;
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch003_forge_wardheart: {
      text: `<p>You forge the Wardheart Seal, reinforcing coalition shield doctrine and tightening defensive coordination.</p>`,
      background: 'linear-gradient(180deg, #367047 0%, #17311f 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        state.flags.batch003_forge_choice = 'wardheart';
        state.flags.batch003_relic_forge_complete = true;
        state.stats.defense += 1;
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch003_forge_stabilized: {
      text: `<p>You stabilize enclave workflows and preserve forging capacity for future chapters, even without finalizing a flagship relic path.</p>`,
      background: 'linear-gradient(180deg, #367047 0%, #17311f 100%)',
      choices: [
        { text: 'Return to Batch 003 planning', next: 'batch003_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        state.flags.batch003_forge_choice = 'stabilized';
        state.flags.batch003_relic_forge_complete = true;
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    // ===== BATCH 004 IDEAS =====
    batch004_hub: {
      text: `<p>Batch 004 operations focus on narrative pressure and alliance consequence: covert festivals, smuggler rulings, doctrine trials, and signals that shape final-act intelligence.</p>
<p>Each theater links to the next, creating a longer operational chain from Stormfang intelligence to Cryptward faction outcomes.</p>`,
      background: 'linear-gradient(180deg, #2f2a46 0%, #121025 100%)',
      choices: [
        { text: '1️⃣ Festival Intrigue (Stormfang Range)', next: 'batch004_storm_festival' },
        {
          text: '2️⃣ Smuggler Route Node (Auralis Ruins)',
          next: 'batch004_auralis_smuggler',
          condition: (state) => state.flags.batch004_storm_intrigue_exposed || state.flags.batch004_storm_intrigue_covered,
          requirementText: 'Requires Stormfang festival lead'
        },
        {
          text: '3️⃣ Guardian Trial Site (Sunken Marshes)',
          next: 'batch004_sunken_trial',
          condition: (state) => state.flags.batch004_auralis_route_resolved,
          requirementText: 'Requires Auralis route decision'
        },
        {
          text: '4️⃣ Multi-Stage Rescue (Ashen Steppe)',
          next: 'batch004_ashen_rescue',
          condition: (state) => state.flags.batch004_sunken_trial_complete,
          requirementText: 'Requires Sunken trial outcome'
        },
        {
          text: '5️⃣ Cursed Landmark (Moonlit Coast)',
          next: 'batch004_moonlit_curse',
          condition: (state) => state.flags.batch004_ashen_rescue_complete,
          requirementText: 'Requires Ashen rescue progress'
        },
        {
          text: '6️⃣ Diplomatic Summit Venue (Glass Dunes)',
          next: 'batch004_glass_summit',
          condition: (state) => state.flags.batch004_moonlit_curse_engaged,
          requirementText: 'Requires engaging Moonlit cursed landmark'
        },
        {
          text: '7️⃣ Relic-Forging Enclave (Ironroot Forest)',
          next: 'batch004_ironroot_forge',
          condition: (state) => state.flags.batch004_summit_outcome,
          requirementText: 'Requires summit outcome'
        },
        {
          text: '8️⃣ Final-Act Foreshadowing Site (Thornvale Hinterlands)',
          next: 'batch004_thornvale_foreshadow',
          condition: (state) => state.flags.batch004_relic_forge_complete,
          requirementText: 'Requires Ironroot forge completion'
        },
        {
          text: '9️⃣ Micro-Location Chain (Whispering Wilds)',
          next: 'batch004_wilds_legend_chain',
          condition: (state) => state.flags.batch004_foreshadow_complete,
          requirementText: 'Requires foreshadowing truth to be recorded'
        },
        {
          text: '🔟 NPC Faction Outpost (Cryptward Depths)',
          next: 'batch004_crypt_outpost',
          condition: (state) => state.flags.batch004_legend_part_ix_complete,
          requirementText: 'Requires local legend part IX completion'
        },
        {
          text: '➡️ Advance to Batch 005 operations',
          next: 'batch005_hub',
          condition: (state) => state.flags.batch004_outpost_complete || state.flags.batch004_relic_forge_complete,
          requirementText: 'Requires major Batch 004 progress'
        },
        { text: '← Return to Batch 003 planning', next: 'batch003_hub' },
        { text: '← Return to core quest planning', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch004_storm_festival: {
      text: `<p>Stormfang Range hosts a ridge festival lit by beacon braziers. Beneath the celebration, rival envoys exchange coded directives for operations farther south.</p>`,
      background: 'linear-gradient(180deg, #3d3a52 0%, #181628 100%)',
      choices: [
        { text: 'Expose the broker exchange publicly', next: 'batch004_storm_exposed' },
        { text: 'Stay covert and map the network quietly', next: 'batch004_storm_covered' },
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        LOCATIONS.stormfang_range.discovered = true;
      }
    },

    batch004_storm_exposed: {
      text: `<p>You break the exchange ring mid-festival and seize route manifests. The lead trail points toward Auralis smuggler coordinators.</p>`,
      background: 'linear-gradient(180deg, #4a4663 0%, #201d36 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        state.flags.batch004_storm_intrigue_exposed = true;
        LOCATIONS.stormfang_range.discovered = true;
        LOCATIONS.auralis_ruins.discovered = true;
      }
    },

    batch004_storm_covered: {
      text: `<p>You preserve deniable contacts and leave with layered signal keys. The network remains active, but its Auralis handlers are now identifiable.</p>`,
      background: 'linear-gradient(180deg, #4a4663 0%, #201d36 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        state.flags.batch004_storm_intrigue_covered = true;
        LOCATIONS.stormfang_range.discovered = true;
        LOCATIONS.auralis_ruins.discovered = true;
      }
    },

    batch004_auralis_smuggler: {
      text: `<p>At Auralis Ruins, a smuggler spine controls inter-region trade handoffs through collapsed forum vaults. Your ruling here will alter downstream route reliability.</p>`,
      background: 'linear-gradient(180deg, #513f62 0%, #20162e 100%)',
      choices: [
        { text: 'Authorize regulated convoy lanes', next: 'batch004_auralis_deal' },
        { text: 'Crack down and seize route ledgers', next: 'batch004_auralis_crackdown' },
        {
          text: 'Guarantee protected civilian corridors',
          next: 'batch004_auralis_humanitarian',
          condition: (state) => state.flags.batch003_auralis_lyra_arc || state.flags.lyra_companion,
          requirementText: 'Requires companion diplomacy leverage'
        },
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'auralis_ruins';
        LOCATIONS.auralis_ruins.discovered = true;
      }
    },

    batch004_auralis_deal: {
      text: `<p>Escorted trade channels reopen under strict tariffs. Throughput improves and allied caravans report cleaner transit windows.</p>`,
      background: 'linear-gradient(180deg, #604b74 0%, #291d39 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'auralis_ruins';
        state.flags.batch004_auralis_trade_open = true;
        state.flags.batch004_auralis_trade_restricted = false;
        state.flags.batch004_auralis_trade_humanitarian = false;
        state.flags.batch004_auralis_route_resolved = true;
        state.gold += 16;
        LOCATIONS.auralis_ruins.discovered = true;
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch004_auralis_crackdown: {
      text: `<p>Your strike teams fracture smuggler cells and lock key vault corridors. Smuggling drops, but flexibility across relief routes narrows.</p>`,
      background: 'linear-gradient(180deg, #604b74 0%, #291d39 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'auralis_ruins';
        state.flags.batch004_auralis_trade_open = false;
        state.flags.batch004_auralis_trade_restricted = true;
        state.flags.batch004_auralis_trade_humanitarian = false;
        state.flags.batch004_auralis_route_resolved = true;
        state.inventory.push('health_potion');
        LOCATIONS.auralis_ruins.discovered = true;
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch004_auralis_humanitarian: {
      text: `<p>You establish protected passage marks for civilians and medics, balancing route control with broad access across ruin corridors.</p>`,
      background: 'linear-gradient(180deg, #604b74 0%, #291d39 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'auralis_ruins';
        state.flags.batch004_auralis_trade_open = false;
        state.flags.batch004_auralis_trade_restricted = false;
        state.flags.batch004_auralis_trade_humanitarian = true;
        state.flags.batch004_auralis_route_resolved = true;
        state.inventory.push('mana_potion');
        LOCATIONS.auralis_ruins.discovered = true;
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch004_sunken_trial: {
      text: `<p>Sunken Marshes reactivates a guardian trial ring. The order you back here determines which doctrine lends force to the next campaign phase.</p>`,
      background: 'linear-gradient(180deg, #2f5a55 0%, #122825 100%)',
      choices: [
        { text: 'Back the Wardens of Stone (defense doctrine)', next: 'batch004_sunken_stone' },
        { text: 'Back the Dawnbound Spears (offense doctrine)', next: 'batch004_sunken_spears' },
        { text: 'Back the Ember Scribes (arcane doctrine)', next: 'batch004_sunken_scribes' },
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch004_sunken_stone: {
      text: `<p>The Wardens of Stone commit to your rescue lanes and rear-guard holds, improving campaign survivability.</p>`,
      background: 'linear-gradient(180deg, #3b6c66 0%, #18332f 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        state.flags.batch004_trial_order = 'stone';
        state.flags.batch004_sunken_trial_complete = true;
        if (!state.flags.batch004_trial_rewarded) {
          state.stats.defense += 1;
          state.flags.batch004_trial_rewarded = true;
        }
        LOCATIONS.sunken_marshes.discovered = true;
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch004_sunken_spears: {
      text: `<p>The Dawnbound Spears align with your command and sharpen rapid-response pressure across crisis corridors.</p>`,
      background: 'linear-gradient(180deg, #3b6c66 0%, #18332f 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        state.flags.batch004_trial_order = 'spears';
        state.flags.batch004_sunken_trial_complete = true;
        if (!state.flags.batch004_trial_rewarded) {
          state.stats.attack += 1;
          state.flags.batch004_trial_rewarded = true;
        }
        LOCATIONS.sunken_marshes.discovered = true;
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch004_sunken_scribes: {
      text: `<p>The Ember Scribes bind their analysts to your campaign, improving arcane response against ritual escalations.</p>`,
      background: 'linear-gradient(180deg, #3b6c66 0%, #18332f 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        state.flags.batch004_trial_order = 'scribes';
        state.flags.batch004_sunken_trial_complete = true;
        if (!state.flags.batch004_trial_rewarded) {
          state.stats.magic += 1;
          state.flags.batch004_trial_rewarded = true;
        }
        LOCATIONS.sunken_marshes.discovered = true;
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch004_ashen_rescue: {
      text: `<p>Ashen Steppe erupts into a chained civilian rescue. Response behavior shifts sharply based on whether your campaign is viewed as reliable or punitive.</p>`,
      background: 'linear-gradient(180deg, #735138 0%, #2f1d11 100%)',
      choices: [
        {
          text: 'Coordinate through trusted village runners',
          next: 'batch004_ashen_rescue_helped',
          condition: (state) => state.flags.mercs_survived,
          requirementText: 'Requires prior aid reputation'
        },
        {
          text: 'Force extraction through unstable lines',
          next: 'batch004_ashen_rescue_ignored',
          condition: (state) => state.flags.abandoned_mercs,
          requirementText: 'Available after abandonment outcomes'
        },
        { text: 'Run a balanced phased evacuation', next: 'batch004_ashen_rescue_neutral' },
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch004_ashen_rescue_helped: {
      text: `<p>Trusted community channels hold and evac chains complete quickly, preserving morale and route confidence.</p>`,
      background: 'linear-gradient(180deg, #825c3f 0%, #382313 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        state.flags.batch004_ashen_rescue_outcome = 'helped';
        state.flags.batch004_ashen_rescue_complete = true;
        state.gold += 15;
        state.xp += 24;
        LOCATIONS.ashen_steppe.discovered = true;
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch004_ashen_rescue_ignored: {
      text: `<p>Mistrust slows extraction and sparks conflict. Survivors are moved, but command reputation takes a hard hit.</p>`,
      background: 'linear-gradient(180deg, #825c3f 0%, #382313 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        state.flags.batch004_ashen_rescue_outcome = 'ignored';
        state.flags.batch004_ashen_rescue_complete = true;
        state.health = Math.max(1, state.health - 10);
        state.xp += 14;
        LOCATIONS.ashen_steppe.discovered = true;
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch004_ashen_rescue_neutral: {
      text: `<p>The phased plan succeeds with moderate losses and keeps follow-on lanes viable for future operations.</p>`,
      background: 'linear-gradient(180deg, #825c3f 0%, #382313 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        state.flags.batch004_ashen_rescue_outcome = 'neutral';
        state.flags.batch004_ashen_rescue_complete = true;
        state.xp += 18;
        LOCATIONS.ashen_steppe.discovered = true;
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch004_moonlit_curse: {
      text: `<p>On Moonlit Coast, a cursed landmark now fluctuates with chapter pressure. Your intervention can purge, contain, or leave its corruption rising.</p>`,
      background: 'linear-gradient(180deg, #345378 0%, #152235 100%)',
      choices: [
        { text: 'Purge corruption through layered rites', next: 'batch004_moonlit_curse_purged' },
        { text: 'Contain it behind watcher seals', next: 'batch004_moonlit_curse_contained' },
        { text: 'Leave it active and redeploy resources', next: 'batch004_moonlit_curse_ignored' },
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch004_moonlit_curse_purged: {
      text: `<p>Your rites collapse the corruption cycle and reopen safer coast movement windows.</p>`,
      background: 'linear-gradient(180deg, #3f628d 0%, #1a304b 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        state.flags.batch004_moonlit_curse_engaged = true;
        state.flags.batch004_moonlit_corruption = 'purged';
        state.flags.batch004_moonlit_curse_resolved = true;
        state.xp += 20;
        LOCATIONS.moonlit_coast.discovered = true;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch004_moonlit_curse_contained: {
      text: `<p>You lock the landmark under rotating seal teams. Corruption pressure persists but remains controlled.</p>`,
      background: 'linear-gradient(180deg, #3f628d 0%, #1a304b 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        state.flags.batch004_moonlit_curse_engaged = true;
        state.flags.batch004_moonlit_corruption = 'contained';
        state.flags.batch004_moonlit_curse_resolved = true;
        state.gold += 12;
        LOCATIONS.moonlit_coast.discovered = true;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch004_moonlit_curse_ignored: {
      text: `<p>You delay intervention. Corruption worsens, but command assets remain available for immediate summit pressure.</p>`,
      background: 'linear-gradient(180deg, #3f628d 0%, #1a304b 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        state.flags.batch004_moonlit_curse_engaged = true;
        state.flags.batch004_moonlit_corruption = 'worsening';
        state.flags.batch004_moonlit_curse_resolved = true;
        LOCATIONS.moonlit_coast.discovered = true;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch004_glass_summit: {
      text: `<p>Glass Dunes hosts a diplomatic summit over corridor rights, envoy legitimacy, and cross-region logistics. Your dialogue result will restructure upcoming conflicts.</p>`,
      background: 'linear-gradient(180deg, #6d5734 0%, #2a1f11 100%)',
      choices: [
        { text: 'Broker a practical coalition accord', next: 'batch004_glass_accord' },
        { text: 'Push a hardline security compact', next: 'batch004_glass_hardline' },
        { text: 'Leave talks unresolved but open', next: 'batch004_glass_stalemate' },
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch004_glass_accord: {
      text: `<p>You secure a coalition framework that lowers conflict pressure across contested routes.</p>`,
      background: 'linear-gradient(180deg, #7a633d 0%, #322412 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        state.flags.batch004_summit_outcome = 'accord';
        state.flags.batch004_conflict_pressure_low = true;
        state.flags.batch004_conflict_pressure_high = false;
        state.flags.batch004_conflict_pressure_unstable = false;
        LOCATIONS.glass_dunes.discovered = true;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch004_glass_hardline: {
      text: `<p>You gain rapid military commitments, but disfavored factions harden their posture for later chapters.</p>`,
      background: 'linear-gradient(180deg, #7a633d 0%, #322412 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        state.flags.batch004_summit_outcome = 'hardline';
        state.flags.batch004_conflict_pressure_low = false;
        state.flags.batch004_conflict_pressure_high = true;
        state.flags.batch004_conflict_pressure_unstable = false;
        state.stats.defense += 1;
        LOCATIONS.glass_dunes.discovered = true;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch004_glass_stalemate: {
      text: `<p>The summit ends without a final pact. Negotiation channels survive, but future conflicts remain volatile.</p>`,
      background: 'linear-gradient(180deg, #7a633d 0%, #322412 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        state.flags.batch004_summit_outcome = 'stalemate';
        state.flags.batch004_conflict_pressure_low = false;
        state.flags.batch004_conflict_pressure_high = false;
        state.flags.batch004_conflict_pressure_unstable = true;
        LOCATIONS.glass_dunes.discovered = true;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch004_ironroot_forge: {
      text: `<p>Ironroot Forest now shelters a relic-forging enclave. Materials and alliances from prior operations decide which forged output you can finalize.</p>`,
      background: 'linear-gradient(180deg, #345a3c 0%, #162618 100%)',
      choices: [
        {
          text: 'Forge a Nightglass Compass (mobility and intel focus)',
          next: 'batch004_forge_nightglass',
          condition: (state) => state.inventory.includes('old_map') || state.flags.batch004_storm_intrigue_exposed,
          requirementText: 'Requires map intel or exposed Stormfang network'
        },
        {
          text: 'Forge a Concord Sigil (alliance stabilization focus)',
          next: 'batch004_forge_concord',
          condition: (state) => state.flags.batch004_summit_outcome === 'accord' || state.flags.batch004_summit_outcome === 'hardline',
          requirementText: 'Requires a resolved summit doctrine'
        },
        { text: 'Stabilize enclave output and return', next: 'batch004_forge_stabilized' },
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch004_forge_nightglass: {
      text: `<p>You forge the Nightglass Compass, threading field clues into cleaner mission staging and fallback timing.</p>`,
      background: 'linear-gradient(180deg, #3f6d49 0%, #1b3120 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        state.flags.batch004_forge_choice = 'nightglass';
        state.flags.batch004_relic_forge_complete = true;
        state.xp += 22;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch004_forge_concord: {
      text: `<p>You forge the Concord Sigil, reinforcing alliance coherence and reducing command friction between rival chapters.</p>`,
      background: 'linear-gradient(180deg, #3f6d49 0%, #1b3120 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        state.flags.batch004_forge_choice = 'concord';
        state.flags.batch004_relic_forge_complete = true;
        state.stats.magic += 1;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch004_forge_stabilized: {
      text: `<p>You preserve forging throughput for future chapters without committing to a flagship relic path yet.</p>`,
      background: 'linear-gradient(180deg, #3f6d49 0%, #1b3120 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        state.flags.batch004_forge_choice = 'stabilized';
        state.flags.batch004_relic_forge_complete = true;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch004_thornvale_foreshadow: {
      text: `<p>At a hidden site in Thornvale Hinterlands, recovered testimonies reveal different final-act truths depending on which alliances you previously favored.</p>`,
      background: 'linear-gradient(180deg, #3a5137 0%, #172116 100%)',
      choices: [
        {
          text: 'Record the coalition prophecy',
          next: 'batch004_foreshadow_accord',
          condition: (state) => state.flags.batch004_summit_outcome === 'accord',
          requirementText: 'Requires summit accord path'
        },
        {
          text: 'Record the hardline war chronicle',
          next: 'batch004_foreshadow_hardline',
          condition: (state) => state.flags.batch004_summit_outcome === 'hardline',
          requirementText: 'Requires hardline compact path'
        },
        { text: 'Record the fractured omen ledger', next: 'batch004_foreshadow_fractured' },
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch004_foreshadow_accord: {
      text: `<p>The site reveals a future where unified command can blunt Malachar's final gambit if trust remains intact.</p>`,
      background: 'linear-gradient(180deg, #456145 0%, #1c2c1d 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        state.flags.batch004_foreshadow_truth = 'accord';
        state.flags.batch004_foreshadow_complete = true;
        LOCATIONS.thornvale_hinterlands.discovered = true;
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch004_foreshadow_hardline: {
      text: `<p>The visions favor decisive force, warning that brittle alliances may fracture unless victories come fast.</p>`,
      background: 'linear-gradient(180deg, #456145 0%, #1c2c1d 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        state.flags.batch004_foreshadow_truth = 'hardline';
        state.flags.batch004_foreshadow_complete = true;
        LOCATIONS.thornvale_hinterlands.discovered = true;
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch004_foreshadow_fractured: {
      text: `<p>The ledger presents conflicting futures, each shaped by unstable alliances and unresolved command doctrine.</p>`,
      background: 'linear-gradient(180deg, #456145 0%, #1c2c1d 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        state.flags.batch004_foreshadow_truth = 'fractured';
        state.flags.batch004_foreshadow_complete = true;
        LOCATIONS.thornvale_hinterlands.discovered = true;
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch004_wilds_legend_chain: {
      text: `<p>Whispering Wilds scatters micro-sites tied to local legend part IX. Collecting clues here can expose shard-era truths buried in field folklore.</p>`,
      background: 'linear-gradient(180deg, #2e5b3d 0%, #122617 100%)',
      choices: [
        {
          text: 'Trace the next legend clue site',
          next: 'batch004_wilds_clue_found',
          condition: (state) => (state.flags.batch004_legend_clues ?? 0) < BATCH004_LEGEND_MAX_CLUES,
          requirementText: 'Three clue sites are available'
        },
        {
          text: 'Assemble legend part IX from gathered clues',
          next: 'batch004_wilds_legend_compiled',
          condition: (state) => (state.flags.batch004_legend_clues ?? 0) >= 1,
          requirementText: 'Requires at least one clue'
        },
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch004_wilds_clue_found: {
      text: `<p>You recover another carved clue marker. The legend thread now connects ward failures to shifting shard currents.</p>`,
      background: 'linear-gradient(180deg, #386f4b 0%, #17311f 100%)',
      choices: [
        { text: 'Continue the clue chain', next: 'batch004_wilds_legend_chain' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        const clues = Math.min(BATCH004_LEGEND_MAX_CLUES, (state.flags.batch004_legend_clues ?? 0) + 1);
        state.flags.batch004_legend_clues = clues;
        if (clues >= BATCH004_LEGEND_MAX_CLUES) {
          completeBatch004LegendPartIX(state);
        }
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch004_wilds_legend_compiled: {
      text: `<p>You compile part IX of the local legend, exposing shard-lore links that point directly to a Cryptward faction outpost.</p>`,
      background: 'linear-gradient(180deg, #386f4b 0%, #17311f 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        completeBatch004LegendPartIX(state);
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch004_crypt_outpost: {
      text: `<p>An NPC faction outpost in Cryptward Depths offers branching contracts based on alliance reputation. Your declared posture here affects late-game backing.</p>`,
      background: 'linear-gradient(180deg, #37334f 0%, #161329 100%)',
      choices: [
        { text: 'Align with the Dawnward Wardens', next: 'batch004_crypt_wardens' },
        { text: 'Align with the Veilborne Seekers', next: 'batch004_crypt_seekers' },
        { text: 'Maintain balanced dual-charter support', next: 'batch004_crypt_balanced' },
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    batch004_crypt_wardens: {
      text: `<p>The Dawnward Wardens grant fortified escort contracts and prioritize stable defense corridors for your campaign.</p>`,
      background: 'linear-gradient(180deg, #433e60 0%, #1d1835 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        state.flags.batch004_outpost_alignment = 'wardens';
        state.flags.batch004_outpost_complete = true;
        state.stats.defense += 1;
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    batch004_crypt_seekers: {
      text: `<p>The Veilborne Seekers open intelligence-heavy contracts, favoring reconnaissance and unconventional route exploitation.</p>`,
      background: 'linear-gradient(180deg, #433e60 0%, #1d1835 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        state.flags.batch004_outpost_alignment = 'seekers';
        state.flags.batch004_outpost_complete = true;
        state.stats.magic += 1;
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    batch004_crypt_balanced: {
      text: `<p>You secure a dual-charter arrangement. Contract access broadens, though neither faction fully commits to exclusive support.</p>`,
      background: 'linear-gradient(180deg, #433e60 0%, #1d1835 100%)',
      choices: [
        { text: 'Return to Batch 004 planning', next: 'batch004_hub' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        state.flags.batch004_outpost_alignment = 'balanced';
        state.flags.batch004_outpost_complete = true;
        state.gold += 20;
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    // ===== BATCH 005 IDEAS =====
    batch005_hub: {
      text: `<p>Batch 005 operations emphasize consequence layering: rescue trust, corruption pressure, summit doctrine, relic synthesis, and faction routing into final campaign lanes.</p>
<p>Each operation threads into the next, carrying prior outcomes across Auralis, Sunken Marshes, Ashen Steppe, and beyond.</p>`,
      background: 'linear-gradient(180deg, #30405d 0%, #121a2a 100%)',
      choices: [
        { text: '1️⃣ Multi-Stage Rescue (Auralis Ruins)', next: 'batch005_auralis_rescue' },
        {
          text: '2️⃣ Cursed Landmark (Sunken Marshes)',
          next: 'batch005_sunken_curse',
          condition: (state) => state.flags.batch005_auralis_rescue_complete,
          requirementText: 'Requires Auralis rescue progress'
        },
        {
          text: '3️⃣ Diplomatic Summit Venue (Ashen Steppe)',
          next: 'batch005_ashen_summit',
          condition: (state) => state.flags.batch005_sunken_curse_engaged,
          requirementText: 'Requires engaging Sunken cursed landmark'
        },
        {
          text: '4️⃣ Relic-Forging Enclave (Moonlit Coast)',
          next: 'batch005_moonlit_forge',
          condition: (state) => state.flags.batch005_summit_outcome,
          requirementText: 'Requires summit outcome'
        },
        {
          text: '5️⃣ Final-Act Foreshadowing Site (Glass Dunes)',
          next: 'batch005_glass_foreshadow',
          condition: (state) => state.flags.batch005_relic_forge_complete,
          requirementText: 'Requires Moonlit forge completion'
        },
        {
          text: '6️⃣ Micro-Location Chain (Ironroot Forest)',
          next: 'batch005_ironroot_legend_chain',
          condition: (state) => state.flags.batch005_foreshadow_complete,
          requirementText: 'Requires recorded foreshadowing truth'
        },
        {
          text: '7️⃣ NPC Faction Outpost (Thornvale Hinterlands)',
          next: 'batch005_thornvale_outpost',
          condition: (state) => state.flags.batch005_legend_part_vi_complete,
          requirementText: 'Requires local legend part VI completion'
        },
        {
          text: '8️⃣ Traversal Challenge Site (Whispering Wilds)',
          next: 'batch005_wilds_traversal',
          condition: (state) => state.flags.batch005_outpost_complete,
          requirementText: 'Requires Thornvale outpost alignment'
        },
        {
          text: '9️⃣ Memory-Echo Landmark (Cryptward Depths)',
          next: 'batch005_crypt_memory_echo',
          condition: (state) => state.flags.batch005_traversal_complete,
          requirementText: 'Requires traversal route outcome'
        },
        {
          text: '🔟 Settlement Conflict (Stormfang Range)',
          next: 'batch005_storm_conflict',
          condition: (state) => state.flags.batch005_memory_echo_complete,
          requirementText: 'Requires memory-echo activation'
        },
        {
          text: '➡️ Advance to Batch 006 operations',
          next: 'batch006_hub',
          condition: (state) => state.flags.batch005_storm_conflict_complete,
          requirementText: 'Requires completing Batch 005 operations'
        },
        { text: '← Return to Batch 004 planning', next: 'batch004_hub' },
        { text: '← Return to core quest planning', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch005_auralis_rescue: {
      text: `<p>Auralis Ruins collapses into a live rescue chain as archivists, scouts, and civilians are cut off by staggered breaches. Prior trust now determines extraction reliability.</p>`,
      background: 'linear-gradient(180deg, #584167 0%, #241730 100%)',
      choices: [
        {
          text: 'Coordinate trusted runner corridors',
          next: 'batch005_auralis_rescue_helped',
          condition: (state) => state.flags.mercs_survived,
          requirementText: 'Requires prior aid reputation'
        },
        {
          text: 'Force hard extraction through unstable sectors',
          next: 'batch005_auralis_rescue_ignored',
          condition: (state) => state.flags.abandoned_mercs,
          requirementText: 'Available after abandonment outcomes'
        },
        { text: 'Execute a balanced phased evacuation', next: 'batch005_auralis_rescue_neutral' },
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'auralis_ruins';
        LOCATIONS.auralis_ruins.discovered = true;
      }
    },

    batch005_auralis_rescue_helped: {
      text: `<p>Trusted relay teams keep routes intact and pull survivors out quickly, preserving supply confidence for follow-on operations.</p>`,
      background: 'linear-gradient(180deg, #674d78 0%, #2b1f3a 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'auralis_ruins';
        state.flags.batch005_auralis_rescue_outcome = 'helped';
        state.flags.batch005_auralis_rescue_complete = true;
        state.gold += 18;
        state.xp += 24;
        LOCATIONS.auralis_ruins.discovered = true;
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch005_auralis_rescue_ignored: {
      text: `<p>The extraction succeeds at high cost. Survivors are moved, but discipline fractures and relief timing slips across nearby sectors.</p>`,
      background: 'linear-gradient(180deg, #674d78 0%, #2b1f3a 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'auralis_ruins';
        state.flags.batch005_auralis_rescue_outcome = 'ignored';
        state.flags.batch005_auralis_rescue_complete = true;
        state.health = Math.max(1, state.health - 10);
        state.xp += 14;
        LOCATIONS.auralis_ruins.discovered = true;
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch005_auralis_rescue_neutral: {
      text: `<p>The phased evacuation holds with moderate losses, preserving route continuity without triggering broader command backlash.</p>`,
      background: 'linear-gradient(180deg, #674d78 0%, #2b1f3a 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'auralis_ruins';
        state.flags.batch005_auralis_rescue_outcome = 'neutral';
        state.flags.batch005_auralis_rescue_complete = true;
        state.xp += 18;
        LOCATIONS.auralis_ruins.discovered = true;
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch005_sunken_curse: {
      text: `<p>Sunken Marshes now anchors a cursed landmark whose corruption rises or falls with command pressure and regional decisions.</p>`,
      background: 'linear-gradient(180deg, #315b56 0%, #142927 100%)',
      choices: [
        { text: 'Purge corruption through layered rites', next: 'batch005_sunken_curse_purged' },
        { text: 'Contain corruption behind rotating seals', next: 'batch005_sunken_curse_contained' },
        { text: 'Leave the landmark active and redeploy teams', next: 'batch005_sunken_curse_worsening' },
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        LOCATIONS.sunken_marshes.discovered = true;
      }
    },

    batch005_sunken_curse_purged: {
      text: `<p>Your rites clear the landmark cycle and reopen safer marsh corridors for allied movement.</p>`,
      background: 'linear-gradient(180deg, #3b6f69 0%, #1a3431 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        state.flags.batch005_sunken_curse_engaged = true;
        state.flags.batch005_sunken_corruption = 'purged';
        state.flags.batch005_sunken_curse_resolved = true;
        state.xp += 20;
        LOCATIONS.sunken_marshes.discovered = true;
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch005_sunken_curse_contained: {
      text: `<p>You hold corruption in check with rotating seal crews. Pressure remains, but escalation is controlled.</p>`,
      background: 'linear-gradient(180deg, #3b6f69 0%, #1a3431 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        state.flags.batch005_sunken_curse_engaged = true;
        state.flags.batch005_sunken_corruption = 'contained';
        state.flags.batch005_sunken_curse_resolved = true;
        state.gold += 12;
        LOCATIONS.sunken_marshes.discovered = true;
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch005_sunken_curse_worsening: {
      text: `<p>You defer intervention. Corruption worsens, but command resources remain available for summit pressure in Ashen Steppe.</p>`,
      background: 'linear-gradient(180deg, #3b6f69 0%, #1a3431 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'sunken_marshes';
        state.flags.batch005_sunken_curse_engaged = true;
        state.flags.batch005_sunken_corruption = 'worsening';
        state.flags.batch005_sunken_curse_resolved = true;
        LOCATIONS.sunken_marshes.discovered = true;
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch005_ashen_summit: {
      text: `<p>Ashen Steppe convenes a diplomatic summit over corridor rights, command mandates, and inter-region stability.</p>`,
      background: 'linear-gradient(180deg, #7a543b 0%, #2f1d12 100%)',
      choices: [
        { text: 'Broker a practical coalition accord', next: 'batch005_ashen_accord' },
        { text: 'Push a hardline security compact', next: 'batch005_ashen_hardline' },
        { text: 'Keep talks open without final pact', next: 'batch005_ashen_stalemate' },
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        LOCATIONS.ashen_steppe.discovered = true;
      }
    },

    batch005_ashen_accord: {
      text: `<p>You secure an accord that lowers near-term conflict pressure and improves cooperative response lanes.</p>`,
      background: 'linear-gradient(180deg, #886246 0%, #382514 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        state.flags.batch005_summit_outcome = 'accord';
        state.flags.batch005_conflict_pressure_low = true;
        state.flags.batch005_conflict_pressure_high = false;
        state.flags.batch005_conflict_pressure_unstable = false;
        LOCATIONS.ashen_steppe.discovered = true;
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch005_ashen_hardline: {
      text: `<p>You win rapid force commitments, but marginalized factions harden and prepare to contest future doctrine.</p>`,
      background: 'linear-gradient(180deg, #886246 0%, #382514 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        state.flags.batch005_summit_outcome = 'hardline';
        state.flags.batch005_conflict_pressure_low = false;
        state.flags.batch005_conflict_pressure_high = true;
        state.flags.batch005_conflict_pressure_unstable = false;
        state.stats.defense += 1;
        LOCATIONS.ashen_steppe.discovered = true;
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch005_ashen_stalemate: {
      text: `<p>The summit closes without a final pact. Diplomacy channels remain, but the theater stays volatile.</p>`,
      background: 'linear-gradient(180deg, #886246 0%, #382514 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ashen_steppe';
        state.flags.batch005_summit_outcome = 'stalemate';
        state.flags.batch005_conflict_pressure_low = false;
        state.flags.batch005_conflict_pressure_high = false;
        state.flags.batch005_conflict_pressure_unstable = true;
        LOCATIONS.ashen_steppe.discovered = true;
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch005_moonlit_forge: {
      text: `<p>Moonlit Coast now hosts a relic-forging enclave. Gathered intelligence and alliance posture determine which output is feasible.</p>`,
      background: 'linear-gradient(180deg, #38577f 0%, #162437 100%)',
      choices: [
        {
          text: 'Forge a Tidepath Prism (mobility and route clarity)',
          next: 'batch005_forge_tidepath',
          condition: (state) => state.inventory.includes('old_map') || state.flags.batch005_auralis_rescue_complete,
          requirementText: 'Requires map intel or completed rescue routing'
        },
        {
          text: 'Forge a Wardcrest Relay (coalition defense focus)',
          next: 'batch005_forge_wardcrest',
          condition: (state) => state.flags.batch005_summit_outcome === 'accord' || state.flags.batch005_summit_outcome === 'hardline',
          requirementText: 'Requires resolved summit doctrine'
        },
        { text: 'Stabilize enclave output and return', next: 'batch005_forge_stabilized' },
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        LOCATIONS.moonlit_coast.discovered = true;
      }
    },

    batch005_forge_tidepath: {
      text: `<p>You forge the Tidepath Prism, converting fragmented route reports into reliable movement windows.</p>`,
      background: 'linear-gradient(180deg, #446994 0%, #1c314c 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        state.flags.batch005_forge_choice = 'tidepath';
        state.flags.batch005_relic_forge_complete = true;
        state.xp += 22;
        LOCATIONS.moonlit_coast.discovered = true;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch005_forge_wardcrest: {
      text: `<p>You forge the Wardcrest Relay, improving defensive cohesion across dispersed alliance outposts.</p>`,
      background: 'linear-gradient(180deg, #446994 0%, #1c314c 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        state.flags.batch005_forge_choice = 'wardcrest';
        state.flags.batch005_relic_forge_complete = true;
        state.stats.magic += 1;
        LOCATIONS.moonlit_coast.discovered = true;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch005_forge_stabilized: {
      text: `<p>You preserve enclave throughput for future chapters without committing to a flagship relic path yet.</p>`,
      background: 'linear-gradient(180deg, #446994 0%, #1c314c 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'moonlit_coast';
        state.flags.batch005_forge_choice = 'stabilized';
        state.flags.batch005_relic_forge_complete = true;
        LOCATIONS.moonlit_coast.discovered = true;
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch005_glass_foreshadow: {
      text: `<p>At Glass Dunes, a final-act foreshadowing site reveals different truths depending on alliance doctrine and campaign tone.</p>`,
      background: 'linear-gradient(180deg, #6f5936 0%, #2d2112 100%)',
      choices: [
        {
          text: 'Record the coalition dawn chronicle',
          next: 'batch005_foreshadow_accord',
          condition: (state) => state.flags.batch005_summit_outcome === 'accord',
          requirementText: 'Requires summit accord path'
        },
        {
          text: 'Record the iron doctrine dispatch',
          next: 'batch005_foreshadow_hardline',
          condition: (state) => state.flags.batch005_summit_outcome === 'hardline',
          requirementText: 'Requires hardline compact path'
        },
        { text: 'Record the fractured omen ledger', next: 'batch005_foreshadow_fractured' },
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        LOCATIONS.glass_dunes.discovered = true;
      }
    },

    batch005_foreshadow_accord: {
      text: `<p>The site projects a future where unified command can blunt Malachar's final gambit if trust holds.</p>`,
      background: 'linear-gradient(180deg, #7b6440 0%, #332513 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        state.flags.batch005_foreshadow_truth = 'accord';
        state.flags.batch005_foreshadow_complete = true;
        LOCATIONS.glass_dunes.discovered = true;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch005_foreshadow_hardline: {
      text: `<p>The visions favor decisive force, warning that brittle coalitions collapse quickly without rapid victories.</p>`,
      background: 'linear-gradient(180deg, #7b6440 0%, #332513 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        state.flags.batch005_foreshadow_truth = 'hardline';
        state.flags.batch005_foreshadow_complete = true;
        LOCATIONS.glass_dunes.discovered = true;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch005_foreshadow_fractured: {
      text: `<p>The ledger reveals conflicting end states shaped by unresolved doctrine and unstable alliances.</p>`,
      background: 'linear-gradient(180deg, #7b6440 0%, #332513 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'glass_dunes';
        state.flags.batch005_foreshadow_truth = 'fractured';
        state.flags.batch005_foreshadow_complete = true;
        LOCATIONS.glass_dunes.discovered = true;
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch005_ironroot_legend_chain: {
      text: `<p>Ironroot Forest hides a micro-location chain tied to local legend part VI. Clue fragments here can redirect faction routing in Thornvale.</p>`,
      background: 'linear-gradient(180deg, #355d3d 0%, #152619 100%)',
      choices: [
        {
          text: 'Trace the next legend clue site',
          next: 'batch005_ironroot_clue_found',
          condition: (state) => (state.flags.batch005_legend_clues ?? 0) < BATCH005_LEGEND_MAX_CLUES,
          requirementText: 'Three clue sites are available'
        },
        {
          text: 'Assemble legend part VI from gathered clues',
          next: 'batch005_ironroot_legend_compiled',
          condition: (state) => (state.flags.batch005_legend_clues ?? 0) >= 1,
          requirementText: 'Requires at least one clue'
        },
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch005_ironroot_clue_found: {
      text: `<p>You recover another carved marker. The legend thread now ties frontier doctrine shifts to hidden command channels in Thornvale.</p>`,
      background: 'linear-gradient(180deg, #41724c 0%, #1a3120 100%)',
      choices: [
        { text: 'Continue the clue chain', next: 'batch005_ironroot_legend_chain' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        const clues = Math.min(BATCH005_LEGEND_MAX_CLUES, (state.flags.batch005_legend_clues ?? 0) + 1);
        state.flags.batch005_legend_clues = clues;
        if (clues >= BATCH005_LEGEND_MAX_CLUES) {
          completeBatch005LegendPartVI(state);
        }
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch005_ironroot_legend_compiled: {
      text: `<p>You compile part VI of the local legend, revealing a faction outpost protocol now active in Thornvale Hinterlands.</p>`,
      background: 'linear-gradient(180deg, #41724c 0%, #1a3120 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'ironroot_forest';
        completeBatch005LegendPartVI(state);
        LOCATIONS.ironroot_forest.discovered = true;
      }
    },

    batch005_thornvale_outpost: {
      text: `<p>In Thornvale Hinterlands, an NPC faction outpost unlocks branching contracts shaped by your alliance reputation.</p>`,
      background: 'linear-gradient(180deg, #3d5539 0%, #182216 100%)',
      choices: [
        { text: 'Back the Dawnward Wardens charter', next: 'batch005_thornvale_wardens' },
        { text: 'Back the Veilborne Seekers charter', next: 'batch005_thornvale_seekers' },
        { text: 'Enforce a balanced dual-charter model', next: 'batch005_thornvale_balanced' },
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    },

    batch005_thornvale_wardens: {
      text: `<p>The Dawnward Wardens prioritize stable escort corridors and hardened response contracts for your campaign.</p>`,
      background: 'linear-gradient(180deg, #4b6947 0%, #1f2f1d 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        state.flags.batch005_outpost_alignment = 'wardens';
        state.flags.batch005_outpost_complete = true;
        state.stats.defense += 1;
        LOCATIONS.thornvale_hinterlands.discovered = true;
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch005_thornvale_seekers: {
      text: `<p>The Veilborne Seekers open intelligence-heavy contracts built around reconnaissance and adaptive routing.</p>`,
      background: 'linear-gradient(180deg, #4b6947 0%, #1f2f1d 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        state.flags.batch005_outpost_alignment = 'seekers';
        state.flags.batch005_outpost_complete = true;
        state.stats.magic += 1;
        LOCATIONS.thornvale_hinterlands.discovered = true;
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch005_thornvale_balanced: {
      text: `<p>You secure a dual-charter compromise, widening contract access without exclusive faction lock-in.</p>`,
      background: 'linear-gradient(180deg, #4b6947 0%, #1f2f1d 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        state.flags.batch005_outpost_alignment = 'balanced';
        state.flags.batch005_outpost_complete = true;
        state.gold += 20;
        LOCATIONS.thornvale_hinterlands.discovered = true;
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch005_wilds_traversal: {
      text: `<p>Whispering Wilds route geometry has shifted. Major campaign decisions now change viable traversal paths across the region.</p>`,
      background: 'linear-gradient(180deg, #305d3e 0%, #132618 100%)',
      choices: [
        {
          text: 'Secure the main ridge path for stable logistics',
          next: 'batch005_wilds_route_secured',
          condition: (state) => state.flags.batch005_outpost_alignment === 'wardens' || state.flags.batch005_summit_outcome === 'accord',
          requirementText: 'Requires stable coalition posture'
        },
        {
          text: 'Reroute through covert lowland channels',
          next: 'batch005_wilds_route_rerouted',
          condition: (state) => state.flags.batch005_outpost_alignment === 'seekers' || state.flags.batch005_summit_outcome === 'hardline',
          requirementText: 'Requires intelligence-heavy posture'
        },
        { text: 'Force through fractured hazard corridors', next: 'batch005_wilds_route_hazard' },
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        LOCATIONS.whispering_wilds.discovered = true;
      }
    },

    batch005_wilds_route_secured: {
      text: `<p>You stabilize ridge routes and restore predictable convoy timing through the Wilds.</p>`,
      background: 'linear-gradient(180deg, #3a704c 0%, #17311f 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        state.flags.batch005_traversal_route = 'secured';
        state.flags.batch005_traversal_complete = true;
        state.gold += 12;
        LOCATIONS.whispering_wilds.discovered = true;
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    batch005_wilds_route_rerouted: {
      text: `<p>You open covert channels that speed strike teams while keeping route intent deniable.</p>`,
      background: 'linear-gradient(180deg, #3a704c 0%, #17311f 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        state.flags.batch005_traversal_route = 'rerouted';
        state.flags.batch005_traversal_complete = true;
        state.xp += 20;
        LOCATIONS.whispering_wilds.discovered = true;
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    batch005_wilds_route_hazard: {
      text: `<p>You keep momentum through unstable terrain at heavy operational strain, preserving speed but increasing risk exposure.</p>`,
      background: 'linear-gradient(180deg, #3a704c 0%, #17311f 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'whispering_wilds';
        state.flags.batch005_traversal_route = 'hazard';
        state.flags.batch005_traversal_complete = true;
        state.health = Math.max(1, state.health - 8);
        LOCATIONS.whispering_wilds.discovered = true;
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    batch005_crypt_memory_echo: {
      text: `<p>Cryptward Depths houses a memory-echo landmark that responds to relic resonance. Triggering it can reveal backstory lines tied to shard logistics and ward failures.</p>`,
      background: 'linear-gradient(180deg, #3a3656 0%, #171428 100%)',
      choices: [
        {
          text: 'Place a relic and trigger the memory-echo',
          next: 'batch005_crypt_memory_echo_triggered',
          condition: (state) => ['old_map', 'shard_messenger', 'elara_amulet', 'shield_ring'].some(item => state.inventory.includes(item)),
          requirementText: 'Requires a relic from prior adventures'
        },
        { text: 'Record the landmark and return', next: 'batch005_crypt_memory_echo_logged' },
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        LOCATIONS.cryptward_depths.discovered = true;
      }
    },

    batch005_crypt_memory_echo_triggered: {
      text: `<p>The landmark ignites and projects courier routes, fractured ward protocols, and hidden fallback timings from the early collapse years.</p>`,
      background: 'linear-gradient(180deg, #474268 0%, #1f1a33 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        state.flags.batch005_memory_echo_complete = true;
        state.flags.batch005_memory_echo_triggered = true;
        state.xp += 24;
        LOCATIONS.cryptward_depths.discovered = true;
        LOCATIONS.stormfang_range.discovered = true;
      }
    },

    batch005_crypt_memory_echo_logged: {
      text: `<p>You catalog the echo signatures without full activation. The landmark still yields enough context to unlock the Stormfang conflict lead.</p>`,
      background: 'linear-gradient(180deg, #474268 0%, #1f1a33 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'cryptward_depths';
        state.flags.batch005_memory_echo_complete = true;
        state.flags.batch005_memory_echo_triggered = false;
        LOCATIONS.cryptward_depths.discovered = true;
        LOCATIONS.stormfang_range.discovered = true;
      }
    },

    batch005_storm_conflict: {
      text: `<p>Stormfang Range fractures into a settlement conflict between corridor builders and old-watch wardens. Your ruling permanently changes nearby vendor behavior.</p>`,
      background: 'linear-gradient(180deg, #3e3b53 0%, #181629 100%)',
      choices: [
        { text: 'Back settlement convoy guilds', next: 'batch005_storm_settlers' },
        { text: 'Back old-watch wardens', next: 'batch005_storm_wardens' },
        {
          text: 'Broker shared governance charter',
          next: 'batch005_storm_mediated',
          condition: (state) => state.flags.batch005_outpost_alignment === 'balanced' || state.flags.batch005_summit_outcome === 'accord',
          requirementText: 'Requires balanced or accord posture'
        },
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        LOCATIONS.stormfang_range.discovered = true;
      }
    },

    batch005_storm_settlers: {
      text: `<p>You formalize convoy guild control. Trade volume rises quickly, but warden patrol doctrine is reduced around remote trails.</p>`,
      background: 'linear-gradient(180deg, #4b4763 0%, #1f1c35 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        state.flags.batch005_storm_conflict_outcome = 'settlers';
        state.flags.batch005_storm_vendor_trade_open = true;
        state.flags.batch005_storm_vendor_warden_control = false;
        state.flags.batch005_storm_vendor_shared = false;
        state.flags.batch005_storm_conflict_complete = true;
        state.gold += 24;
        LOCATIONS.stormfang_range.discovered = true;
      }
    },

    batch005_storm_wardens: {
      text: `<p>You grant old-watch wardens command authority. Security strengthens, but trade flexibility tightens under stricter checkpoints.</p>`,
      background: 'linear-gradient(180deg, #4b4763 0%, #1f1c35 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        state.flags.batch005_storm_conflict_outcome = 'wardens';
        state.flags.batch005_storm_vendor_trade_open = false;
        state.flags.batch005_storm_vendor_warden_control = true;
        state.flags.batch005_storm_vendor_shared = false;
        state.flags.batch005_storm_conflict_complete = true;
        state.stats.defense += 1;
        LOCATIONS.stormfang_range.discovered = true;
      }
    },

    batch005_storm_mediated: {
      text: `<p>You secure a mediated charter that preserves trade lanes while retaining mixed warden oversight.</p>`,
      background: 'linear-gradient(180deg, #4b4763 0%, #1f1c35 100%)',
      choices: [
        { text: 'Return to Batch 005 planning', next: 'batch005_hub' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_range';
        state.flags.batch005_storm_conflict_outcome = 'mediated';
        state.flags.batch005_storm_vendor_trade_open = false;
        state.flags.batch005_storm_vendor_warden_control = false;
        state.flags.batch005_storm_vendor_shared = true;
        state.flags.batch005_storm_conflict_complete = true;
        state.xp += 24;
        LOCATIONS.stormfang_range.discovered = true;
      }
    },

    // ===== WHISPERING WOODS =====
    woods_entrance: {
      text: `<p>The Whispering Woods live up to their name. The moment you step beneath the canopy, you hear them — voices just below the threshold of understanding, rustling through the leaves like the memory of language.</p>
<p>The path is overgrown. Three years ago, this was a well-traveled road to the sacred grove. Now the forest has reclaimed it with a hunger that feels almost deliberate.</p>
<p>After an hour of pushing through undergrowth, the path forks. To the left, the trees thin slightly — easier going, but longer. To the right, thick webs span between ancient oaks, and the whispers grow louder.</p>`,
      background: 'linear-gradient(180deg, #0a2a0a 0%, #051505 100%)',
      choices: [
        { text: 'Take the left path (safer, longer)', next: 'woods_left_path' },
        { text: 'Take the right path through the webs (dangerous, direct)', next: 'woods_right_path' },
        {
          text: 'Use your ranger skills to find a hidden trail',
          next: 'woods_hidden_path',
          condition: (state) => state.flags.has_map || state.flags.mira_gift,
          requirementText: 'Requires map or Elder\'s guidance'
        }
      ],
      onEnter: (state) => {
        state.location = 'whispering_woods';
        LOCATIONS.whispering_woods.discovered = true;
      }
    },

    woods_left_path: {
      text: `<p>The left path winds through mossy clearings and babbling streams. Peaceful, almost deceptively so. You make good time until you come across a bridge over a ravine — and the bridge is occupied.</p>
<p>A massive <span class="story-emphasis">Shadow Wolf</span> sits in the middle of the crossing, its eyes glowing with unnatural purple light. The corruption of the shattered Crown has touched even the animals here.</p>
<p>It sees you and rises, hackles bristling, a low growl building in its throat.</p>`,
      background: 'linear-gradient(180deg, #0a2a0a 0%, #051505 100%)',
      choices: [
        { text: '⚔️ Draw your weapon and fight', next: 'woods_wolf_fight', type: 'combat' },
        {
          text: '🎵 Try to calm the wolf with slow movements',
          next: 'woods_wolf_calm',
          type: 'diplomacy'
        }
      ]
    },

    woods_wolf_fight: {
      text: `<p>You draw steel and face the corrupted wolf...</p>`,
      background: 'linear-gradient(180deg, #0a2a0a 0%, #051505 100%)',
      combat: 'wolf',
      onCombatWin: 'woods_after_wolf',
      onCombatLose: 'death_generic',
      choices: []
    },

    woods_wolf_calm: {
      text: `<p>You lower yourself slowly, making no sudden movements. The wolf snarls, but you hold your ground, keeping your eyes down in a submissive gesture.</p>
<p>You reach out with your hand, speaking softly. For a long moment, the purple light in its eyes flickers — then fades. The wolf whimpers, shakes its head, and slowly pads aside, letting you pass.</p>
<p>As you cross the bridge, you notice the corruption receding from the wolf's fur. Whatever dark magic gripped it is losing its hold, if only temporarily.</p>
<p><span class="story-action">+20 XP (Peaceful resolution)</span></p>`,
      background: 'linear-gradient(180deg, #0a2a0a 0%, #051505 100%)',
      choices: [
        { text: 'Continue deeper into the forest', next: 'woods_grove_approach' }
      ],
      onEnter: (state) => {
        state.xp += 20;
        state.flags.calmed_wolf = true;
      }
    },

    woods_after_wolf: {
      text: `<p>The Shadow Wolf falls, and the purple light fades from its eyes. In death, it looks almost peaceful — just a large wolf, freed from dark magic's grip. You feel a pang of regret.</p>
<p>Beyond the bridge, the forest grows thicker and the whispers grow louder. You're getting close to the sacred grove.</p>`,
      background: 'linear-gradient(180deg, #0a2a0a 0%, #051505 100%)',
      choices: [
        { text: 'Continue to the sacred grove', next: 'woods_grove_approach' }
      ]
    },

    woods_right_path: {
      text: `<p>You push through the webs, your blade clearing the way. The silk is unnaturally thick and sticky. The whispers here are frantic, warning.</p>
<p>Then the ground trembles. From the canopy above, a <span class="story-emphasis">Giant Forest Spider</span> descends on a thread of web as thick as your arm. Its mandibles click hungrily.</p>`,
      background: 'linear-gradient(180deg, #0a2a0a 0%, #051505 100%)',
      combat: 'forest_spider',
      onCombatWin: 'woods_after_spider',
      onCombatLose: 'death_generic',
      choices: []
    },

    woods_after_spider: {
      text: `<p>The spider curls in on itself, dead. Among its webbed prey, you find a bundle that contains a <span class="story-emphasis">mana potion</span> and some coins — <span class="story-action">+12 gold</span>.</p>
<p>The direct path has brought you close to the sacred grove already. Through the trees, you can see an unnatural green glow.</p>`,
      background: 'linear-gradient(180deg, #0a2a0a 0%, #051505 100%)',
      choices: [
        { text: 'Approach the sacred grove', next: 'woods_grove_approach' }
      ],
      onEnter: (state) => {
        state.inventory.push('mana_potion');
        state.gold += 12;
      }
    },

    woods_hidden_path: {
      text: `<p>Your map (and ranger training) reveals what others would miss — deer trails and old markers carved into bark, pointing toward a path the forest itself seems to have hidden.</p>
<p>You slip between ancient oaks along a root-covered trail that leads straight and true. The whispers here are different — not warning, but guiding, as if the forest recognizes a friend.</p>
<p>In a sunny clearing, you find wild healing herbs. <span class="story-action">+20 health restored.</span></p>
<p>Within the hour, you emerge near the sacred grove, untroubled and unscathed.</p>`,
      background: 'linear-gradient(180deg, #0a2a0a 0%, #051505 100%)',
      choices: [
        { text: 'Approach the sacred grove', next: 'woods_grove_approach' }
      ],
      onEnter: (state) => {
        state.health = Math.min(state.health + 20, state.maxHealth);
        state.flags.hidden_path = true;
      }
    },

    woods_grove_approach: {
      text: `<p>The sacred grove is a circle of massive oaks surrounding a moss-covered altar. Once, it radiated peace and ancient magic. Now... the trees are twisted, bark blackened, and pulsing veins of sickly green light run through the ground like infected wounds.</p>
<p>At the center of the grove, the Crown shard floats above the altar, suspended in a web of dark energy. And standing guard is a woman — wild-haired, wrapped in vines and leaves. <span class="story-emphasis">Elara</span>, the forest witch.</p>
<p>But something is wrong. Her eyes glow the same corrupted green as the grove. She raises a hand, and thorny vines erupt from the ground.</p>
<p><span class="story-dialogue">"Another thief. The forest will not surrender its heart."</span></p>`,
      background: 'linear-gradient(180deg, #0a3a0a 0%, #052505 100%)',
      choices: [
        { text: '⚔️ Fight the corrupted Elara', next: 'woods_elara_fight', type: 'combat' },
        {
          text: '✨ Use the shard you carry to purify the corruption',
          next: 'woods_elara_purify',
          type: 'magic',
          condition: (state) => state.mana >= 20,
          requirementText: 'Requires 20 mana'
        },
        {
          text: '🕊️ "Elara! The Crown can be reforged. I\'m here to save the forest, not rob it."',
          next: 'woods_elara_talk',
          type: 'diplomacy'
        }
      ]
    },

    woods_elara_fight: {
      text: `<p>The corrupted witch shrieks and the grove comes alive with thorns and grasping roots...</p>`,
      background: 'linear-gradient(180deg, #0a3a0a 0%, #052505 100%)',
      combat: 'forest_spider',
      onCombatWin: 'woods_elara_defeated',
      onCombatLose: 'death_generic',
      choices: [],
      onEnter: (state) => {
        state.flags.fought_elara = true;
      }
    },

    woods_elara_defeated: {
      text: `<p>Elara falls, the green fire leaving her eyes. The corruption recedes like a tide, and she gasps — herself again, wounded but alive.</p>
<p><span class="story-dialogue">"The darkness... it took me. I tried to protect the shard, but it turned my own magic against me."</span></p>
<p>She presses the <span class="story-emphasis">Crown Shard</span> into your hands, along with her personal <span class="story-emphasis">amulet</span>. <span class="story-dialogue">"Take these. Reforge the Crown. It's the only way to heal the land."</span></p>
<p><span class="story-action">Crown Shard (Heartwood) acquired! (2/5)</span></p>`,
      background: 'linear-gradient(180deg, #0a2a0a 0%, #051505 100%)',
      choices: [
        { text: 'Return to Thornvale to plan your next move', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.inventory.push('shard_forest');
        state.inventory.push('elara_amulet');
        state.flags.shard_count = (state.flags.shard_count || 1) + 1;
        state.flags.woods_complete = true;
      }
    },

    woods_elara_purify: {
      text: `<p>You pull out the Crown shard you carry. It blazes with golden light — and something remarkable happens. The shard above the altar resonates, pulsing in harmony. The two fragments <em>recognize</em> each other.</p>
<p>A wave of warm light sweeps through the grove. The green corruption hisses and burns away like mist in sunlight. Elara screams — then falls silent, the madness leaving her eyes.</p>
<p>She collapses to her knees, trembling. <span class="story-dialogue">"You... you freed me. The darkness held me for months. I thought I'd never..."</span></p>
<p>She rises unsteadily and takes the floating shard from the altar herself, offering it to you along with her own <span class="story-emphasis">amulet</span>. <span class="story-dialogue">"You carry the dawn's light, ranger. Take these. Save the rest of this kingdom as you've saved me."</span></p>
<p><span class="story-action">Crown Shard (Heartwood) acquired! (2/5)</span></p>
<p><span class="story-action">Elara's blessing: +10 max mana</span></p>`,
      background: 'linear-gradient(180deg, #0a2a0a 0%, #1a3a1a 100%)',
      choices: [
        { text: 'Return to Thornvale to plan your next move', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.mana -= 20;
        state.inventory.push('shard_forest');
        state.inventory.push('elara_amulet');
        state.flags.shard_count = (state.flags.shard_count || 1) + 1;
        state.flags.woods_complete = true;
        state.flags.elara_blessed = true;
        state.maxMana += 10;
        state.mana = state.maxMana;
      }
    },

    woods_elara_talk: {
      text: `<p><span class="story-dialogue">"LIES!"</span> Elara's voice reverberates with unnatural power. Vines lash toward you — but you hold your ground.</p>
<p><span class="story-dialogue">"The Crown of Dawn was forged to protect this forest — to protect ALL of Eldermoor! Malachar shattered it, not me. Feel the shard I carry — it still holds the dawn's light!"</span></p>
<p>You hold up your shard. Its warm glow pushes back the green corruption like a candle in the dark. Elara hesitates. The vines stop.</p>
<p><span class="story-dialogue">"I... I can feel it. The warmth. I had forgotten..."</span></p>
<p>The madness cracks. Tears stream down her face as the corruption peels away from the grove. She hands you the shard from the altar and a protective <span class="story-emphasis">amulet</span>.</p>
<p><span class="story-dialogue">"Forgive me. The darkness clouds everything. Go — reforge the Crown. I'll begin healing the forest."</span></p>
<p><span class="story-action">Crown Shard (Heartwood) acquired! (2/5)</span></p>`,
      background: 'linear-gradient(180deg, #0a2a0a 0%, #1a3a1a 100%)',
      choices: [
        { text: 'Return to Thornvale to plan your next move', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.inventory.push('shard_forest');
        state.inventory.push('elara_amulet');
        state.flags.shard_count = (state.flags.shard_count || 1) + 1;
        state.flags.woods_complete = true;
        state.flags.elara_peaceful = true;
        state.xp += 30;
      }
    },

    // ===== ANCIENT CRYPT =====
    crypt_entrance: {
      text: `<p>The Ancient Crypt lies beneath the ruins of Hollowreach, a town swallowed by the earth during the Crown's shattering. The entrance is a gaping maw of broken stone, descending into absolute darkness.</p>
<p>The air rising from below is cold and carries the faint scent of decay. Torches line the walls, long extinguished. Your breath mists in the chill.</p>
<p>Near the entrance, you spot signs of a camp — the mercenaries from the tavern. Their gear is here, but they've already gone in.</p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      choices: [
        { text: 'Light a torch and descend carefully', next: 'crypt_descent' },
        {
          text: 'Follow the mercenaries\' trail',
          next: 'crypt_mercs',
          condition: (state) => state.flags.merc_alliance,
          requirementText: 'Requires mercenary alliance'
        }
      ],
      onEnter: (state) => {
        state.location = 'ancient_crypt';
        LOCATIONS.ancient_crypt.discovered = true;
      }
    },

    crypt_descent: {
      text: `<p>The stairs spiral down into the earth. Your torchlight catches carved reliefs on the walls — scenes of ancient kings and battles. This was once a place of honor.</p>
<p>Now, you hear things moving in the dark. Scraping. Clicking. The restless dead.</p>
<p>At the bottom of the stairs, the crypt opens into a grand hall. Three passages lead deeper:</p>
<p>• The <strong>King's Way</strong> — the main corridor, grand but likely guarded</p>
<p>• A <strong>collapsed side passage</strong> — rubble partially blocking it, but passable</p>
<p>• A <strong>flooded tunnel</strong> — water glistens in the torchlight</p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      choices: [
        { text: 'Take the King\'s Way', next: 'crypt_kings_way' },
        {
          text: 'Squeeze through the collapsed passage',
          next: 'crypt_collapsed',
          condition: (state) => !state.inventory.includes('chainmail'),
          requirementText: 'Too narrow for heavy armor'
        },
        {
          text: 'Wade into the flooded tunnel',
          next: 'crypt_flooded',
          condition: (state) => state.inventory.includes('rope'),
          requirementText: 'Requires rope'
        }
      ]
    },

    crypt_mercs: {
      text: `<p>You follow the mercenaries' trail — scattered torch stubs and boot prints in the dust. They were in a hurry.</p>
<p>Two chambers in, you find them. Or what's left. Brick and his men are surrounded by <span class="story-emphasis">Skeletal Guardians</span> in a narrow corridor, fighting desperately. Two are already down.</p>
<p>Brick sees you and shouts: <span class="story-dialogue">"Ranger! Help us and I'll double your share!"</span></p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      choices: [
        { text: '⚔️ Charge in and help them fight', next: 'crypt_help_mercs', type: 'combat' },
        { text: 'Use the distraction to slip past toward the shard', next: 'crypt_sneak_past', type: 'stealth' }
      ]
    },

    crypt_help_mercs: {
      text: `<p>You draw your weapon and wade into the fray alongside the mercenaries...</p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      combat: 'skeleton',
      onCombatWin: 'crypt_mercs_saved',
      onCombatLose: 'death_generic',
      choices: []
    },

    crypt_mercs_saved: {
      text: `<p>The last skeleton crumbles to dust. Brick leans against a wall, breathing hard. Only he and one other survived.</p>
<p><span class="story-dialogue">"I owe you, ranger. Forget the treasure — this place is death. But we found something deeper in."</span> He holds up a crude map scratched on parchment. <span class="story-dialogue">"The burial chamber of King Thalric. That's where the glow is coming from."</span></p>
<p>He hands you the map and a pouch of coins. <span class="story-action">+20 gold</span>. <span class="story-dialogue">"We're getting out. Good luck."</span></p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      choices: [
        { text: 'Follow the map to King Thalric\'s burial chamber', next: 'crypt_burial_chamber' }
      ],
      onEnter: (state) => {
        state.gold += 20;
        state.flags.mercs_survived = true;
      }
    },

    crypt_sneak_past: {
      text: `<p>Cold, perhaps. But practical. While the skeletons are busy with the mercenaries, you slip through the shadows like the ranger you are. Their screams echo behind you as you pad deeper into the crypt.</p>
<p>The guilt is a cold stone in your stomach. But you're here for the fate of the realm, not a mercenary's gold.</p>
<p>Ahead, a faint blue glow pulses from a grand doorway — the burial chamber.</p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      choices: [
        { text: 'Enter the burial chamber', next: 'crypt_burial_chamber' }
      ],
      onEnter: (state) => {
        state.flags.abandoned_mercs = true;
      }
    },

    crypt_kings_way: {
      text: `<p>The King's Way is a broad corridor lined with stone sarcophagi. Your footsteps echo. Then other footsteps answer — the grating sound of bone on stone.</p>
<p>A <span class="story-emphasis">Skeletal Guardian</span> rises from the nearest sarcophagus, ancient sword in hand, eye sockets blazing with pale fire. It was a knight once, sworn to protect these halls beyond death.</p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      combat: 'skeleton',
      onCombatWin: 'crypt_after_skeleton',
      onCombatLose: 'death_generic',
      choices: []
    },

    crypt_after_skeleton: {
      text: `<p>The skeleton collapses into a pile of old bones. As it falls, you notice something — the knight's shield bears the crest of King Thalric. The burial chamber must be close.</p>
<p>Pressing on, you reach a grand doorway. Beyond it, a pale blue glow pulses like a heartbeat.</p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      choices: [
        { text: 'Enter the burial chamber', next: 'crypt_burial_chamber' }
      ]
    },

    crypt_collapsed: {
      text: `<p>You squeeze through the gap in the rubble, armor scraping against stone. It's a tight fit, but you make it through into a forgotten passage — a servants' corridor, hidden from the main crypt.</p>
<p>The passage leads you past treasure rooms (long looted) and storage alcoves. In one, you find a dusty chest containing a <span class="story-emphasis">health potion</span> and <span class="story-action">+15 gold</span>.</p>
<p>The passage connects to the burial chamber from a side entrance. You emerge behind a pillar, hidden from whatever guards the main door.</p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      choices: [
        { text: 'Observe the burial chamber from hiding', next: 'crypt_burial_chamber_stealth' }
      ],
      onEnter: (state) => {
        state.inventory.push('health_potion');
        state.gold += 15;
      }
    },

    crypt_flooded: {
      text: `<p>You tie the rope to a stone pillar and wade into the flooded tunnel. The water is ice-cold and rises to your waist. Your torch sputters but holds.</p>
<p>The tunnel opens into an underground river chamber — and there, on a stone platform above the water, rests a <span class="story-emphasis">Scroll of Fireball</span> in a sealed case. Someone stashed this here long ago.</p>
<p>Beyond the chamber, rough-hewn steps lead up to the burial chamber level.</p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      choices: [
        { text: 'Take the scroll and continue to the burial chamber', next: 'crypt_burial_chamber' }
      ],
      onEnter: (state) => {
        state.inventory.push('fire_scroll');
      }
    },

    crypt_burial_chamber_stealth: {
      text: `<p>From behind the pillar, you can see the burial chamber clearly. King Thalric's sarcophagus sits on a raised dais, and floating above it — the <span class="story-emphasis">Crown Shard</span>, pulsing with cold blue light.</p>
<p>But the chamber isn't unguarded. A <span class="story-emphasis">Cursed Wraith</span> drifts above the sarcophagus — the tortured spirit of a court mage, bound here by the Crown's shattering. It hasn't noticed you yet.</p>
<p>You could try to grab the shard and run, or face the wraith head-on.</p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      choices: [
        { text: '🏃 Grab the shard and run', next: 'crypt_grab_run', type: 'stealth' },
        { text: '⚔️ Face the wraith', next: 'crypt_wraith_fight', type: 'combat' }
      ]
    },

    crypt_burial_chamber: {
      text: `<p>The burial chamber of King Thalric is vast and solemn. The old king's stone sarcophagus dominates the center, and above it, the <span class="story-emphasis">Crown Shard</span> floats in a halo of cold blue light.</p>
<p>As you step forward, the temperature plunges. A shape materializes from the shadows — a <span class="story-emphasis">Cursed Wraith</span>, its spectral form writhing with dark energy. The voice that emerges is like wind through broken glass.</p>
<p><span class="story-dialogue">"None... shall disturb... the king's rest..."</span></p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      choices: [
        { text: '⚔️ Fight the wraith', next: 'crypt_wraith_fight', type: 'combat' },
        {
          text: '✨ Use your Crown shard to put the spirit to rest',
          next: 'crypt_wraith_rest',
          type: 'magic',
          condition: (state) => state.mana >= 15,
          requirementText: 'Requires 15 mana'
        }
      ]
    },

    crypt_wraith_fight: {
      text: `<p>The wraith shrieks and lunges, its spectral claws reaching for your soul...</p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      combat: 'wraith',
      onCombatWin: 'crypt_wraith_defeated',
      onCombatLose: 'death_generic',
      choices: []
    },

    crypt_wraith_defeated: {
      text: `<p>The wraith dissolves with a final agonized wail, its dark energy dispersing like smoke. The burial chamber falls silent.</p>
<p>The Crown shard descends gently from above the sarcophagus. You take it reverently — it's ice-cold, but warms quickly in your grasp.</p>
<p><span class="story-action">Crown Shard (Crypt) acquired!</span></p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      choices: [
        { text: 'Leave the crypt and return to Thornvale', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.inventory.push('shard_crypt');
        state.flags.shard_count = (state.flags.shard_count || 1) + 1;
        state.flags.crypt_complete = true;
      }
    },

    crypt_wraith_rest: {
      text: `<p>You hold up your Crown shard. Its golden light blazes against the wraith's darkness. The spirit recoils — then stills.</p>
<p><span class="story-dialogue">"The light... the Crown's light... is that... hope?"</span></p>
<p>The wraith's tortured form softens. For a moment, you see the person it was — a young mage, loyal to the king.</p>
<p><span class="story-dialogue">"I've been trapped... so long. Please... take the shard. Reforge the Crown. Let me rest."</span></p>
<p>The spirit fades peacefully as you take the shard from above the sarcophagus. The chamber warms, and you swear you hear a whispered <span class="story-dialogue">"thank you."</span></p>
<p><span class="story-action">Crown Shard (Crypt) acquired!</span></p>
<p><span class="story-action">Peaceful resolution: +30 XP, full mana restored</span></p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #1a1a3a 100%)',
      choices: [
        { text: 'Leave the crypt and return to Thornvale', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.mana = state.maxMana;
        state.inventory.push('shard_crypt');
        state.flags.shard_count = (state.flags.shard_count || 1) + 1;
        state.flags.crypt_complete = true;
        state.flags.wraith_peaceful = true;
        state.xp += 30;
      }
    },

    crypt_grab_run: {
      text: `<p>You dart from behind the pillar, snatching the shard from the air in one fluid motion. The wraith shrieks in fury — but you're already running, boots pounding on ancient stone.</p>
<p>Spectral claws rake at your back — <span class="story-action">-15 health</span> — but you burst through the doorway and don't stop until you see daylight.</p>
<p><span class="story-action">Crown Shard (Crypt) acquired!</span></p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      choices: [
        { text: 'Return to Thornvale, nursing your wounds', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.health -= 15;
        state.inventory.push('shard_crypt');
        state.flags.shard_count = (state.flags.shard_count || 1) + 1;
        state.flags.crypt_complete = true;
      }
    },

    // ===== STORMFANG PEAK =====
    mountain_entrance: {
      text: `<p>Stormfang Peak rises above the clouds, its summit wreathed in perpetual lightning. The old mountain road is treacherous — crumbling steps carved into the cliff face, buffeted by howling winds.</p>
<p>You've been climbing for hours. The Crown shards in your pack pulse with increasing urgency the higher you go. Something powerful waits above.</p>
<p>A wide ledge offers a rest point. From here, you can see two routes upward:</p>
<p>• The <strong>main path</strong> — exposed switchbacks up the mountainside</p>
<p>• A <strong>cave system</strong> — dark, but sheltered from the wind</p>`,
      background: 'linear-gradient(180deg, #2a2a3a 0%, #15152a 100%)',
      choices: [
        { text: 'Take the exposed main path', next: 'mountain_main_path' },
        { text: 'Enter the cave system', next: 'mountain_caves' }
      ],
      onEnter: (state) => {
        state.location = 'stormfang_peak';
        LOCATIONS.stormfang_peak.discovered = true;
      }
    },

    mountain_main_path: {
      text: `<p>The wind hits you like a wall as you leave the shelter of the ledge. Each step is a battle against the gusts. Below, the world stretches out in miniature — the Whispering Woods a dark smudge, Thornvale a cluster of lights.</p>
<p>Halfway up, a <span class="story-emphasis">Young Drake</span> drops from the sky and lands on the path before you. It's not the mountain's guardian — just a youngster, but its jaws drip with flame, and it's hungry.</p>`,
      background: 'linear-gradient(180deg, #2a2a3a 0%, #15152a 100%)',
      combat: 'drake',
      onCombatWin: 'mountain_after_drake',
      onCombatLose: 'death_generic',
      choices: []
    },

    mountain_after_drake: {
      text: `<p>The young drake tumbles off the cliff edge, dead. Among the bones in its perch, you find a stash of coins — <span class="story-action">+25 gold</span> — and a <span class="story-emphasis">health potion</span>.</p>
<p>Above you, the summit is close. Lightning flashes, and in its light, you see the massive silhouette of something ancient perched atop the peak.</p>
<p><span class="story-emphasis">Stormfang the Ancient</span> awaits.</p>`,
      background: 'linear-gradient(180deg, #2a2a3a 0%, #15152a 100%)',
      choices: [
        { text: 'Ascend to the summit', next: 'mountain_summit' }
      ],
      onEnter: (state) => {
        state.gold += 25;
        state.inventory.push('health_potion');
      }
    },

    mountain_caves: {
      text: `<p>The cave system is warmer than expected — heat rises from somewhere deep below. Bioluminescent fungi light your way with an eerie blue glow.</p>
<p>The caves wind upward through the mountain's heart. In one chamber, you discover an ancient dwarven shrine, long abandoned. On the altar sits an <span class="story-emphasis">enchanted blade</span> — the Moonfire Blade, humming with stored magic.</p>
<p><span class="story-dialogue">An inscription reads: "For the one who walks in darkness to bring the dawn."</span></p>`,
      background: 'linear-gradient(180deg, #1a1a2a 0%, #0a0a15 100%)',
      choices: [
        { text: 'Take the Moonfire Blade', next: 'mountain_caves_exit' }
      ],
      onEnter: (state) => {
        if (!state.inventory.includes('enchanted_blade')) {
          state.inventory.push('enchanted_blade');
        }
      }
    },

    mountain_caves_exit: {
      text: `<p>The Moonfire Blade feels perfectly balanced in your grip, its silver edge glowing with pale fire. A worthy weapon for what lies ahead.</p>
<p>The cave system emerges just below the summit. Through the cave mouth, you can see the peak — and the vast, scaled form of <span class="story-emphasis">Stormfang the Ancient</span>, coiled around a nest of lightning-scorched stone.</p>
<p>The dragon's eyes — amber, ancient, intelligent — find you immediately.</p>`,
      background: 'linear-gradient(180deg, #2a2a3a 0%, #15152a 100%)',
      choices: [
        { text: 'Step onto the summit', next: 'mountain_summit' }
      ]
    },

    mountain_summit: {
      text: `<p><span class="story-emphasis">Stormfang the Ancient</span> is magnificent and terrifying. A dragon of the old world, its scales are dark as thunderclouds, and lightning crackles between its horns. It is the last of its kind.</p>
<p>Between its massive claws, the <span class="story-emphasis">Crown Shard</span> glows like a captured star.</p>
<p>The dragon's voice rumbles like distant thunder: <span class="story-dialogue">"I know why you have come, mortal. I felt the other shards calling. But this one is MINE. Won in battle from the traitor mage's servants."</span></p>
<p>Its eyes narrow. <span class="story-dialogue">"Give me a reason not to burn you where you stand."</span></p>`,
      background: 'linear-gradient(180deg, #3a2a1a 0%, #251a0a 100%)',
      choices: [
        { text: '⚔️ "I\'ll fight you for it, dragon." (Boss fight)', next: 'mountain_dragon_fight', type: 'combat' },
        {
          text: '🕊️ "The realm dies without the Crown. You\'ll die too when the darkness spreads."',
          next: 'mountain_dragon_reason',
          type: 'diplomacy'
        },
        {
          text: '✨ Show Stormfang your collected shards — let it feel the Crown\'s power',
          next: 'mountain_dragon_shards',
          type: 'magic',
          condition: (state) => state.flags.shard_count >= 3,
          requirementText: 'Requires 3+ shards'
        }
      ]
    },

    mountain_dragon_fight: {
      text: `<p>Stormfang roars, and the mountain itself trembles. Lightning arcs from its horns as it rises to its full, terrible height...</p>`,
      background: 'linear-gradient(180deg, #3a2a1a 0%, #251a0a 100%)',
      combat: 'stormfang',
      onCombatWin: 'mountain_dragon_defeated',
      onCombatLose: 'death_dragon',
      choices: [],
      onEnter: (state) => {
        state.flags.fought_dragon = true;
      }
    },

    mountain_dragon_defeated: {
      text: `<p>Stormfang crashes to the mountain like a felled tower. The ancient dragon heaves labored breaths, its lightning dimming.</p>
<p><span class="story-dialogue">"Well fought... mortal. Perhaps... the age of dragons truly is past."</span></p>
<p>It pushes the Crown shard toward you with one massive claw. <span class="story-dialogue">"Take it. Reforge the Crown. And when the darkness is beaten... remember that the last dragon fought for this world too."</span></p>
<p>Stormfang's eyes close. Whether it sleeps or passes, you cannot tell.</p>
<p><span class="story-action">Crown Shard (Peak) acquired! (4/5)</span></p>`,
      background: 'linear-gradient(180deg, #2a2a3a 0%, #15152a 100%)',
      choices: [
        { text: 'Descend the mountain and return to Thornvale', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.inventory.push('shard_mountain');
        state.flags.shard_count = (state.flags.shard_count || 1) + 1;
        state.flags.mountain_complete = true;
      }
    },

    mountain_dragon_reason: {
      text: `<p>Stormfang is silent for a long, dangerous moment. Then it laughs — a sound like rolling boulders.</p>
<p><span class="story-dialogue">"Brave words for a creature I could swallow whole. But... you speak truth. I have felt the darkness growing. Even here, at the roof of the world, it reaches."</span></p>
<p>The dragon lowers its great head until one amber eye is level with your face. <span class="story-dialogue">"I will give you the shard, mortal. But I require an oath: when the Crown is reforged, you will use its first light to renew the wards that once protected dragonkind alongside the lesser races."</span></p>`,
      background: 'linear-gradient(180deg, #3a2a1a 0%, #251a0a 100%)',
      choices: [
        { text: '"You have my oath, Stormfang."', next: 'mountain_dragon_oath' },
        { text: '"I can\'t make promises about the Crown\'s power. But I\'ll try."', next: 'mountain_dragon_oath' }
      ]
    },

    mountain_dragon_shards: {
      text: `<p>You reach into your pack and produce the shards you've gathered. They blaze with golden light, and the shard in Stormfang's claws answers — all of them pulsing in unison like a shared heartbeat.</p>
<p>The dragon's eyes widen. <span class="story-dialogue">"The Crown... it still lives. After all this time, it still remembers what it was."</span></p>
<p>Stormfang gently — so gently, for a creature that could level mountains — places its shard before you.</p>
<p><span class="story-dialogue">"I have guarded this shard since the shattering, waiting for one worthy to claim it. The Crown chose you, mortal. Do not fail it."</span></p>`,
      background: 'linear-gradient(180deg, #3a3a1a 0%, #252a0a 100%)',
      choices: [
        { text: 'Accept the shard with gratitude', next: 'mountain_dragon_peaceful' }
      ]
    },

    mountain_dragon_oath: {
      text: `<p>Stormfang exhales — not fire, but a warm wind that smells of storms and distant skies. <span class="story-dialogue">"Then take it, oath-bearer. And know that Stormfang's fire stands with you, should you call upon it at the end."</span></p>
<p>The dragon places the shard before you with surprising delicacy.</p>
<p><span class="story-action">Crown Shard (Peak) acquired! (4/5)</span></p>
<p><span class="story-action">Stormfang's blessing: +15 max health</span></p>`,
      background: 'linear-gradient(180deg, #2a2a3a 0%, #15152a 100%)',
      choices: [
        { text: 'Descend the mountain and prepare for the final shards', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.inventory.push('shard_mountain');
        state.flags.shard_count = (state.flags.shard_count || 1) + 1;
        state.flags.mountain_complete = true;
        state.flags.dragon_oath = true;
        state.maxHealth += 15;
        state.health = state.maxHealth;
      }
    },

    mountain_dragon_peaceful: {
      text: `<p><span class="story-action">Crown Shard (Peak) acquired! (4/5)</span></p>
<p>As you hold all four shards together, they orbit each other in your palm, their light weaving together into something greater. You can feel the Crown trying to reform — almost there. One more shard.</p>
<p>Stormfang watches with ancient eyes. <span class="story-dialogue">"The last shard lies in the Fallen City, in the ruins of what was. Be careful, mortal — Malachar will be watching."</span></p>
<p><span class="story-action">Stormfang's blessing: +15 max health, +10 max mana</span></p>`,
      background: 'linear-gradient(180deg, #2a2a3a 0%, #15152a 100%)',
      choices: [
        { text: 'Return to Thornvale to prepare for the final quest', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.inventory.push('shard_mountain');
        state.flags.shard_count = (state.flags.shard_count || 1) + 1;
        state.flags.mountain_complete = true;
        state.flags.dragon_peaceful = true;
        state.maxHealth += 15;
        state.maxMana += 10;
        state.health = state.maxHealth;
        state.mana = state.maxMana;
      }
    },

    // ===== FALLEN CITY OF AURALIS =====
    city_entrance: {
      text: `<p>The Fallen City of Auralis was once the jewel of Eldermoor. Now it is a haunted ruin, its towers broken, its walls crumbled, dark vines crawling over everything like the land itself is trying to bury the memory.</p>
<p>The Crown shards in your pack are agitated, their light pulsing rapidly. The fifth shard is close — and something else. A darkness that makes your skin crawl.</p>
<p>Malachar has been here. You can see his mark — black crystals jutting from the ground, pulsing with void energy.</p>`,
      background: 'linear-gradient(180deg, #2a1a2a 0%, #150a15 100%)',
      choices: [
        { text: 'Enter through the shattered main gate', next: 'city_main_gate' },
        { text: 'Find a way through the collapsed walls', next: 'city_walls' }
      ],
      onEnter: (state) => {
        state.location = 'fallen_city';
        LOCATIONS.fallen_city.discovered = true;
      }
    },

    city_main_gate: {
      text: `<p>The main gate lies in ruins. Beyond it, the grand boulevard stretches toward the palace — but it's not empty. <span class="story-emphasis">Goblins</span> swarm the ruins, looting and fighting among themselves. They wear Malachar's sigil: a black crown, broken.</p>
<p>A goblin patrol spots you and raises the alarm. A <span class="story-emphasis">Goblin Chieftain</span> pushes through the mob, a massive cleaver in its fist.</p>`,
      background: 'linear-gradient(180deg, #2a1a2a 0%, #150a15 100%)',
      combat: 'goblin_chief',
      onCombatWin: 'city_after_goblins',
      onCombatLose: 'death_generic',
      choices: []
    },

    city_after_goblins: {
      text: `<p>The chieftain falls and the remaining goblins scatter like rats. You've bought yourself clear passage to the palace.</p>
<p>The boulevard is lined with statues of past kings and queens — most toppled or defaced. But the palace looms ahead, its domed roof half-collapsed, and from within... a faint golden glow.</p>
<p>The last shard.</p>`,
      background: 'linear-gradient(180deg, #2a1a2a 0%, #150a15 100%)',
      choices: [
        { text: 'Enter the palace ruins', next: 'city_palace' }
      ]
    },

    city_walls: {
      text: `<p>You find a gap in the collapsed eastern wall and slip into the city unseen. The streets here are quieter — residential districts, now empty and overgrown. You move through alleys and ruined gardens, avoiding goblin patrols.</p>
<p>In a ruined apothecary shop, you find supplies: a <span class="story-emphasis">health potion</span> and a <span class="story-emphasis">mana potion</span>.</p>
<p>The path brings you to the palace from the rear — the servants' entrance. Quieter. Smarter.</p>`,
      background: 'linear-gradient(180deg, #2a1a2a 0%, #150a15 100%)',
      choices: [
        { text: 'Enter the palace through the servants\' entrance', next: 'city_palace' }
      ],
      onEnter: (state) => {
        state.inventory.push('health_potion');
        state.inventory.push('mana_potion');
        state.flags.city_stealth = true;
      }
    },

    city_palace: {
      text: `<p>The throne room of Auralis. Once, it was the most beautiful room in the kingdom — vaulted ceilings painted with the history of Eldermoor, a throne of white wood and gold. Now the ceiling is open to the sky, the murals are scorched, and the throne is shattered.</p>
<p>But there, embedded in the remains of the throne itself, the fifth <span class="story-emphasis">Crown Shard</span> blazes with golden light. It's been here since the Crown was broken — where it all began.</p>
<p>You reach for it — and the four shards in your pack begin to sing. A harmony of light and magic that fills the ruined hall.</p>
<p>Your fingers close around the fifth shard, and the world blazes gold.</p>`,
      background: 'linear-gradient(180deg, #3a3a1a 0%, #252a0a 100%)',
      choices: [
        { text: 'Take the shard and feel the Crown awaken', next: 'city_crown_assembles' }
      ],
      onEnter: (state) => {
        state.inventory.push('shard_city');
        state.flags.shard_count = 5;
        state.flags.city_complete = true;
      }
    },

    city_crown_assembles: {
      text: `<p>The five shards rise from your pack and hands, orbiting each other in a spiral of golden light. They click together one by one — five fragments becoming whole. The <span class="story-emphasis">Crown of Dawn</span> reforms before your eyes, blazing with a light that hasn't been seen in Eldermoor for six months.</p>
<p>And then — darkness. A voice cuts through the light like a blade.</p>
<p><span class="story-dialogue">"How <em>delightful</em>. You've assembled it for me."</span></p>
<p>A portal of void energy rips open in the air. <span class="story-emphasis">Malachar the Betrayer</span> steps through, wreathed in shadow, his eyes burning with stolen power. Behind him, his tower rises in a dimension of darkness.</p>
<p><span class="story-dialogue">"Did you really think I wouldn't notice five Crown shards coming together? I've been waiting for this moment, ranger. Hand over the Crown, and I'll make your death painless."</span></p>`,
      background: 'linear-gradient(180deg, #1a0a1a 0%, #0a0010 100%)',
      choices: [
        { text: '⚔️ "Come and take it." (Final battle)', next: 'final_battle_start', type: 'combat' },
        {
          text: '✨ Place the Crown on your head and channel its power',
          next: 'final_battle_crown',
          type: 'magic',
          condition: (state) => state.mana >= 30,
          requirementText: 'Requires 30 mana'
        }
      ]
    },

    final_battle_start: {
      text: `<p>Malachar laughs. <span class="story-dialogue">"So be it."</span></p>
<p>He raises his staff and the world splits open. Void energy crashes around you as the final battle begins. The Crown of Dawn hovers between you, its light your shield against his darkness.</p>
<p>This is it. Everything has led to this moment.</p>`,
      background: 'linear-gradient(180deg, #1a0a2a 0%, #0a0015 100%)',
      combat: 'malachar',
      onCombatWin: 'ending_victory',
      onCombatLose: 'ending_defeat',
      choices: [],
      onEnter: (state) => {
        // Crown's protection in final battle
        state.stats.defense += 5;
        state.stats.attack += 5;
        if (state.flags.dragon_oath || state.flags.dragon_peaceful) {
          state.stats.attack += 5;
        }
        if (state.flags.elara_blessed || state.flags.elara_peaceful) {
          state.stats.defense += 3;
        }
      }
    },

    final_battle_crown: {
      text: `<p>You seize the Crown and place it upon your head. The world <em>erupts</em> in golden light.</p>
<p>Power floods through you — the combined magic of five ancient fragments, the protective will of every monarch who ever wore this crown. Your body blazes like the sun itself.</p>
<p>Malachar's confident smirk falters. <span class="story-dialogue">"What — no! That power isn't meant for you!"</span></p>
<p>But it <em>is</em>. The Crown chose its champion, and you are that champion.</p>
<p>Malachar gathers his darkness and strikes — but you are the dawn, and no shadow can stand against you.</p>`,
      background: 'linear-gradient(180deg, #3a3a0a 0%, #252500 100%)',
      combat: 'malachar',
      onCombatWin: 'ending_victory_crown',
      onCombatLose: 'ending_defeat',
      choices: [],
      onEnter: (state) => {
        state.mana -= 30;
        state.stats.attack += 10;
        state.stats.defense += 8;
        state.stats.magic += 10;
        state.flags.wore_crown = true;
        if (state.flags.dragon_oath || state.flags.dragon_peaceful) {
          state.stats.attack += 5;
        }
        if (state.flags.elara_blessed || state.flags.elara_peaceful) {
          state.stats.defense += 3;
        }
      }
    },

    // ===== ENDINGS =====
    ending_victory: {
      text: `<p>Malachar staggers, his dark power unraveling. <span class="story-dialogue">"No... NO! I was to be a god! I was to remake the world!"</span></p>
<p>You strike the final blow, and the betrayer crumbles. His stolen power dissipates into the void, and the portal behind him collapses.</p>
<p>In the silence that follows, you pick up the Crown of Dawn. It pulses gently, warmly, like a living heart. The sky above the ruined palace lightens — for the first time in six months, true dawn breaks over Eldermoor.</p>
<p>The wards rekindle. Across the kingdom, monsters retreat, shadows lift, and people emerge blinking into the light.</p>
<p>You stand in the ruins of what was, holding the hope of what will be.</p>`,
      customRender: 'ending_victory',
      background: 'linear-gradient(180deg, #2a2a0a 0%, #3a3a1a 100%)',
      choices: [
        { text: '🏆 View Your Journey', next: 'epilogue' }
      ],
      onEnter: (state) => {
        state.flags.victory = true;
      }
    },

    ending_victory_crown: {
      text: `<p>Wreathed in the Crown's blazing light, you are unstoppable. Malachar's spells shatter against your radiance like shadows against the sun. His darkness cannot touch you.</p>
<p><span class="story-dialogue">"This is impossible!"</span> he screams. <span class="story-dialogue">"I broke the Crown! I killed the king! The darkness was supposed to be MINE!"</span></p>
<p>You raise your hand, and the Crown's full power answers. A beam of pure dawn light lances through Malachar, burning away his stolen darkness, reducing the betrayer to nothing.</p>
<p>The void portal collapses. The dark tower crumbles across dimensions. And across all of Eldermoor, the sun rises gold and glorious — a true dawn, the first in six months.</p>
<p>You remove the Crown gently. It has done its work. Now it needs a true sovereign — and you know exactly where to find one.</p>
<p class="story-emphasis">Queen Isolde still lives. The realm has its champion. And you — Kael, the last ranger — have saved the world.</p>`,
      customRender: 'ending_victory_crown',
      background: 'linear-gradient(180deg, #3a3a0a 0%, #4a4a1a 100%)',
      choices: [
        { text: '🏆 View Your Journey', next: 'epilogue' }
      ],
      onEnter: (state) => {
        state.flags.victory = true;
        state.flags.best_ending = true;
      }
    },

    ending_defeat: {
      text: `<p>Malachar's power is too great. As darkness closes in, your last sight is the Crown of Dawn dimming, its light fading...</p>
<p>But all is not lost. The Crown's magic scatters the shards once more across the land, keeping them from Malachar's grasp. And somewhere, in a village or on a road, another hero will rise to gather them again.</p>
<p>Your story ends here. But the story of Eldermoor continues.</p>`,
      customRender: 'ending_defeat',
      background: 'linear-gradient(180deg, #1a0a0a 0%, #0a0000 100%)',
      choices: [
        { text: '🔄 Try Again', next: 'title' }
      ]
    },

    death_generic: {
      text: `<p>The darkness takes you. Your vision fades, the world growing cold and distant.</p>
<p>But the Crown shards pulse with desperate light. Their magic flares, pulling you back from the brink — battered, weakened, but alive. You retreat to safety, barely.</p>
<p><span class="story-action">You've been revived at half health. The quest continues.</span></p>`,
      background: 'linear-gradient(180deg, #1a0a0a 0%, #0a0000 100%)',
      choices: [
        { text: 'Return to Thornvale to recover', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.health = Math.floor(state.maxHealth / 2);
        state.mana = Math.floor(state.maxMana / 2);
      }
    },

    death_dragon: {
      text: `<p>Stormfang's fire engulfs you. As consciousness fades, you feel the Crown shards' desperate magic activate, teleporting you away in a flash of gold.</p>
<p>You wake at the base of the mountain, burned and broken but alive. The dragon's laughter echoes from above.</p>
<p><span class="story-action">You've been revived at half health. Perhaps you need to be stronger — or find another way.</span></p>`,
      background: 'linear-gradient(180deg, #1a0a0a 0%, #0a0000 100%)',
      choices: [
        { text: 'Return to Thornvale to recover and prepare', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.health = Math.floor(state.maxHealth / 2);
        state.mana = Math.floor(state.maxMana / 2);
      }
    },

    epilogue: {
      text: '',
      customRender: 'epilogue',
      background: 'linear-gradient(135deg, #0a0a2e 0%, #1a0a2e 50%, #0a1a2e 100%)',
      choices: [
        { text: '🔄 Play Again', next: 'title' }
      ],
      hideStats: true
    }
  };


  function initializeFrontierNetworkScenes() {
    SCENES.batch003_frontier_hub = {
      text: `<p>Frontier command authorizes a broad recon push beyond established resistance routes. Fifty new locations are now charted for operations, supply recovery, and alliance-building.</p>
<p>Select a frontier cluster to deploy scouts, secure routes, and thread these discoveries into your ongoing Crown shard campaign.</p>`,
      background: 'linear-gradient(180deg, #2d2442 0%, #120f1f 100%)',
      choices: [
        ...FRONTIER_CLUSTERS.map((cluster) => ({
          text: `${cluster.icon} ${cluster.name} Operations`,
          next: `batch003_cluster_${cluster.id}`
        })),
        { text: '← Return to Batch 002 planning', next: 'batch002_hub' },
        { text: '← Return to core quest planning', next: 'thornvale_prepare' }
      ],
      onEnter: (state) => {
        state.location = 'thornvale_hinterlands';
        state.flags.frontier_network_unlocked = true;
        LOCATIONS.thornvale_hinterlands.discovered = true;
      }
    };

    FRONTIER_CLUSTERS.forEach((cluster) => {
      const clusterSceneId = `batch003_cluster_${cluster.id}`;
      const clusterLocations = FRONTIER_LOCATIONS.filter((location) => location.cluster === cluster.id);

      SCENES[clusterSceneId] = {
        text: `<p>${cluster.name} is active with ${clusterLocations.length} mapped hotspots. Each site can shift faction leverage, resource flows, and late-campaign support.</p>
<p>Choose a location to run a targeted operation.</p>`,
        background: cluster.background,
        choices: [
          ...clusterLocations.map((location) => ({
            text: `${location.icon} ${location.name}`,
            next: `frontier_site_${location.id}`
          })),
          { text: '← Back to Frontier Network operations', next: 'batch003_frontier_hub' }
        ],
        onEnter: () => {}
      };
    });

    FRONTIER_LOCATIONS.forEach((location) => {
      const sceneId = `frontier_site_${location.id}`;
      const rewardFlag = `frontier_site_secured_${location.id}`;
      const cluster = FRONTIER_CLUSTERS.find((entry) => entry.id === location.cluster);
      const fallbackHub = cluster ? `batch003_cluster_${cluster.id}` : 'batch003_frontier_hub';

      SCENES[sceneId] = {
        text: `<p>You deploy to <span class="story-emphasis">${location.name}</span>, a frontier hotspot known for ${location.theme}.</p>
<p>Securing this node improves resistance mobility and seeds future operations in nearby routes.</p>`,
        background: cluster ? cluster.background : 'linear-gradient(180deg, #2a2a2a 0%, #111111 100%)',
        choices: [
          { text: 'Secure the route and catalog strategic findings', next: fallbackHub },
          { text: 'Return to Frontier Network operations', next: 'batch003_frontier_hub' },
          { text: 'Return to core quest planning', next: 'thornvale_prepare' }
        ],
        onEnter: (state) => {
          state.location = location.id;
          state.flags[`frontier_discovered_${location.id}`] = true;
          LOCATIONS[location.id].discovered = true;
          if (!state.flags[rewardFlag]) {
            state.flags[rewardFlag] = true;
            state.xp += 6;
            state.gold += 8;
          }
        }
      };
    });
  }

  initializeFrontierNetworkScenes();

  function initializeBatch006To010Scenes() {
    const formatBatchNumber = (num) => String(num).padStart(3, '0');
    const OPERATION_MARKERS = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    const BASE_OPERATION_XP = 10;
    const BASE_OPERATION_GOLD = 6;

    const BATCH_CONFIG = [
      {
        number: 6,
        previousHub: 'batch005_hub',
        nextHub: 'batch007_hub',
        ideas: [
          { title: 'Relic-Forging Enclave', location: 'sunken_marshes' },
          { title: 'Final-Act Foreshadowing Site', location: 'ashen_steppe' },
          { title: 'Micro-Location Chain (Legend Part III)', location: 'moonlit_coast' },
          { title: 'NPC Faction Outpost', location: 'glass_dunes' },
          { title: 'Traversal Challenge Site', location: 'ironroot_forest' },
          { title: 'Memory-Echo Landmark', location: 'thornvale_hinterlands' },
          { title: 'Settlement Conflict', location: 'whispering_wilds' },
          { title: 'Hidden Sanctuary', location: 'cryptward_depths' },
          { title: 'Elite Enemy Territory', location: 'stormfang_range' },
          { title: 'Weather-Bound Location Event', location: 'auralis_ruins' }
        ]
      },
      {
        number: 7,
        previousHub: 'batch006_hub',
        nextHub: 'batch008_hub',
        ideas: [
          { title: 'NPC Faction Outpost', location: 'ashen_steppe' },
          { title: 'Traversal Challenge Site', location: 'moonlit_coast' },
          { title: 'Memory-Echo Landmark', location: 'glass_dunes' },
          { title: 'Settlement Conflict', location: 'ironroot_forest' },
          { title: 'Hidden Sanctuary', location: 'thornvale_hinterlands' },
          { title: 'Elite Enemy Territory', location: 'whispering_wilds' },
          { title: 'Weather-Bound Location Event', location: 'cryptward_depths' },
          { title: 'Lore Archive Room', location: 'stormfang_range' },
          { title: 'Landmark Restoration Questline', location: 'auralis_ruins' },
          { title: 'Ruins Puzzle Wing', location: 'sunken_marshes' }
        ]
      },
      {
        number: 8,
        previousHub: 'batch007_hub',
        nextHub: 'batch009_hub',
        ideas: [
          { title: 'Settlement Conflict', location: 'moonlit_coast' },
          { title: 'Hidden Sanctuary', location: 'glass_dunes' },
          { title: 'Elite Enemy Territory', location: 'ironroot_forest' },
          { title: 'Weather-Bound Location Event', location: 'thornvale_hinterlands' },
          { title: 'Lore Archive Room', location: 'whispering_wilds' },
          { title: 'Landmark Restoration Questline', location: 'cryptward_depths' },
          { title: 'Ruins Puzzle Wing', location: 'stormfang_range' },
          { title: 'Companion-Specific Stop', location: 'auralis_ruins' },
          { title: 'Local Festival Intrigue', location: 'sunken_marshes' },
          { title: 'Smuggler Route Node', location: 'ashen_steppe' }
        ]
      },
      {
        number: 9,
        previousHub: 'batch008_hub',
        nextHub: 'batch010_hub',
        ideas: [
          { title: 'Weather-Bound Location Event', location: 'glass_dunes' },
          { title: 'Lore Archive Room', location: 'ironroot_forest' },
          { title: 'Landmark Restoration Questline', location: 'thornvale_hinterlands' },
          { title: 'Ruins Puzzle Wing', location: 'whispering_wilds' },
          { title: 'Companion-Specific Stop', location: 'cryptward_depths' },
          { title: 'Local Festival Intrigue', location: 'stormfang_range' },
          { title: 'Smuggler Route Node', location: 'auralis_ruins' },
          { title: 'Guardian Trial Site', location: 'sunken_marshes' },
          { title: 'Multi-Stage Rescue Operation', location: 'ashen_steppe' },
          { title: 'Cursed Landmark', location: 'moonlit_coast' }
        ]
      },
      {
        number: 10,
        previousHub: 'batch009_hub',
        nextHub: 'batch011_hub',
        ideas: [
          { title: 'Ruins Puzzle Wing', location: 'ironroot_forest' },
          { title: 'Companion-Specific Stop', location: 'thornvale_hinterlands' },
          { title: 'Local Festival Intrigue', location: 'whispering_wilds' },
          { title: 'Smuggler Route Node', location: 'cryptward_depths' },
          { title: 'Guardian Trial Site', location: 'stormfang_range' },
          { title: 'Multi-Stage Rescue Operation', location: 'auralis_ruins' },
          { title: 'Cursed Landmark', location: 'sunken_marshes' },
          { title: 'Diplomatic Summit Venue', location: 'ashen_steppe' },
          { title: 'Relic-Forging Enclave', location: 'moonlit_coast' },
          { title: 'Final-Act Foreshadowing Site', location: 'glass_dunes' }
        ]
      }
    ];

    BATCH_CONFIG.forEach((batch) => {
      const batchId = `batch${formatBatchNumber(batch.number)}`;
      const hubId = `${batchId}_hub`;
      const firstLocation = batch.ideas[0].location;
      const choices = batch.ideas.map((idea, index) => {
        const operationNumber = index + 1;
        const operationScene = `${batchId}_op${operationNumber}`;
        const previousCompleteFlag = `${batchId}_op${operationNumber - 1}_complete`;

        const operationMarker = OPERATION_MARKERS[operationNumber - 1];

        const baseChoice = {
          text: `${operationMarker} ${idea.title} (${LOCATIONS[idea.location].name})`,
          next: operationScene
        };

        if (operationNumber === 1) {
          return baseChoice;
        }

        return {
          ...baseChoice,
          condition: (state) => state.flags[previousCompleteFlag],
          requirementText: `Requires operation ${operationNumber - 1} completion`
        };
      });

      if (batch.nextHub) {
        const finalFlag = `${batchId}_op${batch.ideas.length}_complete`;
        choices.push({
          text: `➡️ Advance to Batch ${formatBatchNumber(batch.number + 1)} operations`,
          next: batch.nextHub,
          condition: (state) => state.flags[finalFlag],
          requirementText: `Requires completing Batch ${formatBatchNumber(batch.number)}`
        });
      }

      choices.push(
        { text: `← Return to Batch ${formatBatchNumber(batch.number - 1)} planning`, next: batch.previousHub },
        { text: '← Return to core quest planning', next: 'thornvale_prepare' }
      );

      SCENES[hubId] = {
        text: `<p>Batch ${formatBatchNumber(batch.number)} operations are now active. Complete all ten missions to advance campaign pressure and unlock the next wave.</p>
<p>Each operation updates location control, progression state, and resistance readiness across Eldermoor.</p>`,
        background: 'linear-gradient(180deg, #33435b 0%, #151b26 100%)',
        choices,
        onEnter: (state) => {
          state.location = firstLocation;
          LOCATIONS[firstLocation].discovered = true;
        }
      };

      batch.ideas.forEach((idea, index) => {
        const operationNumber = index + 1;
        const operationScene = `${batchId}_op${operationNumber}`;
        const completeScene = `${operationScene}_complete`;
        const completeFlag = `${batchId}_op${operationNumber}_complete`;
        const rewardedFlag = `${completeFlag}_rewarded`;
        const locationName = LOCATIONS[idea.location].name;

        SCENES[operationScene] = {
          text: `<p><span class="story-emphasis">Operation ${operationNumber}:</span> ${idea.title}</p>
<p>Deploy to <strong>${locationName}</strong> and complete mission objectives tied to this batch's campaign arc.</p>`,
          background: 'linear-gradient(180deg, #2d3f56 0%, #121b28 100%)',
          choices: [
            { text: '✅ Complete operation objective', next: completeScene },
            { text: `← Return to Batch ${formatBatchNumber(batch.number)} planning`, next: hubId }
          ],
          onEnter: (state) => {
            state.location = idea.location;
            LOCATIONS[idea.location].discovered = true;
          }
        };

        SCENES[completeScene] = {
          text: `<p>Operation ${operationNumber} complete: ${idea.title} in ${locationName} is now integrated into campaign flow.</p>`,
          background: 'linear-gradient(180deg, #3f5a3f 0%, #1a2b1a 100%)',
          choices: [
            { text: `Return to Batch ${formatBatchNumber(batch.number)} planning`, next: hubId }
          ],
          onEnter: (state) => {
            state.location = idea.location;
            state.flags[completeFlag] = true;
            LOCATIONS[idea.location].discovered = true;

            if (!state.flags[rewardedFlag]) {
              state.flags[rewardedFlag] = true;
              state.xp += BASE_OPERATION_XP + operationNumber;
              state.gold += BASE_OPERATION_GOLD + operationNumber;
            }
          }
        };
      });
    });
  }

  initializeBatch006To010Scenes();

  function initializeBatch011To015Scenes() {
    const formatBatchNumber = (num) => String(num).padStart(3, '0');
    const OPERATION_MARKERS = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    const BASE_OPERATION_XP = 10;
    const BASE_OPERATION_GOLD = 6;

    const BATCH_CONFIG = [
      {
        number: 11,
        previousHub: 'batch010_hub',
        nextHub: 'batch012_hub',
        ideas: [
          { title: 'Smuggler Route Node', location: 'thornvale_hinterlands' },
          { title: 'Guardian Trial Site', location: 'whispering_wilds' },
          { title: 'Multi-Stage Rescue Operation', location: 'cryptward_depths' },
          { title: 'Cursed Landmark', location: 'stormfang_range' },
          { title: 'Diplomatic Summit Venue', location: 'auralis_ruins' },
          { title: 'Relic-Forging Enclave', location: 'sunken_marshes' },
          { title: 'Final-Act Foreshadowing Site', location: 'ashen_steppe' },
          { title: 'Micro-Location Chain (Legend Part VIII)', location: 'moonlit_coast' },
          { title: 'NPC Faction Outpost', location: 'glass_dunes' },
          { title: 'Traversal Challenge Site', location: 'ironroot_forest' }
        ]
      },
      {
        number: 12,
        previousHub: 'batch011_hub',
        nextHub: 'batch013_hub',
        ideas: [
          { title: 'Cursed Landmark', location: 'whispering_wilds' },
          { title: 'Diplomatic Summit Venue', location: 'cryptward_depths' },
          { title: 'Relic-Forging Enclave', location: 'stormfang_range' },
          { title: 'Final-Act Foreshadowing Site', location: 'auralis_ruins' },
          { title: 'Micro-Location Chain (Legend Part V)', location: 'sunken_marshes' },
          { title: 'NPC Faction Outpost', location: 'ashen_steppe' },
          { title: 'Traversal Challenge Site', location: 'moonlit_coast' },
          { title: 'Memory-Echo Landmark', location: 'glass_dunes' },
          { title: 'Settlement Conflict', location: 'ironroot_forest' },
          { title: 'Hidden Sanctuary', location: 'thornvale_hinterlands' }
        ]
      },
      {
        number: 13,
        previousHub: 'batch012_hub',
        nextHub: 'batch014_hub',
        ideas: [
          { title: 'Final-Act Foreshadowing Site', location: 'cryptward_depths' },
          { title: 'Micro-Location Chain (Legend Part II)', location: 'stormfang_range' },
          { title: 'NPC Faction Outpost', location: 'auralis_ruins' },
          { title: 'Traversal Challenge Site', location: 'sunken_marshes' },
          { title: 'Memory-Echo Landmark', location: 'ashen_steppe' },
          { title: 'Settlement Conflict', location: 'moonlit_coast' },
          { title: 'Hidden Sanctuary', location: 'glass_dunes' },
          { title: 'Elite Enemy Territory', location: 'ironroot_forest' },
          { title: 'Weather-Bound Location Event', location: 'thornvale_hinterlands' },
          { title: 'Lore Archive Room', location: 'whispering_wilds' }
        ]
      },
      {
        number: 14,
        previousHub: 'batch013_hub',
        nextHub: 'batch015_hub',
        ideas: [
          { title: 'Traversal Challenge Site', location: 'stormfang_range' },
          { title: 'Memory-Echo Landmark', location: 'auralis_ruins' },
          { title: 'Settlement Conflict', location: 'sunken_marshes' },
          { title: 'Hidden Sanctuary', location: 'ashen_steppe' },
          { title: 'Elite Enemy Territory', location: 'moonlit_coast' },
          { title: 'Weather-Bound Location Event', location: 'glass_dunes' },
          { title: 'Lore Archive Room', location: 'ironroot_forest' },
          { title: 'Landmark Restoration Questline', location: 'thornvale_hinterlands' },
          { title: 'Ruins Puzzle Wing', location: 'whispering_wilds' },
          { title: 'Companion-Specific Stop', location: 'cryptward_depths' }
        ]
      },
      {
        number: 15,
        previousHub: 'batch014_hub',
        nextHub: 'batch016_hub',
        ideas: [
          { title: 'Hidden Sanctuary', location: 'auralis_ruins' },
          { title: 'Elite Enemy Territory', location: 'sunken_marshes' },
          { title: 'Weather-Bound Location Event', location: 'ashen_steppe' },
          { title: 'Lore Archive Room', location: 'moonlit_coast' },
          { title: 'Landmark Restoration Questline', location: 'glass_dunes' },
          { title: 'Ruins Puzzle Wing', location: 'ironroot_forest' },
          { title: 'Companion-Specific Stop', location: 'thornvale_hinterlands' },
          { title: 'Local Festival Intrigue', location: 'whispering_wilds' },
          { title: 'Smuggler Route Node', location: 'cryptward_depths' },
          { title: 'Guardian Trial Site', location: 'stormfang_range' }
        ]
      }
    ];

    BATCH_CONFIG.forEach((batch) => {
      const batchId = `batch${formatBatchNumber(batch.number)}`;
      const hubId = `${batchId}_hub`;
      const firstLocation = batch.ideas[0].location;
      const choices = batch.ideas.map((idea, index) => {
        const operationNumber = index + 1;
        const operationScene = `${batchId}_op${operationNumber}`;
        const previousCompleteFlag = `${batchId}_op${operationNumber - 1}_complete`;

        const operationMarker = OPERATION_MARKERS[operationNumber - 1];

        const baseChoice = {
          text: `${operationMarker} ${idea.title} (${LOCATIONS[idea.location].name})`,
          next: operationScene
        };

        if (operationNumber === 1) {
          return baseChoice;
        }

        return {
          ...baseChoice,
          condition: (state) => state.flags[previousCompleteFlag],
          requirementText: `Requires operation ${operationNumber - 1} completion`
        };
      });

      if (batch.nextHub) {
        const finalFlag = `${batchId}_op${batch.ideas.length}_complete`;
        choices.push({
          text: `➡️ Advance to Batch ${formatBatchNumber(batch.number + 1)} operations`,
          next: batch.nextHub,
          condition: (state) => state.flags[finalFlag],
          requirementText: `Requires completing Batch ${formatBatchNumber(batch.number)}`
        });
      }

      choices.push(
        { text: `← Return to Batch ${formatBatchNumber(batch.number - 1)} planning`, next: batch.previousHub },
        { text: '← Return to core quest planning', next: 'thornvale_prepare' }
      );

      SCENES[hubId] = {
        text: `<p>Batch ${formatBatchNumber(batch.number)} operations are now active. Complete all ten missions to advance campaign pressure and unlock the next wave.</p>
<p>Each operation updates location control, progression state, and resistance readiness across Eldermoor.</p>`,
        background: 'linear-gradient(180deg, #33435b 0%, #151b26 100%)',
        choices,
        onEnter: (state) => {
          state.location = firstLocation;
          LOCATIONS[firstLocation].discovered = true;
        }
      };

      batch.ideas.forEach((idea, index) => {
        const operationNumber = index + 1;
        const operationScene = `${batchId}_op${operationNumber}`;
        const completeScene = `${operationScene}_complete`;
        const completeFlag = `${batchId}_op${operationNumber}_complete`;
        const rewardedFlag = `${completeFlag}_rewarded`;
        const locationName = LOCATIONS[idea.location].name;

        SCENES[operationScene] = {
          text: `<p><span class="story-emphasis">Operation ${operationNumber}:</span> ${idea.title}</p>
<p>Deploy to <strong>${locationName}</strong> and complete mission objectives tied to this batch's campaign arc.</p>`,
          background: 'linear-gradient(180deg, #2d3f56 0%, #121b28 100%)',
          choices: [
            { text: '✅ Complete operation objective', next: completeScene },
            { text: `← Return to Batch ${formatBatchNumber(batch.number)} planning`, next: hubId }
          ],
          onEnter: (state) => {
            state.location = idea.location;
            LOCATIONS[idea.location].discovered = true;
          }
        };

        SCENES[completeScene] = {
          text: `<p>Operation ${operationNumber} complete: ${idea.title} in ${locationName} is now integrated into campaign flow.</p>`,
          background: 'linear-gradient(180deg, #3f5a3f 0%, #1a2b1a 100%)',
          choices: [
            { text: `Return to Batch ${formatBatchNumber(batch.number)} planning`, next: hubId }
          ],
          onEnter: (state) => {
            state.location = idea.location;
            state.flags[completeFlag] = true;
            LOCATIONS[idea.location].discovered = true;

            if (!state.flags[rewardedFlag]) {
              state.flags[rewardedFlag] = true;
              state.xp += BASE_OPERATION_XP + operationNumber;
              state.gold += BASE_OPERATION_GOLD + operationNumber;
            }
          }
        };
      });
    });
  }

  initializeBatch011To015Scenes();

  function initializeBatch016To020Scenes() {
    const formatBatchNumber = (num) => String(num).padStart(3, '0');
    const OPERATION_MARKERS = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    const BASE_OPERATION_XP = 10;
    const BASE_OPERATION_GOLD = 6;

    const BATCH_CONFIG = [
      {
        number: 16,
        previousHub: 'batch015_hub',
        nextHub: 'batch017_hub',
        ideas: [
          { title: 'Lore Archive Room', location: 'sunken_marshes' },
          { title: 'Landmark Restoration Questline', location: 'ashen_steppe' },
          { title: 'Ruins Puzzle Wing', location: 'moonlit_coast' },
          { title: 'Companion-Specific Stop', location: 'glass_dunes' },
          { title: 'Local Festival Intrigue', location: 'ironroot_forest' },
          { title: 'Smuggler Route Node', location: 'thornvale_hinterlands' },
          { title: 'Guardian Trial Site', location: 'whispering_wilds' },
          { title: 'Multi-Stage Rescue Operation', location: 'cryptward_depths' },
          { title: 'Cursed Landmark', location: 'stormfang_range' },
          { title: 'Diplomatic Summit Venue', location: 'auralis_ruins' }
        ]
      },
      {
        number: 17,
        previousHub: 'batch016_hub',
        nextHub: 'batch018_hub',
        ideas: [
          { title: 'Companion-Specific Stop', location: 'ashen_steppe' },
          { title: 'Local Festival Intrigue', location: 'moonlit_coast' },
          { title: 'Smuggler Route Node', location: 'glass_dunes' },
          { title: 'Guardian Trial Site', location: 'ironroot_forest' },
          { title: 'Multi-Stage Rescue Operation', location: 'thornvale_hinterlands' },
          { title: 'Cursed Landmark', location: 'whispering_wilds' },
          { title: 'Diplomatic Summit Venue', location: 'cryptward_depths' },
          { title: 'Relic-Forging Enclave', location: 'stormfang_range' },
          { title: 'Final-Act Foreshadowing Site', location: 'auralis_ruins' },
          { title: 'Micro-Location Chain (Legend Part X)', location: 'sunken_marshes' }
        ]
      },
      {
        number: 18,
        previousHub: 'batch017_hub',
        nextHub: 'batch019_hub',
        ideas: [
          { title: 'Guardian Trial Site', location: 'moonlit_coast' },
          { title: 'Multi-Stage Rescue Operation', location: 'glass_dunes' },
          { title: 'Cursed Landmark', location: 'ironroot_forest' },
          { title: 'Diplomatic Summit Venue', location: 'thornvale_hinterlands' },
          { title: 'Relic-Forging Enclave', location: 'whispering_wilds' },
          { title: 'Final-Act Foreshadowing Site', location: 'cryptward_depths' },
          { title: 'Micro-Location Chain (Legend Part VII)', location: 'stormfang_range' },
          { title: 'NPC Faction Outpost', location: 'auralis_ruins' },
          { title: 'Traversal Challenge Site', location: 'sunken_marshes' },
          { title: 'Memory-Echo Landmark', location: 'ashen_steppe' }
        ]
      },
      {
        number: 19,
        previousHub: 'batch018_hub',
        nextHub: 'batch020_hub',
        ideas: [
          { title: 'Diplomatic Summit Venue', location: 'glass_dunes' },
          { title: 'Relic-Forging Enclave', location: 'ironroot_forest' },
          { title: 'Final-Act Foreshadowing Site', location: 'thornvale_hinterlands' },
          { title: 'Micro-Location Chain (Legend Part IV)', location: 'whispering_wilds' },
          { title: 'NPC Faction Outpost', location: 'cryptward_depths' },
          { title: 'Traversal Challenge Site', location: 'stormfang_range' },
          { title: 'Memory-Echo Landmark', location: 'auralis_ruins' },
          { title: 'Settlement Conflict', location: 'sunken_marshes' },
          { title: 'Hidden Sanctuary', location: 'ashen_steppe' },
          { title: 'Elite Enemy Territory', location: 'moonlit_coast' }
        ]
      },
      {
        number: 20,
        previousHub: 'batch019_hub',
        nextHub: 'batch021_hub',
        ideas: [
          { title: 'Micro-Location Chain (Legend Part I)', location: 'ironroot_forest' },
          { title: 'NPC Faction Outpost', location: 'thornvale_hinterlands' },
          { title: 'Traversal Challenge Site', location: 'whispering_wilds' },
          { title: 'Memory-Echo Landmark', location: 'cryptward_depths' },
          { title: 'Settlement Conflict', location: 'stormfang_range' },
          { title: 'Hidden Sanctuary', location: 'auralis_ruins' },
          { title: 'Elite Enemy Territory', location: 'sunken_marshes' },
          { title: 'Weather-Bound Location Event', location: 'ashen_steppe' },
          { title: 'Lore Archive Room', location: 'moonlit_coast' },
          { title: 'Landmark Restoration Questline', location: 'glass_dunes' }
        ]
      }
    ];

    BATCH_CONFIG.forEach((batch) => {
      const batchId = `batch${formatBatchNumber(batch.number)}`;
      const hubId = `${batchId}_hub`;
      const firstLocation = batch.ideas[0].location;
      const choices = batch.ideas.map((idea, index) => {
        const operationNumber = index + 1;
        const operationScene = `${batchId}_op${operationNumber}`;
        const previousCompleteFlag = `${batchId}_op${operationNumber - 1}_complete`;

        const operationMarker = OPERATION_MARKERS[operationNumber - 1];

        const baseChoice = {
          text: `${operationMarker} ${idea.title} (${LOCATIONS[idea.location].name})`,
          next: operationScene
        };

        if (operationNumber === 1) {
          return baseChoice;
        }

        return {
          ...baseChoice,
          condition: (state) => state.flags[previousCompleteFlag],
          requirementText: `Requires operation ${operationNumber - 1} completion`
        };
      });

      if (batch.nextHub) {
        const finalFlag = `${batchId}_op${batch.ideas.length}_complete`;
        choices.push({
          text: `➡️ Advance to Batch ${formatBatchNumber(batch.number + 1)} operations`,
          next: batch.nextHub,
          condition: (state) => state.flags[finalFlag],
          requirementText: `Requires completing Batch ${formatBatchNumber(batch.number)}`
        });
      }

      choices.push(
        { text: `← Return to Batch ${formatBatchNumber(batch.number - 1)} planning`, next: batch.previousHub },
        { text: '← Return to core quest planning', next: 'thornvale_prepare' }
      );

      SCENES[hubId] = {
        text: `<p>Batch ${formatBatchNumber(batch.number)} operations are now active. Complete all ten missions to advance campaign pressure and unlock the next wave.</p>
<p>Each operation updates location control, progression state, and resistance readiness across Eldermoor.</p>`,
        background: 'linear-gradient(180deg, #33435b 0%, #151b26 100%)',
        choices,
        onEnter: (state) => {
          state.location = firstLocation;
          LOCATIONS[firstLocation].discovered = true;
        }
      };

      batch.ideas.forEach((idea, index) => {
        const operationNumber = index + 1;
        const operationScene = `${batchId}_op${operationNumber}`;
        const completeScene = `${operationScene}_complete`;
        const completeFlag = `${batchId}_op${operationNumber}_complete`;
        const rewardedFlag = `${completeFlag}_rewarded`;
        const locationName = LOCATIONS[idea.location].name;

        SCENES[operationScene] = {
          text: `<p><span class="story-emphasis">Operation ${operationNumber}:</span> ${idea.title}</p>
<p>Deploy to <strong>${locationName}</strong> and complete mission objectives tied to this batch's campaign arc.</p>`,
          background: 'linear-gradient(180deg, #2d3f56 0%, #121b28 100%)',
          choices: [
            { text: '✅ Complete operation objective', next: completeScene },
            { text: `← Return to Batch ${formatBatchNumber(batch.number)} planning`, next: hubId }
          ],
          onEnter: (state) => {
            state.location = idea.location;
            LOCATIONS[idea.location].discovered = true;
          }
        };

        SCENES[completeScene] = {
          text: `<p>Operation ${operationNumber} complete: ${idea.title} in ${locationName} is now integrated into campaign flow.</p>`,
          background: 'linear-gradient(180deg, #3f5a3f 0%, #1a2b1a 100%)',
          choices: [
            { text: `Return to Batch ${formatBatchNumber(batch.number)} planning`, next: hubId }
          ],
          onEnter: (state) => {
            state.location = idea.location;
            state.flags[completeFlag] = true;
            LOCATIONS[idea.location].discovered = true;

            if (!state.flags[rewardedFlag]) {
              state.flags[rewardedFlag] = true;
              state.xp += BASE_OPERATION_XP + operationNumber;
              state.gold += BASE_OPERATION_GOLD + operationNumber;
            }
          }
        };
      });
    });
  }

  initializeBatch016To020Scenes();

  function initializeBatch021To025Scenes() {
    const formatBatchNumber = (num) => String(num).padStart(3, '0');
    const OPERATION_MARKERS = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    const BASE_OPERATION_XP = 10;
    const BASE_OPERATION_GOLD = 6;

    const BATCH_CONFIG = [
      {
        number: 21,
        previousHub: 'batch020_hub',
        nextHub: 'batch022_hub',
        ideas: [
          { title: 'Memory-Echo Landmark', location: 'thornvale_hinterlands' },
          { title: 'Settlement Conflict', location: 'whispering_wilds' },
          { title: 'Hidden Sanctuary', location: 'cryptward_depths' },
          { title: 'Elite Enemy Territory', location: 'stormfang_range' },
          { title: 'Weather-Bound Location Event', location: 'auralis_ruins' },
          { title: 'Lore Archive Room', location: 'sunken_marshes' },
          { title: 'Landmark Restoration Questline', location: 'ashen_steppe' },
          { title: 'Ruins Puzzle Wing', location: 'moonlit_coast' },
          { title: 'Companion-Specific Stop', location: 'glass_dunes' },
          { title: 'Local Festival Intrigue', location: 'ironroot_forest' }
        ]
      },
      {
        number: 22,
        previousHub: 'batch021_hub',
        nextHub: 'batch023_hub',
        ideas: [
          { title: 'Elite Enemy Territory', location: 'whispering_wilds' },
          { title: 'Weather-Bound Location Event', location: 'cryptward_depths' },
          { title: 'Lore Archive Room', location: 'stormfang_range' },
          { title: 'Landmark Restoration Questline', location: 'auralis_ruins' },
          { title: 'Ruins Puzzle Wing', location: 'sunken_marshes' },
          { title: 'Companion-Specific Stop', location: 'ashen_steppe' },
          { title: 'Local Festival Intrigue', location: 'moonlit_coast' },
          { title: 'Smuggler Route Node', location: 'glass_dunes' },
          { title: 'Guardian Trial Site', location: 'ironroot_forest' },
          { title: 'Multi-Stage Rescue Operation', location: 'thornvale_hinterlands' }
        ]
      },
      {
        number: 23,
        previousHub: 'batch022_hub',
        nextHub: 'batch024_hub',
        ideas: [
          { title: 'Landmark Restoration Questline', location: 'cryptward_depths' },
          { title: 'Ruins Puzzle Wing', location: 'stormfang_range' },
          { title: 'Companion-Specific Stop', location: 'auralis_ruins' },
          { title: 'Local Festival Intrigue', location: 'sunken_marshes' },
          { title: 'Smuggler Route Node', location: 'ashen_steppe' },
          { title: 'Guardian Trial Site', location: 'moonlit_coast' },
          { title: 'Multi-Stage Rescue Operation', location: 'glass_dunes' },
          { title: 'Cursed Landmark', location: 'ironroot_forest' },
          { title: 'Diplomatic Summit Venue', location: 'thornvale_hinterlands' },
          { title: 'Relic-Forging Enclave', location: 'whispering_wilds' }
        ]
      },
      {
        number: 24,
        previousHub: 'batch023_hub',
        nextHub: 'batch025_hub',
        ideas: [
          { title: 'Local Festival Intrigue', location: 'stormfang_range' },
          { title: 'Smuggler Route Node', location: 'auralis_ruins' },
          { title: 'Guardian Trial Site', location: 'sunken_marshes' },
          { title: 'Multi-Stage Rescue Operation', location: 'ashen_steppe' },
          { title: 'Cursed Landmark', location: 'moonlit_coast' },
          { title: 'Diplomatic Summit Venue', location: 'glass_dunes' },
          { title: 'Relic-Forging Enclave', location: 'ironroot_forest' },
          { title: 'Final-Act Foreshadowing Site', location: 'thornvale_hinterlands' },
          { title: 'Micro-Location Chain (Legend Part IX)', location: 'whispering_wilds' },
          { title: 'NPC Faction Outpost', location: 'cryptward_depths' }
        ]
      },
      {
        number: 25,
        previousHub: 'batch024_hub',
        nextHub: 'batch026_hub',
        ideas: [
          { title: 'Multi-Stage Rescue Operation', location: 'auralis_ruins' },
          { title: 'Cursed Landmark', location: 'sunken_marshes' },
          { title: 'Diplomatic Summit Venue', location: 'ashen_steppe' },
          { title: 'Relic-Forging Enclave', location: 'moonlit_coast' },
          { title: 'Final-Act Foreshadowing Site', location: 'glass_dunes' },
          { title: 'Micro-Location Chain (Legend Part VI)', location: 'ironroot_forest' },
          { title: 'NPC Faction Outpost', location: 'thornvale_hinterlands' },
          { title: 'Traversal Challenge Site', location: 'whispering_wilds' },
          { title: 'Memory-Echo Landmark', location: 'cryptward_depths' },
          { title: 'Settlement Conflict', location: 'stormfang_range' }
        ]
      }
    ];

    BATCH_CONFIG.forEach((batch) => {
      const batchId = `batch${formatBatchNumber(batch.number)}`;
      const hubId = `${batchId}_hub`;
      const firstLocation = batch.ideas[0].location;
      const choices = batch.ideas.map((idea, index) => {
        const operationNumber = index + 1;
        const operationScene = `${batchId}_op${operationNumber}`;
        const previousCompleteFlag = `${batchId}_op${operationNumber - 1}_complete`;

        const operationMarker = OPERATION_MARKERS[operationNumber - 1];

        const baseChoice = {
          text: `${operationMarker} ${idea.title} (${LOCATIONS[idea.location].name})`,
          next: operationScene
        };

        if (operationNumber === 1) {
          return baseChoice;
        }

        return {
          ...baseChoice,
          condition: (state) => state.flags[previousCompleteFlag],
          requirementText: `Requires operation ${operationNumber - 1} completion`
        };
      });

      if (batch.nextHub) {
        const finalFlag = `${batchId}_op${batch.ideas.length}_complete`;
        choices.push({
          text: `➡️ Advance to Batch ${formatBatchNumber(batch.number + 1)} operations`,
          next: batch.nextHub,
          condition: (state) => state.flags[finalFlag],
          requirementText: `Requires completing Batch ${formatBatchNumber(batch.number)}`
        });
      }

      choices.push(
        { text: `← Return to Batch ${formatBatchNumber(batch.number - 1)} planning`, next: batch.previousHub },
        { text: '← Return to core quest planning', next: 'thornvale_prepare' }
      );

      SCENES[hubId] = {
        text: `<p>Batch ${formatBatchNumber(batch.number)} operations are now active. Complete all ten missions to advance campaign pressure and unlock the next wave.</p>
<p>Each operation updates location control, progression state, and resistance readiness across Eldermoor.</p>`,
        background: 'linear-gradient(180deg, #33435b 0%, #151b26 100%)',
        choices,
        onEnter: (state) => {
          state.location = firstLocation;
          LOCATIONS[firstLocation].discovered = true;
        }
      };

      batch.ideas.forEach((idea, index) => {
        const operationNumber = index + 1;
        const operationScene = `${batchId}_op${operationNumber}`;
        const completeScene = `${operationScene}_complete`;
        const completeFlag = `${batchId}_op${operationNumber}_complete`;
        const rewardedFlag = `${completeFlag}_rewarded`;
        const locationName = LOCATIONS[idea.location].name;

        SCENES[operationScene] = {
          text: `<p><span class="story-emphasis">Operation ${operationNumber}:</span> ${idea.title}</p>
<p>Deploy to <strong>${locationName}</strong> and complete mission objectives tied to this batch's campaign arc.</p>`,
          background: 'linear-gradient(180deg, #2d3f56 0%, #121b28 100%)',
          choices: [
            { text: '✅ Complete operation objective', next: completeScene },
            { text: `← Return to Batch ${formatBatchNumber(batch.number)} planning`, next: hubId }
          ],
          onEnter: (state) => {
            state.location = idea.location;
            LOCATIONS[idea.location].discovered = true;
          }
        };

        SCENES[completeScene] = {
          text: `<p>Operation ${operationNumber} complete: ${idea.title} in ${locationName} is now integrated into campaign flow.</p>`,
          background: 'linear-gradient(180deg, #3f5a3f 0%, #1a2b1a 100%)',
          choices: [
            { text: `Return to Batch ${formatBatchNumber(batch.number)} planning`, next: hubId }
          ],
          onEnter: (state) => {
            state.location = idea.location;
            state.flags[completeFlag] = true;
            LOCATIONS[idea.location].discovered = true;

            if (!state.flags[rewardedFlag]) {
              state.flags[rewardedFlag] = true;
              state.xp += BASE_OPERATION_XP + operationNumber;
              state.gold += BASE_OPERATION_GOLD + operationNumber;
            }
          }
        };
      });
    });
  }

  initializeBatch021To025Scenes();

  function initializeBatch026To030Scenes() {
    const formatBatchNumber = (num) => String(num).padStart(3, '0');
    const OPERATION_MARKERS = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    const BASE_OPERATION_XP = 10;
    const BASE_OPERATION_GOLD = 6;

    const BATCH_CONFIG = [
      {
        number: 26,
        previousHub: 'batch025_hub',
        nextHub: 'batch027_hub',
        ideas: [
          { title: 'Relic-Forging Enclave', location: 'sunken_marshes' },
          { title: 'Final-Act Foreshadowing Site', location: 'ashen_steppe' },
          { title: 'Micro-Location Chain (Legend Part III)', location: 'moonlit_coast' },
          { title: 'NPC Faction Outpost', location: 'glass_dunes' },
          { title: 'Traversal Challenge Site', location: 'ironroot_forest' },
          { title: 'Memory-Echo Landmark', location: 'thornvale_hinterlands' },
          { title: 'Settlement Conflict', location: 'whispering_wilds' },
          { title: 'Hidden Sanctuary', location: 'cryptward_depths' },
          { title: 'Elite Enemy Territory', location: 'stormfang_range' },
          { title: 'Weather-Bound Location Event', location: 'auralis_ruins' }
        ]
      },
      {
        number: 27,
        previousHub: 'batch026_hub',
        nextHub: 'batch028_hub',
        ideas: [
          { title: 'NPC Faction Outpost', location: 'ashen_steppe' },
          { title: 'Traversal Challenge Site', location: 'moonlit_coast' },
          { title: 'Memory-Echo Landmark', location: 'glass_dunes' },
          { title: 'Settlement Conflict', location: 'ironroot_forest' },
          { title: 'Hidden Sanctuary', location: 'thornvale_hinterlands' },
          { title: 'Elite Enemy Territory', location: 'whispering_wilds' },
          { title: 'Weather-Bound Location Event', location: 'cryptward_depths' },
          { title: 'Lore Archive Room', location: 'stormfang_range' },
          { title: 'Landmark Restoration Questline', location: 'auralis_ruins' },
          { title: 'Ruins Puzzle Wing', location: 'sunken_marshes' }
        ]
      },
      {
        number: 28,
        previousHub: 'batch027_hub',
        nextHub: 'batch029_hub',
        ideas: [
          { title: 'Settlement Conflict', location: 'moonlit_coast' },
          { title: 'Hidden Sanctuary', location: 'glass_dunes' },
          { title: 'Elite Enemy Territory', location: 'ironroot_forest' },
          { title: 'Weather-Bound Location Event', location: 'thornvale_hinterlands' },
          { title: 'Lore Archive Room', location: 'whispering_wilds' },
          { title: 'Landmark Restoration Questline', location: 'cryptward_depths' },
          { title: 'Ruins Puzzle Wing', location: 'stormfang_range' },
          { title: 'Companion-Specific Stop', location: 'auralis_ruins' },
          { title: 'Local Festival Intrigue', location: 'sunken_marshes' },
          { title: 'Smuggler Route Node', location: 'ashen_steppe' }
        ]
      },
      {
        number: 29,
        previousHub: 'batch028_hub',
        nextHub: 'batch030_hub',
        ideas: [
          { title: 'Weather-Bound Location Event', location: 'glass_dunes' },
          { title: 'Lore Archive Room', location: 'ironroot_forest' },
          { title: 'Landmark Restoration Questline', location: 'thornvale_hinterlands' },
          { title: 'Ruins Puzzle Wing', location: 'whispering_wilds' },
          { title: 'Companion-Specific Stop', location: 'cryptward_depths' },
          { title: 'Local Festival Intrigue', location: 'stormfang_range' },
          { title: 'Smuggler Route Node', location: 'auralis_ruins' },
          { title: 'Guardian Trial Site', location: 'sunken_marshes' },
          { title: 'Multi-Stage Rescue Operation', location: 'ashen_steppe' },
          { title: 'Cursed Landmark', location: 'moonlit_coast' }
        ]
      },
      {
        number: 30,
        previousHub: 'batch029_hub',
        nextHub: 'batch031_hub',
        ideas: [
          { title: 'Ruins Puzzle Wing', location: 'ironroot_forest' },
          { title: 'Companion-Specific Stop', location: 'thornvale_hinterlands' },
          { title: 'Local Festival Intrigue', location: 'whispering_wilds' },
          { title: 'Smuggler Route Node', location: 'cryptward_depths' },
          { title: 'Guardian Trial Site', location: 'stormfang_range' },
          { title: 'Multi-Stage Rescue Operation', location: 'auralis_ruins' },
          { title: 'Cursed Landmark', location: 'sunken_marshes' },
          { title: 'Diplomatic Summit Venue', location: 'ashen_steppe' },
          { title: 'Relic-Forging Enclave', location: 'moonlit_coast' },
          { title: 'Final-Act Foreshadowing Site', location: 'glass_dunes' }
        ]
      }
    ];

    BATCH_CONFIG.forEach((batch) => {
      const batchId = `batch${formatBatchNumber(batch.number)}`;
      const hubId = `${batchId}_hub`;
      const firstLocation = batch.ideas[0].location;
      const choices = batch.ideas.map((idea, index) => {
        const operationNumber = index + 1;
        const operationScene = `${batchId}_op${operationNumber}`;
        const previousCompleteFlag = `${batchId}_op${operationNumber - 1}_complete`;

        const operationMarker = OPERATION_MARKERS[operationNumber - 1];

        const baseChoice = {
          text: `${operationMarker} ${idea.title} (${LOCATIONS[idea.location].name})`,
          next: operationScene
        };

        if (operationNumber === 1) {
          return baseChoice;
        }

        return {
          ...baseChoice,
          condition: (state) => state.flags[previousCompleteFlag],
          requirementText: `Requires operation ${operationNumber - 1} completion`
        };
      });

      if (batch.nextHub) {
        const finalFlag = `${batchId}_op${batch.ideas.length}_complete`;
        choices.push({
          text: `➡️ Advance to Batch ${formatBatchNumber(batch.number + 1)} operations`,
          next: batch.nextHub,
          condition: (state) => state.flags[finalFlag],
          requirementText: `Requires completing Batch ${formatBatchNumber(batch.number)}`
        });
      }

      choices.push(
        { text: `← Return to Batch ${formatBatchNumber(batch.number - 1)} planning`, next: batch.previousHub },
        { text: '← Return to core quest planning', next: 'thornvale_prepare' }
      );

      SCENES[hubId] = {
        text: `<p>Batch ${formatBatchNumber(batch.number)} operations are now active. Complete all ten missions to advance campaign pressure and unlock the next wave.</p>
<p>Each operation updates location control, progression state, and resistance readiness across Eldermoor.</p>`,
        background: 'linear-gradient(180deg, #33435b 0%, #151b26 100%)',
        choices,
        onEnter: (state) => {
          state.location = firstLocation;
          LOCATIONS[firstLocation].discovered = true;
        }
      };

      batch.ideas.forEach((idea, index) => {
        const operationNumber = index + 1;
        const operationScene = `${batchId}_op${operationNumber}`;
        const completeScene = `${operationScene}_complete`;
        const completeFlag = `${batchId}_op${operationNumber}_complete`;
        const rewardedFlag = `${completeFlag}_rewarded`;
        const locationName = LOCATIONS[idea.location].name;

        SCENES[operationScene] = {
          text: `<p><span class="story-emphasis">Operation ${operationNumber}:</span> ${idea.title}</p>
<p>Deploy to <strong>${locationName}</strong> and complete mission objectives tied to this batch's campaign arc.</p>`,
          background: 'linear-gradient(180deg, #2d3f56 0%, #121b28 100%)',
          choices: [
            { text: '✅ Complete operation objective', next: completeScene },
            { text: `← Return to Batch ${formatBatchNumber(batch.number)} planning`, next: hubId }
          ],
          onEnter: (state) => {
            state.location = idea.location;
            LOCATIONS[idea.location].discovered = true;
          }
        };

        SCENES[completeScene] = {
          text: `<p>Operation ${operationNumber} complete: ${idea.title} in ${locationName} is now integrated into campaign flow.</p>`,
          background: 'linear-gradient(180deg, #3f5a3f 0%, #1a2b1a 100%)',
          choices: [
            { text: `Return to Batch ${formatBatchNumber(batch.number)} planning`, next: hubId }
          ],
          onEnter: (state) => {
            state.location = idea.location;
            state.flags[completeFlag] = true;
            LOCATIONS[idea.location].discovered = true;

            if (!state.flags[rewardedFlag]) {
              state.flags[rewardedFlag] = true;
              state.xp += BASE_OPERATION_XP + operationNumber;
              state.gold += BASE_OPERATION_GOLD + operationNumber;
            }
          }
        };
      });
    });
  }

  initializeBatch026To030Scenes();

  function initializeBatch031To035Scenes() {
    const formatBatchNumber = (num) => String(num).padStart(3, '0');
    const OPERATION_MARKERS = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    const BASE_OPERATION_XP = 10;
    const BASE_OPERATION_GOLD = 6;

    const BATCH_CONFIG = [
      {
        number: 31,
        previousHub: 'batch030_hub',
        nextHub: 'batch032_hub',
        ideas: [
          { title: 'Smuggler Route Node', location: 'thornvale_hinterlands' },
          { title: 'Guardian Trial Site', location: 'whispering_wilds' },
          { title: 'Multi-Stage Rescue Operation', location: 'cryptward_depths' },
          { title: 'Cursed Landmark', location: 'stormfang_range' },
          { title: 'Diplomatic Summit Venue', location: 'auralis_ruins' },
          { title: 'Relic-Forging Enclave', location: 'sunken_marshes' },
          { title: 'Final-Act Foreshadowing Site', location: 'ashen_steppe' },
          { title: 'Micro-Location Chain (Legend Part VIII)', location: 'moonlit_coast' },
          { title: 'NPC Faction Outpost', location: 'glass_dunes' },
          { title: 'Traversal Challenge Site', location: 'ironroot_forest' }
        ]
      },
      {
        number: 32,
        previousHub: 'batch031_hub',
        nextHub: 'batch033_hub',
        ideas: [
          { title: 'Cursed Landmark', location: 'whispering_wilds' },
          { title: 'Diplomatic Summit Venue', location: 'cryptward_depths' },
          { title: 'Relic-Forging Enclave', location: 'stormfang_range' },
          { title: 'Final-Act Foreshadowing Site', location: 'auralis_ruins' },
          { title: 'Micro-Location Chain (Legend Part V)', location: 'sunken_marshes' },
          { title: 'NPC Faction Outpost', location: 'ashen_steppe' },
          { title: 'Traversal Challenge Site', location: 'moonlit_coast' },
          { title: 'Memory-Echo Landmark', location: 'glass_dunes' },
          { title: 'Settlement Conflict', location: 'ironroot_forest' },
          { title: 'Hidden Sanctuary', location: 'thornvale_hinterlands' }
        ]
      },
      {
        number: 33,
        previousHub: 'batch032_hub',
        nextHub: 'batch034_hub',
        ideas: [
          { title: 'Final-Act Foreshadowing Site', location: 'cryptward_depths' },
          { title: 'Micro-Location Chain (Legend Part II)', location: 'stormfang_range' },
          { title: 'NPC Faction Outpost', location: 'auralis_ruins' },
          { title: 'Traversal Challenge Site', location: 'sunken_marshes' },
          { title: 'Memory-Echo Landmark', location: 'ashen_steppe' },
          { title: 'Settlement Conflict', location: 'moonlit_coast' },
          { title: 'Hidden Sanctuary', location: 'glass_dunes' },
          { title: 'Elite Enemy Territory', location: 'ironroot_forest' },
          { title: 'Weather-Bound Location Event', location: 'thornvale_hinterlands' },
          { title: 'Lore Archive Room', location: 'whispering_wilds' }
        ]
      },
      {
        number: 34,
        previousHub: 'batch033_hub',
        nextHub: 'batch035_hub',
        ideas: [
          { title: 'Traversal Challenge Site', location: 'stormfang_range' },
          { title: 'Memory-Echo Landmark', location: 'auralis_ruins' },
          { title: 'Settlement Conflict', location: 'sunken_marshes' },
          { title: 'Hidden Sanctuary', location: 'ashen_steppe' },
          { title: 'Elite Enemy Territory', location: 'moonlit_coast' },
          { title: 'Weather-Bound Location Event', location: 'glass_dunes' },
          { title: 'Lore Archive Room', location: 'ironroot_forest' },
          { title: 'Landmark Restoration Questline', location: 'thornvale_hinterlands' },
          { title: 'Ruins Puzzle Wing', location: 'whispering_wilds' },
          { title: 'Companion-Specific Stop', location: 'cryptward_depths' }
        ]
      },
      {
        number: 35,
        previousHub: 'batch034_hub',
        nextHub: 'batch036_hub',
        ideas: [
          { title: 'Hidden Sanctuary', location: 'auralis_ruins' },
          { title: 'Elite Enemy Territory', location: 'sunken_marshes' },
          { title: 'Weather-Bound Location Event', location: 'ashen_steppe' },
          { title: 'Lore Archive Room', location: 'moonlit_coast' },
          { title: 'Landmark Restoration Questline', location: 'glass_dunes' },
          { title: 'Ruins Puzzle Wing', location: 'ironroot_forest' },
          { title: 'Companion-Specific Stop', location: 'thornvale_hinterlands' },
          { title: 'Local Festival Intrigue', location: 'whispering_wilds' },
          { title: 'Smuggler Route Node', location: 'cryptward_depths' },
          { title: 'Guardian Trial Site', location: 'stormfang_range' }
        ]
      }
    ];

    BATCH_CONFIG.forEach((batch) => {
      const batchId = `batch${formatBatchNumber(batch.number)}`;
      const hubId = `${batchId}_hub`;
      const firstLocation = batch.ideas[0].location;
      const choices = batch.ideas.map((idea, index) => {
        const operationNumber = index + 1;
        const operationScene = `${batchId}_op${operationNumber}`;
        const previousCompleteFlag = `${batchId}_op${operationNumber - 1}_complete`;

        const operationMarker = OPERATION_MARKERS[operationNumber - 1];

        const baseChoice = {
          text: `${operationMarker} ${idea.title} (${LOCATIONS[idea.location].name})`,
          next: operationScene
        };

        if (operationNumber === 1) {
          return baseChoice;
        }

        return {
          ...baseChoice,
          condition: (state) => state.flags[previousCompleteFlag],
          requirementText: `Requires operation ${operationNumber - 1} completion`
        };
      });

      if (batch.nextHub) {
        const finalFlag = `${batchId}_op${batch.ideas.length}_complete`;
        choices.push({
          text: `➡️ Advance to Batch ${formatBatchNumber(batch.number + 1)} operations`,
          next: batch.nextHub,
          condition: (state) => state.flags[finalFlag],
          requirementText: `Requires completing Batch ${formatBatchNumber(batch.number)}`
        });
      }

      choices.push(
        { text: `← Return to Batch ${formatBatchNumber(batch.number - 1)} planning`, next: batch.previousHub },
        { text: '← Return to core quest planning', next: 'thornvale_prepare' }
      );

      SCENES[hubId] = {
        text: `<p>Batch ${formatBatchNumber(batch.number)} operations are now active. Complete all ten missions to advance campaign pressure and unlock the next wave.</p>
<p>Each operation updates location control, progression state, and resistance readiness across Eldermoor.</p>`,
        background: 'linear-gradient(180deg, #33435b 0%, #151b26 100%)',
        choices,
        onEnter: (state) => {
          state.location = firstLocation;
          LOCATIONS[firstLocation].discovered = true;
        }
      };

      batch.ideas.forEach((idea, index) => {
        const operationNumber = index + 1;
        const operationScene = `${batchId}_op${operationNumber}`;
        const completeScene = `${operationScene}_complete`;
        const completeFlag = `${batchId}_op${operationNumber}_complete`;
        const rewardedFlag = `${completeFlag}_rewarded`;
        const locationName = LOCATIONS[idea.location].name;

        SCENES[operationScene] = {
          text: `<p><span class="story-emphasis">Operation ${operationNumber}:</span> ${idea.title}</p>
<p>Deploy to <strong>${locationName}</strong> and complete mission objectives tied to this batch's campaign arc.</p>`,
          background: 'linear-gradient(180deg, #2d3f56 0%, #121b28 100%)',
          choices: [
            { text: '✅ Complete operation objective', next: completeScene },
            { text: `← Return to Batch ${formatBatchNumber(batch.number)} planning`, next: hubId }
          ],
          onEnter: (state) => {
            state.location = idea.location;
            LOCATIONS[idea.location].discovered = true;
          }
        };

        SCENES[completeScene] = {
          text: `<p>Operation ${operationNumber} complete: ${idea.title} in ${locationName} is now integrated into campaign flow.</p>`,
          background: 'linear-gradient(180deg, #3f5a3f 0%, #1a2b1a 100%)',
          choices: [
            { text: `Return to Batch ${formatBatchNumber(batch.number)} planning`, next: hubId }
          ],
          onEnter: (state) => {
            state.location = idea.location;
            state.flags[completeFlag] = true;
            LOCATIONS[idea.location].discovered = true;

            if (!state.flags[rewardedFlag]) {
              state.flags[rewardedFlag] = true;
              state.xp += BASE_OPERATION_XP + operationNumber;
              state.gold += BASE_OPERATION_GOLD + operationNumber;
            }
          }
        };
      });
    });
  }

  initializeBatch031To035Scenes();

  function initializeBatch036To040Scenes() {
    const formatBatchNumber = (num) => String(num).padStart(3, '0');
    const OPERATION_MARKERS = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    const BASE_OPERATION_XP = 10;
    const BASE_OPERATION_GOLD = 6;

    const BATCH_CONFIG = [
      {
        number: 36,
        previousHub: 'batch035_hub',
        nextHub: 'batch037_hub',
        ideas: [
          { title: 'Lore Archive Room', location: 'sunken_marshes' },
          { title: 'Landmark Restoration Questline', location: 'ashen_steppe' },
          { title: 'Ruins Puzzle Wing', location: 'moonlit_coast' },
          { title: 'Companion-Specific Stop', location: 'glass_dunes' },
          { title: 'Local Festival Intrigue', location: 'ironroot_forest' },
          { title: 'Smuggler Route Node', location: 'thornvale_hinterlands' },
          { title: 'Guardian Trial Site', location: 'whispering_wilds' },
          { title: 'Multi-Stage Rescue Operation', location: 'cryptward_depths' },
          { title: 'Cursed Landmark', location: 'stormfang_range' },
          { title: 'Diplomatic Summit Venue', location: 'auralis_ruins' }
        ]
      },
      {
        number: 37,
        previousHub: 'batch036_hub',
        nextHub: 'batch038_hub',
        ideas: [
          { title: 'Companion-Specific Stop', location: 'ashen_steppe' },
          { title: 'Local Festival Intrigue', location: 'moonlit_coast' },
          { title: 'Smuggler Route Node', location: 'glass_dunes' },
          { title: 'Guardian Trial Site', location: 'ironroot_forest' },
          { title: 'Multi-Stage Rescue Operation', location: 'thornvale_hinterlands' },
          { title: 'Cursed Landmark', location: 'whispering_wilds' },
          { title: 'Diplomatic Summit Venue', location: 'cryptward_depths' },
          { title: 'Relic-Forging Enclave', location: 'stormfang_range' },
          { title: 'Final-Act Foreshadowing Site', location: 'auralis_ruins' },
          { title: 'Micro-Location Chain (Legend Part X)', location: 'sunken_marshes' }
        ]
      },
      {
        number: 38,
        previousHub: 'batch037_hub',
        nextHub: 'batch039_hub',
        ideas: [
          { title: 'Guardian Trial Site', location: 'moonlit_coast' },
          { title: 'Multi-Stage Rescue Operation', location: 'glass_dunes' },
          { title: 'Cursed Landmark', location: 'ironroot_forest' },
          { title: 'Diplomatic Summit Venue', location: 'thornvale_hinterlands' },
          { title: 'Relic-Forging Enclave', location: 'whispering_wilds' },
          { title: 'Final-Act Foreshadowing Site', location: 'cryptward_depths' },
          { title: 'Micro-Location Chain (Legend Part VII)', location: 'stormfang_range' },
          { title: 'NPC Faction Outpost', location: 'auralis_ruins' },
          { title: 'Traversal Challenge Site', location: 'sunken_marshes' },
          { title: 'Memory-Echo Landmark', location: 'ashen_steppe' }
        ]
      },
      {
        number: 39,
        previousHub: 'batch038_hub',
        nextHub: 'batch040_hub',
        ideas: [
          { title: 'Diplomatic Summit Venue', location: 'glass_dunes' },
          { title: 'Relic-Forging Enclave', location: 'ironroot_forest' },
          { title: 'Final-Act Foreshadowing Site', location: 'thornvale_hinterlands' },
          { title: 'Micro-Location Chain (Legend Part IV)', location: 'whispering_wilds' },
          { title: 'NPC Faction Outpost', location: 'cryptward_depths' },
          { title: 'Traversal Challenge Site', location: 'stormfang_range' },
          { title: 'Memory-Echo Landmark', location: 'auralis_ruins' },
          { title: 'Settlement Conflict', location: 'sunken_marshes' },
          { title: 'Hidden Sanctuary', location: 'ashen_steppe' },
          { title: 'Elite Enemy Territory', location: 'moonlit_coast' }
        ]
      },
      {
        number: 40,
        previousHub: 'batch039_hub',
        nextHub: null,
        ideas: [
          { title: 'Micro-Location Chain (Legend Part I)', location: 'ironroot_forest' },
          { title: 'NPC Faction Outpost', location: 'thornvale_hinterlands' },
          { title: 'Traversal Challenge Site', location: 'whispering_wilds' },
          { title: 'Memory-Echo Landmark', location: 'cryptward_depths' },
          { title: 'Settlement Conflict', location: 'stormfang_range' },
          { title: 'Hidden Sanctuary', location: 'auralis_ruins' },
          { title: 'Elite Enemy Territory', location: 'sunken_marshes' },
          { title: 'Weather-Bound Location Event', location: 'ashen_steppe' },
          { title: 'Lore Archive Room', location: 'moonlit_coast' },
          { title: 'Landmark Restoration Questline', location: 'glass_dunes' }
        ]
      }
    ];

    BATCH_CONFIG.forEach((batch) => {
      const batchId = `batch${formatBatchNumber(batch.number)}`;
      const hubId = `${batchId}_hub`;
      const firstLocation = batch.ideas[0].location;
      const choices = batch.ideas.map((idea, index) => {
        const operationNumber = index + 1;
        const operationScene = `${batchId}_op${operationNumber}`;
        const previousCompleteFlag = `${batchId}_op${operationNumber - 1}_complete`;

        const operationMarker = OPERATION_MARKERS[operationNumber - 1];

        const baseChoice = {
          text: `${operationMarker} ${idea.title} (${LOCATIONS[idea.location].name})`,
          next: operationScene
        };

        if (operationNumber === 1) {
          return baseChoice;
        }

        return {
          ...baseChoice,
          condition: (state) => state.flags[previousCompleteFlag],
          requirementText: `Requires operation ${operationNumber - 1} completion`
        };
      });

      if (batch.nextHub) {
        const finalFlag = `${batchId}_op${batch.ideas.length}_complete`;
        choices.push({
          text: `➡️ Advance to Batch ${formatBatchNumber(batch.number + 1)} operations`,
          next: batch.nextHub,
          condition: (state) => state.flags[finalFlag],
          requirementText: `Requires completing Batch ${formatBatchNumber(batch.number)}`
        });
      }

      choices.push(
        { text: `← Return to Batch ${formatBatchNumber(batch.number - 1)} planning`, next: batch.previousHub },
        { text: '← Return to core quest planning', next: 'thornvale_prepare' }
      );

      SCENES[hubId] = {
        text: `<p>Batch ${formatBatchNumber(batch.number)} operations are now active. Complete all ten missions to advance campaign pressure and unlock the next wave.</p>
<p>Each operation updates location control, progression state, and resistance readiness across Eldermoor.</p>`,
        background: 'linear-gradient(180deg, #33435b 0%, #151b26 100%)',
        choices,
        onEnter: (state) => {
          state.location = firstLocation;
          LOCATIONS[firstLocation].discovered = true;
        }
      };

      batch.ideas.forEach((idea, index) => {
        const operationNumber = index + 1;
        const operationScene = `${batchId}_op${operationNumber}`;
        const completeScene = `${operationScene}_complete`;
        const completeFlag = `${batchId}_op${operationNumber}_complete`;
        const rewardedFlag = `${completeFlag}_rewarded`;
        const locationName = LOCATIONS[idea.location].name;

        SCENES[operationScene] = {
          text: `<p><span class="story-emphasis">Operation ${operationNumber}:</span> ${idea.title}</p>
<p>Deploy to <strong>${locationName}</strong> and complete mission objectives tied to this batch's campaign arc.</p>`,
          background: 'linear-gradient(180deg, #2d3f56 0%, #121b28 100%)',
          choices: [
            { text: '✅ Complete operation objective', next: completeScene },
            { text: `← Return to Batch ${formatBatchNumber(batch.number)} planning`, next: hubId }
          ],
          onEnter: (state) => {
            state.location = idea.location;
            LOCATIONS[idea.location].discovered = true;
          }
        };

        SCENES[completeScene] = {
          text: `<p>Operation ${operationNumber} complete: ${idea.title} in ${locationName} is now integrated into campaign flow.</p>`,
          background: 'linear-gradient(180deg, #3f5a3f 0%, #1a2b1a 100%)',
          choices: [
            { text: `Return to Batch ${formatBatchNumber(batch.number)} planning`, next: hubId }
          ],
          onEnter: (state) => {
            state.location = idea.location;
            state.flags[completeFlag] = true;
            LOCATIONS[idea.location].discovered = true;

            if (!state.flags[rewardedFlag]) {
              state.flags[rewardedFlag] = true;
              state.xp += BASE_OPERATION_XP + operationNumber;
              state.gold += BASE_OPERATION_GOLD + operationNumber;
            }
          }
        };
      });
    });
  }

  initializeBatch036To040Scenes();

  return { ITEMS, ENEMIES, LOCATIONS, SCENES, FRONTIER_CLUSTERS, FRONTIER_LOCATIONS };
})();

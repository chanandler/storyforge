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
        { text: '🧭 Investigate frontier operations', next: 'batch001_hub' },
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

  return { ITEMS, ENEMIES, LOCATIONS, SCENES };
})();

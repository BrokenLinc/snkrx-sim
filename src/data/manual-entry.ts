import _ from 'lodash';

import { SNKRXClassKey, SNKRXClass, SNKRXColorKey, SNKRXColor, Snek } from '../ts/types';

export const SNKRX_COLOR: {
  [Property in SNKRXColorKey]: SNKRXColor;
} = {
  bg: { hex: '#303030' },
  fg: { hex: '#dadada' },
  fg_alt: { hex: '#b0a89f' },
  yellow: { hex: '#facf00' },
  orange: { hex: '#f07021' },
  blue: { hex: '#019bd6' },
  green: { hex: '#8bbf40' },
  red: { hex: '#e91d39' },
  purple: { hex: '#8e559e' },
  blue2: { hex: '#4778ba' },
  yellow2: { hex: '#f59f10' },
};
_.each(SNKRX_COLOR, (snkrxClass, key) => {
  snkrxClass.key = key;
});

export const SNKRX_CLASS: {
  [Property in SNKRXClassKey]: SNKRXClass;
} = {
  warrior: { key: 'warrior', color: 'yellow', setNumbers: [3, 6] },
  ranger: { key: 'ranger', color: 'green', setNumbers: [3, 6] },
  healer: { key: 'healer', color: 'green', setNumbers: [2, 4] },
  conjurer: { key: 'conjurer', color: 'orange', setNumbers: [2, 4] },
  mage: { key: 'mage', color: 'blue', setNumbers: [3, 6] },
  nuker: { key: 'nuker', color: 'red', setNumbers: [3, 6] },
  rogue: { key: 'rogue', color: 'red', setNumbers: [3, 6] },
  enchanter: { key: 'enchanter', color: 'blue', setNumbers: [2, 4] },
  psyker: { key: 'psyker', color: 'fg', setNumbers: [2, 4] },
  curser: { key: 'curser', color: 'purple', setNumbers: [2, 4] },
  forcer: { key: 'forcer', color: 'yellow', setNumbers: [2, 4] },
  swarmer: { key: 'swarmer', color: 'orange', setNumbers: [2, 4] },
  voider: { key: 'voider', color: 'purple', setNumbers: [2, 4] },
  sorcerer: { key: 'sorcerer', color: 'blue2', setNumbers: [2, 4, 6] },
  mercenary: { key: 'mercenary', color: 'yellow2', setNumbers: [2, 4] },
  explorer: { key: 'explorer', color: 'fg', setNumbers: [1] },
};
_.each(SNKRX_CLASS, (snkrxClass, key) => {
  snkrxClass.key = key;
  snkrxClass.name = _.startCase(_.replace(key, '_', ' '));
});

export const SNEK: {
  [key: string]: Snek;
} = {
  arcanist: {
    color: 'blue2',
    tier: 1,
    sorcerer: true,
    level1: 'launches a slow moving orb that launches projectiles, each dealing 13 damage',
    level3: '+50% attack speed for the orb and 2 projectiles are released per cast',
  },
  archer: {
    color: 'green',
    tier: 1,
    ranger: true,
    level1: 'shoots an arrow that deals 12 damage and piercesaa',
    level3: 'the arrow ricochets off the wall 3 times',
  },
  assassin: {
    color: 'purple',
    tier: 3,
    rogue: true,
    voider: true,
    level1: 'throws a knife that deals 16.9 damage + 8.45 damage per second',
    level3: 'poison inflicted from crits deals 8x damage',
  },
  bane: {
    color: 'purple',
    tier: 3,
    curser: true,
    voider: true,
    level1: 'curses 6 nearby enemies for 6 seconds, they will create small void rifts on death',
    level3: "100% increased area for bane's void rifts",
  },
  barbarian: {
    color: 'yellow',
    tier: 2,
    curser: true,
    warrior: true,
    level1: 'deals 11 AoE damage and stuns enemies hit for 4 seconds',
    level3: 'stunned enemies also take 100% increased damage',
  },
  barrager: {
    color: 'green',
    tier: 3,
    forcer: true,
    ranger: true,
    warrior: true,
    level1: 'shoots a barrage of 3 arrows, each dealing 13.2 damage and pushing enemies',
    level3: 'every 3rd attack the barrage shoots 15 projectiles and they push harder',
  },
  beastmaster: {
    color: 'red',
    tier: 2,
    rogue: true,
    swarmer: true,
    level1: 'Spawns 2 critters if the beastmaster crits',
    level3: 'Spawns 2 critters if the beastmaster gets hit',
  },
  blade: {
    color: 'yellow',
    tier: 4,
    warrior: true,
    nuker: true,
    level1: 'Throws multiple blades that deal AoE damage',
    level3: 'Deal additional 22 damage per enemy hit',
  },
  cannoneer: {
    color: 'orange',
    tier: 4,
    ranger: true,
    nuker: true,
    level1: 'shoots a projectile that deals 24 AoE damage',
    level3: 'showers the hit area in 7 additional cannon shots that deal 24 AoE damage',
  },
  carver: {
    color: 'green',
    tier: 2,
    conjurer: true,
    level1: 'Carves a statue that periodically heals 1 unit for 20% max hp if in range',
    level3: 'Carves a tree that heals twice as fast, in a bigger area, and heals 2 units instead',
  },
  chronomancer: {
    color: 'blue',
    tier: 2,
    mage: true,
    enchanter: true,
    level1: '+2% attack speed to all allies',
    level3: 'enemies take damage over time 50% faster',
  },
  cleric: {
    color: 'green',
    tier: 1,
    healer: true,
    level1: 'heals a unit for 20% of its max hp when it drops below 50% max hp',
    level3: 'heals all units',
  },
  corruptor: {
    color: 'orange',
    tier: 4,
    ranger: true,
    swarmer: true,
    level1: 'spawn 3 small critters if the corruptor kills an enemy',
    level3: 'spawn 3 small critters if the corruptor hits an enemy',
  },
  cryomancer: {
    color: 'blue',
    tier: 2,
    mage: true,
    voider: true,
    level1: 'nearby enemies take 18.2 damage per second',
    level3: 'Enemies also slowed by 60% while in the area',
  },
  dual_gunner: {
    color: 'green',
    tier: 2,
    ranger: true,
    rogue: true,
    level1: 'shoots two parallel projectiles, each dealing 15.6 damage',
    level3: 'every 5th attach shoots in rapid succestion for 2 seconds',
  },
  elementor: {
    color: 'blue',
    tier: 3,
    mage: true,
    nuker: true,
    level1: 'deals 14 AoE damage in a large area centered on a random target',
    level3: 'slows enemies by 60% for 6 seconds on hit',
  },
  engineer: {
    color: 'orange',
    tier: 3,
    conjurer: true,
    level1: 'drops (up to 3) sentries that shoot bursts of projectiles, each dealing 10 damage',
    level3: 'drops 2 additional turrets and grants all turrets +50% damage and attack speed',
  },
  fairy: {
    color: 'green',
    tier: 4,
    healer: true,
    enchanter: true,
    level1: 'periodically heals 1 unit at random and grants it 100% attack speed for 6 seconds',
    level3: 'heals 2 units instead and grants them an additional 100% attack speed',
  },
  flagellant: {
    color: 'fg',
    tier: 3,
    psyker: true,
    enchanter: true,
    level1: 'deals 20 damage to self and grants 4% damage to all allies per cast',
    level3: 'deals 80 damage to self and grants 12% damage to all allies per cast',
  },
  gambler: {
    color: 'yellow2',
    tier: 3,
    mercenary: true,
    sorcerer: true,
    level1: 'deal 2x damage to a random enemy where X is how much gold you have',
    level3: '60/40/20% chance to cast the attack 2/3/4 times',
  },
  highlander: {
    color: 'yellow',
    tier: 4,
    warrior: true,
    level1: 'Deals 55 AoE damage',
    level3: 'quickly repeats the attack 3 times',
  },
  host: {
    color: 'orange',
    tier: 3,
    swarmer: true,
    level1: 'periodically spawn 1 critter',
    level3: '+100% critter spawn rate, and spawn 2 critters instead',
  },
  hunter: {
    color: 'green',
    tier: 2,
    conjurer: true,
    forcer: true,
    ranger: true,
    level1: 'shoots an arrow that deals 13.2 damage and has a 20% chance to summon a pet',
    level3: 'summons 3 pets and the pets ricochet off the walls once',
  },
  illusionist: {
    color: 'blue2',
    tier: 3,
    conjurer: true,
    sorcerer: true,
    level1: 'Launches a projectile that deals 13 damage and creates copies that do the same',
    level3: 'doubles the number of copies created and they release 12 projectiles on death',
  },
  infestor: {
    color: 'orange',
    tier: 3,
    curser: true,
    swarmer: true,
    level1: 'curses 8 nearby enemies for 6 seconds, they will release 2 critters on death',
    level3: 'Triples the number of critters released',
  },
  jester: {
    color: 'red',
    tier: 2,
    curser: true,
    rogue: true,
    level1: 'curses nearby enemies for 6 seconds. They will explode into 4 knives on death',
    level3: 'curses 6 enemies and all knives seek enemies and pierce 2 times',
  },
  juggernaut: {
    color: 'yellow',
    tier: 3,
    forcer: true,
    warrior: true,
    level1: 'deals 12.1 AoE damage and pushes enemies away with a strong force',
    level3: 'enemies pushed by the juggernaut take 193.6 damage if they hit a wall',
  },
  magician: {
    color: 'blue',
    tier: 1,
    mage: true,
    level1: 'Creates a small area that deals 14 AoE Damage',
    level3: 'the magician becomes invulnerable for 6 seconds but also cannot attack',
  },
  merchant: {
    color: 'yellow2',
    tier: 2,
    mercenary: true,
    level1: 'gain +1 interest for every 10 gold',
    level3: 'your first reroll is always free',
  },
  miner: {
    color: 'yellow2',
    tier: 1,
    mercenary: true,
    level1: 'Picking up gold releases 4 homing projectiles that each deal 10 damage',
    level3: 'releases 8 projectiles instead and they pierce twice',
  },
  outlaw: {
    color: 'red',
    tier: 2,
    rogue: true,
    warrior: true,
    level1: 'throws a fan of 5 knives, each dealing 14.3 damage',
    level3: '+50% outlaw attack speed and its knives seek enemies',
  },
  plague_doctor: {
    color: 'purple',
    tier: 4,
    nuker: true,
    voider: true,
    level1: 'Creates an area that deals 13 damage per second',
    level3: 'nearby enemies take an additional 52 damage per second',
  },
  priest: {
    color: 'green',
    tier: 4,
    healer: true,
    level1: 'heals all allies for 20% of their max hp',
    level3: 'picks 3 units at random and grants them a buff that prevents a death once',
  },
  psychic: {
    color: 'fg',
    tier: 2,
    psyker: true,
    sorcerer: true,
    level1: 'creates a small area that deals 13 AoE damage',
    level3: 'the attack can happen from any distance and repeats once',
  },
  psykeeper: {
    color: 'fg',
    tier: 3,
    psyker: true,
    healer: true,
    level1: '(…) all damage taken is stored up to 50% max hp and distributed as healing to all allies',
    level3: 'also redistributes damage taken as damage to all enemies at double value',
  },
  psykino: {
    color: 'fg',
    tier: 4,
    forcer: true,
    mage: true,
    psyker: true,
    level1: 'pulls enemies together for 2 seconds',
    level3: 'enemies take 246.4 damage and are pushed away when the area expires',
  },
  pyromancer: {
    color: 'red',
    tier: 3,
    mage: true,
    nuker: true,
    voider: true,
    level1: 'nearby enemies take 18.2 damage per second',
    level3: 'enemies killed by the pyromancer explode, dealing 72.8 AoE damage',
  },
  saboteur: {
    color: 'orange',
    tier: 2,
    conjurer: true,
    rogue: true,
    nuker: true,
    level1: 'calls 2 saboteurs to seek targets and deal 13 AoE damage',
    level3: 'the explosion has 50% chance to crit, increasing in size and dealing 2x damage',
  },
  sage: {
    color: 'purple',
    tier: 2,
    forcer: true,
    nuker: true,
    level1: 'shoots a slow projectile that draws enemies in',
    level3: 'when the projectile expires deal 132 damage to all enemies under its influence',
  },
  scout: {
    color: 'red',
    tier: 1,
    rogue: true,
    level1: 'throws a knife that deals 13 damage and chains 3 times',
    level3: '+25% damage per chain and +3 chains',
  },
  silencer: {
    color: 'blue2',
    tier: 2,
    curser: true,
    sorcerer: true,
    level1: 'Curses nearby enemies for 6 seconds, preventing them from using special attacks',
    level3: 'The Curse Also deals 52 damage per second',
  },
  spellblade: {
    color: 'blue',
    tier: 3,
    mage: true,
    rogue: true,
    level1: 'throws knives that deal 18.2 damage, pierce and spiral outwards',
    level3: 'faster projectile speed and tighter turns',
  },
  squire: {
    color: 'yellow',
    tier: 2,
    warrior: true,
    enchanter: true,
    level1: '+20% damage and defense to all allies',
    level3: '+30% damage, attack speed, movement speed and defense to all allies',
  },
  stormweaver: {
    color: 'blue',
    tier: 3,
    enchanter: true,
    level1: 'infuses projectiles with chain lightning that deals 20% damage to 2 enemies',
    level3: "chain lightning's trigger area of effect and number of units hit is doubled",
  },
  swordsman: {
    color: 'yellow',
    tier: 1,
    warrior: true,
    level1: 'deals 11 damage in an area, deals extra 1.65 damage per unit hit',
    level3: "swordsman's damage is doubled",
  },
  thief: {
    color: 'red',
    tier: 4,
    mercenary: true,
    rogue: true,
    level1: 'throws a knife that deals 26 damage and chains 5 times',
    level3: 'if the knife crits it deals 520 damage, chains 10 times and grants 1 gold',
  },
  usurer: {
    color: 'purple',
    tier: 3,
    curser: true,
    mercenary: true,
    voider: true,
    level1: 'Curses nearby enemies indefinitely with debt, dealing 13 damage per second',
    level3: 'if the same enemy is cursed 3 times it takes 250 damage',
  },
  vagrant: {
    color: 'fg',
    tier: 1,
    psyker: true,
    ranger: true,
    warrior: true,
    level1: 'shoots a projectile that deals 13.2 damage',
    level3: '+10% damage and +10% attack speed per active set',
  },
  vulcanist: {
    color: 'red',
    tier: 4,
    sorcerer: true,
    nuker: true,
    level1: 'creates a volcano that explodes the nearby area 4 times, dealing 13 AoE damage',
    level3: 'the number and speed of explosions is doubles',
  },
  warden: {
    color: 'yellow',
    tier: 4,
    forcer: true,
    sorcerer: true,
    level1: 'creates a force field around a random (ally) unit that prevents enemies from entering',
    level3: 'creates a force field around 2 units',
  },
  witch: {
    color: 'purple',
    tier: 2,
    sorcerer: true,
    voider: true,
    level1: 'creates an area that ricochets and deals 16.9 damage per second',
    level3: '(the?) area peridodically releases projectiles, each dealing 67.6 damage and chaining on ..(?)',
  },
  wizard: {
    color: 'blue',
    tier: 2,
    mage: true,
    nuker: true,
    level1: 'shoots a projectile that deals 14 AoE damage',
    level3: 'the projectile chains 3 times',
  },
};
_.each(SNEK, (snek, key) => {
  snek.key = key;
  snek.name = _.startCase(_.replace(key, '_', ' '));
});

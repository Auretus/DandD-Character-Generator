const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CharacterSchema = new Schema({
  identityStats: {
    characterName: {
      type: String,
      required: true,
    },
    playerID: {
      type: Schema.Types.ObjectID,
      ref: "User",
    },
    effectiveCharacterLevel: {
      // Sum of all class levels
      type: Number,
      min: 1,
      required: true,
    },
    class1: {
      name: String,
      level: {
        type: Number,
        min: 1,
        max: 20,
      },
      required: true,
    },
    class2: {
      name: String,
      level: {
        type: Number,
        min: 0,
        max: 20,
      },
    },
    class3: {
      name: String,
      level: {
        type: Number,
        min: 0,
        max: 20,
      },
    },
    race: String,
    size: {
      type: String,
      enum: ["Fine", "Diminutive", "Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan", "Colossal"],
    },
    theme: String,
    speed: Number, // listed in feet per round
    gender: String,
    homeWorld: String,
    alignment: {
      type: String,
      enum: [
        "Lawful Good",
        "Neutral Good",
        "Chaotic Good",
        "Lawful Neutral",
        "Neutral",
        "Chaotic Neutral",
        "Lawful Evil",
        "Neutral Evil",
        "Chaotic Evil",
      ],
    },
    deity: String,
  },
  abilityScores: {
    /* formulae for calculating ability scores:
    totalScore = 10 + racial + theme + ability points allocated at character creation + improvements from level-up + augment bonus
    Done correctly, this should generate an ability score number between 1 and 28 for most player characters. 10 is considered the baseline average for most humanoids; anything lower represents a significant deficit in that area, anything higher represents a noticeable advantage. 
    The limit at character creation for any given stat is 18; level improvements and augments can push this number higher. Racial modifiers may be negative, all other permanent modifiers must always be positive (or 0).
    upgradedScore = totalScore + misc 
            The Misc. modifier can never reduce the upgraded score to negative values; any extra penalties that would do so are ignored. 
            Total and upgraded modifiers are calculated with the following formula:
            modifier = Math.floor((score - 10) / 2)
            This means that any ability score at 10 will have a modifier of 0, anything below 10 will have a negative modifier, and anything above will have a positive modifier.
            */
    strength: {
      racial: Number,
      theme: Number,
      points: Number,
      level: Number,
      augment: Number,
      misc: Number,
      totalScore: {
        type: Number,
        min: 1,
      },
      totalModifier: Number,
      upgradedScore: {
        type: Number,
        min: 0,
      },
      upgradedModifier: Number,
    },
    dexterity: {
      racial: Number,
      theme: Number,
      points: Number,
      level: Number,
      augment: Number,
      misc: Number,
      totalScore: {
        type: Number,
        min: 1,
      },
      totalModifier: Number,
      upgradedScore: {
        type: Number,
        min: 0,
      },
      upgradedModifier: Number,
    },
    constitution: {
      racial: Number,
      theme: Number,
      points: Number,
      level: Number,
      augment: Number,
      misc: Number,
      totalScore: {
        type: Number,
        min: 1,
      },
      totalModifier: Number,
      upgradedScore: {
        type: Number,
        min: 0,
      },
      upgradedModifier: Number,
    },
    intelligence: {
      racial: Number,
      theme: Number,
      points: Number,
      level: Number,
      augment: Number,
      misc: Number,
      totalScore: {
        type: Number,
        min: 1,
      },
      totalModifier: Number,
      upgradedScore: {
        type: Number,
        min: 0,
      },
      upgradedModifier: Number,
    },
    wisdom: {
      racial: Number,
      theme: Number,
      points: Number,
      level: Number,
      augment: Number,
      misc: Number,
      totalScore: {
        type: Number,
        min: 1,
      },
      totalModifier: Number,
      upgradedScore: {
        type: Number,
        min: 0,
      },
      upgradedModifier: Number,
    },
    charisma: {
      racial: Number,
      theme: Number,
      points: Number,
      level: Number,
      augment: Number,
      misc: Number,
      totalScore: {
        type: Number,
        min: 1,
      },
      totalModifier: Number,
      upgradedScore: {
        type: Number,
        min: 0,
      },
      upgradedModifier: Number,
    },
  },
  initiative: {
    feats: Number,
    training: Number,
    misc: Number,
    total: Number,
  },
  health: {
    hitPoints: {
      /* total = racial + (class1PointsPerLevel * class1Levels) + (class2PointsPerLevel * class2Levels) + (class3PointsPerLevel * class3Levels)
       * current = total + temp - damageTaken
       * temporary HP may push current above total, though it won't generally last
       * temporary HP are lost before SP
       */
      racial: Number,
      class1PointsPerLevel: Number,
      class1Levels: Number,
      class2PointsPerLevel: Number,
      class2Levels: Number,
      class3PointsPerLevel: Number,
      class3Levels: Number,
      total: Number,
      temp: Number,
      damageTaken,
      current: Number,
    },
    staminaPoints: {
      /* total = ((class1PointsPerLevel + conModifier) * class1Levels) 
        + ((class2PointsPerLevel + conModifier) * class2Levels)
          + ((class3PointsPerLevel + conModifier) * class3Levels)
          * conModifier is taken directly from abilityScores.constitution.upgradedModifier, and should be updated on-the-fly
          * leveling up should never make you lose total SP; if (classPointsPerLevel + conModifier) < 0, use 0 instead
          */
      conModifier: Number,
      class1PointsPerLevel: Number,
      class1Levels: Number,
      class2PointsPerLevel: Number,
      class2Levels: Number,
      class3PointsPerLevel: Number,
      class3Levels: Number,
      total: Number,
      current: Number,
    },
    resolvePoints: {
      /* total = (identityStats.effectiveCharacterLevel / 2) + keyAbilityScore
       * your total RP may never be less than 1; your current RP may never be less than 0
       */
      keyAbilityScore: Number,
      total: {
        type: Number,
        min: 1,
      },
      current: {
        type: Number,
        min: 0,
      },
    },
  },
  // BEGIN refactored schema
  armorClass: {
    energyArmorClass: {
      // total = 10 + armor bonus + dex mod + misc mod
      total: Number,
      armorBonus: Number,
      dexMod: Number,
      miscMod: Number,
    },
    kineticArmorClass: {
      // total = 10 + armor bonus + dex mod + misc mod
      total: Number,
      armorBonus: Number,
      dexMod: Number,
      miscMod: Number,
    },
    // 8 + kineticAC
    acForCombatManeuvers: Number,
    damageReduction: {
      value: Number,
      bypassType: String,
    },
    energyResistances: {
      acid: String,
      cold: String,
      electricity: String,
      fire: String,
      sonic: String,
    },
  },
  savingThrows: {
    /* total = base save + ability mod + misc mod
    * key ability scores:
    * - fortitude => constitution
    * - reflex => dexterity
    * - will => wisdom
    */
   fortitude: {
     total: Number,
     baseSave: Number,
     abilityMod: Number,
     miscMod: Number,
    },
    reflex: {
      total: Number,
      baseSave: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    will: {
      total: Number,
      baseSave: Number,
      abilityMod: Number,
      miscMod: Number,
    },
  },
  attackBonuses: {
    meleeAttack: {
      total: Number,
      baseAttackBonus: Number,
      strengthModifier: Number,
      miscMod: Number,
    },
    rangedAttack: {
      total: Number,
      baseAttackBonus: Number,
      dexterityModifier: Number,
      miscMod: Number,
    },
    thrownAttack: {
      total: Number,
      baseAttackBonus: Number,
      strengthModifier: Number,
      miscMod: Number,
    },
  },
  weapon1: {
    name: String,
    level: Number,
    attackBonus: Number,
    damage: Number,
    criticalMultiplier: Number,
    criticalThreatRange: Number,
    range: String,
    ammo: {
      total: Number,
      current: Number,
    },
    special: String,
  },
  weapon2: {
    name: String,
    level: Number,
    attackBonus: Number,
    damage: Number,
    criticalMultiplier: Number,
    criticalThreatRange: Number,
    range: String,
    ammo: {
      total: Number,
      current: Number,
    },
    special: String,
  },
  weapon3: {
    name: String,
    level: Number,
    attackBonus: Number,
    damage: Number,
    criticalMultiplier: Number,
    criticalThreatRange: Number,
    range: String,
    ammo: {
      total: Number,
      current: Number,
    },
    special: String,
  },
  skills: {
    skillRanksPerLevel: Number,
    // total = ranks + class bonus (always 0 or 3) + key ability mod + misc mod
    // ranks may not exceed Effective Character Level
    // trainedOnly should never be modified
    acrobatics: {
      trainedOnly: [{ type: Boolean, default: false }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    athletics: {
      trainedOnly: [{ type: Boolean, default: false }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    bluff: {
      trainedOnly: [{ type: Boolean, default: false }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    computers: {
      trainedOnly: [{ type: Boolean, default: true }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    culture: {
      trainedOnly: [{ type: Boolean, default: true }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    diplomacy: {
      trainedOnly: [{ type: Boolean, default: false }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    disguise: {
      trainedOnly: [{ type: Boolean, default: false }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    engineering: {
      trainedOnly: [{ type: Boolean, default: true }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    intimidate: {
      trainedOnly: [{ type: Boolean, default: false }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    lifeScience: {
      trainedOnly: [{ type: Boolean, default: true }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    medicine: {
      trainedOnly: [{ type: Boolean, default: true }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    mysticism: {
      trainedOnly: [{ type: Boolean, default: true }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    perception: {
      trainedOnly: [{ type: Boolean, default: false }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    physicalScience: {
      trainedOnly: [{ type: Boolean, default: true }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    piloting: {
      trainedOnly: [{ type: Boolean, default: false }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    profession1: {
      trainedOnly: [{ type: Boolean, default: true }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    profession2: {
      trainedOnly: [{ type: Boolean, default: true }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    senseMotive: {
      trainedOnly: [{ type: Boolean, default: false }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    sleightOfHand: {
      trainedOnly: [{ type: Boolean, default: true }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    stealth: {
      trainedOnly: [{ type: Boolean, default: false }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
    survival: {
      trainedOnly: [{ type: Boolean, default: false }],
      acPenaltyApplies: Boolean,
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
      total: Number,
    },
  },
});
// END refactored section

module.exports = Character = mongoose.model("Character", CharacterSchema);

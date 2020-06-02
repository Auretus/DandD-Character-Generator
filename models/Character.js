const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// BEGIN refactored schema
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
        min: 1,
        max: 20,
      },
    },
    class3: {
      name: String,
      level: {
        type: Number,
        min: 1,
        max: 20,
      },
    },
    race: String,
    size: {
      type: String,
      enum: ["Fine", "Diminutive", "Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan", "Colossal"],
      required: true,
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
    total: Number
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
  // END refactored section
  armorClass: {
    eac: {
      type: Number,
    },
    kac: {
      type: Number,
    },
    acForCombatManeuvers: {
      type: Number,
    },
    damageResistance: {
      type: Number,
    },
  },
  savingThrows: {
    fortitude: {
      type: Number,
    },
    reflex: {
      type: Number,
    },
    will: {
      type: Number,
    },
  },
  attackBonuses: {
    meleeAttack: {
      type: Number,
    },
    rangedAttack: {
      type: Number,
    },
    thrownAttack: {
      type: Number,
    },
  },
  weapons: {
    weaponTitle: {
      type: String,
    },
    range: {
      type: Number,
    },
    damage: {
      type: Number,
    },
    ammo: {
      total: Number,
      current: Number,
    },
    attackBonus: {
      type: Number,
    },
    level: {
      type: Number,
    },
  },
  skills: {
    skillRanksPerLevel: {},
    acrobatics: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    athletics: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    bluff: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    computers: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    culture: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    diplomacy: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    disguise: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    engineering: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    intimidate: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    lifeScience: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    medicine: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    mysticism: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    perception: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    physicalScience: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    piloting: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    profession1: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    profession2: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    senseMotive: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    sleightOfHand: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    stealth: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
    survival: {
      ranks: Number,
      classBonus: Number,
      abilityMod: Number,
      miscMod: Number,
    },
  },
});

module.exports = Character = mongoose.model("Character", CharacterSchema);

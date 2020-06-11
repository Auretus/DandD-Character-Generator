//apiRoutes.js is for routes displaying data from db and saving data to db
const express = require("express").Router();
const mongoose = require("mongoose");
var db = require("../../models/Character");
const app = express();

//GET route for getting all characters
app.get("/api/character", (req, res) => {
    console.log(res);
    db.findAll({})
        .then(allCharacters =>{
            res.json(allCharacters);
        })
});

//GET route for getting a single character by name
app.get("/api/character/:id", (req, res) => {
    console.log(res);
    db.findOne({
        where: {
            _id: req.params.id
        }
    }).then(singleCharacter => {
        res.json(singleCharacter);
    })
});

//POST route for saving a new character
app.post("/api/create", (req, res) => {
    console.log(req.body);
    res.json(req.body);
    const identityStats = req.body.identityStats;
    const abilityScores = req.body.abilityScores;
    const health = req.body.health;
    const armorClass = req.body.armorClass;
    const savingThrows = req.body.savingThrows;
    const attackBonuses = req.body.attackBonuses;
    const weapon = req.body.weapon;
    const skills = req.body.skills;
    const spells = req.body.spells;
    db.create({
        //identityStats
        characterName: identityStats.characterName,
        playerID: identityStats.playerID, //do i ref this differently?
        effectiveCharacterLevel: identityStats.effectiveCharacterLevel,
        class: identityStats.class, 
        race: identityStats.race,
        size: identityStats.size,
        theme: identityStats.theme,
        speed: identityStats.speed,
        gender: identityStats.gender,
        homeWorld: identityStats.homeWorld,
        alignment: identityStats.alignment,
        deity: identityStats.deity,
        //ability scores
        //STRENGTH
        strength: totalScoreStrength,
        totalScoreStrength: (10 + 
            abilityScores.strength.racial + 
            abilityScores.strength.theme + 
            abilityScores.strength.points + 
            abilityScores.strength.level + 
            abilityScores.strength.augment + 
            abilityScores.strength.misc),
        upgradedScoreStrength: totalScoreStrength + abilityScores.strength.misc,
        totalModifierStrength: Math.floor((totalScoreStrength - 10) / 2),
        upgradedModifierStrength: Math.floor((totalScoreStrength - 10) / 2),
        //DEXTERITY
        dexterity: totalScoreDexterity,
        totalScoreDexterity: (10 + 
            abilityScores.dexterity.racial + 
            abilityScores.dexterity.theme + 
            abilityScores.dexterity.points + 
            abilityScores.dexterity.level + 
            abilityScores.dexterity.augment + 
            abilityScores.dexterity.misc),
        upgradedScoreDexterity: totalScoreDexterity + abilityScores.dexterity.misc,
        totalModifierDexterity: Math.floor((totalScoreDexterity - 10) / 2),
        upgradedModifierDexterity: Math.floor((totalScoreDexterity - 10) / 2),
        //CONSTITUTION
        constitution: totalScoreConstitution,
        totalScoreConstitution: (10 + 
            abilityScores.constitution.racial + 
            abilityScores.constitution.theme + 
            abilityScores.constitution.points + 
            abilityScores.constitution.level + 
            abilityScores.constitution.augment + 
            abilityScores.constitution.misc),
        upgradedScoreConstitution: totalScoreConstitution + abilityScores.constitution.misc,
        totalModifierConstitution: Math.floor((totalScoreConstitution - 10) / 2),
        upgradedModifierConstitution: Math.floor((totalScoreConstitution - 10) / 2),
        //INTELLIGENCE
        intelligence: totalScoreIntelligence,
        totalScoreIntelligence: (10 + 
            abilityScores.intelligence.racial + 
            abilityScores.intelligence.theme + 
            abilityScores.intelligence.points + 
            abilityScores.intelligence.level + 
            abilityScores.intelligence.augment + 
            abilityScores.intelligence.misc),
        upgradedScoreIntelligence: totalScoreIntelligence + abilityScores.intelligence.misc,
        totalModifierIntelligence: Math.floor((totalScoreIntelligence - 10) / 2),
        upgradedModifierIntelligence: Math.floor((totalScoreIntelligence - 10) / 2),
        //WISDOM
        wisdom: totalScoreWisdom,
        totalScoreWisdom: (10 + 
            abilityScores.wisdom.racial + 
            abilityScores.wisdom.theme + 
            abilityScores.wisdom.points + 
            abilityScores.wisdom.level + 
            abilityScores.wisdom.augment + 
            abilityScores.wisdom.misc),
        upgradedScoreWisdom: totalScoreWisdom + abilityScores.wisdom.misc,
        totalModifierWisdom: Math.floor((totalScoreWisdom - 10) / 2),
        upgradedModifierWisdom: Math.floor((totalScoreWisdom - 10) / 2),
        //CHARISMA
        charisma: totalScoreCharisma,
        totalScoreCharisma: (10 + 
            abilityScores.charisma.racial + 
            abilityScores.charisma.theme + 
            abilityScores.charisma.points + 
            abilityScores.charisma.level + 
            abilityScores.charisma.augment + 
            abilityScores.charisma.misc),
        upgradedScoreCharisma: totalScoreCharisma + abilityScores.charisma.misc,
        totalModifierCharisma: Math.floor((totalScoreCharisma - 10) / 2),
        upgradedModifierCharisma: Math.floor((totalScoreCharisma - 10) / 2),
        //Initiative
        initiative: (
            req.body.initiative.feats +
            req.body.initiative.training +
            req.body.initiative.misc),
        //Health - hitPoints, staminaPoints, resolvePoints
        hitPointsTotal: health.hitpoints.racial + (health.hitpoints.class[0].pointsPerLevel * health.hitpoints.class[0].levels),
        currentHitPoints: hitPointsTotal + health.hitpoints.current - health.hitpoints.damageTaken,
        conModifier: abilityScores.constitution.upgradedModifierConstitution,
        staminaPointsTotal: (health.staminaPoints.class[0].pointsPerLevel + conModifier) * health.staminaPoints.class[0].levels,
        currentStaminaPoints: health.staminaPoints.current,
        resolvePointsTotal: (identityStats.effectiveCharacterLevel / 2) + keyAbilityScore,
        keyAbilityScore: health.resolvePoints.keyAbilityScore,
        currentResolvePoints: health.resolvePoints.current,
        //ArmorClass
        energyArmorClass: 10 + 
            armorClass.armorBonus +
            armorClass.dexMod +
            armorClass.miscMod,
        kineticArmorClass: 10 + 
            armorClass.armorBonus +
            armorClass.dexMod +
            armorClass.miscMod,
        acForCombatManeuvers: 8 + kineticArmorClass,
        damageReduction: armorClass.damageReduction.value,
        damageReductionBypassType: armorClass.damageReduction.bypassType,
        energyResistancesAcid: armorClass.energyResistancesAcid,
        energyResistancesCold: armorClass.energyResistancesCold,
        energyResistancesElectricity: armorClass.energyResistancesElectricity,
        energyResistancesFire: armorClass.energyResistancesFire,
        energyResistancesSonic: armorClass.energyResistancesSonic,
        //SavingThrows
        fortitude: savingThrows.fortitude.baseSave +
            savingThrows.fortitude.abilityMod + 
            savingThrows.fortitude.miscMod,
        reflex: savingThrows.reflex.baseSave +
            savingThrows.reflex.abilityMod + 
            savingThrows.reflex.miscMod,
        will: savingThrows.will.baseSave +
            savingThrows.will.abilityMod + 
            savingThrows.will.miscMod,
        //attackBonuses
        meleeAttack: attackBonuses.meleeAttack.baseAttackBonus +
            attackBonuses.meleeAttack.strengthModifier +
            attackBonuses.meleeAttack.miscMod,
        rangedAttack: attackBonuses.rangedAttack.baseAttackBonus +
            attackBonuses.rangedAttack.dexterityModifier +
            attackBonuses.rangedAttack.miscMod,
        thrownAttack: attackBonuses.thrownAttack.baseAttackBonus +
            attackBonuses.thrownAttack.strengthModifier +
            attackBonuses.thrownAttack.miscMod,
        //weapon
        weaponName: weapon[0].name,
        weaponLevel: weapon[0].level,
        weaponAttackBonus: weapon[0].attackBonus,
        weaponDamage: weapon[0].damage,
        weaponCriticalMultiplier: weapon[0].criticalMultiplier,
        weaponCriticalThreatRange: weapon[0].criticalThreatRange,
        weaponRange: weapon[0].range,
        weaponAmmoTotal: weapon[0].ammo.total,
        weaponAmmoCurrent: weapon[0].ammo.current,
        weaponSpecial: weapon[0].special,
        //Skills
        skillRanksPerLevel: skills.skillRanksPerLevel,
        //acrobatics
        acrobaticsTrained: skills.acrobatics.trainedOnly,
        acrobaticsAcPenaltyApplies: skills.acrobatics.acPenaltyApplies,
        acrobaticsRanks: skills.acrobatics.ranks,
        acrobaticsClassBonus: skills.acrobatics.classBonus,
        acrobaticsAbilityMod: skills.acrobatics.abilityMod,
        acrobaticsMiscMod: skills.acrobatics.miscMod,
        acrobaticsTotal: acrobaticsRanks + acrobaticsClassBonus + acrobaticsAbilityMod + acrobaticsMiscMod,
        //athletics
        athleticsTrained: skills.athletics.trainedOnly,
        athleticsAcPenaltyApplies: skills.athletics.acPenaltyApplies,
        athleticsRanks: skills.athletics.ranks,
        athleticsClassBonus: skills.athletics.classBonus,
        athleticsAbilityMod: skills.athletics.abilityMod,
        athleticsMiscMod: skills.athletics.miscMod,
        athleticsTotal: athleticsRanks + athleticsClassBonus + athleticsAbilityMod + athleticsMiscMod,
        //bluff
        bluffTrained: skills.bluff.trainedOnly,
        bluffAcPenaltyApplies: skills.bluff.acPenaltyApplies,
        bluffRanks: skills.bluff.ranks,
        bluffClassBonus: skills.bluff.classBonus,
        bluffAbilityMod: skills.bluff.abilityMod,
        bluffMiscMod: skills.bluff.miscMod,
        bluffTotal: bluffRanks + bluffClassBonus + bluffAbilityMod + bluffMiscMod,
        //computers
        computersTrained: skills.computers.trainedOnly,
        computersAcPenaltyApplies: skills.computers.acPenaltyApplies,
        computersRanks: skills.computers.ranks,
        computersClassBonus: skills.computers.classBonus,
        computersAbilityMod: skills.computers.abilityMod,
        computersMiscMod: skills.computers.miscMod,
        computersTotal: computersRanks + computersClassBonus + computersAbilityMod + computersMiscMod,
        //culture
        cultureTrained: skills.culture.trainedOnly,
        cultureAcPenaltyApplies: skills.culture.acPenaltyApplies,
        cultureRanks: skills.culture.ranks,
        cultureClassBonus: skills.culture.classBonus,
        cultureAbilityMod: skills.culture.abilityMod,
        cultureMiscMod: skills.culture.miscMod,
        cultureTotal: cultureRanks + cultureClassBonus + cultureAbilityMod + cultureMiscMod,
        //diplomacy
        diplomacyTrained: skills.diplomacy.trainedOnly,
        diplomacyAcPenaltyApplies: skills.diplomacy.acPenaltyApplies,
        diplomacyRanks: skills.diplomacy.ranks,
        diplomacyClassBonus: skills.diplomacy.classBonus,
        diplomacyAbilityMod: skills.diplomacy.abilityMod,
        diplomacyMiscMod: skills.diplomacy.miscMod,
        diplomacyTotal: diplomacyRanks + diplomacyClassBonus + diplomacyAbilityMod + diplomacyMiscMod,
        //disguise
        disguiseTrained: skills.disguise.trainedOnly,
        disguiseAcPenaltyApplies: skills.disguise.acPenaltyApplies,
        disguiseRanks: skills.disguise.ranks,
        disguiseClassBonus: skills.disguise.classBonus,
        disguiseAbilityMod: skills.disguise.abilityMod,
        disguiseMiscMod: skills.disguise.miscMod,
        disguiseTotal: disguiseRanks + disguiseClassBonus + disguiseAbilityMod + disguiseMiscMod,
        //engineering
        engineeringTrained: skills.engineering.trainedOnly,
        engineeringAcPenaltyApplies: skills.engineering.acPenaltyApplies,
        engineeringRanks: skills.engineering.ranks,
        engineeringClassBonus: skills.engineering.classBonus,
        engineeringAbilityMod: skills.engineering.abilityMod,
        engineeringMiscMod: skills.engineering.miscMod,
        engineeringTotal: engineeringRanks + engineeringClassBonus + engineeringAbilityMod + engineeringMiscMod,
        //intimidate
        intimidateTrained: skills.intimidate.trainedOnly,
        intimidateAcPenaltyApplies: skills.intimidate.acPenaltyApplies,
        intimidateRanks: skills.intimidate.ranks,
        intimidateClassBonus: skills.intimidate.classBonus,
        intimidateAbilityMod: skills.intimidate.abilityMod,
        intimidateMiscMod: skills.intimidate.miscMod,
        intimidateTotal: intimidateRanks + intimidateClassBonus + intimidateAbilityMod + intimidateMiscMod,
        //lifeScience
        lifeScienceTrained: skills.lifeScience.trainedOnly,
        lifeScienceAcPenaltyApplies: skills.lifeScience.acPenaltyApplies,
        lifeScienceRanks: skills.lifeScience.ranks,
        lifeScienceClassBonus: skills.lifeScience.classBonus,
        lifeScienceAbilityMod: skills.lifeScience.abilityMod,
        lifeScienceMiscMod: skills.lifeScience.miscMod,
        lifeScienceTotal: lifeScienceRanks + lifeScienceClassBonus + lifeScienceAbilityMod + lifeScienceMiscMod,
        //medicine
        medicineTrained: skills.medicine.trainedOnly,
        medicineAcPenaltyApplies: skills.medicine.acPenaltyApplies,
        medicineRanks: skills.medicine.ranks,
        medicineClassBonus: skills.medicine.classBonus,
        medicineAbilityMod: skills.medicine.abilityMod,
        medicineMiscMod: skills.medicine.miscMod,
        medicineTotal: medicineRanks + medicineClassBonus + medicineAbilityMod + medicineMiscMod,
        //mysticism
        mysticismTrained: skills.mysticism.trainedOnly,
        mysticismAcPenaltyApplies: skills.mysticism.acPenaltyApplies,
        mysticismRanks: skills.mysticism.ranks,
        mysticismClassBonus: skills.mysticism.classBonus,
        mysticismAbilityMod: skills.mysticism.abilityMod,
        mysticismMiscMod: skills.mysticism.miscMod,
        mysticismTotal: mysticismRanks + mysticismClassBonus + mysticismAbilityMod + mysticismMiscMod,
        //perception
        perceptionTrained: skills.perception.trainedOnly,
        perceptionAcPenaltyApplies: skills.perception.acPenaltyApplies,
        perceptionRanks: skills.perception.ranks,
        perceptionClassBonus: skills.perception.classBonus,
        perceptionAbilityMod: skills.perception.abilityMod,
        perceptionMiscMod: skills.perception.miscMod,
        perceptionTotal: perceptionRanks + perceptionClassBonus + perceptionAbilityMod + perceptionMiscMod,
        //physicalScience
        physicalScienceTrained: skills.physicalScience.trainedOnly,
        physicalScienceAcPenaltyApplies: skills.physicalScience.acPenaltyApplies,
        physicalScienceRanks: skills.physicalScience.ranks,
        physicalScienceClassBonus: skills.physicalScience.classBonus,
        physicalScienceAbilityMod: skills.physicalScience.abilityMod,
        physicalScienceMiscMod: skills.physicalScience.miscMod,
        physicalScienceTotal: physicalScienceRanks + physicalScienceClassBonus + physicalScienceAbilityMod + physicalScienceMiscMod,
        //piloting
        pilotingTrained: skills.piloting.trainedOnly,
        pilotingAcPenaltyApplies: skills.piloting.acPenaltyApplies,
        pilotingRanks: skills.piloting.ranks,
        pilotingClassBonus: skills.piloting.classBonus,
        pilotingAbilityMod: skills.piloting.abilityMod,
        pilotingMiscMod: skills.piloting.miscMod,
        pilotingTotal: pilotingRanks + pilotingClassBonus + pilotingAbilityMod + pilotingMiscMod,
        //profession
        professionTrained: skills.profession.trainedOnly,
        professionAcPenaltyApplies: skills.profession.acPenaltyApplies,
        professionRanks: skills.profession.ranks,
        professionClassBonus: skills.profession.classBonus,
        professionAbilityMod: skills.profession.abilityMod,
        professionMiscMod: skills.profession.miscMod,
        professionTotal: professionRanks + professionClassBonus + professionAbilityMod + professionMiscMod,
        //senseMotive
        senseMotiveTrained: skills.senseMotive.trainedOnly,
        senseMotiveAcPenaltyApplies: skills.senseMotive.acPenaltyApplies,
        senseMotiveRanks: skills.senseMotive.ranks,
        senseMotiveClassBonus: skills.senseMotive.classBonus,
        senseMotiveAbilityMod: skills.senseMotive.abilityMod,
        senseMotiveMiscMod: skills.senseMotive.miscMod,
        senseMotiveTotal: senseMotiveRanks + senseMotiveClassBonus + senseMotiveAbilityMod + senseMotiveMiscMod,
        //sleightOfHand
        sleightOfHandTrained: skills.sleightOfHand.trainedOnly,
        sleightOfHandAcPenaltyApplies: skills.sleightOfHand.acPenaltyApplies,
        sleightOfHandRanks: skills.sleightOfHand.ranks,
        sleightOfHandClassBonus: skills.sleightOfHand.classBonus,
        sleightOfHandAbilityMod: skills.sleightOfHand.abilityMod,
        sleightOfHandMiscMod: skills.sleightOfHand.miscMod,
        sleightOfHandTotal: sleightOfHandRanks + sleightOfHandClassBonus + sleightOfHandAbilityMod + sleightOfHandMiscMod,
        //stealth
        stealthTrained: skills.stealth.trainedOnly,
        stealthAcPenaltyApplies: skills.stealth.acPenaltyApplies,
        stealthRanks: skills.stealth.ranks,
        stealthClassBonus: skills.stealth.classBonus,
        stealthAbilityMod: skills.stealth.abilityMod,
        stealthMiscMod: skills.stealth.miscMod,
        stealthTotal: stealthRanks + stealthClassBonus + stealthAbilityMod + stealthMiscMod,
        //survival
        survivalTrained: skills.survival.trainedOnly,
        survivalAcPenaltyApplies: skills.survival.acPenaltyApplies,
        survivalRanks: skills.survival.ranks,
        survivalClassBonus: skills.survival.classBonus,
        survivalAbilityMod: skills.survival.abilityMod,
        survivalMiscMod: skills.survival.miscMod,
        survivalTotal: survivalRanks + survivalClassBonus + survivalAbilityMod + survivalMiscMod,
        //abilities
        abilities: req.body.abilities,
        featsAndProficiencies: req.body.featsAndProficiencies,
        languagesKnown: req.body.languagesKnown,
        equipment: req.body.equipment.item,
        credits: req.body.equipment.credits,
        totalBulk: req.body.equipment.totalBulk,
        otherWealth: req.body.equipment.otherWealth,
        carryingCapacityUnencumbered: req.body.carryingCapacity.Unencumbered,
        carryingCapacityEncumbered: req.body.carryingCapacity.encumbered,
        carryingCapacityOverburdned: req.body.carryingCapacity.overburdened,
        //spells
        zerothSpellsKnown: spells.zeroth.spellsKnown,
        zerothSpellList: spells.zeroth.spellList,
        //first level spells
        firstSpellsKnown: spells.first.spellsKnown,
        firstSpellsPerDay: spells.first.spellsPerDay,
        firstSpellSlotsUsed: spells.first.spellSlotsUsed,
        firstSpellList: spells.first.spellList,
        //second level spells
        secondSpellsKnown: spells.second.spellsKnown,
        secondSpellsPerDay: spells.second.spellsPerDay,
        secondSpellSlotsUsed: spells.second.spellSlotsUsed,
        secondSpellList: spells.second.spellList,
        //third level spells
        thirdSpellsKnown: spells.third.spellsKnown,
        thirdSpellsPerDay: spells.third.spellsPerDay,
        thirdSpellSlotsUsed: spells.third.spellSlotsUsed,
        thirdSpellList: spells.third.spellList,
        //fourth level spells
        fourthSpellsKnown: spells.fourth.spellsKnown,
        fourthSpellsPerDay: spells.fourth.spellsPerDay,
        fourthSpellSlotsUsed: spells.fourth.spellSlotsUsed,
        fourthSpellList: spells.fourth.spellList,
        //fifth level spells
        fifthSpellsKnown: spells.fifth.spellsKnown,
        fifthSpellsPerDay: spells.fifth.spellsPerDay,
        fifthSpellSlotsUsed: spells.fifth.spellSlotsUsed,
        fifthSpellList: spells.fifth.spellList,
        //sixth level spells
        sixthSpellsKnown: spells.sixth.spellsKnown,
        sixthSpellsPerDay: spells.sixth.spellsPerDay,
        sixthSpellSlotsUsed: spells.sixth.spellSlotsUsed,
        sixthSpellList: spells.sixth.spellList
        
    });
});

//PUT route for updating a character
app.put("api/update/:id", (req, res) => {
    db.update(req.body, 
        {where: {
            _id: req.params.id
        }
    }).then(updatedCharacter => {
        res.json(updatedCharacter);
    })
});

//DELETE route for deleting a character
app.delete("api/delete/:id", (req, res) => {
    db.destroy({
        where: {
            _id: req.params.id
        }
    }).then(deletedCharacter => {
        res.json(deletedCharacter);
    });
});







// //WEAPONS
// const queryUrlWeapons = "http://cors-anywhere.herokuapp.com/https://api.starfinder.dragonlash.com/weapons/";
// $.ajax({
//     url: queryUrlWeapons,
//     method: "GET"
// }).then(res => {

//     let weaponObject = {
//         title: res.results[0].title,
//         damage: res.results[0].damage,
//         range: res.results[0].range,
//         price: res.results[0].price,
//         description: res.results[0].description
//     }
//     console.log(weaponObject);
// });

// //ARMORS
// const queryUrlArmors = "http://cors-anywhere.herokuapp.com/https://api.starfinder.dragonlash.com/armors/";
// $.ajax({
//     url: queryUrlArmors,
//     method: "GET"
// }).then(res => {

//     let armorObject = {
//         title: res.results[0].title,
//         eac_bonus: res.results[0].eac_bonus,
//         kac_bonus: res.results[0].kac_bonus,
//         max_dex_bonus: res.results[0].max_dex_bonus,
//         price: res.results[0].price,
//         description: res.results[0].description
//     }
//     console.log(armorObject);
// });

// //SPELLS
// const queryUrlSpells = "http://cors-anywhere.herokuapp.com/https://api.starfinder.dragonlash.com/spells/";
// $.ajax({
//     url: queryUrlSpells,
//     method: "GET"
// }).then(res => {

//     let spellObject = {
//         title: res.results[0].title,
//         level_requirements: res.results[0].level_requirements,
//         school: res.results[0].school,
//         casting_time: res.results[0].casting_time,
//         range: res.results[0].range,
//         area: res.results[0].area,
//         targets: res.results[0].targets,
//         duration: res.results[0].duration,
//         saving_throw: res.results[0].saving_throw,
//         spell_resistance: res.results[0].spell_resistance,
//         description: res.results[0].description,
//         brief_description: res.results[0].brief_description
//     }
//     console.log(spellObject);
// });
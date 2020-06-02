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
app.post("api/create", (req, res) => {
    console.log(req.body);
    const identityStats = req.body.identityStats;
    const abilityScores = req.body.abilityScores;
    db.create({
        //identityStats
        characterName = identityStats.characterName,
        playerID = identityStats.playerID,
        effectiveCharacterLevel = class1.level + class2.level + class3.level,
        class1 = identityStats.class1,
        class2 = identityStats.class2,
        class3 = identityStats.class3,
        race = identityStats.race,
        size = identityStats.size,
        theme = identityStats.theme,
        speed = identityStats.speed,
        gender = identityStats.gender,
        homeWorld = identityStats.homeWorld,
        alignment = identityStats.alignment,
        deity = identityStats.deity,
        //ability scores
        //STRENGTH
        strength = totalScoreStrength,
        totalScoreStrength = (10 + 
            abilityScores.strength.racial + 
            abilityScores.strength.theme + 
            abilityScores.strength.points + 
            abilityScores.strength.level + 
            abilityScores.strength.augment + 
            abilityScores.strength.misc),
        upgradedScoreStrength = totalScoreStrength + abilityScores.strength.misc,
        totalModifierStrength = Math.floor((totalScoreStrength - 10) / 2),
        upgradedModifierStrength = Math.floor((totalScoreStrength - 10) / 2),
        //DEXTERITY
        dexterity = totalScoreDexterity,
        totalScoreDexterity = (10 + 
            abilityScores.dexterity.racial + 
            abilityScores.dexterity.theme + 
            abilityScores.dexterity.points + 
            abilityScores.dexterity.level + 
            abilityScores.dexterity.augment + 
            abilityScores.dexterity.misc),
        upgradedScoreDexterity = totalScoreDexterity + abilityScores.dexterity.misc,
        totalModifierDexterity = Math.floor((totalScoreDexterity - 10) / 2),
        upgradedModifierDexterity = Math.floor((totalScoreDexterity - 10) / 2),
        //CONSTITUTION
        constitution = totalScoreConstitution,
        totalScoreConstitution = (10 + 
            abilityScores.constitution.racial + 
            abilityScores.constitution.theme + 
            abilityScores.constitution.points + 
            abilityScores.constitution.level + 
            abilityScores.constitution.augment + 
            abilityScores.constitution.misc),
        upgradedScoreConstitution = totalScoreConstitution + abilityScores.constitution.misc,
        totalModifierConstitution = Math.floor((totalScoreConstitution - 10) / 2),
        upgradedModifierConstitution = Math.floor((totalScoreConstitution - 10) / 2),
        //INTELLIGENCE
        intelligence = totalScoreIntelligence,
        totalScoreIntelligence = (10 + 
            abilityScores.intelligence.racial + 
            abilityScores.intelligence.theme + 
            abilityScores.intelligence.points + 
            abilityScores.intelligence.level + 
            abilityScores.intelligence.augment + 
            abilityScores.intelligence.misc),
        upgradedScoreIntelligence = totalScoreIntelligence + abilityScores.intelligence.misc,
        totalModifierIntelligence = Math.floor((totalScoreIntelligence - 10) / 2),
        upgradedModifierIntelligence = Math.floor((totalScoreIntelligence - 10) / 2),
        //WISDOM
        wisdom = totalScoreWisdom,
        totalScoreWisdom = (10 + 
            abilityScores.wisdom.racial + 
            abilityScores.wisdom.theme + 
            abilityScores.wisdom.points + 
            abilityScores.wisdom.level + 
            abilityScores.wisdom.augment + 
            abilityScores.wisdom.misc),
        upgradedScoreWisdom = totalScoreWisdom + abilityScores.wisdom.misc,
        totalModifierWisdom = Math.floor((totalScoreWisdom - 10) / 2),
        upgradedModifierWisdom = Math.floor((totalScoreWisdom - 10) / 2),
        //CHARISMA
        charisma = totalScoreCharisma,
        totalScoreCharisma = (10 + 
            abilityScores.charisma.racial + 
            abilityScores.charisma.theme + 
            abilityScores.charisma.points + 
            abilityScores.charisma.level + 
            abilityScores.charisma.augment + 
            abilityScores.charisma.misc),
        upgradedScoreCharisma = totalScoreCharisma + abilityScores.charisma.misc,
        totalModifierCharisma = Math.floor((totalScoreCharisma - 10) / 2),
        upgradedModifierCharisma = Math.floor((totalScoreCharisma - 10) / 2),        
    })
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
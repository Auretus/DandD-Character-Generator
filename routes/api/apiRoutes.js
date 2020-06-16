//apiRoutes.js is for routes displaying data from db and saving data to db
const express = require("express")
const router = express.Router();
const mongoose = require("mongoose");
var db = require("../../models/Character");
//const app = express();

//GET route for getting all characters
router.get("/", (req, res) => {
    console.log(res);
    db.findAll({})
        .then(allCharacters =>{
            res.json(allCharacters);
        })
});

//GET route for getting a single character by id
router.get("/:id", (req, res) => {
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
router.post("/create", (req, res) => {
    console.log(`this is ${JSON.stringify(req.body)}`);
    
    const identityStats = req.body;
    console.log(JSON.stringify(identityStats));
    db.create({
        identityStats: {
            character_name: identityStats.character_name,
            //playerID: identityStats.playerID, 
            class: identityStats.class, 
            race: identityStats.race,
            theme: identityStats.theme,
            gender: identityStats.gender,
            alignment: identityStats.alignment,
            deity: identityStats.deity,
        }
    }).then(results => res.json(results));
});//END POST

//PUT route for updating a character
router.put("/api/update/:id", (req, res) => {
    db.update(req.body, 
        {where: {
            _id: req.params.id
        }
    }).then(updatedCharacter => {
        res.json(updatedCharacter);
    })
});

//DELETE route for deleting a character
router.delete("/delete/:id", (req, res) => {
    db.destroy({
        where: {
            _id: req.params.id
        }
    }).then(deletedCharacter => {
        res.json(deletedCharacter);
    });
});

module.exports = router;



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
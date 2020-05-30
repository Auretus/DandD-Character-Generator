//apiRoutes.js is for routes displaying data from db and saving data to db
const express = require("express").Router();
const mongoose = require("mongoose");
var db = require("../../models"); //must update: this has to have character.js model when it is available
const app = express();

//GET route for getting all characters
app.get("/api/character", (req, res) => {
    console.log(res);
});

//GET route for getting a single character
app.get("/api/character/:id", (req, res) => {
    console.log(res);
});

//POST route for saving a new character
app.post("api/createCharacter", (req, res) => {
    console.log(req.body);
});

//PUT route for updating a character
app.put("api/updateCharacter", (req, res) => {

});

//DELETE route for deleting a character
app.delete("api/character/:id", (req, res) => {

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
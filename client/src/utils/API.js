import axios from "axios";

export default {
    getWeapons: () => {
        return axios.get("https://cors-anywhere.herokuapp.com/https://api.starfinder.dragonlash.com/weapons/")
    },
    getSpells: () => {
        return axios.get("https://cors-anywhere.herokuapp.com/https://api.starfinder.dragonlash.com/spells/")
    },
    getArmor: () => {
        return axios.get("https://cors-anywhere.herokuapp.com/https://api.starfinder.dragonlash.com/armors/")
    }
}

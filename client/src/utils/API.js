import axios from "axios";

export default {
    getWeapons: () => {
        return axios.get("http://cors-anywhere.herokuapp.com/https://api.starfinder.dragonlash.com/weapons/")
    },
    getSpells: () => {
        return axios.get("http://cors-anywhere.herokuapp.com/https://api.starfinder.dragonlash.com/spells/")
    },
    getArmor: () => {
        return axios.get("http://cors-anywhere.herokuapp.com/https://api.starfinder.dragonlash.com/armors/")
    }
}

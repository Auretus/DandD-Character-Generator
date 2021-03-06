import axios from "axios";

export default {
    //get all characters
    getCharacters: () => {
        return axios.get("/api/character/");
    },
    getCharacterById: function(id){
        return axios.get("/api/character/" + id);
    },
    createCharacter: function(characterData, id){
        return axios.post("/api/character/create", characterData, id);
    },
    updateCharacter: function(characterData, id){
        return axios.put("/api/character/update/" + id, characterData,)
    },
    deleteCharacter: function(id){
        return axios.delete("/api/character/delete/" + id)
    }
}
import axios from "axios";

export default {
    //get all characters
    getCharacters: function(){
        return axios.get("/api/characters")
    },
    getCharacterById: function(id){
        return axios.get("/api/character/" + id);
    },
    createCharacter: function(characterData){
        return axios.post("/api/create", characterData);
    },
    updateCharacter: function(characterData, id){
        return axios.put("/api/update/" + id, characterData,)
    },
    deleteCharacter: function(id){
        return axios.delete("/api/delete/" + id)
    }
}
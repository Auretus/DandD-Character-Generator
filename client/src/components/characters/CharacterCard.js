import React from "react";
// import { Link } from "react-router-dom";

const CharacterCard = (props) => {
    return (
    <div className="card col m4 s12 large N/A transparent" key={props.id}>
        <div className="card-content">
            <span className="card-title activator cyan-text text-lighten-4 header">{props.character_name}
                <i className="material-icons small right cyan-text text-lighten-4">expand_less</i>
            </span>
            {/* <p><Link to="/charactersheet">Click here for Full Character Sheet</Link></p> */}
        </div>
        <div className="card-reveal black cyan-text text-lighten-4 center-align">
            <span className="card-title black-text sub-header">
                <b>{props.character_name}</b>
                <i className="material-icons right small cyan-text text-lighten-4">close</i>
            </span>
            <div className="col s12">
                <p>Race: {props.race} </p>
                <p>Class: {props.class} </p>
                <p>Theme: {props.theme} </p>
            </div>
            <div className="col s12">
                <p>Gender: {props.gender} </p>
                <p>Alignment: {props.alignment} </p>
                <p>Deity: {props.deity} </p>
            </div>
            <div className="col s5">
                <p>Strength: 10 </p>
                <p>Dexterity: 10 </p>
                <p>Constitution: 10 </p>
            </div>
            <div className="col s2"></div>
            <div className="col s5">
                <p>Intelligence: 10 </p>
                <p>Wisdom: 10 </p>
                <p>Charisma: 10 </p>
            </div>
            <br/>
            {/* <p><Link to="/charactersheet">Click here for Full Character Sheet</Link></p>     */}
        </div>
    </div>
    )
}

export default CharacterCard;
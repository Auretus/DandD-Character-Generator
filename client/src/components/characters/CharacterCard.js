import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
    return (
        <div className="container">
            <div className="card col m6 s12 black-text charcard">
                <div className="card-image">
                    <img className="activator responsive-img" src="images/ysoki.jpg" style={{height: "500px"}} alt="temp" />
                </div>
                <div className="card-content center">
                    <span className="card-title activator grey-text text-darken-4">{props.character_name}<i className="material-icons right small">expand_less</i></span>
                    <p><Link to="/charactersheet">Click here for Full Character Sheet</Link></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{props.character_name}<i className="material-icons right">close</i></span>
                    <div className="card-content">
                        <div id="characterDescription">
                            <div className="col s12">
                                <p><b>Race: </b> {props.race} </p>
                                <p><b>Class: </b> {props.class} </p>
                                <p><b>Theme: </b> {props.theme} </p>
                            </div>
                            <div className="col s12">
                                <p><b>Gender: </b> {props.gender} </p>
                                <p><b>Alignment: </b> {props.alignment} </p>
                                <p><b>Deity: </b> {props.deity} </p>
                            </div>
                            <p><Link to="/charactersheet">Click here for Full Character Sheet</Link></p>
                        </div>                            
                    </div>     
                </div>
            </div>
        </div>
    )
}

export default CharacterCard;
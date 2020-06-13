import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = () => {
    return (
        <div className="container">
            <div className="card col m6 s12 black-text charcard">
                <div className="card-image">
                    <img className="activator responsive-img" src="images/ysoki.jpg" style={{height: "500px"}} alt="temp" />
                </div>
                <div className="card-content center">
                    <span className="card-title activator grey-text text-darken-4">Quig<i className="material-icons right small">expand_less</i></span>
                    <p><Link to="/charactersheet">Click here for Full Character Sheet</Link></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Quig<i className="material-icons right">close</i></span>
                    <div className="card-content">
                        <div id="characterDescription">
                            <div className="col s6">
                                <p><b>Strength:</b> 10 </p>
                                <p><b>Dexterity:</b> 16 </p>
                                <p><b>Constitution:</b> 10 </p>
                            </div>
                            <div className="col s6">
                                <p><b>Intelligence:</b> 16 </p>
                                <p><b>Wisdom:</b> 10 </p>
                                <p><b>Charisma:</b> 10 </p>
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
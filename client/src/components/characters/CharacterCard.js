import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = () => {
    return (
        <div className="container">
            <div class="card col m6 s12 black-text charcard">
                <div class="card-image">
                    <img class="activator responsive-img" src="images/ysoki.jpg" style={{height: "500px"}} alt="temp" />
                </div>
                <div class="card-content center">
                    <span class="card-title activator grey-text text-darken-4">Quig<i class="material-icons right small">chevron_right</i></span>
                    <p><Link to="/charactersheet">Click here for Full Character Sheet</Link></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Quig<i class="material-icons right">close</i></span>
                    <div class="card-content left-align">
                        <div className="col s6">
                            <p><b>Class/Level:</b> Mechanic Lvl 1</p>
                            <p><b>Race:</b> Ysoki</p>
                            <p><b>Theme:</b> Bounty Hunter</p>
                            <p><b>Size:</b> Average</p>
                            <p><b>Speed:</b> </p>
                        </div>
                        <div className="col s6">
                            <p><b>Gender:</b> Male</p>
                            <p><b>Home World:</b> Akiton</p>
                            <p><b>Alignment:</b> Neutral Good</p>
                            <p><b>Deity:</b> Lao Shu Po</p>
                            <p><b>Player:</b> </p>
                        </div>
                    </div>
                    <div class="card-tabs">
                        <ul class="tabs tabs-fixed-width">
                            <li class="tab">Ability Scores</li>
                        </ul>
                    </div>
                    <div class="card-content">
                        <div id="test4">
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
                        </div>                            
                    </div>     
                </div>
            </div>
            {/* <div className="col m1">

            </div> */}
        </div>
    )
}

export default CharacterCard;
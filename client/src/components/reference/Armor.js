import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import armor from './armors.json'

class Armor extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="row">
                        <h2 className="white-text center-align">Armor</h2>
                        <h5 className="white-text center-align">
                            Armor is usually the easiest and most cost-effective way
                            for creatures to protect themselves. Whether you are
                            skimming through space aboard a mercenary vessel, attending
                            a diplomatic meeting on a space station, or descending to a
                            planet’s surface to explore, armor provides you with protection
                            against attacks and hostile environments.
                            Modern armor is made of many different substances, including
                            carbon fiber, ceramic, fabric, metal, and polymers. Most are
                            constructed from a combination of materials, and some even use
                            archaic materials such as animal hide. Creatures wear armor to
                            protect themselves, but also to express their personal style.
                        </h5>
                        <br/>
                    </div>
                    <div className="row">
                       {armor.results.map(armor => {
                           return (
                            <div className="col s12 m4">
                                <div className="card small N/A transparent">
                                    <div className="card-content">
                                        <span className="card-title activator white-text text-darken-4">
                                            {armor.title} | Lvl {armor.item_level}
                                            <i className="material-icons right white-text">expand_more</i>
                                        </span>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title black-text">
                                            {armor.title}
                                            <i className="material-icons right black-text">close</i>
                                        </span>
                                        <p>
                                            Level: {armor.item_level}
                                        </p>
                                        <p>
                                            Cost: {armor.price}
                                        </p>
                                        <p>
                                            EAC Bonus: {armor.eac_bonus}
                                        </p>
                                        <p>
                                            KAC Bonus: {armor.kac_bonus}
                                        </p>
                                        <p>
                                            Dexterity Bonus: {armor.max_dex_bonus}
                                        </p>
                                        <p>
                                            {armor.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                           )
                       })} 
                    </div>
                    <div className="buttonDiv center">
                        <button className="btn btn-large waves-effect waves-light hoverable blue white-text" style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }} onClick={this.onLogoutClick}>
                            Logout
                        </button>
                    </div>
                    <br /> 
                </div>
            </div>   
            
                
        )
    }
}

Armor.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Armor);
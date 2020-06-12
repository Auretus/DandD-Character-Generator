import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import weapons from './weapons.json'

class Weapons extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="row">
                        <h2 className="white-text center-align">Weapons</h2>
                        <h5 className="white-text center-align">
                            An adventurer’s weapon can be all that stands between
                            them and death. Weapons primarily deal damage, and
                            some have additional special properties. Some weapons also
                            cause specific critical hit effects.
                        </h5>
                        <br/>
                    </div>
                    <div className="row">
                       {weapons.results.map(weapon => {
                           return (
                            <div className="col s12 m4">
                                <div className="card small N/A transparent">
                                    <div className="card-content">
                                        <span className="card-title activator white-text text-darken-4">
                                            {weapon.title} | Lvl {weapon.item_level}
                                            <i className="material-icons right white-text">expand_more</i>
                                        </span>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title black-text">
                                            {weapon.title}
                                            <i className="material-icons right black-text">close</i>
                                        </span>
                                        <p>
                                            Level: {weapon.item_level}
                                        </p>
                                        <p>
                                            Cost: {weapon.price}
                                        </p>
                                        <p>
                                            Damage: {weapon.damage}
                                        </p>
                                        <p>
                                            {weapon.description}
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

Weapons.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Weapons);
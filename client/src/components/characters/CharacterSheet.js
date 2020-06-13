import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class CharacterSheet extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {

        // const { user } = this.props.auth;

        return (
            <div className="container">
                <div className="row cyan-text text-lighten-4">
                    <div className="row">
                        <h2 className="white-text N/A transparent brown-text text-lighten-5 center-align">Character Name</h2>
                        <p className="white-text center">Health Points: 16</p>
                        <p className="white-text center">Character Description</p>
                    </div>
                    <div className="row">
                        <h4 className="deep-orange darken-2 center-align">Ability Scores</h4>
                        <div className="col s6">
                            <p className="center-align"><b>Strength:</b> 10</p>
                            <br/>
                            <p className="center-align"><b>Dexterity:</b> 10</p>
                            <br/>
                            <p className="center-align"><b>Consitution:</b> 10</p>
                            <br/>
                        </div>
                        <div className="col s6">
                            <p className="center-align"><b>Intelligence:</b> 10</p>
                            <br/>
                            <p className="center-align"><b>Wisdom:</b> 10</p>
                            <br/>
                            <p className="center-align"><b>Charisma:</b> 10</p>
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        <h4 className="deep-orange darken-2 center-align">Basic Info</h4>
                        <div className="col s6">
                            <p className="center-align"><b>Class:</b> Envoy</p>
                            <br/>
                            <p className="center-align"><b>Race:</b> Human</p>
                            <br/>
                            <p className="center-align"><b>Theme:</b> Ace Pilot</p>
                            <br/>
                            <p className="center-align"><b>Homeworld:</b> </p>
                            <br/>
                        </div>
                        <div className="col s6">
                            <p className="center-align"><b>Gender:</b> Other</p>
                            <br/>
                            <p className="center-align"><b>Alignment:</b> Lawfully Good</p>
                            <br/>
                            <p className="center-align"><b>Deity:</b> N/A</p>
                            <br/>
                            <p className="center-align"><b>Speed:</b> </p>
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        <h4 className="deep-orange darken-2 center-align">Skills</h4>
                        <div className="col s12">
                            <p className="center-align"><b>Acrobatics:</b> </p>
                        </div>
                    </div>
                    <div className="row">
                        <h4 className="deep-orange darken-2 center-align">Character Management</h4>
                        <div className="col s12">
                            <button className="btn btn-large waves-effect waves-light indigo darken-4 white-text col s4">Update Info</button>
                            <div className="col s4"></div>
                            <button className="btn btn-large waves-effect waves-light indigo darken-4 white-text col s4">Delete Character</button>
                        </div>
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

CharacterSheet.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(CharacterSheet);
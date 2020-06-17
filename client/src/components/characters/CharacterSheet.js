import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
//import { update } from '../../../../models/User';
//import M from "materialize-css";
//import apiHelper from "../../utils/apiHelper"

class CharacterSheet extends Component {
    state = {
        characterResults: []
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const updateCharacter = {
            //going to add more to this later
            character_name: this.state.character_name,
            race: this.state.race,
            class: this.state.class,
            theme: this.state.theme,
            gender: this.state.gender,
            alignment: this.state.alignment,
            deity: this.state.deity,
            playerID: this.props.auth.user.id
        };
        console.log(updateCharacter);
    }


    // componentDidMount() {
    //     let db = function () {
    //         apiHelper.postCharacters(updateCharacter, this.props.auth.user.id)
    //             .then(req => console.log(req));
    //         console.log(characterArray);

    //         this.setState({
    //             characterResults: characterArray
    //         })
    //     }
    // }


    render() {
        return (
            <div className="container">
                <div className="row cyan-text text-lighten-4">
                    <div>
                        <select onChange={this.onChange} value={this.state.character_name}>
                            <option value="" disabled>Choose your Character</option>
                            {this.state.characterResults.map(option => {
                                return (
                                    <option value={option.character_name}>{option.character_name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="row">
                        <h2 className="white-text N/A transparent brown-text text-lighten-5 center-align">Character Name</h2>
                        <p className="white-text center">Health Points: 16</p>
                        <p className="white-text center">Character Description</p>
                    </div>
                    <div className="row">
                        <h4 className="deep-orange darken-2 center-align">Ability Scores</h4>
                        <div className="col s6">
                            <p className="center-align"><b>Strength:</b> 10</p>
                            <br />
                            <p className="center-align"><b>Dexterity:</b> 10</p>
                            <br />
                            <p className="center-align"><b>Consitution:</b> 10</p>
                            <br />
                        </div>
                        <div className="col s6">
                            <p className="center-align"><b>Intelligence:</b> 10</p>
                            <br />
                            <p className="center-align"><b>Wisdom:</b> 10</p>
                            <br />
                            <p className="center-align"><b>Charisma:</b> 10</p>
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <h4 className="deep-orange darken-2 center-align">Basic Info</h4>
                        <div className="col s6">
                            <p className="center-align"><b>Class:</b> Envoy</p>
                            <br />
                            <p className="center-align"><b>Race:</b> Human</p>
                            <br />
                            <p className="center-align"><b>Theme:</b> Ace Pilot</p>
                            <br />
                            <p className="center-align"><b>Homeworld:</b> </p>
                            <br />
                        </div>
                        <div className="col s6">
                            <p className="center-align"><b>Gender:</b> Other</p>
                            <br />
                            <p className="center-align"><b>Alignment:</b> Lawfully Good</p>
                            <br />
                            <p className="center-align"><b>Deity:</b> N/A</p>
                            <br />
                            <p className="center-align"><b>Speed:</b> </p>
                            <br />
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
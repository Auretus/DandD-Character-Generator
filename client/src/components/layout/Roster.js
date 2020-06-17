import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import CharacterCard from "../characters/CharacterCard";
import apiHelper from "../../utils/apiHelper";

class Roster extends Component {
    state = {
        charArray: []
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    componentDidMount() {
        apiHelper.getCharacters()
            .then(data => {
                
                //console.log(data.data);
                let characters = data.data;
                this.setState({
                    charArray: characters
                })
                console.log(characters);
            })
            
    }
    
    render() {
        const { user } = this.props.auth;
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 center white-text">
                        <h4>
                            <b>Hey there,</b> {user.name.split(" ")[0]}
                        </h4>
                        <h4>
                            Here's your Crew!
                        </h4>
                        <br />
                        {this.state.charArray.map(character => {
                            if (character.identityStats.playerID === this.props.auth.user.id) {
                                return (
                                    <CharacterCard
                                        character_name={character.identityStats.character_name}
                                        race={character.identityStats.race}
                                        class={character.identityStats.class}
                                        theme={character.identityStats.theme}
                                        gender={character.identityStats.gender}
                                        alignment={character.identityStats.alignment}
                                        deity={character.identityStats.deity}
                                    />
                                )
                            } else return;
                        })
                        }


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
        )
    }
}

Roster.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Roster);
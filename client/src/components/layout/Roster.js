import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import CharacterCard from "../characters/CharacterCard";

class Roster extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
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
                        <CharacterCard />
                        <CharacterCard />
                        <CharacterCard />
                        <CharacterCard />
                        <CharacterCard />
                        <CharacterCard />
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
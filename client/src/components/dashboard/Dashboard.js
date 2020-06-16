import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
// import CharDiv from "../layout/Roster";

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { user } = this.props.auth;

        return (
            <div className="container" style={{ height: "40vh" }}>
                <div className="row">
                    <div className="col s12 center-align  cyan-text text-lighten-4">
                        <h4 className="header">
                            <b>Welcome Starfinder {user.name.split(" ")[0]}!</b>
                        </h4>
                        <h5>
                            Delving into alien ruins in search of lost magic. Matching wits
                            with corporate technomancers and their robot army in the
                            gritty streets of a space station. Strafing a dragon-crewed
                            attack cruiser with your starship, defending a new colony
                            from deadly alien predators, or making first contact with a
                            previously unknown alien empire.
                            Whether your tools are laser rifles, powered armor, esoteric
                            magic, or simply your powers of persuasion, the Starfinder
                            Roleplaying Game is a game of heroes who change the face
                            of the galaxy, one adventure at a time.
                        </h5>
                        <br/>
                        <div className="buttonDiv center">
                            <button className="btn btn-large waves-effect waves-light hoverable blue white-text" style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                            }} onClick={this.onLogoutClick}>
                                Logout
                            </button>
                        </div>
                        <br />
                    </div>
                </div>
            </div>

        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Dashboard);
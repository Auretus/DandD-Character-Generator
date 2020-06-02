import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Create extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }
    render() {
       const { user } = this.props.auth;

        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 center-align white-text">
                        <h4>
                            <b>Hey there,</b> {user.name.split(" ")[0]}
                        </h4>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s4">
                                    <input  id="first_name" type="text" className="validate white-text" />
                                    <label for="first_name">Character Name</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="last_name" type="text" className="validate white-text" />
                                    <label for="last_name">Race</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="password" type="text" className="validate white-text" />
                                    <label for="password">Gender</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <input  id="first_name" type="text" className="validate white-text" />
                                    <label for="first_name">Character Name</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="last_name" type="text" className="validate white-text" />
                                    <label for="last_name">Race</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="password" type="text" className="validate white-text" />
                                    <label for="password">Gender</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <input  id="first_name" type="text" className="validate white-text" />
                                    <label for="first_name">Character Name</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="last_name" type="text" className="validate white-text" />
                                    <label for="last_name">Race</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="password" type="text" className="validate white-text" />
                                    <label for="password">Gender</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <input  id="first_name" type="text" className="validate white-text" />
                                    <label for="first_name">Character Name</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="last_name" type="text" className="validate white-text" />
                                    <label for="last_name">Race</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="password" type="text" className="validate white-text" />
                                    <label for="password">Gender</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <input  id="first_name" type="text" className="validate white-text" />
                                    <label for="first_name">Character Name</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="last_name" type="text" className="validate white-text" />
                                    <label for="last_name">Race</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="password" type="text" className="validate white-text" />
                                    <label for="password">Gender</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <input  id="first_name" type="text" className="validate white-text" />
                                    <label for="first_name">Character Name</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="last_name" type="text" className="validate white-text" />
                                    <label for="last_name">Race</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="password" type="text" className="validate white-text" />
                                    <label for="password">Gender</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <input  id="first_name" type="text" className="validate white-text" />
                                    <label for="first_name">Character Name</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="last_name" type="text" className="validate white-text" />
                                    <label for="last_name">Race</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="password" type="text" className="validate white-text" />
                                    <label for="password">Gender</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <input  id="first_name" type="text" className="validate white-text" />
                                    <label for="first_name">Character Name</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="last_name" type="text" className="validate white-text" />
                                    <label for="last_name">Race</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="password" type="text" className="validate white-text" />
                                    <label for="password">Gender</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <input  id="first_name" type="text" className="validate white-text" />
                                    <label for="first_name">Character Name</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="last_name" type="text" className="validate white-text" />
                                    <label for="last_name">Race</label>
                                </div>
                                <div className="input-field col s4">
                                    <input id="password" type="text" className="validate white-text" />
                                    <label for="password">Gender</label>
                                </div>
                            </div>
                            <div className="button">
                                <button className="btn btn-large waves-effect waves-light hoverable white black-text right" type="submit">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <br />
                <div className="buttonDiv center col s12">
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

Create.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Create);
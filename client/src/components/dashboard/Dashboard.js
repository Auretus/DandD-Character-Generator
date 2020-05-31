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
                    <div className="col s12 center-align white-text">
                        <h4>
                            <b>Hey there,</b> {user.name.split(" ")[0]}
                        </h4>
                        {/* <h6>Your Characters: </h6>
                        <CharDiv /> */}
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
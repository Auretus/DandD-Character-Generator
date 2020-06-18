import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="container valign-wrapper" style={{ height: "50vh" }}>
                <div className="row">
                    <div className="col s12 center-align white-text flow-text">
                        <h2>
                            <b>Starfinder Starter</b>
                        </h2>
                        <h4>
                            Are you ready to join the <b>Campaign</b>?
                        </h4>
                        <p className="flow-text white-text">
                            Login or Enlist to create your character and shoot for the stars!
                        </p>
                        <p className="flow-text white-text">
                            Or follow our Reference Guide at the Top Left of the screen!
                        </p>
                        <br />
                        <div className="col s6">
                            <Link to="/register" className="btn btn-large waves-effect waves-light hoverable blue darken-4" style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}>
                                Enlist
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link to="/login" className="btn btn-large btn-flat waves-effect black white-text" style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}>
                                Login
                            </Link>
                        </div>
                        <br/>
                        
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default Landing;
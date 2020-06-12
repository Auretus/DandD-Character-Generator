/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div className="row">
                <nav>
                    <div className="nav-wrapper black white-text col s12">
                        <Link to="/dashboard" className="brand-logo center">StarfinderStarter</Link>
                        <Link to="#" data-target="sidenav" className="sidenav-trigger left"><i className="material-icons large">menu</i></Link>
                        <ul className="hide-on-med-and-down left">
                            <li><Link to="/howtoplay">How To Play</Link></li>
                            <li><Link to="/races">Races</Link></li>
                            <li><Link to="/themes">Themes</Link></li>
                            <li><Link to="/classes">Classes</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/armor">Armor</Link></li>
                            <li><Link to="/weapons">Weapons</Link></li>
                            <li><Link to="/spells">Spells</Link></li>
                        </ul>
                        
                        
                        <ul className="hide-on-med-and-down right">
                            <li><Link to="/create">Create a Character</Link></li>
                            <li><Link to="/roster">Your Roster</Link></li>
                        </ul>
                        
                    </div>
                </nav>
                <ul className="sidenav black collapsible" id="sidenav">
                    <li>
                        <Link to="/dashboard" className="white black-text menu-header">Starfinder Starter</Link>
                    </li>
                    <li>
                        <Link to="#" className="collapsible-header white-text">
                            &nbsp;&nbsp;&nbsp;&nbsp;Reference Guide<i className="material-icons white-text right">expand_more</i>
                        </Link>
                        <div className="collapsible-body black">
                            <ul>
                                <li className="divider" tabIndex="-1"></li>
                                <li>
                                    <Link to="/races" className="white-text">Races</Link>
                                </li>
                                <li className="divider" tabIndex="-1"></li>
                                <li>
                                    <Link to="/classes" className="white-text">Classes</Link>
                                </li>
                                <li className="divider" tabIndex="-1"></li>
                                <li>
                                    <Link to="/skills" className="white-text">Skills</Link>
                                </li>
                                <li className="divider" tabIndex="-1"></li>
                                <li>
                                    <Link to="/armor" className="white-text">Armor</Link>
                                </li>
                                <li className="divider" tabIndex="-1"></li>
                                <li>
                                    <Link to="/weapons" className="white-text">Weapons</Link>
                                </li>
                                <li className="divider" tabIndex="-1"></li>
                                <li>
                                    <Link to="/spells" className="white-text">Spells</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="divider" tabIndex="-1"></li>
                    <li>
                        <Link to="/howto" className="white-text">How To Play</Link>
                    </li>
                    <li className="divider" tabIndex="-1"></li>
                    <li>
                        <Link to="/create" className="white-text">Create a Character</Link>
                    </li>
                    <li className="divider" tabIndex="-1"></li>
                    <li>
                        <Link to="/roster" className="white-text">Your Roster</Link>
                    </li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><button className="sidenav-close black white-text right">Close Menu</button></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
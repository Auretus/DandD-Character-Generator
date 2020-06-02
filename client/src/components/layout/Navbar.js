import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="row">
                <nav>
                    <div className="nav-wrapper black white-text">
                        <Link to="/dashboard" className="brand-logo center">Starfinder Starter</Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons large">menu</i></a>
                        
                        <ul className="hide-on-med-and-down right">
                            <li><Link to="/create">Create a Character</Link></li>
                            <li><Link to="/roster">Your Roster</Link></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="sidenav">
                    <li><Link to="/create">Create a Character</Link></li>
                    <li><Link to="/roster">Your Roster</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="row">
                <nav>
                    <div class="nav-wrapper black white-text">
                        <Link to="/dashboard" class="brand-logo center">Starfinder Starter</Link>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons large">menu</i></a>
                        
                        <ul class="hide-on-med-and-down right">
                            <li><Link to="/create">Create a Character</Link></li>
                            <li><Link to="/roster">Your Roster</Link></li>
                        </ul>
                    </div>
                </nav>
                <ul class="sidenav" id="sidenav">
                    <li><Link to="/create">Create a Character</Link></li>
                    <li><Link to="/roster">Your Roster</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
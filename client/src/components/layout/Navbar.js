import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed ">
                {/* <nav className="z-depth-0"> */}
                    <div className="nav-wrapper N/A transparent center">
                        <Link to="/" className="col s5 brand-logo center white-text">
                            <img src="/images/star-logo1.PNG" className="responsive-img" alt="star-logo" />
                        </Link>
                        <p>©2002-2020 Paizo Inc.® All Rights Reserved.</p>
                    </div>
                {/* </nav> */}
            </div>
        );
    }
}

export default Navbar;
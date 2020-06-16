import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import API from "../../utils/API";

class Weapons extends Component {
    state = {
        weaponResults: []
    };

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    componentDidMount(){
        API.getWeapons().then(data => {
            let weapons = data.data.results;
            console.log(weapons);
            this.setState({
                weaponResults: weapons
            })
        })
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="row cyan-text text-lighten-4">
                        <h2 className="center-align">Weapons</h2>
                        <h5 className="center-align">
                            An adventurer’s weapon can be all that stands between
                            them and death. Weapons primarily deal damage, and
                            some have additional special properties. Some weapons also
                            cause specific critical hit effects.
                        </h5>
                        <br/>
                    </div>
                    <div className="row">
                       {this.state.weaponResults.map(weapon => {
                           return (
                            <div className="col s12 m6"  key={weapon.title}>
                                <div className="card small N/A transparent">
                                    <div className="card-content">
                                        <span className="card-title activator cyan-text text-lighten-4 header">
                                            {weapon.title} | Lvl {weapon.item_level}
                                            <i className="material-icons small right cyan-text text-lighten-4">expand_more</i>
                                        </span>
                                    </div>
                                    <div className="card-reveal black cyan-text text-lighten-4 center-align">
                                        <span className="card-title black-text sub-header">
                                            <b>{weapon.title}</b>
                                            <i className="material-icons right small cyan-text text-lighten-4">close</i>
                                        </span>
                                        <p>
                                            Level: {weapon.item_level}
                                        </p>
                                        <p>
                                            Cost: {weapon.price}
                                        </p>
                                        <p>
                                            Damage: {weapon.damage}
                                        </p>
                                        <p>
                                            {weapon.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                           )
                       })} 
                    </div>
                    {/* <div className="buttonDiv center">
                        <button className="btn btn-large waves-effect waves-light hoverable blue white-text" style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }} onClick={this.onLogoutClick}>
                            Logout
                        </button>
                    </div> */}
                    <br /> 
                </div>
            </div>   
            
                
        )
    }
}

Weapons.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Weapons);
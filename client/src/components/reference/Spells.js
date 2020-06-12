import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import spells from './spells.json'

class Spells extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="row">
                        <h2 className="white-text center-align">Spells</h2>
                        <h5 className="white-text center-align">
                            When your Starfinder character casts a spell, she is harnessing
                            the latent magical energy that permeates the universe to
                            achieve specific, measured effects. Whether you’re playing
                            a mystic or a technomancer, or a character who has gained
                            the ability to manipulate magical energies through some other
                            more unusual means, casting a spell in Starfinder follows one
                            basic process, as described below. A cast spell always has
                            obvious effects that are noticeable by nearby creatures; it
                            is not possible to clandestinely cast a spell.
                        </h5>
                        <br/>
                    </div>
                    <div className="row">
                       {spells.results.map(spell => {
                           return (
                            <div className="col s12 m4">
                                <div className="card small N/A transparent">
                                    <div className="card-content">
                                        <span className="card-title activator white-text text-darken-4">
                                            {spell.title}
                                            <i className="material-icons right white-text">expand_more</i>
                                        </span>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title black-text">
                                            {spell.title}
                                            <i className="material-icons right black-text">close</i>
                                        </span>
                                        <p>
                                            Level Requirements: {spell.level_requirements.map(level => {
                                                return (
                                                    <span>{level}&nbsp;</span>
                                                )
                                            })}
                                        </p>
                                        <p>
                                            School: {spell.school}
                                        </p>
                                        <p>
                                            Casting Time: {spell.casting_time}
                                        </p>
                                        <p>
                                            Range: {spell.range}
                                        </p>
                                        <p>
                                            Duration: {spell.duration}
                                        </p>
                                        <p>
                                            {spell.brief_description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                           )
                       })} 
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
            </div>   
            
                
        )
    }
}

Spells.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Spells);
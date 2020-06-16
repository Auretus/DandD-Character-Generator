import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import API from "../../utils/API";

class Spells extends Component {
    state = {
        spellResults: []
    };

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    componentDidMount(){
        API.getSpells().then(data => {
            let spells = data.data.results;
            console.log(spells);
            this.setState({
                spellResults: spells
            })
        })
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="row cyan-text text-lighten-4">
                        <h2 className="center-align">Spells</h2>
                        <h5 className="center-align">
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
                       {this.state.spellResults.map(spell => {
                           return (
                            <div className="col s12 m6" key={spell.title}>
                                <div className="card small N/A transparent">
                                    <div className="card-content">
                                        <span className="card-title activator cyan-text text-lighten-4 header">
                                            {spell.title}
                                            <i className="material-icons medium right cyan-text text-lighten-4">expand_more</i>
                                        </span>
                                    </div>
                                    <div className="card-reveal black cyan-text text-lighten-4 center-align">
                                        <span className="card-title black-text sub-header">
                                            <b>{spell.title}</b>
                                            <i className="material-icons right small cyan-text text-lighten-4">close</i>
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

Spells.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Spells);
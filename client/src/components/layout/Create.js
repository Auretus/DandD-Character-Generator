import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import M from "materialize-css";
//import User from "../../../../models/";

class Create extends Component {
    constructor() {
        super();
        this.state = {
            character_name: "",
            race: "",
            class: "",
            theme: "",
            gender: "",
            alignment: "",
            deity: "",
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newCharacter = {
            character_name: this.state.character_name,
            race: this.state.race,
            class: this.state.class,
            theme: this.state.theme,
            gender: this.state.gender,
            alignment: this.state.alignment,
            deity: this.state.deity,
            //description: this.state.description
        };

        // console.log(newUser);
        //this.props.createCharacter(newCharacter, User.props._id);
        
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    componentDidMount(){
        let select = document.querySelectorAll("select");
        M.FormSelect.init(select, {});
    }
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 center-align white-text">
                        <h4>Create a Character</h4>
                        <h5>
                            As a player of the Starfinder Roleplaying Game, the first thing
                            you need to do is create a character. This is the in-world
                            individual you’ll be playing during the game, and it’s up to you to
                            create her background and personality. You’ll also want to build
                            the character using the game’s mechanics to determine her
                            starting capabilities at various tasks and the special abilities
                            she can use during her adventures.
                        </h5>
                        <br/>
                        <form className="col s12" onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input /*onChange={this.onChange}*/ value={this.state.character_name} id="character_name" type="text" className=" white-text" />
                                    <label for="character_name" className="white-text">Character Name</label>
                                </div>
                                <div className="input-field col m6 s12">
                                    <select onChange={this.onChange} value={this.state.race} className="validate white-text N/A transparent" id="race">
                                        <option value="" disabled selected>Choose your Race</option>
                                        <option value="android">Android</option>
                                        <option value="human">Human</option>
                                        <option value="kasatha">Kasatha</option>
                                        <option value="lashunta">Lashunta</option>
                                        <option value="shirren">Shirren</option>
                                        <option value="vesk">Vesk</option>
                                        <option value="ysoki">Ysoki</option>
                                    </select>
                                    <label for="race">Race</label>
                                </div>
                                <div className="input-field col m6 s12">
                                    <select onChange={this.onChange} value={this.state.class} className="validate white-text N/A transparent" id="class">
                                        <option value="" disabled selected>Choose your Class</option>
                                        <option value="envoy">Envoy</option>
                                        <option value="mechanic">Mechanic</option>
                                        <option value="mystic">Mystic</option>
                                        <option value="operative">Operative</option>
                                        <option value="solarian">Solarian</option>
                                        <option value="soldier">Soldier</option>
                                        <option value="technomancer">Technomancer</option>
                                    </select>
                                    <label for="Class">Class</label>
                                </div>
                                <div className="input-field col m6 s12">
                                    <select onChange={this.onChange} value={this.state.theme} className="validate white-text" id="theme">
                                        <option value="" disabled selected>Choose your Theme</option>
                                        <option value="ace_pilot">Ace Pilot</option>
                                        <option value="bounty_hunter">Bounty Hunter</option>
                                        <option value="icon">Icon</option>
                                        <option value="mercenary">Mercenary</option>
                                        <option value="outlaw">Outlaw</option>
                                        <option value="priest">Priest</option>
                                        <option value="scholar">Scholar</option>
                                        <option value="spacefarer">Spacefarer</option>
                                        <option value="xenoseeker">Xenoseeker</option>
                                        <option value="themeless">Themeless</option>
                                    </select>
                                    <label for="theme">Theme</label>
                                </div>
                                <div className="input-field col m6 s12">
                                    <select onChange={this.onChange} value={this.state.gender} className="validate white-text" id="gender">
                                        <option value="" disabled selected>Choose your Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <label for="gender">Gender</label>
                                </div>
                                <div className="input-field col m6 s12 ">
                                    <select onChange={this.onChange} value={this.state.alignment} className="validate white-text" id="alignment">
                                        <option value="" disabled selected>Choose your Alignment</option>
                                        <optgroup label="Good">
                                            <option value="lawfulGood">Lawful Good</option>
                                            <option value="neutralGood">Neutral Good</option>
                                            <option value="chaoticGood">Chaotic Good</option>
                                        </optgroup>
                                        <optgroup label="Neutral">
                                                <option value="lawfulNeutral">Lawful Neutral</option>
                                                <option value="neutral">Neutral</option>
                                                <option value="chaoticNeutral">Chaotic Neutral</option>
                                        </optgroup>
                                        <optgroup label="Evil">
                                            <option value="lawfulEvil">Lawful Evil</option>
                                            <option value="neutralEvil">Neutral Evil</option>
                                            <option value="chaoticEvil">Chaotic Evil</option>
                                        </optgroup>
                                    </select>
                                    <label for="alignment">Alignment</label>
                                </div>
                                <div className="input-field col m6 s12">
                                    <select onChange={this.onChange} value={this.state.deity} className="validate white-text" id="deity">
                                        <option value="" disabled selected>Choose your Deity</option>
                                        <option value="N/A">N/A</option>
                                        <optgroup label="Core Deities">
                                            <option value="abadar">Abadar</option>
                                            <option value="besmara">Besmara</option>
                                            <option value="damoritosh">Damoritosh</option>
                                            <option value="desna">Desna</option>
                                            <option value="theDevourer">The Devourer</option>
                                            <option value="eloritu">Eloritu</option>
                                            <option value="hylax">Hylax</option>
                                            <option value="ibra">Ibra</option>
                                            <option value="iomedae">Iomedae</option>
                                            <option value="laoShuPo">Lao Shu Po</option>
                                            <option value="nyarlathotep">Nyarlathotep</option>
                                            <option value="oras">Oras</option>
                                            <option value="pharasma">Pharasma</option>
                                            <option value="sarenrae">Sarenrae</option>
                                            <option value="talavet">Talavet</option>
                                            <option value="triune">Triune</option>
                                            <option value="urgathoa">Urgathoa</option>
                                            <option value="weydan">Weydan</option>
                                            <option value="yaraesa">Yaraesa</option>
                                            <option value="zon-kuthon">Zon-Kuthon</option>
                                        </optgroup>
                                        <optgroup label="Other Deities">
                                            <option value="angradd">Angradd</option>
                                            <option value="arshea">Arshea</option>
                                            <option value="asmodeus">Asmodeus</option>
                                            <option value="blackButterfly">Black Butterfly</option>
                                            <option value="calistria">Calistria</option>
                                            <option value="theEldest">The Eldest</option>
                                            <option value="groetus">Groetus</option>
                                            <option value="kadrical">Kadrical</option>
                                            <option value="lamashtu">Lamashtu</option>
                                            <option value="lissala">Lissala</option>
                                            <option value="nylessa">Nylessa</option>
                                            <option value="shelyn">Shelyn</option>
                                        </optgroup>
                                        <optgroup label="Outer Gods">
                                            <option value="azahoth">Azahoth</option>
                                            <option value="nhimbaloth">Nhimbaloth</option>
                                            <option value="shub-niggurath">Shub-Niggurath</option>
                                            <option value="yog-sothoth">Yog-Sothoth</option>
                                        </optgroup>
                                        <optgroup label="Minor Powers & Demigods">
                                            <option value="anyalaritus">Anyalaritus</option>
                                            <option value="apholine">Apholine</option>
                                            <option value="aroggus">Aroggus</option>
                                            <option value="duellona">Duellona</option>
                                            <option value="feronia">Feronia</option>
                                            <option value="ghatanothoa">Ghatanothoa</option>
                                            <option value="inkariax">Inkariax</option>
                                            <option value="kaikyton">Kaikyton</option>
                                            <option value="malikah">Malikah</option>
                                            <option value="morrobahn">Morrobahn</option>
                                            <option value="occhiorasoi">Occhiorasoi</option>
                                            <option value="ragadahn">Ragadahn</option>
                                            <option value="ragathiel">Ragathiel</option>
                                            <option value="vevelor">Vevelor</option>
                                        </optgroup>
                                        <optgroup label="Lost Gods">
                                            <option value="aroden">Aroden</option>
                                            <option value="rovagug">Rovagug</option>
                                            <option value="torag">Torag</option>
                                        </optgroup>
                                    </select>
                                    <label for="deity">Deity</label>
                                </div>
                            </div>
                            <div className="button">
                                <button className="btn btn-large waves-effect waves-light hoverable indigo darken-4 white-text right" type="submit">
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
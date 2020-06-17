import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import M from "materialize-css";
import apiHelper from "../../utils/apiHelper"

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
            playerID: this.props.auth.user.id
        };

        console.log(this.props.auth.user.id);

        apiHelper.createCharacter(newCharacter, this.props.auth.user.id)
            .then(req => console.log(req));
        
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
                                    <input onChange={this.onChange} value={this.state.character_name} name="character_name" id="character_name" type="text" className=" white-text" />
                                    <label htmlFor="character_name" className="white-text">Character Name</label>
                                </div>
                                <div className="input-field col m6 s12">
                                    <select onChange={this.onChange} value={this.state.race} className="validate white-text N/A transparent" name="race" id="race">
                                        <option value="" disabled>Choose your Race</option>
                                        <option value="Android">Android</option>
                                        <option value="Human">Human</option>
                                        <option value="Kasatha">Kasatha</option>
                                        <option value="Lashunta">Lashunta</option>
                                        <option value="Shirren">Shirren</option>
                                        <option value="Vesk">Vesk</option>
                                        <option value="Ysoki">Ysoki</option>
                                    </select>
                                    <label htmlFor="race">Race</label>
                                </div>
                                <div className="input-field col m6 s12">
                                    <select onChange={this.onChange} value={this.state.class} className="validate white-text N/A transparent" name="class" id="class">
                                        <option value="" disabled>Choose your Class</option>
                                        <option value="Envoy">Envoy</option>
                                        <option value="Mechanic">Mechanic</option>
                                        <option value="Mystic">Mystic</option>
                                        <option value="Operative">Operative</option>
                                        <option value="Solarian">Solarian</option>
                                        <option value="Soldier">Soldier</option>
                                        <option value="Technomancer">Technomancer</option>
                                    </select>
                                    <label htmlFor="Class">Class</label>
                                </div>
                                <div className="input-field col m6 s12">
                                    <select onChange={this.onChange} value={this.state.theme} className="validate white-text" name="theme" id="theme">
                                        <option value="" disabled>Choose your Theme</option>
                                        <option value="Ace_pilot">Ace Pilot</option>
                                        <option value="Bounty_hunter">Bounty Hunter</option>
                                        <option value="Icon">Icon</option>
                                        <option value="Mercenary">Mercenary</option>
                                        <option value="Outlaw">Outlaw</option>
                                        <option value="Priest">Priest</option>
                                        <option value="Scholar">Scholar</option>
                                        <option value="Spacefarer">Spacefarer</option>
                                        <option value="Xenoseeker">Xenoseeker</option>
                                        <option value="Themeless">Themeless</option>
                                    </select>
                                    <label htmlFor="theme">Theme</label>
                                </div>
                                <div className="input-field col m6 s12">
                                    <select onChange={this.onChange} value={this.state.gender} className="validate white-text" name="gender" id="gender">
                                        <option value="" disabled>Choose your Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <label htmlFor="gender">Gender</label>
                                </div>
                                <div className="input-field col m6 s12 ">
                                    <select onChange={this.onChange} value={this.state.alignment} className="validate white-text" name="alignment" id="alignment">
                                        <option value="" disabled>Choose your Alignment</option>
                                        <optgroup label="Good">
                                            <option value="Lawful Good">Lawful Good</option>
                                            <option value="Neutral Good">Neutral Good</option>
                                            <option value="Chaotic Good">Chaotic Good</option>
                                        </optgroup>
                                        <optgroup label="Neutral">
                                                <option value="Lawful Neutral">Lawful Neutral</option>
                                                <option value="Neutral">Neutral</option>
                                                <option value="Chaotic Neutral">Chaotic Neutral</option>
                                        </optgroup>
                                        <optgroup label="Evil">
                                            <option value="Lawful Evil">Lawful Evil</option>
                                            <option value="Neutral Evil">Neutral Evil</option>
                                            <option value="Chaotic Evil">Chaotic Evil</option>
                                        </optgroup>
                                    </select>
                                    <label htmlFor="alignment">Alignment</label>
                                </div>
                                <div className="input-field col m6 s12">
                                    <select onChange={this.onChange} value={this.state.deity} className="validate white-text" name="deity" id="deity">
                                        <option value="" disabled>Choose your Deity</option>
                                        <option value="N/A">N/A</option>
                                        <optgroup label="Core Deities">
                                            <option value="Abadar">Abadar</option>
                                            <option value="Besmara">Besmara</option>
                                            <option value="Damoritosh">Damoritosh</option>
                                            <option value="Desna">Desna</option>
                                            <option value="The Devourer">The Devourer</option>
                                            <option value="Eloritu">Eloritu</option>
                                            <option value="Hylax">Hylax</option>
                                            <option value="Ibra">Ibra</option>
                                            <option value="Iomedae">Iomedae</option>
                                            <option value="LaoShuPo">Lao Shu Po</option>
                                            <option value="Nyarlathotep">Nyarlathotep</option>
                                            <option value="Oras">Oras</option>
                                            <option value="Pharasma">Pharasma</option>
                                            <option value="Sarenrae">Sarenrae</option>
                                            <option value="Talavet">Talavet</option>
                                            <option value="Triune">Triune</option>
                                            <option value="Urgathoa">Urgathoa</option>
                                            <option value="Weydan">Weydan</option>
                                            <option value="Yaraesa">Yaraesa</option>
                                            <option value="Zon-kuthon">Zon-Kuthon</option>
                                        </optgroup>
                                        <optgroup label="Other Deities">
                                            <option value="Angradd">Angradd</option>
                                            <option value="Arshea">Arshea</option>
                                            <option value="Asmodeus">Asmodeus</option>
                                            <option value="BlackButterfly">Black Butterfly</option>
                                            <option value="Calistria">Calistria</option>
                                            <option value="TheEldest">The Eldest</option>
                                            <option value="Groetus">Groetus</option>
                                            <option value="Kadrical">Kadrical</option>
                                            <option value="Lamashtu">Lamashtu</option>
                                            <option value="Lissala">Lissala</option>
                                            <option value="Nylessa">Nylessa</option>
                                            <option value="Shelyn">Shelyn</option>
                                        </optgroup>
                                        <optgroup label="Outer Gods">
                                            <option value="Azahoth">Azahoth</option>
                                            <option value="Nhimbaloth">Nhimbaloth</option>
                                            <option value="Shub-niggurath">Shub-Niggurath</option>
                                            <option value="Yog-sothoth">Yog-Sothoth</option>
                                        </optgroup>
                                        <optgroup label="Minor Powers & Demigods">
                                            <option value="Anyalaritus">Anyalaritus</option>
                                            <option value="Apholine">Apholine</option>
                                            <option value="Aroggus">Aroggus</option>
                                            <option value="Duellona">Duellona</option>
                                            <option value="Feronia">Feronia</option>
                                            <option value="Ghatanothoa">Ghatanothoa</option>
                                            <option value="Inkariax">Inkariax</option>
                                            <option value="Kaikyton">Kaikyton</option>
                                            <option value="Malikah">Malikah</option>
                                            <option value="Morrobahn">Morrobahn</option>
                                            <option value="Occhiorasoi">Occhiorasoi</option>
                                            <option value="Ragadahn">Ragadahn</option>
                                            <option value="Ragathiel">Ragathiel</option>
                                            <option value="Vevelor">Vevelor</option>
                                        </optgroup>
                                        <optgroup label="Lost Gods">
                                            <option value="Aroden">Aroden</option>
                                            <option value="Rovagug">Rovagug</option>
                                            <option value="Torag">Torag</option>
                                        </optgroup>
                                    </select>
                                    <label htmlFor="deity">Deity</label>
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import M from 'materialize-css';

class Themes extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }
    componentDidMount(){
        let collapsible = document.querySelectorAll(".collapsible");
        M.Collapsible.init(collapsible, {});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="row">
                        <h2 className="white-text center-align">Character Themes</h2>
                        <p className="white-text center-align">
                            A character theme represents a focus for your character, which may
                            be a result of your background, upbringing, training, or mystic destiny.
                            You select a character theme at 1st level, gaining special benefits that
                            reflect major aspects of that theme at 1st, 6th, 12th, and 18th levels. All
                            abilities are extraordinary abilities unless otherwise noted. With your GM’s
                            permission, you can even create your own theme that fits your character
                            concept perfectly!
                        </p>
                        <br/>
                    </div>
                    <div className="row">
                        <ul className="collapsible popout">
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Ace Pilot
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                +1 DEX
                                            </h6>
                                            <br/>
                                            <span>
                                                You are most comfortable at the controls of a vehicle, whether it’s a
                                                starship racing through the inky void of space or a ground vehicle zooming
                                                between trees, around boulders, and across dusty badlands. You might be
                                                a member of an elite military force, the recipient of intense courses of
                                                training. Alternatively, you might be a total amateur with innate skills that
                                                make you a much-admired hotshot.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                THEME KNOWLEDGE (1ST)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                LONE WOLF (6TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                NEED FOR SPEED (12TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                MASTER PILOT (18TH)
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Bounty Hunter
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                +1 CON  
                                            </h6>
                                            <br/>
                                            <span>
                                                You track people down for money. It is a dangerous profession, as most of
                                                your targets understandably don’t wish to be caught. You wouldn’t have
                                                it any other way. You might have a code of ethics, never taking jobs that,
                                                say, target children or members of your own race. You might hunt down only
                                                escaped criminals. Or you might be completely amoral, taking any job that
                                                comes along—for the right price.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                THEME KNOWLEDGE (1ST)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                SWIFT HUNTER (6TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                RELENTLESS (12TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                MASTER HUNTER (18TH)
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Icon
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                +1 CHA
                                            </h6>
                                            <br/>
                                            <span>
                                                Thanks to interstellar transmissions and Drift travel, the galaxy is smaller
                                                than ever, and this connectivity has facilitated your ascension to celebrity
                                                status. You might be a famous performer or a celebrated scientist, but
                                                either way, you get recognized on the Pact Worlds and in associated
                                                systems. Your reason for traveling to unknown worlds might be to further
                                                spread your acclaim or to escape the limelight.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                THEME KNOWLEDGE (1ST)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                CELEBRITY (6TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                MEGACELEBRITY (12TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                MASTER ICON (18TH)
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Mercenary
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                +1 STR
                                            </h6>
                                            <br/>
                                            <span>
                                                Whether you take jobs that match your ethical beliefs or you fight for
                                                anyone who can afford your services, you are a hired gun. You might take
                                                pride in your past accomplishments, proudly displaying trophies of your kills,
                                                or you might be laden with guilt over being the sole survivor of a mission
                                                gone terribly wrong. You most likely work with other mercenaries and are
                                                familiar with the methodologies of military actions all across the galaxy.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                THEME KNOWLEDGE (1ST)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                GRUNT (6TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                SQUAD LEADER (12TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                COMMANDER (18TH)
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Outlaw
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                +1 DEX
                                            </h6>
                                            <br/>
                                            <span>
                                                Due to the sins of your past or your current unlawful behavior, you are a
                                                wanted individual somewhere in the Pact Worlds. You might not even be
                                                guilty and are striving to clear your good name. Or you might fully admit to
                                                being a criminal but believe the laws you break are unjust. Whatever the
                                                case, boarding a starship headed to the Vast might be just the thing you
                                                need until the heat dies down—or until you’re dragged off to prison.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                THEME KNOWLEDGE (1ST)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                LEGAL CORRUPTION (6TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                BLACK MARKET CONNECTIONS (12TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                MASTER OUTLAW (18TH)
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Priest
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                            +1 WIS
                                            </h6>
                                            <br/>
                                            <span>
                                                You are a member of an organized religion or similar association. Your belief,
                                                whether it has been a part of you since childhood or it came to you later
                                                in life, is an integral part of your character. You might travel the stars
                                                proselytizing your deity, or your church might have sent you out on a
                                                specific holy (or unholy) mission. No matter what obstacles life puts in your
                                                way, you always have the conviction of your beliefs to fall back on.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                THEME KNOWLEDGE (1ST)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                MANTLE OF THE CLERGY (6TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                DIVIE BOON (12TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                TRUE COMMUNION (18TH)
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Scholar
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                +1 INT
                                            </h6>
                                            <br/>
                                            <span>
                                                You are an erudite intellectual, pitting your brain against problems and
                                                puzzles that others would find daunting. You might be an instructor of
                                                a specific topic at a large university or a dabbler in a number of fields of
                                                study. You could be exploring the galaxy in search of ancient artifacts or
                                                new scientific phenomena. Whatever your motivation, you are sure that
                                                the answers you seek are out there.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                THEME KNOWLEDGE (1ST)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                TIP OF THE TONGUE (6TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                RESEARCH MAVEN (12TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                MASTER SCHOLAR (18TH)
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Spacefarer
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                +1 CON
                                            </h6>
                                            <br/>
                                            <span>
                                                Your longing to journey among the stars can’t be sated. You yearn for the
                                                adventure of stepping onto a distant world and exploring its secrets. You
                                                tend to greet every new opportunity with bravery and fortitude, confident
                                                that your multitude of skills will pull you through. Perhaps you simply find
                                                joy in the act of traveling with your companions, or perhaps you are just out
                                                to line your pockets with all sorts of alien loot!
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                THEME KNOWLEDGE (1ST)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                EAGER DABBLER (6TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                JACK OF ALL TRADES (12TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                MASTER EXPLORER (18TH)
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Xenoseeker
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                +1 CHA
                                            </h6>
                                            <br/>
                                            <span>
                                                The thought of meeting alien life-forms excites you. The more different
                                                their appearances and customs are from yours, the better! You either
                                                believe they have much to teach you or you want to prove you are better
                                                than them. Of course, the only way to accomplish your goal is to leave
                                                the Pact Worlds and travel to the Vast, where a virtually endless number
                                                of aliens await.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                THEME KNOWLEDGE (1ST)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                QUICK PIDGIN (6TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                FIRST CONTACT (12TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                BRILLIANT DISCOVERY (18TH)
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Themeless
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                
                                            </h6>
                                            <br/>
                                            <span>
                                                If you decide that none of the themes above fit your particular
                                                character concept, you can choose not to have a theme. You
                                                then gain the following benefits at the listed levels. A themeless
                                                character is considerably less powerful than a character with a
                                                theme, so choose this option with care.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                GENERAL KNOWLEDGE (1ST)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                CERTAINTY (6TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                EXTENSIVE STUDIES (12TH)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                STEELY DETERMINATION (18TH)
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
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
        </div>       
        )
    }
}

Themes.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Themes);
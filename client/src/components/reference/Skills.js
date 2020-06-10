import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import M from 'materialize-css';

class Skills extends Component {
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
                        <h2 className="white-text center-align">Skills</h2>
                        <p className="white-text center-align">
                            Whether you are a battle-hardened soldier who can freeze a
                            foe’s blood with a glance, a garrulous envoy who can blend into
                            any social situation, or a brilliant technomancer with knowledge
                            about every subject in the galaxy, skills represent some of your
                            most fundamental abilities. At 1st level, you start with a number
                            of skill ranks determined by your class, representing your initial
                            training, and you gain more skill ranks as you gain levels, allowing
                            you to improve in skills you already have or gain new ones.
                        </p>
                        <br/>
                        <img src="images/skill-chart.PNG" alt="skill chart" className="center-align col s12 responsive-img"/>
                    </div>
                    <div className="row">
                        <ul className="collapsible popout">
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Acrobatics
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (DEX; ARMOR CHECK PENALTY)
                                            </h6>
                                            <br/>
                                            <span>
                                                You can keep your balance while traversing narrow or treacherous
                                                surfaces, escape from restraints, and tumble to avoid attacks.
                                                You also use Acrobatics to determine the success of difficult
                                                maneuvers while flying.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                BALANCE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                ESCAPE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                FLY
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                TUMBLE
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Athletics
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (STR; ARMOR CHECK PENALTY)  
                                            </h6>
                                            <br/>
                                            <span>
                                                You can scale vertical surfaces, leap over obstacles, and swim.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                CLIMB
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                JUMP
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                SWIM
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Bluff
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                            (CHA)
                                            </h6>
                                            <br/>
                                            <span>
                                                You can use words and actions to create distractions,
                                                misdirect your opponents, tell convincing lies, and pass along
                                                secret messages.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                DIVERSION
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                FEINT
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                LIE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                PASS SECRET MESSAGE
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Computers
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (INT; TRAINED ONLY)
                                            </h6>
                                            <br/>
                                            <span>
                                                You can operate, manipulate, and hack into computer systems.
                                                If you don’t have physical access to a computer system’s user
                                                interface, you must use a hacking kit to access and manipulate
                                                the system. Computers are set up to give one or more authorized users
                                                “root access,” allowing them to access any information or
                                                function of the computer as a standard action, with no need for a Computers check. 
                                                Firewalls can block off specific sections of a
                                                computer and grant different users root access to those sections.
                                                The base DC for many of the tasks of the Computers skill
                                                is equal to 13 + (4 × the computer's tier). These DCs may be
                                                adjusted by the GM to reflect other circumstances.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                ACCESS UNSECURED SYSTEM
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                CRAFT COMPUTER
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                CREATE OR DETECT FORGERY
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                DESTROY OR REPAIR SYSTEM OR MODULE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                DETECT FAKE SHELL
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                DISABLE OR MANIPULATE MODULE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                GAIN ROOT ACCESS
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                HACK SYSTEM
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Culture
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (INT; TRAINED ONLY)
                                            </h6>
                                            <br/>
                                            <span>
                                                You are a student of the vast number of known cultures in the
                                                galaxy, and you have a deep and rich understanding of the
                                                undercurrents of cultures and language in general. Each time
                                                you take a rank in Culture, you learn to speak and read a new
                                                language.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                DECIPHER WRITING
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                RECALL KNOWLEDGE
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Diplomacy
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                            (CHA)
                                            </h6>
                                            <br/>
                                            <span>
                                                You can persuade others to be friendly toward you, resolve
                                                conflicts and differences, and learn common knowledge and
                                                rumors floating around a settlement.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                CHANGE ATTITUDE
                                            </h5>
                                            <p className="center-align">
                                                The five categories of initial attitude are as follows:
                                                </p>
                                            <ul className="center-align">
                                                <li>Hostile</li>
                                                <li>Unfriendly</li>
                                                <li>Indifferent</li>
                                                <li>Friendly</li>
                                                <li>Helpful</li>
                                            </ul>
                                            <h5 className="deep-orange darken-2 center">
                                                GATHER INFORMATION
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Disguise
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (CHA)
                                            </h6>
                                            <br/>
                                            <span>
                                                You are able to change your appearance to blend in and
                                                deceive others, whether to infiltrate
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                CHANGE APPEARANCE
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Engineering
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (INT; TRAINED ONLY)
                                            </h6>
                                            <br/>
                                            <span>
                                                You can identify, build, repair, or disable technological devices;
                                                assess the stability of structures and machinery; and properly
                                                arm and disarm explosives. If you don’t have an engineering kit
                                                when attempting an Engineering check, you take a –2 penalty
                                                to the check.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                ARM EXPLOSIVES
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                ACCESS STABILITY
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                CRAFT TECH ITEM
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                DISABLE DEVICE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                IDENTIFY CREATURE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                IDENTIFY TECHNOLOGY
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                REPAIR ITEM
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Intimidate
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (CHA)
                                            </h6>
                                            <br/>
                                            <span>
                                                You can rattle your foes or bully them to do what you want with
                                                verbal threats or displays of prowess.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                BULLY
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                DEMORALIZE
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Life Science
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (INT; TRAINED ONLY)
                                            </h6>
                                            <br/>
                                            <span>
                                                You are educated in the scientific study of living things, from
                                                the smallest organisms to the largest biological systems.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                CRAFT DRUG, POISON, OR MEDICINAL
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                CRAFT FOOD OR DRINK
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                IDENTIFY CREATURE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                RECALL KNOWLEDGE
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Medicine
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (INT; TRAINED ONLY)
                                            </h6>
                                            <br/>
                                            <span>
                                                You have knowledge of the biology of many species and can
                                                treat a number of different types of wounds and ailments. The
                                                DCs of most Medicine tasks are based on the type of equipment
                                                used.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                FIRST AID
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                LONG-TERM CARE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                LONG-TERM SUSTAINABILITY
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                TREATY DEADLY WOUNDS
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                TREAT DISEASE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                TREAT DRUGS OR POISON
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Mysticism
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (WIS; TRAINED ONLY)
                                            </h6>
                                            <br/>
                                            <span>
                                                You are educated in the fields of magic, religion, the planes, and
                                                spellcasting, and so can identify magic items and spells and
                                                make magic items yourself.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                CRAFT MAGIC ITEM
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                DISABLE MAGIC DEVICE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                IDENTIFY A SPELL BEING CAST
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                IDENTIFY CREATURE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                IDENTIFY MAGIC ITEM
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                RECALL KNOWLEDGE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                REPAIR ITEM
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Perception
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (WIS)
                                            </h6>
                                            <br/>
                                            <span>
                                                You can use all of your senses (hearing, taste, touch, sight, and
                                                smell) to notice danger, pick out fine details, and search for
                                                hidden objects or creatures.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                NOTICE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                PIERCE DISGUISE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                SEARCH
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Physical Science
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (INT; TRAINED ONLY)
                                            </h6>
                                            <br/>
                                            <span>
                                                You are educated in the scientific study of non-living systems,
                                                from the tiniest atoms to the largest celestial bodies.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                CRAFT DRUG, POISON, OR MEDICINAL
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                RECALL KNOWLEDGE
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Piloting
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (DEX)
                                            </h6>
                                            <br/>
                                            <span>
                                                You know how to drive vehicles, pilot starships, and navigate.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                FIRE STARSHIP GUNS
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                NAVIGATE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                PILOT A STARSHIP
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                PILOT A VEHICLE
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Profession
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (CHA, INT, OR WIS; TRAINED ONLY)
                                            </h6>
                                            <br/>
                                            <span>
                                                You are skilled in a specific job, specialty, or creative art. You
                                                know how to use the tools of your trade, how to perform the
                                                profession’s daily tasks, how to supervise helpers, and how to
                                                handle common problems.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                EARN A LIVING
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                RECALL KNOWLEDGE
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Sense Motive
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (WIS)
                                            </h6>
                                            <br/>
                                            <span>
                                                You can detect falsehoods and gain glimpses of the true intentions
                                                of creatures with which you interact.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                DETECT DECEPTION
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                DISCERN SECRET MESSAGE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                SENSE MENTAL EFFECT
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Sleight of Hand
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (DEX; ARMOR CHECK PENALTY; TRAINED ONLY)
                                            </h6>
                                            <br/>
                                            <span>
                                                You can hide small objects, pick pockets, and accomplish other
                                                feats of manual dexterity without being noticed.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                ENTERTAIN
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                HIDE OBJECT
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                PALM OBJECT
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                PICK POCKET
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Stealth
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (DEX; ARMOR CHECK PENALTY)
                                            </h6>
                                            <br/>
                                            <span>
                                                You can stay hidden and move silently to avoid detection,
                                                allowing you to sneak past foes or strike from an
                                                unseen position.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                HIDE
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                SNIPING
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">
                                    Survival
                                </div>
                                <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                    <div className="row">
                                        <div className="col s12">
                                            <h6 className="center">
                                                (WIS)
                                            </h6>
                                            <br/>
                                            <span>
                                                You can survive in and make your way safely through almost
                                                any kind of wilderness, follow trails and tracks, deal with wild
                                                animals, and ride tamed ones.
                                            </span>
                                            <h5 className="deep-orange darken-2 center">
                                                ENDURE SEVERE WEATHER
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                FOLLOW TRACKS
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                HANDLE AN ANIMAL
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                LIVE OFF THE LAND
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                ORIENTEERING
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                PREDICT WEATHER
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                REAR A WILD ANIMAL (TRAINED ONLY)
                                            </h5>
                                            <h5 className="deep-orange darken-2 center">
                                                RIDE A CREATURE
                                            </h5>
                                            <p className="center-align">
                                                The following actions do require Survival checks.:
                                            </p>
                                            <ul className="center-align">
                                                <li>Control Mount in Battle</li>
                                                <li>Cover</li>
                                                <li>Fast Mount or Dismount</li>
                                                <li>Fight from a Combat Trained Mount</li>
                                                <li>Guide with Knees</li>
                                                <li>Leap</li>
                                                <li>Soft Fall</li>
                                                <li>Spur Mount</li>
                                                <li>Stay Mounted</li>
                                            </ul>
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

Skills.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Skills);
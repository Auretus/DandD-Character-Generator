import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import M from 'materialize-css';

class Classes extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }
    componentDidMount(){
        let collapsible = document.querySelectorAll(".collapsible");
        M.Collapsible.init(collapsible, {});
    }
    render() {

        // const { user } = this.props.auth;

        return (
            <div className="container">
                <div className="row cyan-text text-lighten-4">
                    <h2 className="center-align">Classes</h2>
                    <h5 className="center-align">
                        Your character’s class represents her field of expertise, whether
                        she’s a battle-hardened soldier or a technomancer bending the
                        laws of physics. Her class grants a number of abilities—these
                        could be the result of formal training, honed talent, or even a direct connection to a god. 
                        It also determines statistics such as her Hit Points, Stamina Points, weapon and armor proficiencies,
                        class skills and skill ranks per level, and base attack and saving
                        throw bonuses. The following are Starfinder’s core classes.
                    </h5>
                </div>
                <br/>
                <div className="row">
                    <ul className="collapsible popout">
                        <li>
                            <div className="collapsible-header header center blue darken-3 brown-text text-lighten-5">Envoy</div>
                            <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                <div className="row">
                                    <div className="col s12">
                                        <h6 className="center">
                                            STAMINA POINTS 6 + CONSTITUTION MODIFIER | 6 HP
                                        </h6>
                                        <br/>
                                        <span>
                                            You make your way in the universe with
                                            a charming smile, quick wit, and keen
                                            sense of self-preservation, and excel at
                                            getting others to do what you want.
                                            You might be a trickster, hustler, or
                                            con artist, or you might serve as an
                                            actor, ambassador, or businessperson,
                                            paving the way for negotiation through
                                            kind words or the occasional dirty trick. You
                                            are often the group’s strategist, using
                                            your quick wit and tactical acumen to
                                            push your friends to greater heights.
                                            You may also be skilled in diplomacy,
                                            serving as the face for a starship
                                            crew, talking your way into restricted
                                            systems or gaining audiences with
                                            local politicians or warlords.
                                        </span>
                                        <h5 className="deep-orange darken-2 center">
                                            KEY ABILITY SCORE
                                        </h5>
                                        <p>
                                            Your Charisma helps you succeed in many social situations
                                            and makes a number of your improvisations more effective,
                                            so Charisma is your key ability score. A high Dexterity score
                                            can make you a better ranged combatant, while a high
                                            Intelligence score improves all of your skills.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            CLASS SKILLS
                                        </h5>
                                        <p className="center-align">
                                            SKILL RANKS PER LEVEL
                                            8 + INTELLIGENCE MODIFIER
                                        </p>
                                        <div className="row">
                                            <div className="col s5 m4 offset-m3 offset-s1">
                                                <p>
                                                    Acrobatics (Dex) <br/>
                                                    Athletics (Str) <br/>
                                                    Bluff (Cha) <br/>
                                                    Computers (Int) <br/>
                                                    Culture (Int) <br/>
                                                    Diplomacy (Cha) <br/>
                                                    Disguise (Cha) <br/>
                                                    Engineering (Int) <br/>
                                                </p> 
                                            </div>
                                            <div className="col s5 m4">
                                                <p>
                                                    Intimidate (Cha) <br/>
                                                    Medicine (Int) <br/>
                                                    Perception (Wis) <br/>
                                                    Piloting (Dex) <br/>
                                                    Profession (Cha, Int, or Wis) <br/>
                                                    Sense Motive (Wis) <br/>
                                                    Sleight of Hand (Dex) <br/>
                                                    Stealth (Dex) <br/> 
                                                </p>
                                            </div>
                                        </div> 
                                        <h5 className="deep-orange darken-2 center">
                                            PROFINCIENCIES
                                        </h5>
                                        <h6><b>ARMOR PROFICIENCY</b></h6>
                                        <p className="center-align">
                                        Light armor <br/><br/>
                                        </p>
                                        <h6><b>WEAPON PROFICIENCY</b></h6>
                                        <p className="center-align">
                                        Basic melee weapons, grenades, small arms <br/><br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <br/>
                        <li>
                            <div className="collapsible-header header center blue darken-3 brown-text text-lighten-5">Mechanic</div>
                            <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                <div className="row">
                                    <div className="col s12">
                                    <h6 className="center">
                                            STAMINA POINTS 6 + CONSTITUTION MODIFIER | 6 HP
                                        </h6>
                                        <br/>
                                        <span>
                                            You are a master of machines,
                                            from advanced supercomputers
                                            to simple magnetic engines.
                                            Understanding how these devices
                                            work gives you insight into the
                                            world around you, allowing you to make
                                            the most of your gear, circumvent
                                            hardened defenses, and even take over
                                            remote systems. Your programming skill
                                            also gives you the ability to create a powerful
                                            ally, in the form of either an implanted artificial
                                            intelligence or a robotic drone, which can assist
                                            you with a variety of tasks. If there’s a computer
                                            or machine that needs to be fixed, bypassed, or
                                            destroyed, you’re the first on the scene. Whether
                                            you’re a skilled scientist, a starship engineer, or a
                                            battlefield technician, you’re no stranger to combat—but
                                            you find it much more reasonable
                                            to have your AI or drone do the
                                            fighting for you.
                                        </span>
                                        <h5 className="deep-orange darken-2 center">
                                            KEY ABILITY SCORE
                                        </h5>
                                        <p>
                                            You rely on your Intelligence for your knowledge, skills,
                                            and technical know-how, so Intelligence is your key ability
                                            score. A high Dexterity score makes your ranged attacks
                                            more accurate, should you engage in combat.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            CLASS SKILLS
                                        </h5>
                                        <p className="center-align">
                                            SKILL RANKS PER LEVEL
                                            4 + INTELLIGENCE MODIFIER
                                        </p>
                                        <div className="row">
                                            <div className="col s5 m4 offset-m3 offset-s1">
                                                <p>
                                                    Athletics (Str) <br/>
                                                    Computers (Int) <br/>
                                                    Engineering (Int) <br/>
                                                    Medicine (Int) <br/>
                                                </p> 
                                            </div>
                                            <div className="col s5 m4">
                                                <p>
                                                    Perception (Wis) <br/>
                                                    Physical Science (Int) <br/>
                                                    Piloting (Dex) <br/>
                                                    Profession (Cha, Int, or Wis) <br/> 
                                                </p>
                                            </div>
                                        </div> 
                                        <h5 className="deep-orange darken-2 center">
                                            PROFINCIENCIES
                                        </h5>
                                        <h6><b>ARMOR PROFICIENCY</b></h6>
                                        <p className="center-align">
                                        Light armor <br/><br/>
                                        </p>
                                        <h6><b>WEAPON PROFICIENCY</b></h6>
                                        <p className="center-align">
                                        Basic melee weapons, grenades, small arms <br/><br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <br/>
                        <li>
                            <div className="collapsible-header header center blue darken-3 brown-text text-lighten-5">Mystic</div>
                            <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                <div className="row">
                                    <div className="col s12">
                                    <h6 className="center">
                                            STAMINA POINTS 6 + CONSTITUTION MODIFIER | 6 HP
                                        </h6>
                                        <br/>
                                        <span>
                                            You understand that what most
                                            people call magic is simply
                                            an expression of the innate
                                            connection between all things,
                                            and you intuitively tap into this
                                            unseen power to create strange
                                            effects. You may conceptualize the
                                            source of your magic as divine grace,
                                            a manipulation of fundamental
                                            energy, or an unlocking of psychic
                                            potential, but always with the
                                            knowledge that you are a conduit
                                            channeling forces greater than yourself.
                                            Though you may study, you understand
                                            that spellcasting—like all existence—is
                                            messy and intuitive, and you specialize in
                                            biology and mental systems too complex
                                            to be perfectly understood by science.
                                            You sense the intangible and exploit your
                                            bonds with others, whether to bolster
                                            them or bend them to your will.
                                        </span>
                                        <h5 className="deep-orange darken-2 center">
                                            KEY ABILITY SCORE
                                        </h5>
                                        <p>
                                            Your Wisdom determines your spellcasting ability, the saving
                                            throw DCs of your spells, and the number of bonus spells you
                                            can cast per day, so Wisdom is your key ability score. A high
                                            Charisma score can also help you in social situations.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            CLASS SKILLS
                                        </h5>
                                        <p className="center-align">
                                            SKILL RANKS PER LEVEL
                                            6 + INTELLIGENCE MODIFIER
                                        </p>
                                        <div className="row">
                                            <div className="col s5 m4 offset-m3 offset-s1">
                                                <p>
                                                    Bluff (Cha) <br/>
                                                    Culture (Int) <br/>
                                                    Diplomacy (Cha) <br/>
                                                    Disguise (Cha) <br/>
                                                    Intimidate (Cha) <br/>
                                                    Life Science (Int) <br/>
                                                </p> 
                                            </div>
                                            <div className="col s5 m4">
                                                <p>
                                                    Medicine (Int) <br/>
                                                    Mysticism (Wis) <br/>
                                                    Perception (Wis) <br/>
                                                    Profession (Cha, Int, or Wis) <br/>
                                                    Sense Motive (Wis) <br/>
                                                    Survival (Wis) <br/> 
                                                </p>
                                            </div>
                                        </div> 
                                        <h5 className="deep-orange darken-2 center">
                                            PROFINCIENCIES
                                        </h5>
                                        <h6><b>ARMOR PROFICIENCY</b></h6>
                                        <p className="center-align">
                                        Light armor <br/><br/>
                                        </p>
                                        <h6><b>WEAPON PROFICIENCY</b></h6>
                                        <p className="center-align">
                                        Basic melee weapons and small arms <br/><br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <br/>
                        <li>
                            <div className="collapsible-header header center blue darken-3 brown-text text-lighten-5">Operative</div>
                            <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                            <div className="row">
                                    <div className="col s12">
                                    <h6 className="center">
                                            STAMINA POINTS 6 + CONSTITUTION MODIFIER | 6 HP
                                        </h6>
                                        <br/>
                                        <span>
                                            You’re a shadow. You move swiftly,
                                            strike suddenly, and always have an
                                            escape plan. You’re a consummate
                                            professional, and you always get the
                                            job done, whether it’s scouting enemy
                                            lines, hunting down criminals, stealing and
                                            smuggling items, or assassinating key figures.
                                            As an operative, you're skilled in a wide
                                            variety of disciplines and specialties, and
                                            use speed, mobility, and your quick wits
                                            rather than relying on heavy weapons. You
                                            excel at the art of surprise, whether it’s
                                            sniping targets from cover or striking while
                                            their backs are turned. Your cause may
                                            be righteous, but you have no problem
                                            fighting dirty—achieving your objective is
                                            all that matters.
                                        </span>
                                        <h5 className="deep-orange darken-2 center">
                                            KEY ABILITY SCORE
                                        </h5>
                                        <p>
                                            Your Dexterity helps you to infiltrate, get into position,
                                            escape danger, and make decisive shots with your weapon,
                                            so Dexterity is your key ability score. High Intelligence
                                            boosts your skills, and Charisma aids in your interactions
                                            with other characters.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            CLASS SKILLS
                                        </h5>
                                        <p className="center-align">
                                            SKILL RANKS PER LEVEL
                                            8 + INTELLIGENCE MODIFIER
                                        </p>
                                        <div className="row">
                                            <div className="col s5 m4 offset-m3 offset-s1">
                                                <p>
                                                    Acrobatics (Dex) <br/>
                                                    Athletics (Str) <br/>
                                                    Bluff (Cha) <br/>
                                                    Computers (Int) <br/>
                                                    Culture (Int) <br/>
                                                    Disguise (Cha) <br/>
                                                    Engineering (Int) <br/>
                                                    Intimidate (Cha) <br/>
                                                </p> 
                                            </div>
                                            <div className="col s5 m4">
                                                <p>
                                                    Medicine (Int) <br/>
                                                    Perception (Wis) <br/>
                                                    Piloting (Dex) <br/>
                                                    Profession (Cha, Int, or Wis) <br/>
                                                    Sense Motive (Wis) <br/>
                                                    Sleight of Hand (Dex) <br/>
                                                    Stealth (Dex) <br/> 
                                                    Survival (Wis) <br/>
                                                </p>
                                            </div>
                                        </div> 
                                        <h5 className="deep-orange darken-2 center">
                                            PROFINCIENCIES
                                        </h5>
                                        <h6><b>ARMOR PROFICIENCY</b></h6>
                                        <p className="center-align">
                                        Light armor <br/><br/>
                                        </p>
                                        <h6><b>WEAPON PROFICIENCY</b></h6>
                                        <p className="center-align">
                                        Basic melee weapons, small arms, and sniper weapons <br/><br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <br/>
                        <li>
                            <div className="collapsible-header header center blue darken-3 brown-text text-lighten-5">Solarian</div>
                            <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                            <div className="row">
                                    <div className="col s12">
                                    <h6 className="center">
                                            STAMINA POINTS 7 + CONSTITUTION MODIFIER | 7 HP
                                        </h6>
                                        <br/>
                                        <span>
                                            The stars guide the planets with gravity,
                                            create life with light and heat, and
                                            utterly consume worlds in supernovas
                                            and black holes. You understand that
                                            these acts of creation and destruction
                                            are not opposites, but rather two parts of
                                            a natural, dualistic cycle. You seek to be an
                                            agent of that cycle, an enlightened warrior
                                            with the ability to manipulate the forces
                                            of the stars themselves. Constantly
                                            accompanied by a mote of
                                            fundamental energy or
                                            entropy, you can shape
                                            this essence in combat
                                            to create weapons
                                            and armor of gleaming
                                            stellar light or pure, devouring
                                            darkness. Whether you apprenticed
                                            in a temple or came to your powers
                                            through personal revelation, you
                                            recognize yourself as part of
                                            an ancient tradition—a force of
                                            preservation and annihilation.
                                        </span>
                                        <h5 className="deep-orange darken-2 center">
                                            KEY ABILITY SCORE
                                        </h5>
                                        <p>
                                            Your Charisma lets you channel your connection to the
                                            cosmos, so Charisma is your key ability score. A high
                                            Strength score can make you better at melee attacks.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            CLASS SKILLS
                                        </h5>
                                        <p className="center-align">
                                            SKILL RANKS PER LEVEL
                                            4 + INTELLIGENCE MODIFIER
                                        </p>
                                        <div className="row">
                                            <div className="col s5 m4 offset-m3 offset-s1">
                                                <p>
                                                    Acrobatics (Dex) <br/>
                                                    Athletics (Str) <br/>
                                                    Diplomacy (Cha) <br/>
                                                    Intimidate (Cha) <br/>
                                                    Mysticism (Wis) <br/>
                                                </p> 
                                            </div>
                                            <div className="col s5 m4">
                                                <p>
                                                    Perception (Wis) <br/>
                                                    Physical Science (Int) <br/>
                                                    Profession (Cha, Int, or Wis) <br/>
                                                    Sense Motive (Wis) <br/>
                                                    Stealth (Dex) <br/> 
                                                </p>
                                            </div>
                                        </div> 
                                        <h5 className="deep-orange darken-2 center">
                                            PROFINCIENCIES
                                        </h5>
                                        <h6><b>ARMOR PROFICIENCY</b></h6>
                                        <p className="center-align">
                                        Light armor <br/><br/>
                                        </p>
                                        <h6><b>WEAPON PROFICIENCY</b></h6>
                                        <p className="center-align">
                                        Basic and advanced melee weapons and small arms <br/><br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <br/>
                        <li>
                            <div className="collapsible-header header center blue darken-3 brown-text text-lighten-5">Soldier</div>
                            <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                            <div className="row">
                                    <div className="col s12">
                                    <h6 className="center">
                                            STAMINA POINTS 7 + CONSTITUTION MODIFIER | 7 HP
                                        </h6>
                                        <br/>
                                        <span>
                                            Conflict is an inevitable result of life. On
                                            every world that harbors complex living
                                            organisms, creatures battle one another
                                            for dominance, resources, territory, or
                                            ideals. Whether you’ve taken up arms
                                            to protect others, win glory, exact
                                            revenge, or simply earn a living, you are the
                                            perfect embodiment of this truth.
                                            You’re an expert at combat of
                                            all types but tend to prefer
                                            heavy armor and weapons—the
                                            bigger, the better. You may be a
                                            career soldier, a fresh mercenary
                                            recruit, or a lone wolf who rejects
                                            authority, but whether rushing
                                            in for hand-to-hand combat or
                                            firing tactical barrages, you’re
                                            a consummate warrior, never
                                            hesitating to put yourself
                                            in the line of fire to protect
                                            your friends.
                                        </span>
                                        <h5 className="deep-orange darken-2 center">
                                            KEY ABILITY SCORE
                                        </h5>
                                        <p>
                                            Your Strength helps you attack up close in melee and carry
                                            heavier weapons and armor, while your Dexterity helps you
                                            fire weapons from a distance and dodge returning fire, so
                                            you should choose either Strength or Dexterity as your key
                                            ability score. Once made, this choice cannot be changed. A
                                            high Constitution score allows you to soak up more damage.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            CLASS SKILLS
                                        </h5>
                                        <p className="center-align">
                                            SKILL RANKS PER LEVEL
                                            4 + INTELLIGENCE MODIFIER
                                        </p>
                                        <div className="row">
                                            <div className="col s5 m4 offset-m3 offset-s1">
                                                <p>
                                                    Acrobatics (Dex) <br/>
                                                    Athletics (Str) <br/>
                                                    Engineering (Int) <br/>
                                                    Intimidate (Cha) <br/>
                                                </p> 
                                            </div>
                                            <div className="col s5 m4">
                                                <p>
                                                    Medicine (Int) <br/>
                                                    Piloting (Dex) <br/>
                                                    Profession (Cha, Int, or Wis) <br/>
                                                    Survival (Wis) <br/>
                                                </p>
                                            </div>
                                        </div> 
                                        <h5 className="deep-orange darken-2 center">
                                            PROFINCIENCIES
                                        </h5>
                                        <h6><b>ARMOR PROFICIENCY</b></h6>
                                        <p className="center-align">
                                        Light armor and Heavy armor<br/><br/>
                                        </p>
                                        <h6><b>WEAPON PROFICIENCY</b></h6>
                                        <p className="center-align">
                                        Basic and advanced melee weapons, small arms, longarms,
                                        heavy weapons, sniper weapons, and grenades <br/><br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <br/>
                        <li>
                            <div className="collapsible-header header center blue darken-3 brown-text text-lighten-5">Technomancer</div>
                            <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                            <div className="row">
                                    <div className="col s12">
                                    <h6 className="center">
                                            STAMINA POINTS 5 + CONSTITUTION MODIFIER | 5 HP
                                        </h6>
                                        <br/>
                                        <span>
                                            To the uninitiated, magic and technology are
                                            completely unrelated, but you know there
                                            are more correlations between the two
                                            than most suspect. Magic and technology
                                            are just tools, and when combined into
                                            one discipline, called technomancy, they can
                                            be far more powerful than one or the other on
                                            its own. You utilize tech to empower,
                                            harness, and manipulate magic, and you
                                            wield magic to augment, control, and
                                            modify technology. You are an expert
                                            at hacking the underlying structure
                                            of the universe itself, bending the
                                            laws of science and nature to
                                            your will. Your technomancy—
                                            which is gained from scientific
                                            study and experimentation—
                                            manipulates the physical world,
                                            weaves illusions, allows you to
                                            peer through time and space, and if
                                            necessary, can blast a foe into atoms.
                                        </span>
                                        <h5 className="deep-orange darken-2 center">
                                            KEY ABILITY SCORE
                                        </h5>
                                        <p>
                                            Your Intelligence determines your spellcasting ability, the
                                            saving throw DCs of your spells, and the number of bonus
                                            spells you can cast per day, so Intelligence is your key
                                            ability score. Also, a high Dexterity score can help you fire
                                            your weapons more accurately and dodge incoming attacks.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            CLASS SKILLS
                                        </h5>
                                        <p className="center-align">
                                            SKILL RANKS PER LEVEL
                                            4 + INTELLIGENCE MODIFIER
                                        </p>
                                        <div className="row">
                                            <div className="col s5 m4 offset-m3 offset-s1">
                                                <p>
                                                    Computers (Int) <br/>
                                                    Engineering (Int) <br/>
                                                    Life Science (Int) <br/>
                                                    Mysticism (Wis) <br/>
                                                </p> 
                                            </div>
                                            <div className="col s5 m4">
                                                <p>
                                                    Physical Science (Int) <br/>
                                                    Piloting (Dex) <br/>
                                                    Profession (Cha, Int, or Wis) <br/>
                                                    Sleight of Hand (Dex) <br/>
                                                </p>
                                            </div>
                                        </div> 
                                        <h5 className="deep-orange darken-2 center">
                                            PROFINCIENCIES
                                        </h5>
                                        <h6><b>ARMOR PROFICIENCY</b></h6>
                                        <p className="center-align">
                                        Light armor <br/><br/>
                                        </p>
                                        <h6><b>WEAPON PROFICIENCY</b></h6>
                                        <p className="center-align">
                                        Basic melee weapons, small arms <br/><br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <br/>
                    </ul>
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

Classes.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Classes);
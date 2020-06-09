import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import M from 'materialize-css';

class Races extends Component {
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
                <div className="row">
                    <h2 className="white-text center-align">Races</h2>
                    <p className="white-text center-align">
                        Picking your race is one of the biggest choices in character
                        creation, as once it’s made, it can’t be changed. In addition to
                        its cultural flavor, each race comes with a set number of Hit
                        Points that you get at 1st level, plus several other racial traits
                        that modify your statistics or grant you additional abilities. The
                        ability score modifiers are the most significant of these. These
                        bonuses and penalties apply during the generation of your ability
                        scores (see page 18), and reflect your race’s natural aptitudes and
                        disadvantages, such as vesk being stronger on average than the
                        other races and ysoki being weaker. If you already know what
                        class you want to play, it’s often a good idea to compare its key
                        ability score (see page 19) to the ability score modifiers granted by 
                        the respective races when selecting your race, so you don’t
                        accidentally end up with your racial adjustments to your ability
                        scores making it difficult to play the type of character you want.
                        Some races’ ability bonuses make them a perfect fit for certain
                        classes, such as the vesk’s bonuses to Strength and Constitution,
                        which make them natural soldiers. However, don’t be afraid to
                        play against type if the idea excites you—every race presented
                        here has members of every class within its society.
                    </p>
                </div>
                <div className="row">
                    <ul className="collapsible popout">
                        <li>
                            <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">Androids</div>
                            <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                <div className="row">
                                    <div className="col s12 m3">
                                        <img src="images/android.jpg" alt="android"></img>
                                    </div>
                                    <div className="col s12 m9">
                                        <h6 className="center">
                                            +2 DEX | +2 INT | -2 CHA | 4 HP
                                        </h6>
                                        <br/>
                                        <span>
                                            Complex technological creations crafted to resemble humans,
                                            androids were originally a servitor race, but they have since
                                            broken free to form their own society. Unlike ordinary robots
                                            or ship AIs, androids do not simply respond according to their
                                            programming; rather, they have independent consciousnesses
                                            and are animated by souls—a distinction crucial to
                                            their generally accepted status as people rather
                                            than property.
                                        </span>
                                        <h5 className="deep-orange darken-2 center">
                                            SIZE AND TYPE
                                        </h5>
                                        <p>
                                            Androids are Medium humanoids with the
                                            android subtype.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            CONSTRUCTED
                                        </h5>
                                        <p>
                                            For effects targeting creatures by type,
                                            androids count as both humanoids and
                                            constructs (whichever effect is worse). They
                                            receive a +2 racial bonus to saving throws
                                            against disease, mind-affecting effects,
                                            poison, and sleep, unless those effects
                                            specifically target constructs. In addition,
                                            androids do not breathe or suffer the normal
                                            environmental effects of being in a vacuum.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            EXCEPTIONAL VISION
                                        </h5>
                                        <p>
                                            Androids have low-light vision and darkvision.
                                            As a result, they can see in dim light as if
                                            it were normal light, and they can see with
                                            no light source at all to a range of 60 feet in
                                            black and white only. 
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            FLAT AFFECT
                                        </h5>
                                        <p>
                                            Androids find emotions confusing and keep
                                            them bottled up. They take a –2 penalty to Sense
                                            Motive checks, but the DCs of Sense Motive
                                            checks attempted against them increase by 2.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            UPGRADE SLOT
                                        </h5>
                                        <p>
                                        Androids have a single armor upgrade slot in
                                        their bodies. Regardless of whether androids
                                        are wearing physical armor, they can use this
                                        slot to install any one armor upgrade that
                                        could be installed into light armor.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">Humans</div>
                            <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                <div className="row">
                                    <div className="col s12 m3">
                                        <img src="images/human.jpg" alt="human"></img>
                                    </div>
                                    <div className="col s12 m9">
                                        <h6 className="center">
                                            +2 to Any 1 Ability | 4 HP
                                        </h6>
                                        <br/>
                                        <span>
                                            Ambitious, creative, and endlessly curious, humans have
                                            shown more drive to explore their system and the universe
                                            beyond than any of their neighbor races—for better and for
                                            worse. They’ve helped usher in a new era of system-wide
                                            communication and organization and are admired for their
                                            passion and tenacity, but their tendency to shoot
                                            first and think about the consequences later can
                                            make them a liability for those races
                                            otherwise inclined to work with them.
                                        </span>
                                        <h5 className="deep-orange darken-2 center">
                                            SIZE AND TYPE
                                        </h5>
                                        <p>
                                            Humans are Medium humanoids and have the
                                            human subtype.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            BONUS FEAT
                                        </h5>
                                        <p>
                                            Humans select one extra feat at 1st level.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            SKILLED
                                        </h5>
                                        <p>
                                            Humans gain an additional skill rank at 1st level
                                            and each level thereafter. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">Kasathas</div>
                            <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                                <div className="row">
                                    <div className="col s12 m3">
                                        <img src="images/kasatha.jpg" alt="kasatha"></img>
                                    </div>
                                    <div className="col s12 m9">
                                        <h6 className="center">
                                            +2 STR | +2 WIS | -2 INT | 4 HP
                                        </h6>
                                        <br/>
                                        <span>
                                            Originally from a planet orbiting
                                            a dying star far beyond the Pact
                                            Worlds, the four-armed kasathas
                                            maintain a reputation as a noble
                                            and mysterious people. They are
                                            famous for their anachronistic
                                            warriors, ancient wisdom, and
                                            strange traditions.
                                        </span>
                                        <h5 className="deep-orange darken-2 center">
                                            SIZE AND TYPE
                                        </h5>
                                        <p>
                                            Kasathas are Medium humanoids with the
                                            kasatha subtype.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            DESERT STRIDE
                                        </h5>
                                        <p>
                                            Kasathas can move through nonmagical
                                            difficult terrain in deserts, hills, and
                                            mountains at their normal speed.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            FOUR-ARMED
                                        </h5>
                                        <p>
                                            Kasathas have four arms, which allows them
                                            to wield and hold up to four hands’ worth of
                                            weapons and equipment. While their multiple
                                            arms increase the number of items they can
                                            have at the ready, it doesn't increase the number
                                            of attacks they can make during combat.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            HISTORIAN
                                        </h5>
                                        <p>
                                            Due to their in-depth historical training and the
                                            wide-ranging academic background knowledge
                                            they possess, kasathas receive a +2 racial bonus
                                            to Culture checks.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            NATURAL GRACE
                                        </h5>
                                        <p>
                                            Kasathas receive a +2 racial bonus to Acrobatics
                                            and Athletics checks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">Lashuntas</div>
                            <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                            <div className="row">
                                    <div className="col s12 m3">
                                        <img src="images/lashunta.jpg" alt="lashunta"></img>
                                    </div>
                                    <div className="col s12 m9">
                                        <h6 className="center">
                                            SEE BELOW FOR STAT BONUSES | 4 HP
                                        </h6>
                                        <br/>
                                        <span>
                                            Idealized by many other humanoid
                                            races and gifted with innate
                                            psychic abilities, lashuntas are at
                                            once consummate scholars and
                                            enlightened warriors, naturally
                                            divided into two specialized
                                            subraces with different abilities
                                            and societal roles.
                                        </span>
                                        <h5 className="deep-orange darken-2 center">
                                            SIZE AND TYPE
                                        </h5>
                                        <p>
                                            Lashuntas are Medium humanoids with the
                                            lashunta subtype.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            DIMORPHIC
                                        </h5>
                                        <p>
                                            All lashuntas gain +2 Charisma at character
                                            creation. Korasha lashuntas are muscular
                                            (+2 Strength at character creation) but often
                                            brash and unobservant (–2 Wisdom at character
                                            creation). Damaya lashuntas are typically clever
                                            and well-spoken (+2 Intelligence at character
                                            creation) but somewhat delicate (–2 Constitution
                                            at character creation).
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            LASHUNTA MAGIC
                                        </h5>
                                        <p>
                                        Lashuntas gain the following spell-like abilities:
                                        <br/>
                                        <b>At will: </b>daze, psychokinetic hand
                                        <br/>
                                        <b>1/day: </b>detect thoughts
                                        <br/>
                                        The caster level for these effects is equal to the lashunta's level. 
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            LIMITED TELEPATHY
                                        </h5>
                                        <p>
                                            Lashuntas can mentally communicate with any
                                            creatures within 30 feet with whom they share a
                                            language. Conversing telepathically with multiple
                                            creatures simultaneously is just as difficult as
                                            listening to multiple people speaking.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            STUDENT
                                        </h5>
                                        <p>
                                            Lashuntas love to learn, and they receive a +2
                                            racial bonus to any two skills of their choice.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">Shirrens</div>
                            <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                            <div className="row">
                                    <div className="col s12 m3">
                                        <img src="images/shirren.jpg" alt="shirren"></img>
                                    </div>
                                    <div className="col s12 m9">
                                        <h6 className="center">
                                            +2 CON | +2 WIS | -2 CHA | 6 HP
                                        </h6>
                                        <br/>
                                        <span>
                                            Once part of a ravenous hive of
                                            locust-like predators, the insectile
                                            shirrens only recently broke with
                                            their hive mind to become a race
                                            of telepaths physically addicted
                                            to their own individualism,
                                            yet dedicated to the idea of
                                            community and harmony with
                                            other races.
                                        </span>
                                        <h5 className="deep-orange darken-2 center">
                                            SIZE AND TYPE
                                        </h5>
                                        <p>
                                            Shirrens are Medium humanoids with the
                                            shirren subtype.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            BLINDSENSE
                                        </h5>
                                        <p>
                                            Shirrens’ sensitive antennae grant them blindsense
                                            (vibration)—the ability to sense vibrations in the
                                            air—out to 30 feet. A shirren ignores the Stealth
                                            bonuses from any form of visual camouflage,
                                            invisibility, and the like when attempting a
                                            Perception check opposed by a creature’s Stealth
                                            check. Even on a successful Perception check, any
                                            foe that can’t be seen still has total concealment
                                            (50% miss chance) against a shirren, and the shirren
                                            still has the normal miss chance when attacking
                                            foes that have concealment. A shirren is still flatfooted
                                            against attacks from creatures it can’t see.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            COMMUNALISM
                                        </h5>
                                        <p>
                                            Shirrens are used to working with others as part
                                            of a team. Once per day, as long as an ally is
                                            within 10 feet, a shirren can roll a single attack roll
                                            or skill check twice and take the higher result. 
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            CULTURAL FASCINATION
                                        </h5>
                                        <p>
                                            Shirrens are eager to learn about new cultures
                                            and societies. Shirrens receive a +2 racial bonus
                                            to Culture and Diplomacy checks.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            LIMITED TELEPATHY
                                        </h5>
                                        <p>
                                            Shirrens can communicate telepathically with
                                            any creatures within 30 feet with whom they
                                            share a language. Conversing telepathically
                                            with multiple creatures simultaneously is just as
                                            difficult as listening to multiple people speak.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">Vesk</div>
                            <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                            <div className="row">
                                    <div className="col s12 m3">
                                        <img src="images/vesk.jpg" alt="vesk"></img>
                                    </div>
                                    <div className="col s12 m9">
                                        <h6 className="center">
                                            +2 STR | +2 CON | -2 INT | 6 HP
                                        </h6>
                                        <br/>
                                        <span>
                                            Heavily muscled and covered with thick scales and short,
                                            sharp horns, the reptilian vesk are exactly as predatory
                                            and warlike as they appear. Originally hailing from a star
                                            system near the Pact Worlds, they sought to conquer and
                                            subdue their stellar neighbors, as they had all the other
                                            intelligent races in their own system, until
                                            an overwhelming threat forced them
                                            into a grudging alliance with the Pact
                                            Worlds—for now.
                                        </span>
                                        <h5 className="deep-orange darken-2 center">
                                            SIZE AND TYPE
                                        </h5>
                                        <p>
                                            Vesk are Medium humanoids with the
                                            vesk subtype.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            ARMOR SAVANT
                                        </h5>
                                        <p>
                                            Vesk use armor in a way that complements
                                            their uniquely sturdy physiology. When wearing
                                            armor, they gain a +1 racial bonus to AC. When
                                            they’re wearing heavy armor, their armor check
                                            penalty is 1 less severe than normal.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            FEARLESS
                                        </h5>
                                        <p>
                                            Vesk receive a +2 racial bonus to saving throws
                                            against fear effects. 
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            LOW-LIGHT VISION
                                        </h5>
                                        <p>
                                            Vesk can see in dim light as if it were normal
                                            light.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            NATURAL WEAPONS
                                        </h5>
                                        <p>
                                            Vesk are always considered armed. They can
                                            deal 1d3 lethal damage with unarmed strikes
                                            and the attack doesn’t count as archaic. Vesk
                                            gain a unique weapon specialization with their
                                            natural weapons at 3rd level, allowing them to
                                            add 1–1/2 × their character level to their damage
                                            rolls for their natural weapons (instead of just
                                            adding their character level, as usual).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header center blue darken-3 brown-text text-lighten-5">Ysoki</div>
                            <div className="collapsible-body N/A transparent cyan-text text-lighten-4">
                            <div className="row">
                                    <div className="col s12 m3 valign-wrapper">
                                        <img src="images/ysoki.jpg" alt="ysoki"/>
                                    </div>
                                    <div className="col s12 m9">
                                        <h6 className="center">
                                            +2 DEX | +2 INT | -2 STR | 2 HP
                                        </h6>
                                        <br/>
                                        <span>
                                            Small and furtive, the ysoki are often
                                            overlooked by larger races. Yet
                                            through wit and technological
                                            prowess, they’ve spread
                                            throughout the solar system,
                                            giving truth to the old adage
                                            that every starship needs a
                                            few rats.
                                        </span>
                                        <h5 className="deep-orange darken-2 center">
                                            SIZE AND TYPE
                                        </h5>
                                        <p>
                                            Ysoki are Small humanoids with the
                                            ysoki subtype.  
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            CHEEK POUCHES
                                        </h5>
                                        <p>
                                            Ysoki can store up to 1 cubic foot of items
                                            weighing up to 1 bulk in total in their cheek
                                            pouches, and they can transfer a single object
                                            between hand and cheek as a swift action. A ysoki
                                            can disgorge the entire contents of his pouch onto
                                            the ground in his square as a move action that
                                            does not provoke an attack of opportunity.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            DARKVISION
                                        </h5>
                                        <p>
                                            Ysoki can see up to 60 feet in the dark. 
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            MOXIE
                                        </h5>
                                        <p>
                                            Ysoki are scrappy and nimble even when the
                                            odds are against them. A ysoki can stand from
                                            prone as a swift action. Additionally, when
                                            off-kilter (see page 276), a ysoki does not take
                                            the normal penalties to attacks or gain the
                                            flat-footed condition. When attempting an
                                            Acrobatics check to tumble through the space
                                            of an opponent at least one size category larger
                                            than himself, a ysoki receive a +5 racial bonus to
                                            the check.
                                        </p>
                                        <h5 className="deep-orange darken-2 center">
                                            SCROUNGER
                                        </h5>
                                        <p>
                                            Ysoki receive a +2 racial bonus to Engineering,
                                            Stealth, and Survival checks.
                                        </p>
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
        )
    }
}

Races.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Races);
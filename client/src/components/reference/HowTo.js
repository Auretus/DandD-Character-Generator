import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class HowTo extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 N/A transparent cyan-text text-lighten-4">
                        <h2 className="center-align">
                            GETTING STARTED
                        </h2>
                        <hr/>
                        <h5>
                            In Starfinder, you and your friends play the crew of a starship exploring the
                            mysteries of a weird universe. Within this framework, however, there are no
                            limits to the characters you can play and stories you can tell. Will you join the
                            Starfinder Society in unearthing alien technology, or seek fame and fortune
                            as a corporate mercenary? Perhaps you’re a Xenowarden fighting to protect
                            the ecology of new planets, a mind-reading mystic detective, or an android
                            assassin with a magic sword trying to atone for a dark past. Whatever your
                            mission, you and your team will need all your magic, weapons, and wits to
                            make it through. But most of all, you’ll need each other.
                        </h5>
                        <br/>
                        <h4 className="center-align header">
                            WHAT’S A ROLEPLAYING GAME?
                        </h4>
                        <p>
                            Starfinder is a tabletop adventure roleplaying game (RPG): an
                            interactive story in which one player—the Game Master—sets
                            the scene and presents challenges, while the other players
                            each assume the role of a science fantasy hero and attempt
                            to overcome those challenges. By responding to situations
                            according to their characters’ personalities and abilities, the
                            players help to create the story’s plot as the outcome of each
                            scene (called an “encounter”) leads into the next. Dice rolls
                            combined with preassigned statistics add an element of chance
                            and determine whether characters succeed or fail at the actions
                            they attempt. You can think of an RPG as theater: the players
                            are the actors, while the Game Master is the director. But you
                            don’t have to be a skilled actor or storyteller to play the game;
                            just describe what you want your character to do, and let the
                            Game Master and the rules do the rest!
                        </p>
                        <h5 className="center-align sub-header">
                            The Players
                        </h5>
                        <p>
                            Before the game begins, players typically invent their own
                            player characters’ backgrounds and personalities. While it’s
                            possible to play multiple characters at once, it’s generally the
                            most fun to have one character per player, so players can really
                            get into their roles. In addition to coming up with character
                            concepts, players use the game’s rules to build their characters’
                            numerical statistics, which determine the characters’ abilities,
                            strengths, and weaknesses. Chapter 2 provides in-depth
                            instructions for how to create a character, pointing you toward
                            relevant rules in other chapters. One of the reasons this book
                            is so big is that there are tons of optional rules to help you
                            customize an infinite variety of characters!
                        </p>
                        <p>
                            During the game, the players describe the actions their
                            characters take. Some players particularly enjoy play-acting (or
                            “roleplaying”) the game’s events as if they were their characters,
                            while others describe their characters’ actions as if narrating a
                            story. Do whatever feels best!
                        </p>
                        <p>
                            Many in-game situations in Starfinder have rules that govern
                            how they’re resolved. When a fight breaks out, for example, the
                            rules in Chapter 8 explain how to attack, defend, move, and so
                            on. All the rules players need to play Starfinder can be found
                            in this book.
                        </p>
                        <h5 className="center-align sub-header">
                            The Game Master
                        </h5>
                        <p>
                            While the rest of the players must create their characters for
                            a Starfinder game, the Game Master (or GM) is in charge of
                            the story and world. The Game Master is a player, but for the
                            sake of simplicity, she is referred to in this book and other
                            Starfinder products as the Game Master or GM, whereas the
                            other players are referred to simply as players. The Game
                            Master needs to detail the situations she wants the players to
                            experience as part of an overarching story, consider how the
                            actions of the player characters (or PCs) might affect her plans,
                            and understand the rules and statistics for the challenges they
                            will face along the way.
                        </p>
                        <p>
                            Many Game Masters find it fun and convenient to run
                            premade adventures, in which the game’s story and mechanical
                            preparation is largely complete. The Starfinder Adventure Path
                            line fills this role nicely. Other Game Masters enjoy preparing
                            original game material, and many use a blend of both methods.
                            Either way, the rules in Chapter 11 help Game Masters figure
                            out which characters or creatures are appropriate opponents for
                            a given group of player characters, as well as how to adjudicate
                            everything from zero gravity and environmental hazards to what
                            sort of loot PCs should get as rewards for their accomplishments.
                            During the game, the players roll dice and use their player
                            characters’ statistics to determine how in-game actions are
                            resolved. Much like a referee, the Game Master is the final
                            arbiter of any action’s success or failure, and she can always
                            override the rules if she disagrees with an interpretation or feels
                            a given rules interaction is breaking the mood.
                        </p>
                        <h5 className="center-align sub-header">
                            Unlimited Adventure
                        </h5>
                        <p>
                            A roleplaying game such as Starfinder can be played for as long as
                            the Game Master has an ongoing story she enjoys exploring and
                            advancing with her players. This means the game might last for a
                            few hours, if the story is short and self-contained, or it might last
                            several years. Each time the Game Master and players sit down to
                            play, it’s called a game session—most sessions last several hours.
                            Games generally consist of several linked sessions that together
                            form a complete story, called an “adventure.” Short adventures
                            that can be played in a single session are commonly referred to
                            as “one-shots,” while games that last many sessions or contain
                            several linked but distinct adventures are called “campaigns.”
                        </p>
                        <br/>
                        <h4 className="center-align header">
                            SOME BASIC CONCEPTS
                        </h4>
                        <hr/>
                        <p>
                            To make the best use of this book, you’ll want to be familiar with
                            several key terms and abbreviations. These are used throughout
                            the book, and many are common to tabletop roleplaying in
                            general. For a larger glossary, see page 512.
                        </p>
                        <h5 className="center-align sub-header">
                            1d6, d20, etc.
                        </h5>
                        <p>
                            These figures are abbreviations for die rolls and indicate which
                            dice you roll to determine a variable number, such as the amount
                            of damage a weapon deals. The first number tells you how many
                            dice to roll, while the second number tells you the number of
                            sides the die or dice must have; if there’s no first number, just
                            roll one die. For example, “roll 2d8” means that you must roll
                            two eight-sided dice, and “roll a d20” means you must roll one
                            20-sided die. Occasionally, you may need to roll a d3; if you don’t
                            have a three-sided die, you can roll a d6 instead—treat a roll of 1 or
                            2 as a 1, a roll of 3 or 4 as a 2, and a roll of 5 or 6 as a 3.
                        </p>
                        <h5 className="center-align sub-header">
                            Abbreviations
                        </h5>
                        <p>
                            Starfinder has many game terms that are typically expressed as
                            abbreviations, including HP (Hit Points), SP (Stamina Points), and
                            RP (Resolve Points). If you miss or forget what an abbreviation
                            means, they’re explained in the glossary starting on page 512.
                        </p>
                        <h5 className="center-align sub-header">
                            Armor Class (AC)
                        </h5>
                        <p>
                            This is a number representing how hard it is for an enemy to
                            strike your character in combat. A character has two Armor
                            Classes: Energy Armor Class (EAC) and Kinetic Armor Class (KAC).
                        </p>
                        <h5 className="center-align sub-header">
                            Attack Roll
                        </h5>
                        <p>
                            An attack roll is a d20 roll that represents your character’s
                            attempt to strike another creature in combat.
                        </p>
                        <h5 className="center-align sub-header">
                            Check
                        </h5>
                        <p>
                            A check is a d20 roll that may or may not be modified by your
                            character’s statistics or another value. The most common types
                            are skill checks and ability checks (which determine whether
                            you successfully perform a task), and initiative checks (which
                            determine when you act in combat).
                        </p>
                        <h5 className="center-align sub-header">
                            Combat
                        </h5>
                        <p>
                            Typically, references to combat refer to tactical combat between
                            individual characters, which takes place on a square-gridded
                            battle map and is covered in depth in Chapter 8. Combat can
                            instead refer to starship combat, which uses a hex map; you can
                            find the details of that system in Chapter 9.
                        </p>
                        <h5 className="center-align sub-header">
                            Creature
                        </h5>
                        <p>
                            A creature is an active participant in the story or world. This
                            includes player characters (PCs), nonplayer characters (NPCs),
                            and monsters.
                        </p>
                        <h5 className="center-align sub-header">
                            Difficulty Class (DC)
                        </h5>
                        <p>
                            This is the target number a creature must meet or exceed when
                            attempting a check in order to accomplish a given task.
                        </p>
                        <h5 className="center-align sub-header">
                            Encounter
                        </h5>
                        <p>
                            An encounter is a situation that presents characters with a
                            challenge. This could be a roleplaying challenge where they
                            need to get information, a physical battle, a trap or puzzle, or
                            anything else that requires players to use their wits or their
                            characters’ statistics. Characters typically earn experience
                            points for completing encounters.
                        </p>
                        <h5 className="center-align sub-header">
                            Experience Points (XP)
                        </h5>
                        <p>
                            Often just called “experience,” this is a way of tracking your
                            character’s increasing expertise gained as a result of overcoming
                            challenges. When characters earn enough experience points,
                            they advance in level, or “level up” (see Leveling Up on page 26).
                        </p>
                        <h5 className="center-align sub-header">
                            Game Master (GM)
                        </h5>
                        <p>
                            The Game Master is the player who adjudicates the rules and
                            controls the various elements of the Starfinder story and world
                            that the players explore. A GM’s duty is to provide a fair and
                            fun game—she wants the other players to ultimately succeed
                            in their goals, but only after much heroic striving and danger.
                        </p>
                        <h5 className="center-align sub-header">
                            Hit Points (HP) and Stamina Points (SP)
                        </h5>
                        <p>
                            Stamina Points represent how much damage you can take before
                            you’re actually hurt, while Hit Points represent how badly hurt
                            you can be before you fall unconscious or die. Stamina Points
                            are lost before Hit Points and are much easier to regain. For a
                            more detailed explanation, see page 22.
                        </p>
                        <h5 className="center-align sub-header">
                            Level
                        </h5>
                        <p>
                            A level is an indication of relative power within the game. There
                            are several types of levels. Class level is the number of levels of
                            a specific class that a character has. Character level is the sum
                            of all of the levels a character has in all of her classes. Level can
                            also refer to a spell’s level, an item’s level, or another scaling
                            mechanic that falls within the framework of the game’s rules.
                        </p>
                        <h5 className="center-align sub-header">
                            Modifier
                        </h5>
                        <p>
                            A modifier is a number that is added to a roll such as an attack
                            roll, saving throw, or skill check. It can be positive or negative.
                        </p>
                        <h5 className="center-align sub-header">
                            Monster
                        </h5>
                        <p>
                            A monster is a nonplayer character. In general, monsters are too
                            strange or unintelligent to be player characters, or are prevented
                            from being them for other reasons. A monster might be a player
                            character’s opponent or ally, or serve any other role.
                        </p>
                        <h5 className="center-align sub-header">
                            Nonplayer Character (NPC)
                        </h5>
                        <p>
                            A nonplayer character is controlled by the GM for the purpose of
                            interacting with players and helping advance the story.
                        </p>
                        <h5 className="center-align sub-header">
                            Player Character (PC)
                        </h5>
                        <p>
                            This is a character controlled by a player.
                        </p>
                        <h5 className="center-align sub-header">
                            Roleplaying
                        </h5>
                        <p>
                            Describing a character’s actions, often while play-acting from the
                            perspective of the character, is referred to as roleplaying. When
                            a player speaks or describes action from the perspective of a
                            character, it is referred to as being “in character.”
                        </p>
                        <h5 className="center-align sub-header">
                            Round
                        </h5>
                        <p>
                            In tactical combat, a round is a unit of time equal to 6 seconds
                            in the game world; every character who is able to act gets a
                            turn once per round. In starship combat, rounds consist of
                            three phases of actions and don’t correlate to a specific amount
                            of time.
                        </p>
                        <h5 className="center-align sub-header">
                           Saving Throw 
                        </h5>
                        <p>
                            A saving throw is a d20 roll representing your character’s attempt
                            to avoid or reduce some harmful effect.
                        </p>
                        <h5 className="center-align sub-header">                            
                            Tier
                        </h5>
                        <p>
                            Tier indicates scaling and is similar in meaning to “level”; it is used
                            for computers and starships, as well as other elements.
                        </p>
                        <br/>
                        <h4 className="center-align header">                            
                            OVERVIEW OF PLAY
                        </h4>
                        <hr/>
                        <p>
                            Building a basic understanding of Starfinder gameplay will help
                            you absorb the game’s mechanical details. The following are
                            common aspects of Starfinder play.
                        </p>
                        <h5 className="center-align sub-header">                            
                            Roleplaying
                        </h5>
                        <p>
                            Anytime you’re speaking for your character or describing her actions
                            but aren’t in combat, you’re roleplaying. This could be haggling
                            with a trader, describing your plan to sneak into a research station,
                            or just having a conversation with another player “in character.”
                            These situations often require skill checks, in which a player rolls a
                            20-sided die and adds her modifier from the appropriate skill (see
                            Chapter 5 for more about skills), but they can also involve spells
                            or other special abilities. Sometimes roleplaying may progress into
                            tactical combat. Game Masters should encourage players to be
                            creative and resourceful during roleplaying, while also ensuring
                            that their actions have consequences—don’t insult an excitable
                            crime boss unless you’re ready to defend yourself!
                        </p>
                        <h5 className="center-align sub-header">                            
                            Exploring
                        </h5>
                        <p>
                            Starfinder is primarily a space opera, and exploring and
                            experiencing new worlds are key parts of the game. Exploration
                            in Starfinder might involve a single space station, a new and alien
                            planet, a faraway solar system, or the vast reaches of space. It
                            might involve any aspect of roleplaying, but it always involves
                            the GM describing the new and exciting scenes the PCs uncover
                            and with which they can interact. Cultures, environments, and
                            other wonders and hazards vary wildly when PCs explore new
                            places. The setting material found in Chapter 12 can help GMs
                            describe the places the PCs venture, and the rules in Chapter 11
                            explain how to adjudicate the PCs’ adventures in strange and
                            hazardous places with regard to their statistics and abilities.
                        </p>
                        <h5 className="center-align sub-header">                            
                            Tactical Combat
                        </h5>
                        <p>
                            When the PCs confront or are accosted by a creature or character,
                            the game shifts to tactical combat. Tactical combat involves
                            characters moving around a tactical battle map, attacking
                            or using magic and other special abilities, and defending
                            themselves from their enemies. In Starfinder, attacking generally
                            involves rolling a 20-sided die, adding modifiers to the result,
                            and comparing the total to enemy statistics such as Armor
                            Class to determine whether a target is hit. When their attacks
                            hit, characters deal a variable amount of damage depending on
                            their weapons and statistics. But of course, the enemy can do
                            the same thing to them! Full details about Starfinder’s tactical
                            rules can be found in Chapter 8.
                        </p>
                        <h5 className="center-align sub-header">                            
                            Starship Combat
                        </h5>
                        <p>
                            In combat between starships, the PCs pilot their ship around a
                            starship battle map, trying to maneuver into the best position to
                            fire on their enemies without being hit themselves. Full details
                            about Starfinder’s starship combat rules can be found in Chapter 9.
                        </p>
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

HowTo.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(HowTo);
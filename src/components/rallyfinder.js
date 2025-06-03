import RallyStage from './rally-stage'
import Collapsible from './collapse-section';
import { HashLink as Link } from 'react-router-hash-link';

const RallyFinder = () => {


    //#region Page HTML
    return (
        <div className="rally-page">
            <div className="banner rally-banner">
                <img src={`${process.env.PUBLIC_URL}/images/app-bg.png`} className="banner-img" alt="" />
                <h1 className="banner-title">Battle Rally Stage Viewer</h1>
            </div>
            <div className="rally-header">
                <h2>About the Battle Rally Stage Viewer</h2>
                <p>
                    This tool was created to provide an easy way to identify Battle Rally stages by the enemy preview, and to see what gimmicks are needed to counter the stage. Stats are not present because those will increase depending on your current area. 
                    Stages with duplicate opponents and passives are only present as a single iteration here for consiceness, and as such the background on a particular stage may not be 100% accurate to what you see in game but the opponents are. 
                    Eventually, for stages made with specific sync pair(s) in mind - such as a Battle Challenge from a specific event - I also will be referring to those sync pairs as shorthand.
                </p>
                <p>
                    If a stage doesn't have a graphical preview, then I probably haven't seen it in my Battle Rally runs since I decided to start making this tool.
                    If you see a stage that isn't covered and you can get a screenshot of it, please reach out to me @adeptcs on Discord so that we can cover these more extensively.
                </p>
                <p>
                    The following stage screenshots were provided by other users:
                </p>
                <ul>
                    <li key="sages-credit">Battle Challenge (from The Light Devourer), Battle Challenge (from Galar's Poké Ball Enthusiast): @sages</li>
                    <li key="aurochs-credit">Battle Challenge (from Sub-zero - My Past, My Future): @aurochsaway</li>
                </ul>
                <h3>Jump to Section</h3>
                <Link to="#normal-stages">Areas 1-9</Link><br />
                <Link to="#ultimate-battle-stages">Area 10 (Ultimate Battles)</Link>
            </div>
            <div className="rally-stages">
                <div id="normal-stages">
                    <h1>
                        Areas 1-9
                    </h1>
                    <div className="battle-stages">
                        <h2>Champion Stadium Stages</h2>
                        <section id="champion-stadium-stages">
                            <Collapsible header="Kanto">
                                <div className="cs-stages kanto">
                                    {RallyStage("Challenge Lorelei", "", "/images/br-stages/champion-stadium", "CS_Lorelei_Electric")}
                                    {RallyStage("Challenge Lorelei", "", "/images/br-stages/champion-stadium", "CS_Lorelei_Grass")}
                                    {RallyStage("Challenge Lorelei", "", "/images/br-stages/champion-stadium", "CS_Lorelei_Fighting")}
                                    {RallyStage("Challenge Bruno", "", "/images/br-stages/champion-stadium", "CS_Bruno_Water")}
                                    {RallyStage("Challenge Bruno", "", "/images/br-stages/champion-stadium", "CS_Bruno_Ground")}
                                    {RallyStage("Challenge Bruno", "", "/images/br-stages/champion-stadium", "CS_Bruno_Flying")}
                                    {RallyStage("Challenge Bruno", "", "/images/br-stages/champion-stadium", "CS_Bruno_Psychic")}
                                    {RallyStage("Challenge Agatha", "", "/images/br-stages/champion-stadium", "CS_Agatha_Ice")}
                                    {RallyStage("Challenge Agatha", "", "/images/br-stages/champion-stadium", "CS_Agatha_Ghost")}
                                    {RallyStage("Challenge Agatha", "", "/images/br-stages/champion-stadium", "CS_Agatha_Dark")}
                                    {RallyStage("Challenge Lance", "", "/images/br-stages/champion-stadium", "CS_Lance_Dragon")}
                                    {RallyStage("Challenge Lance", "", "/images/br-stages/champion-stadium", "CS_Lance_Steel")}
                                    {RallyStage("Challenge Lance", "", "/images/br-stages/champion-stadium", "CS_Lance_Fairy")}
                                    {RallyStage("Challenge Blue", "", "/images/br-stages/champion-stadium", "CS_Blue_Fire")}
                                    {RallyStage("Challenge Blue", "", "/images/br-stages/champion-stadium", "CS_Blue_Poison")}
                                    {RallyStage("Challenge Blue", "", "/images/br-stages/champion-stadium", "CS_Blue_Bug")}
                                    {RallyStage("Challenge Blue", "", "/images/br-stages/champion-stadium", "CS_Blue_Rock")}
                                    {RallyStage("Challenge Red", "", "/images/br-stages/champion-stadium", "CS_NCRed_Fire")}
                                    {RallyStage("Challenge Red", "", "/images/br-stages/champion-stadium", "CS_NCRed_Steel")}
                                    {RallyStage("Challenge Leaf", "", "/images/br-stages/champion-stadium", "CS_NCLeaf")}
                                </div>
                            </Collapsible>
                            <Collapsible header="Johto">
                                <div className="cs-stages johto">
                                    {RallyStage("Challenge Will", "", "/images/br-stages/champion-stadium", "CS_Will_Poison")}
                                    {RallyStage("Challenge Will", "", "/images/br-stages/champion-stadium", "CS_Will_Ghost")}
                                    {RallyStage("Challenge Will", "", "/images/br-stages/champion-stadium", "CS_Will_Dark")}
                                    {RallyStage("Challenge Koga", "", "/images/br-stages/champion-stadium", "CS_Koga_Fire")}
                                    {RallyStage("Challenge Koga", "", "/images/br-stages/champion-stadium", "CS_Koga_Ice")}
                                    {RallyStage("Challenge Koga", "", "/images/br-stages/champion-stadium", "CS_Koga_Ground")}
                                    {RallyStage("Challenge Koga", "", "/images/br-stages/champion-stadium", "CS_Koga_Flying")}
                                    {RallyStage("Challenge Bruno", "", "/images/br-stages/champion-stadium", "CS_Bruno_Grass")}
                                    {RallyStage("Challenge Bruno", "", "/images/br-stages/champion-stadium", "CS_Bruno_Psychic")}
                                    {RallyStage("Challenge Bruno", "", "/images/br-stages/champion-stadium", "CS_Bruno_Fairy")}
                                    {RallyStage("Challenge Karen", "", "/images/br-stages/champion-stadium", "CS_Karen_Fighting")}
                                    {RallyStage("Challenge Karen", "", "/images/br-stages/champion-stadium", "CS_Karen_Bug")}
                                    {RallyStage("Challenge Karen", "", "/images/br-stages/champion-stadium", "CS_Karen_Rock")}
                                    {RallyStage("Challenge Lance", "", "/images/br-stages/champion-stadium", "CS_LanceCh_Water")}
                                    {RallyStage("Challenge Lance", "", "/images/br-stages/champion-stadium", "CS_LanceCh_Electric")}
                                    {RallyStage("Challenge Lance", "", "/images/br-stages/champion-stadium", "CS_LanceCh_Dragon")}
                                    {RallyStage("Challenge Lance", "", "/images/br-stages/champion-stadium", "CS_LanceCh_Steel")}
                                    {RallyStage("Challenge Silver", "", "/images/br-stages/champion-stadium", "CS_NCSilver")}
                                </div>
                            </Collapsible>
                            <Collapsible header="Hoenn">
                                <div className="cs-stages hoenn">
                                    {RallyStage("Challenge Sidney", "", "/images/br-stages/champion-stadium", "CS_Sidney_Flying")}
                                    {RallyStage("Challenge Sidney", "", "/images/br-stages/champion-stadium", "CS_Sidney_Bug")}
                                    {RallyStage("Challenge Sidney", "", "/images/br-stages/champion-stadium", "CS_Sidney_Fairy")}
                                    {RallyStage("Challenge Phoebe", "", "/images/br-stages/champion-stadium", "CS_Phoebe_Electric")}
                                    {RallyStage("Challenge Phoebe", "", "/images/br-stages/champion-stadium", "CS_Phoebe_Ghost")}
                                    {RallyStage("Challenge Phoebe", "", "/images/br-stages/champion-stadium", "CS_Phoebe_Dark")}
                                    {RallyStage("Challenge Glacia", "", "/images/br-stages/champion-stadium", "CS_Glacia_Fire")}
                                    {RallyStage("Challenge Glacia", "", "/images/br-stages/champion-stadium", "CS_Glacia_Fighting")}
                                    {RallyStage("Challenge Glacia", "", "/images/br-stages/champion-stadium", "CS_Glacia_Steel")}
                                    {RallyStage("Challenge Drake", "", "/images/br-stages/champion-stadium", "CS_Drake_Ice")}
                                    {RallyStage("Challenge Drake", "", "/images/br-stages/champion-stadium", "CS_Drake_Rock")}
                                    {RallyStage("Challenge Drake", "", "/images/br-stages/champion-stadium", "CS_Drake_Dragon")}
                                    {RallyStage("Challenge Steven", "", "/images/br-stages/champion-stadium", "CS_Steven_Water")}
                                    {RallyStage("Challenge Steven", "", "/images/br-stages/champion-stadium", "CS_Steven_Grass")}
                                    {RallyStage("Challenge Steven", "", "/images/br-stages/champion-stadium", "CS_Steven_Ground")}
                                    {RallyStage("Challenge Wallace", "", "/images/br-stages/champion-stadium", "CS_Wallace_Grass")}
                                    {RallyStage("Challenge Wallace", "", "/images/br-stages/champion-stadium", "CS_Wallace_Poison")}
                                    {RallyStage("Challenge Wallace", "", "/images/br-stages/champion-stadium", "CS_Wallace_Psychic")}
                                </div>
                            </Collapsible>
                            <Collapsible header="Sinnoh">
                                <div className="cs-stages sinnoh">
                                    {RallyStage("Challenge Aaron", "", "/images/br-stages/champion-stadium", "CS_Aaron_Fire")}
                                    {RallyStage("Challenge Aaron", "", "/images/br-stages/champion-stadium", "CS_Aaron_Electric")}
                                    {RallyStage("Challenge Aaron", "", "/images/br-stages/champion-stadium", "CS_Aaron_Ground")}
                                    {RallyStage("Challenge Bertha", "", "/images/br-stages/champion-stadium", "CS_Bertha_Grass")}
                                    {RallyStage("Challenge Bertha", "", "/images/br-stages/champion-stadium", "CS_Bertha_Ice")}
                                    {RallyStage("Challenge Bertha", "", "/images/br-stages/champion-stadium", "CS_Bertha_Steel")}
                                    {RallyStage("Challenge Flint", "", "/images/br-stages/champion-stadium", "CS_Flint_Water")}
                                    {RallyStage("Challenge Flint", "", "/images/br-stages/champion-stadium", "CS_Flint_Psychic")}
                                    {RallyStage("Challenge Flint", "", "/images/br-stages/champion-stadium", "CS_Flint_Rock")}
                                    {RallyStage("Challenge Lucian", "", "/images/br-stages/champion-stadium", "CS_Lucian_Flying")}
                                    {RallyStage("Challenge Lucian", "", "/images/br-stages/champion-stadium", "CS_Lucian_Bug")}
                                    {RallyStage("Challenge Lucian", "", "/images/br-stages/champion-stadium", "CS_Lucian_Ghost")}
                                    {RallyStage("Challenge Lucian", "", "/images/br-stages/champion-stadium", "CS_Lucian_Dark")}
                                    {RallyStage("Challenge Cynthia", "", "/images/br-stages/champion-stadium", "CS_Cynthia_Fighting")}
                                    {RallyStage("Challenge Cynthia", "", "/images/br-stages/champion-stadium", "CS_Cynthia_Poison")}
                                    {RallyStage("Challenge Cynthia", "", "/images/br-stages/champion-stadium", "CS_Cynthia_Dragon")}
                                    {RallyStage("Challenge Cynthia", "", "/images/br-stages/champion-stadium", "CS_Cynthia_Fairy")}
                                </div>
                            </Collapsible>
                            <Collapsible header="Unova">
                                <div className="cs-stages unova">
                                    {RallyStage("Challenge Grimsley", "", "/images/br-stages/champion-stadium", "CS_Grimsley_Fire")}
                                    {RallyStage("Challenge Grimsley", "", "/images/br-stages/champion-stadium", "CS_Grimsley_Grass")}
                                    {RallyStage("Challenge Grimsley", "", "/images/br-stages/champion-stadium", "CS_Grimsley_Bug")}
                                    {RallyStage("Challenge Grimsley", "", "/images/br-stages/champion-stadium", "CS_Grimsley_Steel")}
                                    {RallyStage("Challenge Marshal", "", "/images/br-stages/champion-stadium", "CS_Marshal_Poison")}
                                    {RallyStage("Challenge Marshal", "", "/images/br-stages/champion-stadium", "CS_Marshal_Flying")}
                                    {RallyStage("Challenge Marshal", "", "/images/br-stages/champion-stadium", "CS_Marshal_Psychic")}
                                    {RallyStage("Challenge Marshal", "", "/images/br-stages/champion-stadium", "CS_Marshal_Fairy")}
                                    {RallyStage("Challenge Shauntal", "", "/images/br-stages/champion-stadium", "CS_Shauntal_Water")}
                                    {RallyStage("Challenge Shauntal", "", "/images/br-stages/champion-stadium", "CS_Shauntal_Ice")}
                                    {RallyStage("Challenge Shauntal", "", "/images/br-stages/champion-stadium", "CS_Shauntal_Ground")}
                                    {RallyStage("Challenge Caitlin", "", "/images/br-stages/champion-stadium", "CS_Caitlin_Electric")}
                                    {RallyStage("Challenge Caitlin", "", "/images/br-stages/champion-stadium", "CS_Caitlin_Ghost")}
                                    {RallyStage("Challenge Caitlin", "", "/images/br-stages/champion-stadium", "CS_Caitlin_Dark")}
                                    {RallyStage("Challenge Alder", "", "/images/br-stages/champion-stadium", "CS_Alder_Rock")}
                                    {RallyStage("Challenge Iris", "", "/images/br-stages/champion-stadium", "CS_Iris_Fighting")}
                                    {RallyStage("Challenge Iris", "", "/images/br-stages/champion-stadium", "CS_Iris_Dragon")}
                                    {RallyStage("Challenge Nate", "", "/images/br-stages/champion-stadium", "CS_NCNate")}
                                    {RallyStage("Challenge Cheren", "", "/images/br-stages/champion-stadium", "CS_NCCheren")}
                                    {RallyStage("Challenge Bianca", "", "/images/br-stages/champion-stadium", "CS_NCBianca")}
                                </div>
                            </Collapsible>
                            <Collapsible header="Kalos">
                                <div className="cs-stages kalos">
                                    {RallyStage("Challenge Malva", "", "/images/br-stages/champion-stadium", "CS_Malva_Water")}
                                    {RallyStage("Challenge Malva", "", "/images/br-stages/champion-stadium", "CS_Malva_Rock")}
                                    {RallyStage("Challenge Malva", "", "/images/br-stages/champion-stadium", "CS_Malva_Dark")}
                                    {RallyStage("Challenge Siebold", "", "/images/br-stages/champion-stadium", "CS_Siebold_Electric")}
                                    {RallyStage("Challenge Siebold", "", "/images/br-stages/champion-stadium", "CS_Siebold_Grass")}
                                    {RallyStage("Challenge Siebold", "", "/images/br-stages/champion-stadium", "CS_Siebold_Bug")}
                                    {RallyStage("Challenge Wikstrom", "", "/images/br-stages/champion-stadium", "CS_Wikstrom_Fire")}
                                    {RallyStage("Challenge Wikstrom", "", "/images/br-stages/champion-stadium", "CS_Wikstrom_Fighting")}
                                    {RallyStage("Challenge Wikstrom", "", "/images/br-stages/champion-stadium", "CS_Wikstrom_Ghost")}
                                    {RallyStage("Challenge Drasna", "", "/images/br-stages/champion-stadium", "CS_Drasna_Ice")}
                                    {RallyStage("Challenge Drasna", "", "/images/br-stages/champion-stadium", "CS_Drasna_Psychic")}
                                    {RallyStage("Challenge Drasna", "", "/images/br-stages/champion-stadium", "CS_Drasna_Dragon")}
                                    {RallyStage("Challenge Drasna", "", "/images/br-stages/champion-stadium", "CS_Drasna_Fairy")}
                                    {RallyStage("Challenge Diantha", "", "/images/br-stages/champion-stadium", "CS_Diantha_Poison")}
                                    {RallyStage("Challenge Diantha", "", "/images/br-stages/champion-stadium", "CS_Diantha_Ground")}
                                    {RallyStage("Challenge Diantha", "", "/images/br-stages/champion-stadium", "CS_Diantha_Flying")}
                                    {RallyStage("Challenge Diantha", "", "/images/br-stages/champion-stadium", "CS_Diantha_Steel")}
                                    {RallyStage("Challenge Serena", "", "/images/br-stages/champion-stadium", "CS_NCSerena")}
                                    {RallyStage("Challenge Calem", "", "/images/br-stages/champion-stadium", "CS_NCCalem")}
                                </div>
                            </Collapsible>
                            <Collapsible header="Alola">
                                <div className="cs-stages alola">
                                    {RallyStage("Challenge Hala", "", "/images/br-stages/champion-stadium", "CS_Hala_Fighting")}
                                    {RallyStage("Challenge Hala", "", "/images/br-stages/champion-stadium", "CS_Hala_Flying")}
                                    {RallyStage("Challenge Hala", "", "/images/br-stages/champion-stadium", "CS_Hala_Fairy")}
                                    {RallyStage("Challenge Molayne", "", "/images/br-stages/champion-stadium", "CS_Molayne_Fire")}
                                    {RallyStage("Challenge Molayne", "", "/images/br-stages/champion-stadium", "CS_Molayne_Fighting")}
                                    {RallyStage("Challenge Molayne", "", "/images/br-stages/champion-stadium", "CS_Molayne_Ground")}
                                    {RallyStage("Challenge Olivia", "", "/images/br-stages/champion-stadium", "CS_Olivia_Water")}
                                    {RallyStage("Challenge Olivia", "", "/images/br-stages/champion-stadium", "CS_Olivia_Ground")}
                                    {RallyStage("Challenge Olivia", "", "/images/br-stages/champion-stadium", "CS_Olivia_Steel")}
                                    {RallyStage("Challenge Acerola", "", "/images/br-stages/champion-stadium", "CS_Acerola_Electric")}
                                    {RallyStage("Challenge Acerola", "", "/images/br-stages/champion-stadium", "CS_Acerola_Ghost")}
                                    {RallyStage("Challenge Acerola", "", "/images/br-stages/champion-stadium", "CS_Acerola_Dark")}
                                    {RallyStage("Challenge Kahili", "", "/images/br-stages/champion-stadium", "CS_Kahili_Ice")}
                                    {RallyStage("Challenge Kahili", "", "/images/br-stages/champion-stadium", "CS_Kahili_Psychic")}
                                    {RallyStage("Challenge Kahili", "", "/images/br-stages/champion-stadium", "CS_Kahili_Rock")}
                                    {RallyStage("Challenge Kukui", "", "/images/br-stages/champion-stadium", "CS_Kukui_Fire")}
                                    {RallyStage("Challenge Kukui", "", "/images/br-stages/champion-stadium", "CS_Kukui_Water")}
                                    {RallyStage("Challenge Kukui", "", "/images/br-stages/champion-stadium", "CS_Kukui_Grass")}
                                    {RallyStage("Challenge Hau", "", "/images/br-stages/champion-stadium", "CS_Hau_Fire")}
                                    {RallyStage("Challenge Hau", "", "/images/br-stages/champion-stadium", "CS_Hau_Poison")}
                                    {RallyStage("Challenge Hau", "", "/images/br-stages/champion-stadium", "CS_Hau_Bug")}
                                    {RallyStage("Challenge Hau", "", "/images/br-stages/champion-stadium", "CS_Hau_Dragon")}
                                </div>
                            </Collapsible>
                            <Collapsible header="Galar">
                                <div className="cs-stages galar">
                                    {RallyStage("Challenge Marnie", "", "/images/br-stages/champion-stadium", "CS_NCMarnie")}
                                    {RallyStage("Challenge Hop", "", "/images/br-stages/champion-stadium", "CS_NCHop")}
                                    {RallyStage("Challenge Bede", "", "/images/br-stages/champion-stadium", "CS_NCBede")}
                                </div>
                            </Collapsible>
                        </section>
                        <h2>Misc. Event Stages</h2>
                        <Collapsible header="Event Story Stages/Daily Extreme Battles">
                            <section id="event-stages">
                                {/*{RallyStage("Challenge Iris (from Shining Heart of Dragons)", "", "/images/br-stages/regular-stages", "Story_AltIris")}*/}
                                {RallyStage("Challenge Selene (from Hearts United)", "", "/images/br-stages/regular-stages", "Story_AnniLillie")}
                                {RallyStage("Challenge Rosa (from Hearts United)", "", "/images/br-stages/regular-stages", "Story_AnniN")}
                                {RallyStage("Challenge Hilda (from Hearts United)", "", "/images/br-stages/regular-stages", "Story_AnniSteven")}
                                {RallyStage("Challenge Pasio's Trainers (from Midnight Battle Ball)", "", "/images/br-stages/regular-stages", "Story_FallMortyCaitlin")}
                                {RallyStage("Daily Extreme Battle (from Midnight Battle Ball)", "", "/images/br-stages/regular-stages", "DEB_FallMortyCaitlin")}
                                {RallyStage("Challenge Guzma (from Diantha's Battle Prep)", "", "/images/br-stages/regular-stages", "Story_SCDiantha")}
                                {RallyStage("Daily Extreme Battle (from Diantha's Battle Prep)", "", "/images/br-stages/regular-stages", "DEB_SCDiantha")}
                                {RallyStage("Challenge Jasmine (from Hilda's Battle Prep)", "", "/images/br-stages/regular-stages", "Story_SCHilda")}
                                {RallyStage("Daily Extreme Battle (from Hilda's Battle Prep)", "", "/images/br-stages/regular-stages", "DEB_SCHilda")}
                                {RallyStage("Challenge Diantha (from Guzma's Battle Prep)", "", "/images/br-stages/regular-stages", "Story_SCGuzma")}
                                {RallyStage("Daily Extreme Battle (from Guzma's Battle Prep)", "", "/images/br-stages/regular-stages", "DEB_SCGuzma")}
                                {RallyStage("Challenge Hilda (from Jasmine's Battle Prep)", "", "/images/br-stages/regular-stages", "Story_SCJasmine")}
                                {RallyStage("Daily Extreme Battle (from Jasmine's Battle Prep)", "", "/images/br-stages/regular-stages", "DEB_SCJasmine")}
                                {RallyStage("Decoration Hunting (from Winter Wishes)", "", "/images/br-stages/regular-stages", "Story_HolNessaLeon")}
                                {RallyStage("Challenge Team Break (from The Light Devourer)", "", "/images/br-stages/regular-stages", "Story_SSLusamine")}
                                {RallyStage("Challenge Flint (from New Year and New Friends)", "", "/images/br-stages/regular-stages", "Story_NYVolknerSabrina")}
                                {RallyStage("Challenge Team Break (from Sweet Shenanigans)", "", "/images/br-stages/regular-stages", "Story_PalMarnieBea")}
                                {RallyStage("Mesmerize with Psychic-Type Moves! (from Pasio Friendiversary)", "", "/images/br-stages/regular-stages", "Story_AnniMay")}
                                {RallyStage("Soar with Flying-Type Moves! (from Pasio Friendiversary)", "", "/images/br-stages/regular-stages", "Story_AnniSkyla")}
                                {RallyStage("Rage with Dragon-Type Moves! (from Pasio Friendiversary)", "", "/images/br-stages/regular-stages", "Story_AnniRaihan")}
                                {RallyStage("Challenge Team Break (from Verdant Guardian)", "", "/images/br-stages/regular-stages", "Story_SSSerena")}
                                {RallyStage("Challenge Pasio's Trainers (from Lillie's Party Prep - An Eye for Beauty)", "", "/images/br-stages/regular-stages", "Story_SCLillie")}
                                {RallyStage("Challenge Pasio's Trainers (from Sonia's Party Prep - The Finest Tea)", "", "/images/br-stages/regular-stages", "Story_SCSonia")}
                                {RallyStage("Challenge Pasio's Trainers (from Ingo's Party Prep - Way of the Butler)", "", "/images/br-stages/regular-stages", "Story_SCIngo")}
                                {RallyStage("Challenge Pasio's Trainers (from Emmet's Party Prep - Heart and Soul)", "", "/images/br-stages/regular-stages", "Story_SCEmmet")}
                                {RallyStage("Challenge Pasio's Trainers (from A Golden Future)", "", "/images/br-stages/regular-stages", "Story_SSMorty")}
                                {RallyStage("Challenge Team Break (from Revel in Rivalry)", "", "/images/br-stages/regular-stages", "Story_Bede")}
                                {RallyStage("Challenge Team Break (from Summer Nights & Wishing Stars)", "", "/images/br-stages/regular-stages", "Story_SumNHilda")}
                                {RallyStage("Challenge Chuck (from Strongest Fighters)", "", "/images/br-stages/regular-stages", "Story_SSKorrinaDojoGloria")}
                                {RallyStage("Rosa's Sight-Seeing Challenge! (from Super Tour Guide Rosa)", "", "/images/br-stages/regular-stages", "Story_SCRosa")}
                                {RallyStage("Challenge the Rocket Grunts (from Threads of Strength)", "", "/images/br-stages/regular-stages", "Story_AuraCynthiaThunderboltRed")}
                                {RallyStage("Challenge Pasio's Trainers (from Melancholy Wally)", "", "/images/br-stages/regular-stages", "Story_SSWally")}
                                {RallyStage("Daily Extreme Battle (from Melancholy Wally)", "", "/images/br-stages/regular-stages", "DEB_SSWally")}
                                {RallyStage("Challenge Pasio's Trainers (from Otherworldly Encounter)", "", "/images/br-stages/regular-stages", "Story_FallIrisAllister")}
                                {RallyStage("Training with Gordie (from Severely Strained Relations)", "", "/images/br-stages/regular-stages", "Story_Gordie")}
                                {RallyStage("Training with Melony (from Severely Strained Relations)", "", "/images/br-stages/regular-stages", "Story_Melony")}
                                {RallyStage("Training with Victor (from Severely Strained Relations)", "", "/images/br-stages/regular-stages", "Story_Victor")}
                                {RallyStage("Challenge Jasmine (from Leaders of a New Era)", "", "/images/br-stages/regular-stages", "Story_NCSerenaCalem")}
                                {RallyStage("Challenge Siebold (from Shine a Gentle Light)", "", "/images/br-stages/regular-stages", "Story_HolWhitneyJasmine")}
                                {RallyStage("Challenge Bede (from Gather Up! Dream Duo!", "", "/images/br-stages/regular-stages", "Story_NYLisiaDawn")}
                                {RallyStage("Challenge Pasio's Trainers (from Chef's Heartful Delivery)", "", "/images/br-stages/regular-stages", "Story_PalElesaMallow")}
                                {RallyStage("Challenge the Ace Trainers (from Fight for the Future Together)", "", "/images/br-stages/regular-stages", "Story_NCMarnieHopBede")}
                                {RallyStage("Challenge Elio (from Galar's Poké Ball Enthusiast)", "", "/images/br-stages/regular-stages", "Story_BallGuy")}
                                {RallyStage("Challenge Pasio's Trainers (from Solve the Case! Part 1)", "", "/images/br-stages/regular-stages", "Story_SCShaunaSteven")}
                                {RallyStage("Challenge Team Break (from Solve the Case! Part 2)", "", "/images/br-stages/regular-stages", "Story_SCLyraZinnia")}
                                {RallyStage("Challenge Pasio's Trainers (from Travelers from a Distant Past)", "", "/images/br-stages/regular-stages", "Story_AdamanIrida")}
                                {RallyStage("Challenge Pasio's Trainers (from Chase the Northern Wind)", "", "/images/br-stages/regular-stages", "Story_EusineSSSilver")}
                                {RallyStage("Challenge Pasio's Trainers (from Twin Stars Far Apart)", "", "/images/br-stages/regular-stages", "Story_SumLizaTate")}
                                {RallyStage("Challenge Pasio's Trainers (from We Should Battle!)", "", "/images/br-stages/regular-stages", "Story_Nemona")}
                                {RallyStage("Challenge Pasio's Trainers (from Three Trainers, Three Minds)", "", "/images/br-stages/regular-stages", "Story_NCRedLeafBlue")}
                                {RallyStage("Challenge Norman (from Tower Tycoon and Hall Matron)", "", "/images/br-stages/regular-stages", "Story_PalmerArgenta")}
                                {RallyStage("Challenge Cynthia (from Together in an Unknown Land)", "", "/images/br-stages/regular-stages", "Story_ReiAkari")}
                                {RallyStage("Challenge Pasio's Trainers (from The Haunted Museum)", "", "/images/br-stages/regular-stages", "Story_FallRoxannePhoebe")}
                                {RallyStage("Challenge Pasio's Trainers (from Who's the Best Singer?)", "", "/images/br-stages/regular-stages", "Story_SSRoxiePiers")}
                                {RallyStage("Challenge Pasio's Trainers (from Let's Go In Search of Wonder)", "", "/images/br-stages/regular-stages", "Story_Elaine")}
                                {RallyStage("Challenge N (from A Pure and Touching Heart)", "", "/images/br-stages/regular-stages", "Story_NCNate")}
                                {RallyStage("Challenge Hugh (from A Touching Sepia-Toned Song)", "", "/images/br-stages/regular-stages", "Story_NCRosa")}
                                {RallyStage("Challenge Siebold (from Focus on the Shining Shot!)", "", "/images/br-stages/regular-stages", "Story_HolSycamoreViola")}
                                {RallyStage("Chalenge Lillie (from Rising New Year's Resolutions)", "", "/images/br-stages/regular-stages", "Story_NYWallaceClair")}
                                {RallyStage("Battle: Premium Guest (from The Electrifying Influencer)", "", "/images/br-stages/regular-stages", "Story_Iono")}
                                {RallyStage("Challenge Pasio's Trainers (from Sub-zero - My Past, My Future)", "", "/images/br-stages/regular-stages", "Story_Grusha")}
                                {RallyStage("Challenge Lance (from Honing One's Love)", "", "/images/br-stages/regular-stages", "ChallengeLance_GeetaSilver")}
                                {RallyStage("Challenge Pasio's Trainers (from The Power of Dance)", "", "/images/br-stages/regular-stages", "ChallengePasio_SCAdamanIrida")}
                                {RallyStage("Challenge Pasio's Trainers (from Researcher and Seeker)", "", "/images/br-stages/regular-stages", "ChallengePasio_JacqVolo")}
                                {RallyStage("Challenge the Tag Team (from New Heroes Are Born)", "", "/images/br-stages/regular-stages", "ChallengeTagTeam_SCBarrySelene")}
                                {RallyStage("Challenge Whitney (from Good Ol' Rika Here)", "", "/images/br-stages/regular-stages", "ChallengeWhitney_Rika")}
                                {RallyStage("Challenge the Performers (from Infamous Pokéstar Villains)", "", "/images/br-stages/regular-stages", "ChallengePerformers_BrycenmanBellelba")}
                                {RallyStage("Daily Extreme Battle (from Infamous Pokéstar Villains)", "", "/images/br-stages/regular-stages", "DEB_BrycenmanBellelba")}
                                {RallyStage("Challenge Pasio's Trainers (from One More Step to a New Path)", "", "/images/br-stages/regular-stages", "ChallengePasio_NCBiancaCheren")}
                                {RallyStage("Challenge Pasio's Trainers (from Middle-Aged Opposites)", "", "/images/br-stages/regular-stages", "ChallengePasio_LarryKabu")}
                                {RallyStage("Challenge Lana (from Exciting Treasure Hunt)", "", "/images/br-stages/regular-stages", "ChallengeLana_SumAcerolaGardenia")}
                                {RallyStage("Challenge Erika (from Isle Disciples, Arena Tycoon)", "", "/images/br-stages/regular-stages", "ChallengeErika_AveryKlaraGreta")}
                                {RallyStage("Challenge Pasio's Trainers (from Ultra Beast Meet-and-Greet)", "", "/images/br-stages/regular-stages", "ChallengePasio_AltElioSelene")}
                                {RallyStage("Challenge N (from Peculiar Pokémon-Loving Pal)", "", "/images/br-stages/regular-stages", "ChallengeN_Arven")}
                                {RallyStage("Challenge Arven (from Ancient Visitor)", "", "/images/br-stages/regular-stages", "ChallengeArven_SSNemona")}
                                {RallyStage("Challenge Pasio's Trainers (from Golden Bonds on Pasio)", "", "/images/br-stages/regular-stages", "ChallengePasio_SSLear")}
                                {RallyStage("Challenge Rei (from Arceus Arc Celebration: Cynthia/Steven/Lance)", "", "/images/br-stages/regular-stages", "ChallengeRei_ArcCynthiaStevenLance")}
                                {RallyStage("Challenge the Live Stream Team (from Festive Sun and Moon)", "", "/images/br-stages/regular-stages", "ChallengeIono_A24Lillie")}
                                {RallyStage("Daily Extreme Battle (from Festive Sun and Moon)", "", "/images/br-stages/regular-stages", "DEB_A24Lillie")}
                            </section>
                        </Collapsible>
                        <h2>Battle Challenges</h2>
                        <section id="battle-challenges">
                            {/*{RallyStage("Full Force Battle (from Shining Heart of Dragons", "", "/images/br-stages/battle-challenges", "FFB_CIris")}*/}
                            {RallyStage("Battle Challenge (from Hearts United)", "", "/images/br-stages/battle-challenges", "BC_AnniStevenNLillie")}
                            {RallyStage("Battle Challenge (from Midnight Battle Ball)", "", "/images/br-stages/battle-challenges", "BC_FallMortyCaitlin")}
                            {RallyStage("Grimsley's Battle Challenge! (from Poké War Games)", "", "/images/br-stages/battle-challenges", "BC_SCHildaDiantha")}
                            {RallyStage("Glacia's Battle Challenge! (from Poké War Games)", "", "/images/br-stages/battle-challenges", "BC_SCGuzmaJasmine")}
                            {RallyStage("Battle Challenge (from The Light Devourer)", "", "/images/br-stages/battle-challenges", "BC_SSLusamine")}
                            {RallyStage("Battle Challenge (from Winter Wishes)", "", "/images/br-stages/battle-challenges", "BC_HolNessaLeon")}
                            {RallyStage("Battle Challenge (from New Year and New Friends)", "", "/images/br-stages/battle-challenges", "BC_NYVolknerSabrina")}
                            {RallyStage("Battle Challenge (from Sweet Shenanigans)", "", "/images/br-stages/battle-challenges", "BC_PalBeaMarnie")}
                            {RallyStage("Battle Challenge (from Pasio Friendiversary)", "", "/images/br-stages/battle-challenges", "BC_AnniMaySkylaRaihan")}
                            {RallyStage("Battle Challenge (from Verdant Guardian)", "", "/images/br-stages/battle-challenges", "BC_SSSerena")}
                            {RallyStage("Cress's Battle Challenge (from Curious Tea Party)", "", "/images/br-stages/battle-challenges", "BC_SCLillieSonia")}
                            {RallyStage("Cilan's Battle Challenge (from Curious Tea Party)", "", "/images/br-stages/battle-challenges", "BC_SCIngoEmmet")}
                            {RallyStage("Battle Challenge (from A Golden Future)", "", "/images/br-stages/battle-challenges", "BC_SSMorty")}
                            {RallyStage("Battle Challenge (from Revel in Rivalry)", "", "/images/br-stages/battle-challenges", "BC_Bede")}
                            {RallyStage("Battle Challenge (from Summer Nights & Wishing Stars)", "", "/images/br-stages/battle-challenges", "BC_SummerNHilda")}
                            {RallyStage("Battle Challenge (from Strongest Fighters)", "", "/images/br-stages/battle-challenges", "BC_SSKorrinaDojoGloria")}
                            {RallyStage("Battle Challenge (from Threads of Strength)", "", "/images/br-stages/battle-challenges", "BC_AuraCynthiaThunderboltRed")}
                            {RallyStage("Battle Challenge (from Super Tour Guide Rosa)", "", "/images/br-stages/battle-challenges", "BC_SCRosa")}
                            {RallyStage("Battle Challenge (from Melancholy Wally)", "", "/images/br-stages/battle-challenges", "BC_SSWally")}
                            {RallyStage("Battle Challenge (from Otherworldly Encounter)", "", "/images/br-stages/battle-challenges", "BC_FallIrisAllister")}
                            {RallyStage("Melony's Battle Challenge!", "", "/images/br-stages/battle-challenges", "BC_Gordie")}
                            {RallyStage("Raihan's Battle Challenge!", "", "/images/br-stages/battle-challenges", "BC_Melony")}
                            {RallyStage("Nessa's Battle Challenge!", "", "/images/br-stages/battle-challenges", "BC_Victor")}
                            {RallyStage("Battle Challenge (from Leaders of a New Era)", "", "/images/br-stages/battle-challenges", "BC_NCSerenaCalem")}
                            {RallyStage("Battle Challenge (from Shine a Gentle Light)", "", "/images/br-stages/battle-challenges", "BC_HolWhitneyJasmine")}
                            {RallyStage("Battle Challenge (from Gather Up! Dream Duo!)", "", "/images/br-stages/battle-challenges", "BC_NYDawnLisia")}
                            {RallyStage("Battle Challenge (from Chef's Heartful Delivery", "", "/images/br-stages/battle-challenges", "BC_PalElesaMallow")}
                            {RallyStage("Battle Challenge (from Fight for the Future Together)", "", "/images/br-stages/battle-challenges", "BC_NCMarnieHopBede")}
                            {RallyStage("Battle Challenge (from Galar's Poké Ball Enthusiast)", "", "/images/br-stages/battle-challenges", "BC_BallGuy")}
                            {RallyStage("Battle Challenge (from Solve the Case! Part 1)", "", "/images/br-stages/battle-challenges", "BC_SCShaunaSteven")}
                            {RallyStage("Battle Challenge (from Solve the Case! Part 2)", "", "/images/br-stages/battle-challenges", "BC_SCZinniaLyra")}
                            {RallyStage("Battle Challenge (from Travelers from a Distant Past)", "", "/images/br-stages/battle-challenges", "BC_AdamanIrida")}
                            {RallyStage("Battle Challenge (from Chase the Northern Wind)", "", "/images/br-stages/battle-challenges", "BC_EusineSSSilver")}
                            {RallyStage("Battle Challenge (from Twin Stars Far Apart)", "", "/images/br-stages/battle-challenges", "BC_SumLizaTate")}
                            {RallyStage("Battle Challenge (from We Should Battle!)", "", "/images/br-stages/battle-challenges", "BC_Nemona")}
                            {RallyStage("Battle Challenge (from Lamenting a Millennium)", "", "/images/br-stages/battle-challenges", "BC_RoseOleana")}
                            {RallyStage("Battle Challenge (from Three Trainers, Three Minds)", "", "/images/br-stages/battle-challenges", "BC_NCRedLeafBlue")}
                            {RallyStage("Battle Challenge (from Together in an Unknown Land)", "", "/images/br-stages/battle-challenges", "BC_ReiAkari")}
                            {RallyStage("Battle Challenge (from The Haunted Museum)", "", "/images/br-stages/battle-challenges", "BC_FallRoxannePhoebe")}
                            {RallyStage("Battle Challenge (from Who's the Best Singer?)", "", "/images/br-stages/battle-challenges", "BC_SSRoxiePiers")}
                            {RallyStage("Battle Challenge (from Let's Go in Search of Wonder)", "", "/images/br-stages/battle-challenges", "BC_Elaine")}
                            {RallyStage("Battle Challenge (from A Pure and Touching Heart)", "", "/images/br-stages/battle-challenges", "BC_NCNate")}
                            {RallyStage("Battle Challenge (from a Touching Sepia-Toned Song)", "", "/images/br-stages/battle-challenges", "BC_NCRosa")}
                            {RallyStage("Battle Challenge (from Focus on the Shining Shot!)", "", "/images/br-stages/battle-challenges", "BC_HolSycamoreViola")}
                            {RallyStage("Battle Challenge (from Rising New Year's Resolutions)", "", "/images/br-stages/battle-challenges", "BC_NYWallaceClair")}
                            {RallyStage("Battle Challenge (from The Electrifying Influencer)", "", "/images/br-stages/battle-challenges", "BC_Iono")}
                            {RallyStage("Battle Challenge (from Sub-zero - My Past, My Future)", "", "/images/br-stages/battle-challenges", "BC_Grusha")}
                            {RallyStage("Battle Challenge (from Honing One's Love)", "", "/images/br-stages/battle-challenges", "BC_GeetaSilver")}
                            {RallyStage("Battle Challenge (from The Power of Dance)", "", "/images/br-stages/battle-challenges", "BC_SCAdamanIrida")}
                            {RallyStage("Battle Challenge (from Researcher and Seeker)", "", "/images/br-stages/battle-challenges", "BC_JacqVolo")}
                            {RallyStage("Battle Challenge (from New Heroes Are Born)", "", "/images/br-stages/battle-challenges", "BC_SCBarrySelene")}
                            {RallyStage("Battle Challenge (from Good Ol' Rika Here)", "", "/images/br-stages/battle-challenges", "BC_Rika")}
                            {RallyStage("Battle Challenge (from Infamous Pokéstar Villains)", "", "/images/br-stages/battle-challenges", "BC_BrycenmanBellelba")}
                            {RallyStage("Battle Challenge (from One More Step to a New Path)", "", "/images/br-stages/battle-challenges", "BC_NCBiancaCheren")}
                            {RallyStage("Battle Challenge (from Middle-Aged Opposites)", "", "/images/br-stages/battle-challenges", "BC_LarryKabu")}
                            {RallyStage("Battle Challenge (from Exciting Treasure Hunt)", "", "/images/br-stages/battle-challenges", "BC_SumAcerolaGardenia")}
                            {RallyStage("Battle Challenge (from Isle Disciples, Arena Tycoon, Klara and Avery's battle)", "", "/images/br-stages/battle-challenges", "BC_AveryKlara")}
                            {RallyStage("Battle Challenge (from Isle Disciples, Arena Tycoon, Greta's battle)", "", "/images/br-stages/battle-challenges", "BC_Greta")},
                            {RallyStage("Battle Challenge (from Ultra Beast Meet-and-Greet)", "", "/images/br-stages/battle-challenges", "BC_AltElioSelene")}
                            {RallyStage("Battle Challenge (from Peculiar Pokémon-Loving Pal)", "", "/images/br-stages/battle-challenges", "BC_Arven")}
                            {RallyStage("Battle Challenge (from Ancient Visitor)", "", "/images/br-stages/battle-challenges", "BC_SSNemona")}
                            {RallyStage("Battle Challenge (from Golden Bonds on Pasio)", "", "/images/br-stages/battle-challenges", "BC_SSLear")}
                            {RallyStage("Battle Challenge (from Arceus Arc Celebration: Cynthia/Steven/Lance)", "", "/images/br-stages/battle-challenges", "BC_ArcCynthiaStevenLance")}
                        </section>
                        <h2>Exclusive Battle Rally Stages</h2>
                        <section id="rally-exclusives">
                            {RallyStage("Lucky Stage (cannot appear in Area 1)", "lucky-area", "/images/br-stages/regular-stages", "Lucky_Area")}
                        </section>
                    </div>
                </div>
                <div id="ultimate-battle-stages">
                    <h1>
                        Area 10 (Ultimate Battles)
                    </h1>
                    <div className="battle-stages">
                        <section id="ultimate-battles">
                            {RallyStage("Challenge a Super Serious Anabel", "ultimate-battle anabel sinnoh", "/images/br-stages/ultimate-battles", "Anabel_UB")}
                            {RallyStage("Challenge a Super Serious Argenta", "ultimate-battle argenta sinnoh", "/images/br-stages/ultimate-battles", "Argenta_UB")}
                            {RallyStage("Challenge a Super Serious Darach", "ultimate-battle darach sinnoh", "/images/br-stages/ultimate-battles", "Darach_UB")}
                            {RallyStage("Challenge a Super Serious Evelyn", "ultimate-battle evelyn kalos", "/images/br-stages/ultimate-battles", "Evelyn_UB")}
                            {RallyStage("Challenge a Super Serious Giovanni", "ultimate-battle giovanni kanto", "/images/br-stages/ultimate-battles", "Giovanni_UB")}
                            {RallyStage("Challenge a Super Serious Leon", "ultimate-battle leon galar", "/images/br-stages/ultimate-battles", "Leon_UB")}
                            {RallyStage("Challenge a Super Serious Lucy", "ultimate-battle lucy hoenn", "/images/br-stages/ultimate-battles", "Lucy_UB")}
                            {RallyStage("Challenge a Super Serious Masked Royal", "ultimate-battle kukui alola", "/images/br-stages/ultimate-battles", "MaskedRoyal_UB")}
                            {RallyStage("Challenge a Super Serious Nemona", "ultimate-battle nemona paldea", "/images/br-stages/ultimate-battles", "Nemona_UB")}
                            {RallyStage("Challenge a Super Serious Nita", "ultimate-battle nita kalos", "/images/br-stages/ultimate-battles", "Nita_UB")}
                            {RallyStage("Challenge a Super Serious Noland", "ultimate-battle noland hoenn", "/images/br-stages/ultimate-battles", "Noland_UB")}
                            {RallyStage("Challenge a Super Serious Palmer", "ultimate-battle palmer sinnoh", "/images/br-stages/ultimate-battles", "Palmer_UB")}
                            {RallyStage("Challenge a Super Serious Thorton", "ultimate-battle thorton sinnoh", "/images/br-stages/ultimate-battles", "Thorton_UB")}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )

    //#endregion
};

export default RallyFinder;
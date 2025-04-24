import RallyStage from './rally-stage'
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
                    This tool was created to provide an easy way to identify Battle Rally stages by the enemy preview, and to see what gimmicks are needed to counter the stage.
                    If a stage is made with specific sync pair(s) in mind - such as a Battle Challenge from a specific event - I also refer to those sync pairs as shorthand.
                </p>
                <p>
                    If a stage doesn't have a graphical preview, then I probably haven't seen it in my Battle Rally runs since I decided to start making this tool.
                    If you see a stage that isn't covered and you can get a screenshot of it, please reach out to me @adeptcs on Discord so that we can cover these more extensively.
                </p>
                <h3>Jump to Section</h3>
                <Link to="#normal-stages">Areas 1-9</Link>
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
                            {RallyStage("Take on a Tenacious Silver!", "", "/images/br-stages/champion-stadium", "SBE_NCSilver")}
                        </section>
                        <h2>Misc. Event Stages</h2>
                        <section id="event-stages">
                            {RallyStage("Challenge Lance! (from Honing One's Love)", "", "/images/br-stages/regular-stages", "ChallengeLance_GeetaSilver")}
                            {RallyStage("Challenge Pasio's Trainers (from The Power of Dance)", "", "/images/br-stages/regular-stages", "ChallengePasio_SCAdamanIrida")}
                            {RallyStage("Challenge Pasio's Trainers (from Researcher and Seeker)", "", "/images/br-stages/regular-stages", "ChallengePasio_JacqVolo")}
                            {RallyStage("Challenge the Tag Team (from New Heroes Are Born)", "", "/images/br-stages/regular-stages", "ChallengeTagTeam_SCBarrySelene")}
                            {RallyStage("Challenge Whitney (from Good Ol' Rika Here)", "", "/images/br-stages/regular-stages", "ChallengeWhitney_Rika")}
                            {RallyStage("Challenge the Performers (from Infamous Pokéstar Villains)", "", "/images/br-stages/regular-stages", "ChallengePerformers_BrycenmanBellelba")}
                            {RallyStage("Challenge Pasio's Trainers (from One More Step to a New Path)", "", "/images/br-stages/regular-stages", "ChallengePasio_NCBiancaCheren")}
                            {RallyStage("Challenge Pasio's Trainers (from Middle-Aged Opposites)", "", "/images/br-stages/regular-stages", "ChallengePasio_LarryKabu")}
                            {RallyStage("Challenge Lana (from Exciting Treasure Hunt)", "", "/images/br-stages/regular-stages", "ChallengeLana_SumAcerolaGardenia")}
                            {RallyStage("Challenge Erika (from Isle Disciples, Arena Tycoon)", "", "/images/br-stages/regular-stages", "ChallengeErika_AveryKlaraGreta")}
                            {RallyStage("Challenge Pasio's Trainers (from Ultra Beast Meet-and-Greet)", "", "/images/br-stages/regular-stages", "ChallengePasio_AltElioSelene")}
                            {RallyStage("Challenge N (from Peculiar Pokémon-Loving Pal)", "", "/images/br-stages/regular-stages", "ChallengeN_Arven")}
                            {RallyStage("Challenge Arven (from Ancient Visitor)", "", "/images/br-stages/regular-stages", "ChallengeArven_SSNemona")}
                            {RallyStage("Challenge Pasio's Trainers (from Golden Bonds on Pasio)", "", "/images/br-stages/regular-stages", "ChallengePasio_SSLear")}
                            {RallyStage("Challenge Rei (from Arceus Arc Celebration: Special Battle Event", "", "/images/br-stages/regular-stages", "ChallengeRei_ArcSuits")}
                            {RallyStage("Challenge the Live Stream Team (from Festive Sun and Moon)", "", "/images/br-stages/regular-stages", "ChallengeIono_A24Lillie")}
                            {RallyStage("Daily Extreme Battle (from Festive Sun and Moon)", "", "/images/br-stages/regular-stages", "DEB_A24Lillie")}
                        </section>
                        <h2>Battle Challenges</h2>
                        <section id="battle-challenges">
                            {RallyStage("Battle Challenge (from Honing One's Love)", "", "/images/br-stages/battle-challenges", "BC_GeetaSilver")}
                            {RallyStage("Battle Challenge (from The Power of Dance)", "", "/images/br-stages/battle-challenges", "BC_SCAdamanIrida")}
                            {RallyStage("Battle Challenge (from Researcher and Seeker)", "", "/images/br-stages/battle-challenges", "BC_JacqVolo")}
                            {RallyStage("Battle Challenge (from New Heroes Are Born)", "", "/images/br-stages/battle-challenges", "BC_SCBarrySelene")}
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
import TypeTower from './type-tower';

const Tower = () => {

    //#region Page HTML
    return (
        <div className="tower-page">
            <div className="banner tower-banner">
                <img src={`${process.env.PUBLIC_URL}/images/app-bg.png`} className="banner-img" alt="" />
                <h1 className="banner-title">Pasio Towers</h1>
            </div>
            <div className="rally-header">
                <h2>About the Pasio Tower Guide</h2>
                <p>
                    This is a guide for the new Pasio Tower gamemode as of August 2025. Each tower has 30 floors which cost 1 attempt (replenished every 8 hours) to enter and only consume attempts when successfully completing a stage for the first time. 
                    Each tower has a consistent lineup across all players, so what you see here is what you would see in game. This guide has full stage info for each battle, since stats scale up predictably as well.
                </p>
                <p>
                    This document aims to cover everything you need to know about what Pasio Tower is and covers the gamemode at large. For a guide on notable sync pairs for each type and context-agnostic recommendation on which type towers have better free tools available for deep progression, please consult <a href="https://docs.google.com/spreadsheets/d/1-U9uLAUcKaXQcf45YAxcxzP7mFoY6N2wSZQN06gy2hk/edit?usp=sharing">Maelmc's Pasio Tower spreadsheet.</a>
                </p>
                <p>
                    I pushed this guide out very quickly thanks to collaboration with the following users in r/PokemonMasters:
                </p>
                <ul>
                    <li key="adept-credit">@adeptcs: Fire, Steel</li>
                    <li key="mpoleons-credit">@mpoleons: Water, Ghost</li>
                    <li key="colt45x2-credit">@colt45x2: Electric</li>
                    <li key="rei-credit">@rei_hunter: Grass</li>
                    <li key="geass-credit">@geass280: Ice</li>
                    <li key="gozzagunners-credit">@gozagunners: Fighting</li>
                    <li key="scorp-credit">@scorp9_: Poison</li>
                    <li key="xxmrsummersxx-credit">@xxmrsummersxx: Ground, Fairy</li>
                    <li key="doomthe-credit">@doomthe: Flying</li>
                    <li key="espeon-credit">@espeon_196: Psychic</li>
                    <li key="dm0500-credit">@dm0500: Bug</li>
                    <li key="theman0451-credit">@theman0451: Rock</li>
                    <li key="deltadragon117-credit">@deltadragon117: Dragon</li>
                    <li key="larwive-credit">@larwive: Dark</li>
                    <li key="maelmc-credit">@maelmc: Normal</li>
                </ul>
            </div>
            <div className="tower-content">
                {TypeTower("fire")}
                {TypeTower("water")}
                {TypeTower("electric")}
                {TypeTower("grass")}
                {TypeTower("ice")}
                {TypeTower("fighting")}
                {TypeTower("poison")}
                {TypeTower("ground")}
                {TypeTower("flying")}
                {TypeTower("psychic")}
                {TypeTower("bug")}
                {TypeTower("rock")}
                {TypeTower("ghost")}
                {TypeTower("dragon")}
                {TypeTower("dark")}
                {TypeTower("steel")}
                {TypeTower("fairy")}
                {TypeTower("normal")}
            </div>
        </div>
    );
    //#endregion
}

export default Tower;
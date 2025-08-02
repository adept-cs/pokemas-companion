import * as TowerKey from './pasio-tower.json';
import * as Stages from './pasio-tower-stage.json';
import * as StageStats from './pasio-tower-stage-stats.json';
import * as translations from './passive-translations.json';
import * as pokemonUrls from './pokemon-icons.json';
import { Tooltip } from 'react-tooltip';
import Collapsible from './collapse-section';
import $ from 'jquery';

const TypeTower = (type) => {
    const tower = TowerKey[type];

    const MinHard = 1;
    const MinVeryHard = 3;
    const MinSuperHard = 5;
    const MinUltraHard = 10;
    const MinExpert = 15;
    const MinMaster = 20;

    function GetSuffix(floor) {
        if (floor >= MinMaster) {
            return "_M";
        }
        if (floor >= MinExpert) {
            return "_Ex";
        }
        if (floor >= MinUltraHard) {
            return "_UH";
        }
        if (floor >= MinSuperHard) {
            return "_SH"
        }
        if (floor >= MinVeryHard) {
            return "_VH";
        }
        return "_H";
    }

    function GetTargetInfo(object, isCenter, floor) {
        return {
            "name": object["name"],
            "weakness": object["weakness"],
            "moves": object["moves"].map(function (move, index) { return getMoveDiv(move, index)}),
            "passives": object["passives"].map(function (passive) { return getPassiveDiv(passive); }),
            "stats": StageStats[floor][isCenter ? "center" : "sides"]
        }
    }

    function GetStatTable(stats) {
        return (
            <table className="stats-table">
                <thead>
                    <tr>
                        <th scope="col">Stat</th>
                        <th scope="col">Value</th>
                        <th scope="col">Mitigation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hp-row">
                        <th><img src={`${process.env.PUBLIC_URL}/images/misc/hp.png`} alt="HP" className="stat-icon"></img></th>
                        <th>{stats["HP"]}</th>
                        <th>-</th>
                    </tr>
                    <tr className="attack-row">
                        <th><img src={`${process.env.PUBLIC_URL}/images/misc/attack.png`} alt="Attack" className="stat-icon"></img></th>
                        <th>{stats["Attacks"]}</th>
                        <th>5</th>
                    </tr>
                    <tr className="defense-row">
                        <th><img src={`${process.env.PUBLIC_URL}/images/misc/defense.png`} alt="Defense" className="stat-icon"></img></th>
                        <th>{stats["Defenses"]}</th>
                        <th>5</th>
                    </tr>
                    <tr className="spatk-row">
                        <th><img src={`${process.env.PUBLIC_URL}/images/misc/spatk.png`} alt="Sp. Atk" className="stat-icon"></img></th>
                        <th>{stats["Attacks"]}</th>
                        <th>5</th>
                    </tr>
                    <tr className="spdef-row">
                        <th><img src={`${process.env.PUBLIC_URL}/images/misc/spdef.png`} alt="Sp. Def" className="stat-icon"></img></th>
                        <th>{stats["Defenses"]}</th>
                        <th>5</th>
                    </tr>
                    <tr className="speed-row">
                        <th><img src={`${process.env.PUBLIC_URL}/images/misc/speed.png`} alt="Speed" className="stat-icon"></img></th>
                        <th>{stats["Speed"]}</th>
                        <th>5</th>
                    </tr>
                    <tr className="accuracy-row">
                        <th><img src={`${process.env.PUBLIC_URL}/images/misc/accuracy.png`} alt="Accuracy" className="stat-icon"></img></th>
                        <th>-</th>
                        <th>5</th>
                    </tr>
                    <tr className="evasiveness-row">
                        <th><img src={`${process.env.PUBLIC_URL}/images/misc/evasiveness.png`} alt="Evasivness" className="stat-icon"></img></th>
                        <th>-</th>
                        <th>5</th>
                    </tr>
                </tbody>
            </table>
        )
    }

    function GetStageParameter(floorNumber) {
        switch (floorNumber) {
            case 15:
            case 18:
            case 21:
            case 24:
            case 27:
                return "Opponents take no damage from special attacks.";
            case 16:
            case 19:
            case 22:
            case 25:
            case 28:
                return "Opponents take no damage from physical attacks.";
            case 17:
            case 23:
            case 26:
            case 29:
                return "Opponents take no damage unless affected by a status condition or interference.";
            default:
                return "No rules"
        }
    }

    function GetCenterTrainer(key) {
        const trainerName = Stages[key]["center"]["name"].split("&")[0].replace("Sygna Suit", "").trim().toLowerCase();
        return `trainers/${trainerName}`;
    }

    function GetStageContent(key, floorNumber, type) {
        const stageInfo = Stages[key];
        if (!stageInfo) {
            console.log(key);
            return (
                <p>
                    Stage info not found! This is unintentional, please ping me with the tower type and floor number and I will fix this.
                </p>
            );
        }

        const LeftTarget = GetTargetInfo(stageInfo["left"], false, floorNumber);
        const CenterTarget = GetTargetInfo(stageInfo["center"], true, floorNumber);
        const RightTarget = GetTargetInfo(stageInfo["right"], false, floorNumber);

        return (
            <div className="floor-info multi-col-view">
                <div className="swap-button-row">
                    {LeftTarget.name !== undefined &&
                        <button type="button" style={{backgroundImage: getPokemonImg(LeftTarget.name)}} onClick={() => activateLeftTarget(type + floorNumber)}></button>
                    }
                    {LeftTarget.name === undefined && <button type="button" className="placeholder"></button>}
                    {CenterTarget.name !== undefined &&
                        <button type="button" style={{backgroundImage: getPokemonImg(CenterTarget.name)}} onClick={() => activateCenterTarget(type + floorNumber)}></button>
                    }
                    {CenterTarget.name === undefined && <button type="button" className="placeholder"></button>}
                    {RightTarget.name !== undefined &&
                        <button type="button" style={{backgroundImage: getPokemonImg(RightTarget.name)}} onClick={() => activateRightTarget(type + floorNumber)}></button>
                    }
                    {RightTarget.name === undefined && <button type="button" className="placeholder"></button>}
                </div>
                <div className="stage-info">
                    <div className={`left-target-full inactive ${type + floorNumber}`}>
                        {LeftTarget.name !== undefined &&
                            <div className="target-info">
                                <div className="target-title">
                                    <h4>{LeftTarget.name}</h4>
                                    <p>
                                        Weakness:
                                        {getWeaknessImages(LeftTarget.weakness)}
                                    </p>
                                </div>
                                {GetStatTable(LeftTarget.stats)}
                                <div className="stage-parameters">
                                    <p className="passives-title">Stage Parameter</p>
                                    <p>{GetStageParameter(floorNumber)}</p>
                                </div>
                                <div className="target-moves">
                                    <p className="moves-title">Moves</p>
                                    {LeftTarget.moves}
                                </div>
                                <div className="target-passives">
                                    <p className="passives-title">Passives</p>
                                    {LeftTarget.passives}
                                </div>
                            </div>
                        }
                    </div>
                    <div className={`center-target-full active ${type + floorNumber}`}>
                        {CenterTarget.name !== undefined &&
                            <div className="target-info">
                                <div className="target-title">
                                    <h4>{CenterTarget.name}</h4>
                                    <p>
                                        Weakness:
                                        {getWeaknessImages(CenterTarget.weakness)}
                                    </p>
                                </div>
                                {GetStatTable(CenterTarget.stats)}
                                <div className="stage-parameters">
                                    <p className="passives-title">Stage Parameter</p>
                                    <p>{GetStageParameter(floorNumber)}</p>
                                </div>
                                <div className="target-moves">
                                    <p className="moves-title">Moves</p>
                                    {CenterTarget.moves}
                                </div>
                                <div className="target-passives">
                                    <p className="passives-title">Passives</p>
                                    {CenterTarget.passives}
                                </div>
                            </div>
                        }
                    </div>
                    <div className={`right-target-full inactive ${type + floorNumber}`}>
                        {RightTarget.name !== undefined &&
                            <div className="target-info">
                                <div className="target-title">
                                    <h4>{RightTarget.name}</h4>
                                    <p>
                                        Weakness:
                                        {getWeaknessImages(RightTarget.weakness)}
                                    </p>
                                </div>
                                {GetStatTable(RightTarget.stats)}
                                <div className="stage-parameters">
                                    <p className="passives-title">Stage Parameter</p>
                                    <p>{GetStageParameter(floorNumber)}</p>
                                </div>
                                <div className="target-moves">
                                    <p className="moves-title">Moves</p>
                                    {RightTarget.moves}
                                </div>
                                <div className="target-passives">
                                    <p className="passives-title">Passives</p>
                                    {RightTarget.passives}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }

    function getPokemonImg(name) {
        if (name) {
            let pokemonName = name.split("&")[name.split("&").length - 1].trim();
            return `url("${process.env.PUBLIC_URL}/images/pokemon/${pokemonUrls[pokemonName] ?? ""}.png")`;
        }
        return "";
    }

    function getWeaknessImages(imgString) {
        return imgString.split(" ").map((type) => (<img src={getImageUrl(type)} className="type-weakness" alt={type} />));
    }

    function getImageUrl(file) {
        return `${process.env.PUBLIC_URL}/images/type/${file}-sm.png`;
    }

    function getMoveDiv(move, index) {
        return (<div key={`${move}${index}`}><p>{move}</p></div>)
    }

    function getPassiveDiv(passive){
        let trimmedPassive = trimPassive(passive);
        return (<div key={trimmedPassive + "-desc"} className={trimmedPassive + "-desc passive"}><div>{passive}</div><Tooltip anchorSelect={"." + trimmedPassive + "-desc"} place="top" style={{"width": "200px"}}>{getPassiveTranslation(passive)}</Tooltip></div>);
    }

    function trimPassive(passive) {
        return "psv" + passive.replaceAll(" ", "").replace(":", "").replace("%", "").replace("&", "").replace(".", "").replaceAll("'", "").replaceAll(",", "").replaceAll("(", "").replaceAll(")", "");
    }

    function getPassiveTranslation(passive) {
        let replacementNum = passive.match(/\d+/) ? passive.match(/\d+/)[0] : null;
        let trimmedPassive = passive.replace(/\d+/, "#").replace("#st", "1st");
        if (translations[trimmedPassive]) {
            let translation = translations[trimmedPassive];
            if (replacementNum) {
                translation = translation.replace("#", replacementNum).replace("@", parseInt(replacementNum) + 1).replace("$", Math.min(10*parseInt(replacementNum), 95));
            }
            return translation;
        }
        console.log(passive);
        return passive;
    }

    function activateLeftTarget(key) {
        $(`.left-target-full.${key}`).addClass('active').removeClass('inactive');
        $(`.center-target-full.${key}`).removeClass('active').addClass('inactive');
        $(`.right-target-full.${key}`).removeClass('active').addClass('inactive');
    }

    function activateCenterTarget(key) {
        $(`.left-target-full.${key}`).removeClass('active').addClass('inactive');
        $(`.center-target-full.${key}`).addClass('active').removeClass('inactive');
        $(`.right-target-full.${key}`).removeClass('active').addClass('inactive');
    }

    function activateRightTarget(key) {
        $(`.left-target-full.${key}`).removeClass('active').addClass('inactive');
        $(`.center-target-full.${key}`).removeClass('active').addClass('inactive');
        $(`.right-target-full.${key}`).addClass('active').removeClass('inactive');
    }
    
    return (
        <div className={`${type}-tower`}>
            <div className="tower-header">

            </div>
            <div className="tower-floors">
                <Collapsible header={`${type.charAt(0).toUpperCase() + type.slice(1)} Tower`} headerImage={`type/${type}`}>
                    {tower.map((item, index) => (
                        <div className="tower-floor">
                            <Collapsible header={`Floor ${30 - index}`} headerImage={GetCenterTrainer(item + GetSuffix(30 - index))} extraStyles="no-margin">
                                {GetStageContent(item + GetSuffix(30 - index), 30 - index, type)}
                            </Collapsible>
                        </div>
                    ))}
                </Collapsible>
            </div>
        </div>
    )
}

export default TypeTower;

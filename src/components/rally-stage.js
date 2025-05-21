import * as details from './stage-details.json';
import * as translations from './passive-translations.json';
import * as pokemonUrls from './pokemon-icons.json';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import $ from 'jquery';

const RallyStage = (name, filters, imgPath, imgName) => {
    let dataKey = details[imgName];
    let left = dataKey["left"];
    let center = dataKey["center"];
    let right = dataKey["right"];
    let leftPassives, leftTargetName, centerPassives, centerTargetName, rightPassives, rightTargetName;
    
    if (left["name"] !== undefined) {
        leftPassives = left["passives"].map(function (passive) { return getPassiveDiv(passive); });
        leftTargetName = left["name"];
    }
    if (center["name"] !== undefined) {
        centerPassives = center["passives"].map(function (passive) { return getPassiveDiv(passive); });
        centerTargetName = center["name"];
    }
    if (right["name"] !== undefined) {
        rightPassives = right["passives"].map(function (passive) { return getPassiveDiv(passive); });
        rightTargetName = right["name"];
    }

    function getWeaknessImages(imgString) {
        return imgString.split(" ").map((type) => (<img src={getImageUrl(type)} className="type-weakness" alt={type} />));
    }

    function getImageUrl(file) {
        return `${process.env.PUBLIC_URL}/images/type/${file}-sm.png`;
    }

    function getPokemonImg(name) {
        if (name) {
            let pokemonName = name.split("&")[name.split("&").length - 1].trim();
            return `url("${process.env.PUBLIC_URL}/images/pokemon/${pokemonUrls[pokemonName] ?? ""}.png")`;
        }
        return "";
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
        return passive;
    }

    function activateLeftTarget() {
        $(`.left-target-full.${imgName}`).addClass('active').removeClass('inactive');
        $(`.center-target-full.${imgName}`).removeClass('active').addClass('inactive');
        $(`.right-target-full.${imgName}`).removeClass('active').addClass('inactive');
    }

    function activateCenterTarget() {
        $(`.left-target-full.${imgName}`).removeClass('active').addClass('inactive');
        $(`.center-target-full.${imgName}`).addClass('active').removeClass('inactive');
        $(`.right-target-full.${imgName}`).removeClass('active').addClass('inactive');
    }

    function activateRightTarget() {
        $(`.left-target-full.${imgName}`).removeClass('active').addClass('inactive');
        $(`.center-target-full.${imgName}`).removeClass('active').addClass('inactive');
        $(`.right-target-full.${imgName}`).addClass('active').removeClass('inactive');
    }
    
    return (
        <div className={`rally-stage ${filters}`}>
            <div className="stage-icon">
                <img src={`${process.env.PUBLIC_URL}${imgPath}/${imgName}.png`} title={name} alt={name} />
                <h3>{name}</h3>
            </div>
            <div className="stage-passives single-col-view">
                <div className="left-target">
                    {leftTargetName !== undefined &&
                        <div className="target-info">
                            <div className="target-title">
                                <h4>{leftTargetName}</h4>
                                <p>
                                    Weakness:
                                    {getWeaknessImages(left["weakness"])}
                                </p>
                            </div>
                            {leftPassives}
                        </div>
                    }
                </div>
                <div className="center-target">
                    {centerTargetName !== undefined &&
                        <div className="target-info">
                            <div className="target-title">
                                <h4>{centerTargetName}</h4>
                                <p>
                                    Weakness:
                                    {getWeaknessImages(center["weakness"])}
                                </p>
                            </div>
                            {centerPassives}
                        </div>
                    }
                </div>
                <div className="right-target">
                    {rightTargetName !== undefined &&
                        <div className="target-info">
                            <div className="target-title">
                                <h4>{rightTargetName}</h4>
                                <p>
                                    Weakness:
                                    {getWeaknessImages(right["weakness"])}
                                </p>
                            </div>
                            {rightPassives}
                        </div>
                    }
                </div>
            </div>
            <div className="stage-passives multi-col-view">
                <div className="swap-button-row">
                    {leftTargetName !== undefined &&
                        <button type="button" style={{backgroundImage: getPokemonImg(leftTargetName)}} onClick={() => activateLeftTarget()}></button>
                    }
                    {leftTargetName === undefined && <button type="button" className="placeholder"></button>}
                    {centerTargetName !== undefined &&
                        <button type="button" style={{backgroundImage: getPokemonImg(centerTargetName)}} onClick={() => activateCenterTarget()}></button>
                    }
                    {centerTargetName === undefined && <button type="button" className="placeholder"></button>}
                    {rightTargetName !== undefined &&
                        <button type="button" style={{backgroundImage: getPokemonImg(rightTargetName)}} onClick={() => activateRightTarget()}></button>
                    }
                    {rightTargetName === undefined && <button type="button" className="placeholder"></button>}
                </div>
                <div className={`left-target-full inactive ${imgName}`}>
                    {leftTargetName !== undefined &&
                        <div className="target-info">
                            <div className="target-title">
                                <h4>{leftTargetName}</h4>
                                <p>
                                    Weakness:
                                    {getWeaknessImages(left["weakness"])}
                                </p>
                            </div>
                            {leftPassives}
                        </div>
                    }
                </div>
                <div className={`center-target-full active ${imgName}`}>
                    {centerTargetName !== undefined &&
                        <div className="target-info">
                            <div className="target-title">
                                <h4>{centerTargetName}</h4>
                                <p>
                                    Weakness:
                                    {getWeaknessImages(center["weakness"])}
                                </p>
                            </div>
                            {centerPassives}
                        </div>
                    }
                </div>
                <div className={`right-target-full inactive ${imgName}`}>
                    {rightTargetName !== undefined &&
                        <div className="target-info">
                            <div className="target-title">
                                <h4>{rightTargetName}</h4>
                                <p>
                                    Weakness:
                                    {getWeaknessImages(right["weakness"])}
                                </p>
                            </div>
                            {rightPassives}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default RallyStage;
import * as details from './stage-details.json';
import * as translations from './passive-translations.json';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const RallyStage = (name, filters, imgPath, imgName) => {
    let dataKey = details[imgName];
    console.log(imgName);
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
        let images = "";
        return imgString.split(" ").map((type) => (<img src={getImageUrl(type)} className="type-weakness" alt={type} />));
    }

    function getImageUrl(file) {
        return `${process.env.PUBLIC_URL}/images/type/${file}-sm.png`;
    }

    function getPassiveDiv(passive){
        let trimmedPassive = trimPassive(passive);
        return (<li className="passive" key={trimmedPassive + "-desc"}><div className={trimmedPassive + "-desc"}>{passive}</div><Tooltip anchorSelect={"." + trimmedPassive + "-desc"} place="top" style={{"width": "200px"}}>{getPassiveTranslation(passive)}</Tooltip></li>);
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
    
    return (
        <div className={`rally-stage ${filters}`}>
            <div className="stage-icon">
                <img src={`${process.env.PUBLIC_URL}${imgPath}/${imgName}.png`} title={name} alt={name} />
                <h3>{name}</h3>
            </div>
            <div className="stage-passives">
                <div className="left-target">
                    {left["name"] !== undefined &&
                        <div className="target-info">
                            <div className="target-title">
                                <h4>{leftTargetName}</h4>
                                <p>
                                    Weakness:
                                    {getWeaknessImages(left["weakness"])}
                                </p>
                            </div>
                            <ul>
                                {leftPassives}
                            </ul>
                        </div>
                    }
                </div>
                <div className="center-target">
                    {center["name"] !== undefined &&
                        <div className="target-info">
                            <div className="target-title">
                                <h4>{centerTargetName}</h4>
                                <p>
                                    Weakness:
                                    {getWeaknessImages(center["weakness"])}
                                </p>
                            </div>
                            <ul>
                                {centerPassives}
                            </ul>
                        </div>
                    }
                </div>
                <div className="right-target">
                    {right["name"] !== undefined &&
                        <div className="target-info">
                            <div className="target-title">
                                <h4>{rightTargetName}</h4>
                                <p>
                                    Weakness:
                                    {getWeaknessImages(right["weakness"])}
                                </p>
                            </div>
                            <ul>
                                {rightPassives}
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default RallyStage;
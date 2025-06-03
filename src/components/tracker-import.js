import * as SyncPairs from './sync-pair.json';
import * as Pokemon from './pokemon-icons.json';
import { useState } from 'react';

const TrackerImporter = () => {
    const [file, setFile] = useState("");
    
    const changeTrackerFile = (e) => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            setFile(JSON.parse(e.target.result));
        };
    };
    
    const importTracker = () => {
        try {
            const tracker = {};
            
            for (let key in file) {
                if (key !== "default") {
                    const arcSuit = key.split("|").length > 2;
                    const [dexNumber, pokemonNumber] = key.split("|");
                    if (arcSuit && dexNumber === "001") {
                        continue;
                    }
                    const pairName = Object.keys(SyncPairs).filter(syncPair => SyncPairs[syncPair]["tracker_key"] === dexNumber.toString())[0].split("_")[0];
                    const pokemonName = Object.keys(Pokemon).filter(mon => Pokemon[mon] === ("MastersIcon" + pokemonNumber))[0].split("(")[0].trim();
                    const pairKey = Object.keys(SyncPairs).filter(syncPair => syncPair.split("_")[0] === pairName).map(key => [key, SyncPairs[key].name]).filter(keyName => (keyName[1].includes(pokemonName)) && (arcSuit ? keyName[1].includes("Arc Suit") : true))[0][0];
                    
                    let splitOptions = file[key].split("|")
                    const moveLevel = (1 + parseInt(splitOptions[0])) + "/5";
                    const energyCapUps = "+" + (parseInt(splitOptions[5]) * 2) + "E";
                    const starUps = parseInt(splitOptions[1]);
                    const starLevel = (("base_star" in SyncPairs[pairKey] ? SyncPairs[pairKey]["base_star"] : 5) + (dexNumber === "001" ? Math.floor(starUps / 2) : starUps)) === 6 ? "EX" : ((SyncPairs[pairKey]["base_star"] ?? 5) + (dexNumber === "001" ? Math.floor(starUps / 2) : starUps)) + "*";
                    const fullInvestment = moveLevel + " " + starLevel + " " + (parseInt(splitOptions[4]) > 0 ? "R " : "") + energyCapUps;
                    tracker[pairKey] = fullInvestment;
                }
            }
    
            localStorage.setItem("poma-companion_tracker-import", JSON.stringify(tracker));
        } catch {
            alert("An error occurred processing your uploaded file. Please confirm the input is in the correct format then try agan.");
        }
        
    }
    
    return (
        <div className="tracker-uploader">
            <input type="file" accept="application/json" onChange={changeTrackerFile} />
            <button onClick={importTracker}>Import</button>
        </div>
    );
}

export default TrackerImporter;
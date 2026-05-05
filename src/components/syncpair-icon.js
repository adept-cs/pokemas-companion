import * as syncPairs from './sync-pair.json';

const SyncPairIcon = (key, color, borderColor = "") => {
    const pairInfo = syncPairs[key];

    function GetColor(id) {
        console.log(id);
        switch (id) {
            case 0: return "black";
            case 1: return "red";
            case 2: return "orange";
            case 3: return "yellow";
            case 4: return "green";
            case 5: return "blue";
            default: return "";
        }
    }
    
    return (
        <div className="sync-pair-icon">
            <div className={`${GetColor(color)} ${borderColor}`}>
                <img src={`${process.env.PUBLIC_URL}/images/pair/${pairInfo["region"]}/${key}.png`} className={`sync-pair ${pairInfo["filters"]} ${GetColor(borderColor)} ${pairInfo["damage_types"]}`} title={pairInfo["name"]} alt={pairInfo["name"]} />
            </div>
        </div>
    );
}

export default SyncPairIcon;
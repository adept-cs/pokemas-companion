import * as syncPairs from './sync-pair.json';

const SyncPairIcon = (key, color, borderColor = "") => {
    const pairInfo = syncPairs[key];
    
    return (
        <div className="sync-pair-icon">
            <div className={`${color} ${borderColor}`}>
                <img src={`${process.env.PUBLIC_URL}/images/pair/${pairInfo["region"]}/${key}.png`} className={`sync-pair ${pairInfo["filters"]} ${borderColor}`} title={pairInfo["name"]} alt={pairInfo["name"]} />
            </div>
        </div>
    );
}

export default SyncPairIcon;
import * as syncPairs from './sync-pair.json';

const SyncPairIcon = (key, color) => {
    const pairInfo = syncPairs[key];
    console.log(key);
    
    return (
        <div className="sync-pair-icon">
            <div className={color}>
                <img src={`${process.env.PUBLIC_URL}/images/pair/${pairInfo["region"]}/${key}.png`} className={`sync-pair ${pairInfo["filters"]}`} title={pairInfo["name"]} alt={pairInfo["name"]} />
            </div>
        </div>
    );
}

export default SyncPairIcon;
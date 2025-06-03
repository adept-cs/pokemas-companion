import * as syncPairs from './sync-pair.json';
import SyncPairIcon from './syncpair-icon';

const SyncPairLaInfo = (key) => {
    function getStageFormatting(stage) {
        const stageInfo = syncPairs[key]["z_arenas"][stage];
        if (stageInfo["soloLink"] ?? false) {
            return (
                <div className="solo-and-matchup-content">
                    <div className="solo-content">
                        <a href={stageInfo["soloLink"]}>{stageInfo["soloInvestment"]}</a>
                    </div>
                    <div className="matchup-content secondary-info">
                        ✓++
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="matchup-content">
                    {stageInfo["matchup"]}
                </div>
            )
        }
    }
    
    return (
        <tr className="sync-pair-info-row">
            <th scope="row">
                {SyncPairIcon(key, "")}
            </th>
            <td className="azelf-matchup">{getStageFormatting("azelf")}</td>
            <td className="cobalion-matchup">{getStageFormatting("cobalion")}</td>
            <td className="cresselia-matchup">{getStageFormatting("cresselia")}</td>
            <td className="entei-matchup">{getStageFormatting("entei")}</td>
            <td className="latias-matchup">{getStageFormatting("latias")}</td>
            <td className="latios-matchup">{getStageFormatting("latios")}</td>
            <td className="moltres-matchup">{getStageFormatting("moltres")}</td>
            <td className="raikou-matchup">{getStageFormatting("raikou")}</td>
            <td className="regirock-matchup">{getStageFormatting("regirock")}</td>
            <td className="registeel-matchup">{getStageFormatting("registeel")}</td>
            <td className="tapubulu-matchup">{getStageFormatting("tapubulu")}</td>
            <td className="terrakion-matchup">{getStageFormatting("terrakion")}</td>
            <td className="tornadus-matchup">{getStageFormatting("tornadus")}</td>
            <td className="uxie-matchup">{getStageFormatting("uxie")}</td>
        </tr>
    );
}

export default SyncPairLaInfo;
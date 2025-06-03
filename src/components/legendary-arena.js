import SyncPairLaInfo from './syncpair-la-row.js';
import * as SyncPairs from './sync-pair.json';
import TrackerImporter from './tracker-import.js';

const LegendaryArenaCompanion = () => {
    return (
        <div className="lalg-page">
            <div className="banner lalg-banner">
                <img src={`${process.env.PUBLIC_URL}/images/app-bg.png`} className="banner-img" alt="" />
                <h1 className="banner-title">Legendary Arena/Gauntlet Companion</h1>
            </div>
            <div className="lalg-header">
                <h2>About the Legendary Arena/Gauntlet Companion</h2>
                <p>This companion is a combination of two resources maintained by Naomi: the Legendary Gauntlet solo sheet and Legendary Arena matchup chart. Combined, the two capture how well-suited each sync pair is to countering a Legendary Arena stage at max investment, combined with linking to any solos done by that pair.
                </p>
                <p><i>Disclaimer: This resource partially supports tracker input. Provided a tracker export, this page can filter out solos you don't meet the move level for, in which case it will just show that a solo can be done with further investment. The matchup chart is not currently set up with this functionality available.</i></p>
                <TrackerImporter />
                <p><i>Disclaimer: This resource is updated way less frequently than new solos come in. If you want updated information on all solos, please consult the <a href="https://docs.google.com/spreadsheets/d/1iDfxrZ9AMQCrSaZDuT0yripAln8QH1QQP9r0g56ANhI/edit?gid=2047631707#gid=2047631707">Legendary Arena Solo Sheet</a>.</i></p>
            </div>

            <div className="lalg-chart">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Sync Pair</th>
                            <th scope="col">Azelf</th>
                            <th scope="col">Cobalion</th>
                            <th scope="col">Cresselia</th>
                            <th scope="col">Entei</th>
                            <th scope="col">Latias</th>
                            <th scope="col">Latios</th>
                            <th scope="col">Moltres</th>
                            <th scope="col">Raikou</th>
                            <th scope="col">Regirock</th>
                            <th scope="col">Registeel</th>
                            <th scope="col">Tapu Bulu</th>
                            <th scope="col">Terrakion</th>
                            <th scope="col">Tornadus</th>
                            <th scope="col">Uxie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(SyncPairs).map(key => key !== "default" ? SyncPairLaInfo(key) : "")}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LegendaryArenaCompanion;
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            <div className="banner home-banner">
                <img src={`${process.env.PUBLIC_URL}/images/app-bg.png`} className="banner-img" alt="" />
                <h1 className="banner-title">Pokémon Masters Companion</h1>
            </div>
            <div className="homepage-header">
                <h2 className="section-header">About this App</h2>
                <p>This is a collection of Pokémon Masters resources I am working on at the moment as a side project. Many of these resources are maintained by other users within the community, and I just sync their changes with what I show here.
                    On each resource that another community member made, I give credit to the original creators on that page.
                </p>
                <p>If a resource is shown as BETA, then it means I am still working on functionality, aesthetics, accessibility features, or something else prior to an actual full release. If it's shown on the site then it is in a usable state, but be wary of potential bugs on the page.</p>
            </div>
            <div className="homepage-content">
                <h2 className="section-header">All Resources</h2>
                <div className="homepage-resource">
                    <div className="resource-overview">
                        <h3><Link to="tierlist/spark">Spark's Tier List - Filterable</Link></h3>
                        <p>A version of Spark's tierlist with interactive filtering based on trainer, role, acquisition method, and in-game theme skills. <i>Resource originally created by Spark, Ropalme, Rion, and Darkshark.</i></p>
                        <h4>Last updated: 27 June, 2025 (2.57.0 release)</h4>
                    </div>
                    <div className="resource-thumbnail">
                        <img src={`${process.env.PUBLIC_URL}/images/spark-combined.png`} className="resource-img" alt="Spark's Tierlist" />
                    </div>
                </div>
                <div className="homepage-resource">
                    <div className="resource-overview">
                        <h3><Link to="tierlist/wag">WAG's Tier List - Filterable</Link></h3>
                        <p>A version of WAG's tierlist with interactive filtering based on trainer, role, acquisition method, and in-game theme skills. <i>Resource originally created by WAG.</i></p>
                        <h4>Last updated: 27 June, 2025 (early 2.58.0 list)</h4>
                    </div>
                    <div className="resource-thumbnail">
                    </div>
                </div>
                <div className="homepage-resource">
                    <div className="resource-overview">
                        <h3><Link to="rally">Battle Rally Stage Viewer</Link></h3>
                        <p>Identify stages in Battle Rally by the opponents you see. Shows what sync pairs battles were "made" for if applicable, and all enemy passives. <i>Resource originally created by me!</i></p>
                    </div>
                    <div className="resource-thumbnail">

                    </div>
                </div>
            </div>
            <div className="homepage-footer">
                <p>If you have feedback for this companion page, notice a bug with a feature on it, or if a resource is sufficiently outdated, please ping me @adeptcs in the r/PokemonMasters Discord server.
                </p>
            </div>
        </div>
    );
}

export default Home;
import Home from "./home";
import TierListSpark from "./tierlist-spark"
import TierListWAG from "./tierlist-wag"
import LegendaryArenaCompanion from "./legendary-arena";
import RallyFinder from "./rallyfinder"
import Tower from './tower';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
    return (
        <Routes>
            <Route exact path='' element={<Home/>}></Route>
            <Route exact path='tierlist/spark' element={<TierListSpark/>}></Route>
            <Route exact path='tierlist/wag' element={<TierListWAG/>}></Route>
            <Route exact path='legendary-arena' element={<LegendaryArenaCompanion />}></Route>
            <Route exact path='rally' element={<RallyFinder />}></Route>
            <Route exact path='tower' element={<Tower />}></Route>
        </Routes>
    );
}

export default Main;
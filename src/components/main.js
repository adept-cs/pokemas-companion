import Home from "./home";
import TierListSpark from "./tierlist-spark"
import TierListWAG from "./tierlist-wag"
import RallyFinder from "./rallyfinder"
import Tower from './tower';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
    return (
        <Routes>
            <Route exact path='' element={<Home/>}></Route>
            <Route exact path='tierlist/spark' element={<TierListSpark/>}></Route>
            <Route exact path='tierlist/wag' element={<TierListWAG/>}></Route>
            <Route exact path='rally' element={<RallyFinder />}></Route>
            <Route exact path='tower' element={<Tower />}></Route>
        </Routes>
    );
}

export default Main;
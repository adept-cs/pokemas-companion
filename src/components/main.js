import Home from "./home";
import TierList from "./tierlist"
import RallyFinder from "./rallyfinder"
import { Routes, Route } from 'react-router-dom';

const Main = () => {
    return (
        <Routes>
            <Route exact path='' element={<Home/>}></Route>
            <Route exact path='tierlist' element={<TierList/>}></Route>
            <Route exact path='rally' element={<RallyFinder />}></Route>
        </Routes>
    );
}

export default Main;
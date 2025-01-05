import Home from "./home";
import TierList from "./tierlist"
import { Routes, Route } from 'react-router-dom';

const Main = () => {
    return (
        <Routes>
            <Route exact path='/pokemas-companion' element={<Home/>}></Route>
            <Route exact path='/pokemas-companion/tierlist' element={<TierList/>}></Route>
        </Routes>
    );
}

export default Main;
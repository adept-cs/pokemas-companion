import Home from "./home";
import TierList from "./tierlist"
import { Routes, Route } from 'react-router-dom';

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/tierlist' element={<TierList/>}></Route>
        </Routes>
    );
}

export default Main;
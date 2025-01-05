import { Link } from 'react-router-dom';

const Menu = () => {  
    return (
        <div className="menu-nav">
            <Link to="/pokemas-companion">Home</Link>
            <Link to="/pokemas-companion/tierlist">Tier List Companion</Link>
        </div>
    );
};

export default Menu;
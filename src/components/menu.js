import { Link } from 'react-router-dom';

const Menu = () => {  
    return (
        <div className="menu-nav">
            <Link to="">Home</Link>
            <Link to="tierlist">Tier List Companion</Link>
        </div>
    );
};

export default Menu;
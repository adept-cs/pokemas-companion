import { Link } from 'react-router-dom';

const Menu = () => {  
    return (
        <div className="menu-nav">
            <Link to="">Home</Link>
            <Link to="tierlist-spark">Tier List Companion</Link>
            <Link to="rally">Battle Rally Companion (In Development)</Link>
        </div>
    );
};

export default Menu;
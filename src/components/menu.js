const Menu = () => {  
    return (
        <div class="menu-nav">
            <a href={`${process.env.PUBLIC_URL}`}>Home</a>
            <a href={`${process.env.PUBLIC_URL}/tierlist`}>Tier List Companion</a>
        </div>
    );
};

export default Menu;
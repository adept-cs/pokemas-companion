import { useState } from 'react';

const Collapsible = (props) => {
    const toggle = () => setOpen(!open);
    const [open, setOpen] = useState(false);

    return (
        <div className="collapsible">
            <button onClick={toggle} className={`no-background ${props.extraStyles}`}><h3 className="collapse-header">{props.header}</h3></button>
            {open && 
                <div>{props.children}</div>
            }
        </div>
    );
}

export default Collapsible;
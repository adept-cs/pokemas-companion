import { useState } from 'react';

const Collapsible = (props) => {
    const toggle = () => setOpen(!open);
    const [open, setOpen] = useState(false);
    const showHeaderImage = props.headerImage;

    return (
        <div className={`collapsible ${props.extraStyles === "no-margin" ? props.extraStyles : ""}`}>
            <button onClick={toggle} className={`no-background ${props.extraStyles ? props.extraStyles : ""}`}>
                <h3 className="collapse-header">{props.header}</h3>
                {showHeaderImage &&
                    <img src={`${process.env.PUBLIC_URL}/images/${props.headerImage}.png`} alt={props.headerImage}></img>
                }
            </button>
            {open && 
                <div>{props.children}</div>
            }
        </div>
    );
}

export default Collapsible;
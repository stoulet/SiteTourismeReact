import React from "react";

const Bouton = (props) => {
    const btnCSS = `btn ${props.typeBtn}`;
    return (
        <button className={btnCSS}
            onClick={props.clic}
            style={props.estSelection ? { opacity: 1 } : { opacity: 0.6 }}>
            {props.children}
        </button>
    )
};

export default Bouton;
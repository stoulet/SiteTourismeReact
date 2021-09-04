import React from "react";

const Titre = (props) => {
    const classesCss = `text-center bg-primary text-white border border-dark rounded p-2 mt-2`;
    return (
        <h1 className={classesCss}>{props.children}</h1>
    )
};

export default Titre;
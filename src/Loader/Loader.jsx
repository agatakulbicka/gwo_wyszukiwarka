import React from "react";

function Loader() {
    const baseClassName = "loader";
    return (
        <div className={baseClassName}>
            <div className={`${baseClassName}__animation`}/>
            <div className={`${baseClassName}__label`}>Wyszukiwanie danych...</div>
        </div>
    );
}

export default Loader;
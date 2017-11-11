import React from "react";
import {DATA_SEARCHING} from "../constants/constants";

function Loader() {
    const baseClassName = "loader";
    return (
        <div className={baseClassName}>
            <div className={`${baseClassName}__animation`}/>
            <div className={`${baseClassName}__label`}>
                {DATA_SEARCHING}
            </div>
        </div>
    );
}

export default Loader;
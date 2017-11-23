import PropTypes from "prop-types";
import React from "react";
import {
    PAGINATION_BUTTON_NUMBER,
    PAGINATION_BUTTONS_LABEL
} from "../constants/constants";

function RadioButtonsGroup({baseClassName, getNumberOfElementsOnPage}) {
    return (
        <form className={baseClassName}>
            <span className={`${baseClassName}_label`}>{PAGINATION_BUTTONS_LABEL}</span>
            <div className={`${baseClassName}_radio-buttons`}>
                {PAGINATION_BUTTON_NUMBER.map((singleButton, index) => (
                    <label
                        key={`${singleButton}-${index}`}
                        className="radio-label"
                    >
                        <input
                            className="radio-button"
                            type="radio"
                            id={`elements-${singleButton}`}
                            name="pagesNumber"
                            value="pagesNumber"
                            onClick={() => getNumberOfElementsOnPage(singleButton)}
                            defaultChecked={singleButton === 6}
                        />
                        {singleButton}
                    </label>
                ))}
            </div>
        </form>
    );
}

RadioButtonsGroup.propsTypes = {
    baseClassName: PropTypes.string,
    getNumberOfElementsOnPage: PropTypes.func
};

export default RadioButtonsGroup;
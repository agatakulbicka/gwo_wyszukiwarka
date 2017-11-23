import PropTypes from "prop-types";
import React from "react";
import {
    PAGINATION_BUTTON_NUMBER,
    PAGINATION_BUTTONS_LABEL
} from "../constants/constants";

function RadioButtonsGroup({baseClassName, getNumberOfElementsOnPage}) {
    return (
        <form className={baseClassName}>
            <p>{PAGINATION_BUTTONS_LABEL}</p>
            <div>
                <input type="radio" id="elements6"
                       name="pagesNumber"
                       value="pagesNumber"
                       defaultChecked
                       onClick={() => getNumberOfElementsOnPage(PAGINATION_BUTTON_NUMBER[0])}
                />
                <label htmlFor="elements6">{PAGINATION_BUTTON_NUMBER[0]}</label>

                <input type="radio"
                       id="elements12"
                       name="pagesNumber"
                       value="pagesNumber"
                       onClick={() => getNumberOfElementsOnPage(PAGINATION_BUTTON_NUMBER[1])}
                />
                <label htmlFor="elements12">{PAGINATION_BUTTON_NUMBER[1]}</label>

                <input type="radio"
                       id="elements18"
                       name="pagesNumber"
                       value="pagesNumber"
                       onClick={() => getNumberOfElementsOnPage(PAGINATION_BUTTON_NUMBER[2])}
                />
                <label htmlFor="elements18">{PAGINATION_BUTTON_NUMBER[2]}</label>
            </div>

        </form>
    );
}

RadioButtonsGroup.propsTypes = {
    baseClassName: PropTypes.string,
    getNumberOfElementsOnPage: PropTypes.func
};

export default RadioButtonsGroup;
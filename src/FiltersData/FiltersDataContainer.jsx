import PropTypes from "prop-types";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getNumberOfElementsOnPage} from "../actions";
import RadioButtonsGroup from "./RadioButtonsGroup";

function FiltersData({baseClassName = "filtersData", getNumberOfElementsOnPage}) {

    return (
        <section>
            <RadioButtonsGroup
                baseClassName={baseClassName}
                getNumberOfElementsOnPage={getNumberOfElementsOnPage}
            />
        </section>
    );
}

const mapDispatchToProps = dispatch => ({
    getNumberOfElementsOnPage: compose(dispatch, getNumberOfElementsOnPage)
});

RadioButtonsGroup.propsTypes = {
    baseClassName: PropTypes.string,
    getNumberOfElementsOnPage: PropTypes.func
};

export default connect (
    null,
    mapDispatchToProps
)(FiltersData);
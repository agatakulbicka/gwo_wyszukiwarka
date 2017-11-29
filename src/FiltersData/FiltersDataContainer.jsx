import PropTypes from "prop-types";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getNumberOfElementsOnPage} from "../actions";
import RadioButtonsGroup from "./RadioButtonsGroup";
import {PaginationContainer} from "./Pagination";

function FiltersData({baseClassName = "data-filters", getNumberOfElementsOnPage, isPaginationVisible, elementsOnPageNumber}) {

    return (
        <section className={baseClassName}>
            <RadioButtonsGroup
                baseClassName={baseClassName}
                elementsOnPageNumber={elementsOnPageNumber}
                getNumberOfElementsOnPage={getNumberOfElementsOnPage}
            />
            {renderPagination(isPaginationVisible)}
        </section>
    );
}

function renderPagination(isPaginationVisible) {
    return isPaginationVisible ?
        <PaginationContainer/> :
        null;
}

const mapStateToProps = ({pagination}) => ({
    elementsOnPageNumber: pagination.elementsOnPageNumber
});

const mapDispatchToProps = dispatch => ({
    getNumberOfElementsOnPage: compose(dispatch, getNumberOfElementsOnPage)
});

FiltersData.propsTypes = {
    baseClassName: PropTypes.string,
    elementsOnPageNumber: PropTypes.string,
    getNumberOfElementsOnPage: PropTypes.func,
    isPaginationVisible: PropTypes.bool
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FiltersData);
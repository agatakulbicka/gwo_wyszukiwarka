import PropTypes from "prop-types";
import React from "react";
import {connect} from "react-redux";
import {Loader} from "../Loader";
import FilteredListComponent from "./FilteredListComponent";

function FilteredListContainer(props) {
    const {
        isFetchingBooksData,
        booksData,
        currentPage,
        lastPageNumber,
        elementsOnPageNumber,
        isPaginationVisible
    } = props;

    return isFetchingBooksData ? <Loader/> :
        <FilteredListComponent
            booksData={booksData}
            baseClassName="filtered-list"
            currentPage={currentPage}
            lastPageNumber={lastPageNumber}
            elementsOnPageNumber={elementsOnPageNumber}
            isPaginationVisible={isPaginationVisible}
        />
}

const mapStateToProps = state => ({
    booksData: state.booksData,
    isFetchingBooksData: state.isFetchingBooksData,
    currentPage: state.pagination.currentPage,
    elementsOnPageNumber: state.pagination.elementsOnPageNumber
});

const mergeProps = stateProps => ({
    ...stateProps,
    lastPageNumber: stateProps.booksData.length > stateProps.elementsOnPageNumber ?
        Math.ceil(stateProps.booksData.length / stateProps.elementsOnPageNumber):
        stateProps.currentPage,
    isPaginationVisible: stateProps.booksData.length > 0 &&
    stateProps.booksData.length > stateProps.elementsOnPageNumber
});

FilteredListContainer.propTypes = {
    booksData: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    isFetchingBooksData: PropTypes.bool,
    currentPage: PropTypes.number,
    elementsOnPageNumber: PropTypes.number,
    lastPageNumber: PropTypes.number,
    isPaginationVisible: PropTypes.bool
};

export default connect(
    mapStateToProps,
    null,
    mergeProps
)(FilteredListContainer);

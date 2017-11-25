import PropTypes from "prop-types";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getNextPage, getPrevPage} from "../actions";
import {Loader} from "../Loader";
import FilteredListComponent from "./FilteredListComponent";

function FilteredListContainer(props) {
    const {
        isFetchingBooksData,
        booksData,
        getNextPage,
        getPrevPage,
        currentPage,
        lastPageNumber,
        elementsOnPageNumber,
        isPaginationVisible
    } = props;

    return isFetchingBooksData ? <Loader/> :
        <FilteredListComponent
            booksData={booksData}
            baseClassName="filtered-list"
            getNextPage={getNextPage}
            getPrevPage={getPrevPage}
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

const mapDispatchToProps = dispatch => ({
    getNextPage: compose(dispatch, getNextPage),
    getPrevPage: compose(dispatch, getPrevPage)
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    lastPageNumber: stateProps.booksData.length > stateProps.elementsOnPageNumber ?
        Math.ceil(stateProps.booksData.length / stateProps.elementsOnPageNumber):
        stateProps.currentPage,
    isPaginationVisible: stateProps.booksData.length > 0 &&
    stateProps.booksData.length > stateProps.elementsOnPageNumber
});

FilteredListContainer.propTypes = {
    booksData: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    isFetchingBooksData: PropTypes.bool,
    getNextPage: PropTypes.func,
    getPrevPage: PropTypes.func,
    currentPage: PropTypes.number,
    elementsOnPageNumber: PropTypes.number,
    lastPageNumber: PropTypes.number,
    isPaginationVisible: PropTypes.bool
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(FilteredListContainer);

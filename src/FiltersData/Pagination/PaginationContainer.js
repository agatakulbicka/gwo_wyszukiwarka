import {connect} from "react-redux";
import {compose} from "redux";
import {getNextPage, getPrevPage, changePageNumber} from "../../actions/actions";
import Pagination from "./Pagination";

const mapStateToProps = state => ({
    booksData: state.booksData,
    isFetchingBooksData: state.isFetchingBooksData,
    currentPage: state.pagination.currentPage,
    elementsOnPageNumber: state.pagination.elementsOnPageNumber
});

const mapDispatchToProps = dispatch => ({
    getNextPage: compose(dispatch, getNextPage),
    getPrevPage: compose(dispatch, getPrevPage),
    changePageNumber: compose(dispatch, changePageNumber)
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    lastPageNumber: stateProps.booksData.length > stateProps.elementsOnPageNumber ?
        Math.ceil(stateProps.booksData.length / stateProps.elementsOnPageNumber):
        stateProps.currentPage
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Pagination);
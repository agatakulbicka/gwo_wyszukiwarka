import PropTypes from "prop-types";
import React from "react";
import {connect} from "react-redux";
import {Loader} from "../Loader";
import FilteredListComponent from "./FilteredListComponent";

function FilteredListContainer({isFetchingBooksData, booksData}) {
    return renderMainContent(isFetchingBooksData, booksData);
}

function renderMainContent(isLoaderVisible, booksData) {
    return isLoaderVisible ? <Loader/> :
        <FilteredListComponent
            booksData={booksData}
        />
}

const mapStateToProps = state => ({
    booksData: state.booksData,
    isFetchingBooksData: state.isFetchingBooksData
});


FilteredListContainer.propTypes = {
    booksData: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    isFetchingBooksData: PropTypes.bool
};

export default connect(
    mapStateToProps,
    null
)(FilteredListContainer);

import PropTypes from "prop-types";
import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import fetchBooksData from "../actions/actions";
import FilteredListComponent from "./FilteredListComponent";
import SearchBoxComponent from "./SearchBoxComponent";

function SearchContainer({booksData, fetchBooksData}){
    return (
        <div>
            <SearchBoxComponent fetchBooksData={fetchBooksData}/>
            <FilteredListComponent booksData={booksData}/>

        </div>
    )
}

SearchContainer.propTypes = {
    booksData: PropTypes.array,
    fetchBooksData: PropTypes.func

};

const mapStateToProps = state => ({
    booksData: state.booksData
});

const mapDispatchToProps = dispatch => ({
    fetchBooksData: compose(dispatch, fetchBooksData)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContainer);
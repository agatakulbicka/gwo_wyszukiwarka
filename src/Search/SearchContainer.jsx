import PropTypes from "prop-types";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {fetchBooksData} from "../actions/actions";
import FilteredListComponent from "./FilteredListComponent";
import SearchBoxComponent from "./SearchBoxComponent";
import {Loader} from "../Loader";
import {ScrollUpButton} from "../ScrollUpButton";
import {FiltersDataContainer} from "../FiltersData";

function SearchContainer({booksData, fetchBooksData, isFetchingBooksData}) {

    return (
        <section className="search-container">
            <ScrollUpButton/>
            <SearchBoxComponent fetchBooksData={fetchBooksData}/>
            <FiltersDataContainer baseClassName="data-filters"/>
            {renderMainContent(isFetchingBooksData, booksData)}
        </section>
    )
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

const mapDispatchToProps = dispatch => ({
    fetchBooksData: compose(dispatch, fetchBooksData)
});

SearchContainer.propTypes = {
    booksData: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    fetchBooksData: PropTypes.func,
    isFetchingBooksData: PropTypes.bool
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContainer);
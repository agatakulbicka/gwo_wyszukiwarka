import PropTypes from "prop-types";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {fetchBooksData} from "../actions/actions";
import SearchBoxComponent from "./SearchBoxComponent";
import {ScrollUpButton} from "../ScrollUpButton";
import {FiltersDataContainer} from "../FiltersData";
import {FilteredListContainer} from "../FilteredList";

function SearchContainer({fetchBooksData}) {
    return (
        <section className="search-container">
            <ScrollUpButton/>
            <SearchBoxComponent fetchBooksData={fetchBooksData}/>
            <FiltersDataContainer baseClassName="data-filters"/>
            <FilteredListContainer/>
        </section>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchBooksData: compose(dispatch, fetchBooksData)
});

SearchContainer.propTypes = {
    isFetchingBooksData: PropTypes.bool
};

export default connect(
    null,
    mapDispatchToProps
)(SearchContainer);
import PropTypes from "prop-types";
import React from "react";
import {
    MAIN_TEXT_START,
    SEARCHING_RESULTS,
    NO_SEARCHING_RESULTS
} from "../constants/constants";
import {SingleBook} from "../SingleBook/index";

function FilteredListComponent({booksData}) {

    return (
        <div>{
            typeof(booksData) === "string" ?
                <div>{MAIN_TEXT_START}</div> :
                <div>
                    {renderSearchingResult(booksData)}
                    <div className="filtered-list">
                        { renderBooksList(booksData)}
                    </div>
                </div>
        }
        </div>
    )
}

function renderBooksList(books) {
    return books.map((book, index) =>
        <SingleBook
            key={index}
            bookData={book}
            baseClassName="selected-book"
        />)
}

function renderSearchingResult(booksData) {
    return booksData.length > 0 ?
        <div>{`${SEARCHING_RESULTS} ${booksData.length}`}</div> :
        <div>{NO_SEARCHING_RESULTS}</div>
}

FilteredListComponent.propTypes = {
    booksData: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};

export default FilteredListComponent;
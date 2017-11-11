import PropTypes from "prop-types";
import React from "react";
import {SingleBook} from "../SingleBook/index";

function FilteredListComponent({booksData}){
    return (
        <div className="filtered-list">
            {renderBooksList(booksData)}
        </div>
    )
}

function renderBooksList(books){
    return books.map((book, index) =>
        <SingleBook
            key={index}
            bookData={book}
            baseClassName="selected-book"
        />)
}

FilteredListComponent.propTypes = {
    booksData: PropTypes.array
};

export default FilteredListComponent;
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

function renderBooksData(books) {
    return (books.map((book, index) => (
        <div key={index}>{
            Object.keys(book).map((row, rowIndex) =>
                Array.isArray(book[row]) ?
                    renderBooksData(book[row]) :
                    <p key={`${row}-${index}-${rowIndex}`}>{book[row]}</p>
            )
        }
        </div>
    )))
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
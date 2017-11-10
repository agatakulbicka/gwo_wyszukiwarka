import PropTypes from "prop-types";
import React from "react";

function FilteredListComponent({booksData}){
    return renderBooksData(booksData)
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

FilteredListComponent.propTypes = {
    booksData: PropTypes.array
};


export default FilteredListComponent;
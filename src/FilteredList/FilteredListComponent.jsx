import PropTypes from "prop-types";
import React from "react";
import {
    MAIN_TEXT_START,
    SEARCHING_RESULTS,
    NO_SEARCHING_RESULTS
} from "../constants/constants";
import {SingleBook} from "./SingleBook";
import {Pagination} from "./Pagination";

function FilteredListComponent(props) {
    const {
        booksData,
        baseClassName,
        getNextPage,
        getPrevPage,
        currentPage,
        lastPageNumber,
        elementsOnPageNumber
    } = props;

    return (
        typeof(booksData) === "string" ?
            <div>{MAIN_TEXT_START}</div> :
            <div>
                {renderSearchingResult(booksData)}
                <div className={baseClassName}>
                    <Pagination
                        getNextPage={getNextPage}
                        getPrevPage={getPrevPage}
                        currentPage={currentPage}
                        lastPageNumber={lastPageNumber}
                    />
                    {renderBooksList(booksData, elementsOnPageNumber, currentPage, lastPageNumber)}
                </div>
            </div>
    )
}

function renderBooksList(books, elementsOnPageNumber, currentPage, lastPageNumber) {
    const start = currentPage * elementsOnPageNumber - 1;
    const end = (currentPage + 1) * elementsOnPageNumber - 1;

    const firstPageBooks = books.slice(0, elementsOnPageNumber);
    const currentPageBooks = books.slice(start, end);
    const lastPageBooks = books.slice((currentPage - 1) * elementsOnPageNumber);

    return currentPage === 1 ?
        renderSinglePageElements(firstPageBooks) : currentPage === lastPageNumber ?
            renderSinglePageElements(lastPageBooks) :
            renderSinglePageElements(currentPageBooks);
}

function renderSinglePageElements(books) {
    return books.map((book, index) =>
        <SingleBook
            key={index}
            bookData={book}
            baseClassName="selected-book"
        />
    );
}

function renderSearchingResult(booksData) {
    return booksData.length > 0 ?
        <div>{`${SEARCHING_RESULTS} ${booksData.length}`}</div> :
        <div>{NO_SEARCHING_RESULTS}</div>
}

FilteredListComponent.propTypes = {
    baseClassName: PropTypes.string,
    booksData: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    getNextPage: PropTypes.func,
    getPrevPage: PropTypes.func,
    currentPage: PropTypes.number,
    lastPageNumber: PropTypes.number,
    elementsOnPageNumber: PropTypes.number
};

export default FilteredListComponent;
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
        elementsOnPageNumber,
        isPaginationVisible
    } = props;

    return (
        typeof(booksData) === "string" ?
            <section>{MAIN_TEXT_START}</section> :
            <section className={baseClassName}>
                {renderSearchingResult(booksData)}
                {renderPagination(
                    isPaginationVisible,
                    getNextPage,
                    getPrevPage,
                    currentPage,
                    lastPageNumber
                )}
                {renderBooksList(
                    booksData,
                    elementsOnPageNumber,
                    currentPage,
                    lastPageNumber,
                    baseClassName
                )}
            </section>
    )
}

function renderBooksList(books, elementsOnPageNumber, currentPage, lastPageNumber, baseClassName) {
    const start = currentPage * elementsOnPageNumber - 1;
    const end = (currentPage + 1) * elementsOnPageNumber - 1;

    const firstPageBooks = books.slice(0, elementsOnPageNumber);
    const currentPageBooks = books.slice(start, end);
    const lastPageBooks = books.slice((currentPage - 1) * elementsOnPageNumber);

    return currentPage === 1 ?
        renderSinglePageElements(firstPageBooks, baseClassName) : currentPage === lastPageNumber ?
            renderSinglePageElements(lastPageBooks, baseClassName) :
            renderSinglePageElements(currentPageBooks, baseClassName);
}

function renderSinglePageElements(books, baseClassName) {
    return (<div className={`${baseClassName}_main-content`}>
        {
            books.map((book, index) =>
                <SingleBook
                    key={index}
                    bookData={book}
                    baseClassName="selected-book"
                />
            )
        }
    </div>);
}

function renderSearchingResult(booksData) {
    return booksData.length > 0 ?
        <div>{`${SEARCHING_RESULTS} ${booksData.length}`}</div> :
        <div>{NO_SEARCHING_RESULTS}</div>
}

function renderPagination(isPaginationHidden, getNextPage, getPrevPage, currentPage, lastPageNumber) {
    return isPaginationHidden ? (
            <Pagination
                getNextPage={getNextPage}
                getPrevPage={getPrevPage}
                currentPage={currentPage}
                lastPageNumber={lastPageNumber}
            />
        ) :
        null;
}

FilteredListComponent.propTypes = {
    baseClassName: PropTypes.string,
    booksData: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    getNextPage: PropTypes.func,
    getPrevPage: PropTypes.func,
    currentPage: PropTypes.number,
    lastPageNumber: PropTypes.number,
    elementsOnPageNumber: PropTypes.number,
    isPaginationVisible: PropTypes.bool
};

export default FilteredListComponent;
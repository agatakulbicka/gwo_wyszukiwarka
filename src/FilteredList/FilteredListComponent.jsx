import PropTypes from "prop-types";
import React from "react";
import isString from "lodash/isString";
import {
    MAIN_TEXT_START,
    SEARCHING_RESULTS,
    NO_SEARCHING_RESULTS
} from "../constants/constants";
import {SingleBook} from "./SingleBook";
import {FiltersDataContainer} from "../FiltersData";
function FilteredListComponent(props) {
    const {
        booksData,
        baseClassName,
        currentPage,
        lastPageNumber,
        elementsOnPageNumber,
        isPaginationVisible
    } = props;

    return (
        isString(booksData) ?
            <section>{MAIN_TEXT_START}</section> :
            <section className={baseClassName}>
                {renderSearchingResult(booksData)}
                <FiltersDataContainer
                    isPaginationVisible={isPaginationVisible}
                />
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
    const start = elementsOnPageNumber * (currentPage - 1);
    const end = elementsOnPageNumber * currentPage;

    const firstPageBooks = books.slice(0, elementsOnPageNumber);
    const currentPageBooks = books.slice(start, end);
    const lastPageBooks = books.slice((currentPage - 1) * elementsOnPageNumber);

    return currentPage === 1 ?
        renderSinglePageElements(firstPageBooks, baseClassName) : currentPage === lastPageNumber ?
            renderSinglePageElements(lastPageBooks, baseClassName) :
            renderSinglePageElements(currentPageBooks, baseClassName);
}

function renderSinglePageElements(books, baseClassName) {
    return (<div className={`${baseClassName}__main-content`}>
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

FilteredListComponent.propTypes = {
    baseClassName: PropTypes.string,
    booksData: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    currentPage: PropTypes.number,
    lastPageNumber: PropTypes.number,
    elementsOnPageNumber: PropTypes.number,
    isPaginationVisible: PropTypes.bool
};

export default FilteredListComponent;
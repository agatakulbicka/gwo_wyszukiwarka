import PropTypes from "prop-types";
import React from "react";
import {PAGINATION} from "../../constants/constants";

function Pagination({getNextPage, getPrevPage, currentPage, lastPageNumber, changePageNumber}) {
    return (
        <div>
            {renderPrevButton(currentPage, getPrevPage)}
            {renderPaginationNumbers(lastPageNumber, changePageNumber, currentPage)}
            {renderNextButton(lastPageNumber, getNextPage, currentPage)}
        </div>
    );
}

function renderPrevButton(currentPage, getPrevPage) {
    return currentPage > 1 ? (
            <button onClick={() => getPrevPage(currentPage)}>{PAGINATION.prev}</button>
        ) : null;
}

function renderNextButton(lastPageNumber, getNextPage, currentPage) {
    const description = currentPage === lastPageNumber - 1 ? PAGINATION.last : PAGINATION.next;

    return currentPage < lastPageNumber ? (
            <button onClick={() => getNextPage(currentPage)}>{description}</button>
        ) : null;
}

function renderPaginationNumbers(numberOfPages, changePageNumber, currentPage) {

    return [...new Array(numberOfPages).keys()].map((number, index) => (
        <label
            key={`${number}-${index}`}
            className="radio-label"
        >
            <input
                className="radio-button"
                type="radio"
                id={`elements-${number}`}
                name="pagesNumber"
                value="pagesNumber"
                onClick={() => changePageNumber(number+1)}
                defaultChecked={number + 1 === currentPage}
            />
            {number+1}
        </label>
    ))
}

Pagination.propTypes = ({
    getNextPage: PropTypes.func,
    getPrevPage: PropTypes.func,
    currentPage: PropTypes.number,
    lastPageNumber: PropTypes.number,
    changePageNumber: PropTypes.func
});

export default Pagination;
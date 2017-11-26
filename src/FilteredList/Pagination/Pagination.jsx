import PropTypes from "prop-types";
import React from "react";
import {PAGINATION} from "../../constants/constants";

const baseClassName = "pagination";

function Pagination({getNextPage, getPrevPage, currentPage, lastPageNumber, changePageNumber}) {
    return (
        <div className={baseClassName}>
            {renderPrevButton(currentPage, getPrevPage)}
            {renderPaginationNumbers(lastPageNumber, changePageNumber, currentPage, baseClassName)}
            {renderNextButton(lastPageNumber, getNextPage, currentPage)}
        </div>
    );
}

function renderPrevButton(currentPage, getPrevPage) {
    return currentPage > 1 ? (
            <button
                className={`${baseClassName}__prev`}
                onClick={() => getPrevPage(currentPage)}
            >
                {PAGINATION.prev}
            </button>
        ) : null;
}

function renderNextButton(lastPageNumber, getNextPage, currentPage) {
    const description = currentPage === lastPageNumber - 1 ? PAGINATION.last : PAGINATION.next;

    return currentPage < lastPageNumber ? (
            <button
                className={`${baseClassName}__next`}
                onClick={() => getNextPage(currentPage)}
            >
                {description}
            </button>
        ) : null;
}

function renderPaginationNumbers(numberOfPages, changePageNumber, currentPage, baseClassName) {

    return <ul className={`${baseClassName}__page-numbers`}>{
        [...new Array(numberOfPages).keys()].map((number, index) => (
            <li
                key={`${number}-${index}`}
                className={`page-number${currentPage === number + 1 ? "-is-checked" : ""}`}
                onClick={() => changePageNumber(number + 1)}
            >
                {number + 1}
            </li>
        ))
    }
    </ul>
}

Pagination.propTypes = ({
    getNextPage: PropTypes.func,
    getPrevPage: PropTypes.func,
    currentPage: PropTypes.number,
    lastPageNumber: PropTypes.number,
    changePageNumber: PropTypes.func
});

export default Pagination;
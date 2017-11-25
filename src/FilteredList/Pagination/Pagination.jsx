import PropTypes from "prop-types";
import React from "react";
import {PAGINATION} from "../../constants/constants";

function Pagination({getNextPage, getPrevPage, currentPage, lastPageNumber}) {
    return (
        <div>
            {renderPrevButton(currentPage, getPrevPage)}
            <span>PAGINACJA</span>
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

Pagination.propTypes = ({
    getNextPage: PropTypes.func,
    getPrevPage: PropTypes.func,
    currentPage: PropTypes.number,
    lastPageNumber: PropTypes.number
});

export default Pagination;
import PropTypes from "prop-types";
import React from "react";

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
            <button onClick={() => getPrevPage(currentPage)}>WSTECZ</button>
        ) : null;
}

function renderNextButton(lastPageNumber, getNextPage, currentPage) {
    return currentPage < lastPageNumber ? (
            <button onClick={() => getNextPage(currentPage)}>DALEJ</button>
        ) : null;
}
Pagination.propTypes = ({
    getNextPage: PropTypes.func,
    getPrevPage: PropTypes.func,
    currentPage: PropTypes.number,
    lastPageNumber: PropTypes.number
});

export default Pagination;
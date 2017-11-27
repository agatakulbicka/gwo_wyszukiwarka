import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";
import {PAGINATION} from "../../constants/constants";

const baseClassName = "pagination";

const {prev, next} = PAGINATION;


function Pagination({getNextPage, getPrevPage, currentPage, lastPageNumber, changePageNumber}) {
    const classNamePrev = classNames(`${baseClassName}__prev`, {"is-hidden": currentPage === 1});
    const classNameNext = classNames(`${baseClassName}__next`, {"is-hidden": currentPage === lastPageNumber});
    return (
        <div className={baseClassName}>
            {renderPaginationButton(currentPage, getPrevPage, classNamePrev, prev)}
            {renderPaginationNumbers(lastPageNumber, changePageNumber, currentPage, baseClassName)}
            {renderPaginationButton(currentPage, getNextPage, classNameNext, next)}

        </div>
    );
}

function renderPaginationButton(currentPage, getPage, className,  arrow) {
    return (
        <button
            className={className}
            onClick={() => getPage(currentPage)}
        >
            {arrow}
        </button>
    );

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
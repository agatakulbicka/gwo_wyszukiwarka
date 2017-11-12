import PropTypes from "prop-types";
import React from "react";
import {
    FIELDS_NAMES,
    FIELDS_DESC,
    BOOK_COVER_DESCRIPTION,
    TO_SHOP
} from "../constants/constants";

function SingleBook({
    bookData,
    bookData: {
        title,
        cover,
        url
    },
}) {

    return renderBookBox(cover, bookData, url, title);
}

function getFieldWithDescription(book, description, baseClassName) {
    const fieldName = Object.values(FIELDS_NAMES).find(name => name === FIELDS_NAMES[description]);
    const additionalClass = description === "isbn" || description === "men" ? "is-smaller" : "";

    return (
        <div className={`${baseClassName}__content-rows ${additionalClass}`}>
            <span className="field">{`${fieldName}: `}</span>
            <span className="desc">{description === "levels" ?
                `${book[description][0].class}, ${book[description][0].school}` :
                book[description]
            }
        </span>
        </div>
    )
}

function renderBookBox(cover, bookData, url, title) {
    const baseClassName = "book-box";

    return (
        <div className={baseClassName}>
            <h1 className={`${baseClassName}__header`}>
                {title}
            </h1>

            <div className={`${baseClassName}__content`}>
                <img
                    alt={`${BOOK_COVER_DESCRIPTION} ${title}`}
                    className={`${baseClassName}__content-cover`}
                    height={200}
                    src={cover}
                />
                <div className={`${baseClassName}__content-description`}>
                    {FIELDS_DESC.map((field, index) =>
                        <div key={index}>
                            {getFieldWithDescription(bookData, field, baseClassName)}
                        </div>
                    )}
                </div>
            </div>

            <form
                className={`${baseClassName}__button`}
                action={url}
                method="get"
                target="_blank">
                <button>{TO_SHOP}</button>
            </form>
        </div>
    )
}


SingleBook.propTypes = {
    baseClassName: PropTypes.string,
    bookData: PropTypes.object
};

export default SingleBook;
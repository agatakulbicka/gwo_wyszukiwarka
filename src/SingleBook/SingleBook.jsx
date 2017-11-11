import PropTypes from "prop-types";
import React from "react";
import {FIELDS_NAMES, FIELDS_DESC} from "../constants/constants";
import {Button,  Col} from "react-bootstrap";

function SingleBook({
    bookData,
    bookData: {
        title,
        cover,
        url
    },
}) {

    return (
        <Col sx={12} sm={6} md={4}>
            {renderBookBox(cover, bookData, url, title)}
        </Col>
    );
}

function getFieldWithDescription(book, description, baseClassName) {

    const fieldName = Object.values(FIELDS_NAMES).find(name => name === FIELDS_NAMES[description]);

    return (
        <div className={`${baseClassName}__content-rows`}>
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
                    className={`${baseClassName}__content-cover`}
                    height={200}
                    src={cover}
                />
                <div
                    className={`${baseClassName}__content-description`}
                >
                    {FIELDS_DESC.map((field, index) =>
                        <div key={index}

                        >
                            {getFieldWithDescription(bookData, field, baseClassName)}</div>
                    )}

                </div>
            </div>

            <div className={`${baseClassName}__footer`}>
                <Button type="button" bsStyle="primary" href={url} target="_blank">KUP</Button>
            </div>
        </div>
    )
}


SingleBook.propTypes = {
    baseClassName: PropTypes.string,
    bookData: PropTypes.object
};

export default SingleBook;
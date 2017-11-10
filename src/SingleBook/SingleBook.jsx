import PropTypes from "prop-types";
import React from "react";
import {FIELDS_NAMES, FIELDS_DESC} from "../constants/constants";
import {Thumbnail, Row, Media, Button, ButtonToolbar, Col} from "react-bootstrap";

function SingleBook({
    bookData,
    bookData: {
        title,
        cover,
        url
    },
    baseClassName
}) {

    return (
        <Col sx={12} sm={6}> <Thumbnail>
            <Row className={`${baseClassName}__header`}>
                <div>{title}</div>
            </Row>
            <Media className={`${baseClassName}__content`}>
                <Media.Left>
                    <img height={200} src={cover}/>
                </Media.Left>
                <Media.Body>
                    {FIELDS_DESC.map((field, index) =>
                        <div key={index}

                        >
                        {getFieldWithDescription(bookData, field, baseClassName)}</div>
                    )}

                </Media.Body>
            </Media>
            <ButtonToolbar className={`${baseClassName}__footer`}>
                <Button type="button" bsStyle="primary" href={url} target="_blank">KUP</Button>
            </ButtonToolbar>
        </Thumbnail></Col>
    );
}

function getFieldWithDescription(book, description, baseClassName) {

    const fieldName = Object.values(FIELDS_NAMES).find(name => name === FIELDS_NAMES[description]);

    return (
        <div className={`${baseClassName}__content-rows`}>
            <span className="field">{`${fieldName}: `}</span>
            <span className="description">{description === "levels" ?
                `${book[description][0].class}, ${book[description][0].school}` :
                book[description]
            }
        </span>
        </div>
    )
}


SingleBook.propTypes = {
    baseClassName: PropTypes.string,
    bookData: PropTypes.object
};

export default SingleBook;
import PropTypes from "prop-types";
import React, {Component} from "react";
import {SEARCH_BOOK_LABEL, SEARCH_BOOK_INPUT_TEXT} from "../constants/constants";
import {Col} from "react-bootstrap";

class SearchBoxComponent extends Component {

    constructor() {
        super();
        this.state = {value: ""};

        this.getResults = this.getResults.bind(this);
    }

    getResults(event) {
        event.preventDefault();
        this.props.fetchBooksData(encodeURIComponent(this.state.value))
    }

    onChange = (event) => this.setState({value: event.target.value});


    render() {
        const baseClassName = "search-box";

        return (
            <Col md={12} className={baseClassName}>
                <form onSubmit={this.getResults}>
                    <div className={`${baseClassName}__label`}>
                        <label htmlFor="search-input">
                            {SEARCH_BOOK_LABEL}
                        </label>
                    </div>
                    <div className={`${baseClassName}__search-container`}>
                        <input
                            className="search-input"
                            id="search-input"
                            type="text"
                            value={this.state.value}
                            onChange={this.onChange}
                            placeholder={SEARCH_BOOK_INPUT_TEXT}
                        />
                        <input
                            className={`${baseClassName}__submit-button`}
                            type="submit"
                            value="Submit"/>
                    </div>
                </form>
            </Col>
        );
    }
}


SearchBoxComponent.propTypes = {
    fetchBooksData: PropTypes.func
};


export default SearchBoxComponent;

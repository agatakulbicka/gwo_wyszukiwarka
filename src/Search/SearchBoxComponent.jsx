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
        return (
            <Col md={12} className="searchbox-component">
                <form onSubmit={this.getResults}>
                    <label htmlFor="search-input">
                        {SEARCH_BOOK_LABEL}
                    </label>
                    <input
                        id="search-input"
                        type="text"
                        value={this.state.value}
                        onChange={this.onChange}
                        placeholder={SEARCH_BOOK_INPUT_TEXT}
                    />
                    <input type="submit" value="Submit"/>
                </form>
            </Col>
        );
    }
}


SearchBoxComponent.propTypes = {
    fetchBooksData: PropTypes.func
};


export default SearchBoxComponent;

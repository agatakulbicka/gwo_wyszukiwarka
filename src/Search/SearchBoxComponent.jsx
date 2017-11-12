import PropTypes from "prop-types";
import React, {Component} from "react";
import {
    SEARCH_BOOK_LABEL,
    SEARCH_BOOK_INPUT_TEXT,
    SEARCH
} from "../constants/constants";

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
            <form
                className={baseClassName}
                onSubmit={this.getResults}
            >
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
                        value={SEARCH}/>
                </div>
            </form>
        );
    }
}

SearchBoxComponent.propTypes = {
    fetchBooksData: PropTypes.func
};

export default SearchBoxComponent;

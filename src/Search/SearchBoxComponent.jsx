import PropTypes from "prop-types";
import React, {Component} from "react";
import debounce from "lodash/debounce";
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

    getResults = () => {
        this.props.fetchBooksData(encodeURIComponent(this.state.value))
    };

    getResultsDebounced = debounce(() => {
        this.getResults()
    }, 1000);

    onChange = event => {
        event.preventDefault();
        this.setState({value: event.target.value});
        this.getResultsDebounced();
    };

    onSubmit = event => {
        event.preventDefault();
        this.getResults();
    };

    render() {
        const baseClassName = "search-box";

        return (
            <form
                className={baseClassName}
                onSubmit={this.onSubmit}
            >
                <div className={`${baseClassName}__label`}>
                    <label
                        htmlFor="searchInput"
                        id="searchLabel"
                    >
                        {SEARCH_BOOK_LABEL}
                    </label>
                </div>
                <div className={`${baseClassName}__search-container`}>
                    <input
                        className="search-input"
                        id="searchInput"
                        type="text"
                        value={this.state.value}
                        onChange={this.onChange}
                        placeholder={SEARCH_BOOK_INPUT_TEXT}
                        aria-labelledby="searchLabel"
                        required
                        maxLength="12"
                        minLength="3"
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

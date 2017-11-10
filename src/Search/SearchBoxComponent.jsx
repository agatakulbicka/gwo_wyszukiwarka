import PropTypes from "prop-types";
import React, {Component} from "react";

class SearchBoxComponent extends Component {

    constructor(){
        super();
        this.state = {value: ""};

        this.getResults = this.getResults.bind(this);
    }

    getResults(event) {
        event.preventDefault();
        this.props.fetchBooksData(this.state.value)
    }

    onChange = (event) => this.setState({ value: event.target.value });


    render() {
        return (
            <div>
                <form onSubmit={this.getResults}>
                    <label htmlFor="search-input">
                        Podaj szukaną frazę...
                    </label>
                    <input
                        id="search-input"
                        type="text"
                        value={this.state.value}
                        onChange={this.onChange}
                        placeholder="Wpisz..."
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}


SearchBoxComponent.propTypes = {
    fetchBooksData: PropTypes.func
};


export default SearchBoxComponent;

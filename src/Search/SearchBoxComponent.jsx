import PropTypes from "prop-types";
import React, {Component} from "react";
import {Col} from "react-bootstrap";

class SearchBoxComponent extends Component {

    constructor(){
        super();
        this.state = {value: ""};

        this.getResults = this.getResults.bind(this);
    }

    getResults(event) {
        const {fetchBooksData} = this.props;
        const {value} = this.state;
        event.preventDefault();
        setTimeout(function(){
           fetchBooksData(value)
        },
            900)
    }

    onChange = (event) => this.setState({ value: event.target.value });


    render() {
        return (
            <Col xs={2} xsOffset={8} className="searchbox-component">
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
            </Col>
        );
    }
}


SearchBoxComponent.propTypes = {
    fetchBooksData: PropTypes.func
};


export default SearchBoxComponent;

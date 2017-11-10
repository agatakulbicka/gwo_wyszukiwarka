import PropTypes from "prop-types";
import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import fetchBooksData from "../actions/actions";

class SearchBoxContainer extends Component {

    constructor() {
        super();

        this.renderBooksData = this.renderBooksData.bind(this);
    }

    componentDidMount() {
        this.props.fetchBooksData2("matematyka");
    }

    renderBooksData(books) {
        return (books.map((book, index) => (
            <div className={`div-${index}`}>{
                Object.keys(book).map((row, rowIndex) =>
                    Array.isArray(book[row]) ?
                        this.renderBooksData(book[row]) :
                        <p className={`${row}-${index}-${rowIndex}`}>{book[row]}</p>
                )
            }
            </div>
        )))
    }

    render() {
        const {booksData} = this.props;
        return (
            this.renderBooksData(booksData)
        )
    }

}

SearchBoxContainer.propTypes = {
    booksData: PropTypes.array

};

const mapStateToProps = state => ({
    booksData: state.booksData
});

const mapDispatchToProps = dispatch => ({
    fetchBooksData2: compose(dispatch, fetchBooksData)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBoxContainer);
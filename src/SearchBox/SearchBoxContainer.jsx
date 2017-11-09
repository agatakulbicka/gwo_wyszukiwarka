import PropTypes from "prop-types";
import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import fetchBooksData from "../actions/actions";

class SearchBoxContainer extends Component {

    componentDidMount() {
        //this.props.store.dispatch(fetchBooksData("biologia"));
        this.props.fetchBooksData2("matematyka");
        console.log("dcssssssssssssssssssssssssss",this.props.fetchBooksData2("plastyka"));
    }

    render() {

        console.log("PROPSACZE", this.props);
        return (
            <div>00000000000000000000</div>
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
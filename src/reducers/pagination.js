import {combineReducers} from 'redux'
import {GET_ELEMENTS_ON_PAGE_NUMBER, RECEIVE_BOOKS_DATA} from "../constants/constants"

function elementsOnPageNumber(state = 6, action) {
    switch(action.type) {
        case GET_ELEMENTS_ON_PAGE_NUMBER:
            return action.elementsNumber;
        default:
            return state
    }
}

function currentPage(state = 1, action) {
    switch(action.type) {
        case RECEIVE_BOOKS_DATA:
            return action.booksData.length;
        default:
            return state
    }
}

const pagination = combineReducers({
    currentPage,
    elementsOnPageNumber
});

export default pagination;

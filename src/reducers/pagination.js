import {combineReducers} from 'redux'
import {
    GET_ELEMENTS_ON_PAGE_NUMBER,
    GET_NEXT_PAGE_NUMBER,
    GET_PREV_PAGE_NUMBER,
    CHANGE_CURRENT_PAGE_NUMBER,
    RECEIVE_BOOKS_DATA
} from "../constants/constants"

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
        case CHANGE_CURRENT_PAGE_NUMBER:
        case GET_NEXT_PAGE_NUMBER:
        case GET_PREV_PAGE_NUMBER:
            return action.currentPage;
        case GET_ELEMENTS_ON_PAGE_NUMBER:
        case RECEIVE_BOOKS_DATA:
            return 1;
        default:
            return state
    }
}

const pagination = combineReducers({
    currentPage,
    elementsOnPageNumber
});

export default pagination;

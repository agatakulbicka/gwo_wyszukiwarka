import { combineReducers } from 'redux'
import {FETCHING_BOOKS_DATA, REQUEST_BOOKS_DATA, RECEIVE_BOOKS_DATA} from "../constants/constants"


function selectedPhrase(state = {}, action) {
    switch(action.type) {
        case REQUEST_BOOKS_DATA:
        case RECEIVE_BOOKS_DATA:
            return action.phrase;
        default:
            return state
    }
}

function booksData(state = [], action) {
    switch(action.type) {
        case RECEIVE_BOOKS_DATA:
            return action.booksData;
        default:
            return state
    }
}

function isFetchingBooksData(state = false, action) {
    switch(action.type) {
        case FETCHING_BOOKS_DATA:
            return true;
        default:
        case RECEIVE_BOOKS_DATA:
            return state
    }
}

const rootReducer = combineReducers({
    booksData,
    isFetchingBooksData,
    selectedPhrase
});

export default rootReducer;
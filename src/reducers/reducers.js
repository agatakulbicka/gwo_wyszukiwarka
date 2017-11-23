import { combineReducers } from 'redux'
import { REQUEST_BOOKS_DATA, RECEIVE_BOOKS_DATA} from "../constants/constants"
import pagination from "./pagination";


function selectedPhrase(state = {}, action) {
    switch(action.type) {
        case REQUEST_BOOKS_DATA:
        case RECEIVE_BOOKS_DATA:
            return action.phrase;
        default:
            return state
    }
}

function booksData(state = "", action) {
    switch(action.type) {
        case RECEIVE_BOOKS_DATA:
            return action.booksData;
        default:
            return state
    }
}

function isFetchingBooksData(state, action) {
    switch(action.type) {
        case REQUEST_BOOKS_DATA:
            return true;
        default:
        case RECEIVE_BOOKS_DATA:
            return false
    }
}

const rootReducer = combineReducers({
    booksData,
    isFetchingBooksData,
    selectedPhrase,
    pagination
});

export default rootReducer;
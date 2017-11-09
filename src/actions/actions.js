import fetch from "isomorphic-fetch";
import { BASE_URL, REQUEST_BOOKS_DATA, RECEIVE_BOOKS_DATA} from "../constants/constants"

function requestBooksData(phrase) {

    return {
        type: REQUEST_BOOKS_DATA,
        phrase
    }
}

function receiveBooksData(phrase, json) {
    return {
        type: RECEIVE_BOOKS_DATA,
        phrase,
        booksData: json
    }
}

export default function fetchBooksData(phrase) {
    return dispatch => {
        dispatch(requestBooksData(phrase));
        return fetch(`${BASE_URL}${phrase}`)
            .then(response => response.json())
            .then(json => dispatch(receiveBooksData(phrase, json)))
    }
}

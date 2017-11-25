import fetch from "isomorphic-fetch";
import {
    BASE_URL, REQUEST_BOOKS_DATA,
    RECEIVE_BOOKS_DATA,
    GET_ELEMENTS_ON_PAGE_NUMBER,
    CHANGE_CURRENT_PAGE_NUMBER,
    GET_NEXT_PAGE_NUMBER,
    GET_PREV_PAGE_NUMBER
} from "../constants/constants"

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

export function fetchBooksData(phrase) {
    return dispatch => {
        dispatch(requestBooksData(phrase));
        return fetch(`${BASE_URL}${phrase}`)
            .then(response => response.json())
            .then(json => dispatch(receiveBooksData(phrase, json)))
    }
}

export function getNumberOfElementsOnPage(elementsNumber){
    return {
        type: GET_ELEMENTS_ON_PAGE_NUMBER,
        elementsNumber: elementsNumber
    }
}

export function changePageNumber(currentPage){
    return {
        type: CHANGE_CURRENT_PAGE_NUMBER,
        currentPage: currentPage
    }
}

export function getNextPage(currentPage){
    return {
        type: GET_NEXT_PAGE_NUMBER,
        currentPage: currentPage + 1
    }
}

export function getPrevPage(currentPage){
    return {
        type: GET_PREV_PAGE_NUMBER,
        currentPage: currentPage - 1
    }
}
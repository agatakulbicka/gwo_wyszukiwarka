export const BASE_URL = 'https://gwo.pl/booksApi/v1/search?query=';

export const FETCHING_BOOKS_DATA = 'FETCHING_BOOKS_DATA';
export const REQUEST_BOOKS_DATA = 'REQUEST_BOOKS_DATA';
export const RECEIVE_BOOKS_DATA = 'RECEIVE_BOOKS_DATA';

export const FIELDS_NAMES = {
    title: "Tytuł",
    author: "Autorzy",
    isbn: "ISBN",
    men: "Numer dopuszczenia MEN",
    pages_count: "Liczba stron",
    levels: "Poziomy nauczania",
    subject: "Przedmiot",
    type: "Rodzaj publiakcji",
    cover: "Okładka"
};

export const FIELDS_DESC = [
    "author",
    "levels",
    "subject",
    "type",
    "pages_count",
    "isbn",
    "men"
];

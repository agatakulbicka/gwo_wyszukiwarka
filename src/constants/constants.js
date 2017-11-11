export const BASE_URL = 'https://gwo.pl/booksApi/v1/search?query=';

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

export const DATA_SEARCHING = "Wyszukiwanie danych...";

export const SEARCH_BOOK_LABEL = "Wyszukiwarka książek";

export const SEARCH_BOOK_INPUT_TEXT = "🔍 Wpisz wyszukiwaną frazę...";

export const BOOK_COVER_DESCRIPTION= "Okładka książki pd tytułem";

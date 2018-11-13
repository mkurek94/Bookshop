import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setBooks = (books) => {
    return {
        type: actionTypes.SET_BOOKS,
        books: books
    };
};

export const initBooks = page => {
    return dispatch => {
        axios.get(`http://localhost:3001/api/book?page=${page}`).then(response => {
            dispatch(setBooks(response.data.data))
        });
    };
};

export const setPages = page => {
    return {
        type: actionTypes.SET_PAGE,
        page: page
    }
}
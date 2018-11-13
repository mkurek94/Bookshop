import * as actionTypes from '../action/actionTypes';

const initialState = {
    page: 1,
    books: [],
    basket: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_BOOKS:
            return {
                ...state,
                books: action.books
            }
        case actionTypes.SET_PAGE:
            if(action.page <= 0 || action.page >= 3) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    page: action.page
                }
            }
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                basket: state.basket.concat({id: action.id, title: action.title, author: action.author, cover: action.cover, price: action.price})
            }
        default:
            return state;
    }
};

export default reducer;
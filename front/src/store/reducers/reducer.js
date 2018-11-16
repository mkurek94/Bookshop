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
            if(state.basket.find(el => el.id === action.id)) {
                const id = Object.keys(state.basket).map(key => {
                    if(state.basket[key].id === action.id) {
                        return key;
                    } else {
                        return undefined;
                    }
                });
                let itemId;
                id.forEach(el => {
                    if(el !== undefined) {
                        console.log(el);
                        itemId = parseInt(el);
                    }
                })
                return {
                    ...state,
                    basket: state.basket.map(
                        (items, index) => index === itemId ? { ...items, number: items.number + 1 } : items
                    )
                }
            } else {
                return {
                    ...state,
                    basket: state.basket.concat({id: action.id, title: action.title, author: action.author, cover: action.cover, price: action.price, number: action.number})
                }
            }
        case actionTypes.REMOVE_ITEM:
            const updatedArray = state.basket.filter(result => result.id !== action.id);
            return {
                ...state,
                basket: updatedArray
            }
        default:
            return state;
    }
};

export default reducer;
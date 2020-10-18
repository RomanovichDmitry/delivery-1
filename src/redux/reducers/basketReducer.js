import {BASKET_ADD_PRODUCT, BASKET_GET_PRODUCTS, BASKET_REMOVE_PRODUCT, BASKET_UPDATE_PRODUCT} from "../types";

const initialState = [];

export const basketReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case BASKET_GET_PRODUCTS:
            return state;
        case BASKET_ADD_PRODUCT:
            return [...state, payload];
        case BASKET_REMOVE_PRODUCT:
            return state.filter(product => product !== payload);
        case BASKET_UPDATE_PRODUCT:
            return state.map(product => {
                if (product !== payload) {
                    return product;
                }
                return payload;
            })
        default:
            return state;
    }
}

import {BASKET_ADD_PRODUCT, BASKET_GET_PRODUCTS, BASKET_REMOVE_PRODUCT, BASKET_UPDATE_PRODUCT} from "../types";

export function getBasket() {
    return {type: BASKET_GET_PRODUCTS}
}

export function addProduct(product) {
    return {type: BASKET_ADD_PRODUCT, payload: product,}
}

export function updateProduct(product) {
    return {type: BASKET_UPDATE_PRODUCT, payload: product,}
}

export function removeProduct(product) {
    return {type: BASKET_REMOVE_PRODUCT, payload: product,}
}
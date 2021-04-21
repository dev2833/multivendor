import * as types from '../constants/ActionTypes'


const filtersReducerDefaultState = {
    brand: ["all"],
    value: { min: 250, max: 950 },
    sortBy: "",
    storeId:"all",
    vendorId:"all",
    category:"all",
    city:"all",
    nextDay:"all",
    type:"all",
    charge:"all",
    coinType:"all"

};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    // console.log('Action Result');
    // console.log(action);
    switch (action.type) {
        case types.SET_VENDOR_ID:
            return {
                ...state,
                vendorId: action.vendorId
            };
        case types.SET_COIN_TYPE:
            return {
                ...state,
                coinType: action.coinType
            };
        case types.SET_CHARGE:
            return {
                ...state,
                charge: action.charge
            };
        case types.FILTER_TYPE:
            return {
                ...state,
                type: action.data
            };
        case types.FILTER_BRAND:
            return {
                ...state,
                brand: action.brand
            };
        case types.FILTER_COLOR:
            return {
                ...state,
                color: action.color
            };
        case types.FILTER_PRICE:
            return {
                ...state,
                value: {min: action.value.value.min, max: action.value.value.max }
            };
        case types.SORT_BY:
            return {
                ...state,
                sortBy: action.sort_by
            };
        case types.SET_STOREID:
            return {
                ...state,
                storeId: action.storeId
            };
        case types.SET_CATEGORY:
            return {
                ...state,
                category: action.category
            };
        case types.SET_CITY:
            return {
                ...state,
                city: action.city
            };
        case types.SET_NEXTDAY:
            return {
                ...state,
                nextDay: action.data
            };
        default:
            return state;
    }
}

export default filtersReducer;
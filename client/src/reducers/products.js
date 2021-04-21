import {
    ADD_PRODUCT,
    SET_CURRENT_PRODUCTS,
    FETCH_SINGLE_PRODUCT,
    CHANGE_CURRENCY,
    RECEIVE_PRODUCTS,
    RECEIVE_COINS ,
    CHANGE_CURRENCYNAME,
    RECEIVE_RATE,
    SELECT_PRODUCT,
    RECEIVE_CATEGORY} from "../constants/ActionTypes";


const initialState = {
    coins: [],
    products: [],
    allProducts:[],
    symbol: '$',
    currency:0,
    product_details: [],
    rate:{},
    category:[],
    selectedProduct:{}
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PRODUCT:
            return { ...state,
                selectedProduct:action.product };
        case ADD_PRODUCT:
            return { ...state,
                products: [...state.products,action.payload] };
        case RECEIVE_CATEGORY:
            return { ...state,
                category: action.category };
        case RECEIVE_PRODUCTS:
            return { ...state,
                products: action.products };
        case RECEIVE_COINS:
            return { ...state,
                coins: action.coins };
        case RECEIVE_RATE:
            return { ...state,
                rate: action.rate };
        case SET_CURRENT_PRODUCTS:
            return { ...state,
                products: action.products };
        case FETCH_SINGLE_PRODUCT:
            if (state.products.findIndex(product => product.id === action.productId) !== -1) {
                const singleItem = state.products.reduce((itemAcc, product) => {
                    return product
                }, [])
                return { ...state,
                    product_details: singleItem };
            }

        case CHANGE_CURRENCY:
            return { ...state,
                symbol: action.symbol };
        case CHANGE_CURRENCYNAME:
            return { ...state,
                currency: action.currency };
        default:
            return state;
    }
};
export default productReducer;
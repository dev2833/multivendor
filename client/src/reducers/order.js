import {
    RECEIVE_ORDERS,
    RECEIVE_ORDER ,
    RECEIVE_HISTORY,
    RECEIVE_ORDERHISTORY,
    RECEIVE_TRYHOMEHISTORY,
    RECEIVE_TENPLUSONE,
    ADD_ORDER_DETAIL} from "../constants/ActionTypes";


const initialState = {
    myOrder: [{
        orderDate:"",
        productName:"",
        quantity:0,
        status:"",
        price:0
    }],
    myHomeHistory:[
        {
            orderDate:"",
            productName:"",
            storeName:"",
            vendor:"",
            status:""
        }
    ],
    orderHistory:[],
    tryHomeHistory:[],
    tenPlusOne:[],
    orders:[]

};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_ORDERS:
            return { ...state,
                orders: action.orders };
        case RECEIVE_TENPLUSONE:
            return { ...state,
                tenPlusOne: action.tenPlusOne };
        case RECEIVE_TRYHOMEHISTORY:
            return { ...state,
                tryHomeHistory: action.tryHomeHistory };
        case RECEIVE_ORDERHISTORY:
            return { ...state,
                orderHistory: action.orderHistory };
        case RECEIVE_ORDER:
            return { ...state,
                myOrder: action.myOrder };
        case RECEIVE_HISTORY:
            return { ...state,
                myHomeHistory: action.myHomeHistory };
        case ADD_ORDER_DETAIL:
            action.orders.map((order)=>{
                state.orderHistory.push(order)
            })
            return { ...state, orderHistory: [...state.orderHistory] }
        default:
            return state;
    }
};
export default orderReducer;
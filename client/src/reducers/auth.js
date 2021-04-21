import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    SET_OTP,
    OTP_SENT,
    LOGIN_ERROR,
    SET_CURRENT_USER,
    SET_PASS_MSG,
    ADD_ADDRESS,
    UPDATE_ADDRESS,
    DEL_ADDRESS,
    RECEIVE_ADDRESS
} from '../constants/ActionTypes';

const initialState = {
    currentUser:{},
    message:"",
    isLogin:false,
    token:"",
    role:"Customer",
    otp:"",
    messageLogin:'',
    passMessage:'',
    addresses:[]

};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_ADDRESS:
            return { ...state, addresses: action.addresses }
        case DEL_ADDRESS:
            return {...state,addresses: state.addresses.filter(item => item._id !== action.id)}

        case ADD_ADDRESS:
            console.log(action.address)
            return{ ...state, addresses: [...state.addresses, action.address]}
        case UPDATE_ADDRESS:
            const data=[]
            state.addresses.map((add)=>{
                if(add._id === action.address._id){
                    add = action.address
                }
                data.push(add)
            })
            return{ ...state, addresses:data }
        case SET_PASS_MSG:
            return{ ...state, passMessage: action.message }
        case SET_CURRENT_USER:
            return{ ...state, currentUser: action.user }
        case SET_OTP:
            return{ ...state, otp: action.otp }
        case OTP_SENT:
            return{ ...state, message: action.message }
        case AUTH_USER:
            return { ...state, currentUser: action.user, message: '', isLogin: true, token: action.token,role:action.role }
        case UNAUTH_USER:
            return { ...state, currentUser: null, isLogin: false, role:"Customer" }
        case AUTH_ERROR:
            return { ...state, message: action.message }
        case LOGIN_ERROR:
            return { ...state, messageLogin: action.message }
        default:
            return state
    }
}
import {
    ALL_USER,
    USER_ERROR,
    USER_DELETE,
    RECEIVE_VENDOR,
    UPDATE_USER,
    VENDOR_UPDATE,
    DEL_VENDOR,
    ADD_VENDOR,
    SELECT_VENDOR,
    UNSELECT_VENDOR,
    SELECT_USER  ,
    ADD_USER  
} from '../constants/ActionTypes';

const initialState = {
    users: [],
    vendors:[],
    selectedVendor:"",
    selectedUser:""

};
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {...state,users:[...state.users,action.user]}
        case SELECT_USER:
            return {...state,selectedUser:action.user}
        case SELECT_VENDOR:
            return {...state,selectedVendor:action.vendor}
        case UNSELECT_VENDOR:
            return {...state,selectedVendor:""}
        case ADD_VENDOR:
            return {...state,vendors:[...state.vendors,action.vendor]}
        case DEL_VENDOR:
            return {...state,vendors: state.vendors.filter(item => item.id !== action.id)}
        case VENDOR_UPDATE:
            const  data=[]
            state.vendors.map((vendor)=>{                
                if(vendor._id === action.vendor._id){
                    vendor = action.vendor
                }
                data.push(vendor)                
            })
            return {...state,vendors:data}

        case RECEIVE_VENDOR:
            return { ...state, vendors: action.vendors }
        case ALL_USER:
            return { ...state, users: action.users }
        case USER_DELETE:
            return {...state,users: state.users.filter(item => item.id !== action.id)}
        case UPDATE_USER:
            const  newData=[]
            state.users.map((user)=>{                
                if(user._id === action.user._id){
                    user = action.user

                }
                newData.push(user)
                
            })
            return {...state,users:newData}
        // case USER_ERROR:
        //     return { ...state, message: action.message, users: [] }
        default:
            return state
    }
}


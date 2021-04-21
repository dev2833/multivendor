import {SELECT_STORE,STORE_UPDATE,DEL_STORE,
    RECEIVE_STORES ,SET_CURRENT_STORE, RECEIVE_METAL_HISTORY,ADD_STORE} from "../constants/ActionTypes";
import user from "./user";


const initialState = {
    stores: [],
    metalHistory:[],
    currentStore:"5e3e838bfee6f1c869fa33fe",
    selectedStore:""
};

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_UPDATE:            
        const  newData=[]
        state.stores.map((store)=>{                
            if(store._id === action.store._id){
                store = action.store

            }
            newData.push(store)
            
        })
        return {...state,stores:newData}
        case DEL_STORE:
            return {...state,stores: state.stores.filter(item => item.id !== action.id)}
        case SELECT_STORE:
            return { ...state,
                selectedStore: action.store};
        case ADD_STORE:
            return { ...state,
                stores: [...state.stores,action.payload ]};
        case RECEIVE_STORES:
                return { ...state,
                    stores: action.stores };
        case SET_CURRENT_STORE:
                return { ...state,
                    currentStore: action.store };
        case RECEIVE_METAL_HISTORY:
            return {
                ...state,metalHistory:action.metalHistory
            };
        default:
                return state;
    }
};
export default storeReducer;
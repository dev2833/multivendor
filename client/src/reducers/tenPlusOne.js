import {
    ADD_TENPLUSONE,
    RECEIVE_TENPLUSONE} from "../constants/ActionTypes";


const initialState = {
    tenPlusOnes: []

};

const tenPlusOneReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TENPLUSONE:
            return { ...state,
                tenPlusOnes: [...state.tenPlusOnes,action.tenPlusOne ]};
        case RECEIVE_TENPLUSONE:
                return { ...state,
                    tenPlusOnes: action.tenPlusOnes };

        default:
                return state;
    }
};
export default tenPlusOneReducer;
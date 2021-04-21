import {
    RECEIVE_TRY_HOME} from "../constants/ActionTypes";


const initialState = {
    tryHomes: []

};

const tryHomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_TRY_HOME:
                return { ...state,
                    tryHomes: action.tryHomes };

        default:
                return state;
    }
};
export default tryHomeReducer;
import {
    RECEIVE_WALLET_HISTORY} from "../constants/ActionTypes";


const initialState = {
    walletHistories: []

};

const walletReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_WALLET_HISTORY:
                return { ...state,
                    walletHistories: action.walletHistories };

        default:
                return state;
    }
};
export default walletReducer;
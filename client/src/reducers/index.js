import { combineReducers } from 'redux';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'

// Import custom components
import productReducer from './products';
import cartReducer from './cart';
import filtersReducer from './filters';
import wishlistReducer from './wishlist';
import auth from './auth';
import user from './user';
import store from './store';
import order from './order';
import tryHome from './tryHome';
import tenPlusOne from './tenPlusOne'
import walletReducer from './wallet'


const appReducer = combineReducers({
    auth:auth,
    user:user,
    tryHome:tryHome,
    tenPlusOne:tenPlusOne,
    store:store,
    order:order,
    data: productReducer,
    cartList: cartReducer,
    filters: filtersReducer,
    wishlist: wishlistReducer,
    walletReducer:walletReducer,
    Intl
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }  
  return appReducer(state, action)
}

export default rootReducer;
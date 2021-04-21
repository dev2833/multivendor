import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import jwt_decode from 'jwt-decode'
import {signout } from './actions/index'
import './index.scss';

// Import custom components
import store from './store';
import {getAllCoin,allusers,allVendors,getStore, getAllProducts,getRate ,changeCurrency,getStores,getMetalHistory,getCategory,getOrders,getTryHome,getTenPlusOne} from './actions'

import Watch from './components/layouts/landing/main';
//Collection Pages
import CollectionLeftSidebar from "./components/collection/collection-left-sidebar";
import Coin from "./components/collection/coin";
import CoinSideBar from "./components/products/coin-sidebar"

// Product Pages
import LeftSideBar from "./components/products/left-sidebar";


// Features
import Layout from './components/app'
import Cart from './components/cart'
import orderHistory from './components/order'
import tryHomeHistory from './components/home/history'
import wishList from './components/wishlist'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'
import tenPlusOneSuccess from './components/checkout/tenSuccess'
import tenPlusOne from './components/home/tenPlusOne'
import tryHome from './components/home/index'
// Extra Pages
import aboutUs from './components/pages/about-us'
import PageNotFound from './components/pages/404'
import Login from './components/pages/login'
import Register from './components/pages/register'
import Collection from './components/pages/collection'
import ForgetPassword from './components/pages/forget-password'
import Contact from './components/pages/contact'
import MytenPlusOne from './components/pages/tenPlusOne'
import MytryAtHome from './components/pages/tryAtHome'
import Myreferal from './components/pages/referal'
import Myorder from './components/pages/order'
import MywalletCash from './components/pages/walletCash'
import Mywhislist from './components/pages/wishlist'
import Myprofile from './components/pages/profile'
import ChangePass from './components/pages/changePass'
import Address from './components/pages/address'



import Details from './components/blogs/details'


import Dashboards from './component/dashboard';

//Product Digital
import Digital_category from './component/products/digital/digital-category';
import PendingList from './component/products/digital/pending-list';
import productsList from './component/products/digital/digital-pro-list';
import StorePending from './component/store/store-pending';

import ProductAdmin from './component/products/admin_product';
import ProductEdit from './component/products/edit_product'
import ProductAdminPending from './component/products/digital/product-admin-pending';

import Digital_add_pro from './component/products/digital/digital-add-pro';

//Sales
import TryHome from './component/sales/try_home'
import TenPlusOne from './component/sales/ten_plus_one'
import Orders from './component/sales/orders';
import OrderHistory from './component/sales/order_history';
import Transactions_sales from './component/sales/transactions-sales';
//Coupons
import ListCoupons from './component/coupons/list-coupons';
import Create_coupons from './component/coupons/create-coupons';

//Pages
import ListPages from './component/pages/list-page';
import Create_page from './component/pages/create-page';
import Media from './component/media/media';
import List_menu from './component/menus/list-menu';
import Create_menu from './component/menus/create-menu';
import approvedUser from './component/users/approve-user'
import EditVendor from './component/vendors/edit'
import approvedVendor from './component/vendors/approve-vendor'
import VendorPanel from './component/vendors/vendorEdit'
import CreateUser from './component/users/create-user';
import EditUser from './component/users/edit'
import ListStore from './component/store/list';
import createStore from './component/store/create';
import editStore from './component/store/edit'
import Translations from './component/localization/translations';
import Rates from './component/localization/rates';
import Metal from './component/localization/metal';
import Taxes from './component/localization/taxes';
import Profile from './component/settings/profile';
import StoreInfo from './component/settings/store_info';
import Business from './component/settings/business';
import Reports from './component/reports/report';
import Invoice from './component/invoice';
import newStore from './component/store/newStore';





class Root extends React.Component {
    
    render() {
        // if (localStorage.token) {
        //     const token = localStorage.getItem("token");
        //     console.log(token)
        //     const decoded = jwt_decode(token);
        //     console.log(decoded.exp)
        //     const currentTime = Date.now() / 1000; // to get in milliseconds
        //     console.log(currentTime)
        //     if (decoded.exp < currentTime) {
        //       // Logout user
        //       store.dispatch(signout());
        //     }
        //   }
        store.dispatch(getAllProducts());
        store.dispatch(getRate());
        store.dispatch(changeCurrency());
        if(localStorage.getItem("isLogin")){
            store.dispatch(getStore());
        }
        else{
            store.dispatch(getStores());
        }
        store.dispatch(allusers());
        store.dispatch(getMetalHistory());
        store.dispatch(getCategory());
        store.dispatch(getOrders());
        store.dispatch(getTryHome());
        store.dispatch(getTenPlusOne());
        store.dispatch(getTenPlusOne());
        store.dispatch(allVendors());
        store.dispatch(getAllCoin());

        return(
        	<Provider store={store}>
                <IntlProvider  locale='en'>
				<BrowserRouter basename={'/'} >
					<ScrollContext>
						<Switch>
                            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Watch}/>
                            <Layout>
								<Route path={`${process.env.PUBLIC_URL}/vendor`} component={CollectionLeftSidebar}/>
                                <Route path={`${process.env.PUBLIC_URL}/coin-sidebar/product/:id`} component={CoinSideBar}/>
                                <Route path={`${process.env.PUBLIC_URL}/coin`} component={Coin}/>
								<Route path={`${process.env.PUBLIC_URL}/left-sidebar/product/:id`} component={LeftSideBar}/>                              
                                <Route path={`${process.env.PUBLIC_URL}/order/history`} component={orderHistory}/>
                                <Route path={`${process.env.PUBLIC_URL}/home/history`} component={tryHomeHistory}/>
                                <Route path={`${process.env.PUBLIC_URL}/home/tryHome`} component={tryHome}/>
                                <Route path={`${process.env.PUBLIC_URL}/my_tenPlusOne`} component={tenPlusOne}/>
								<Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
								<Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList}/>
								<Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>
								<Route path={`${process.env.PUBLIC_URL}/order-success`} component={orderSuccess}/>
                                <Route path={`${process.env.PUBLIC_URL}/tenPlusOne-success`} component={tenPlusOneSuccess}/>
		                        <Route path={`${process.env.PUBLIC_URL}/pages/about-us`} component={aboutUs}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/404`} component={PageNotFound}/>                
                                <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/stores`} component={Collection}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/forget-password`} component={ForgetPassword}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/contact`} component={Contact}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/details`} component={Details}/>
                                

                                <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboards} />
                                <Route path={`${process.env.PUBLIC_URL}/products/admin_pending`} component={ProductAdminPending} />
                                <Route path={`${process.env.PUBLIC_URL}/products/admin_list`} component={ProductAdmin} />
                                <Route path={`${process.env.PUBLIC_URL}/store/pending_list`} component={StorePending} />
                                <Route path={`${process.env.PUBLIC_URL}/products/edit_product`} component={ProductEdit} />
                                <Route path={`${process.env.PUBLIC_URL}/store/add`} component={newStore} />
                                  

                                <Route path={`${process.env.PUBLIC_URL}/products/digital/digital-category`} component={Digital_category} />
                                <Route path={`${process.env.PUBLIC_URL}/products/pending`} component={PendingList} />
                                <Route path={`${process.env.PUBLIC_URL}/products/list`} component={productsList} />


                                <Route path={`${process.env.PUBLIC_URL}/products/add`} component={Digital_add_pro} />
                                <Route path={`${process.env.PUBLIC_URL}/metal`} component={Metal} />
                                <Route path={`${process.env.PUBLIC_URL}/sales/orders`} component={Orders} />
                                <Route path={`${process.env.PUBLIC_URL}/sales/history`} component={OrderHistory} />
                                <Route path={`${process.env.PUBLIC_URL}/try_home/history`} component={TryHome} />
                                <Route path={`${process.env.PUBLIC_URL}/tenPlusOne/history`} component={TenPlusOne} />
                                <Route path={`${process.env.PUBLIC_URL}/sales/transactions`} component={Transactions_sales} />

                                <Route path={`${process.env.PUBLIC_URL}/coupons/list-coupons`} component={ListCoupons} />
                                <Route path={`${process.env.PUBLIC_URL}/coupons/create-coupons`} component={Create_coupons} />

                                <Route path={`${process.env.PUBLIC_URL}/pages/list-page`} component={ListPages} />
                                <Route path={`${process.env.PUBLIC_URL}/pages/create-page`} component={Create_page} />

                                <Route path={`${process.env.PUBLIC_URL}/media`} component={Media} />

                                <Route path={`${process.env.PUBLIC_URL}/menus/list-menu`} component={List_menu} />
                                <Route path={`${process.env.PUBLIC_URL}/menus/create-menu`} component={Create_menu} />

                                <Route path={`${process.env.PUBLIC_URL}/users/approve-user`} component={approvedUser} />
                                <Route path={`${process.env.PUBLIC_URL}/users/editUser`} component={EditUser} />
                                <Route path={`${process.env.PUBLIC_URL}/users/createUser`} component={CreateUser} />
 
                                <Route path={`${process.env.PUBLIC_URL}/vendors/approve-vendor`} component={approvedVendor} />
                                <Route path={`${process.env.PUBLIC_URL}/vendors/createVendor`} component={VendorPanel} />
                                <Route path={`${process.env.PUBLIC_URL}/vendors/editVendor`} component={EditVendor} />
                                <Route path={`${process.env.PUBLIC_URL}/store/list`} component={ListStore} />
                                <Route path={`${process.env.PUBLIC_URL}/store/createStore`} component={createStore} />
                                <Route path={`${process.env.PUBLIC_URL}/store/storeEdit`} component={editStore} />

                                <Route path={`${process.env.PUBLIC_URL}/localization/transactions`} component={Translations} />
                                <Route path={`${process.env.PUBLIC_URL}/localization/currency-rates`} component={Rates} />
                                <Route path={`${process.env.PUBLIC_URL}/localization/taxes`} component={Taxes} />

                                <Route path={`${process.env.PUBLIC_URL}/reports/report`} component={Reports} />

                                <Route path={`${process.env.PUBLIC_URL}/settings/profile`} component={Profile} />
                                <Route path={`${process.env.PUBLIC_URL}/settings/business_profile`} component={Business} />
                                <Route path={`${process.env.PUBLIC_URL}/settings/store`} component={StoreInfo} />

                                <Route path={`${process.env.PUBLIC_URL}/invoice`} component={Invoice} />
                                <Route path={`${process.env.PUBLIC_URL}/pages/profile`} component={Myprofile} />
                                <Route path={`${process.env.PUBLIC_URL}/pages/tryHome`} component={MytryAtHome} />
                                <Route path={`${process.env.PUBLIC_URL}/pages/tenPlusOne`} component={MytenPlusOne} />
                                <Route path={`${process.env.PUBLIC_URL}/pages/wallet`} component={MywalletCash} />
                                <Route path={`${process.env.PUBLIC_URL}/pages/wishlist`} component={Mywhislist} />
                                <Route path={`${process.env.PUBLIC_URL}/pages/order`} component={Myorder} />
                                <Route path={`${process.env.PUBLIC_URL}/pages/referral`} component={Myreferal} />
                                <Route path={`${process.env.PUBLIC_URL}/pages/changePass`} component={ChangePass} />
                                <Route path={`${process.env.PUBLIC_URL}/pages/address`} component={Address} />
                            </Layout>
                         </Switch>
					  </ScrollContext>
					</BrowserRouter>
                </IntlProvider>
			</Provider>
    	);
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));



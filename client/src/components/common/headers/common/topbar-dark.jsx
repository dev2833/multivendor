import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../../../../actions';
class TopBarDark extends Component {
    constructor (props) {
        super (props)

    }
    logOut() {
        console.log("LOG OUT");
        this.props.signout();
    }
    renderMyAccount(){
        if(this.props.isLogin){
            if(this.props.role == "Customer"){
                return(
                    <ul className="onhover-show-div" >               
                    <li>
                    <Link style={{fontSize:"12px"}} to={`${process.env.PUBLIC_URL}/pages/profile`} data-lng="en">My Profile</Link>
                    </li>
                    <li>
                    <Link style={{fontSize:"12px"}} to={`${process.env.PUBLIC_URL}/pages/order`} data-lng="en">Order History</Link>
                    </li>
                    <li>
                    <Link style={{fontSize:"12px"}} to={`${process.env.PUBLIC_URL}/pages/wishlist`} data-lng="en">Wish List</Link>
                    </li>
                    <li>
                    <Link style={{fontSize:"12px"}} to={`${process.env.PUBLIC_URL}/pages/tenPlusOne`} data-lng="en">10+1 Safe</Link>
                    </li>
                    <li>
                    <Link style={{fontSize:"12px"}} to={`${process.env.PUBLIC_URL}/pages/referral`} data-lng="en">Referral</Link>
                    </li>
                    <li>
                    <Link style={{fontSize:"12px"}} to={`${process.env.PUBLIC_URL}/pages/tryHome`} data-lng="en">Try At Home</Link>
                    </li>
                    <li>
                    <Link style={{fontSize:"12px"}} to={`${process.env.PUBLIC_URL}/pages/address`} data-lng="en">Address</Link>
                    </li>
                    <li>
                    <Link style={{fontSize:"12px"}} to={`${process.env.PUBLIC_URL}/pages/wallet`} data-lng="en">Wallet Cash</Link>
                    </li>
                    <li>
                    <a style={{fontSize:"12px"}} onClick={this.logOut.bind(this)} data-lng="en">Log out</a>
                    </li>
                </ul>
                )
            }else{
                return(
                <ul className="onhover-show-div">
                    <li>
                        <a style={{fontSize:"12px"}} onClick={this.logOut.bind(this)} data-lng="en">Log out</a>
                    </li>
                </ul>
            )
               
            }
         
        }else{
            return(
                <ul className="onhover-show-div">
                    <li>
                        <Link style={{fontSize:"12px"}} to={`${process.env.PUBLIC_URL}/pages/login`} data-lng="en">Login</Link>
                    </li>
                    <li>
                        <Link style={{fontSize:"12px"}} to={`${process.env.PUBLIC_URL}/pages/register`} data-lng="en">Sign Up</Link>
                    </li>
  
                </ul>
            )

        }

    }


    render() {
        const { rate,user,isLogin,role} = this.props
        return (
            <div className="top-header top-header-dark3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header-contact">
                                <ul>
                                    <li>Welcome to Our store Multikart</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>Call Us: 123 - 456 - 7890</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 text-right ">
                            <ul className="header-dropdown">
                                
                                <li className="mobile-wishlist text-right"><Link to={`${process.env.PUBLIC_URL}/pages/stores`}><i className="fa fa-home"
                                aria-hidden="true"></i> Stores</Link></li>                                 
                    
                                <li className="mobile-wishlist text-right"><Link to={`${process.env.PUBLIC_URL}/home/tryHome`}><i className="fa fa-bus"
                                aria-hidden="true"></i> Try at home</Link></li>                                  
                              
                                
                         
                              

                                <li className="onhover-dropdown mobile-account text-right">
                                    <i className="fa fa-user" aria-hidden="true"></i> {
                                        isLogin?
                                    "My Account":"Login/Sign Up"
                                    }
                                    {this.renderMyAccount()}
                                </li>
                                <li className="mobile-wishlist text-right"> {"Gold:" +rate.goldRate+"₹/g"}</li>
                                <li className="mobile-wishlist text-right">{"Silvar:"+rate.silverRate+"₹/g"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
  const mapStateToProps = (state) => ({
    user: state.auth.currentUser,
    isLogin:state.auth.isLogin,
    stores:state.store.stores,
    rate: state.data.rate,
    role:state.auth.role
})

export default connect(mapStateToProps,{signout})(TopBarDark);
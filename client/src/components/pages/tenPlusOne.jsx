import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import {connect} from "react-redux";
import TenPlusOne from '../home/tenPlusOne'
import {userUpdate,signout} from "../../actions"

import {Link} from 'react-router-dom';
import tenPlusOne from '../home/tenPlusOne';
class Dashboard extends Component {

    constructor (props) {
        super (props)
        this.state = {
            email: 'dfdf',

        }
        
    }

    signout = () =>{
        this.props.signout();
    }
    render (){
        const { user } = this.props;
        return (
            <div>
                <Breadcrumb title={'Dashboard'}/>
                
                
                {/*Dashboard section*/}
                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-3">
                                <div className="account-sidebar">
                                    <select  className="custom-select"  name="goldType" required={true}>
                                                        <option value="">--Select--</option>
                                                        <option value="My Profile"></option>
                                                        <option value="rose gold">Rose Gold</option>
                                                        <option value="platium">Platium Impact</option>
                                                        <option value="white gold">White Gold</option>                                     
                                    </select>
                                </div>
                                <div className="dashboard-left">
                                    <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                    </span>
                                    </div>
                                    <div className="block-content">
                                        <ul>
                                        
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/profile`}>My Profile</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/order`}>My Order History</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/wishlist`}>My Wishlist</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/tryHome`}>My Try_At_Home</Link></li>
                                            <li className="active"><Link to={`${process.env.PUBLIC_URL}/pages/tenPlusOne`}>10+1 Safe</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/referral`}>Referral</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/wallet`}>My Wallet-Cash</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/address`}>Shipping Address</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/changePass`}>Change Password</Link></li>
                                            <li className="last" onClick={this.signout}>Log Out</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dashboard-right">
                                    <div className="dashboard">
                                        <div className="page-title">
                                            <h5>My Ten Plus One</h5>
                                            <hr/>
                                        </div>                      
                                        <TenPlusOne />
                                 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.currentUser
})

export default connect(
    mapStateToProps, {userUpdate,signout}
)(Dashboard)
import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import {connect} from "react-redux";
import {userUpdate,signout} from "../../actions"
import WhisList from "../wishlist/index"

import {Link} from 'react-router-dom';
class Dashboard extends Component {

    constructor (props) {
        super (props)
        this.state = {
            email: 'dfdf',
            phone: '',
            firstName: "",
            lastName:"",
            password:"",
            emailEdit:false,
            fnameEdit:false,
            lnameEdit:false,
            phoneEdit:false, 
            passwordEdit:false,       
        }
        
    }
    passwordEdit = () => {
        this.setState({passwordEdit:true})
    }
    handleChange = (event)=>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    editEmail=()=>{
        this.setState({emailEdit:true});
    }
    editFirst=()=>{
        this.setState({fnameEdit:true})
    }
    editLast=()=>{
        this.setState({lnameEdit:true})
    }
    handleCancelPass = () =>{
        this.setState({passwordEdit:false})
    }
    handleCancel=()=>{
        this.setState({emailEdit:false})
    }
    handleCancelFirst=()=>{
        this.setState({fnameEdit:false})
    }
    handleCancelLast=()=>{
        this.setState({lnameEdit:false})
    }
    saveChange=()=>{
        const data = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            password:this.state.password,
            id:this.props.user._id
        };
        this.props.userUpdate(data);
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
                                <div className="dashboard-left" style={{marginRight:"0px"}}>
                                    <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                    </span>
                                    </div>
                                    <div className="block-content">
                                        <ul>
                                            
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/profile`}>My Profile</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/order`}>My Order History</Link></li>
                                            <li className="active"><Link to={`${process.env.PUBLIC_URL}/pages/wishlist`}>My Wishlist</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/tryHome`}>My Try_At_Home</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/tenPlusOne`}>10+1 Safe</Link></li>
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
                                            <h5>My Wishlist</h5>
                                            <hr/>
                                        </div>
                                        <WhisList />

                                 
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
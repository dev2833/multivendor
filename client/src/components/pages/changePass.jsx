import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import {connect} from "react-redux";
import {passChange,signout,setPassMsg} from "../../actions"

import {Link} from 'react-router-dom';
class Dashboard extends Component {

    constructor (props) {
        super (props)
        this.state = {
            password:'',
            newPass:'',
            confirm:'',
            message:this.props.message
        }
        
    }
    componentWillUnmount(){
        this.props.setPassMsg();
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        if(this.state.newPass === this.state.confirm){
            const data = {
                id:this.props.user._id,
                oldPass:this.state.password,
                newPass:this.state.newPass
            };
            console.log(data)
            
            this.props.passChange(data);       
            
            // toast.success("success register !")

        }else{
            this.setState({message:'Password Not Matched'})
        }

 
    }
    renderAlert() {
        if (this.state.message) {
            return (
                <div className="alert alert-warning">
                <strong>! </strong>{this.state.message}
                </div>
            )
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
                                            <li ><Link to={`${process.env.PUBLIC_URL}/pages/wishlist`}>My Wishlist</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/tryHome`}>My Try_At_Home</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/tenPlusOne`}>10+1 Safe</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/referral`}>Referral</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/wallet`}>My Wallet-Cash</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/address`}>Shipping Address</Link></li>
                                            <li className="active"><Link to={`${process.env.PUBLIC_URL}/pages/changePass`}>Change Password</Link></li>
                                            <li className="last" onClick={this.signout}>Log Out</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dashboard-right">
                                    <div className="dashboard">
                                        <div className="page-title">
                                            <h5>Change Password</h5>
                                            <hr/>
                                        </div>
                                        <form className="theme-form" onSubmit={this.mySubmitHandler}>
                                        {this.renderAlert()}
                                            <div className="row">
                                                <div className="form-group col-lg-9">
                                                    <label htmlFor="email">Current Password</label>
                                                    <input type="password" className="form-control"  name="password"
                                                            onChange={this.myChangeHandler} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-lg-9">
                                                    <label htmlFor="email">New Password</label>
                                                    <input type="password" className="form-control"  name="newPass"
                                                            onChange={this.myChangeHandler} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-lg-9">
                                                    <label htmlFor="email">Confirm Password</label>
                                                    <input type="password" className="form-control"  name="confirm"
                                                            onChange={this.myChangeHandler} />
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-solid" style={{marginRight:"20px" ,marginTop:"40px"}}>Submit</button>
                                        </form>                       
                                        

                                 
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
    user: state.auth.currentUser,
    message:state.auth.passMessage
})

export default connect(
    mapStateToProps, {passChange,signout,setPassMsg}
)(Dashboard)
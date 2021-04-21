import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import {connect} from "react-redux";
import { toast } from 'react-toastify';
import {userUpdate,signout} from "../../actions"


import {Link} from 'react-router-dom';
class Dashboard extends Component {

    constructor (props) {
        super (props)
        this.state = {
            email:this.props.user.email,
            phoneNumber: this.props.user.phoneNumber,
            firstName: this.props.user.firstName,
            lastName:this.props.user.lastName,
            birth:this.props.user.customer?this.props.user.customer.birth:'',
            spouse:this.props.user.customer?this.props.user.customer.spouse:'',
            anniversary:this.props.user.customer?this.props.user.customer.anniversary:'',
            occupation:this.props.user.customer?this.props.user.customer.occupation:'',
            gender:this.props.user.customer?this.props.user.customer.gender:'',
       
        }
        
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
            const data = {
                _id:this.props.user._id,
                role:this.props.user.role,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                phoneNumber:this.state.phoneNumber, 
                customer:{
                    birth:this.state.birth,
                    spouse:this.state.spouse,
                    occupation:this.state.occupation,
                    gender:this.state.gender,    
                    anniversary:this.state.anniversary
                }           
            };
            console.log(data)
            
            this.props.userUpdate(data);       
            this.setState({message:'',otp:''})
            toast.success("success register !")

 
    }
    signout = () =>{
        this.props.signout();
    }
    render (){
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
                                            <li className="active"><Link to={`${process.env.PUBLIC_URL}/pages/profile`}>My Profile</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/order`}>My Order History</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/wishlist`}>My Wishlist</Link></li>
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
                                            <h5>My Profile</h5>
                                            <hr/>
                                        </div>
                                        <div className="theme-card">
                                            <form className="theme-form" onSubmit={this.mySubmitHandler}>
                                                <div className='row' style={{marginBottom:"10px"}}>
                                                    <div className="form-group col-lg-4">
                                                        <label htmlFor="email">First Name</label>
                                                        <input type="text" className="form-control" value={this.state.firstName} name="firstName"
                                                             onChange={this.myChangeHandler} />
                                                    </div>
                                                    <div className="form-group col-lg-4">
                                                        <label htmlFor="email">Last Name</label>
                                                        <input type="text" className="form-control" value={this.state.lastName} name="lastName"
                                                            onChange={this.myChangeHandler} />
                                                    </div>
                                                    <div className="form-group col-lg-4">
                                                        <label htmlFor="email">Email</label>
                                                        <input type="text" className="form-control" value={this.state.email} name="email"
                                                            required="" onChange={this.myChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className='row'style={{marginBottom:"10px"}}>
                                                    <div className="form-group col-lg-4">
                                                        <label htmlFor="email">Phone Number</label>
                                                        <input type="text" className="form-control" value={this.state.phoneNumber} name="phoneNumber"
                                                            required="" onChange={this.myChangeHandler} />
                                                    </div>
                                                    <div className="form-group col-lg-4">
                                                        <label htmlFor="email">BirthDay</label>
                                                        <input type="date" className="form-control" value={this.state.birth} name="birth"
                                                            required="" onChange={this.myChangeHandler} />
                                                    </div>
                                                    <div className="form-group col-lg-4">
                                                        <label htmlFor="email">Anniversary</label>
                                                        <input type="date" className="form-control" value={this.state.anniversary} name="anniversary"
                                                            required="" onChange={this.myChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className='row'style={{marginBottom:"40px"}}>
                                                    <div className="form-group col-lg-4">
                                                        <label htmlFor="email">Occupation</label>
                                                        <input type="text" className="form-control" value={this.state.occupation} name="occupation"
                                                            required="" onChange={this.myChangeHandler} />
                                                    </div>    
                                                    <div className="form-group col-lg-4">
                                                        <label htmlFor="email">Spouse BirthDay</label>
                                                        <input type="date" className="form-control"  name="spouse" value={this.state.spouse}
                                                            required="" onChange={this.myChangeHandler} />
                                                    </div>        
                                                    <div className="form-group col-lg-4">
                                                        <label htmlFor="email">Gender</label>
                                                        <select className="custom-select" value={this.state.gender} onChange={this.myChangeHandler}  name="gender" required={true}>
                                                            <option value="">--Select--</option>
                                                            <option value="female">Female</option>
                                                            <option value="male">Male</option>                                                                                 
                                                        </select>
                                                    </div>                                      
                                                </div>
                                             
                                     
                                                
                                                <button type="submit" className="btn btn-solid" style={{marginRight:"20px"}}>Submit</button>
                                   
                                            </form>
                                        </div>
                                         
                                 
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
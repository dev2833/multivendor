import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import {connect} from "react-redux";
import {addressCreateAndUpdate,signout,getAddress,deleteAddress} from "../../actions"
import { Edit, Trash2 } from 'react-feather'

import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
class Dashboard extends Component {

    constructor (props) {
        super (props)
        this.state = {
            select:{},
            edit:false,
            country:'',
            state:'',
            city:'',
            zipcode:'',
            address:'',
            type:'',
            id:''
        }
        
    }
    componentWillMount(){
        this.props.getAddress(this.props.user._id);
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
            const data = {
                id:this.state.id,
                customerId:this.props.user._id,
                country:this.state.country,
                state:this.state.state,
                city:this.state.city,
                zipcode:this.state.zipcode,
                address:this.state.address  ,
                type:this.state.type     
            };
            console.log(data)
            
            this.props.addressCreateAndUpdate(data); 
            toast.success("successfully changed")      


 
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
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/tenPlusOne`}>10+1 Safe</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/referral`}>Referral</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/wallet`}>My Wallet-Cash</Link></li>
                                            <li className="active"><Link to={`${process.env.PUBLIC_URL}/pages/address`}>Shipping Address</Link></li>
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
                                            <div className="row">
                                                <h5 className="col-xl-9">My Shipping Address</h5>
                                                <div className="btn-popup pull-right col-xl-2" >                 
                                                    <button onClick={()=>this.setState({
                                                        edit:true,   
                                                        country:'',
                                                        city:'',
                                                        state:'',
                                                        address:'',
                                                        type:'',
                                                        zipcode:'',
                                                        id:''})} className="btn btn-secondary">REGISTER NEW ADDRESS</button>
                                                </div>
                                            </div>
                                  
                                            <hr/>
                                        </div>
                                        {
                                            this.state.edit?
                                    
                                        <div className="theme-card">
                                            <form className="theme-form" onSubmit={this.mySubmitHandler}>
                                                <div className='row' style={{marginBottom:"10px"}}>
                                                    <div className="form-group col-lg-6">
                                                        <label htmlFor="email">Country</label>
                                                        <input type="text" className="form-control" value={this.state.country} name="country"
                                                             onChange={this.myChangeHandler} />
                                                    </div>
                                                    <div className="form-group col-lg-6">
                                                        <label htmlFor="email">State</label>
                                                        <input type="text" className="form-control" value={this.state.state} name="state"
                                                            onChange={this.myChangeHandler} />
                                                    </div>
                                              
                                                </div>
                                                <div className='row'style={{marginBottom:"10px"}}>
                                                    <div className="form-group col-lg-6">
                                                        <label htmlFor="email">Zip Code</label>
                                                        <input type="text" className="form-control" value={this.state.zipcode} name="zipcode"
                                                            required="" onChange={this.myChangeHandler} />
                                                    </div>
                                                    <div className="form-group col-lg-6">
                                                        <label htmlFor="email">address</label>
                                                        <input type="text" className="form-control" value={this.state.address} name="address"
                                                            required="" onChange={this.myChangeHandler} />
                                                    </div>                                               
                                                </div>                                                   
                                           
                                                <div className='row'style={{marginBottom:"10px"}}>
                                                    <div className="form-group col-lg-6">
                                                        <label htmlFor="email">City</label>
                                                        <input type="text" className="form-control" value={this.state.city} name="city"
                                                            required="" onChange={this.myChangeHandler} />
                                                    </div>    
                                                    <div className="form-group col-lg-6">
                                                        <label htmlFor="email">Gender</label>
                                                        <select className="custom-select" value={this.state.type} onChange={this.myChangeHandler}  name="type" >
                                                            <option value="">--Select--</option>
                                                            <option value="home">Home</option>
                                                            <option value="work">Work</option>                                                                                 
                                                        </select>
                                                    </div>                                           
                                                </div>   
                                                
                                                <button type="submit" className="btn btn-solid" style={{marginRight:"20px"}}>Submit</button>
                                                <button onClick={()=>this.setState({edit:false})} className="btn btn-solid" style={{marginRight:"20px"}}>Back</button>
                                            </form>
                                        </div>
                                        :
                                        <div className="col-xl-12 col-sm-6" >
                                            {
                                                this.props.addresses.map((address,index)=>
                                                <div className="card" style={{backgroundColor:"#e3e7ea"}} key={index} >
                                                <div className="products-admin">
                                                    <div className="card-body product-box" >
                                                        <div className="img-wrapper" >                                                        
                                                            <div className="front">     
                                                                <div className="product-detail" style={{paddingLeft:"40px"}}>                                                
                                                                    <h5 >{this.props.user.firstName + this.props.user.lastName}</h5>
                                                                    <h5 >{address.state}</h5>
                                                                    <h6 >{address.city}</h6>
                                                                    <h6 >{address.address}</h6>
                                                                    <h6 >{address.zipcode}</h6>                                                                   
                                                                
                                                                </div>                                                      
                                                                <div className="product-hover">
                                                                    <ul>
                                                                        <li>
                                                                            <button className="btn" type="button" onClick={()=>this.setState({edit:true,
                                                                                country:address.country,
                                                                                city:address.city,
                                                                                state:address.state,
                                                                                address:address.address,
                                                                                type:address.type,
                                                                                zipcode:address.zipcode,
                                                                                id:address._id
                                                                                })}>
                                                                                <Edit className="editBtn" />
                                                                            </button>
                                                                        </li>
                                                                        <li>
                                                                            <button className="btn" type="button" onClick={()=>this.props.deleteAddress(address._id)}>
                                                                                <Trash2 className="deleteBtn" />
                                                                            </button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>                                                    
                                                    </div>
                                                </div>
                                            </div>                                                
                                                
                                                )
                                            }
                                       
                                       </div>
                                        }
                                 
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
    addresses: state.auth.addresses
})

export default connect(
    mapStateToProps, {addressCreateAndUpdate,signout,getAddress,deleteAddress}
)(Dashboard)
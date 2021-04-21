import React, { Component,Fragment } from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import {Link} from "react-router-dom"
import {connect} from 'react-redux';
import {userUpdate} from '../../actions/index'
import { ToastContainer, toast } from 'react-toastify';
import Breadcrumb from '../common/breadcrumb';

export class Tabset extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:this.props.selectedVendor?this.props.selectedVendor.firstName:"",
            lastName:this.props.selectedVendor?this.props.selectedVendor.lastName:"",
            email:this.props.selectedVendor?this.props.selectedVendor.email:"",
            phoneNumber:this.props.selectedVendor?this.props.selectedVendor.phoneNumber:"",
            approved:this.props.selectedVendor?this.props.selectedVendor.approved:"",
            password:""
        }
    }
    onChangeAbout=(evt)=>{
        var newContent = evt.editor.getData();
        this.setState({
        about: newContent
        })
        console.log(this.state.about)
    }
    onChangeTerms=(evt)=>{
        var newContent = evt.editor.getData();
        this.setState({
        terms: newContent
        })
    }

    onBlur(evt){
        console.log("onBlur event called with event info: ", evt);
    }

    afterPaste(evt){
        console.log("afterPaste event called with event info: ", evt);
    }
   
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        console.log(nam)
        console.log(val)
        this.setState({[nam]: val});
    }
    registerUser =()=>{
        const data = {
            select:this.props.selectedVendor?this.props.selectedVendor._id:"create",
            type:0,
            vendor:{
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                password:this.state.password,
                phoneNumber:this.state.phoneNumber,
                approved:this.state.approved,
                verified:false,
                photo:""                    
            }
        };
        this.props.userUpdate(data);
        toast.success("Successfully Update !")
    }
    render() {

        return (
            <Fragment>
            <Breadcrumb title="Create User" parent="Users" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5> VENDOR REGISTER/EDIT</h5>
                                <div className="pull-right">                                      
                                        <Link to="/vendors/approve-vendor" className="btn btn-defalt" style={{borderColor:"green", color:"green",marginRight:"100px"}}>Back</Link>
                                </div>
                            </div>
                            <div className="card-body">
                            <Tabs>
                                <TabList className="nav nav-tabs tab-coupon" >
                                    <Tab className="nav-link">Account</Tab>
                                </TabList>
                                <TabPanel>
                                    <form className="needs-validation user-add" noValidate="">

                                        <div className="form-group row">
                                            <label className="col-xl- col-md-1"><span>*</span> First Name</label>
                                            <input className="form-control col-xl-3 col-md-4" value={this.state.firstName} name="firstName" onChange={this.myChangeHandler}  type="text" required={true} />
                                            <p className=" col-xl-1 col-md-1"></p>
                                            <label className="col-xl-1 col-md-1"><span>*</span> Last Name</label>
                                            <input className="form-control col-xl-3 col-md-4" value={this.state.lastName}  name="lastName" onChange={this.myChangeHandler} type="text" required={true} />
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-xl-1 col-md-1"><span>*</span> Email</label>
                                            <input className="form-control col-xl-3 col-md-4"  value={this.state.email} name="email" onChange={this.myChangeHandler} type="text" required={true} />
                                            <p className=" col-xl-1 col-md-1"></p>
                                            <label className="col-xl- col-md-1"><span>*</span> Password</label>
                                            <input className="form-control col-xl-3 col-md-4"   value={this.state.password} name="password" onChange={this.myChangeHandler} type="password" required={true} />


                                        </div>
                                        <div className="form-group row">
                                            <label className="col-xl-1 col-md-1"><span>*</span> Phone</label>
                                            <input className="form-control col-xl-3 col-md-4"  value={this.state.phoneNumber} name="phoneNumber" onChange={this.myChangeHandler} type="numeric" required={true} />
                                            <p className=" col-xl-1 col-md-1"></p>

                                                <label className="col-xl-1 col-md-1"><span>*</span> Stutus</label>
                                                <select className="custom-select col-xl-3 col-md-4" value={this.state.approved}  onChange={this.myChangeHandler}  name="approved" required={true}>
                                                    <option value="">--Select--</option>
                                                    <option value="true">ACTIVE</option>
                                                    <option value="false">INACTIVE</option>
                                        
                                                </select>
                                            </div>                         
                             
                                    
                                            <div className="pull-right">
                                                <button onClick={this.registerUser} className="btn btn-secondary">Save</button>
                                                <button type="reset" className="btn btn-primary" style={{marginLeft:"15px"}}>Reset</button>
                                                <Link to="/users/approve-user" className="btn btn-defalt" style={{borderColor:"green",color:"green", marginLeft:"15px",marginRight:"100px"}}>Back</Link>
                                            </div>
                                    </form>
                            
                                </TabPanel>                
                            </Tabs>
                            <ToastContainer/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
  
        )
    }
}
const mapStateToProps = (state) => ({
    vendors:state.user.vendors,
    selectedVendor:state.user.selectedVendor
    
    
})

export default connect(
    mapStateToProps,{userUpdate}
)(Tabset)
import React, { Component,Fragment } from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import {Link} from "react-router-dom"
import CKEditors from "react-ckeditor-component";
import {connect} from 'react-redux';
import {vendorUpdate} from '../../actions/index'
import { ToastContainer, toast } from 'react-toastify';
import Breadcrumb from '../common/breadcrumb';

export class Tabset_user extends Component {
    constructor(props){
        super(props);
        this.state={
            about:this.props.selectedVendor?this.props.selectedVendor.vendor.bio:"",
            terms:this.props.selectedVendor?this.props.selectedVendor.vendor.terms:"",
            firstName:this.props.selectedVendor?this.props.selectedVendor.firstName:"",
            lastName:this.props.selectedVendor?this.props.selectedVendor.lastName:"",
            email:this.props.selectedVendor?this.props.selectedVendor.email:"",
            phoneNumber:this.props.selectedVendor?this.props.selectedVendor.phoneNumber:"",
            approved:this.props.selectedVendor?this.props.selectedVendor.approved:"",
            businessName:this.props.selectedVendor?this.props.selectedVendor.vendor.businessName:"",
            displayName:this.props.selectedVendor?this.props.selectedVendor.vendor.displayName:"",
            gstNumber:this.props.selectedVendor?this.props.selectedVendor.vendor.gstNumber:"",
            vatNumber:this.props.selectedVendor?this.props.selectedVendor.vendor.vatNumber:"",
            identification:this.props.selectedVendor?this.props.selectedVendor.vendor.identification:"",
            businessYear:this.props.selectedVendor?this.props.selectedVendor.vendor.businessYears:"",
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
    registerVendor =()=>{
        const data = {
            select:this.props.selectedVendor?this.props.selectedVendor._id:"create",
            type:1,
            vendor:{
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                password:this.state.password,
                phoneNumber:this.state.phoneNumber,
                approved:this.state.approved,
                verified:false,
                photo:"",
                vendor:{
                    businessName:this.state.businessName,
                    displayName:this.state.displayName,
                    gstNumber:this.state.gstNumber,
                    vatNumber:this.state.vatNumber,
                    wallet:0,
                    bio:this.state.about,
                    terms:this.state.terms,
                    identification:this.state.identification,
                    businessYears:this.state.businessYear,
                }                
            },
            store:{
                storeName:this.state.storeName,
                storeLocation:this.state.storeLocation,
                approve:false
            }      
        };
        this.props.vendorUpdate(data);
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
                                    <Tab className="nav-link" style={{paddingRight:"28px",paddingLeft:"28px"}}>About</Tab>
                                    <Tab className="nav-link">{"Terms" + "&" + "Condition"}</Tab>
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
                                        <div className="form-group row">
                                            <label className="col-xl- col-md-1"><span>*</span> BusinessName</label>
                                            <input className="form-control col-xl-3 col-md-4" value={this.state.businessName}  type="text" onChange={this.myChangeHandler}name="businessName" required={true} />
                                            <p className=" col-xl-1 col-md-1"></p>
                                            <label className="col-xl-1 col-md-1"><span>*</span> DisplayName</label>
                                            <input className="form-control col-xl-3 col-md-4"  value={this.state.displayName}  name="displayName"onChange={this.myChangeHandler}type="text" required={true} />
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-xl- col-md-1"><span>*</span> GST Number</label>
                                            <input className="form-control col-xl-3 col-md-4"  value={this.state.gstNumber}  name="gstNumber" onChange={this.myChangeHandler} type="text" required={true} />
                                            <p className=" col-xl-1 col-md-1"></p>
                                            <label className="col-xl-1 col-md-1"><span>*</span> VAT Number</label>
                                            <input className="form-control col-xl-3 col-md-4" value={this.state.vatNumber}  name="vatNumber" onChange={this.myChangeHandler} type="text" required={true} />
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-xl- col-md-1"><span>*</span> Identification</label>
                                            <input className="form-control col-xl-3 col-md-4"  value={this.state.identification}  name="identification" onChange={this.myChangeHandler} type="text" required={true} />
                                            <p className=" col-xl-1 col-md-1"></p>
                                            <label className="col-xl-1 col-md-1"><span>*</span> businessYear</label>
                                            <input className="form-control col-xl-3 col-md-4"   value={this.state.businessYear} name="businessYear" onChange={this.myChangeHandler} type="number" required={true} />
                                        </div>            
                                    
                                        <div className="pull-right">
                                            <button type="reset" className="btn btn-primary" style={{marginLeft:"15px",marginRight:"100px"}}>Reset</button>                                
                                        </div>
                                    </form>
                            
                                </TabPanel>
                                <TabPanel>
                                    <form className="needs-validation user-add" noValidate="">
                                        <div className="form-group row">
                                            <label className="col-xl-2 col-sm-3">ABOUT VENDOR :</label>
                                            <div className="col-xl-8 col-sm-7 description-sm">
                                                <CKEditors
                                                    content={this.state.about}
                                                    events={{
                                                        "blur": this.onBlur,
                                                        "afterPaste": this.afterPaste,
                                                        "change": this.onChangeAbout
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="pull-right">
                                            <button type="reset" className="btn btn-primary" style={{marginLeft:"15px",marginRight:"100px"}} >Reset</button>
                                            
                                        </div>
                                    </form>
                            
                                </TabPanel>
                                
                                <TabPanel>
                                <form className="needs-validation user-add" noValidate="">
                                        <div className="form-group row">
                                            <label className="col-xl-2 col-sm-1">TERMS AND CONDITIONS :</label>
                                            <div className="col-xl-8 col-sm-7 description-sm">
                                                <CKEditors
                                                    activeclassName="p10"
                                                    content={this.state.terms}
                                                    events={{
                                                        "blur": this.onBlur,
                                                        "afterPaste": this.afterPaste,
                                                        "change": this.onChangeTerms
                                                    }}
                                                />
                                            </div>
                                        </div>
                                   
                                    </form>
                                    <div className="pull-right">
                                            <button onClick={this.registerVendor} className="btn btn-secondary" style={{paddingLeft:"16px",paddingRight:"16px"}}>Save</button>
                                            <button type="reset" className="btn btn-primary" style={{marginLeft:"15px"}}>Reset</button>
                                            <Link to="/vendors/approve-vendor" className="btn btn-defalt" style={{borderColor:"green",color:"green", marginLeft:"15px",marginRight:"100px"}}>Back</Link>
                                        </div>
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
    mapStateToProps,{vendorUpdate}
)(Tabset_user)
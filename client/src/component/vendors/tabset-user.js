import React, { Component,Fragment } from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import {Link} from "react-router-dom"
import CKEditors from "react-ckeditor-component";
import {connect} from 'react-redux';
import {signup} from '../../actions/index'
import { ToastContainer, toast } from 'react-toastify';

export class Tabset_user extends Component {
    constructor(props){
        super(props);
        this.state={
            about:"",
            terms:"",
            firstName:"",
            lastName:"",
            email:"",
            phoneNumber:"",
            approved:false,
            businessName:"",
            displayName:"",
            gstNumber:"",
            vatNumber:"",
            identification:"",
            businessYear:0,
            bio:"",
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
            select:"create",
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
            }   
        };
        this.props.signup(data);
        toast.success("Successfully Registered !")
    }
    render() {

        return (
            <Fragment>
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
                                <input className="form-control col-xl-3 col-md-4" name="firstName" onChange={this.myChangeHandler}  type="text" required={true} />
                                <p className=" col-xl-1 col-md-1"></p>
                                <label className="col-xl-1 col-md-1"><span>*</span> Last Name</label>
                                <input className="form-control col-xl-3 col-md-4" name="lastName" onChange={this.myChangeHandler} type="text" required={true} />
                            </div>
                            <div className="form-group row">
                                <label className="col-xl-1 col-md-1"><span>*</span> Email</label>
                                <input className="form-control col-xl-3 col-md-4" name="email" onChange={this.myChangeHandler} type="text" required={true} />
                                <p className=" col-xl-1 col-md-1"></p>
                                <label className="col-xl- col-md-1"><span>*</span> Password</label>
                                <input className="form-control col-xl-3 col-md-4"  name="password" onChange={this.myChangeHandler} type="text" required={true} />


                            </div>
                            <div className="form-group row">
                                <label className="col-xl-1 col-md-1"><span>*</span> Phone</label>
                                <input className="form-control col-xl-3 col-md-4" name="phoneNumber" onChange={this.myChangeHandler} type="numeric" required={true} />
                                <p className=" col-xl-1 col-md-1"></p>

                                    <label className="col-xl-1 col-md-1"><span>*</span> Stutus</label>
                                    <select className="custom-select col-xl-3 col-md-4" onChange={this.myChangeHandler}  name="approved" required={true}>
                                        <option value="">--Select--</option>
                                        <option value="true">ACTIVE</option>
                                        <option value="false">INACTIVE</option>
                               
                                    </select>
                                </div>                         
                            <div className="form-group row">
                                <label className="col-xl- col-md-1"><span>*</span> BusinessName</label>
                                <input className="form-control col-xl-3 col-md-4" type="text" onChange={this.myChangeHandler}name="businessName" required={true} />
                                <p className=" col-xl-1 col-md-1"></p>
                                <label className="col-xl-1 col-md-1"><span>*</span> DisplayName</label>
                                <input className="form-control col-xl-3 col-md-4"  name="displayName"onChange={this.myChangeHandler}type="text" required={true} />
                            </div>
                            <div className="form-group row">
                                <label className="col-xl- col-md-1"><span>*</span> GST Number</label>
                                <input className="form-control col-xl-3 col-md-4"  name="gstNumber" onChange={this.myChangeHandler} type="text" required={true} />
                                <p className=" col-xl-1 col-md-1"></p>
                                <label className="col-xl-1 col-md-1"><span>*</span> VAT Number</label>
                                <input className="form-control col-xl-3 col-md-4" name="vatNumber" onChange={this.myChangeHandler} type="text" required={true} />
                            </div>
                            <div className="form-group row">
                                <label className="col-xl- col-md-1"><span>*</span> Identification</label>
                                <input className="form-control col-xl-3 col-md-4"  name="identification" onChange={this.myChangeHandler} type="text" required={true} />
                                <p className=" col-xl-1 col-md-1"></p>
                                <label className="col-xl-1 col-md-1"><span>*</span> businessYear</label>
                                <input className="form-control col-xl-3 col-md-4"  name="businessYear" onChange={this.myChangeHandler} type="number" required={true} />
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
                            <div className="pull-right">
                                <button onClick={this.registerVendor} className="btn btn-secondary" style={{paddingLeft:"16px",paddingRight:"16px"}}>SAVE </button>
                                <button type="reset" className="btn btn-primary" style={{marginLeft:"15px"}}>Reset</button>
                                <Link to="/vendors/approve-vendor" className="btn btn-defalt" style={{borderColor:"green",color:"green", marginLeft:"15px",marginRight:"100px"}}>Back</Link>
                            </div>
                        </form>

                    </TabPanel>
                </Tabs>
                <ToastContainer/>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    vendors:state.user.vendors,   
    
})

export default connect(
    mapStateToProps,{signup}
)(Tabset_user)
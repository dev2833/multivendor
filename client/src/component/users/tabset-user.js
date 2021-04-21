import React, { Component,Fragment } from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import {connect} from 'react-redux';
import {signup} from '../../actions/index'
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom'

export class Tabset_us extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            phoneNumber:"",
            approved:false,
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
            type:0,
            vendor:{
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                password:this.state.password,
                phoneNumber:this.state.phoneNumber,
                approved:this.state.approved,
                verified:false,             
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
                        <Tab className="nav-link">Customer Account</Tab>

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
                               
                        
                            <div className="pull-right">
                                <button onClick={this.registerVendor} className="btn btn-secondary">Save</button>
                                <button type="reset" className="btn btn-primary" style={{marginLeft:"15px"}}>Reset</button>
                                <Link to="/users/approve-user" className="btn btn-defalt" style={{borderColor:"green",color:"green", marginLeft:"15px",marginRight:"100px"}}>Back</Link>
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
)(Tabset_us)
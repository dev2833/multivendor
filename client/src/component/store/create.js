import React, { Component,Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import {Link} from 'react-router-dom'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import {connect} from 'react-redux';
import {createStore} from '../../actions/index'
import {ToastContainer, toast} from 'react-toastify';

export class Create_store extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            location:"",
            approve:false,
            discount:"",
            gold_14:0,
            gold_18:0,
            gold_22:0,
            gold_24:0,
            silverRate:0,
            offer:'',
            owner:''
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
    registerStore =()=>{
        const data = {
            name:this.state.name,
            location:this.state.location,
            owner:this.state.owner,
            gold_14:this.state.gold_14,
            gold_18:this.state.gold_18,
            gold_22:this.state.gold_22,
            gold_24:this.state.gold_24,
            silverRate:this.state.silverRate,
            approve:this.state.approve,       
            verified:false,  
            discount:this.state.discount,
            offers:[this.state.offer]         

        };
        this.props.createStore(data);
        toast.success("Successfully Registered !")
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
                                    <h5> Store REGISTER</h5>
                                    <div className="pull-right">                                      
                                            <Link to="/store/pending_list" className="btn btn-defalt" style={{borderColor:"green", color:"green",marginRight:"100px"}}>Back</Link>
                                    </div>
                                </div>
                                <div className="card-body">
                                <Tabs>
                                    <TabList className="nav nav-tabs tab-coupon" >
                                        <Tab className="nav-link">Store Location</Tab>
                                        <Tab className="nav-link">Gold/Silver Rate</Tab>
                                    </TabList>
                                    <TabPanel style={{marginTop:"70px"}}>
                                        <form className="needs-validation user-add" noValidate="">

                                            <div className="form-group row">
                                                <label className="col-xl- col-md-1"><span>*</span> Store Name</label>
                                                <input className="form-control col-xl-3 col-md-4" name="name" onChange={this.myChangeHandler}  type="text" required={true} />
                                                <p className=" col-xl-1 col-md-1"></p>
                                                <label className="col-xl-1 col-md-1"><span>*</span> Store Loaction</label>
                                                <input className="form-control col-xl-3 col-md-4" name="location" onChange={this.myChangeHandler} type="text" required={true} />
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-xl-1 col-md-1"><span>*</span> discount</label>
                                                <input className="form-control col-xl-3 col-md-4" name="discount" onChange={this.myChangeHandler} type="text" required={true} />
                                         

                                            </div>
                                            <div className="form-group row">
                                                <label className="col-xl-1 col-md-1"><span>*</span> offer</label>
                                                <input className="form-control col-xl-3 col-md-4" name="offer" onChange={this.myChangeHandler} type="text" required={true} />
                                                <p className=" col-xl-1 col-md-1"></p>

                                                    <label className="col-xl-1 col-md-1"><span>*</span> Stutus</label>
                                                    <select className="custom-select col-xl-3 col-md-4" onChange={this.myChangeHandler}  name="approved" required={true}>
                                                        <option value="">--Select--</option>
                                                        <option value="true">ACTIVE</option>
                                                        <option value="false">INACTIVE</option>
                                            
                                                    </select>
                                            </div> 
                                            <div className="form-group row">
                                            
                                                    <label className="col-xl-1 col-md-1"><span>*</span> Vendor</label>
                                                    <select className="custom-select col-xl-3 col-md-4" onChange={this.myChangeHandler}  name="owner" required={true}>
                                                        <option value="">--Select--</option>
                                                        {
                                                            this.props.vendors.map((vendor,index) =>
                                                                <option key={index} value={vendor._id}>{vendor.firstName + " " + vendor.lastName}</option>
                                                            ) 
                                                        }                                                 
                                            
                                                    </select>
                                            </div>                               
                                            
                                        
                                            <div className="pull-right">
                                                <button type="reset" className="btn btn-primary" style={{marginLeft:"15px"}}>Reset</button>                                                
                                            </div>
                                        </form>
                                
                                    </TabPanel>
                                    <TabPanel style={{marginTop:"70px"}}>
                                        <form className="needs-validation user-add" noValidate="">

                                            <div className="form-group row">
                                                <label className="col-xl- col-md-1"><span>*</span> 14 kt Gold </label>
                                                <input className="form-control col-xl-3 col-md-4" name="gold_14" onChange={this.myChangeHandler}  type="number" required={true} />
                                                <p className=" col-xl-1 col-md-1"></p>
                                                <label className="col-xl-1 col-md-1"><span>*</span> 18 kt Gold </label>
                                                <input className="form-control col-xl-3 col-md-4" name="gold_18" onChange={this.myChangeHandler} type="number" required={true} />
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-xl-1 col-md-1"><span>*</span> 22 kt Gold </label>
                                                <input className="form-control col-xl-3 col-md-4" name="gold_22" onChange={this.myChangeHandler} type="number" required={true} />
                                                <p className=" col-xl-1 col-md-1"></p>
                                                <label className="col-xl- col-md-1"><span>*</span> 24 kt Gold </label>
                                                <input className="form-control col-xl-3 col-md-4"  name="gold_24" onChange={this.myChangeHandler} type="number" required={true} />
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-xl-1 col-md-1"><span>*</span> Silver kt  Gold </label>
                                                <input className="form-control col-xl-3 col-md-4" name="silverRate" onChange={this.myChangeHandler} type="number" required={true} />
                                                <p className=" col-xl-1 col-md-1"></p>
                                            </div>                         
                                            
                                        
                      
                                        </form>
                                        <div className="pull-right">
                                                <button onClick={this.registerStore} className="btn btn-secondary">Save</button>
                                                <button type="reset" className="btn btn-primary" style={{marginLeft:"15px"}}>Reset</button>
                                                <Link to="/store/pending_list" className="btn btn-defalt" style={{borderColor:"green",color:"green", marginLeft:"15px",marginRight:"100px"}}>Back</Link>
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
    stores:state.store.stores
})

export default connect(
    mapStateToProps,{createStore}
)(Create_store)
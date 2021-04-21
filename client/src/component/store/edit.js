import React, { Component,Fragment } from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import {Link} from "react-router-dom"
import {connect} from 'react-redux';
import {storeUpdate} from '../../actions/index'
import { ToastContainer, toast } from 'react-toastify';
import Breadcrumb from '../common/breadcrumb';

export class Tabset extends Component {
    constructor(props){
        super(props);
        this.state={
            name:this.props.selectedStore?this.props.selectedStore.name:"",
            location:this.props.selectedStore?this.props.selectedStore.location:"",
            approve:this.props.selectedStore?this.props.selectedStore.approve:"",
            discount:this.props.selectedStore?this.props.selectedStore.discount:"",
            gold_14:this.props.selectedStore?this.props.selectedStore.gold_14:"",
            gold_18:this.props.selectedStore?this.props.selectedStore.gold_18:"",
            gold_22:this.props.selectedStore?this.props.selectedStore.gold_22:"",
            gold_24:this.props.selectedStore?this.props.selectedStore.gold_24:"",
            silverRate:this.props.selectedStore?this.props.selectedStore.silverRate:"",
            offer:this.props.selectedStore?this.props.selectedStore.offers[0]:"",
            owner:this.props.selectedStore?this.props.selectedStore.owner._id:"",
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
            store:{
                name:this.state.firstName,
                location:this.state.lastName,
                gold_14:this.state.email,
                gold_18:this.state.password,
                gold_22:this.state.phoneNumber,
                gold_24:this.state.approve,
                verified:false,
                silverRate:this.state.silverRate, 
                approve:this.state.approve,
                owner:this.state.owner,
                offers:[this.state.offer]       ,
                discount:this.state.discount     
            }
        };
        this.props.storeUpdate(this.props.selectedStore._id,data);
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
                                <h5> Store Management</h5>
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
                                                <input className="form-control col-xl-3 col-md-4" value={this.state.name} name="name" onChange={this.myChangeHandler}  type="text" required={true} />
                                                <p className=" col-xl-1 col-md-1"></p>
                                                <label className="col-xl-1 col-md-1"><span>*</span> Store Loaction</label>
                                                <input className="form-control col-xl-3 col-md-4" value={this.state.location}  name="location" onChange={this.myChangeHandler} type="text" required={true} />
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-xl-1 col-md-1"><span>*</span> discount</label>
                                                <input className="form-control col-xl-3 col-md-4" value={this.state.discount}  name="discount" onChange={this.myChangeHandler} type="text" required={true} />
                                         

                                            </div>
                                            <div className="form-group row">
                                                <label className="col-xl-1 col-md-1"><span>*</span> offer</label>
                                                <input className="form-control col-xl-3 col-md-4"  value={this.state.offer} name="offer" onChange={this.myChangeHandler} type="text" required={true} />
                                                <p className=" col-xl-1 col-md-1"></p>

                                                    <label className="col-xl-1 col-md-1"><span>*</span> Stutus</label>
                                                    <select className="custom-select col-xl-3 col-md-4"  value={this.state.approve} onChange={this.myChangeHandler}  name="approved" required={true}>
                                                        <option value="">--Select--</option>
                                                        <option value="true">ACTIVE</option>
                                                        <option value="false">INACTIVE</option>
                                            
                                                    </select>
                                            </div> 
                                            <div className="form-group row">
                                            
                                                    <label className="col-xl-1 col-md-1"><span>*</span> Vendor</label>
                                                    <select className="custom-select col-xl-3 col-md-4" value={this.state.owner}  onChange={this.myChangeHandler}  name="owner" required={true}>
                                                        <option value="">--Select--</option>
                                                        {
                                                            this.props.vendors.map((vendor,index) =>
                                                                <option key={index} value={vendor._id}>{vendor.firstName + " " + vendor.lastName}</option>
                                                            ) 
                                                        }                                                 
                                            
                                                    </select>
                                            </div>                               
                                            
                                        
                                            <div className="pull-right">
                                                <button type="reset" className="btn btn-primary"  style={{marginLeft:"15px"}}>Reset</button>                                                
                                            </div>
                                        </form>
                                
                                    </TabPanel>
                                    <TabPanel style={{marginTop:"70px"}}>
                                        <form className="needs-validation user-add" noValidate="">

                                            <div className="form-group row">
                                                <label className="col-xl- col-md-1"><span>*</span> 14 kt Gold </label>
                                                <input className="form-control col-xl-3 col-md-4" name="gold_14" value={this.state.gold_14}  onChange={this.myChangeHandler}  type="number" required={true} />
                                                <p className=" col-xl-1 col-md-1"></p>
                                                <label className="col-xl-1 col-md-1"><span>*</span> 18 kt Gold </label>
                                                <input className="form-control col-xl-3 col-md-4" name="gold_18" value={this.state.gold_18}  onChange={this.myChangeHandler} type="number" required={true} />
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-xl-1 col-md-1"><span>*</span> 22 kt Gold </label>
                                                <input className="form-control col-xl-3 col-md-4" name="gold_22" value={this.state.gold_22}  onChange={this.myChangeHandler} type="number" required={true} />
                                                <p className=" col-xl-1 col-md-1"></p>
                                                <label className="col-xl- col-md-1"><span>*</span> 24 kt Gold </label>
                                                <input className="form-control col-xl-3 col-md-4"  name="gold_24" value={this.state.gold_24}  onChange={this.myChangeHandler} type="number" required={true} />
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-xl-1 col-md-1"><span>*</span> Silver kt  Gold </label>
                                                <input className="form-control col-xl-3 col-md-4" name="silverRate" value={this.state.silverRate}  onChange={this.myChangeHandler} type="number" required={true} />
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
    stores:state.store.stores,
    vendors:state.user.vendors,
    selectedStore:state.store.selectedStore
    
    
})

export default connect(
    mapStateToProps,{storeUpdate}
)(Tabset)
import React, { Component,Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import {createStore} from '../../actions/index'

export class new_store extends Component {
    constructor(props){
        super(props);       
            this.state = {
                gold_14:0,
                gold_18:0,
                gold_22:0,
                gold_24:0,
                silverRate:0,
                name:"",
                location:"",
                discount:"",
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
                gold_14:this.state.gold_14,
                gold_18:this.state.gold_18,
                gold_22:this.state.gold_22,
                gold_24:this.state.gold_24,
                name:this.state.name,
                location:this.state.location,
                discount:this.state.discount,
                approve:false,
                offers:["10+1","20% making charge"],
                owner:this.props.owner

        };
        this.props.createStore(data);
        toast.success("Successfully created !")
    }
    renderAlert(error) {
        let message = this.state.message || this.props.message
    
        if (message) {
          return (
            <div className="alert alert-warning">
              <strong>Oops!
                    </strong> {message}
            </div>
          )
        }
    }

    render() {
        return (
            <Fragment>      
                <form className="needs-validation user-add" noValidate="" onSubmit={this.mySubmitHandler}>
                    <h4>Setting Details</h4>    
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Store Name</label>
                        <input name="name" onChange = {this.myChangeHandler} className="form-control col-xl-6 col-md-5"  type="text" required={true} />
                        <label className="col-xl-3 col-md-4"><span>*</span> </label>
                    </div>        
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Store Location</label>
                        <input name="location" onChange = {this.myChangeHandler} className="form-control col-xl-6 col-md-5"  type="text" required={true} />
                        <label className="col-xl-3 col-md-4"><span>*</span> (City)</label>
                    </div>  
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> discount </label>
                        <input name="discount" onChange = {this.myChangeHandler} className="form-control col-xl-6 col-md-5"  type="text" required={true} />
                        <label className="col-xl-3 col-md-4"><span>*</span> %</label>
                    </div>            
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> 14 kt Gold Rate/g</label>
                        <input name="gold_14" onChange = {this.myChangeHandler} className="form-control col-xl-6 col-md-5"  type="number" required={true} />
                        <label className="col-xl-3 col-md-4"><span>*</span> INR</label>
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> 18 kt Gold Rate/g</label>
                        <input name="gold_18"  onChange = {this.myChangeHandler} className="form-control col-xl-6 col-md-5"  type="number" required={true}  />
                        <label className="col-xl-3 col-md-4"><span>*</span> INR</label>
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> 22 kt Gold Rate/g</label>
                        <input name="gold_22"  onChange = {this.myChangeHandler} className="form-control col-xl-6 col-md-5"  type="number" required={true}  />
                        <label className="col-xl-3 col-md-4"><span>*</span> INR</label>
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> 24 kt Gold Rate/g</label>
                        <input name="gold_24"  onChange = {this.myChangeHandler} className="form-control col-xl-6 col-md-5"  type="number" required={true}  />
                        <label className="col-xl-3 col-md-4"><span>*</span> INR</label>
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Silver Rate/g</label>
                        <input name="silverRate"  onChange = {this.myChangeHandler} className="form-control col-xl-6 col-md-5"  type="number" required={true}  />
                        <label className="col-xl-3 col-md-4"><span>*</span> INR</label>
                    </div>
                    <div className="form-group row" >
                    <label className="col-xl-7 col-md-5"></label>
                        <button type="submit" className="btn btn-primary">Save</button>
                        <label style={{marginLeft:"15px"}}></label>
                        <button type="reset" className="btn btn-primary">Reset</button>
                    </div>         
                    <ToastContainer/>                      
                    
                </form>       
              
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    success:'true',
    owner:state.auth.currentUser._id

})

export default connect(
    mapStateToProps, {createStore }
)(new_store)


import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import { connect } from 'react-redux';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { signup,vendorsignUp,sendOTP } from '../../actions';
import { toast } from 'react-toastify';

class Register extends Component {

    constructor (props) {
        super (props)
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            phoneNumber:'',
            otpCode:'',
            message:this.props.message,
            role:'Customer'  ,
            otp:this.props.otp
        }
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        if(this.props.otp === this.state.otpCode){
            const data = {
                role:this.state.role,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                password:this.state.password,
                phoneNumber:this.state.phoneNumber,   
                approved:true,
                verified:true             
            };
            this.props.signup(data);       
            this.setState({message:'',otp:''})
            toast.success("success register !")
        }
        else{
            this.setState({message:'your verification code is wrong'})
        }
 
    }
    renderAlert() {
        let message = this.state.message || this.props.message
    
        if (message) {
          return (
            <div className="alert alert-warning">
              <strong>Please Check Email !
                    </strong> {message}
            </div>
          )
        }
    }
    handleOnChange=(value,data,event)=>{

        this.setState({ phoneNumber:value.replace(/[^0-9]+/g,'')})
        console.log(this.state.phoneNumber);
    }

    submitOTP=(event)=>{
        event.preventDefault();       
        console.log(this.state.email)
        this.props.sendOTP({email:this.state.email})

        this.setState({phoneVerify:true})
    }

    render (){
        return (
            <div>
                <Breadcrumb title={'SignUp'}/>                                
                <section className="register-page section-b-space">
                    <div className="container"> 
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-5">
                                <h4><center>Create Customer/Vendor Account</center></h4>
                                {
                                    !this.props.otp?
                                                              
                                    <div className="theme-card">
                                    <form className="theme-form" onSubmit={this.submitOTP}>
                                    {this.renderAlert()}    
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <label htmlFor="email">First Name</label>
                                                <input type="text" className="form-control" id="firstName" name="firstName"
                                                    placeholder="First Name"  required={true} onChange={this.myChangeHandler}/>
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="review">Last Name</label>
                                                <input type="text" className="form-control" id="lastName" name="lastName"
                                                    placeholder="Last Name"  required={true} onChange={this.myChangeHandler}/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <label htmlFor="email">email</label>
                                                <input type="text" className="form-control" id="email" name="email"
                                                    placeholder="Email"  required={true} onChange={this.myChangeHandler}/>
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="review">Password</label>
                                                <input type="password" className="form-control" id="review" name="password"
                                                    placeholder="Enter your password"  required={true} onChange={this.myChangeHandler}/>
                                            </div> 
                                            <div className="col-md-12">
                                                <label htmlFor="review" style={{marginLeft:"5px"}}>Phone Number</label>
                                                <PhoneInput
                                                    copyNumbersOnly={false}
                                                    style={{marginLeft:"5px",marginBottom:"30px",height:"50 px",borderRadius:"0px !important"}}
                                                    onlyCountries={['cn']}
                                                    country={'cn'}
                                                    localization={{cn:'china'}}     
                                                    value={this.state.phoneNumber}                                          
                                                    onChange={this.handleOnChange}
                                                />
                                            </div>  
                                            <hr/>       
                                                                             
                                            <div className="col-md-12">
                                                <div className="row">           
                                                        <label className="d-block col-md-3" >
                                                            <input className="radio_animated" value="Customer" onChange={this.myChangeHandler} name="role" type="radio"  defaultChecked />
                                                            Customer
                                                        </label>
                                                        <label className="d-block col-md-6" >
                                                            <input className="radio_animated" value="Vendor" onChange={this.myChangeHandler} type="radio" name="role"/>
                                                            Vendor
                                                        </label>                                                
                                                        <button type="submit" className="btn btn-solid" >Sign Up</button>
                                                </div>
                                                
                                            </div>
                                                                                                                                                           
                                        </div>
                                    </form>

                                </div> 
                                :
                                <div className="theme-card">
                                    <form className="theme-form" onSubmit={this.mySubmitHandler}>
                                    {this.renderAlert()}                   
                                    <div className="form-row">
                                            <div className="col-md-12">
                                            <label htmlFor="email">OTP Code</label>
                                            <input type="text" className="form-control" id="otpCode" name="otpCode"
                                                    placeholder=""  required={true} onChange={this.myChangeHandler}/>
                                            </div>                                           
                                            <div className="col-md-12">
                                                <center><button type="submit" className="btn btn-solid">{this.state.waiting?"wating":"verify"}</button></center>
                                            </div>                                                    
                                        </div>
                                    </form>
                                </div>
                                }                                                                  
                            </div>
                        </div>                         
                    </div>                  
                </section>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return {
      message: auth.message,
      otp:auth.otp
    }
  }
export default connect(
    mapStateToProps,
    {signup,vendorsignUp,sendOTP}
)(Register)
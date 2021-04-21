import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import PaypalExpressBtn from 'react-paypal-express-checkout';
import SimpleReactValidator from 'simple-react-validator';
import {connect} from 'react-redux';
import {saveTenPlusOne} from '../../actions/index'

class BlogDetails extends Component {

    constructor (props) {
        super (props)

        this.state = {
            next:false,
            plan:'',
            fullName:'',
            nationality:'',
            relationship:'',
            email:'',
            address:'',
            pincode:''

        }
        this.validator = new SimpleReactValidator();
    }

    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);

    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(nam)
        console.log(val)
    }

    setStateFromCheckbox = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.checked;
        this.setState(obj);

        if(!this.validator.fieldValid(event.target.name))
        {
            this.validator.showMessages();
        }
    }
    next =(event)=>{
        event.preventDefault();
        if( this.state.email==='' && this.state.plan===''){
            this.setState({next:false})
        }
        else{
            this.setState({next:true})
        }
    }

    render (){
        const {cartItems, symbol, total,customer} = this.props;

        // Paypal Integration
        const onSuccess = (payment) => {
            const data = {
                nominee:this.state.fullName,
                email:this.state.email,
                address:this.state.address, 
                nationality:this.state.nationality, 
                relationship:this.state.relationship, 
                pincode:this.state.pincode, 
                monthlyPlan:this.state.plan,
                totalPlan:this.state.plan*11,
                date:new Date(),
                customerId:this.props.user._id
              
            };
            this.props.saveTenPlusOne(data);
            this.props.history.push({
                pathname: '/tenPlusOne-success',
                    state: { payment: payment, items: cartItems, orderTotal: total, symbol: symbol }
            })

        }

        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }

        const onError = (err) => {
            console.log("Error!", err);
        }

        const client = {
            sandbox:    'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
            production: 'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
        }
   


        return (
            <div>
                <Breadcrumb title={'10 + 1 MONTHLY PLAN'}/>                
                
                {/*Blog Details section*/}
                <section className="blog-detail-page section-b-space">
                    <div className="container">                             
                    {
                        !this.state.next?                             
                        <div className="row blog-contact">                            
                            <div className="col-sm-6">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/10+1.png`} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-sm-6">
                                <form className="theme-form" onSubmit={this.next} >
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <input type="number" className="form-control" name ="plan"
                                                placeholder="Enter Amount" required={true} onChange={this.myChangeHandler}/>
                                                {this.validator.message('pincode', this.state.pincode, 'required|integer|min:4')}
                                        </div>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" id="email" placeholder="Email" name = "email"
                                                required={true} onChange={this.myChangeHandler} />
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-solid" type="submit">START NOW</button>
                                        </div>
                                    </div> 
                                </form>
                            </div>
                        </div>  
                        :
                        <div className="checkout-page">
                            <div className="checkout-form">
                            <h6>Nominee's Information</h6>
                                <form>
                                    <div className="checkout row">
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            
                                            <div className="row check-out">
                                                
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Full Name</div>
                                                    <input type="text" name="fullName" onChange={this.setStateFromInput} />
                                                    {this.validator.message('first_name', this.state.first_name, 'required|alpha')}
                                                </div>       
                                                <div className="col-md-6">
                                                <div className="field-label">Email</div>
                                                    <input type="text" className="form-control" id="email" placeholder="Email" name = "email"
                                                        required={true} onChange={this.myChangeHandler} value={this.state.email} />
                                                </div>                                  
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                        <label htmlFor="nationality">Nationality</label>
                                                        <select className="custom-select"  onChange={this.myChangeHandler}  name="nationality" required={true}>
                                                            <option value="">--Select--</option>
                                                            <option value="female">India</option>
                                                            <option value="male">Others</option>                                                                                 
                                                        </select>
                                                </div>    
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                        <label htmlFor="nationality">Relationship</label>
                                                        <select className="custom-select"  onChange={this.myChangeHandler}  name="relationship" required={true}>
                                                            <option value="">--Select--</option>
                                                            <option value="spouse">spouse</option>
                                                            <option value="parant">parant</option>   
                                                            <option value="children">children</option>                                                                                     
                                                        </select>
                                                </div>   
                                                <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                    <div className="field-label"> Address</div>
                                                    <input type="text" name="address"onChange={this.myChangeHandler} />
                                                    {this.validator.message('email', this.state.address, 'required|alpha')}
                                                </div>                                         
                           
                                                <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                    <div className="field-label">Pin Code</div>
                                                    <input type="text" name="pincode" value={this.state.spincode} onChange={this.myChangeHandler} />
                                                    {this.validator.message('pincode', this.state.pincode, 'required|integer')}
                                                </div>
                                            
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-details">
                                                <div className="order-box">
                                                    <div className="title-box">
                                                        <div>Monthly Plan <span> Total Plan</span></div>
                                                    </div>
                                                    <ul className="qty">
                                                        {/* {cartItems.map((item, index) => {
                                                            return <li key={index}>{item.name} × {item.qty} <span>{symbol} {item.sum}</span></li> })
                                                        } */}
                                                        <li >{this.state.plan} × {"11 Monthes"} <span>{symbol} {this.state.plan*11}</span></li>
                                                    </ul>
                                                    <ul className="sub-total">
                                                        <li>Current Amount To Pay <span className="count">{symbol}{this.state.plan}</span></li>                                  
                                                    </ul>

                                                    <ul className="total">
                                                        <li>Total <span className="count">{symbol}{total}</span></li>
                                                    </ul>
                                                </div>

                                                <div className="payment-box">
                                                    <div className="upper-box">
                                                        <div className="payment-options">
                                                            <ul>                                                            
                                                                <li>
                                                                    <div className="radio-option paypal">
                                                                            <label htmlFor="payment-1">PayPal<span className="image"><img src={`${process.env.PUBLIC_URL}/assets/images/paypal.png`} alt=""/></span></label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                  
                                                    <div className="text-right">
                                                        
                                                         <PaypalExpressBtn env={'sandbox'} client={client} currency={'USD'} total={1.00} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                                                    </div>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>                  
                                </form>
                            </div>
                        </div> 
                        }            
            
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
    mapStateToProps, {saveTenPlusOne}
)(BlogDetails)
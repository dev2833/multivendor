import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import { connect } from 'react-redux'
import {Link, Redirect } from 'react-router-dom'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import SimpleReactValidator from 'simple-react-validator';

import Breadcrumb from "../common/breadcrumb";
import {removeFromWishlist} from '../../actions'
import {getCartTotal} from "../../services";

class checkOut extends Component {

    constructor (props) {
        super (props)

        this.state = {          
            first_name:'',
            last_name:'',
            street:'',
            house:'',
            time:'',
            date:'',
            city:'',           
            pincode:'',
            landmark:'',
         }
        this.validator = new SimpleReactValidator();
    }

    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);

      }

 

  

    render (){
        return (
            <div>

                {/*SEO Support*/}
                <Helmet>
                    <title>MultiKart | Try Home</title>
                    <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
                </Helmet>
                {/*SEO Support End */}

                <Breadcrumb  title={'Try At Home'}/>

                <section className="section-b-space">
                    <div className="container padding-cls">
                        <div className="checkout-page">
                            <div className="checkout-form">
                                <form>
                                    <div className="checkout row">
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-title">
                                                <h3>YOUR ADDRESS</h3>
                                            </div>
                                            <div className="row check-out">
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">First Name</div>
                                                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.setStateFromInput} />
                                                    {this.validator.message('first_name', this.state.first_name, 'required|alpha')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Last Name</div>
                                                    <input type="text" name="last_name" value={this.state.last_name} onChange={this.setStateFromInput} />
                                                    {this.validator.message('last_name', this.state.last_name, 'required|alpha')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Postal Code</div>
                                                    <input type="text" name="pincode" value={this.state.spincode} onChange={this.setStateFromInput} />
                                                    {this.validator.message('pincode', this.state.pincode, 'required|integer')}
                                                </div>
                                       
                                                <div className="form-group col-md-6 col-sm-12 col-xs-12">
                                                    <div className="field-label">CIty</div>
                                                    <select name="country" value={this.state.city} onChange={this.setStateFromInput}>
                                                        <option>NUDALI</option>
                                                        <option>MUMBAI</option>
                                                   
                                                    </select>
                                                    {this.validator.message('city', this.state.city, 'required')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Apartment/House/Flat NO.</div>
                                                    <input type="text" name="text" value={this.state.house} onChange={this.setStateFromInput} />
                                                    {this.validator.message('house', this.state.house, 'required|email')}
                                                </div>
                                       
                                             
                                                <div className="form-group col-md-6 col-sm-12 col-xs-12">
                                                    <div className="field-label">Street/Colony/Area Name</div>
                                                    <input type="text" name="street" value={this.state.city} onChange={this.setStateFromInput} />
                                                    {this.validator.message('Street', this.state.city, 'required|alpha')}
                                                </div>                                            
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Locality/Town</div>
                                                    <input type="text" name="town"  value={this.state.phone} onChange={this.setStateFromInput} />
                                                    {this.validator.message('town', this.state.landmark, 'required')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Landmark</div>
                                                    <input type="text" name="town"  value={this.state.landmark} onChange={this.setStateFromInput} />
                                                    {this.validator.message('town', this.state.phone, 'required')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                    <Link to={`${process.env.PUBLIC_URL}/`} className="btn btn-solid">DONE</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-title">
                                                <h3>DAY AND TIME</h3>
                                            </div>
                                            <div className="form-group col-md-6 col-sm-12 col-xs-12">
                                                <div className="field-label">Date</div>
                                                    <select name="country" value={this.state.date} onChange={this.setStateFromInput}>
                                                        <option>Monday</option>
                                                        <option>Tusday</option>
                                                        <option>Wednsday</option>
                                                        <option>Thursday</option>
                                                        <option>Friday</option>
                                                        <option>saturday</option>
                                                        <option>Sunday</option>
                                                                                                     
                                                    </select>
                                                {this.validator.message('Date', this.state.date, 'required')}

                                            </div>
                                            <div className="form-group col-md-6 col-sm-12 col-xs-12">
                                                <div className="field-label">Time</div>
                                                        <select name="country" value={this.state.time} onChange={this.setStateFromInput}>
                                                            <option>10-12 AM</option>
                                                            <option>12-2 PM</option>
                                                            <option>2-4 PM</option>
                                                            <option>4-6 PM</option>
                                                            <option>6-8 PM</option>
                                                                                                                                    
                                                        </select>
                                                    {this.validator.message('time', this.state.time, 'required')}

                                            </div>
                                    
                                        </div>
                                    </div>                                   
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cartList.cart,
    symbol: state.data.symbol,
    total: getCartTotal(state.cartList.cart)
})

export default connect(
    mapStateToProps,
    {removeFromWishlist}
)(checkOut)
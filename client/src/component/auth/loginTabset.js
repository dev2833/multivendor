import React, { Component, Fragment } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { User, Unlock } from 'react-feather';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin } from '../../actions/index'

export class LoginTabset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            activeShow: true,
            startDate: new Date()
        }
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    renderAlert() {
        if (this.props.message) {
          return (
            <div className="alert alert-warning">
              <strong>Oops! </strong>{this.props.message}
            </div>
          )
        }
    }  
    mySubmitHandler = (event) => {
        event.preventDefault();
        const data = {
            username:this.state.email,
            hash:this.state.password
        };
        console.log(data)
        this.props.signin(data);
    }

    clickActive = (event) => {
        document.querySelector(".nav-link").classList.remove('show');
        event.target.classList.add('show');
    }

    render() {
        return (
            <div>
                <Fragment>
                    <Tabs>
                        <TabList className="nav nav-tabs tab-coupon" >
                            <Tab className="nav-link" onClick={(e) => this.clickActive(e)}><User />Login</Tab>
                            <Tab className="nav-link" onClick={(e) => this.clickActive(e)}><Unlock />Register</Tab>
                        </TabList>

                        <TabPanel>
                            <form className="form-horizontal auth-form" onSubmit={this.mySubmitHandler}>
                            {this.renderAlert()}
                                <div className="form-group">
                                    <input required="" name="email" type="email" className="form-control" onChange={this.myChangeHandler} placeholder="Email" id="exampleInputEmail1" />
                                </div>
                                <div className="form-group">
                                    <input required="" name="password" type="password" className="form-control" onChange={this.myChangeHandler} placeholder="Password" />
                                </div>
                                <div className="form-terms">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                        <label className="d-block">
                                                    <input className="checkbox_animated" id="chk-ani2" type="checkbox" />
                                                        Reminder Me <span className="pull-right"> <a href="#" className="btn btn-default forgot-pass p-0">lost your password</a></span>
                                                </label>
                                    </div>
                                </div>
                                <div className="form-button">
                                    <button className="btn btn-primary" type="submit"  >Login</button>
                                </div>
                                <div className="form-footer">
                                    <span>Or Login up with social platforms</span>
                                    <ul className="social">
                                        <li><a className="fa fa-facebook" href=""></a></li>
                                        <li><a className="fa fa-google" href=""></a></li>                
                                    </ul>
                                </div>
                            </form>
                        </TabPanel>
                        <TabPanel>
                            <form className="form-horizontal auth-form">
                                <div className="form-group">
                                    <input required="" name="login[username]" type="email" className="form-control" placeholder="Username" id="exampleInputEmail12" />
                                </div>
                                <div className="form-group">
                                    <input required="" name="login[password]" type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <input required="" name="login[password]" type="password" className="form-control" placeholder="Confirm Password" />
                                </div>
                                <div className="form-terms">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                        <label className="d-block">
                                            <input className="checkbox_animated" id="chk-ani2" type="checkbox" />
                                            I agree all statements in <span><a href="">Terms &amp; Conditions</a></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-button">
                                    <button className="btn btn-primary" type="submit" >Register</button>
                                </div>
                                <div className="form-footer">
                                    <span>Or Sign up with social platforms</span>
                                    <ul className="social">
                                        <li><a className="fa fa-facebook" href=""></a></li>
                                        <li><a className="fa fa-google" href=""></a></li>

                                    </ul>
                                </div>
                            </form>
                        </TabPanel>
                    </Tabs>
                </Fragment>
            </div>
        )
    }
}


function mapStateToProps({ auth }) {
    return {
      message: auth.message
    }
}
  
export default connect(mapStateToProps, { signin })(withRouter(LoginTabset));
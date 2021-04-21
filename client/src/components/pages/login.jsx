import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import { connect } from 'react-redux';
import { signin } from '../../actions';
import FacebookLogin from 'react-facebook-login';
class Login extends Component {

    constructor (props) {
        super (props)
        this.state = {
            email:'',
            password:''
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

    render (){

        const { handleSubmit } = this.props;
        return (
            <div>
                <Breadcrumb title={'Login'}/>               
                
                {/*Login section*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Login</h3>
                                <div className="theme-card">
                                    <form className="theme-form" onSubmit={this.mySubmitHandler}>
                                        {this.renderAlert()}
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email" name="email"
                                                   required="" onChange={this.myChangeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">Password</label>
                                            <input type="password" className="form-control" id="review" name = "password"
                                                   placeholder="Enter your password" required="" onChange={this.myChangeHandler}/>
                                        </div>
                                        <button type="submit" className="btn btn-solid" style={{marginRight:"20px"}}>Login</button>

                                        <FacebookLogin
                                            appId="1088597931155576"
                                            fields="name,email,picture"
                                            callback={this.responseFacebook}
                                            cssClass="btn btn-solid"
                                            icon="fa-facebook"
                                        />
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 right-login">
                                <h3>New Customer</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">Create A Account</h6>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It
                                        allows you to be able to order from our shop. To start shopping click
                                        register.</p>
                                    <a href="/pages/register" className="btn btn-solid">Create an Account</a>
                                </div>
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
      message: auth.messageLogin
    }
}
  
export default connect(mapStateToProps, { signin })(Login);
  
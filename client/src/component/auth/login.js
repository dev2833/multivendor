import React, { Component, Fragment } from 'react'
import LoginTabset from './loginTabset';
import { ArrowLeft} from 'react-feather';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {signin} from '../../actions/index'
import {connect} from 'react-redux'

export class Login extends Component {


    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false
        };
        return (
            <Fragment>
                <div className="page-wrapper">
                    <div className="authentication-box">
                        <div className="container">
                            <div className="row"> 
                                <div className="col-md-12 p-0 card-right">
                                    <div className="card tab2-card">
                                        <div className="card-body">
                                            <LoginTabset />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="http://localhost:7000" target="_blank" className="btn btn-primary back-btn"><ArrowLeft />back</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


function mapStateToProps({ auth }) {
    return {
      message: auth.message
    }
}
  
export default connect(mapStateToProps, { signin })(Login);
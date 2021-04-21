import React, { Component,Fragment } from 'react'
import {connect } from 'react-redux';
import {signout} from '../../../actions/index'
import {Link} from 'react-router-dom'
//images import
import man from '../../../assets/images/dashboard/man.png'
export class User_menu extends Component {
    constructor(){
        super();

    }
    logout(){
        this.props.signout();
    }

    render() {
        const {user} = this.props
        return (

            <Fragment>
                {
                    user.role === "Vendor"?
                    <li className="onhover-dropdown">
                        <div className="media align-items-center">
                            <img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" src={man} alt="header-user" />
                            <div className="dotted-animation"><span className="animate-circle"></span><span className="main-circle"></span></div>
                        </div>
                        <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                            <li><Link to={`${process.env.PUBLIC_URL}/settings/profile`} ><i data-feather="user"></i>My Profile</Link></li>
                            <li><Link to={`${process.env.PUBLIC_URL}/settings/business_profile`} ><i data-feather="user"></i>Business Profile</Link></li>
                            <li><Link to={`${process.env.PUBLIC_URL}/sales/orders`}><i data-feather="mail"></i>Order</Link></li>
                            <li><Link to={`${process.env.PUBLIC_URL}/sales/history`}><i data-feather="mail"></i>Order History</Link></li>
                            <li><Link to={`${process.env.PUBLIC_URL}/try_home/history`}><i data-feather="mail"></i>Try At Home History</Link></li>
                            <li><Link to={`${process.env.PUBLIC_URL}/settings/store`}><i data-feather="mail"></i>Store Info</Link></li>
                            <li><Link to={`${process.env.PUBLIC_URL}/`} onClick={(e) => this.logout()}><i data-feather="log-out" ></i>Logout</Link></li>
                        </ul>
                    </li>:
                        <li className="onhover-dropdown">
                            <div className="media align-items-center">
                                <img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" src={man} alt="header-user" />
                                <div className="dotted-animation"><span className="animate-circle"></span><span className="main-circle"></span></div>
                            </div>
                            <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                                <li><Link to={`${process.env.PUBLIC_URL}/settings/profile`} ><i data-feather="user"></i>My Profile</Link></li>

                                <li><Link to={`${process.env.PUBLIC_URL}/`} onClick={(e) => this.logout()}><i data-feather="log-out" ></i>Logout</Link></li>
                            </ul>
                        </li>
                    

                    }

            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    user:state.auth.currentUser

})

export default connect(
    mapStateToProps, {signout}
)(User_menu)

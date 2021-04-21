import React, {Component} from 'react';


import FooterFour from "./common/footers/footer-four";
import HeaderFive from "./common/headers/header-five";

// ThemeSettings
// import ThemeSettings from "./common/theme-settings"

import Sidebar1 from '../component/common/sidebar_components/sidebar1';
import Sidebar2 from '../component/common/sidebar_components/sidebar2';
import Right_sidebar from '../component/common/right-sidebar';
import Footer from '../component/common/footer';
import Header from '../component/common/header_components/header';
import {connect} from 'react-redux';
import { ToastContainer } from 'react-toastify';
class App extends Component {

    render() {
        const {role,isLogin} = this.props
        return (
            <div>
                {
                    role === "Customer" ?
                    <div>
                        <HeaderFive logoName={'logo.png'}/>
                        <ToastContainer />
                        {this.props.children}
                        <FooterFour logoName={'logo.png'}/>
                    </div>
                    :                
                    <div>
                        <div className="page-wrapper" >
                            <Header />
                            <div className="page-body-wrapper">
                                {
                                    role==="Administrator"?<Sidebar2/>: <Sidebar1 />
                                }
            
                                <div className="page-body">
                                    {this.props.children}
                                </div>
                                    <Footer />
                            </div>
                        </div>
                    </div>          
                }
            </div>            
        );
    }
}

const mapStateToProps = (state) => ({
    isLogin:state.auth.isLogin,
    role:state.auth.role
})

export default connect(
    mapStateToProps
)(App)

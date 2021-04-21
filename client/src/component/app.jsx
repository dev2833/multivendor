import React, { Component } from 'react'
import Sidebar1 from './common/sidebar_components/sidebar1';
import Sidebar2 from './common/sidebar_components/sidebar2';
import Right_sidebar from './common/right-sidebar';
import Footer from './common/footer';
import Header from './common/header_components/header';
import {connect} from 'react-redux';

export class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {role} = this.props
        return (
            <div>
                <div className="page-wrapper" >
                    <Header />
                    <div className="page-body-wrapper">
                        {
                            role==="Administrator"?<Sidebar2/>: <Sidebar1 />
                        }
                        <Right_sidebar />
                        <div className="page-body">
                            {this.props.children}
                        </div>
                            <Footer />
                    </div>
                </div>
               
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    role:state.auth.user.role

})

export default connect(
    mapStateToProps
)(App)

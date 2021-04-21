import React, { Component } from 'react'
import man from '../../../assets/images/dashboard/man.png'
import { connect } from 'react-redux'
export class User_panel extends Component {
    render() {
        return (
            <div>
                <div className="sidebar-user text-center">
                    <div><img className="img-60 rounded-circle lazyloaded blur-up" src={man} alt="#" />
                    </div>
                    <h6 className="mt-3 f-14">{this.props.vendor}</h6>
                    <p>Vendor/Seller</p>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    vendor:"admin"
})

export default connect(
    mapStateToProps
)(User_panel)

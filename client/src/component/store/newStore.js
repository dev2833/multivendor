import React, { Component,Fragment } from 'react';
import Tabset_user from './new-store';
import Breadcrumb from '../common/breadcrumb';
import { connect } from 'react-redux'

export class Create_store extends Component {
    render() {
        return (
            <Fragment>
                <Breadcrumb title="Create Store" parent="Stores" />
                <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5> Current Store Metal Price</h5>
                            </div>
                            <div className="card-body">
                                <Tabset_user />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    success:'true',
})

export default connect(
    mapStateToProps
)(Create_store)
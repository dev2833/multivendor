import React, { Component, Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import Datatable from './datatable';
import { Link } from 'react-router-dom'


export class Approve_vendor extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <Fragment>
                <Breadcrumb title="User List" parent="Users" />
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header" style={{paddingBottom:"0px"}}>
                        <div className="btn-popup pull-right">
                                <Link to="/vendors/editVendor" className="btn btn-secondary">CREATE</Link>
                            </div>
                        </div>
                        <div className="card-body" style={{ marginTop:"0px"}}>

                            <div className="clearfix"></div>
                            <div id="batchDelete" className="category-table user-list order-table coupon-list-delete">
                                <Datatable
                                    approve={false}
                                    multiSelectOption={false}
                                    myData={this.props.vendors}
                                    pageSize={10}
                                    pagination={true}
                                    class="-striped -highlight"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Approve_vendor

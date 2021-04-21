import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/listCoupons';
import Datatable from '../localization/datatable';
import {connect} from 'react-redux';

export class ListCoupons extends Component {
    render() {
        const {rate} = this.props;
        return (
            <Fragment>
                <Breadcrumb title="Currency" parent="Home" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Currency Setting</h5>
                                </div>
                                <div className="card-body">
                                    <div id="batchDelete" className="category-table order-table coupon-list-delete">
                                        <Datatable
                                            multiSelectOption={true}
                                            myData={rate.currency}
                                            pageSize={10}
                                            pagination={true}
                                            class="-striped -highlight"
                                        />
                                    </div>
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
    rate:state.data.rate,
    symbol: state.data.symbol,
})

export default connect(
    mapStateToProps, {}
)(ListCoupons)


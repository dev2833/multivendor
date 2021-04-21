import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import Datatable from './datatable'
import {getOrders} from '../../actions/index'
import {connect} from 'react-redux'
import {makeOrderData,makeStoreList} from '../../services/index'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import {setCurrentStore} from '../../actions/index'
export class OrderHistory extends Component {
    constructor(){
        super();
        this.state = {
            tabIndex:0
        }
    }
    componentWillMount(){
        if(this.props.stores.length > 0)
        this.props.setCurrentStore(this.props.stores[0]._id)
    }
    changeTab = (index)=>{
        console.log(index)
        this.props.setCurrentStore(this.props.stores[index]._id)
        this.setState({
            tabIndex:index
        })

    }
    render() {
        console.log(this.props.orders)
        const { orders,stores } = this.props
        return (
            <Fragment>
                <Breadcrumb title="Order History" parent="Sales" />

                <div className="container-fluid">
                <Tabs  onSelect={index => this.changeTab(index)}>
                    <TabList className="nav nav-tabs tab-coupon" >
                        {
                            stores.map((store,index) =>
                                <Tab key={ index }  className="nav-link">{store.name}</Tab>
                            )
                        }
                        
                     </TabList>
                     {
                        stores.map((store,index) =>
                            <TabPanel key = {index}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>{store.name}</h5>
                                            </div>
                                            <div className="card-body order-datatable">
                                            <Datatable
                                                        multiSelectOption={true}
                                                        myData={orders}
                                                        pageSize={10}
                                                        pagination={true}
                                                        class="-striped -highlight"
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            )
                        }
                     
                </Tabs>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    orders:makeOrderData(state.order.orders,true,state.store.currentStore),
    stores: makeStoreList(state.store.stores,state.auth.currentUser._id,state.auth.role)
})

export default connect(
    mapStateToProps, {getOrders,setCurrentStore}
)(OrderHistory)
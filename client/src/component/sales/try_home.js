import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import Datatable from '../common/datatable'
import {connect} from 'react-redux'
import {makeTryHomeData,makeStoreList} from '../../services/index'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import {setCurrentStore} from '../../actions/index'
export class TryHomeHistory extends Component {
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
        this.props.setCurrentStore(this.props.stores[index]._id)
        this.setState({
            tabIndex:index
        })

    }
    render() {
        const { orders,stores } = this.props
        return (
            <Fragment>
                <Breadcrumb title="Try At Home" parent="Sales" />

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
                                                        multiSelectOption={false}
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
    orders:makeTryHomeData(state.tryHome.tryHomes,true,state.store.currentStore),
    stores: makeStoreList(state.store.stores,state.auth.currentUser._id)
})

export default connect(
    mapStateToProps, {setCurrentStore}
)(TryHomeHistory)
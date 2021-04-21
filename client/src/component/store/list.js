import React, { Component, Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/listVendor';
import {connect} from 'react-redux';
import Datatable from './datatable'
import {makeMetalData,makeStoreList} from '../../services/index'
import {setCurrentStore} from '../../actions/index'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
export class List_vendors extends Component {
    constructor(props){
        super(props);       
            this.state = {
                tabIndex:0
            }
    
    }


    changeTab = (index)=>{
        this.props.setCurrentStore(this.props.stores[index]._id)
        this.setState({
            tabIndex:index
        })

    }
    render() {
        const {history ,stores} = this.props;
        return (
            <Fragment>
                <Breadcrumb title="Metal Rate History" parent="Store Gold & Silver" />
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
                            <TabPanel key={index}>
                                <div className="card">
                                       <div className="card-body vendor-table coupon-list-delete">
                                        <Datatable
                                            multiSelectOption={false}
                                            myData={history}
                                            pageSize={10}
                                            pagination={true}
                                            class="-striped -highlight"
                                        />
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
    history:makeMetalData(state.store.metalHistory,state.store.currentStore),
    stores: makeStoreList(state.store.stores,state.auth.currentUser._id,state.auth.role)
})

export default connect(
    mapStateToProps, {setCurrentStore}
)(List_vendors)

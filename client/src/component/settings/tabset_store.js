import React, { Component } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import {User,Settings} from 'react-feather'
import {connect} from 'react-redux'
import {makeStoreList} from '../../services/index'

export class Tabset_Store extends Component {
    render() {
        const { stores } = this.props
        return (
            <div>
                <Tabs>
                    <TabList className="nav nav-tabs tab-coupon" >
                        {
                            stores.map((store,index) =>
                                <Tab key={index} className="nav-link"><User className="mr-2" />{store.name}</Tab>
                            )
                        }
                        
                       </TabList>
                                {
                                    stores.map((store,index) =>
                                        
                                    <TabPanel key={index}>
                                    <div className="tab-pane fade show active">
                                        <div className="table-responsive profile-table">
                                            <table className="table table-responsive">
                                                <tbody>
                                                    <tr>
                                                        <td> Store Name :</td>
                                                        <td>{store.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Store Location:</td>
                                                        <td>{store.location}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>14 kt Gold Price (/g):</td>
                                                        <td>{store.gold_14+" INR"}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>18 kt Gold Price (/g):</td>
                                                        <td>{store.gold_18+" INR"}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>22 kt Gold Price (/g):</td>
                                                        <td>{store.gold_22+" INR"}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>24 kt Gold Price (/g):</td>
                                                        <td>{store.gold_24+"INR"}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>24 kt Gold Price (/g):</td>
                                                        <td>{store.silverRate+"INR"}</td>
                                                    </tr>
                                            
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </TabPanel>
           
                                    )
                                }

                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    stores: makeStoreList(state.store.stores,state.auth.currentUser._id),
    vendor:state.auth.user
})

export default connect(
    mapStateToProps
)(Tabset_Store)

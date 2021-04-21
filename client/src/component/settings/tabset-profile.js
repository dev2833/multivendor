import React, { Component } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import {User,Settings} from 'react-feather'

export class Tabset_profile extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <TabList className="nav nav-tabs tab-coupon" >
                        <Tab className="nav-link"><User className="mr-2" />Profile</Tab>
                        
                    </TabList>

                    <TabPanel>
                        <div className="tab-pane fade show active">
                            <h5 className="f-w-600 f-16">Profile</h5>
                            <div className="table-responsive profile-table">
                                <table className="table table-responsive">
                                    <tbody>
                                        <tr>
                                            <td>First Name:</td>
                                            <td>{this.props.vendor.firstName}</td>
                                        </tr>
                                        <tr>
                                            <td>Last Name:</td>
                                            <td>{this.props.vendor.lastName}</td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td>{this.props.vendor.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone Number:</td>
                                            <td>{this.props.vendor.phoneNumber}</td>
                                        </tr>
                                 
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        )
    }
}

export default Tabset_profile

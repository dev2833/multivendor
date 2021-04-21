import React, { Component } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import {User,Settings} from 'react-feather'

export class Tabset_profile extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <TabList className="nav nav-tabs tab-coupon" >
                        <Tab className="nav-link"><User className="mr-2" />My Business Profile</Tab>
            
                    </TabList>

                    <TabPanel>
                        <div className="tab-pane fade show active">
                            <h5 className="f-w-600 f-16">My Business Profile</h5>
                            <div className="table-responsive profile-table">
                                <table className="table table-responsive">
                                    <tbody>
                                        <tr>
                                            <td>Business Legal Name:</td>
                                            <td>{this.props.vendor.vendor.businessName}</td>
                                        </tr>
                                        <tr>
                                            <td>Display Name:</td>
                                            <td>{this.props.vendor.vendor.displayName}</td>
                                        </tr>
                                        <tr>
                                            <td>GST Number:</td>
                                            <td>{this.props.vendor.vendor.gstNumber}</td>
                                        </tr>
                                        <tr>
                                            <td>VAT Number:</td>
                                            <td>{this.props.vendor.vendor.vatNumber}</td>
                                        </tr>
                                        <tr>
                                            <td>Wallet:</td>
                                            <td>{this.props.vendor.vendor.wallet}</td>
                                        </tr>
                                        <tr>
                                            <td>Company Type:</td>
                                            <td>{this.props.vendor.vendor.type}</td>
                                        </tr>
                                        <tr>
                                            <td>Identification Number:</td>
                                            <td>{this.props.vendor.vendor.identification}</td>
                                        </tr>
                                        <tr>
                                            <td>Business Years:</td>
                                            <td>{this.props.vendor.vendor.businessYears}</td>
                                        </tr>
                                        <tr>
                                            <td>BIO:</td>
                                            <td>{this.props.vendor.vendor.bio}</td>
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

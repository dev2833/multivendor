import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import {Link} from 'react-router-dom'

class DetailsCoinTabs extends Component {
    render (){

        return (
            <section className="tab-product m-0">
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <Tabs className="tab-content nav-material">
                            <TabList className="nav nav-tabs nav-material">
                                <Tab className="nav-item">
                                    <span className="nav-link active">
                                        <i className="icofont icofont-ui-home"></i>Product Details</span>
                                    <div className="material-border"></div>
                                </Tab>
                                <Tab className="nav-item">
                                    <span className="nav-link" ><i className="icofont icofont-man-in-glasses"></i>Diamond Details</span>
                                    <div className="material-border"></div>
                                </Tab>
                                <Tab className="nav-item">
                                    <span className="nav-link" >
                                        <i className="icofont icofont-contacts"></i>Metal Details</span>
                                    <div className="material-border"></div>
                                </Tab>
                                <Tab className="nav-item">
                                    <span className="nav-link" >
                                        <i className="icofont icofont-contacts"></i>Price Breakup</span>
                                    <div className="material-border"></div>
                                </Tab>
                                <Tab className="nav-item">
                                    <span className="nav-link" >
                                        <i className="icofont icofont-contacts"></i>Write Review</span>
                                    <div className="material-border"></div>
                                </Tab>
                            </TabList>
                            <TabPanel className="tab-pane fade mt-4 show active">
                                <table className="table table-striped mb-0">
                                    <tbody>
                                        <tr>
                                            <th>Product-Code :</th>
                                            <td>{this.props.item.productCode}</td>
                                        </tr>
                                        <tr>
                                            <th>Height :</th>
                                            <td>{this.props.item.height}</td>
                                        </tr>
                                        <tr>
                                            <th>Width :</th>
                                            <td>{this.props.item.width}</td>
                                        </tr>
                                        <tr>
                                            <th>Product Weight :</th>
                                            <td>{this.props.item.weight}</td>
                                        </tr>     
                                    </tbody>
                                </table>
                            </TabPanel>
                            <TabPanel>
                            <table className="table table-striped mb-0">
                                    <tbody>
                                    <tr>
                                        <th>Total Weight :</th>
                                        {/* <td>{this.props.item.Diamond.totalWeight}</td> */}
                                    </tr>
                                    <tr>
                                        <th>Total No. of diamonds :</th>
                                        {/* <td>{this.props.item.Diamond.numOfDiamonds}</td> */}
                                    </tr>
                                    <tr>
                                        <th>Clarity :</th>
                                        <td>Silk</td>
                                    </tr>
                                    <tr>
                                        <th>Color :</th>
                                        <td>Ghagra, Choli, Dupatta Set</td>
                                    </tr>
                                    <tr>
                                        <th>No. of Diamonds :</th>
                                        <td>Round Neck</td>
                                    </tr>
                                    <tr>
                                        <th>Shape :</th>
                                        <td>3/4 Sleeve</td>
                                    </tr>
                                    <tr>
                                        <th>Total Weight :</th>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <th>Setting Type :</th>
                                        <td>N/A</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </TabPanel>
                            <TabPanel>
                            <table className="table table-striped mb-0">
                                    <tbody>
                                        <tr>
                                            <th>Type :</th>
                                            <td>{this.props.item.type}</td>
                                        </tr>
                                        <tr>
                                            <th>Weight :</th>
                                            <td>{this.props.item.weight}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </TabPanel>
                            <TabPanel>
                            <table className="table table-striped mb-0">
                                    <tbody>
                                    <tr>
                                        <th>Gold :</th>
                                        <td>Women's</td>
                                    </tr>
                                    <tr>
                                        <th>Diamond :</th>
                                        <td>Embroidered</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </TabPanel>
                            
                            <TabPanel>
                                <form className="theme-form mt-4">
                                    <div className="form-row">
                                        <div className="col-md-12 ">
                                            <div className="media m-0">
                                                <label>Rating</label>
                                                <div className="media-body ml-3">
                                                    <div className="rating three-star">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter Your name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="review">Review Title</label>
                                            <input type="text" className="form-control" id="review" placeholder="Enter your Review Subjects" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="review">Review Title</label>
                                            <textarea className="form-control" placeholder="Wrire Your Testimonial Here" id="exampleFormControlTextarea1" rows="6"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-solid" type="submit">Submit Your Review</button>
                                        </div>
                                    </div>
                                </form>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </section>
        )
    }
}

export default DetailsCoinTabs;
import React, { Component } from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

import {Slider3} from "../../../services/script"

class BlogSection extends Component {
    render (){

        return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Slider {...Slider3} className="slide-3 no-arrow ">
                                <div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/10+1.png`} className="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div className="blog-details">
                                            <h4>{ "10 + 1 "}</h4>
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                                <p>Gold Mine</p></Link>
                                            <hr className="style1" />
                                                <h6>Monthly Installment Plan</h6>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/home/tryHome`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/try_home.png`} className="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div className="blog-details">
                                            <h4>Try At Home</h4>
                                            <Link to={`${process.env.PUBLIC_URL}/home/tryHome`} >
                                                <p>Try And Enjoy At Your Home </p></Link>
                                            <hr className="style1"/>
                                                <h6>Promis And Free Shipping</h6>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
        )
    }
}

export default BlogSection;
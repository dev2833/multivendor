import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import {
    Slider4,
    Slider6,
    svgFreeShipping,
    svgservice,
    svgoffer,
    svgpayment} from '../../../services/script'
// Import custom components
import { connect } from 'react-redux'
import LogoBlocks from "../common/logo-block"
import BlogSection from "../common/blogsection"
import Trending from "./trending";
import TrandingCollection from "../common/collection"
import Special from "../common/special";
import Instagram from "../common/instagram"
import HeaderFive from "../../common/headers/header-five"
import FooterFour from "../../common/footers/footer-four";
// import ThemeSettings from "../../common/theme-settings"
import {getAllProducts,getAllCoin } from '../../../actions'

class Watch extends Component {
    componentWillMount(){
        this.props.getAllCoin();
        this.props.getAllProducts();

    }

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color4.css` );
    }
    handleRing(){
        this.props.setStoreId("all");
        this.props.setCity("all");
        this.props.setMakingCharge("all");
        this.props.setType('all');
        this.props.setNextDay('all');
        this.props.setCategory("ring");
    }

    render(){
        return (
            <div>
                <Helmet>
                    <title>MultiKart | Watch Store</title>
                </Helmet>
                <HeaderFive logoName={'layout4/logo.png'} />
                <section className="p-0 small-slider" >
                    <Slider className="slide-1 home-slider">
                    <div>
                            <div className="home home12 text-left p-left">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>welcome to fashion</h4>
                                                    <h1>RING</h1>
                                                    <a href={`${process.env.PUBLIC_URL}/vendor`} className="btn btn-outline btn-classic">shop now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="home home9 text-left p-left">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div style={{marginLeft:"50px"}}>
                                                    <h4 >welcome to fashion</h4>
                                                    <h1>NECKLACE</h1>
                                                    <a href={`${process.env.PUBLIC_URL}/vendor`} className="btn btn-outline btn-classic">shop now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home10 text-left p-left">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>welcome to fashion</h4>
                                                    <h1>EARRING</h1>
                                                    <a href={`${process.env.PUBLIC_URL}/vendor`} className="btn btn-outline btn-classic">shop now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home11 text-left p-left">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>welcome to fashion</h4>
                                                    <h1>RING</h1>
                                                    <a href={`${process.env.PUBLIC_URL}/vendor`} className="btn btn-outline btn-classic">shop now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                {/*Logo Blocks section*/}
                <div className="container">
                    <section className="section-b-space">
                        <div className="row">
                            <div className="col">
                                <Slider {...Slider6} className="slide-6 no-arrow">
                                    <div className="category-block">
                                            <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link"  onClick={() => this.handleRing()}>
                                                <div className="category-image">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/cat1.png`} alt="" /></div>
                                            </Link>
                                        <div className="category-details">
                                            <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link"  onClick={() => this.handleRing()}>
                                                <h5>RING</h5>
                                            </Link>                                         
                                        </div>
                                    </div>
                                    <div className="category-block">
                                        <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link"  onClick={() => this.handleRing()}>
                                                    <div className="category-image">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icon/cat2.png`} alt="" /></div>
                                                </Link>
                                            <div className="category-details">
                                                <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link"  onClick={() => this.handleRing()}>
                                                    <h5>EARRING</h5>
                                                </Link>                                         
                                            </div>
                                    </div>
                                    <div className="category-block">
                                        <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link"  onClick={() => this.handleRing()}>
                                                <div className="category-image">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/cat3.png`} alt="" /></div>
                                        </Link>
                                        <div className="category-details">
                                            <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link"  onClick={() => this.handleRing()}>
                                                <h5>NECKLACE</h5>
                                            </Link>                                         
                                        </div>
                                    </div>
                                    <div className="category-block">
                                        <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link"  onClick={() => this.handleRing()}>
                                                <div className="category-image">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/cat4.png`} alt="" /></div>
                                        </Link>
                                        <div className="category-details">
                                            <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link"  onClick={() => this.handleRing()}>
                                                <h5>PENDANT</h5>
                                            </Link>                                         
                                        </div>
                                    </div>
                                    <div className="category-block">
                                        <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link"  onClick={() => this.handleRing()}>
                                                <div className="category-image">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/cat5.png`} alt="" /></div>
                                        </Link>
                                        <div className="category-details">
                                            <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link"  onClick={() => this.handleRing()}>
                                                <h5>BANGLE</h5>
                                            </Link>                                         
                                        </div>
                                    </div>
                                    <div className="category-block">
                                        <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link"  onClick={() => this.handleRing()}>
                                                <div className="category-image">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/cat6.png`} alt="" /></div>
                                        </Link>
                                        <div className="category-details">
                                            <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link"  onClick={() => this.handleRing()}>
                                                <h5>NOSE PIN</h5>
                                            </Link>                                         
                                        </div>
                                    </div>                                 
                                </Slider>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/home-banner/baby.png`} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/home-banner/gold.png`} className="img-fluid" alt="" style={{marginBottom:"20px"}}/>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/home-banner/kids.png`} className="img-fluid" alt=""/>
            
                        
                    </div>
                </div>
                {/*Logo Blocks section end*/}

                {/*Timer Banner*/}
                {/* <section className="pt-0">
                    <div className="container">
                        <div className="row banner-timer">
                            <div className="col-md-6">
                                <div className="banner-text">
                                    <h2>Save <span>30% off</span> Gold Rings </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/*Timer Banner End*/}

                {/*category wrapper*/}
                {/* <section className="section-b-space ratio_portrait">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...Slider4} className="slide-4 category-m no-arrow">
                                    <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/watch/cat1.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>New Arrival</h4>
                                                <a href={`${process.env.PUBLIC_URL}/vendor`} className="btn btn-outline">view more</a></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/watch/cat2.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>New Arrival</h4>
                                                  <a href={`${process.env.PUBLIC_URL}/vendor`} className="btn btn-outline">view more</a></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/watch/cat3.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>New Arrival</h4>
                                                <a href={`${process.env.PUBLIC_URL}/vendor`} className="btn btn-outline">view more</a></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/watch/cat2.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>New Arrival</h4>
                                                <a href={`${process.env.PUBLIC_URL}/vendor`} className="btn btn-outline">view more</a></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="category-wrapper">
                                            <div>
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/watch/cat1.png`}
                                                         className="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <h4>New Arrival</h4>
                                                 <a href={`${process.env.PUBLIC_URL}/vendor`} className="btn btn-outline">view more</a></div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/*Special Products Start*/}
                <Trending type={'watch'} />
                {/*Special Products End*/}

                {/* Parallax banner*/}
                <TrandingCollection type={'watch'} />
                {/* Parallax banner end*/}

                {/*Content Banner*/}
                <section className="ratio_45">
                    <div className="container">
                        <div className="row partition3">
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/banner1.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-left text-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/banner2.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/banner.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Content Banner End*/}

                {/* <Special type={'watch'} /> */}

                {/* Blog Section Section*/}
                <section className="blog blog-bg section-b-space ratio2_3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title4">
                                    <h4>our Service</h4>
                                    <h2 className="title-inner4">special service</h2>
                                    <div className="line"><span></span></div>
                                </div>
                                <BlogSection />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Blog Section End*/}

                {/*Service Layout*/}
                <div className="container">
                    <section className="service section-b-space border-section border-top-0">
                        <div className="row partition4">
                            <div className="col-lg-3 col-md-6 service-block1">
                                <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                <h4>free shipping</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                            </div>
                            <div className="col-lg-3 col-md-6 service-block1">
                                <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                <h4>24 X 7 service</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                            </div>
                            <div className="col-lg-3 col-md-6 service-block1">
                                <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                <h4>festival offer</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                            </div>
                            <div className="col-lg-3 col-md-6 service-block1">
                                <div dangerouslySetInnerHTML={{ __html: svgpayment }} />
                                <h4>online payment</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                            </div>
                        </div>
                    </section>
                </div>
                {/*Service Layout End*/}

                <Instagram type="watch"/>
                {/* <ThemeSettings/> */}

                <FooterFour logoName={'layout4/footerlogo.png'} />

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    symbol: state.data.symbol,
})

export default connect(
    mapStateToProps, {getAllProducts,getAllCoin}
)(Watch)

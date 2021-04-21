import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { IntlActions } from 'react-redux-multilingual'
import Pace from 'react-pace-progress'

// Import custom components
import store from '../../../store';
import NavBar from "./common/navbar";
import CartContainer from "./../../../containers/CartContainer";
import {changeCurrency} from '../../../actions'
import {connect} from "react-redux";
import TopBarDark from "./common/topbar-dark";
import LogoImage from "./common/logo";
import {filterSort,setCity} from '../../../actions'
import {getCityList} from '../../../services';

class HeaderFive extends Component {

    constructor(props) {
        super(props);

		this.state = {
			isLoading:false
		}
    }
    /*=====================
         Pre loader
         ==========================*/
    componentDidMount() {
        setTimeout(function() {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    }

    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
	}
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (number >= 300) {
            if (window.innerWidth < 576) {
                document.getElementById("sticky").classList.remove('fixed');
            }else
                document.getElementById("sticky").classList.add('fixed');
        } else {
            document.getElementById("sticky").classList.remove('fixed');
        }
    }

    changeLanguage(lang) {
        store.dispatch(IntlActions.setLocale(lang))
	}

    openNav() {
        var openmyslide = document.getElementById("mySidenav");
        if(openmyslide){
            openmyslide.classList.add('open-side')
		}
    }
    openSearch() {
        document.getElementById("search-overlay").style.display = "block";
    }

    closeSearch() {
        document.getElementById("search-overlay").style.display = "none";
    }

	load = ()=>{
		this.setState({isLoading: true});
		fetch().then(()=>{
			// deal with data fetched
			this.setState({isLoading: false})
		})
	};
	
	render() {
		const { city ,role} = this.props;

		return (
			<div>
				<header id="sticky" className="sticky">
					{this.state.isLoading ? <Pace color="#27ae60"/> : null}
					<div className="mobile-fix-option"></div>
					{/*Top Header Component*/}
					<TopBarDark />

					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="main-menu">
									<div className="menu-left category-nav-right">
										<div className="brand-logo">
                                            <LogoImage logo={this.props.logoName} />
										</div>
										{/* <div className="navbar">
											<a href="javascript:void(0)" onClick={this.openNav}>
												<div className="bar-style"> <i className="fa fa-bars sidebar-bar" aria-hidden="true"></i></div>
											</a>
																						<SideBar/>
										</div> */}
									</div>
									<div className="menu-right pull-right">
										{/*Top Navigation Bar Component*/}
										<NavBar/>

										<div>
											<div className="icon-nav">
												<ul>
											
													<li  className="onhover-div mobile-whishlist"><div className="cart-qty-cls">{this.props.wishlist.length}</div>
														<Link to={`${process.env.PUBLIC_URL}/wishlist`}><img src={`${process.env.PUBLIC_URL}/assets/images/icon/like.png`} className="img-fluid" alt=""/>
															</Link>
													</li>
									
													<li className="onhover-div mobile-setting">
														<div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/setting.png`} className="img-fluid" alt="" />
															<i className="fa fa-cog"></i></div>
														<div className="show-div setting">
															<h6>currency</h6>
															<ul className="list-inline">
																<li><a href={null} onClick={() => this.props.changeCurrency('$')}>{"$" +" "}USD</a> </li>
																<li><a href={null} onClick={() => this.props.changeCurrency('د.إ')}>{"د.إ"}AED</a> </li>
																<li><a href={null} onClick={() => this.props.changeCurrency('₹')}>{"₹" + " "}INR</a> </li>
																<li><a href={null} onClick={() => this.props.changeCurrency('£')}>{"£" + " "}GBP</a> </li>

															</ul>
														</div>
													</li>
													{/*Header Cart Component */}
													{
														<CartContainer/>
													}
													
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

                <div id="search-overlay" className="search-overlay">
                    <div>
                        <span className="closebtn" onClick={this.closeSearch} title="Close Overlay">×</span>
                        <div className="overlay-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <form>
                                            <div className="form-group">
												<div className="col-xl-12">
													<select onChange={(e) => this.props.filterSort(e.target.value)} className="col-xl-3" style={{border:"none",height:"65px",fontSize:"20px"}}>
														
														<option value="all" >All Citis</option>
														{
															city.map((location,index)=>
																<option key = {index} value={location} style={{height:"60px"}}>{location}</option>
															)
														}
														
														
													</select>
													<input type="text" style= {{ marginLeft:"5px",fontSize:"20px"}} className="col-xl-8" id="exampleInputPassword1" placeholder="Search a Product" />
												</div>																			
                                            </div>
                                            <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
			)
	}
}

const mapStateToProps = state => ({
	stores: state.store.stores,
	wishlist:state.wishlist.list,
    filters: state.filters,
	city:getCityList(state.store.stores),
	role: state.auth.role
})

export default connect(mapStateToProps, {filterSort,setCity,changeCurrency})(HeaderFive);
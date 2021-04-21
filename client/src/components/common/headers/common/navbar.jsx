import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { withTranslate } from 'react-redux-multilingual'
import { allVendors,getCategory,getStores,setCurrentStore,setStoreId,setCategory,setNextDay,setCity,filterPrice,setType,setMakingCharge,setCoinType,setVendorId} from '../../../../actions'
import {getCityList,getPriceRangeList,getMakingChargeList,getVisibleStores} from '../../../../services'
import { connect } from 'react-redux'
// import {style} from './style.css'

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navClose: { right: '0px' },
            basePrice: {min:0,max:100000},
            storeName:""
        }
    }

    componentWillMount() {
        this.props.allVendors();
        this.props.getCategory();
        this.props.getStores();
        if (window.innerWidth < 750) {
            this.setState({ navClose: { right: '-410px' } })
        }
        if (window.innerWidth < 1199) {
            this.setState({ navClose: { right: '-300px' } })
        }
    }

    handleVendor(event){
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setVendorId("all");
        this.props.setStoreId("all");
        this.props.setNextDay('all');
        this.props.setCategory("all");
        this.props.setCity("all");
        this.props.setMakingCharge("all");
        this.props.setType('all');
        if (event.target.classList.contains('sub-arrow'))
        return;

        if(event.target.nextElementSibling.classList.contains('opensubmenu'))
            event.target.nextElementSibling.classList.remove('opensubmenu')
        else{
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
            value.classList.remove('opensubmenu');
        });
        document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
        event.target.nextElementSibling.classList.add('opensubmenu')
        }

    }

    selectRingPriceRange(price){
        const value = {value:price}
        this.props.setCategory("ring");
        this.props.setCity("all");
        this.props.setNextDay('all');
        this.props.setMakingCharge("all");
        this.props.setStoreId("all");
        this.props.setType('all');
        this.props.filterPrice(value)
    }
    selectEarringPriceRange(price){
        const value = {value:price}
        this.props.setCategory("earring");
        this.props.setCity("all");
        this.props.setNextDay('all');
        this.props.setMakingCharge("all");
        this.props.setType('all');
        this.props.setStoreId("all");
        this.props.filterPrice(value)
    }
    handleAll(e){
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setStoreId("all");
        this.props.setNextDay('all');
        this.props.setCategory("all");
        this.props.setCity("all");
        this.props.setType('all');
        this.props.setMakingCharge("all");
    }
    selectEarringCity(city){
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setStoreId("all");
        this.props.setType('all');
        this.props.setMakingCharge("all");
        this.props.setNextDay('all');
        this.props.setCategory("earring");
        this.props.setCity(city);
    }
    selectRingCity(city){
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setStoreId("all");
        this.props.setType('all');
        this.props.setMakingCharge("all");
        this.props.setNextDay('all');
        this.props.setCategory("ring");
        this.props.setCity(city);
    }

    handleEarring(event){
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setStoreId("all");
        this.props.setType('all');
        this.props.setMakingCharge("all");
        this.props.setNextDay('all');
        this.props.setCategory("earring");
        this.props.setCity("all");
        if (event.target.classList.contains('sub-arrow'))
        return;

        if(event.target.nextElementSibling.classList.contains('opensubmenu'))
            event.target.nextElementSibling.classList.remove('opensubmenu')
        else{
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
            value.classList.remove('opensubmenu');
        });
        document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
        event.target.nextElementSibling.classList.add('opensubmenu')
        }
        
    }
    handleRing(event){
        this.props.setStoreId("all");
        this.props.setCity("all");
        this.props.setMakingCharge("all");
        this.props.setType('all');
        this.props.setNextDay('all');
        this.props.setCategory("ring");
        this.props.filterPrice({value:this.state.basePrice})
        if (event.target.classList.contains('sub-arrow'))
        return;

        if(event.target.nextElementSibling.classList.contains('opensubmenu'))
            event.target.nextElementSibling.classList.remove('opensubmenu')
        else{
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
            value.classList.remove('opensubmenu');
        });
        document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
        event.target.nextElementSibling.classList.add('opensubmenu')
        }
    }
    selectEarringStore(store){
        this.props.setCity("all");
        this.props.setNextDay('all');
        this.props.setType('all');
        this.props.setMakingCharge("all");
        this.props.setCategory("earring");
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setStoreId(store._id)
    }
    selectRingStore(store){
        this.props.setCity("all");
        this.props.setNextDay('all');
        this.props.setType('all');
        this.props.setMakingCharge("all");
        this.props.setStoreId(store._id);
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setCategory("ring");
    }
    openNav() {
        this.setState({ navClose: { right: '0px' } })
    }
    closeNav() {
        this.setState({ navClose: { right: '-410px' } })
    }

    onMouseEnterHandler() {
        if (window.innerWidth > 1199) {
            document.querySelector("#main-menu").classList.add("hover-unset");
        }
    }

    handleSubmenu = (event) => {
        this.props.setCoinType("all")
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensubmenu'))
            event.target.nextElementSibling.classList.remove('opensubmenu')
        else{
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
                value.classList.remove('opensubmenu');
            });
            document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
            event.target.nextElementSibling.classList.add('opensubmenu')
        }
    }

    handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;
            
        if(event.target.parentNode.nextElementSibling.classList.contains('opensubmegamenu'))
            event.target.parentNode.nextElementSibling.classList.remove('opensubmegamenu')
        else{
            document.querySelectorAll('.menu-content').forEach(function (value) {
                value.classList.remove('opensubmegamenu');
            });
            event.target.parentNode.nextElementSibling.classList.add('opensubmegamenu')
        }
    }
    selectCatgory = (cat) => {
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setCity("all");
        this.props.setNextDay('all');
        this.props.setType('all');
        this.props.setCurrentStore("all");
        this.props.setMakingCharge("all");
        this.props.setCategory(cat.category);
    }
    selectStore = (store) => {
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setCity("all");
        this.props.setCategory("all");
        this.props.setNextDay('all');
        this.props.setType('all');
        this.props.setMakingCharge("all");
        this.props.setCurrentStore(store);
        this.props.setStoreId(store._id)
        this.setState({storeName:store.name})
    }
    handleNextDay = () =>{
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setStoreId("all");
        this.props.setCategory("all");
        this.props.setType('all');
        this.props.setCity("all");
        this.props.setNextDay('true');
        this.props.setMakingCharge("all");
    }
    selectRingDiamond(){
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setType('Diamond');
        this.props.setCity("all");
        this.props.setCategory("ring");
        this.props.setStoreId("all")
        this.props.setNextDay('all');
        this.props.setMakingCharge("all");
    }
    selectEarringDiamond(){
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setType('Diamond');
        this.props.setCity("all");
        this.props.setCategory("earring");
        this.props.setStoreId("all")
        this.props.setNextDay('all');
        this.props.setMakingCharge("all");
    }
    selectRingSolitaire(){
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setType('Solitaire');
        this.props.setCity("all");
        this.props.setCategory("ring");
        this.props.setStoreId("all")
        this.props.setNextDay('all');
        this.props.setMakingCharge("all");
    }
    selectEarringSolitaire(){
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setType('Solitaire');
        this.props.setCity("all");
        this.props.setCategory("earring");
        this.props.setStoreId("all")
        this.props.setNextDay('all');
        this.props.setMakingCharge("all");
    }
    selectPendantSolitaire(){
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setType('Solitaire');
        this.props.setCity("all");
        this.props.setCategory("pendant");
        this.props.setStoreId("all")
        this.props.setNextDay('all');
        this.props.setMakingCharge("all");
    }

    handleMakingCharge(charge){
        console.log(charge.charge)
        this.props.filterPrice({value:this.state.basePrice})
        this.props.setType('all');
        this.props.setCity("all");
        this.props.setCategory("all");
        this.props.setStoreId("all")
        this.props.setNextDay('all');
        this.props.setMakingCharge(charge.charge);
    }
    handleSilver(){
        this.props.setCoinType('silver');
    }
    handleGold(){
        this.props.setCoinType('gold')
    }
    selectVendorName(vendor){
        this.props.setVendorId(vendor._id);

    }
    render() {
        const {stores,category,cities,priceRange,makingChargeList,vendors,role,selectStore} = this.props;
        console.log(vendors)
        return (
            <div>

                    <div className="main-navbar">
                    <div id="mainnav" style={{color: "red"}}>
                        <div className="toggle-nav" onClick={this.openNav.bind(this)} >
                            <i className="fa fa-bars sidebar-bar"></i>
                        </div>
                        <ul className="nav-menu" style={this.state.navClose}>
                            <li className="back-btn" onClick={this.closeNav.bind(this)} >
                                <div className="mobile-back text-right">
                                    <span >Back</span>
                                    <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                                </div>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/blog/details`} className="nav-link" >
                                   {" 10+1 monthly plan"}
                                </Link>
                            </li>
              

                            <li className="mega-menu">
                                <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link"  onClick={(e) => this.handleRing(e)}>
                                    Rings
                                    <span className="sub-arrow"></span>
                                </Link>
                                <div className="mega-menu-container" >
                                    <div className="container">
                                        <div className="row">
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            By Store
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                        { stores.map((store, index) =>
                                                            <li key={index}><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectRingStore(store)} >{store.name}</Link></li>
                                                            )
                                                        }
                                                                      
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            By City
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            { cities.map((city, index) =>
                                                                <li key={index}><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectRingCity(city)} >{city}</Link></li>
                                                                )
                                                            }                                                    
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                           By Price Range
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            { priceRange.map((price, index) =>
                                                                    <li key={index}><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectRingPriceRange(price)} >{price.name}</Link></li>
                                                                    )
                                                            }                                                       
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            By Metals AND Stones
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                        <li><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectRingDiamond()}>Diamond Ring</Link></li>
                                                        <li><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectRingSolitaire()}>Solitaire Ring</Link></li>
                                                        {/* <li><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectRingWhite(price)}>White Gold Ring</Link></li>
                                                        <li><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectRingRose(price)}>Rose Gold Ring</Link></li>
                                                        <li><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectRingGemstone(price)}>Gemstone Ring</Link></li> */}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="mega-menu">
                                <Link to={`${process.env.PUBLIC_URL}/vendor`} className="dropdown" onClick={(e) => this.handleEarring(e)}>
                                    Earrings
                                    <span className="sub-arrow"></span>
                                </Link>
                                <div className="mega-menu-container" >
                                    <div className="container">
                                        <div className="row">
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            by vendor
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                        { stores.map((store, index) =>
                                                            <li key={index}><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectEarringStore(store)} >{store.name}</Link></li>
                                                            )
                                                        }
                                                                      
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            By City
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            { cities.map((city, index) =>
                                                                    <li key={index}><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectEarringCity(city)} >{city}</Link></li>
                                                                    )
                                                            }   
                                                                      
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                           By Price Range
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            { priceRange.map((price, index) =>
                                                                        <li key={index}><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectEarringPriceRange(price)} >{price.name}</Link></li>
                                                                        )
                                                            }  
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            By Metals AND Stones
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                        <li><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectEarringDiamond()}>Diamond Earring</Link></li>
                                                        <li><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectEarringSolitaire()}>Solitaire Earring</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    Solitaire
                                    <span className="sub-arrow"></span>
                                </Link>
                                <ul className="nav-submenu">
                                    <li><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectRingSolitaire()}>Solitaire Ring</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectEarringSolitaire()}>Solitaire Earring</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectPendantSolitaire()}>Solitaire Pendant</Link></li>
                                       
                                </ul>
                            </li>
                            <li className="mega-menu" >
                                <Link to={`${process.env.PUBLIC_URL}/vendor`} className="dropdown" onClick={(e) => this.handleAll(e)}>
                                    All Jewellery
                                    <span className="sub-arrow"></span>
                                </Link>
                                <div className="mega-menu-container" >
                                    <div className="container">
                                        <div className="row">
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            by store
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                        { stores.map((store, index) =>
                                                            <li key={index}><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectEarringStore(store)} >{store.name}</Link></li>
                                                            )
                                                        }
                                                                      
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            by category
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            {
                                                                category.map((cat,index) =>
                                                                <li key={index}><Link to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectCatgory(cat)} >{cat.name}</Link></li>
                                                                )
                                                            } 
                                                                      
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            By Vendor
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            {
                                                                vendors.map((vendor,index) =>
                                                                    <li key={index}><Link to={`${process.env.PUBLIC_URL}/pages/stores`} onClick={(e) => this.selectVendorName(vendor)} >{vendor.firstName + " " + vendor.lastName}</Link></li>
                                                                )
                                                            }
                                        
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            Diamond JEWELLERY
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                        <li><Link to="#">Diamond Earrings</Link></li>
                                                        <li><Link to="#">Diamond Ring</Link></li>
                                                        <li><Link to="#">Diamond Pendant</Link></li>
                                                        <li><Link to="#">Diamond Necklaces</Link></li>
                                                        <li><Link to="#">Diamond Bracelets</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    Offers
                                    <span className="sub-arrow"></span>
                                </Link>
                                    <ul className="nav-submenu" >    
                                    {
                                        makingChargeList.map((charge,index) => 
                                        <li key={index}><Link  to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.handleMakingCharge(charge)} >{charge.name}</Link></li>  
                                        )
                                    }                                    
                               
                                    </ul>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/coin`} className="nav-link" onClick={(e) => this.handleSubmenu(e)}>
                                    Coins
                                    <span className="sub-arrow"></span>
                                </Link>
                                <ul className="nav-submenu" >                                        
                                        <li ><Link to={`${process.env.PUBLIC_URL}/coin`} onClick={(e) => this.handleGold()} >Gold Coin</Link></li>  
                                        <li ><Link to={`${process.env.PUBLIC_URL}/coin`} onClick={(e) => this.handleSilver()}   >Silver Coin</Link></li>  
                                         
                                        
                                    </ul>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/vendor`} className="nav-link" onClick={(e) => this.handleNextDay(e)}>
                                    Next Day Delivery
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            
              
            </div>
        )
    }
}


// export default withTranslate(NavBar);
const mapStateToProps = (state) => ({
    stores: getVisibleStores(state.store.stores, state.filters),
    
    currentStore:state.store.currentStore,
    category:state.data.category,
    cities:getCityList(state.store.stores),
    priceRange:getPriceRangeList(),
    makingChargeList:getMakingChargeList(),
    vendors:state.user.vendors,
    role:state.auth.role,
    selectStore:state.filters.storeId
    
})

export default connect(
    mapStateToProps, {allVendors,getCategory,getStores,setCurrentStore,setStoreId,setCategory,setNextDay,setCity,filterPrice,setType,setMakingCharge,setCoinType,setVendorId}
)(NavBar)
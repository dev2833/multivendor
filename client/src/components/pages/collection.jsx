
import { getStores,setCurrentStore,setStoreId,setCategory} from '../../actions'
import {getVisibleStores}  from '../../services';
import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import Breadcrumb from "../common/breadcrumb";
import FilterBar from "./filter-bar";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Collection extends Component {

    state = {
        layoutColumns:3
    }

    LayoutViewClicked(colums) {
        this.setState({
            layoutColumns:colums
        })
    }

    openFilter = () => {
        document.querySelector(".collection-filter").style = "left: -15px";
    }
 
    selectStore = (store) => {
            console.log(store);
            this.props.setCategory("all");
            this.props.setCurrentStore(store);
            this.props.setStoreId(store._id)
    }

    
    render (){
        const {rate,currency,symbol,stores} = this.props;
        return (
            
            <div>
                {/*SEO Support*/}
                <Helmet>
                    <title>MultiKart | Collection of Products</title>
                    <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
                </Helmet>
                {/*SEO Support End */}

                <Breadcrumb title={"Stores"}/>

                <section className="section-b-space">
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="collection-content col">
                                    <div className="page-main-content ">
                                        <div className="">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="collection-product-wrapper">
                                                        <div className="product-top-filter">
                                                            <div className="container-fluid p-0">
                               
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <FilterBar onLayoutViewClicked={(colmuns) => this.LayoutViewClicked(colmuns)}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <section className="collection section-b-space">
                                                                    <div className="container">
                                                                        <div className="row partition-collection">
                                                                            { stores.map((store, index) =>
                                                                            <div className="col-lg-3 col-md-6" key={index} style={{marginTop:"20px"}}>
                                                                                <div className="collection-block" >
                                                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/1.jpg`} className="img-fluid" alt="" />
                                                                                        <div className="collection-content">
                                                                                            <h4>{"Gold RATE : " + symbol +(store.gold_24*rate.currency[currency].rate).toFixed(0) + " - Silver Rate : " + symbol+ (store.silverRate*rate.currency[currency].rate).toFixed(0)}</h4>
                                                                                            <h4>{"City : " + store.location}</h4>
                                                                                            <h4>{"Discount : " + store.discount+"%"}</h4>
                                                                                            <h3>{store.name}</h3>
                                                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                                                industry....</p>
                                                                                            <Link className="btn btn-outline" to={`${process.env.PUBLIC_URL}/vendor`} onClick={(e) => this.selectStore(store)} >Shop Now</Link>
                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                            )
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>                                                   

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    stores: getVisibleStores(state.store.stores, state.filters),
    rate:state.data.rate,
    currency:state.data.currency,
    symbol: state.data.symbol,
})

export default connect(
    mapStateToProps, {getStores,setCurrentStore,setStoreId,setCategory}
)(Collection)
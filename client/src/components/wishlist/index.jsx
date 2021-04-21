import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import {addToCartAndRemoveWishlist, removeFromWishlist,getWishList} from '../../actions'

class wishList extends Component {
    componentWillMount(){
        this.props.getWishList(this.props.CustomerId)
    }

    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    render (){

        const {Items, symbol} = this.props;
        console.log(Items);
        return (
            <div>
                
                {Items ?
                <section className="wishlist-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <table className="table cart-table table-responsive-xs">
                                    <thead>
                                    <tr className="table-head">
                                        <th scope="col">image</th>
                                        <th scope="col">product name</th>
                                        <th scope="col">category</th>
                                        <th scope="col">action</th>
                                    </tr>
                                    </thead>
                                    {Items.map((item, index) => {
                                        return (
                                            <tbody key={index}>
                                            <tr>
                                                <td>
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item._id}`}>
                                                        <img src={item.variants?
                                                                    item.variants[0].images
                                                                    :item.pictures[0]} alt="" />
                                                    </Link>
                                                </td>
                                                <td><Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item._id}`}><h4>{item.name}</h4></Link>
                                                    <div className="mobile-cart-content row">
                                                        <div className="col-xs-3">
                                                            <p>in stock</p>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color"></h2>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">
                                                                <a href="javascript:void(0)" className="icon" onClick={() => this.props.removeFromWishlist(item)}>
                                                                    <i className="fa fa-times"></i>
                                                                </a>
                                                                <a href="javascript:void(0)" className="cart" onClick={() => this.props.addToCartAndRemoveWishlist(item, 1)}>
                                                                    <i className="fa fa-shopping-cart"></i>
                                                                </a>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><h5>{item.category}</h5></td>
                                          
                                                <td>
                                                    <a href="javascript:void(0)" className="icon" onClick={() => this.props.removeFromWishlist(item)}>
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                    <a href="javascript:void(0)" className="cart" onClick={() => this.props.addToCartAndRemoveWishlist(item, 1)}>
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            </tbody> )
                                    })}
                                </table>
                            </div>
                        </div>
                 
                    </div>
                </section>
                :
                <section className="cart-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div >
                                    <div className="col-sm-12 empty-cart-cls text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/empty-wishlist.png`} className="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>WhishList is Empty</strong>
                                        </h3>
                                        <h4>Explore more shortlist some items.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    Items: state.wishlist.list,
    symbol: state.data.symbol,
    CustomerId: state.auth.currentUser._id,
})

export default connect(
    mapStateToProps,
    {addToCartAndRemoveWishlist, removeFromWishlist,getWishList}
)(wishList)
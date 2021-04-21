import React, { Component, Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import Datatable from './datatable';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

export class ProductList extends Component {
    constructor(){
        super();
        this.state={
            searchbar:''
        }
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        console.log(nam)
        console.log(val)
        this.setState({[nam]: val});
    }
    render() {
        const { stores } = this.props.stores
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="card">
                    
                        <div className="card-header" style={{paddingBottom:"0px"}}>
                            <div className="row">
                                <div style={{ marginLeft:"150px"}} className="col-xl-2">
                                    <select className="custom-select" onChange={this.myChangeHandler} name="store" style={{width:"200px"}} >
                                        <option value="all">ALL STORES</option>
                                            {
                                                this.props.stores.map((store,index) => 
                                                    <option key = { index } value={store._id}>{store.name}</option>
                                                )
                                            }
                                        
                                    </select>
                                </div>
                                <div  className="col-xl-6">
                                    <select className="custom-select" onChange={this.myChangeHandler} name="category" style={{width:"200px"}} >
                                        <option value="all">ALL CATEGORY</option>
                                            {
                                                this.props.category.map((category,index) => 
                                                    <option className={{toUpperCase:true}} key = { index } value={category.name}>{category.name}</option>
                                                )
                                            }
                                        
                                    </select>
                                </div>
                           
                
            
                                <div className="btn-popup pull-right col-xl-2" style={{marginRight:"0px"}}>                 
                                    <Link to="/products/add" className="btn btn-secondary">REGISTER NEW PRODUCT</Link>
                                </div>
                            </div>
                        </div>
                  
                        <div className="card-body" style={{ marginTop:"0px"}}>

                            <div className="clearfix"></div>
                            <div id="batchDelete" className="category-table user-list order-table coupon-list-delete">
                                <Datatable
                                    pageSize={8}
                                    pagination={true}
                                    class="-striped -highlight"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}



const mapStateToProps = (state) => ({
    stores:state.store.stores,
    category:state.data.category,
})

export default connect(
    mapStateToProps,{}
)(ProductList)
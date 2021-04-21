import React, { Component, Fragment } from 'react'
import Breadcrumb from '../../common/breadcrumb';
import data from '../../../assets/data/pro_list';
import Datatable from './datatable'
import {connect} from 'react-redux';
import {getAllProducts,setCurrentStore} from '../../../actions/index'
import {makeProductData} from '../../../services/index'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
export class ProductAdminPending extends Component {
    constructor(){
        super();
        this.state = {
            tabIndex:0
        }
    }
    componentWillMount() {
        console.log(this.props.stores)
        this.props.setCurrentStore(this.props.stores[0]._id);
    }
    changeTab = (index)=>{
        console.log(index)
        this.props.setCurrentStore(this.props.stores[index]._id)
        this.setState({
            tabIndex:index
        })

    }
    render() {
        const { products,stores } = this.props;
        return (
            <Fragment>
                <Breadcrumb title="Product List" parent="Product" />
                {/* <!-- Container-fluid starts--> */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                        <Tabs  onSelect={index => this.changeTab(index)}>
                            <TabList className="nav nav-tabs tab-coupon" >
                                {
                                    stores.map((store,index) =>
                                        <Tab key={ index }  className="nav-link">{store.name}</Tab>
                                    )
                                }
                                
                            </TabList>
                            {
                                stores.map((store,index) =>
                                    <TabPanel key = {index}>
                                       <div className="card">                                   
                                            <div className="card-body">
                                                <div className="clearfix"></div>
                                                <div id="basicScenario" className="product-physical">
                                                    <Datatable
                                                        approve={true}
                                                        multiSelectOption={true}
                                                        myData={products}
                                                        pageSize={5}
                                                        pagination={true}
                                                        class="-striped -highlight"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    )
                                }
                            
                        </Tabs>
          
                        </div>
                    </div>
                </div>
                {/* <!-- Container-fluid Ends--> */}
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    products: makeProductData(state.data,state.filters,"pending",state.store.currentStore),
    rate:state.data.rate,
    currency:state.data.currency,
    symbol: state.data.symbol,
    stores: state.store.stores
})

export default connect(
    mapStateToProps, {getAllProducts,setCurrentStore}
)(ProductAdminPending)

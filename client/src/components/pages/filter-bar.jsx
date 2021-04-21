import React, {Component} from 'react';
import { connect } from 'react-redux'
import {filterSort,setCity} from '../../actions'
import {getCityList} from '../../services';

class FilterBar extends Component {

    filterCity(e){
        console.log(e)
        this.props.setCity(e);
    }
    componentWillMount(){
        this.props.setCity("all")
    }
    //List Layout View
    listLayout(){
        document.querySelector(".collection-grid-view").style = "opacity:0";
        document.querySelector(".product-wrapper-grid").style = "opacity:0.2";
        document.querySelector(".product-wrapper-grid").classList.add("list-view");
        var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
        [].forEach.call(elems, function(el) {
            el.className = '';
            el.classList.add('col-lg-12');
        });
        setTimeout(function(){
            document.querySelector(".product-wrapper-grid").style = "opacity: 1";
        }, 500);
    }

    //Grid Layout View
    gridLayout(){
        document.querySelector(".collection-grid-view").style = "opacity:1";
        document.querySelector(".product-wrapper-grid").classList.remove("list-view");
        var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
        [].forEach.call(elems, function(el) {
            el.className = '';
            el.classList.add('col-lg-3');
        });
    }

    // Layout Column View
    LayoutView = (colSize) =>{
        if(!document.querySelector(".product-wrapper-grid").classList.contains("list-view")) {
            var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
            [].forEach.call(elems, function(el) {
                el.className = '';
                el.classList.add('col-lg-'+colSize);
            });
        }

        this.props.onLayoutViewClicked(colSize);
    }

    render (){
        const { stores,city } = this.props
        return (
            <div className="product-filter-content">
                <div className="product-page-filter" >

                        <option value="" style={{marginTop:"20px"}}>Showing Stores 1-{stores.length} Result</option>

                    
                </div>
                <div className="product-page-filter">
                    <select onChange={(e) => this.filterCity(e.target.value)}>
                    <option value="all">All Citis</option>
                        {
                            city.map((location,index)=>
                                <option key = {index} value={location}>{location}</option>
                            )
                        }
                    </select>
                </div>
                <div className="product-page-filter">
                    <select onChange={(e) => this.props.filterSort(e.target.value)}>
                        <option value="">Sorting by Gold Rate</option>
                        <option value="HighToLow">Gold Rate: High to Low</option>
                        <option value="LowToHigh">Gold Rate: Low to High</option>
                    </select>
                </div>
                <div className="product-page-filter">
                    <select onChange={(e) => this.props.filterSort(e.target.value)}>
                        <option value="">Sorting by Discount</option>
                        <option value="highToLow">Discount: High to Low</option>
                        <option value="lowToHigh">Discount: Low to High</option>
                    </select>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stores: state.store.stores,
    filters: state.filters,
    city:getCityList(state.store.stores)
})

export default connect(mapStateToProps, {filterSort,setCity})(FilterBar);
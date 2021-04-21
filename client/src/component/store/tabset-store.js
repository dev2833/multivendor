import React, { Component,Fragment } from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { connect } from 'react-redux';
import {updateMetalRate,getStore} from '../../actions/index'

export class Tabset_user extends Component {
    constructor(props){
        super(props);       
            this.state = {
                gold_14:this.props.stores[0].gold_14,
                gold_18:this.props.stores[0].gold_18,
                gold_22:this.props.stores[0].gold_22,
                gold_24:this.props.stores[0].gold_24,
                silverRate:this.props.stores[0].silverRate,
                tabIndex:0
            }
    
    }
    componentWillMount(){
        this.props.getStore();
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        const data = {
            storeId:this.props.stores[this.state.tabIndex]._id,
            updateData:{
                gold_14:this.state.gold_14,
                gold_18:this.state.gold_18,
                gold_22:this.state.gold_22,
                gold_24:this.state.gold_24,
                silverRate:this.state.silverRate
            }
        };
        this.props.updateMetalRate(data);
    }
    renderAlert(error) {
        let message = this.state.message || this.props.message
    
        if (message) {
          return (
            <div className="alert alert-warning">
              <strong>Oops!
                    </strong> {message}
            </div>
          )
        }
    }
    changeTab = (index)=>{
        this.setState({
            gold_14:this.props.stores[index].gold_14,
            gold_18:this.props.stores[index].gold_18,
            gold_22:this.props.stores[index].gold_22,
            gold_24:this.props.stores[index].gold_24,
            silverRate:this.props.stores[index].silverRate,
            tabIndex:index
        })

    }
    render() {
        const { stores } = this.props
        return (
            <Fragment>
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
                            <TabPanel key={index}>
                                <form className="needs-validation user-add" noValidate="" onSubmit={this.mySubmitHandler}>
                                    <h4>Setting Details</h4>
                        
                                    <div className="form-group row">
                                        <label className="col-xl-3 col-md-4"><span>*</span> 14 kt Gold Rate/g</label>
                                        <input name="gold_14" value={this.state.gold_14} onChange = {this.myChangeHandler} className="form-control col-xl-6 col-md-5"  type="number" required={true} />
                                        <label className="col-xl-3 col-md-4"><span>*</span> INR</label>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-xl-3 col-md-4"><span>*</span> 18 kt Gold Rate/g</label>
                                        <input name="gold_18" value={this.state.gold_18} onChange = {this.myChangeHandler} className="form-control col-xl-6 col-md-5"  type="number" required={true}  />
                                        <label className="col-xl-3 col-md-4"><span>*</span> INR</label>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-xl-3 col-md-4"><span>*</span> 22 kt Gold Rate/g</label>
                                        <input name="gold_22" value={this.state.gold_22} onChange = {this.myChangeHandler} className="form-control col-xl-6 col-md-5"  type="number" required={true}  />
                                        <label className="col-xl-3 col-md-4"><span>*</span> INR</label>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-xl-3 col-md-4"><span>*</span> 24 kt Gold Rate/g</label>
                                        <input name="gold_24" value={this.state.gold_24} onChange = {this.myChangeHandler} className="form-control col-xl-6 col-md-5"  type="number" required={true}  />
                                        <label className="col-xl-3 col-md-4"><span>*</span> INR</label>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-xl-3 col-md-4"><span>*</span> Silver Rate/g</label>
                                        <input name="silverRate" value={this.state.silverRate} onChange = {this.myChangeHandler} className="form-control col-xl-6 col-md-5"  type="number" required={true}  />
                                        <label className="col-xl-3 col-md-4"><span>*</span> INR</label>
                                    </div>
                                    <div className="form-group row" >
                                    <label className="col-xl-7 col-md-5"></label>
                                        <button type="submit" className="btn btn-primary">Save</button>
                                        <label style={{marginLeft:"15px"}}></label>
                                        <button type="reset" className="btn btn-primary">Reset</button>
                                    </div>                               
                                    
                                </form>
        
                            </TabPanel>    
                            )
                        }
                 
                </Tabs>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    success:'true'

})

export default connect(
    mapStateToProps, {updateMetalRate,getStore }
)(Tabset_user)


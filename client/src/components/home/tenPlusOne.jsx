import React, { Component, Fragment } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from 'react-redux';
import {getTenPlusOne} from '../../actions/index'



export class TenPlusOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedValues: [],
            tenPlusOnes: this.props.tenPlusOnes
        }
    }
    componentWillMount(){
        this.props.getTenPlusOne(this.props.CustomerId)
    }
    selectRow = (e, i) => {
        if (!e.target.checked) {
            this.setState({
                checkedValues: this.state.checkedValues.filter((item, j) => i !== item)
            });
        } else {
            this.state.checkedValues.push(i);
            this.setState({
                checkedValues: this.state.checkedValues
            })
        }
    }




    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    render() {
        const { tenPlusOnes } = this.state
        var myData = [];
        for(let i = 0 ; i < tenPlusOnes.length; i++){
            let row;
            row = {
                No:i+1,                
                Date:tenPlusOnes[i].date,
                Plan:'₹ ' + tenPlusOnes[i].totalPlan,
                Paid:'₹ ' + tenPlusOnes[i].monthlyPlan,
                Month:tenPlusOnes[i].numOfMonthes+"th Month",
                status:tenPlusOnes[i].complete?<span className="badge badge-success">{"completed"}</span>:<span className="badge badge-primary">{"Not Completed"}</span>,
                Nominee:tenPlusOnes[i].nominee
            }
            myData.push(row);
        }    
        const columns = [];
        for (var key in myData[0]) {

            let editable = null
            let width = 150
            let visible = {
                height:"70px",
                textAlign: 'center'
            }
            if(key === "No"){
                width = 60
            }
            if (key === "image") {
                editable = null;
               
            }
            if (key === "status") {
                editable = null;
            }

            if(key === "order_status"){
                editable = null;
            }

            columns.push(
                {
                    Header: <b>{this.Capitalize(key.toString())}</b>,
                    accessor: key,
                    Cell: editable,
                    style: visible,
                    width:width
                });
        }

        

        return (
            <div>
                {
                    this.props.tenPlusOnes?
                    <Fragment>
                        <ReactTable 
                            data={myData}
                            columns={columns}
                            defaultPageSize={5}
                            showPagination={true}
                        />
                        <ToastContainer />
                    </Fragment>
                :
                <section className="cart-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div >
                                    <div className="col-sm-12 empty-cart-cls text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} className="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>Your Ten Plus One History is Empty</strong>
                                        </h3>                                        
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
    CustomerId: state.auth.currentUser._id,
    tenPlusOnes: state.tenPlusOne.tenPlusOnes,
    symbol: state.data.symbol,
    currency:state.data.currency,
    rate: state.data.rate
})

export default connect(
    mapStateToProps,
    {getTenPlusOne}
)(TenPlusOne)
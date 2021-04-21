import React, { Component, Fragment } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from 'react-redux';
import {getOrderHistory} from '../../actions/index'



export class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedValues: [],
            orders: this.props.orders
        }
    }
    componentWillMount(){
        this.props.getOrderHistory(this.props.CustomerId)
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
        const { orders } = this.state
        var myData = [];
        for(let i = 0 ; i < orders.length; i++){
            let row;
            row = {
                No:i+1,
                image: <img src={orders[i].productId.variants[0].images} style={{width:50,height:55}}/>,
                Name:orders[i].productId.name,
                OrderStatus:orders[i].orderStatus,
                Price:orders[i].total,
                Quantity:orders[i].quantity,
                status:orders[i].status,
            }
            myData.push(row);
        }    
        const columns = [];
        for (var key in myData[0]) {

            let editable = null
            let width = 145
            let visible = {
                textAlign: 'center'
            }
            if(key === "No"){
                width = 80
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
            <Fragment>
                <ReactTable 
                    data={myData}
                    columns={columns}
                    defaultPageSize={5}
                    showPagination={true}
                />
                <ToastContainer />
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    CustomerId: state.auth.currentUser?state.auth.currentUser._id:"1",
    orders: state.order.orderHistory,
    symbol: state.data.symbol,
    currency:state.data.currency,
    rate: state.data.rate
})

export default connect(
    mapStateToProps,
    {getOrderHistory}
)(Order)
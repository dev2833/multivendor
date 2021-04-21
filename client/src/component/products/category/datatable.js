import React, { Component, Fragment } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from 'react-redux';
import {closeVendor,selectVendor,deleteVendor} from '../../actions/index'
import {Link} from 'react-router-dom'


export class Datatable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedValues: [],
            products: this.props.products
        }
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

    handleRemoveRow = (id) => {
        this.props.deleteVendor(id);
        toast.success("Successfully Deleted !")
    };
    handleCloseRow= (id) => {

        this.state.products.map(row => {
            if ( row._id === id )
                row.approved = !row.approved          
            
        })
        this.props.closeVendor(id);
        this.setState({
            products: this.state.products
        })
        toast.success("Success!")
    };

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    render() {
        const { pageSize, myClass,  pagination } = this.props;
        const { products } = this.state
        var myData = [];
        for(let i = 0 ; i < products.length; i++){
            let row;
            row = {
                No:i+1,
                image: <img src={products[i].variants[0].images} style={{width:50,height:50}}/>,
                Name:products[i].name,
                Store:products[i].storeId.name,
                Category:products[i].category,
                SKU:products[i].productCode,
                Stock:products[i].stock,
                status:products[i].approved ?<button onClick={()=>{this.handleCloseRow(products[i]._id)}} style={{padding:"0px"}} className="btn btn-secondary btn-sm btn-delete mb-0 b-r-4" style={{paddingLeft:"15px",paddingRight:"15px"}}>{"ACTIVE"}</button>:<button onClick={()=>{this.handleCloseRow(products[i]._id)}} className="btn btn-primary btn-sm btn-delete mb-0 b-r-4">{"INACTIVE"}</button>,
                Collection:products[i].collections
            }
            myData.push(row);
        }    
        const columns = [];
        for (var key in myData[0]) {

            let editable = null
            let width = 150
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
            if (key === "avtar") {
                editable = null;
                width = 140
            }
            if (key === "vendor") {
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
            columns.push(
                {
                    Header: <b>Action</b>,
                    id: 'delete',
                    accessor: str => "delete",
                    Cell: (row) => (
                        <div>
                            <span><i className="fa fa-dollar" style={{ width: 35, fontSize: 20, padding: 11,color:'primary' }}></i></span>


                            <Link to={"/vendors/editVendor"} onClick={()=>{
                                    let data = products;let num = row.index;
                                    this.props.selectVendor(data[num])

                                }}><i className="fa fa-pencil" style={{ width: 35, fontSize: 20, padding: 11,color:'rgb(40, 167, 69)' }}></i></Link>
                            <span onClick={() => {
                                if (window.confirm('Are you sure you wish to delete this vendor?')) {
                                    let data = products;let num = row.index;
                                    this.handleRemoveRow(data[num]._id)
                                    data.splice(row.index, 1);                                   
                                    
                                    this.setState({ products: data });
                                }                               

                                }}>
                                <i className="fa fa-trash" style={{ width: 35, fontSize: 20, padding: 11, color: '#e4566e' }}
                                ></i>
                            </span>
                        </div>
                ),
                style: {
                    textAlign: 'center'
                },
                sortable: false
            }
        )

        return (
            <Fragment>
                <ReactTable 
                    data={myData}
                    columns={columns}
                    defaultPageSize={8}
                    showPagination={pagination}
                />
                <ToastContainer />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    products:state.data.products
})

export default connect(
    mapStateToProps,{closeVendor,selectVendor,deleteVendor}
)(Datatable)
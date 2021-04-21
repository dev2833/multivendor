import React, { Component, Fragment } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect } from 'react-redux';
import {approvePendingProduct,deletePendingProduct} from '../../../actions/index'

export class Datatable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedValues: [],
            myData: this.props.myData
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

    handleApproveRow = () => {
        const selectedValues = this.state.checkedValues;
        const updatedData = this.state.myData.filter(function (el) {
            return selectedValues.indexOf(el.id) < 0;
        });
        this.props.approvePendingProduct(selectedValues)
        this.setState({
            myData: updatedData
        })
        toast.success("Successfully approved !")
    };
    handleDeleteRow = () => {
        const selectedValues = this.state.checkedValues;
        const updatedData = this.state.myData.filter(function (el) {
            return selectedValues.indexOf(el.id) < 0;
        });
        this.props.deletePendingProduct(selectedValues);
        this.setState({
            myData: updatedData
        })
        toast.success("Successfully Deleted !")
    };
    // handleCloseRow = () => {
    //     const selectedValues = this.state.checkedValues;
    //     const updatedData = this.state.myData.filter(function (el) {
    //         return selectedValues.indexOf(el.id) < 0;
    //     });
    //     this.props
    //     this.setState({
    //         myData: updatedData
    //     })
    //     toast.success("Successfully Deleted !")
    // };

    renderEditable = (cellInfo) => {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...this.state.myData];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({ myData: data });
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.myData[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        const { pageSize, myClass, multiSelectOption, pagination ,approve} = this.props;
        const { myData } = this.state

        const columns = [];
        for (var key in myData[0]) {

            let editable = this.renderEditable
            editable = false;
            let width = 130
            let visible = {
                textAlign: 'center'
            }
        
            if (key === "image") {
                editable = null;
                width = 100
            }

            if (key === "Category" || key ==="Metal" || key ===  "Stone" || key === "Weight" ){
                width = 100
            }

            if (key === "Width" || key ==="Height" || key ===  "SKU" || key ==="Stock"){
                width = 95
            }
            if (key === "id"){
                width = 70
            }


            columns.push(
                {
                    Header: <b>{this.Capitalize(key.toString())}</b>,
                    accessor: key,
                    Cell: editable,
                    style: visible,
                    width:width,
                    aditable:editable,
                });
        }

        if (multiSelectOption == true) {
            columns.push(
                {
                    Header: <div><button className="btn btn-primary btn-sm btn-delete mb-0 b-r-4"
                        onClick={
                            (e) => {
                                if (window.confirm('Are you sure you wish to delete this ?'))
                                    this.handleRemoveRow()
                            }}>Delete</button>
                            {
                                approve?
                                <button className="btn btn-secondary btn-sm btn-delete mb-0 b-r-4" style={{marginLeft:"5px"}}
                                onClick={
                                    (e) => {
                                        if (window.confirm('Are you sure you wish to approve this ?'))
                                            this.handleApproveRow()
                                    }}>Approve</button>:<div></div>
                                    // <button className="btn btn-secondary btn-sm btn-delete mb-0 b-r-4" style={{marginLeft:"5px"}}
                                    // onClick={
                                    //     (e) => {
                                    //         if (window.confirm('Are you sure you wish to close this ?'))
                                    //             this.handleCloseRow()
                                    //     }}>Disapprove</button>                                
                            }
                            </div>,

                    id: 'delete',
                    accessor: str => "delete",
                    sortable: false,
                    style: {
                        textAlign: 'center'
                    },
                    Cell: (row) => (
                        <div>
                            <span >
                                <input type="checkbox" name={row.original.id} defaultChecked={this.state.checkedValues.includes(row.original.id)}
                                    onChange={e => this.selectRow(e, row.original.id)} />
                            </span>
                        </div>
                    ),
                    accessor: key,
                    style: {
                        textAlign: 'center'
                    }
                }
            )
        } else {
            columns.push(
                {
                    Header: <b>Action</b>,
                    id: 'delete',
                    accessor: str => "delete",
                    Cell: (row) => (
                        <div>
                            <span onClick={() => {
                                if (window.confirm('Are you sure you wish to delete this item?')) {
                                    let data = myData;
                                    data.splice(row.index, 1);
                                    this.setState({ myData: data });
                                }
                                toast.success("Successfully Deleted !")

                            }}>
                                <i className="fa fa-trash" style={{ width: 25, fontSize: 20, padding: 11, color: '#e4566e' }}
                                ></i>
                            </span>

                        <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 20, padding: 11,color:'rgb(40, 167, 69)' }}></i></span>
                    </div>
                ),
                style: {
                    textAlign: 'center'
                },
                sortable: false
            }
        )
        }

        return (
            <Fragment>
                <ReactTable
                    data={myData}
                    columns={columns}
                    defaultPageSize={pageSize}
                    className={myClass}
                    showPagination={pagination}
                />
                <ToastContainer />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    product:state.data.products
})

export default connect(
    mapStateToProps,{deletePendingProduct,approvePendingProduct}
)(Datatable)
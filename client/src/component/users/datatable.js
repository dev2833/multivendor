import React, { Component, Fragment } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from 'react-redux';
import {closeUser,selectUser,deleteUser} from '../../actions/index'
import {Link} from 'react-router-dom'


export class Datatable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedValues: [],
            users: this.props.users
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
        this.props.deleteUser(id);
        toast.success("Successfully Deleted !")
    };
    handleCloseRow= (id) => {

        this.state.users.map(row => {
            if ( row._id === id )
                row.approved = !row.approved          
            
        })
        this.props.closeUser(id);
        this.setState({
            users: this.state.users
        })
        toast.success("Success!")
    };

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    render() {
        const { pageSize, myClass,  pagination } = this.props;
        const { users } = this.state
        var myData = [];
        for(let i = 0 ; i < users.length; i++){
            let row;
            row = {
                No:i+1,
                full_Name:users[i].firstName+" " +users[i].lastName,
                email:users[i].email,
                phoneNumber:users[i].phoneNumber,
                created_on:users[i].created_on,
                status:users[i].approved ?<button onClick={()=>{this.handleCloseRow(users[i]._id)}} style={{padding:"0px"}} className="btn btn-secondary btn-sm btn-delete mb-0 b-r-4" style={{paddingLeft:"15px",paddingRight:"15px"}}>{"ACTIVE"}</button>:<button onClick={()=>{this.handleCloseRow(users[i]._id)}} className="btn btn-primary btn-sm btn-delete mb-0 b-r-4">{"INACTIVE"}</button>,

            }
            myData.push(row);
        }    
        const columns = [];
        for (var key in myData[0]) {

            let editable = null
            let width = 200
            let visible = {
                textAlign: 'center'
            }
            if(key === "No"){
                width = 150
            }
            if (key === "created_on") {
                width = 300
               
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
                            <span><i className="fa fa-eye" style={{ width: 35, fontSize: 20, padding: 11,color:'primary' }}></i></span>


                            <Link to={"/users/editUser"} onClick={()=>{
                                    let data = users;
                                    let num = row.index;
                                    this.props.selectUser(data[num])

                                }}><i className="fa fa-pencil" style={{ width: 35, fontSize: 20, padding: 11,color:'rgb(40, 167, 69)' }}></i></Link>
                            <span onClick={() => {
                                if (window.confirm('Are you sure you wish to delete this vendor?')) {
                                    let data = users;let num = row.index;
                                    this.handleRemoveRow(data[num]._id)
                                    data.splice(row.index, 1);                                  
                                    
                                    this.setState({ users: data });
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
    users:state.user.users,
})

export default connect(
    mapStateToProps,{closeUser,selectUser,deleteUser}
)(Datatable)
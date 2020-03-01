import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const DpartmentList = [
    {DepartmentName:"English", Type:"academic", ShortCode:"CM"},
    {DepartmentName:"Math", Type:"academic", ShortCode:"CM"},
    {DepartmentName:"Computer", Type:"academic", ShortCode:"CM"},
    {DepartmentName:"Arts", Type:"academic", ShortCode:"CM"},
    {DepartmentName:"Psycology", Type:"academic", ShortCode:"CM"},
]

class DepartmentDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabActive:0,

            filterFromDate: null,
            filterToDate: null,
            isOpenFilterDropdown: false,

            DpartmentList: DpartmentList,
            isOpenDepartmentDropdown: false,
        }
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    OnClickTabDepartmentsList = () => this.setState({tabActive:0})
    OnClickTabAddDepartments = () => this.setState({tabActive:1})

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <h2 style={{color:"grey"}}>Manage Departments</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <div style={{height:30}}></div>
                <Row>
                    <Col>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className={this.state.tabActive==0 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabDepartmentsList}><i class="fa fa-align-justify"></i> Departments List</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.tabActive==1 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabAddDepartments}><i class="fa fa-plus-circle fa-lg"></i> Add Departments</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                {this.state.tabActive == 0 && 
                <Row>
                    <div className="col-12 col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Department Name</th>
                                                <th>Type</th>
                                                <th>Short Code</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                            {
                                                this.state.DpartmentList.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{item.DepartmentName}</td>
                                                        <td>{item.Type}</td>
                                                        <td>{item.ShortCode}</td>
                                                        <td><Dropdown>Action</Dropdown></td>
                                                    </tr>
                                                    )
                                                })
                                            }
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                <nav className="" aria-label="pagination">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <button className="page-link" aria-label="Previous">
                                                <span aria-hidden="true">«</span>
                                                <span className="sr-only">Previous</span>
                                            </button></li><li class="page-item active">
                                            <button className="page-link">1</button>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-link">2</button>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-link">3</button>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-link">4</button>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-link" aria-label="Next">
                                                <span aria-hidden="true">»</span>
                                                <span className="sr-only">Next</span>
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </Row>
                }
                {this.state.tabActive == 1 &&
                <Row>
                    <div className="col-12 col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <form action="" method="post" enctype="multipart/form-data" className="form-horizontal">
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="name-input" className="">Department Name*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="name-input" name="name-input" placeholder="Name" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Name is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="ShortCode-input" className="">Short Code*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="ShortCode-input" name="place-input" placeholder="Short Code" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Short Code is required</small>
                                        </div>
                                    </div>
                                    <div class="position-relative row form-group">
                                        <div class="col-md-3" style={{textAlign:"right"}}>
                                            <label class="">Type*</label>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="position-relative form-check form-check-inline">
                                                <input id="inline-radio1" name="inline-radios" type="radio" class="form-check-input form-check-input" value="option1"/>
                                                <label for="inline-radio1" class="form-check-label form-check-label">academic</label>
                                            </div>
                                            <div class="position-relative form-check form-check-inline">
                                                <input id="inline-radio2" name="inline-radios" type="radio" class="form-check-input form-check-input" value="option2"/>
                                                <label for="inline-radio2" class="form-check-label form-check-label">non-academic</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <Row>
                                    <Col lg="3">
                                    </Col>
                                    <Col lg="2">
                                        <Button block color="primary">Add Department</Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>
                }
            </div>
        );
    }
}

export default DepartmentDetails;

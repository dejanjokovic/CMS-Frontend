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

import { clDarkBlue } from '../../utils/colors'
import ScheduleCalendar from '../../components/generals/ScheduleCalendar';

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const EnqueryList = [
    {PhoneNumber:"9548789526", Name:"Devika.K R", Remarks:"982737289373", Purpose:"For check admission details", DateOfEnquiry:new Date().toISOString()},
    {PhoneNumber:"9548789526", Name:"Devika.K R", Remarks:"982737289373", Purpose:"For check admission details", DateOfEnquiry:new Date().toISOString()},
    {PhoneNumber:"9548789526", Name:"Devika.K R", Remarks:"982737289373", Purpose:"For check admission details", DateOfEnquiry:new Date().toISOString()},
    {PhoneNumber:"9548789526", Name:"Devika.K R", Remarks:"982737289373", Purpose:"For check admission details", DateOfEnquiry:new Date().toISOString()},
    {PhoneNumber:"9548789526", Name:"Devika.K R", Remarks:"982737289373", Purpose:"For check admission details", DateOfEnquiry:new Date().toISOString()},
]

class GeneralEnquery extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabActive:0,

            filterFromDate: null,
            filterToDate: null,

            enqueryList: EnqueryList,
        }
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    OnClickTabEnqueryList = () => this.setState({tabActive:0})
    OnClickTabAddGeneralEnquiry = () => this.setState({tabActive:1})

    OnClickButtonFilter = () => {
        console.log(this.state.filterToDate)
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <h2 style={{color:"grey"}}>Manage Enquiry</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <Row>
                    <Col xs="12" sm="12" lg="2" style={{textAlign:"right"}}>
                        <h6 style={{marginTop:4}}>Filter By Date:</h6>
                    </Col>
                    <Col xs="12" sm="12" lg="3">
                        <Row>
                            <Col lg="2" style={{textAlign:"right"}}>
                                <label for="date-input1"  style={{marginTop:4}}>From</label>
                            </Col>
                            <Col lg="10">
                                <input id="date-input1" name="date-input" placeholder="From Date" type="date" class="form-control" value={this.state.filterFromDate} onChange={(e) => this.setState({filterFromDate:e.target.value})}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" lg="3">
                        <Row>
                            <Col lg="2" style={{textAlign:"right"}}>
                                <label for="date-input2" style={{marginTop:4}}>To</label>
                            </Col>
                            <Col lg="10" >
                                <input id="date-input2" name="date-input" placeholder="To Date" type="date" class="form-control" value={this.state.filterToDate} onChange={(e) => this.setState({filterToDate:e.target.value})}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" lg="2">
                        <Button block color="primary" onClick={this.OnClickButtonFilter}>Filter</Button>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <Row>
                    <Col>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className={this.state.tabActive==0 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabEnqueryList}><i class="fa fa-align-justify"></i> General Enquiry List</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.tabActive==1 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabAddGeneralEnquiry}><i class="fa fa-plus-circle fa-lg"></i> Add General Enquiry</a>
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
                                                <th>Name</th>
                                                <th>Phone No</th>
                                                <th>Date Of Enquiry</th>
                                                <th>Purpose</th>
                                                <th>Remarks</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                            {
                                                this.state.enqueryList.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{item.Name}</td>
                                                        <td>{item.PhoneNumber}</td>
                                                        <td>{item.DateOfEnquiry}</td>
                                                        <td>{item.Purpose}</td>
                                                        <td>{item.Remarks}</td>
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
                                            <label for="name-input" className="">Name*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="name-input" name="name-input" placeholder="Name" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Name is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="phone-input" className="">Phone Number*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="phone-input" name="place-input" placeholder="Phone Number" type="tel" className="form-control"/>
                                            <small className="form-text text-muted">Phone number is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3" style={{textAlign:"right", marginTop:4}}>
                                            <label for="date-input" className="">Date And Time Of Enquiry*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="date-input" name="date-input" placeholder="date" type="date" className="form-control"/>
                                            <small className="help-block form-text text-muted">Date is required</small>
                                        </div>
                                    </div>

                                    <div className="position-relative row form-group">
                                        <div className="col-md-3" style={{textAlign:"right", marginTop:4}}>
                                            <label for="purpose-input" className="">Purpose</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="purpose-input" name="purpose-input" placeholder="Purpose" type="text" className="form-control"/>
                                            <small className="help-block form-text text-muted">Purpose is required</small>
                                        </div>
                                    </div>

                                    <div className="position-relative row form-group">
                                        <div className="col-md-3" style={{textAlign:"right", marginTop:4}}>
                                            <label for="Remarks-input" className="">Remarks</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="Remarks-input" name="Remarks-input" placeholder="Remarks" type="text" className="form-control"/>
                                            <small className="help-block form-text text-muted">Remarks is required</small>
                                        </div>
                                    </div>

                                </form>
                                <Row>
                                    <Col lg="3">
                                    </Col>
                                    <Col lg="2">
                                        <Button block color="primary">Add General Enquiry</Button>
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

export default GeneralEnquery;

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

const CalendarList = [
    {Programme:"Interesting candidates will participate the camp", ByTheDepartment:"Commerce and Management", Date:new Date().toISOString()},
    {Programme:"Independance", ByTheDepartment:"All", Date:new Date().toISOString()},
    {Programme:"Demo calendar", ByTheDepartment:"All", Date:new Date().toISOString()},
    {Programme:"calendar1", ByTheDepartment:"All", Date:new Date().toISOString()},
    {Programme:"calendar2", ByTheDepartment:"All", Date:new Date().toISOString()},
]

class CalendarPlanning extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabActive:0,

            filterFromDate: null,
            filterToDate: null,
            isOpenFilterDropdown: false,

            CalendarList: CalendarList,
            isOpenCalendarDropdown: false,
            DepartmentName: "Select All"
        }
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    toggleFilterDropdown(){this.setState({isOpenFilterDropdown:!this.state.isOpenFilterDropdown})}
    toggleCalendarDropdown(){this.setState({isOpenCalendarDropdown:!this.state.isOpenCalendarDropdown})}

    OnClickTabCalendarList = () => this.setState({tabActive:0})
    OnClickTabAddCalendarPlanning = () => this.setState({tabActive:1})

    OnClickButtonFilter = () => {
        console.log(this.state.filterToDate)
    }

    OnChangeDepartmentName(tv) {this.setState({DepartmentName:tv})}

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <h2 style={{color:"grey"}}>Manage Noticeboard</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <Row>
                    <Col xs="12" sm="12" lg="2">
                        <Dropdown isOpen={this.state.isOpenFilterDropdown} toggle={() => {this.toggleFilterDropdown()}}>
                            <DropdownToggle caret>
                                --Select One--
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Action 1</DropdownItem>
                                <DropdownItem>Another Action 1</DropdownItem>
                                <DropdownItem>Another Action 2</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
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
                                <a className={this.state.tabActive==0 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabCalendarList}><i class="fa fa-align-justify"></i> Calendar List</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.tabActive==1 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabAddCalendarPlanning}><i class="fa fa-plus-circle fa-lg"></i> Add Calendar Planning</a>
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
                                                <th>Date</th>
                                                <th>Programme</th>
                                                <th>By the department</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                            {
                                                this.state.CalendarList.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{item.Date}</td>
                                                        <td>{item.Programme}</td>
                                                        <td>{item.ByTheDepartment}</td>
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
                                            <label for="title-input" className="">Title*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="title-input" name="title-input" placeholder="Name" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Title is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="Notice-input" className="">Notice*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <textarea name="textarea-input" id="textarea-input" rows="9" placeholder="Notice..." class="form-control"></textarea>
                                            <small className="form-text text-muted">Notice is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3" style={{textAlign:"right", marginTop:4}}>
                                            <label for="date-input" className="">Date*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="date-input" name="date-input" placeholder="date" type="date" className="form-control"/>
                                            <small className="help-block form-text text-muted">Date is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="type-input" className="">Department Name*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <Dropdown isOpen={this.state.isOpenCalendarDropdown} toggle={() => {this.toggleCalendarDropdown()}}>
                                                <DropdownToggle caret>
                                                    {this.state.DepartmentName}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem onClick={() => this.OnChangeDepartmentName("Select All")}>Select All</DropdownItem>
                                                    <DropdownItem onClick={() => this.OnChangeDepartmentName("Commerce and Management")}>Commerce and Management</DropdownItem>
                                                    <DropdownItem onClick={() => this.OnChangeDepartmentName("English")}>English</DropdownItem>
                                                    <DropdownItem onClick={() => this.OnChangeDepartmentName("Administration")}>Administration</DropdownItem>
                                                    <DropdownItem onClick={() => this.OnChangeDepartmentName("Computer")}>Computer</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </form>
                                <Row>
                                    <Col lg="3">
                                    </Col>
                                    <Col lg="2">
                                        <Button block color="primary">Add Notice</Button>
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

export default CalendarPlanning;

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
  Input,
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

const RoutesList = [
    {Name:"Devika.K R"},
    {Name:"Devika.K R"},
    {Name:"Devika.K R"},
    {Name:"Devika.K R"},
    {Name:"Devika.K R"},
]
const RoutesReports = [
    {Year:2015, TotalMoneyEarned:1245},
    {Year:2015, TotalMoneyEarned:1245},
    {Year:2015, TotalMoneyEarned:1245},
    {Year:2015, TotalMoneyEarned:1245},
    {Year:2015, TotalMoneyEarned:1245},
]
class ManageSMS extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabActive:0,

            filterFromDate: null,
            filterToDate: null,

            RoutesList: RoutesList,
            RoutesReports: RoutesReports,

            dropdownOpen:[],
        }
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    OnClickTabStudent = () =>{
        this.setState({tabActive:0})
    }
    OnClickTabStaff = () =>{
        this.setState({tabActive:1})
    }
    OnClickTabGeneral = () =>{
        this.setState({tabActive:2})
    }
    OnClickButtonFilter = () => {
        console.log(this.state.filterToDate)
    }

    toggleOptions(i) {
        const newArray = this.state.dropdownOpen.map((element, index) => {
            return (index === i ? !element : false);
        });
        this.setState({
            dropdownOpen: newArray,
        });
    }
    
    componentDidMount(){
        this.setState({dropdownOpen:new Array(6).fill(false)})
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <h2 style={{color:"grey"}}>Send SMS</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <div style={{height:30}}></div>
                <Row>
                    <Col>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className={this.state.tabActive==0 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabStudent}><i class="fa fa-align-justify"></i> Student</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.tabActive==1 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabStaff}><i class="fa fa-plus-circle fa-lg"></i> Staff</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.tabActive==2 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabGeneral}><i class="fa fa-plus-circle fa-lg"></i> General</a>
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
                                                <th>Select Course</th>
                                                <th>Select Semester/Year</th>
                                                <th>Select Division</th>
                                                <th>Select Type</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <td>
                                                <select className="form-control">
                                                    <option>Course 1</option>
                                                    <option>Course 2</option>
                                                    <option>Course 3</option>
                                                    <option>Course 4</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select className="form-control">
                                                    <option>Semester 1</option>
                                                    <option>Semester 2</option>
                                                    <option>Semester 3</option>
                                                    <option>Semester 4</option>
                                                    <option>Semester 5</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select className="form-control">
                                                    <option>A</option>
                                                    <option>B</option>
                                                    <option>C</option>
                                                    <option>D</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select className="form-control">
                                                    <option>Type 1</option>
                                                    <option>Type 2</option>
                                                    <option>Type 3</option>
                                                    <option>Type 4</option>
                                                </select>
                                            </td>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <Row>
                            <div className="col-12 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <form action="" method="post" enctype="multipart/form-data" className="form-horizontal">
                                            <div className="position-relative row form-group">
                                                <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                                    <label for="name-input" className="">Message</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <input id="name-input" name="name-input" placeholder="" type="text" className="form-control"/>
                                                    {/* <small className="form-text text-muted">Name is required</small> */}
                                                </div>
                                            </div>
                                        </form>
                                        <Row>
                                            <Col lg="3">
                                            </Col>
                                            <Col lg="2">
                                                <Button block color="primary">Send SMS</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Row>

                    </div>
                </Row>
                }
                {this.state.tabActive == 1 &&
                <Row>
                <div className="col-12 col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Select Department</th>
                                            <th>Select Destination</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td>
                                            <select className="form-control">
                                                <option>Department 1</option>
                                                <option>Department 2</option>
                                                <option>Department 3</option>
                                                <option>Department 4</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="form-control">
                                                <option>Destination 1</option>
                                                <option>Destination 2</option>
                                                <option>Destination 3</option>
                                                <option>Destination 4</option>
                                                <option>Destination 5</option>
                                            </select>
                                        </td>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Row>
                        <div className="col-12 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <form action="" method="post" enctype="multipart/form-data" className="form-horizontal">
                                        <div className="position-relative row form-group">
                                            <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                                <label for="name-input" className="">Message</label>
                                            </div>
                                            <div className="col-12 col-md-5">
                                                <input id="name-input" name="name-input" placeholder="" type="text" className="form-control"/>
                                                {/* <small className="form-text text-muted">Name is required</small> */}
                                            </div>
                                        </div>
                                    </form>
                                    <Row>
                                        <Col lg="3">
                                        </Col>
                                        <Col lg="2">
                                            <Button block color="primary">Send SMS</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Row>

                </div>
            </Row>
                }
                {this.state.tabActive == 2 &&
                <Row>
                <div className="col-12 col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Enter Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td>
                                            <Input type="text"></Input>
                                        </td>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Row>
                        <div className="col-12 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <form action="" method="post" enctype="multipart/form-data" className="form-horizontal">
                                        <div className="position-relative row form-group">
                                            <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                                <label for="name-input" className="">Message</label>
                                            </div>
                                            <div className="col-12 col-md-5">
                                                <input id="name-input" name="name-input" placeholder="" type="text" className="form-control"/>
                                                {/* <small className="form-text text-muted">Name is required</small> */}
                                            </div>
                                        </div>
                                    </form>
                                    <Row>
                                        <Col lg="3">
                                        </Col>
                                        <Col lg="2">
                                            <Button block color="primary">Send SMS</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Row>

                </div>
            </Row>
            }
            </div>
        );
    }
}

export default ManageSMS;

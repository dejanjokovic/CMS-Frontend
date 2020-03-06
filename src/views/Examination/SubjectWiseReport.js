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
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

import { clDarkBlue } from '../../utils/colors'
import ScheduleCalendar from '../../components/generals/ScheduleCalendar';

const avatar = require("../../assets/avatar/1.png")
const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const DepartmentList = [
    "Commerce and Management",
    "English",
    "Computer",
    "Administration",
    "Social worker",
    "Psycology",
    "Arts"
]
const Data = [
    {RollNo:"1234", Name:"Sini S", ObtainedMark:75, Grade:"C", GradePoint:4},
    {RollNo:"1234", Name:"Sini S", ObtainedMark:75, Grade:"C", GradePoint:4},
]
class ClassWiseReport extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    componentDidMount(){
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    
    daysInMonth (month, year) { 
        return new Date(year, month, 0).getDate(); 
    } 

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <h2 style={{color:"grey"}}>Subject Wise Report</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <Row>
                    <div className="col-12 col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table" >
                                        <thead>
                                            <tr>
                                                <th>Select Department</th>
                                                <th>Select Course</th>
                                                <th>Select Semester</th>
                                                <th>Select Subject</th>
                                                <th>Select Year</th>
                                                <th>Select Division</th>
                                                <th>Select Exam</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <td>
                                                <FormGroup row>
                                                    <Col>
                                                        <select className="form-control">
                                                            <option>Department 1</option>
                                                            <option>Department 2</option>
                                                            <option>Department 3</option>
                                                            <option>Department 4</option>
                                                            <option>Department 5</option>
                                                        </select>
                                                    </Col>
                                                </FormGroup>
                                            </td>
                                            <td>
                                                <FormGroup row>
                                                    <Col>
                                                        <select className="form-control">
                                                            <option>Course 1</option>
                                                            <option>Course 2</option>
                                                            <option>Course 3</option>
                                                            <option>Course 4</option>
                                                            <option>Course 5</option>
                                                        </select>
                                                    </Col>
                                                </FormGroup>
                                            </td>
                                            <td>
                                                <FormGroup row>
                                                    <Col>
                                                        <select className="form-control">
                                                            <option>Semister 1</option>
                                                            <option>Semister 2</option>
                                                            <option>Semister 3</option>
                                                            <option>Semister 4</option>
                                                            <option>Semister 5</option>
                                                        </select>
                                                    </Col>
                                                </FormGroup>
                                            </td>
                                            <td>
                                                <FormGroup row>
                                                    <Col>
                                                        <select className="form-control">
                                                            <option>Subject 1</option>
                                                            <option>Subject 2</option>
                                                            <option>Subject 3</option>
                                                            <option>Subject 4</option>
                                                            <option>Subject 5</option>
                                                        </select>
                                                    </Col>
                                                </FormGroup>
                                            </td>
                                            <td>
                                                <FormGroup row>
                                                    <Col>
                                                        <select className="form-control">
                                                            <option>2021</option>
                                                            <option>2022</option>
                                                            <option>2023</option>
                                                            <option>2024</option>
                                                            <option>2025</option>
                                                        </select>
                                                    </Col>
                                                </FormGroup>
                                            </td>
                                            <td>
                                                <FormGroup row>
                                                    <Col>
                                                        <select className="form-control">
                                                            <option>Division 1</option>
                                                            <option>Division 2</option>
                                                            <option>Division 3</option>
                                                            <option>Division 4</option>
                                                            <option>Division 5</option>
                                                        </select>
                                                    </Col>
                                                </FormGroup>
                                            </td>
                                            <td>
                                                <FormGroup row>
                                                    <Col>
                                                        <select className="form-control">
                                                            <option>Exam 1</option>
                                                            <option>Exam 2</option>
                                                            <option>Exam 3</option>
                                                            <option>Exam 4</option>
                                                            <option>Exam 5</option>
                                                        </select>
                                                    </Col>
                                                </FormGroup>
                                            </td>
                                            <td>
                                                <Button block color="primary" onClick={this.OnClickButtonFilter}>Search</Button>
                                            </td>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                <div style={{height:30}}></div>
                <div>
                    <div style={{height:30}}></div>
                    <Row>
                        <Col>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Roll No</th>
                                        <th>Name</th>
                                        <th>Obtained Mark</th>
                                        <th>Grade Point</th>
                                        <th>Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Data.map((item, index) => (
                                            <tr>
                                                <td>{item.RollNo}</td>
                                                <td>{item.Name}</td>
                                                <td>{item.ObtainedMark}</td>
                                                <td>{item.GradePoint}</td>
                                                <td>{item.Grade}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ClassWiseReport;

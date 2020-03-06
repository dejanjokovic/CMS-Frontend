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
    {SubjectName:"Sini S", MaxMarkAndGrade:"Asst Prof", ObtainedMark:75, Grade:"C", Status:"Passed"},
    {SubjectName:"Sini S", MaxMarkAndGrade:"Asst Prof", ObtainedMark:75, Grade:"C", Status:"Passed"},
]
class StudentInternalReport extends Component {
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
                        <h2 style={{color:"grey"}}>Student Internal Mark Report</h2>
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
                                                <th>Student Code</th>
                                                <th>Select Semester</th>
                                                <th>Select Year</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <td>
                                                <FormGroup row>
                                                    <Col>
                                                        <Input type="text" name="code" id="code" />
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
                    <Row><Col xs="2"></Col><Col xs="2"><img src={avatar} width="200" height="200"/></Col></Row>
                    <div style={{height:30}}></div>
                    <Row>
                        <Col xs="1"></Col>
                        <Col>
                            <Card>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Subject Name</th>
                                            <th>Max Mark And Grade</th>
                                            <th>Obtained Mark</th>
                                            <th>Grade</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>English</td>
                                            <td>100</td>
                                            <td>65</td>
                                            <td>C</td>
                                            <td>Passed</td>
                                        </tr>
                                        <tr>
                                            <td>English</td>
                                            <td>100</td>
                                            <td>65</td>
                                            <td>C</td>
                                            <td>Passed</td>
                                        </tr>
                                        <tr>
                                            <td>English</td>
                                            <td>100</td>
                                            <td>65</td>
                                            <td>C</td>
                                            <td>Passed</td>
                                        </tr>
                                        <tr>
                                            <td>English</td>
                                            <td>100</td>
                                            <td>65</td>
                                            <td>C</td>
                                            <td>Passed</td>
                                        </tr>
                                        <tr>
                                            <td>English</td>
                                            <td>100</td>
                                            <td>65</td>
                                            <td>C</td>
                                            <td>Passed</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </Col>
                        <Col xs="3"></Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default StudentInternalReport;

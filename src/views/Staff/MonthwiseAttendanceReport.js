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
    {Name:"Sini S", Designation:"Asst Prof", Report:["","","","","","P","CL","","P","","","","","","","","","","","","","","","","","","","","","","", ], TotalWorkingDays:3},
    {Name:"Sini S", Designation:"Asst Prof", Report:["","","","","","P","CL","","P","","","","","","","","","","","","","","","","","","","","","","", ], TotalWorkingDays:3},
]
class MonthwiseAttendanceReport extends Component {
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
                        <h2 style={{color:"grey"}}>Staff Monthly Attendance Report</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <Row>
                    <Col xs="4">
                        <FormGroup>
                        <Label htmlFor="ccmonth">Select Department</Label>
                        <Input type="select" name="ccmonth" id="ccmonth">
                            <option value="Commerce and Management">Commerce and Management</option>
                            <option value="English">English</option>
                            <option value="Computer">Computer</option>
                            <option value="Social worker">Social worker</option>
                            <option value="Psycology">Psycology</option>
                            <option value="Arts">Arts</option>
                        </Input>
                        </FormGroup>
                    </Col>
                    <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Select Month</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="1">January</option>
                        <option value="2">Febrary</option>
                        <option value="3">March</option>
                        <option value="4">Aprill</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="ccyear">Select Year</Label>
                      <Input type="select" name="ccyear" id="ccyear">
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="cvv">-</Label>
                      <Button block color="primary">Generate Report</Button>
                    </FormGroup>
                  </Col>
                </Row>
                <div style={{padding:30, textAlign:"center"}}>
                    <Row className="text-center"><Col><h6>English</h6></Col></Row>
                    <Row className="text-center"><Col><h5>Staff Monthly Attendance Report 08-2015</h5></Col></Row>
                    <Row className="text-center"><Col>2-25-2020</Col></Row>
                </div>
                <Row>
                <div className="col-12 col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Designation</th>
                                            {
                                                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((item, index) =>{
                                                    return(
                                                        <th>{item}</th>
                                                    )
                                                })
                                            }
                                            <th>Total Working Days</th>
                                        </thead>
                                        <tbody>
                                            {
                                                Data.map((item, index) => {
                                                    return(
                                                    <tr>
                                                        <td>{index+1}</td>
                                                        <td>{item.Name}</td>
                                                        <td>{item.Designation}</td>
                                                        {
                                                            item.Report.map((item1, index1) => {
                                                                return(
                                                                <td>{item1}</td>
                                                                )
                                                            })
                                                        }
                                                        <td>{item.TotalWorkingDays}</td>
                                                    </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        );
    }
}

export default MonthwiseAttendanceReport;

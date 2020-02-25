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
    {Name:"Sini S", Designation:"Asst Prof", Report:["","","","","","P","CL","","P","","","","","","","","","","","","","","","","","","","","","","", ], TotalWorkingDays:3},
    {Name:"Sini S", Designation:"Asst Prof", Report:["","","","","","P","CL","","P","","","","","","","","","","","","","","","","","","","","","","", ], TotalWorkingDays:3},
]
class StaffRelieving extends Component {
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
                        <h2 style={{color:"grey"}}>Staff Relieving</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <Row>
                    <Col xs="4">
                        <FormGroup>
                        <Label htmlFor="ccstaffcode">Staff Code</Label>
                        <Input type="text" name="ccstaffcode" id="ccstaffcode">
                        </Input>
                        </FormGroup>
                    </Col>
                    <Col xs="2">
                        <FormGroup>
                        <Label>-</Label>
                        <Button block color="primary">Search</Button>
                        </FormGroup>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <div>
                    <Row><Col xs="2"></Col><Col xs="2"><img src={avatar} width="200" height="200"/></Col></Row>
                    <div style={{height:30}}></div>
                    <Row>
                        <Col xs="1"></Col>
                        <Col>
                            <Table responsive>
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>Sujith P V</td>
                                    </tr>
                                    <tr>
                                        <td>Job Type</td>
                                        <td>non_academic</td>
                                    </tr>
                                    <tr>
                                        <td>Department</td>
                                        <td>Administration</td>
                                    </tr>
                                    <tr>
                                        <td>Designation</td>
                                        <td>System Administrator</td>
                                    </tr>
                                    <tr>
                                        <td>Date of joining</td>
                                        <td>07/03//2019</td>
                                    </tr>
                                    <tr>
                                        <td>Date of leaving</td>
                                        <td><Input type="date" id="date-input" name="date-input" placeholder="date" /></td>
                                    </tr>
                                    <tr>
                                        <td>Reason for leaving</td>
                                        <td><Input type="text" id="reasonforleaving-input" name="reasonforleaving-input" placeholder="" /></td>
                                    </tr>
                                    <tr>
                                        <td>Contact No</td>
                                        <td>+919809158308</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><Button block color="primary">GENERATE</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col xs="3"></Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default StaffRelieving;

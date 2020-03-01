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

const StaffAttendanceList = [
    {Code:"14ENG002", Name:"Devika.K R", FNStatus:"", ANStatus:"", ReasonForLeave:"", LeaveStatus:""},
    {Code:"14ENG002", Name:"Devika.K R", FNStatus:"", ANStatus:"", ReasonForLeave:"", LeaveStatus:""},
    {Code:"14ENG002", Name:"Devika.K R", FNStatus:"", ANStatus:"", ReasonForLeave:"", LeaveStatus:""},
    {Code:"14ENG002", Name:"Devika.K R", FNStatus:"", ANStatus:"", ReasonForLeave:"", LeaveStatus:""},
    {Code:"14ENG002", Name:"Devika.K R", FNStatus:"", ANStatus:"", ReasonForLeave:"", LeaveStatus:""},
]
const CourseList = [
    "Commerce and Management",
    "English",
    "Computer",
    "Administration",
    "Social worker",
    "Psycology",
    "Arts"
]
const FNStatusList = [
    "Present",
    "Absent", 
]
const ANStatusList = [
    "Present",
    "Absent", 
]
const LeaveStatusList=[
    "Select", 
    "Casual", 
    "Onduty", 
]

class ManageStudentPromotion extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabActive:0,

            filterDate: null,
            isOpenFilterDropdown: false,
            Course:"Select Course",
            CourseList,

            FNStatusList,
            FNStatus:[],
            isOpenFNStatusDropdown:[],

            ANStatusList,
            ANStatus:[],
            isOpenANStatusDropdown:[],

            LeaveStatusList,
            LeaveStatus:[],
            isOpenLeaveStatusList:[],

            StaffAttendanceList,
        }
    }

    componentDidMount(){
        this.setState({CourseList, FNStatusList, ANStatusList, LeaveStatusList, StaffAttendanceList})
        for(var i = 0 ; i < StaffAttendanceList.length ; i ++){
            this.state.FNStatus.push("Present")
            this.state.ANStatus.push("Present")
            this.state.LeaveStatus.push("Select")
        }
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    toggleFilterDropdown(){this.setState({isOpenFilterDropdown:!this.state.isOpenFilterDropdown})}
    toggleFNStatusDropdown(idx){this.state.isOpenFNStatusDropdown[idx]=!this.state.isOpenFNStatusDropdown[idx];this.setState({isOpenFNStatusDropdown:this.state.isOpenFNStatusDropdown})}
    toggleANStatusDropdown(idx){this.state.isOpenANStatusDropdown[idx]=!this.state.isOpenANStatusDropdown[idx];this.setState({isOpenANStatusDropdown:this.state.isOpenANStatusDropdown})}
    toggleLeaveStatusDropdown(idx){this.state.isOpenLeaveStatusList[idx]=!this.state.isOpenLeaveStatusList[idx];this.setState({isOpenLeaveStatusList:this.state.isOpenLeaveStatusList})}

    OnClickButtonFilter = () => {
    }

    OnChangeCourse(value) {this.setState({Course:value})}
    OnChangeFNStatus(idx, value) {this.state.FNStatus[idx]=value;this.setState({FNStatus:this.state.FNStatus})}
    OnChangeANStatus(idx, value) {this.state.ANStatus[idx]=value;this.setState({ANStatus:this.state.ANStatus})}
    OnChangeLeaveStatus(idx, value) {this.state.LeaveStatus[idx]=value;this.setState({LeaveStatus:this.state.LeaveStatus})}

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <h2 style={{color:"grey"}}>Manage Daily Staff Attendance</h2>
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
                                                <th>Select Course</th>
                                                <th>Select Semister/Year</th>
                                                <th>Select Division</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <td>
                                                <FormGroup row>
                                                    <Col>
                                                        <Input type="select" name="selectcourse" id="selectcourse" onChange={(e)=>this.OnChangeCourse(e.target.value)}>
                                                            {
                                                                this.state.CourseList.map((item, index) => {
                                                                    return(
                                                                        <option value={index}>{item}</option>
                                                                    )
                                                                })
                                                            }
                                                        </Input>
                                                    </Col>
                                                </FormGroup>
                                            </td>
                                            <td>
                                                <FormGroup row>
                                                    <Col>
                                                        <Input type="select" name="selectsemister" id="selectsemister">
                                                            <option value={0}>Semister-1</option>
                                                            <option value={0}>Semister-2</option>
                                                            <option value={0}>Semister-3</option>
                                                            <option value={0}>Semister-4</option>
                                                        </Input>
                                                    </Col>
                                                </FormGroup>
                                            </td>
                                            <td>
                                                <FormGroup row>
                                                    <Col>
                                                        <Input type="select" name="selectdivision" id="selectdivision">
                                                            <option value={0}>A</option>
                                                            <option value={0}>B</option>
                                                            <option value={0}>C</option>
                                                            <option value={0}>D</option>
                                                        </Input>
                                                    </Col>
                                                </FormGroup>
                                            </td>
                                            <td>
                                                <Button block color="primary" onClick={this.OnClickButtonFilter}>Manage Staff Attendance</Button>
                                            </td>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                <div style={{padding:30, textAlign:"center"}}>
                    <Row className="text-center"><Col><h5>Promotion of Course English</h5></Col></Row>
                    <Row className="text-center"><Col>2-25-2020</Col></Row>
                </div>
                <Row>
                    <div className="col-12 col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Roll</th>
                                                <th>Name</th>
                                                <th>FN Status</th>
                                                <th>AN Status</th>
                                                <th>Reason For Leave</th>
                                                <th>Leave Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                            {
                                                this.state.StaffAttendanceList.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{item.Name}</td>
                                                        <td>
                                                            <Dropdown isOpen={this.state.isOpenFNStatusDropdown[index]} toggle={() => {this.toggleFNStatusDropdown(index)}}>
                                                                <DropdownToggle caret style={{width:"100%", textAlign:"right"}}>
                                                                    {this.state.FNStatus[index]}
                                                                </DropdownToggle>
                                                                <DropdownMenu>
                                                                {
                                                                    this.state.FNStatusList.map((item1, index1) => {
                                                                        return (
                                                                            <DropdownItem key={index1} onClick={()=>this.OnChangeFNStatus(index, item1)}>
                                                                                {item1}
                                                                            </DropdownItem>
                                                                        )
                                                                    })
                                                                }
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </td>
                                                        <td>
                                                            <Dropdown isOpen={this.state.isOpenANStatusDropdown[index]} toggle={() => {this.toggleANStatusDropdown(index)}}>
                                                                <DropdownToggle caret style={{width:"100%", textAlign:"right"}}>
                                                                    {this.state.ANStatus[index]}
                                                                </DropdownToggle>
                                                                <DropdownMenu>
                                                                {
                                                                    this.state.ANStatusList.map((item1, index1) => {
                                                                        return (
                                                                            <DropdownItem key={index1} onClick={()=>this.OnChangeANStatus(index, item1)}>
                                                                                {item1}
                                                                            </DropdownItem>
                                                                        )
                                                                    })
                                                                }
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </td>
                                                        <td>
                                                            <input id="reasonforleave" name="reasonforleave" type="text"/>
                                                        </td>
                                                        <td>
                                                            <Dropdown isOpen={this.state.isOpenLeaveStatusList[index]} toggle={() => {this.toggleLeaveStatusDropdown(index)}}>
                                                                <DropdownToggle caret style={{width:"100%", textAlign:"right"}}>
                                                                    {this.state.LeaveStatus[index]}
                                                                </DropdownToggle>
                                                                <DropdownMenu>
                                                                {
                                                                    this.state.LeaveStatusList.map((item1, index1) => {
                                                                        return (
                                                                            <DropdownItem key={index1} onClick={()=>this.OnChangeLeaveStatus(index, item1)}>
                                                                                {item1}
                                                                            </DropdownItem>
                                                                        )
                                                                    })
                                                                }
                                                                </DropdownMenu>
                                                            </Dropdown></td>
                                                        <td>
                                                            <Button block>Save</Button>
                                                        </td>
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
            </div>
        );
    }
}

export default ManageStudentPromotion;

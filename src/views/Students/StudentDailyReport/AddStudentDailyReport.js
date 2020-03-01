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

import { clDarkBlue } from '../../../utils/colors'
import ScheduleCalendar from '../../../components/generals/ScheduleCalendar';

const Widget03 = lazy(() => import('../../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const StudentList = [
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

class AddStudentDailyReport extends Component {
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

            StudentList,
        }
    }

    componentDidMount(){
        this.setState({CourseList, FNStatusList, ANStatusList, LeaveStatusList, StudentList})
        for(var i = 0 ; i < StudentList.length ; i ++){
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
                        <h2 style={{color:"grey"}}>Student Daily Report</h2>
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
                                                <th>Select Date</th>
                                                <th>Code</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <td>
                                                <input id="date-input1" name="date-input" placeholder="From Date" type="date" class="form-control" value={this.state.filterDate} onChange={(e) => this.setState({filterDate:e.target.value})}/>
                                            </td>
                                            <td>
                                                <Input type="text" class="form-control"></Input>
                                            </td>
                                            <td>
                                                <Button block color="primary" onClick={this.OnClickButtonFilter}>Manage Daily Report</Button>
                                            </td>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                <div style={{padding:30, textAlign:"center"}}>
                    <Row className="text-center"><Col><h6>Saturday</h6></Col></Row>
                    <Row className="text-center"><Col><h5>Attendance of Course English</h5></Col></Row>
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
                                                <th>Extra Activities</th>
                                                <th>Remarks</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                            {
                                                this.state.StudentList.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{item.Name}</td>
                                                        <td>
                                                            <input id="reasonforleave" name="reasonforleave" type="text" class="form-control"/>
                                                        </td>
                                                        <td>
                                                            <input id="reasonforleave" name="reasonforleave" type="text" class="form-control"/>
                                                        </td>
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

export default AddStudentDailyReport;

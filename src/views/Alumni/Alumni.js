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
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

import { clDarkBlue } from '../../utils/colors'
import ScheduleCalendar from '../../components/generals/ScheduleCalendar';
import UploadPreview from '../../components/generals/UploadPreview';
const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const staffList = [
    {Code:"12ADM800", Photo:"assets/img/avatars/1.jpg", Name:"Devika.K R", Designation:"982737289373", Department:"For check admission details", Mobile1:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", DateOfJoining:new Date().toISOString()},
    {Code:"12ADM800", Photo:"assets/img/avatars/2.jpg", Name:"Devika.K R", Designation:"982737289373", Department:"For check admission details", Mobile1:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", DateOfJoining:new Date().toISOString()},
    {Code:"12ADM800", Photo:"assets/img/avatars/3.jpg", Name:"Devika.K R", Designation:"982737289373", Department:"For check admission details", Mobile1:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", DateOfJoining:new Date().toISOString()},
    {Code:"12ADM800", Photo:"assets/img/avatars/4.jpg", Name:"Devika.K R", Designation:"982737289373", Department:"For check admission details", Mobile1:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", DateOfJoining:new Date().toISOString()},
    {Code:"12ADM800", Photo:"assets/img/avatars/5.jpg", Name:"Devika.K R", Designation:"982737289373", Department:"For check admission details", Mobile1:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", DateOfJoining:new Date().toISOString()},
    {Code:"12ADM800", Photo:"assets/img/avatars/6.jpg", Name:"Devika.K R", Designation:"982737289373", Department:"For check admission details", Mobile1:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", DateOfJoining:new Date().toISOString()},
    {Code:"12ADM800", Photo:"assets/img/avatars/7.jpg", Name:"Devika.K R", Designation:"982737289373", Department:"For check admission details", Mobile1:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", DateOfJoining:new Date().toISOString()},
    {Code:"12ADM800", Photo:"assets/img/avatars/8.jpg", Name:"Devika.K R", Designation:"982737289373", Department:"For check admission details", Mobile1:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", DateOfJoining:new Date().toISOString()},
    {Code:"12ADM800", Photo:"assets/img/avatars/2.jpg", Name:"Devika.K R", Designation:"982737289373", Department:"For check admission details", Mobile1:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", DateOfJoining:new Date().toISOString()},
]

const DepartmentList = [
    "Commerce and Management",
    "English",
    "Computer",
    "Administration",
    "Social worker",
    "Psycology",
    "Arts"
]

const GenderList = [
    "Male",
    "Female"
]

const JobTypeList = [
    "Job1",
    "Job2",
    "Job3",
]

const ActionsList = [
    {name:"Edit", icon:"fa fa-edit fa-lg"},
    {name:"Delete", icon:"fa fa-trash fa-lg"}
]

class Alumni extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabActive:0,
            isOpenFilterDropdown: false,
            filterDepartmentValue: "Select",

            staffList,
            isOpenDepartmentDropdown: false,
            Department:"Select",
            DepartmentList: DepartmentList,

            GenderList,
            isOpenGenderDropdown:false,
            Gender:"Male",

            JobTypeList,
            isOpenJobTypeDropdown:false,
            JobType:"Select",

            ActionsList,
            Action:"Action",
            isOpenActionDropdown:[],

            editModal:false,

            Avatar: null,
        }
    }

    componentDidMount(){
        this.setState({staffList, GenderList, JobTypeList, ActionsList})
        this.InitActionDropdown()
        console.log(this.state.isOpenActionDropdown)
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    toggleFilterDropdown(){this.setState({isOpenFilterDropdown:!this.state.isOpenFilterDropdown})}
    toggleDepartmentDropdown(){this.setState({isOpenDepartmentDropdown:!this.state.isOpenDepartmentDropdown})}
    toggleGenderDropdown(){this.setState({isOpenGenderDropdown:!this.state.isOpenGenderDropdown})}
    toggleJobTypeDropdown(){this.setState({isOpenJobTypeDropdown:!this.state.isOpenJobTypeDropdown})}

    toggleActionDropdown(idx){
        this.state.isOpenActionDropdown[idx] = !this.state.isOpenActionDropdown[idx]
        this.setState({isOpenActionDropdown:this.state.isOpenActionDropdown})
    }
    toggleEditModal = () => {this.setState({editModal:false})}
    InitActionDropdown(){
        for(var i = 0 ; i < this.state.staffList.length ; i++)
            this.state.isOpenActionDropdown.push(false);    
        this.setState({isOpenActionDropdown:this.state.isOpenActionDropdown})
    }
    OnChangeAction(index, value){
        if(value == "Edit"){
            this.setState({editModal:true})
        }else if (value == "Delete"){
        }
    }

    OnClickTabStaffList = () => this.setState({tabActive:0})
    OnClickTabAddStaff = () => this.setState({tabActive:1})

    OnClickButtonFilter = () => {
    }

    OnChangeDeparment(tv) {this.setState({Department:tv})}
    OnChangeFilterParameter(key, value){this.setState({[key]:value})}
    OnChangeGender(value) {this.setState({Gender:value})}
    OnChangeJobType(value) {this.setState({JobType:value})}

    OnChangeAvatar(event) {
        console.log(URL.createObjectURL(event.target.files[0]))
        //this.setState({Avatar: URL.createObjectURL(event.target.files[0])})
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <h2 style={{color:"grey"}}>Alumni</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <div style={{height:30}}></div>
                <Row>
                    <div className="col-12 col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Code</th>
                                                <th>Photo</th>
                                                <th>Name</th>
                                                <th>Designation</th>
                                                <th>Department</th>
                                                <th>Mobile</th>
                                                <th>Address</th>
                                                <th>Date of joining</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                            {
                                                this.state.staffList.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{item.Code}</td>
                                                        <td className="text-center">
                                                            <div className="avatar">
                                                                <img src={item.Photo} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                                                <span className="avatar-status badge-success"></span>
                                                            </div>
                                                        </td>
                                                        <td>{item.Name}</td>
                                                        <td>{item.Designation}</td>
                                                        <td>{item.Department}</td>
                                                        <td>{item.Mobile1}</td>
                                                        <td>{item.Address}</td>
                                                        <td>{item.DateOfJoining}</td>
                                                        <td>
                                                            <Dropdown isOpen={this.state.isOpenActionDropdown[index]} toggle={() => {this.toggleActionDropdown(index)}}>
                                                                <DropdownToggle caret>
                                                                    Action
                                                                </DropdownToggle>
                                                                <DropdownMenu>
                                                                {
                                                                    this.state.ActionsList.map((item1, index1) => {
                                                                        return (
                                                                            <DropdownItem key={index1} onClick={()=>this.OnChangeAction(index, item1.name)}>
                                                                                <span><i className={item1.icon}></i></span>
                                                                                {item1.name}
                                                                            </DropdownItem>
                                                                        )
                                                                    })
                                                                }
                                                                </DropdownMenu>
                                                            </Dropdown>
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

export default Alumni;

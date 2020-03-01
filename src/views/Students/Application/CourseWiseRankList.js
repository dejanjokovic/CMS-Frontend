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

import { clDarkBlue } from '../../../utils/colors'
import UploadPreview from '../../../components/generals/UploadPreview';
const Widget03 = lazy(() => import('../../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const StudentList = [
    {Rank:"Male", Name:"Devika.K R", ApplicationNumber:"982737289373"},
    {Rank:"Male", Name:"Devika.K R", ApplicationNumber:"982737289373"},
    {Rank:"Male", Name:"Devika.K R", ApplicationNumber:"982737289373"},
    {Rank:"Male", Name:"Devika.K R", ApplicationNumber:"982737289373"},
    {Rank:"Male", Name:"Devika.K R", ApplicationNumber:"982737289373"},
    {Rank:"Male", Name:"Devika.K R", ApplicationNumber:"982737289373"},
    {Rank:"Male", Name:"Devika.K R", ApplicationNumber:"982737289373"},
    {Rank:"Male", Name:"Devika.K R", ApplicationNumber:"982737289373"},
    {Rank:"Male", Name:"Devika.K R", ApplicationNumber:"982737289373"},
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

const CourseList = [
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
    {name:"Profile", icon:"fa fa-user-o fa-lg"},
    {name:"Admit", icon:"fa fa-plus fa-lg"}
]

class CourseWiseRankList extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabActive:0,
            isOpenFilterDropdown: false,
            filterDepartmentValue: "Select",

            StudentList,
            isOpenDepartmentDropdown: false,
            Department:"Select",
            DepartmentList: DepartmentList,
            CourseList:CourseList,

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
        this.setState({StudentList, GenderList, JobTypeList, ActionsList, CourseList})
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
        for(var i = 0 ; i < this.state.StudentList.length ; i++)
            this.state.isOpenActionDropdown.push(false);    
        this.setState({isOpenActionDropdown:this.state.isOpenActionDropdown})
    }
    OnChangeAction(index, value){
        if(value == "Edit"){
            this.setState({editModal:true})
        }else if (value == "Delete"){
        }
    }

    OnClickTabStudentList = () => this.setState({tabActive:0})
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
                        <h2 style={{color:"grey"}}>Student Details</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <Row>
                    <Col xs="12" sm="12" lg="2">Select Course</Col>
                    <Col xs="12" sm="12" lg="4">
                        <Dropdown isOpen={this.state.isOpenFilterDropdown} toggle={() => {this.toggleFilterDropdown()}}>
                            <DropdownToggle caret style={{width:"100%"}}>
                                {this.state.filterDepartmentValue}
                            </DropdownToggle>
                            <DropdownMenu>
                                {
                                    this.state.CourseList.map((item, index) => {
                                        return (
                                            <DropdownItem key={index} onClick={()=>this.OnChangeFilterParameter("filterDepartmentValue", item)}>{item}</DropdownItem>
                                        )
                                    })
                                }
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col xs="12" sm="12" lg="2">
                        <Button block color="primary" onClick={this.OnClickButtonFilter}>Filter</Button>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <Row>
                    <div className="col-12 col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Rank</th>
                                                <th>Application Number </th>
                                                <th>Name</th>
                                                <th>Indexed Mark</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.StudentList.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{item.Rank}</td>
                                                        <td>{item.ApplicationNumber}</td>
                                                        <td>{item.Name}</td>
                                                        <td>{item.Mobile}</td>
                                                    </tr>
                                                    )
                                                })
                                            }
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
                <Modal isOpen={this.state.editModal} toggle={this.toggleEditModal} className={'modal-lg ' + this.props.className}>
                    <ModalHeader toggle={this.toggleEditModal}>Edit Staff</ModalHeader>
                    <ModalBody>
                        <Row>
                            <div className="col-12 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <form action="" method="post" enctype="multipart/form-data" className="form-horizontal">
                                            <div className="position-relative row form-group">
                                                <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                                    <label for="name-input" className="">Employee Name*</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <input id="name-input" name="name-input" placeholder="Name" type="text" className="form-control"/>
                                                    <small className="form-text text-muted">Employee Name is required</small>
                                                </div>
                                            </div>
                                            <div className="position-relative row form-group">
                                                <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                                    <label for="type-input" className="">Gender*</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <Dropdown isOpen={this.state.isOpenGenderDropdown} toggle={() => {this.toggleGenderDropdown()}}>
                                                        <DropdownToggle caret>
                                                            {this.state.Gender}
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            {
                                                                this.state.GenderList.map((item, index) => {
                                                                    return (
                                                                        <DropdownItem key={index} onClick={()=>this.OnChangeGender(item)}>{item}</DropdownItem>
                                                                    )
                                                                })
                                                            }
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div className="position-relative row form-group">
                                                <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                                    <label for="address-input" className="">Address*</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <input id="address-input" name="place-input" placeholder="Address" type="text" className="form-control"/>
                                                    <small className="form-text text-muted">Address is required</small>
                                                </div>
                                            </div>
                                            <div className="position-relative row form-group">
                                                <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                                    <label for="PostalCode-input" className="">Postal Code*</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <input id="PostalCode-input" name="place-input" placeholder="Postal Code" type="text" className="form-control"/>
                                                    <small className="form-text text-muted">Postal Code is required</small>
                                                </div>
                                            </div>
                                            <div className="position-relative row form-group">
                                                <div className="col-md-3" style={{textAlign:"right", marginTop:4}}>
                                                    <label for="DateOfBirth-input" className="">Date Of Birth*</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <input id="DateOfBirth-input" name="DateOfBirth-input" placeholder="Date Of Birth" type="date" className="form-control"/>
                                                    <small className="help-block form-text text-muted">Date Of Birth is required</small>
                                                </div>
                                            </div>
                                            <div className="position-relative row form-group">
                                                <div className="col-md-3" style={{textAlign:"right", marginTop:4}}>
                                                    <label for="email-input" className="">Email Id</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <input id="email-input" name="email-input" placeholder="Email" type="email" className="form-control"/>
                                                    <small className="help-block form-text text-muted">Email is required</small>
                                                </div>
                                            </div>

                                            <div className="position-relative row form-group">
                                                <div className="col-md-3" style={{textAlign:"right", marginTop:4}}>
                                                    <label for="email-input" className="">Photo</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <UploadPreview></UploadPreview>
                                                </div>
                                            </div>
                                            <div className="position-relative row form-group">
                                                <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                                    <label className="">Job Type*</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <Dropdown isOpen={this.state.isOpenJobTypeDropdown} toggle={() => {this.toggleJobTypeDropdown()}}>
                                                        <DropdownToggle caret>
                                                            {this.state.JobType}
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            {
                                                                this.state.JobTypeList.map((item, index) => {
                                                                    return (
                                                                        <DropdownItem key={index} onClick={()=>this.OnChangeJobType(item)}>{item}</DropdownItem>
                                                                    )
                                                                })
                                                            }
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </div>

                                            <div className="position-relative row form-group">
                                                <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                                    <label for="type-input" className="">Department*</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <Dropdown isOpen={this.state.isOpenDepartmentDropdown} toggle={() => {this.toggleDepartmentDropdown()}}>
                                                        <DropdownToggle caret>
                                                            {this.state.Department}
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            {
                                                                this.state.DepartmentList.map((item, index) => {
                                                                    return (
                                                                        <DropdownItem key={index} onClick={()=>this.OnChangeDeparment(item)}>{item}</DropdownItem>
                                                                    )
                                                                })
                                                            }
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div className="position-relative row form-group">
                                                <div className="col-md-3" style={{textAlign:"right", marginTop:4}}>
                                                    <label for="Designation-input" className="">Designation</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <input id="Designation-input" name="Designation-input" placeholder="Designation" type="text" className="form-control"/>
                                                    <small className="help-block form-text text-muted">Designation is required</small>
                                                </div>
                                            </div>

                                            <div className="position-relative row form-group">
                                                <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                                    <label for="phone1-input" className="">Mobile1 Number1*</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <input id="phone1-input" name="place-input" placeholder="Phone Number" type="tel" className="form-control"/>
                                                    <small className="form-text text-muted">Phone number1 is required</small>
                                                </div>
                                            </div>

                                            <div className="position-relative row form-group">
                                                <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                                    <label for="phone2-input" className="">Mobile1 Number2</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <input id="phone2-input" name="place-input" placeholder="Phone Number" type="tel" className="form-control"/>
                                                    {/* <small className="form-text text-muted">Phone number1 is required</small> */}
                                                </div>
                                            </div>

                                            <div className="position-relative row form-group">
                                                <div className="col-md-3" style={{textAlign:"right", marginTop:4}}>
                                                    <label for="Nationality-input" className="">Nationality*</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <input id="Nationality-input" name="Nationality-input" placeholder="Nationality" type="text" className="form-control"/>
                                                    <small className="help-block form-text text-muted">Nationality is required</small>
                                                </div>
                                            </div>

                                            <div className="position-relative row form-group">
                                                <div className="col-md-3" style={{textAlign:"right", marginTop:4}}>
                                                    <label for="dateofjoining-input" className="">Joining Date*</label>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <input id="dateofjoining-input" name="dateofjoining-input" placeholder="Date of joining" type="date" className="form-control"/>
                                                    <small className="help-block form-text text-muted">Date is required</small>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleEditModal}>Update Staff</Button>{' '}
                        <Button color="secondary" onClick={this.toggleEditModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CourseWiseRankList;

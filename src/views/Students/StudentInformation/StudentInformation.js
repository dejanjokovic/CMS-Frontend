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
  Label,
  Table,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

import { clDarkBlue } from '../../../utils/colors'
import ScheduleCalendar from '../../../components/generals/ScheduleCalendar';
import UploadPreview from '../../../components/generals/UploadPreview';
const Widget03 = lazy(() => import('../../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const staffList = [
    {Admno:'YYYY', RollNo:'XXXX', Code:"12ADM800", Photo:"assets/img/avatars/1.jpg", Name:"Devika.K R", Division:"A", SemisterYear:"Semister-1", Phone:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", EmailId:"ameer@gmail.com"},
    {Admno:'YYYY', RollNo:'XXXX', Code:"12ADM800", Photo:"assets/img/avatars/2.jpg", Name:"Devika.K R", Division:"A", SemisterYear:"Semister-1", Phone:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", EmailId:"ameer@gmail.com"},
    {Admno:'YYYY', RollNo:'XXXX', Code:"12ADM800", Photo:"assets/img/avatars/3.jpg", Name:"Devika.K R", Division:"A", SemisterYear:"Semister-1", Phone:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", EmailId:"ameer@gmail.com"},
    {Admno:'YYYY', RollNo:'XXXX', Code:"12ADM800", Photo:"assets/img/avatars/4.jpg", Name:"Devika.K R", Division:"A", SemisterYear:"Semister-1", Phone:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", EmailId:"ameer@gmail.com"},
    {Admno:'YYYY', RollNo:'XXXX', Code:"12ADM800", Photo:"assets/img/avatars/5.jpg", Name:"Devika.K R", Division:"A", SemisterYear:"Semister-1", Phone:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", EmailId:"ameer@gmail.com"},
    {Admno:'YYYY', RollNo:'XXXX', Code:"12ADM800", Photo:"assets/img/avatars/6.jpg", Name:"Devika.K R", Division:"A", SemisterYear:"Semister-1", Phone:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", EmailId:"ameer@gmail.com"},
    {Admno:'YYYY', RollNo:'XXXX', Code:"12ADM800", Photo:"assets/img/avatars/7.jpg", Name:"Devika.K R", Division:"A", SemisterYear:"Semister-1", Phone:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", EmailId:"ameer@gmail.com"},
    {Admno:'YYYY', RollNo:'XXXX', Code:"12ADM800", Photo:"assets/img/avatars/8.jpg", Name:"Devika.K R", Division:"A", SemisterYear:"Semister-1", Phone:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", EmailId:"ameer@gmail.com"},
    {Admno:'YYYY', RollNo:'XXXX', Code:"12ADM800", Photo:"assets/img/avatars/2.jpg", Name:"Devika.K R", Division:"A", SemisterYear:"Semister-1", Phone:"9809158380", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", EmailId:"ameer@gmail.com"},
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

class StudentInformation extends Component {
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
    OnclickTabGenerateRollNo = () => this.setState({tabActive:2})
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
                        <h2 style={{color:"grey"}}>Student Information - Course - B.Com With CA</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <Row>
                    <Col xs="12" sm="12" lg="2">
                        <Label>Semister/Year</Label>
                    </Col>
                    <Col xs="12" sm="12" lg="2">
                        <Dropdown isOpen={this.state.isOpenFilterDropdown} toggle={() => {this.toggleFilterDropdown()}}>
                            <DropdownToggle caret style={{width:"100%"}}>
                                {this.state.filterDepartmentValue}
                            </DropdownToggle>
                            <DropdownMenu>
                                {
                                    this.state.DepartmentList.map((item, index) => {
                                        return (
                                            <DropdownItem key={index} onClick={()=>this.OnChangeFilterParameter("filterDepartmentValue", item)}>{item}</DropdownItem>
                                        )
                                    })
                                }
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col xs="12" sm="12" lg="3">
                        <Dropdown isOpen={this.state.isOpenFilterDropdown} toggle={() => {this.toggleFilterDropdown()}}>
                            <DropdownToggle caret style={{width:"100%"}}>
                                {this.state.filterDepartmentValue}
                            </DropdownToggle>
                            <DropdownMenu>
                                {
                                    this.state.DepartmentList.map((item, index) => {
                                        return (
                                            <DropdownItem key={index} onClick={()=>this.OnChangeFilterParameter("filterDepartmentValue", item)}>{item}</DropdownItem>
                                        )
                                    })
                                }
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col xs="12" sm="12" lg="3">
                        <Dropdown isOpen={this.state.isOpenFilterDropdown} toggle={() => {this.toggleFilterDropdown()}}>
                            <DropdownToggle caret style={{width:"100%"}}>
                                {this.state.filterDepartmentValue}
                            </DropdownToggle>
                            <DropdownMenu>
                                {
                                    this.state.DepartmentList.map((item, index) => {
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
                    <Col>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className={this.state.tabActive==0 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabStaffList}><i class="fa fa-align-justify"></i> Student List</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.tabActive==1 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabAddStaff}><i class="fa fa-plus-circle fa-lg"></i> Add Student</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.tabActive==2 ? "nav-link active" : "nav-link"} onClick={this.OnclickTabGenerateRollNo}><i class="fa fa-plus-circle fa-lg"></i> Generate RollNo</a>
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
                                                <th>Admno</th>
                                                <th>Code</th>
                                                <th>RollNo</th>
                                                <th>Photo</th>
                                                <th>Name</th>
                                                <th>Semister/Year</th>
                                                <th>Division</th>
                                                <th>Address</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.staffList.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{item.Admno}</td>
                                                        <td>{item.Code}</td>
                                                        <td>{item.RollNo}</td>
                                                        <td className="text-center">
                                                            <div className="avatar">
                                                                <img src={item.Photo} className="img-avatar" alt="admin@bootstrapmaster.com" />
                                                                <span className="avatar-status badge-success"></span>
                                                            </div>
                                                        </td>
                                                        <td>{item.Name}</td>
                                                        <td>{item.SemisterYear}</td>
                                                        <td>{item.Division}</td>
                                                        <td>{item.Address}</td>
                                                        <td>{item.Email}</td>
                                                        <td>{item.Phone}</td>
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
                                <Row>
                                    <Col lg="3">
                                    </Col>
                                    <Col lg="2">
                                        <Button block color="primary">Add Staff</Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>
                }
                {this.state.tabActive == 2 &&
                <Row></Row>
                }
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

export default StudentInformation;

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
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const CourseList = [
    {DepartmentName:"Department1", CourseName:"English", Type:"academic", CourseCode:"CM", CourseDuration:3, Mode:"sem"},
    {DepartmentName:"Department2", CourseName:"Math", Type:"academic", CourseCode:"CM", CourseDuration:3, Mode:"sem"},
    {DepartmentName:"Department3", CourseName:"Computer", Type:"academic", CourseCode:"CM", CourseDuration:3, Mode:"sem"},
    {DepartmentName:"Department4", CourseName:"Arts", Type:"academic", CourseCode:"CM", CourseDuration:3, Mode:"sem"},
    {DepartmentName:"Department5", CourseName:"Psycology", Type:"academic", CourseCode:"CM", CourseDuration:3, Mode:"sem"},
]

const SubjectList = [
    {CourseName:"B.A.English", SubjectName:"English", SubjectCode:"EN", SubjectComponent:"Theory", SubjectMode:"compulsary", Semester:"1", MinimumMarkForInternal:20, MaximumMarkForInternal:50, MinimumMarkForExternal:45, MaximumMarkForExternal:100},
    {CourseName:"B.A.English", SubjectName:"English", SubjectCode:"EN", SubjectComponent:"Theory", SubjectMode:"compulsary", Semester:"1", MinimumMarkForInternal:20, MaximumMarkForInternal:50, MinimumMarkForExternal:45, MaximumMarkForExternal:100},
    {CourseName:"B.A.English", SubjectName:"English", SubjectCode:"EN", SubjectComponent:"Theory", SubjectMode:"compulsary", Semester:"1", MinimumMarkForInternal:20, MaximumMarkForInternal:50, MinimumMarkForExternal:45, MaximumMarkForExternal:100},
    {CourseName:"B.A.English", SubjectName:"English", SubjectCode:"EN", SubjectComponent:"Theory", SubjectMode:"compulsary", Semester:"1", MinimumMarkForInternal:20, MaximumMarkForInternal:50, MinimumMarkForExternal:45, MaximumMarkForExternal:100},
    {CourseName:"B.A.English", SubjectName:"English", SubjectCode:"EN", SubjectComponent:"Theory", SubjectMode:"compulsary", Semester:"1", MinimumMarkForInternal:20, MaximumMarkForInternal:50, MinimumMarkForExternal:45, MaximumMarkForExternal:100},
]

class SubjectDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabActive:0,

            filterFromDate: null,
            filterToDate: null,
            isOpenFilterDropdown: false,

            CourseList: CourseList,
            SubjectList: SubjectList,
        }
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    OnClickTabSubjectsList = () => this.setState({tabActive:0})
    OnClickTabAddSubject = () => this.setState({tabActive:1})

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <h2 style={{color:"grey"}}>Manage Subject</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <Row>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Select Course</th>
                                    <th>Select Subject</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>
                                    <select name="select" id="select" class="form-control">
                                        <option value="0">Please select</option>
                                        <option value="1">Course 1</option>
                                        <option value="2">Course 2</option>
                                        <option value="3">Course 3</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="select" id="select" class="form-control">
                                        <option value="0">Please select</option>
                                        <option value="1">Subject 1</option>
                                        <option value="2">Subject 2</option>
                                        <option value="3">Subject 3</option>
                                    </select>
                                </td>
                                <td>
                                    <Button color="primary">Filter</Button>
                                </td>
                            </tbody>
                        </table>
                    </div>
                </Row>
                <div style={{height:30}}></div>
                <Row>
                    <Col>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className={this.state.tabActive==0 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabSubjectsList}><i class="fa fa-align-justify"></i> Subjects List</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.tabActive==1 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabAddSubject}><i class="fa fa-plus-circle fa-lg"></i> Add Subject</a>
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
                                                <th>No</th>
                                                <th>Course Name</th>
                                                <th>Subject Name</th>
                                                <th>Subject Code</th>
                                                <th>Subject Component</th>
                                                <th>Subject Mode</th>
                                                <th>Semester</th>
                                                <th>Minimum Mark For Internal</th>
                                                <th>Maximum Mark For Internal</th>
                                                <th>Minimum Mark For External</th>
                                                <th>Maximum Mark For External</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                            {
                                                this.state.SubjectList.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{item.CourseName}</td>
                                                        <td>{item.SubjectName}</td>
                                                        <td>{item.SubjectCode}</td>
                                                        <td>{item.SubjectComponent}</td>
                                                        <td>{item.SubjectMode}</td>
                                                        <td>{item.Semester}</td>
                                                        <td>{item.MinimumMarkForInternal}</td>
                                                        <td>{item.MaximumMarkForInternal}</td>
                                                        <td>{item.MinimumMarkForExternal}</td>
                                                        <td>{item.MaximumMarkForExternal}</td>
                                                        <td><Dropdown>Action</Dropdown></td>
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
                }
                {this.state.tabActive == 1 &&
                <Row>
                    <div className="col-12 col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <form action="" method="post" enctype="multipart/form-data" className="form-horizontal">
                                <div class="position-relative row form-group">
                                        <div class="col-md-3" style={{textAlign:"right", marginTop:4}}>
                                            <label for="select" class="">Course*</label>
                                        </div>
                                        <div class="col-12 col-md-9">
                                            <select name="select" id="select" class="form-control">
                                                <option value="0">Please select</option>
                                                <option value="1">Course 1</option>
                                                <option value="2">Course 2</option>
                                                <option value="3">Course 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="position-relative row form-group">
                                        <div class="col-md-3" style={{textAlign:"right", marginTop:4}}>
                                            <label for="select" class="">Semister/Year*</label>
                                        </div>
                                        <div class="col-12 col-md-9">
                                            <select name="select" id="select" class="form-control">
                                                <option value="0">Please select</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="name-input" className="">Subject Name*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="name-input" name="name-input" placeholder="Name" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Name is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="ShortCode-input" className="">Subject Code*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="ShortCode-input" name="place-input" placeholder="Code" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Subject Code is required</small>
                                        </div>
                                    </div>
                                    <div class="position-relative row form-group">
                                        <div class="col-md-3" style={{textAlign:"right"}}>
                                            <label class="">Subject Component*</label>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="position-relative form-check form-check-inline">
                                                <input id="inline-radio1" name="inline-radios" type="radio" class="form-check-input form-check-input" value="option1"/>
                                                <label for="inline-radio1" class="form-check-label form-check-label">Theory</label>
                                            </div>
                                            <div class="position-relative form-check form-check-inline">
                                                <input id="inline-radio2" name="inline-radios" type="radio" class="form-check-input form-check-input" value="option2"/>
                                                <label for="inline-radio2" class="form-check-label form-check-label">Practical</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="position-relative row form-group">
                                        <div class="col-md-3" style={{textAlign:"right"}}>
                                            <label class="">Subject Mode*</label>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="position-relative form-check form-check-inline">
                                                <input id="inline-radio1" name="inline-radios" type="radio" class="form-check-input form-check-input" value="option1"/>
                                                <label for="inline-radio1" class="form-check-label form-check-label">Compulsory</label>
                                            </div>
                                            <div class="position-relative form-check form-check-inline">
                                                <input id="inline-radio2" name="inline-radios" type="radio" class="form-check-input form-check-input" value="option2"/>
                                                <label for="inline-radio2" class="form-check-label form-check-label">Elective</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="ShortCode-input" className="">Minimum Mark For Internal*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="ShortCode-input" name="place-input" placeholder="Code" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Minimum Mark For Internal is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="ShortCode-input" className="">Maximum Mark For Internal*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="ShortCode-input" name="place-input" placeholder="Code" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Maximum Mark For Internal is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="ShortCode-input" className="">Minimum Mark For External*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="ShortCode-input" name="place-input" placeholder="Code" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Minimum Mark For External is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="ShortCode-input" className="">Maximum Mark For External*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="ShortCode-input" name="place-input" placeholder="Code" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Maximum Mark For External is required</small>
                                        </div>
                                    </div>
                                </form>
                                <Row>
                                    <Col lg="3">
                                    </Col>
                                    <Col lg="2">
                                        <Button block color="primary">Add Course</Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>
                }
            </div>
        );
    }
}

export default SubjectDetails;

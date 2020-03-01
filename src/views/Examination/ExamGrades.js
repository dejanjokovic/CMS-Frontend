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

const GradeList = [
    {AcademicYear:"2015", GradeName:"A", StartingGradePoint:3.5, EndGradePoint:4.49, GradePoint:4, MarkFrom:70, MarkUpto:80, Comment:"very good", Status:"passed"},
    {AcademicYear:"2015", GradeName:"A", StartingGradePoint:3.5, EndGradePoint:4.49, GradePoint:4, MarkFrom:70, MarkUpto:80, Comment:"very good", Status:"passed"},
    {AcademicYear:"2015", GradeName:"A", StartingGradePoint:3.5, EndGradePoint:4.49, GradePoint:4, MarkFrom:70, MarkUpto:80, Comment:"very good", Status:"passed"},
    {AcademicYear:"2015", GradeName:"A", StartingGradePoint:3.5, EndGradePoint:4.49, GradePoint:4, MarkFrom:70, MarkUpto:80, Comment:"very good", Status:"passed"},
    {AcademicYear:"2015", GradeName:"A", StartingGradePoint:3.5, EndGradePoint:4.49, GradePoint:4, MarkFrom:70, MarkUpto:80, Comment:"very good", Status:"passed"},
]

class ExamGrades extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabActive:0,

            filterFromDate: null,
            filterToDate: null,
            isOpenFilterDropdown: false,

            GradeList: GradeList,
            isOpenDepartmentDropdown: false,
        }
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    OnClickTabGradesList = () => this.setState({tabActive:0})
    OnClickTabAddGrades = () => this.setState({tabActive:1})

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <h2 style={{color:"grey"}}>Manage Grades</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <div style={{height:30}}></div>
                <Row>
                    <Col>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className={this.state.tabActive==0 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabGradesList}><i class="fa fa-align-justify"></i> Grades List</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.tabActive==1 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabAddGrades}><i class="fa fa-plus-circle fa-lg"></i> Add Grades</a>
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
                                                <th>Academic Year</th>
                                                <th>Grade Name</th>
                                                <th>Starting Grade Point</th>
                                                <th>Ending Grade Point</th>
                                                <th>Grade Point</th>
                                                <th>Mark From</th>
                                                <th>Mark Upto</th>
                                                <th>Comment</th>
                                                <th>Status</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                            {
                                                this.state.GradeList.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{item.AcademicYear}</td>
                                                        <td>{item.GradeName}</td>
                                                        <td>{item.StartingGradePoint}</td>
                                                        <td>{item.EndGradePoint}</td>
                                                        <td>{item.GradePoint}</td>
                                                        <td>{item.MarkFrom}</td>
                                                        <td>{item.MarkUpto}</td>
                                                        <td>{item.Comment}</td>
                                                        <td>{item.Status}</td>
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
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="name-input" className="">Academic Year</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <select name="select" id="select" class="form-control">
                                                <option value="0">2010</option>
                                                <option value="1">2011</option>
                                                <option value="2">2012</option>
                                                <option value="3">2014</option>
                                                <option value="3">2015</option>
                                                <option value="3">2016</option>
                                                <option value="3">2017</option>
                                                <option value="3">2018</option>
                                                <option value="3">2019</option>
                                                <option value="3">2020</option>
                                                <option value="3">2021</option>
                                                <option value="3">2022</option>
                                                <option value="3">2023</option>
                                                <option value="3">2024</option>
                                                <option value="3">2025</option>
                                                <option value="3">2026</option>
                                                <option value="3">2027</option>
                                                <option value="3">2028</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="name-input" className="">Grade Name*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="name-input" name="name-input" placeholder="Name" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Name is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="ShortCode-input" className="">Starting Grade Point*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="ShortCode-input" name="place-input" placeholder="Starting Grade Point" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Starting Grade Point is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="ShortCode-input" className="">Ending Grade Point*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="ShortCode-input" name="place-input" placeholder="Ending Grade Point" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Ending Grade Point is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="ShortCode-input" className="">Grade Point*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="ShortCode-input" name="place-input" placeholder="GradePoint" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Grade Point is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="ShortCode-input" className="">Mark From*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="ShortCode-input" name="place-input" placeholder="Mark From" type="text" className="form-control"/>
                                            {/* <small className="form-text text-muted">Grade Point is required</small> */}
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="ShortCode-input" className="">Mark Upto*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="ShortCode-input" name="place-input" placeholder="Mark Upto" type="text" className="form-control"/>
                                            {/* <small className="form-text text-muted">Grade Point is required</small> */}
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="ShortCode-input" className="">Comment*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="ShortCode-input" name="place-input" placeholder="Comment" type="text" className="form-control"/>
                                            {/* <small className="form-text text-muted">Grade Point is required</small> */}
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="ShortCode-input" className="">Status*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="ShortCode-input" name="place-input" placeholder="Status" type="text" className="form-control"/>
                                            {/* <small className="form-text text-muted">Grade Point is required</small> */}
                                        </div>
                                    </div>
                                </form>
                                <Row>
                                    <Col lg="3">
                                    </Col>
                                    <Col lg="2">
                                        <Button block color="primary">Add Grade</Button>
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

export default ExamGrades;

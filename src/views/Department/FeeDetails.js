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
    {Sem1:"1000", Sem2:"2000", Sem3:"2500", Sem4:"3000", Sem5:"2200", Sem6:"4000", CourseName:"English", Type:"academic", CourseCode:"CM", CourseDuration:3, Mode:"sem"},
    {Sem1:"1000", Sem2:"2000", Sem3:"2500", Sem4:"3000", Sem5:"2200", Sem6:"4000", CourseName:"Math", Type:"academic", CourseCode:"CM", CourseDuration:3, Mode:"sem"},
    {Sem1:"1000", Sem2:"2000", Sem3:"2500", Sem4:"3000", Sem5:"2200", Sem6:"4000", CourseName:"Computer", Type:"academic", CourseCode:"CM", CourseDuration:3, Mode:"sem"},
    {Sem1:"1000", Sem2:"2000", Sem3:"2500", Sem4:"3000", Sem5:"2200", Sem6:"4000", CourseName:"Arts", Type:"academic", CourseCode:"CM", CourseDuration:3, Mode:"sem"},
    {Sem1:"1000", Sem2:"2000", Sem3:"2500", Sem4:"3000", Sem5:"2200", Sem6:"4000", CourseName:"Psycology", Type:"academic", CourseCode:"CM", CourseDuration:3, Mode:"sem"},
]

class FeeDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabActive:0,

            filterFromDate: null,
            filterToDate: null,
            isOpenFilterDropdown: false,

            CourseList: CourseList,
        }
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    OnClickTabCoursesList = () => this.setState({tabActive:0})
    OnClickTabAddCourses = () => this.setState({tabActive:1})

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <h2 style={{color:"grey"}}>Manage Fees</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <div style={{height:30}}></div>
                <Row>
                    <Col>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className={this.state.tabActive==0 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabCoursesList}><i class="fa fa-align-justify"></i> Fees List</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.tabActive==1 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabAddCourses}><i class="fa fa-plus-circle fa-lg"></i> Add Fee</a>
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
                                                <th>Course Code</th>
                                                <th>Sem1</th>
                                                <th>Sem2</th>
                                                <th>Sem3</th>
                                                <th>Sem4</th>
                                                <th>Sem5</th>
                                                <th>Sem6</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                            {
                                                this.state.CourseList.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{item.CourseName}</td>
                                                        <td>{item.CourseCode}</td>
                                                        <td>{item.Sem1}</td>
                                                        <td>{item.Sem2}</td>
                                                        <td>{item.Sem3}</td>
                                                        <td>{item.Sem4}</td>
                                                        <td>{item.Sem5}</td>
                                                        <td>{item.Sem6}</td>
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
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="name-input" className="">Sem1*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="name-input" name="name-input" placeholder="" type="text" className="form-control"/>
                                            {/* <small className="form-text text-muted">Name is required</small> */}
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="name-input" className="">Sem2*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="name-input" name="name-input" placeholder="" type="text" className="form-control"/>
                                            {/* <small className="form-text text-muted">Name is required</small> */}
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="name-input" className="">Sem3*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="name-input" name="name-input" placeholder="" type="text" className="form-control"/>
                                            {/* <small className="form-text text-muted">Name is required</small> */}
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="name-input" className="">Sem4*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="name-input" name="name-input" placeholder="" type="text" className="form-control"/>
                                            {/* <small className="form-text text-muted">Name is required</small> */}
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="name-input" className="">Sem5*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="name-input" name="name-input" placeholder="" type="text" className="form-control"/>
                                            {/* <small className="form-text text-muted">Name is required</small> */}
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

export default FeeDetails;

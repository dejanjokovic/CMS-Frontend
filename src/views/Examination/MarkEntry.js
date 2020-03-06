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

const MarkEntryList = [
    {StudentName:"SHAMER", RollNo:"2"},
    {StudentName:"SHAMER", RollNo:"2"},
    {StudentName:"SHAMER", RollNo:"2"},
    {StudentName:"SHAMER", RollNo:"2"},
    {StudentName:"SHAMER", RollNo:"2"},
]

class MarkEntry extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabActive:0,

            filterFromDate: null,
            filterToDate: null,
            isOpenFilterDropdown: false,
            MarkEntryList: MarkEntryList,
        }
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <h2 style={{color:"grey"}}>Manage Mark Entry</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <Row>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Select Department</th>
                                    <th>Select Course</th>
                                    <th>Select Semester</th>
                                    <th>Select Subject</th>
                                    <th>Select Year</th>
                                    <th>Select Devision</th>
                                    <th>Select Exam</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>
                                    <select name="select" id="select" class="form-control">
                                        <option value="0">Please select</option>
                                        <option value="1">Department 1</option>
                                        <option value="2">Department 2</option>
                                        <option value="3">Department 3</option>
                                    </select>
                                </td>
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
                                        <option value="1">Semester 1</option>
                                        <option value="2">Semester 2</option>
                                        <option value="3">Semester 3</option>
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
                                    <select name="select" id="select" class="form-control">
                                        <option value="0">Please select</option>
                                        <option value="1">2019</option>
                                        <option value="2">2020</option>
                                        <option value="3">2021</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="select" id="select" class="form-control">
                                        <option value="0">Please select</option>
                                        <option value="1">Devision 1</option>
                                        <option value="2">Devision 2</option>
                                        <option value="3">Devision 3</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="select" id="select" class="form-control">
                                        <option value="0">Please select</option>
                                        <option value="1">Exam 1</option>
                                        <option value="2">Exam 2</option>
                                        <option value="3">Exam 3</option>
                                    </select>
                                </td>
                                <td>
                                    <Button color="primary">Manage Mark Entry</Button>
                                </td>
                            </tbody>
                        </table>
                    </div>
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
                                                <th>No</th>
                                                <th>Student Name</th>
                                                <th>Roll No</th>
                                                <th>Register Number</th>
                                                <th>Max Mark and Point</th>
                                                <th>Optained Mark</th>
                                                <th>Grade Point</th>
                                                <th>Assignment</th>
                                                <th>Seminar</th>
                                                <th>Attandance</th>
                                                <th>Status</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                            {
                                                this.state.MarkEntryList.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{item.StudentName}</td>
                                                        <td>{item.RollNo}</td>
                                                        <td> <input type="text" class="form-control"/> </td>
                                                        <td> <input type="text" class="form-control"/> </td>
                                                        <td> <input type="text" class="form-control"/> </td>
                                                        <td> <input type="text" class="form-control"/> </td>
                                                        <td> <input type="text" class="form-control"/> </td>
                                                        <td> <input type="text" class="form-control"/> </td>
                                                        <td> <input type="text" class="form-control"/> </td>
                                                        <td> <input type="text" class="form-control"/> </td>
                                                        <td><Button color="danger">Save</Button></td>
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

export default MarkEntry;

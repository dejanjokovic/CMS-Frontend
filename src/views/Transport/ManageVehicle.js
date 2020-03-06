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

import { clDarkBlue } from '../../utils/colors'
import ScheduleCalendar from '../../components/generals/ScheduleCalendar';

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const VehiclesList = [
    {NumberOfVehicles:3, RegNumber:"KI 9X45", RouteName:"palakkad"},
    {NumberOfVehicles:3, RegNumber:"KI 9X45", RouteName:"palakkad"},
    {NumberOfVehicles:3, RegNumber:"KI 9X45", RouteName:"palakkad"},
    {NumberOfVehicles:3, RegNumber:"KI 9X45", RouteName:"palakkad"},
    {NumberOfVehicles:3, RegNumber:"KI 9X45", RouteName:"palakkad"},
]
const VehiclesReports = [
    {Year:2015, TotalMoneyEarned:1245},
    {Year:2015, TotalMoneyEarned:1245},
    {Year:2015, TotalMoneyEarned:1245},
    {Year:2015, TotalMoneyEarned:1245},
    {Year:2015, TotalMoneyEarned:1245},
]
class ManageVehicles extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabActive:0,

            filterFromDate: null,
            filterToDate: null,

            VehiclesList: VehiclesList,
            VehiclesReports: VehiclesReports,

            dropdownOpen:[],
        }
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    OnClickTabVehiclesList = () =>{
        this.setState({tabActive:0})
    }
    OnClickTabVehiclesReport = () =>{
        this.setState({tabActive:1})
    }
    OnClickButtonFilter = () => {
        console.log(this.state.filterToDate)
    }

    toggleOptions(i) {
        const newArray = this.state.dropdownOpen.map((element, index) => {
            return (index === i ? !element : false);
        });
        this.setState({
            dropdownOpen: newArray,
        });
    }
    
    componentDidMount(){
        this.setState({dropdownOpen:new Array(6).fill(false)})
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <h2 style={{color:"grey"}}>Manage Vehicles</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <div style={{height:30}}></div>
                <Row>
                    <Col>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className={this.state.tabActive==0 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabVehiclesList}><i class="fa fa-align-justify"></i> Vehicles List</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.tabActive==1 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabVehiclesReport}><i class="fa fa-plus-circle fa-lg"></i> Add Vehicles</a>
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
                                                <th>Number Of Vehicles</th>
                                                <th>Reg.Number</th>
                                                <th>Route Name</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                            {
                                                this.state.VehiclesList.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{item.NumberOfVehicles}</td>
                                                        <td>{item.RegNumber}</td>
                                                        <td>{item.RouteName}</td>
                                                        <td>
                                                            <Dropdown isOpen={this.state.dropdownOpen[index]} toggle={() => {this.toggleOptions(index);}}>
                                                                <DropdownToggle caret>
                                                                    Actions
                                                                </DropdownToggle>
                                                                <DropdownMenu right style={{right: 'auto'}}>
                                                                    <DropdownItem>Edit</DropdownItem>
                                                                    <DropdownItem>Delete</DropdownItem>
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
                }
                {this.state.tabActive == 1 &&
                <Row>
                <div className="col-12 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <form action="" method="post" enctype="multipart/form-data" className="form-horizontal">
                                <div className="position-relative row form-group">
                                    <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                        <label for="name-input" className="">Route Name*</label>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <select className="form-control">
                                            <option>Route 1</option>
                                            <option>Route 2</option>
                                            <option>Route 3</option>
                                            <option>Route 4</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="position-relative row form-group">
                                    <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                        <label for="name-input" className="">Number Of Vehicles</label>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <input id="name-input" name="name-input" placeholder="" type="text" className="form-control"/>
                                        {/* <small className="form-text text-muted">Name is required</small> */}
                                    </div>
                                </div>
                                <div className="position-relative row form-group">
                                    <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                        <label for="name-input" className="">Reg Number</label>
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
                                    <Button block color="primary">Add Vehicles</Button>
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

export default ManageVehicles;

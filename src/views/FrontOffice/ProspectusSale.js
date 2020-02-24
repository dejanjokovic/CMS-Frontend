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

const prospectusList = [
    {Name:"Devika.K R", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", ContactNo:"982737289373", EmailId:"devika92@gmail.com", PriceOfProspectus:"100", Date:new Date().toISOString().slice(0,10)},
    {Name:"Devika.K R", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", ContactNo:"982737289373", EmailId:"devika92@gmail.com", PriceOfProspectus:"100", Date:new Date().toISOString().slice(0,10)},
    {Name:"Devika.K R", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", ContactNo:"982737289373", EmailId:"devika92@gmail.com", PriceOfProspectus:"100", Date:new Date().toISOString().slice(0,10)},
    {Name:"Devika.K R", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", ContactNo:"982737289373", EmailId:"devika92@gmail.com", PriceOfProspectus:"100", Date:new Date().toISOString().slice(0,10)},
    {Name:"Devika.K R", Address:"Kaarikkal(h.o), Chelakkara(p.o), Thrissur Pin:580693", ContactNo:"982737289373", EmailId:"devika92@gmail.com", PriceOfProspectus:"100", Date:new Date().toISOString().slice(0,10)},
]
const prospectusReports = [
    {Year:2015, TotalMoneyEarned:1245},
    {Year:2015, TotalMoneyEarned:1245},
    {Year:2015, TotalMoneyEarned:1245},
    {Year:2015, TotalMoneyEarned:1245},
    {Year:2015, TotalMoneyEarned:1245},
]
class ProspectusSale extends Component {
    constructor(props) {
        super(props);
        this.state={
            tabActive:0,

            filterFromDate: null,
            filterToDate: null,

            prospectusList: prospectusList,
            prospectusReports: prospectusReports,
        }
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    OnClickTabProspectusList = () =>{
        this.setState({tabActive:0})
    }
    OnClickTabAddProspectus = () =>{
        this.setState({tabActive:1})
    }
    OnClickTabProspectusReport = () =>{
        this.setState({tabActive:2})
    }
    OnClickButtonFilter = () => {
        console.log(this.state.filterToDate)
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <h2 style={{color:"grey"}}>Manage Prospectus</h2>
                    </Col>
                </Row>
                <div style={{height:30}}></div>
                <Row>
                    <Col xs="12" sm="12" lg="2">
                        <h6 style={{marginTop:4}}>Filter By Date:</h6>
                    </Col>
                    <Col xs="12" sm="12" lg="3">
                        <Row>
                            <Col lg="2" style={{textAlign:"right"}}>
                                <label for="date-input1"  style={{marginTop:4}}>From</label>
                            </Col>
                            <Col lg="10">
                                <input id="date-input1" name="date-input" placeholder="From Date" type="date" class="form-control" value={this.state.filterFromDate} onChange={(e) => this.setState({filterFromDate:e.target.value})}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" lg="3">
                        <Row>
                            <Col lg="2" style={{textAlign:"right"}}>
                                <label for="date-input2" style={{marginTop:4}}>To</label>
                            </Col>
                            <Col lg="10" >
                                <input id="date-input2" name="date-input" placeholder="To Date" type="date" class="form-control" value={this.state.filterToDate} onChange={(e) => this.setState({filterToDate:e.target.value})}/>
                            </Col>
                        </Row>
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
                                <a className={this.state.tabActive==0 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabProspectusList}><i class="fa fa-align-justify"></i> Prospectus List</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.tabActive==1 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabAddProspectus}><i class="fa fa-plus-circle fa-lg"></i> Add Prospectus</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.tabActive==2 ? "nav-link active" : "nav-link"} onClick={this.OnClickTabProspectusReport}><i class="fa fa-plus-circle fa-lg"></i> Prospectus Report</a>
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
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>Contact No</th>
                                                <th>Email ID</th>
                                                <th>Price Of Prospectus</th>
                                                <th>Date</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                            {
                                                this.state.prospectusList.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{item.Name}</td>
                                                        <td>{item.Address}</td>
                                                        <td>{item.ContactNo}</td>
                                                        <td>{item.EmailId}</td>
                                                        <td>{item.PriceOfProspectus}</td>
                                                        <td>{item.Date}</td>
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
                                            <label for="name-input" className="">Name*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="name-input" name="name-input" placeholder="Name" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Name is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3"  style={{textAlign:"right", marginTop:4}}>
                                            <label for="place-input" className="">Place*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="place-input" name="place-input" placeholder="Place" type="text" className="form-control"/>
                                            <small className="form-text text-muted">Place is required</small>
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
                                            <label for="phone-input" className="">Phone Number*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="phone-input" name="place-input" placeholder="Phone Number" type="tel" className="form-control"/>
                                            <small className="form-text text-muted">Phone number is required</small>
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
                                            <label for="date-input" className="">Date*</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="date-input" name="date-input" placeholder="date" type="date" className="form-control"/>
                                            <small className="help-block form-text text-muted">Date is required</small>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <div className="col-md-3" style={{textAlign:"right", marginTop:4}}>
                                            <label for="price-input" className="">Price Of Prospectus</label>
                                        </div>
                                        <div className="col-12 col-md-5">
                                            <input id="price-input" name="price-input" placeholder="Price Of Prospectus" type="number" className="form-control"/>
                                            <small className="help-block form-text text-muted">Price is required</small>
                                        </div>
                                    </div>
                                </form>
                                <Row>
                                    <Col lg="3">
                                    </Col>
                                    <Col lg="2">
                                        <Button block color="primary">Add Prospectus</Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>
                }
                {this.state.tabActive == 2 &&
                <Row>
                    <div className="col-12 col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Year</th>
                                                <th>Total Money Earned</th>
                                            </tr>
                                        </thead>
                                            {
                                                this.state.prospectusReports.map((item, index) => {
                                                    return(
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{item.Year}</td>
                                                        <td>{item.TotalMoneyEarned}</td>
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
            </div>
        );
    }
}

export default ProspectusSale;

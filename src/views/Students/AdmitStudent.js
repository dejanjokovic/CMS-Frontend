import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import UploadPreview from '../../components/generals/UploadPreview';

const DepartmentList = [
    {Name:"Computer", Id:"1"},
    {Name:"Bussiness", Id:"2"},
    {Name:"Psycology", Id:"3"},
    {Name:"Physic", Id:"4"},
    {Name:"English", Id:"5"},
]

const CourseList = [
    {Name:"Course1", Id:"1"},
    {Name:"Course2", Id:"2"},
    {Name:"Course3", Id:"3"},
    {Name:"Course4", Id:"4"},
    {Name:"Course5", Id:"5"},
]

const SemisterList = [
    {Name:"Semister1", Id:"1"},
    {Name:"Semister2", Id:"2"},
    {Name:"Semister3", Id:"3"},
    {Name:"Semister4", Id:"4"},
    {Name:"Semister5", Id:"5"},
]

const DivisionList = [
    {Name:"Division1", Id:"1"},
    {Name:"Division2", Id:"2"},
    {Name:"Division3", Id:"3"},
    {Name:"Division4", Id:"4"},
    {Name:"Division5", Id:"5"},
]

const LanguageList = [
    {Name:"Language1", Id:"1"},
    {Name:"Language2", Id:"2"},
    {Name:"Language3", Id:"3"},
    {Name:"Language4", Id:"4"},
    {Name:"Language5", Id:"5"},
]

const GenderList = [
    {Name:"Male", Id:"1"},
    {Name:"Female", Id:"2"},
]
class AdmitStudent extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,

            DepartmentList:[],
            CourseList:[],
            SemisterList:[],
            DivisionList:[],
            LanguageList:[],
            GenderList:[],
        };
    }

    componentDidMount(){
        this.setState({DepartmentList, CourseList, SemisterList, DivisionList, LanguageList, GenderList})
    }

    toggle() {this.setState({ collapse: !this.state.collapse });}
    toggleFade() {this.setState((prevState) => { return { fadeIn: !prevState }});}

    render() {
        return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="12" sm="12" lg="12">
                    <h2 style={{color:"grey"}}><i className="fa fa-arrow-circle-o-right"></i> Add Student</h2>
                </Col>
            </Row>
            <div style={{height:30}}></div>
            <Row>
                <Col></Col>
                <Col xs="12" md="8">
                    <Card>
                        <CardHeader>
                            <strong><i className="fa fa-plus-circle fa-lg"></i> Addmission Form</strong>
                        </CardHeader>
                        <CardBody>
                            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="admitnumber-input">Admission Number</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="admitnumber-input" name="admitnumber-input" placeholder="Admission Number" />
                                        <FormText color="danger">This is a help text</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="admitdate-input">Admission Date</Label>
                                    </Col>
                                        <Col xs="12" md="9">
                                        <Input type="date" id="admitdate-input" name="admitdate-input" placeholder="date" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="appnum-input">Application Number</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="appnum-input" name="appnum-input" placeholder="Application Number" />
                                        <FormText color="danger">This is a help text</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Department">Department</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="Department" id="Department">
                                            <option value="0">Please select</option>
                                            {
                                                this.state.DepartmentList.map((item, index)=>{
                                                    return(
                                                        <option value={item.Id}>{item.Name}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Course">Course</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="Course" id="Course">
                                            <option value="0">Please course</option>
                                            {
                                                this.state.CourseList.map((item, index)=>{
                                                    return(
                                                        <option value={item.Id}>{item.Name}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Semister">Semister/Year</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="Semister" id="Semister">
                                            <option value="0">Please semister</option>
                                            {
                                                this.state.SemisterList.map((item, index)=>{
                                                    return(
                                                        <option value={item.Id}>{item.Name}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Division">Division</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="Division" id="Division">
                                            <option value="0">Please division</option>
                                            {
                                                this.state.DivisionList.map((item, index)=>{
                                                    return(
                                                        <option value={item.Id}>{item.Name}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="SecondLanguage">Second Language</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="SecondLanguage" id="SecondLanguage">
                                            <option value="0">Please second language</option>
                                            {
                                                this.state.LanguageList.map((item, index)=>{
                                                    return(
                                                        <option value={item.Id}>{item.Name}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Name-input">Name</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="Name-input" name="Name-input" placeholder="Name" />
                                        <FormText color="danger">Name is required</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="UniversityRegisterNumber-input">University Register Number</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="UniversityRegisterNumber-input" name="UniversityRegisterNumber-input" placeholder="University Register Number" />
                                        <FormText color="danger">University Register Number is required</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="DOB-input">Date Of Birth</Label>
                                    </Col>
                                        <Col xs="12" md="9">
                                        <Input type="date" id="DOB-input" name="DOB-input" placeholder="date" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Gender">Gender</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="Gender" id="Gender">
                                            <option value="0">Please select gender</option>
                                            {
                                                this.state.GenderList.map((item, index)=>{
                                                    return(
                                                        <option value={item.Id}>{item.Name}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Address-input">Address</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="Address-input" name="Address-input" placeholder="Address" />
                                        <FormText color="danger">Address is required</FormText>
                                    </Col>
                                </FormGroup>                                
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Nationality-input">Nationality</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="Nationality-input" name="Nationality-input" placeholder="Nationality" />
                                        <FormText color="danger">Nationality is required</FormText>
                                    </Col>
                                </FormGroup>                               
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Father-input">Father</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="Father-input" name="Father-input" placeholder="Father Name" />
                                        <FormText color="danger">Father name is required</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="FatherOcc-input">Father's Occupation</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="FatherOcc-input" name="FatherOcc-input" placeholder="Father's Occupation" />
                                        <FormText color="danger">Father's Occupation is required</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="FatherOcc-input">Mother</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="FatherOcc-input" name="FatherOcc-input" placeholder="Mother Name" />
                                        <FormText color="danger">Mother name is required</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="MotherOcc-input">Mother's Occupation</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="MotherOcc-input" name="MotherOcc-input" placeholder="Mother's Occupation" />
                                        <FormText color="danger">Mother's Occupation is required</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Annual-input">Annual Income</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="Annual-input" name="Annual-input" placeholder="Annual Income" />
                                        <FormText color="danger">Annual Income is required</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Religion-input">Religion</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="Religion-input" name="Religion-input" placeholder="Religion" />
                                        <FormText color="danger">Religion is required</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Caste-input">Caste</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="Caste-input" name="Caste-input" placeholder="Caste" />
                                        <FormText color="danger">Caste is required</FormText>
                                    </Col>
                                </FormGroup>                                
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Category-input">Category</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="Category-input" name="Category-input" placeholder="Category" />
                                        <FormText color="danger">Category is required</FormText>
                                    </Col>
                                </FormGroup>                                
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="BloodGroup-input">Blood Group</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="BloodGroup-input" name="BloodGroup-input" placeholder="Blood Group" />
                                        <FormText color="danger">Blood Group is required</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="stuphone-input">Student Phone</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="tel" id="stuphone-input" name="stuphone-input" placeholder="Phone Number" />
                                        <FormText color="danger">Student Phone is required</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="parphone-input">Parent Phone</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="tel" id="parphone-input" name="parphone-input" placeholder="Phone Number" />
                                        <FormText color="danger">Parent Phone is required</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="email-input">Email Input</Label>
                                    </Col>
                                        <Col xs="12" md="9">
                                        <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                                        <FormText className="help-block">Please enter your email</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Photo-input">Photo</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <UploadPreview></UploadPreview>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Add Student</Button>{"  "}
                            {/* <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button> */}
                        </CardFooter>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </div>
        );
    }
}

export default AdmitStudent;

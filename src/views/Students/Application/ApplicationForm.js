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
import UploadPreview from '../../../components/generals/UploadPreview';

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

const TrueFalse = [
    {label:"True", value:true},
    {label:"False", value:false}
]

const NumberList = [
    {label:"1", value:1},
    {label:"2", value:2},
    {label:"3", value:3},
    {label:"4", value:4},
    {label:"5", value:5},
]

const GradeList = [
    {label:"Grade 1", value:1},
    {label:"Grade 2", value:2},
    {label:"Grade 3", value:3},
    {label:"Grade 4", value:4},
    {label:"Grade 5", value:5},
]
class ApplicationForm extends Component {
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
            TrueFalse:[],
            NumberList:[],
            GradeList:[],
        };
    }

    componentDidMount(){
        this.setState({DepartmentList, CourseList, SemisterList, DivisionList, LanguageList, GenderList, TrueFalse, NumberList, GradeList})
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
                            <strong><i className="fa fa-plus-circle fa-lg"></i> Application Form</strong>
                        </CardHeader>
                        <CardBody>
                            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="appname-input">Name</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="appname-input" name="appname-input" placeholder="Name" />
                                        <FormText color="danger">This is a help text</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="expansiniti-input">Expansion Of Initials</Label>
                                    </Col>
                                        <Col xs="12" md="9">
                                        <Input type="date" id="expansiniti-input" name="expansiniti-input" placeholder="Name with initials" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="DOBAsInSSLC-input">Date Of Birth As In SSLC Book</Label>
                                    </Col>
                                        <Col xs="12" md="9">
                                        <Input type="date" id="DOBAsInSSLC-input" name="DOBAsInSSLC-input" placeholder="Date Of Birth" />
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
                                        <Label htmlFor="Nationality-input">Nationality</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="Nationality-input" name="Nationality-input" placeholder="Nationality" />
                                        <FormText color="danger">Nationality is required</FormText>
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
                                        <Label htmlFor="Caste-input">Mother Tongue</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="Caste-input" name="Caste-input" placeholder="Mother Tongue" />
                                        <FormText color="danger">Mother Tongue is required</FormText>
                                    </Col>
                                </FormGroup>                                
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Address-input">Address of Parent/Guardian</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="Address-input" name="Address-input" placeholder="Address" />
                                        <FormText color="danger">Address is required</FormText>
                                    </Col>
                                </FormGroup>                                
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Address-input">Landline no of Parent/Guardian</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="Address-input" name="Address-input" placeholder="Address" />
                                        <FormText color="danger">Address is required</FormText>
                                    </Col>
                                </FormGroup>                                
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="parphone-input">Mobile no of Parent/Guardian</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="tel" id="parphone-input" name="parphone-input" placeholder="Phone Number" />
                                        <FormText color="danger">Parent Phone is required</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="email-input">Email ID of Parent/Guardian</Label>
                                    </Col>
                                        <Col xs="12" md="9">
                                        <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                                        <FormText className="help-block">Please enter your email</FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="appnum-input">Relationship with the applicant</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="appnum-input" name="appnum-input" placeholder="Relationship with the applicant" />
                                        {/* <FormText color="danger">This is a help text</FormText> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="appnum-input">Address for Communication</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="appnum-input" name="appnum-input" placeholder="Address for Communication" />
                                        {/* <FormText color="danger">This is a help text</FormText> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="email-input">Email ID </Label>
                                    </Col>
                                        <Col xs="12" md="9">
                                        <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                                        {/* <FormText className="help-block">Please enter your email</FormText> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="parphone-input">Mobile no of the Student</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="tel" id="parphone-input" name="parphone-input" placeholder="Phone Number" />
                                        {/* <FormText color="danger">Parent Phone is required</FormText> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="FatherOcc-input">Occupation of the Parent/Guardian</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="FatherOcc-input" name="FatherOcc-input" placeholder="Occupation of the Parent/Guardian" />
                                        {/* <FormText color="danger">Father's Occupation is required</FormText> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="FatherOcc-input">Annual Income</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="FatherOcc-input" name="FatherOcc-input" placeholder="Annual Income" />
                                        {/* <FormText color="danger">Father's Occupation is required</FormText> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="TrueFalse">Whether A Resident Of Kerala</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="TrueFalse" id="TrueFalse">
                                            <option value="0">Please select</option>
                                            {
                                                this.state.TrueFalse.map((item, index)=>{
                                                    return(
                                                        <option value={item.value}>{item.label}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Taluk-input">Taluk</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="Taluk-input" name="Taluk-input" placeholder="Taluk" />
                                        {/* <FormText color="danger">Father's Occupation is required</FormText> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="District-input">District</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="District-input" name="District-input" placeholder="District" />
                                        {/* <FormText color="danger">Father's Occupation is required</FormText> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="Institution-input">Name Of Institution</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="Institution-input" name="Institution-input" placeholder="Institution" />
                                        {/* <FormText color="danger">Father's Occupation is required</FormText> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="AcademicStudy-input">Academic year of study</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="AcademicStudy-input" name="AcademicStudy-input" placeholder="Academic year of study" />
                                        {/* <FormText color="danger">Father's Occupation is required</FormText> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="regnumexam-input">Register number of the examination passed</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="regnumexam-input" name="regnumexam-input" placeholder="Register number" />
                                        {/* <FormText color="danger">Father's Occupation is required</FormText> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="passedfailed-input">If the student passed or failed in Plus two</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="TrueFalse" id="TrueFalse">
                                            <option value="0">Please select</option>
                                            {
                                                this.state.TrueFalse.map((item, index)=>{
                                                    return(
                                                        <option value={item.value}>{item.label}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="passedfailed-input">Number of chances taken for passing examination</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="TrueFalse" id="TrueFalse">
                                            <option value="0">Please select</option>
                                            {
                                                this.state.NumberList.map((item, index)=>{
                                                    return(
                                                        <option value={item.value}>{item.label}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label>Are you the participant of NCC or NSS</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="TrueFalseparticipant" id="TrueFalseparticipant">
                                            <option value="0">Please select</option>
                                            {
                                                this.state.TrueFalse.map((item, index)=>{
                                                    return(
                                                        <option value={item.value}>{item.label}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="3">
                                        <Label>Have you represented National/State/University in Sports or Games</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="TrueFalsesports" id="TrueFalsesports">
                                            <option value="0">Please select</option>
                                            {
                                                this.state.TrueFalse.map((item, index)=>{
                                                    return(
                                                        <option value={item.value}>{item.label}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="3">
                                        <Label>Are you a physically handicapped people</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="TrueFalsehandicapped" id="TrueFalsehandicapped">
                                            <option value="0">Please select</option>
                                            {
                                                this.state.TrueFalse.map((item, index)=>{
                                                    return(
                                                        <option value={item.value}>{item.label}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="3">
                                        <Label>Are you a children of EX Service man</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="TrueFalseexservice" id="TrueFalseexservice">
                                            <option value="0">Please select</option>
                                            {
                                                this.state.TrueFalse.map((item, index)=>{
                                                    return(
                                                        <option value={item.value}>{item.label}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="3">
                                        <Label> Residence proposed whether in College hostel/ with parent or guardian any other place(give exact location)</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="text" id="exactlocation-input" name="exactlocation-input" placeholder="Location" />
                                        {/* <FormText color="danger">Father's Occupation is required</FormText> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="4">
                                        <Label color="grey">Courses To Which Admission Is Sought</Label>
                                    </Col>
                                    <Col xs="12" md="8">
                                        {/* <Input type="text" id="exactlocation-input" name="exactlocation-input" placeholder="Location" /> */}
                                        {/* <FormText color="danger">Father's Occupation is required</FormText> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label>First Preference</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="FirstPreference" id="FirstPreference">
                                            <option value="0">Please select</option>
                                            {
                                                this.state.TrueFalse.map((item, index)=>{
                                                    return(
                                                        <option value={item.value}>{item.label}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>  
                                <FormGroup row>
                                    <Col md="3">
                                        <Label>Second Preference</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="SecondPreference" id="SecondPreference">
                                            <option value="0">Please select</option>
                                            {
                                                this.state.TrueFalse.map((item, index)=>{
                                                    return(
                                                        <option value={item.value}>{item.label}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>  
                                <FormGroup row>
                                    <Col md="3">
                                        <Label>Third Preference</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="ThridPreference" id="ThridPreference">
                                            <option value="0">Please select</option>
                                            {
                                                this.state.TrueFalse.map((item, index)=>{
                                                    return(
                                                        <option value={item.value}>{item.label}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>  
                                <FormGroup row>
                                    <Col md="3">
                                        <Label>Language Under Part-II</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="LanguageUnderPart2" id="LanguageUnderPart2">
                                            <option value="0">Please select</option>
                                            {
                                                this.state.TrueFalse.map((item, index)=>{
                                                    return(
                                                        <option value={item.value}>{item.label}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>  
                                <FormGroup row>
                                    <Col md="12">
                                        <Label color="grey">Details Of Mark Awarded in The +2 Or Equivalent Examination (If the Applicant has Passed Any Qualifying Exam Other Than +2 Government of Kerala Attested Copy Of The Relevant Mark List Should Also Be Attached)</Label>
                                    </Col>
                                </FormGroup>
                            </Form>
                            <FormGroup row>
                                <Col md="4"><Label color="grey">Subject</Label></Col>
                                <Col md="2"><Label color="grey">Marks Obtained</Label></Col>
                                <Col md="2"><Label color="grey">Maximum Marks</Label></Col>
                                <Col md="4"><Label color="grey">Grade</Label></Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="4"><Label color="grey">Part I-English</Label></Col>
                                <Col md="2"><Label color="grey"></Label></Col>
                                <Col md="2"><Label color="grey"></Label></Col>
                                <Col md="4">
                                    <Input type="select" name="LanguageUnderPart2" id="LanguageUnderPart2">
                                        <option value="0">Please select</option>
                                        {
                                            this.state.GradeList.map((item, index)=>{
                                                return(
                                                    <option value={item.value}>{item.label}</option>
                                                )
                                            })
                                        }
                                    </Input>
                                </Col>
                            </FormGroup>
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

export default ApplicationForm;

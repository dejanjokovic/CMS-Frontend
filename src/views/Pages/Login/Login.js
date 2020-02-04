import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import {clDarkBG} from "../../../utils/colors";

class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center" style={{backgroundColor:clDarkBG}}>
        <h1 style={{textAlign:'center', color:'#F5F5F5', position:'absolute', top:200, left: "50%", transform: "translate(-50%, -50%)"}}>College Management System</h1>
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="text" placeholder="Username" autoComplete="username" />
              </InputGroup>
              <div style={{height:10}}></div>
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="password" placeholder="Password" autoComplete="current-password" />
              </InputGroup>
              <Link style={{width:"100%"}} className="btn-dropbox btn-brand mr-1 mb-1 btn btn-secondary btn-md">
                <span>Login</span>
              </Link>
                {/* <Col xs="6" className="text-right">
                  <Button color="link" className="px-0">Forgot password?</Button>
                </Col> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;

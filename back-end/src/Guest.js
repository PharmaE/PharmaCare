import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  Form,
  Col,
  ControlLabel,
  Button,
} from "react-bootstrap";
import "../App.css";
let axios = require("axios");
class Guest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestFirstName: undefined,
      guestLastName: undefined,
      guestPhoneNumber: undefined,
      guestPresNumber: undefined,
    };
    this.handleguestFirstName = this.handleguestFirstName.bind(this);
    this.handleguestLastName = this.handleguestLastName.bind(this);
    this.handleguestPhoneNumber = this.handleguestPhoneNumber.bind(this);
    this.handleguestPresNumber = this.handleguestPresNumber.bind(this);
    this.submitPres = this.submitPres.bind(this);
  }
  handleguestFirstName(e) {
    this.setState({ guestFirstName: e.target.value });
  }
  handleguestLastName(e) {
    this.setState({ guestLastName: e.target.value });
  }
  handleguestPhoneNumber(e) {
    this.setState({ guestPhoneNumber: e.target.value });
  }
  handleguestPresNumber(e) {
    this.setState({ guestPresNumber: e.target.value });
  }
  render() {
    return (
      <div className="guestForm">
        <h1>Place Prescription</h1>
        <Form horizontal method="post">
          <FormGroup controlId="formHorizontalFirstName">
            <Col componentClass={ControlLabel} sm={2}>
              First Name
            </Col>
            <Col sm={6}>
              <FormControl
                onChange={this.handleguestFirstName}
                name="guestFirstName"
                type="text"
                placeholder="Jane"
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalLastName">
            <Col componentClass={ControlLabel} sm={2}>
              Last Name
            </Col>
            <Col sm={6}>
              <FormControl
                onChange={this.handleguestLastName}
                name="guestLastName"
                type="text"
                placeholder="Smith"
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPhoneNumber">
            <Col componentClass={ControlLabel} sm={2}>
              Phone Number
            </Col>
            <Col sm={6}>
              <FormControl
                onChange={this.handleguestPhoneNumber}
                name="guestPhoneNumber"
                type="phonenumber"
                placeholder="000-000-0000"
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalRxNumber">
            <Col componentClass={ControlLabel} sm={2}>
              Prescription Number
            </Col>
            <Col sm={6}>
              <FormControl
                onChange={this.handleguestPresNumber}
                name="guestPrecNumber"
                type="RxNumber"
                placeholder="0000000-00000"
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={10}>
              <Button onClick={this.submitPres} type="submit">
                Submit Prescription
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
  submitPres() {
    var guestPres = this.state;
    axios.post("http://localhost:9000/api/bears", guestPres).catch((err) => {
      console.log(err);
    });
  }
}

export default Guest;

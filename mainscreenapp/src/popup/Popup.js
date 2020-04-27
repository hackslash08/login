import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { API_ENDPOINT } from "../config/config";
import { toast, Slide } from "react-toastify";

export class Popup extends Component {
  state = {
    m: "",
    user: "",
    data: [],
    projectName: "",
  };

  componentDidMount() {
    this.state.m = localStorage.getItem("firstname");
    this.setState({
      user: this.state.m,
    });
    console.log(this.state.user);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.projectName.value);
    const { data, user, projectName } = this.state;
    const postData = {
      data: data,
      user: user,
      projectName: projectName,
    };
    console.log(postData);
    axios
      .post(`${API_ENDPOINT}api/create/projects`, postData, {
        data: postData,
      })
      .then((res) => {
        console.log("Success");
      });
    this.setState({
      user: "",
      projectName: "",
    });
    toast.success("Successfully submitted", { containerId: "SuCCESS" });
  };

  handleNameChange = (evt) => {
    console.log(evt.target.value);
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="projectName">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="projectName"
                      required
                      placeholder="projectName"
                      onChange={this.handleNameChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button variant="danger" type="submit">
                      Add Project
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide} variant="danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

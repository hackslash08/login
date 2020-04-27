/* eslint-disable */
import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import ReactDOM from "react-dom";
import "./form2.scss";
import axios from "axios";
import { API_ENDPOINT } from "../config/config";

export default class Form2 extends React.Component {
  state = {
    data: [],
    Tech_Virtualization1_Score: "",
    Tech_Virtualization1_Rating: "",
    Tech_Virtualization2_Score: "",
    Tech_Virtualization2_Rating: "",
    Tech_Legacy1_Score: "",
    Tech_Legacy1_Rating: "",
    Tech_Legacy2_Score: "",
    Tech_Legacy2_Rating: "",
    Tech_AppDepend1_Score: "",
    Tech_AppDepend1_Rating: "",
    Tech_AppDepend2_Score: "",
    Tech_AppDepend2_Rating: "",
    Tech_users_Score: "",
    Tech_users_Rating: "",
    Tech_LifecycMan1_Score: "",
    Tech_LifecycMan1_Rating: "",
    Tech_LifecycMan2_Score: "",
    Tech_LifecycMan2_Rating: "",
    Tech_Licensing1_Score: "",
    Tech_Licensing1_Rating: "",
    Tech_Licensing2_Score: "",
    Tech_Licensing2_Rating: "",
    Tech_Network1_Score: "",
    Tech_Network1_Rating: "",
    Tech_Network2_Score: "",
    Tech_Network2_Rating: "",
    Tech_Network3_Score: "",
    Tech_Network3_Rating: "",
    Tech_Network4_Score: "",
    Tech_Network4_Rating: "",
    Tech_Workload1_Score: "",
    Tech_Workload1_Rating: "",
    Tech_Workload2_Score: "",
    Tech_Workload2_Rating: "",
    Tech_Architecture1_Score: "",
    Tech_Architecture1_Rating: "",
    Tech_Architecture2_Score: "",
    Tech_Architecture2_Rating: "",
    Tech_Architecture3_Score: "",
    Tech_Architecture3_Rating: "",
    check: false,
  };

  getData() {
    const checkId = localStorage.getItem("projId");
    axios
      .get(`${API_ENDPOINT}api/get/projectdata?id=${checkId}`)
      .then((res) => {
        this.setState({
          data: res.data.data,
        });
      });
    console.log(this.state.data);
  }

  componentDidMount() {
    // const projId = localStorage.getItem("projId");
    // console.log(projId);
    this.getData();
    if (this.state.data.Tech_Virtualization1_Score != null) {
      this.setState({
        check: true,
      });
    }
    console.log(this.state.check);
    if (this.state.check) {
      this.setState({
        Tech_Virtualization1_Score: this.state.data.Tech_Virtualization1_Score,
        Tech_Virtualization1_Rating: this.state.data
          .Tech_Virtualization1_Rating,
        Tech_Virtualization2_Score: this.state.data.Tech_Virtualization2_Score,
        Tech_Virtualization2_Rating: this.state.data
          .Tech_Virtualization2_Rating,
        Tech_Legacy1_Score: this.state.data.Tech_Legacy1_Score,
        Tech_Legacy1_Rating: this.state.data.Tech_Legacy1_Rating,
        Tech_Legacy2_Score: this.state.data.Tech_Legacy2_Score,
        Tech_Legacy2_Rating: this.state.data.Tech_Legacy2_Rating,
        Tech_AppDepend1_Score: this.state.data.Tech_AppDepend1_Score,
        Tech_AppDepend1_Rating: this.state.data.Tech_AppDepend1_Rating,
        Tech_AppDepend2_Score: this.state.data.Tech_AppDepend2_Score,
        Tech_AppDepend2_Rating: this.state.data.Tech_AppDepend2_Rating,
        Tech_users_Score: this.state.data.Tech_users_Score,
        Tech_users_Rating: this.state.data.Tech_users_Rating,
        Tech_LifecycMan1_Score: this.state.data.Tech_LifecycMan1_Score,
        Tech_LifecycMan1_Rating: this.state.data.Tech_LifecycMan1_Rating,
        Tech_LifecycMan2_Score: this.state.data.Tech_LifecycMan2_Score,
        Tech_LifecycMan2_Rating: this.state.data.Tech_LifecycMan2_Rating,
        Tech_Licensing1_Score: this.state.data.Tech_Licensing1_Score,
        Tech_Licensing1_Rating: this.state.data.Tech_Licensing1_Rating,
        Tech_Licensing2_Score: this.state.data.Tech_Licensing2_Score,
        Tech_Licensing2_Rating: this.state.data.Tech_Licensing2_Rating,
        Tech_Network1_Score: this.state.data.Tech_Network1_Score,
        Tech_Network1_Rating: this.state.data.Tech_Network1_Rating,
        Tech_Network2_Score: this.state.data.Tech_Network2_Score,
        Tech_Network2_Rating: this.state.data.Tech_Network2_Rating,
        Tech_Network3_Score: this.state.data.Tech_Network3_Score,
        Tech_Network3_Rating: this.state.data.Tech_Network3_Rating,
        Tech_Network4_Score: this.state.data.Tech_Network4_Score,
        Tech_Network4_Rating: this.state.data.Tech_Network4_Rating,
        Tech_Workload1_Score: this.state.data.Tech_Workload1_Score,
        Tech_Workload1_Rating: this.state.data.Tech_Workload1_Rating,
        Tech_Workload2_Score: this.state.data.Tech_Workload2_Score,
        Tech_Workload2_Rating: this.state.data.Tech_Workload2_Rating,
        Tech_Architecture1_Score: this.state.data.Tech_Architecture1_Score,
        Tech_Architecture1_Rating: this.state.data.Tech_Architecture1_Rating,
        Tech_Architecture2_Score: this.state.data.Tech_Architecture2_Score,
        Tech_Architecture2_Rating: this.state.data.Tech_Architecture2_Rating,
        Tech_Architecture3_Score: this.state.data.Tech_Architecture3_Score,
        Tech_Architecture3_Rating: this.state.data.Tech_Architecture3_Rating,
      });
    }
  }

  handleEdit = (e) => {
    e.preventDefault();
    const checkId = localStorage.getItem("projId");
    const {
      data,
      Tech_Virtualization1_Score,
      Tech_Virtualization1_Rating,
      Tech_Virtualization2_Score,
      Tech_Virtualization2_Rating,
      Tech_Legacy1_Score,
      Tech_Legacy1_Rating,
      Tech_Legacy2_Score,
      Tech_Legacy2_Rating,
      Tech_AppDepend1_Score,
      Tech_AppDepend1_Rating,
      Tech_AppDepend2_Score,
      Tech_AppDepend2_Rating,
      Tech_users_Score,
      Tech_users_Rating,
      Tech_LifecycMan1_Score,
      Tech_LifecycMan1_Rating,
      Tech_LifecycMan2_Score,
      Tech_LifecycMan2_Rating,
      Tech_Licensing1_Score,
      Tech_Licensing1_Rating,
      Tech_Licensing2_Score,
      Tech_Licensing2_Rating,
      Tech_Network1_Score,
      Tech_Network1_Rating,
      Tech_Network2_Score,
      Tech_Network2_Rating,
      Tech_Network3_Score,
      Tech_Network3_Rating,
      Tech_Network4_Score,
      Tech_Network4_Rating,
      Tech_Workload1_Score,
      Tech_Workload1_Rating,
      Tech_Workload2_Score,
      Tech_Workload2_Rating,
      Tech_Architecture1_Score,
      Tech_Architecture1_Rating,
      Tech_Architecture2_Score,
      Tech_Architecture2_Rating,
      Tech_Architecture3_Score,
      Tech_Architecture3_Rating,
    } = this.state;
    const postData = {
      Tech_Virtualization1_Score: Tech_Virtualization1_Score,
      Tech_Virtualization1_Rating: Tech_Virtualization1_Rating,
      Tech_Virtualization2_Score: Tech_Virtualization2_Score,
      Tech_Virtualization2_Rating: Tech_Virtualization2_Rating,
      Tech_Legacy1_Score: Tech_Legacy1_Score,
      Tech_Legacy1_Rating: Tech_Legacy1_Rating,
      Tech_Legacy2_Score: Tech_Legacy2_Score,
      Tech_Legacy2_Rating: Tech_Legacy2_Rating,
      Tech_AppDepend1_Score: Tech_AppDepend1_Score,
      Tech_AppDepend1_Rating: Tech_AppDepend1_Rating,
      Tech_AppDepend2_Score: Tech_AppDepend2_Score,
      Tech_AppDepend2_Rating: Tech_AppDepend2_Rating,
      Tech_users_Score: Tech_users_Score,
      Tech_users_Rating: Tech_users_Rating,
      Tech_LifecycMan1_Score: Tech_LifecycMan1_Score,
      Tech_LifecycMan1_Rating: Tech_LifecycMan1_Rating,
      Tech_LifecycMan2_Score: Tech_LifecycMan2_Score,
      Tech_LifecycMan2_Rating: Tech_LifecycMan2_Rating,
      Tech_Licensing1_Score: Tech_Licensing1_Score,
      Tech_Licensing1_Rating: Tech_Licensing1_Rating,
      Tech_Licensing2_Score: Tech_Licensing2_Score,
      Tech_Licensing2_Rating: Tech_Licensing2_Rating,
      Tech_Network1_Score: Tech_Network1_Score,
      Tech_Network1_Rating: Tech_Network1_Rating,
      Tech_Network2_Score: Tech_Network2_Score,
      Tech_Network2_Rating: Tech_Network2_Rating,
      Tech_Network3_Score: Tech_Network3_Score,
      Tech_Network3_Rating: Tech_Network3_Rating,
      Tech_Network4_Score: Tech_Network4_Score,
      Tech_Network4_Rating: Tech_Network4_Rating,
      Tech_Workload1_Score: Tech_Workload1_Score,
      Tech_Workload1_Rating: Tech_Workload1_Rating,
      Tech_Workload2_Score: Tech_Workload2_Score,
      Tech_Workload2_Rating: Tech_Workload2_Rating,
      Tech_Architecture1_Score: Tech_Architecture1_Score,
      Tech_Architecture1_Rating: Tech_Architecture1_Rating,
      Tech_Architecture2_Score: Tech_Architecture2_Score,
      Tech_Architecture2_Rating: Tech_Architecture2_Rating,
      Tech_Architecture3_Score: Tech_Architecture3_Score,
      Tech_Architecture3_Rating: Tech_Architecture3_Rating,
    };
    axios
      .put(`${API_ENDPOINT}api/edit/projects?id=${checkId}`, postData, {
        data: postData,
      })
      .then((res) => {
        console.log(res.data);
        this.getData();
        console.log(this.state.data);
      });
  };

  handleNameChange = (evt) => {
    console.log(evt.target.value);
    this.setState({ [evt.target.name]: evt.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="table-responsive">
          <div className="table-wrap">
            <Table striped bordered hover className="table ">
              <thead className="tThead">
                <tr>
                  <th>#</th>
                  <th>CATEGORY</th>
                  <th>QUESTION</th>
                  <th>RATING</th>
                  <th>SCORE</th>
                </tr>
              </thead>
              <tbody className="tablebody">
                <tr>
                  <td>1</td>
                  <td>VIRTUALIZATION</td>
                  <td>Can the application's platform be virtualized?</td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Virtualization1_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Virtualization1_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Virtualization1_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Virtualization1_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>VIRTUALIZATION</td>
                  <td>
                    Does the application have any inherent clustering features?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Virtualization2_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Virtualization2_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Virtualization2_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Virtualization2_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>LEGACY</td>
                  <td>
                    Does the application have any inherent clustering features?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Legacy1_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Legacy1_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Legacy1_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Legacy1_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>LEGACY</td>
                  <td>
                    Is any part of the application code or any of its
                    subcomponents outdated and non-portable?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Legacy2_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Legacy2_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Legacy2_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Legacy2_Score "
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>APPLICATION DEPENDENCIES</td>
                  <td>
                    Does it rely on other applications for its functioning?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_AppDepend1_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_AppDepend1_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_AppDepend1_Score}
                        onChange={this.handleNameChange}
                        name="Tech_AppDepend1_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>6</td>
                  <td>APPLICATION DEPENDENCIES</td>
                  <td>
                    How many integration points are there for this application?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_AppDepend2_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_AppDepend2_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_AppDepend2_Score}
                        onChange={this.handleNameChange}
                        name="Tech_AppDepend2_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>USERS</td>
                  <td>
                    Are the users of the application geographically scattered?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_users_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_users_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_users_Score}
                        onChange={this.handleNameChange}
                        name="Tech_users_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>8</td>
                  <td>LIFECYCLE MANAGEMENT</td>
                  <td>Does the application have any maintenance cycle?</td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_LifecycMan1_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_LifecycMan1_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_LifecycMan1_Score}
                        onChange={this.handleNameChange}
                        name="Tech_LifecycMan1_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>9</td>
                  <td>LIFECYCLE MANAGEMENT</td>
                  <td>Is there application level monitoring?</td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_LifecycMan2_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_LifecycMan2_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_LifecycMan2_Score}
                        onChange={this.handleNameChange}
                        name="Tech_LifecycMan2_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>10</td>
                  <td>LICENSING</td>
                  <td>
                    Will the current licenses within the application stack be
                    valid on a cloud deployment?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Licensing1_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Licensing1_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Licensing1_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Licensing1_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>11</td>
                  <td>LICENSING</td>
                  <td>
                    Are there any sub systems (or the application itself)
                    nearing EoS/EoL?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Licensing2_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Licensing2_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Licensing2_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Licensing2_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>12</td>
                  <td>NETWORK</td>
                  <td>Is it sensitive to network latencies?</td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Network1_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Network1_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Network1_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Network1_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>13</td>
                  <td>NETWORK</td>
                  <td>
                    Can the application handle interruptions in the
                    transactions?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Network2_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Network2_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Network2_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Network2_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>14</td>
                  <td>NETWORK</td>
                  <td>
                    Does it need a special kind of network configuration to
                    work?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Network3_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Network3_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Network3_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Network3_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>15</td>
                  <td>NETWORK</td>
                  <td>
                    Are there non-standard protocols within the components of
                    the application stack?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Network4_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Network4_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Network4_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Network4_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>16</td>
                  <td>WORKLOAD</td>
                  <td>
                    Is the application's workload cyclical (i.e. follows a
                    pattern)?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Workload1_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Workload1_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Workload1_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Workload1_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>17</td>
                  <td>WORKLOAD</td>
                  <td>
                    Is it a high volume, highly transactional application?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Workload2_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Workload2_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Workload2_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Workload2_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>18</td>
                  <td>ARCHITECTURE</td>
                  <td>
                    Mention the high level architecture type of the application
                    from the list
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Architecture1_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Architecture1_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Architecture1_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Architecture1_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>19</td>
                  <td>ARCHITECTURE</td>
                  <td>
                    Are there any hardware/platform/application refresh in
                    pipeline or in-flight?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Architecture2_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Architecture2_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Architecture2_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Architecture2_Score"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>20</td>
                  <td>ARCHITECTURE</td>
                  <td>
                    Are there special middleware/platform configurations for
                    this application?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Architecture3_Rating}
                        onChange={this.handleNameChange}
                        name="Tech_Architecture3_Rating"
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="High">HIGH</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Low">LOW</option>
                      </select>
                    </p>
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Tech_Architecture3_Score}
                        onChange={this.handleNameChange}
                        name="Tech_Architecture3_Score  "
                        className="projectclass"
                      >
                        <option defaultValue>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="Buttons">
          <div>
            <button type="submit" className="small" onClick={this.handleEdit}>
              {" "}
              Save{" "}
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
//export default Form2;

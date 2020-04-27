/* eslint-disable */
import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import ReactDOM from "react-dom";
import "./form.scss";
import HeaderLand from "../Heading/HeaderLand";
import axios from "axios";
import { API_ENDPOINT } from "../config/config";

class Form extends Component {
  state = {
    data: [],
    Risk_Compliance_Score: "",
    Risk_Compliance_Rating: "",
    Risk_Standards1_Score: "",
    Risk_Standards1_Rating: "",
    Risk_Standards2_Score: "",
    Risk_Standards2_Rating: "",
    Risk_DataGov1_Score: "",
    Risk_DataGov1_Rating: "",
    Risk_DataGov2_Score: "",
    Risk_DataGov2_Rating: "",
    Risk_DataGov3_Score: "",
    Risk_DataGov3_Rating: "",
    Risk_DataGov4_Score: "",
    Risk_DataGov4_Rating: "",
    Risk_InfoSec1_Score: "",
    Risk_InfoSec1_Rating: "",
    Risk_InfoSec2_Score: "",
    Risk_InfoSec2_Rating: "",
    Risk_InfoSec3_Score: "",
    Risk_InfoSec3_Rating: "",
    Risk_BusCon1_Score: "",
    Risk_BusCon1_Rating: "",
    Risk_BusCon2_Score: "",
    Risk_BusCon2_Rating: "",
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
    if (this.state.data.Risk_Compliance_Score != null) {
      this.setState({
        check: true,
      });
    }
    console.log(this.state.check);
    if (this.state.check) {
      this.setState({
        Risk_Compliance_Score: this.state.data.Risk_Compliance_Score,
        Risk_Compliance_Rating: this.state.data.Risk_Compliance_Rating,
        Risk_Standards1_Score: this.state.data.Risk_Standards1_Score,
        Risk_Standards1_Rating: this.state.data.Risk_Standards1_Rating,
        Risk_Standards2_Score: this.state.data.Risk_Standards2_Score,
        Risk_Standards2_Rating: this.state.data.Risk_Standards2_Rating,
        Risk_DataGov1_Score: this.state.data.Risk_DataGov1_Score,
        Risk_DataGov1_Rating: this.state.data.Risk_DataGov1_Rating,
        Risk_DataGov2_Score: this.state.data.Risk_DataGov2_Score,
        Risk_DataGov2_Rating: this.state.data.Risk_DataGov2_Rating,
        Risk_DataGov3_Score: this.state.data.Risk_DataGov3_Score,
        Risk_DataGov3_Rating: this.state.data.Risk_DataGov3_Rating,
        Risk_DataGov4_Score: this.state.data.Risk_DataGov4_Score,
        Risk_DataGov4_Rating: this.state.data.Risk_DataGov4_Rating,
        Risk_InfoSec1_Score: this.state.data.Risk_InfoSec1_Score,
        Risk_InfoSec1_Rating: this.state.data.Risk_InfoSec1_Rating,
        Risk_InfoSec2_Score: this.state.data.Risk_InfoSec2_Score,
        Risk_InfoSec2_Rating: this.state.data.Risk_InfoSec2_Rating,
        Risk_InfoSec3_Score: this.state.data.Risk_InfoSec3_Score,
        Risk_InfoSec3_Rating: this.state.data.Risk_InfoSec3_Rating,
        Risk_BusCon1_Score: this.state.data.Risk_BusCon1_Score,
        Risk_BusCon1_Rating: this.state.data.Risk_BusCon1_Rating,
        Risk_BusCon2_Score: this.state.data.Risk_BusCon2_Score,
        Risk_BusCon2_Rating: this.state.data.Risk_BusCon2_Rating,
      });
    }
  }

  handleEdit = (e) => {
    e.preventDefault();
    const checkId = localStorage.getItem("projId");
    const {
      data,
      Risk_Compliance_Score,
      Risk_Compliance_Rating,
      Risk_Standards1_Score,
      Risk_Standards1_Rating,
      Risk_Standards2_Score,
      Risk_Standards2_Rating,
      Risk_DataGov1_Score,
      Risk_DataGov1_Rating,
      Risk_DataGov2_Score,
      Risk_DataGov2_Rating,
      Risk_DataGov3_Score,
      Risk_DataGov3_Rating,
      Risk_DataGov4_Score,
      Risk_DataGov4_Rating,
      Risk_InfoSec1_Score,
      Risk_InfoSec1_Rating,
      Risk_InfoSec2_Score,
      Risk_InfoSec2_Rating,
      Risk_InfoSec3_Score,
      Risk_InfoSec3_Rating,
      Risk_BusCon1_Score,
      Risk_BusCon1_Rating,
      Risk_BusCon2_Score,
      Risk_BusCon2_Rating,
    } = this.state;
    const postData = {
      Risk_Compliance_Score: Risk_Compliance_Score,
      Risk_Compliance_Rating: Risk_Compliance_Rating,
      Risk_Standards1_Score: Risk_Standards1_Score,
      Risk_Standards1_Rating: Risk_Standards1_Rating,
      Risk_Standards2_Score: Risk_Standards2_Score,
      Risk_Standards2_Rating: Risk_Standards2_Rating,
      Risk_DataGov1_Score: Risk_DataGov1_Score,
      Risk_DataGov1_Rating: Risk_DataGov1_Rating,
      Risk_DataGov2_Score: Risk_DataGov2_Score,
      Risk_DataGov2_Rating: Risk_DataGov2_Rating,
      Risk_DataGov3_Score: Risk_DataGov3_Score,
      Risk_DataGov3_Rating: Risk_DataGov3_Rating,
      Risk_DataGov4_Score: Risk_DataGov4_Score,
      Risk_DataGov4_Rating: Risk_DataGov4_Rating,
      Risk_InfoSec1_Score: Risk_InfoSec1_Score,
      Risk_InfoSec1_Rating: Risk_InfoSec1_Rating,
      Risk_InfoSec2_Score: Risk_InfoSec2_Score,
      Risk_InfoSec2_Rating: Risk_InfoSec2_Rating,
      Risk_InfoSec3_Score: Risk_InfoSec3_Score,
      Risk_InfoSec3_Rating: Risk_InfoSec3_Rating,
      Risk_BusCon1_Score: Risk_BusCon1_Score,
      Risk_BusCon1_Rating: Risk_BusCon1_Rating,
      Risk_BusCon2_Score: Risk_BusCon2_Score,
      Risk_BusCon2_Rating: Risk_BusCon2_Rating,
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
        <HeaderLand />

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
                  <td>COMPLIANCE</td>
                  <td>
                    Are there any regulatory compliance requirements for this
                    application?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Risk_Compliance_Rating}
                        onChange={this.handleNameChange}
                        name="Risk_Compliance_Rating"
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
                        value={this.state.Risk_Compliance_Score}
                        onChange={this.handleNameChange}
                        name="Risk_Compliance_Score"
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
                  <td>STANDARDS</td>
                  <td>
                    Are there any specific global standards in effect for the
                    application?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Risk_Standards1_Rating}
                        onChange={this.handleNameChange}
                        name="Risk_Standards1_Rating"
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
                        value={this.state.Risk_Standards1_Score}
                        onChange={this.handleNameChange}
                        name="Risk_Standards1_Score"
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
                  <td>STANDARDS</td>
                  <td>Are there SLAs tied to the application?</td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Risk_Standards2_Rating}
                        onChange={this.handleNameChange}
                        name="Risk_Standards2_Rating"
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
                        value={this.state.Risk_Standards2_Score}
                        onChange={this.handleNameChange}
                        name="Risk_Standards2_Score"
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
                  <td>DATA GOVERNANCE</td>
                  <td>
                    Does the application data have any integrity constraints?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Risk_DataGov1_Rating}
                        onChange={this.handleNameChange}
                        name="Risk_DataGov1_Rating"
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
                        value={this.state.Risk_DataGov1_Score}
                        onChange={this.handleNameChange}
                        name="Risk_DataGov1_Score"
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
                  <td>DATA GOVERNANCE</td>
                  <td>
                    Are there measures in place to improve and maintain data
                    quality?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Risk_DataGov2_Rating}
                        onChange={this.handleNameChange}
                        name="Risk_DataGov2_Rating"
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
                        value={this.state.Risk_DataGov2_Score}
                        onChange={this.handleNameChange}
                        name="Risk_DataGov2_Score"
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
                  <td>DATA GOVERNANCE</td>
                  <td>Should the data be stored in a specific location?</td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Risk_DataGov3_Rating}
                        onChange={this.handleNameChange}
                        name="Risk_DataGov3_Rating"
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
                        value={this.state.Risk_DataGov3_Score}
                        onChange={this.handleNameChange}
                        name="Risk_DataGov3_Score"
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
                  <td>DATA GOVERNANCE</td>
                  <td>
                    Do the application and its information go through audits?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Risk_DataGov4_Rating}
                        onChange={this.handleNameChange}
                        name="Risk_DataGov4_Rating"
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
                        value={this.state.Risk_DataGov4_Score}
                        onChange={this.handleNameChange}
                        name="Risk_DataGov4_Score"
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
                  <td>INFORMATION SECURITY</td>
                  <td>
                    Does the application handle customer or other type of
                    sensitive/critical data?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Risk_InfoSec1_Rating}
                        onChange={this.handleNameChange}
                        name="Risk_InfoSec1_Rating"
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
                        value={this.state.Risk_InfoSec1_Score}
                        onChange={this.handleNameChange}
                        name="Risk_InfoSec1_Score"
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
                  <td>INFORMATION SECURITY</td>
                  <td>
                    Are there hardware/software security tools utilized to
                    secure the application and its data?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Risk_InfoSec2_Rating}
                        onChange={this.handleNameChange}
                        name="Risk_InfoSec2_Rating"
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
                        value={this.state.Risk_InfoSec2_Score}
                        onChange={this.handleNameChange}
                        name="Risk_InfoSec2_Score"
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
                  <td>INFORMATION SECURITY</td>
                  <td>Is the data encrypted while in transit and at rest?</td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Risk_InfoSec3_Rating}
                        onChange={this.handleNameChange}
                        name="Risk_InfoSec3_Rating"
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
                        value={this.state.Risk_InfoSec3_Score}
                        onChange={this.handleNameChange}
                        name="Risk_InfoSec3_Score"
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
                  <td>BUSINESS CONTINUITY</td>
                  <td>
                    Does the application have stringent BCP/DR requirements?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Risk_BusCon1_Rating}
                        onChange={this.handleNameChange}
                        name="Risk_BusCon1_Rating"
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
                        value={this.state.Risk_BusCon1_Score}
                        onChange={this.handleNameChange}
                        name="Risk_BusCon1_Score"
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
                  <td>BUSINESS CONTINUITY</td>
                  <td>
                    Are the RTO, RPO and DR requirements well documented for the
                    application?
                  </td>
                  <td>
                    <p>
                      <select
                        style={{ marginTop: "15px" }}
                        value={this.state.Risk_BusCon2_Rating}
                        onChange={this.handleNameChange}
                        name="Risk_BusCon2_Rating"
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
                        value={this.state.Risk_BusCon2_Score}
                        onChange={this.handleNameChange}
                        name="Risk_BusCon2_Score"
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
export default Form;

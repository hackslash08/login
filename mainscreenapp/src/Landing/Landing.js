import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import ReactDOM from "react-dom";
import "./Land.scss";
import Del from "../Images/61848.png";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Popup } from "../popup/Popup";
import HeaderLand from "../Heading/HeaderLand";
import axios from "axios";
import { API_ENDPOINT } from "../config/config";

//import axios from "axios";

// import Popup from "../popup/popup";

// import closeIcon from "../../assets/error.png"
// import viewicon from "../../assets/view.png";

//import OutsideClickHandler from 'react-outside-click-handler';
//import { API_ENDPOINT } from "../config/config";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { popupShow: false };
  }

  state = {
    data: [],
    user: "",
    m: "",
  };
  componentDidMount() {
    this.state.m = localStorage.getItem("firstname");
    // this.setState({
    //   user: this.state.m,
    // });
    this.getData();
  }
  // componentDidUpdate(){
  //   this.getData();
  // }

  getData() {
    axios
      .get(`${API_ENDPOINT}api/get/projects?user=${this.state.m}`, {})
      .then((res) => {
        console.log(res.data.data, this.state.m);
        this.setState({
          data: res.data.data,
        });
        console.log(this.state.data);
      });
  }

  handleDeleteProject = (id) => {
    axios.delete(`${API_ENDPOINT}api/delete/projects?id=${id}`).then((res) => {
      console.log(res.data);
      this.getData();
      console.log(this.state.data);
    });
  };

  handleEdit = (id) => {
    localStorage.setItem("projId", id);
    console.log({ id });
  };

  render() {
    let popupClose = () => {
      this.getData();
      this.setState({ popupShow: false });
    };
    return (
      <React.Fragment>
        <HeaderLand />
        <ButtonToolbar>
          <Button
            variant="danger"
            onClick={() => this.setState({ popupShow: true })}
            style={{
              marginTop: "2%",
              marginLeft: "5%",
              backgroundColor: "#aa2417",
            }}
          >
            Add Project
          </Button>

          <Popup show={this.state.popupShow} onHide={popupClose} />
        </ButtonToolbar>
        <div className="table-responsive">
          <div className="table-wrap ">
            <Table striped bordered hover className="table ">
              <thead className="tThead">
                <tr>
                  <th>Project</th>
                  <th>Risk</th>
                  <th>Technology</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="tablebody">
                {this.state.data == undefined &&
                  this.props.location.state.detail.map((projects) => (
                    <tr key={projects._id}>
                      <th>{projects.projectName}</th>
                      <th>
                        <a
                          href="form"
                          onClick={this.handleEdit.bind(this, projects._id)}
                        >
                          View
                        </a>
                      </th>
                      <th>
                        <a
                          href="form2"
                          onClick={this.handleEdit.bind(this, projects._id)}
                        >
                          View
                        </a>
                      </th>
                      <th>
                        <a href="#">
                          <img
                            src={Del}
                            style={{ height: "5%" }}
                            onClick={this.handleDeleteProject.bind(
                              this,
                              projects._id
                            )}
                          />
                        </a>
                      </th>
                    </tr>
                  ))}
                {this.state.data != undefined &&
                  this.state.data.map((projects) => (
                    <tr key={projects._id}>
                      <th>{projects.projectName}</th>
                      <th>
                        <a
                          href="form"
                          onClick={this.handleEdit.bind(this, projects._id)}
                        >
                          View
                        </a>
                      </th>
                      <th>
                        <a
                          href="form2"
                          onClick={this.handleEdit.bind(this, projects._id)}
                        >
                          View
                        </a>
                      </th>
                      <th>
                        <a href="#">
                          <img
                            src={Del}
                            style={{ height: "5%" }}
                            onClick={this.handleDeleteProject.bind(
                              this,
                              projects._id
                            )}
                          />
                        </a>
                      </th>
                    </tr>
                  ))}

                {/* <tr>{this.props.location.state.detail}</tr> */}
              </tbody>
            </Table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;

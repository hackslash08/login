import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "./HeaderLand.scss";
import logo from "../Images/pwc.png";
import logout from "../Images/logout.png";
import auth from "../Auth/auth";
import { withRouter } from "react-router-dom";
class HeaderLand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      firstName: "",
    };
  }

  componentDidMount() {
    const userName = localStorage.getItem("username");
    const firstName = localStorage.getItem("firstname");
    this.setState({
      userName,
      firstName,
    });
  }
  handlelogout = () => {
    auth.logout(() => {
      this.props.history.push("/");
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <Navbar className="Navbar">
            <Navbar.Brand>
              {" "}
              <img alt="Logo" className="headerlogo" src={logo}></img>
            </Navbar.Brand>
            <Navbar.Toggle />
            {/* <Navbar.Text className="timsheet"> */}
            <p> Cloud Profiler</p>
            {/* </Navbar.Text> */}
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="padding">
                <p>{this.state.firstName}</p>
              </Navbar.Text>
              <Navbar.Text className="logoutlogo">
                <img onClick={this.handlelogout} src={logout} />
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}

export default HeaderLand;

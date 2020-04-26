
import React from 'react';
import logo from '../logo.svg';

import server from "../Images/server.png";
import cp from "../Images/cp.png";
import cma from "../Images/cma.png";
import inv from "../Images/inv.png";
import dev from "../Images/dev.png";
import its from "../Images/its.png";
import kub from "../Images/kub.png";
import ira from "../Images/ira.png";
import cont from "../Images/cont.png";
import ref from "../Images/ref.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,Form, FormControl } from 'react-bootstrap';
import Card from "react-bootstrap/Card";  
import Header from "../Heading/header";
function Landing() {

  const mystyle = {
    border: "1px solid #eee",
    boxShadow: "0 2px 2px #ccc",
    width: "200px",
    height: "220px",
    padding: "20px",
    marginTop: "40px",
    marginLeft:"20px",
    float: "left"
  };
  

  const mystyle1 = {
    width: 100,
    height: 100,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  };

  const buttonstyle = {
    marginTop: "20px"
   
  };
  // const row1 = {
  //   marginLeft: "45px",
  // };
  // const row2 = {
  //   marginLeft: "170px",
  // };
  return (
    <div className="App">
        <Header></Header>
      
    
        <div>
        <Card style={mystyle}>
        <Card.Img variant="top" src={cp} style={mystyle1} />
        
            <Button variant="danger" block style = {buttonstyle}>Cloud Profiler</Button>
        
        </Card>

        <Card style={mystyle}>
        <Card.Img variant="top" src={ira} style={mystyle1} />
        
            <Button variant="danger" block style = {buttonstyle}>iRAF</Button>
        
        </Card>

        <Card style={mystyle}>
        <Card.Img variant="top" src={cma} style={mystyle1} />
        
            <Button variant="danger" block style = {buttonstyle}>Cloud Maturity Assessment</Button>
        
        </Card>

        <Card style={mystyle}>
        <Card.Img variant="top" src={dev} style={mystyle1} />
        
            <Button variant="danger" block style = {buttonstyle}>Dev Ops Tools</Button>
        
        </Card>

  
        <Card style={mystyle}>
        <Card.Img variant="top" src={inv} style={mystyle1} />
        
            <Button variant="danger" block style = {buttonstyle}>Inventory Tool</Button>
        
        </Card>
        </div>
        <div>

        <Card style={mystyle}>
        <Card.Img variant="top" src={its} style={mystyle1} />
        
            <Button variant="danger" block style = {buttonstyle}>IT Service Management</Button>
        
        </Card>

        <Card style={mystyle}>
        <Card.Img variant="top" src={ref} style={mystyle1} />
        
            <Button variant="danger" block style = {buttonstyle}>Cloud Ref. Architecture</Button>
        
        </Card>

        <Card style={mystyle}>
        <Card.Img variant="top" src={kub} style={mystyle1} />
        
            <Button variant="danger" block style = {buttonstyle}>Kubernetes Tools</Button>
        
        </Card>
        <Card style={mystyle}>
        <Card.Img variant="top" src={cont} style={mystyle1} />
        
            <Button variant="danger" block style = {buttonstyle}>Contractor Timesheet</Button>
        
        </Card>
        </div>



    </div>
  );
}

export default Landing;

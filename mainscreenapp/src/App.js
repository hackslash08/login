import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Landing/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./Login/Login";
// import LatestCalendar from "./components/newtimesheet/newtimesheet";
import Register from "./Register/register";
import {ProtectedRoute} from "./privateRoute/privateRoute";


function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <ProtectedRoute exact path="/home" component={Home} />

                    <Route path="/newuser" component={Register} />
                    {/* <Route path="/Admin" component={Admin} /> */}
                    {/* <ProtectedRoute path="/user" component={LatestCalendar} /> */}
                </Switch>
            </div>
        </Router>
    )
}

export default App;

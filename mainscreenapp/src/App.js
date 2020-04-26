import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Login/Login";
// import LatestCalendar from "./components/newtimesheet/newtimesheet";
import Register from "./Register/register";
import Landing from "./Landing/Landing";
import { ProtectedRoute } from "./privateRoute/privateRoute";
import Form from "./form/form";
import From2 from "./form/form2";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <ProtectedRoute exact path="/Landing" component={Landing} />
          <Route path="/newuser" component={Register} />
          <Route path="/form" component={Form} />
          <Route path="/form2" component={From2} />
          {/* <Route path="/Admin" component={Admin} /> */}
          {/* <ProtectedRoute path="/user" component={LatestCalendar} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

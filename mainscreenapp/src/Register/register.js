import React, { Component } from 'react';
import './register.scss';
import { toast, Slide } from 'react-toastify';
import axios from 'axios';
import { Redirect } from 'react-router';
import logo from "../Images/pwc.png";
import { Navbar } from 'react-bootstrap';
import {API_ENDPOINT} from "../config/config";
toast.configure({
    autoClose: 1500,
    draggable: false,
    transition: Slide,
    //etc you get the idea
});
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastName: "",
            email: "",
            password: "",
            company: "",
            // role: "user",
            // redirect: false,
            // hideMe: false,
            // errorCount: null,
            errors: {
                firstname: '',
                email: '',
                password: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'firstName':
                errors.firstName =
                    value.length < 4
                        ? 'Full Name must be 4 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }
    alrdyuser = () => {
        this.props.history.push('/');
    }
    handleRegister = (event) => {
        event.preventDefault();

        const { firstname, lastname, email, password, company,} = this.state;
        const payload = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            company: company,
            // role: role
        }
        axios.post(`${API_ENDPOINT}api/create/user`, payload)
            .then(res => {
            })
        this.setState({
            formValid: validateForm(this.state.errors),
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            company: "",
            redirect: true,
            
        });
         toast.success('Successfully registred', { containerId: 'ERROR' });
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/' />
        }
        const { errors, formValid, lastname, firstname, email, password, company } = this.state;
        const isEnabled = email.length > 0 && password.length > 0 && firstname.length > 0 && company.length > 0 && lastname.length > 0;
        return (
            <React.Fragment>
                <section className="regpageAlign">
                    <div className="regheader">
                        <Navbar className="regNavbar">
                            <Navbar.Brand> <img alt="Logo" className="loginlogo" src={logo}></img></Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Text className="headertext">
                                <p className="timesheetText"> PwC</p> <p className="tracker">Tools</p>
                            </Navbar.Text>
                            <Navbar.Text className="Regvesriontext">
                                <p className="RegVersion"> v 1.0</p>
                            </Navbar.Text>
                        </Navbar>
                    </div>
                    <div className='Signupwrapper'>
                        <div className='form-Signupwrapper'>
                            <h2>New User</h2>
                            <form onSubmit={this.handleRegister} noValidate className="regForm">
                                <div className='RegfirstName'>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type='text' name='firstname' onChange={this.handleChange} noValidate />
                                    {errors.firstname.length > 0 &&
                                        <span className='error'>{errors.firstName}</span>}
                                </div>
                                <div className='ReglastName'>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type='text' name='lastname' onChange={this.handleChange} noValidate />
                                </div>
                                <div className='Regemail'>
                                    <label htmlFor="email">Email</label>
                                    <input type='email' name='email' onChange={this.handleChange} noValidate />
                                    {errors.email.length > 0 &&
                                        <span className='error'>{errors.email}</span>}
                                </div>
                                <div className='Regpassword'>
                                    <label htmlFor="password">Password</label>
                                    <input type='password' name='password' onChange={this.handleChange} noValidate />

                                </div>
                                <div className='Regcompany'>
                                    <label htmlFor="company">Company</label>
                                    <input type='text' name='company' onChange={this.handleChange} noValidate />
                                </div>
                                {this.state.hideMe ?
                                    //    <div className='role'>
                                    //         <label htmlFor="role">Role</label>
                                    //         <select name='role' onChange={this.handleChange} noValidate >
                                    //             <option >Select</option>
                                    //             <option defaultValue value="user">User</option>
                                    //             <option value="manager">Manager</option>
                                    //         </select>
                                    //     </div>
                                    <div className='Regrole'>
                                        <label htmlFor="role">Company</label>
                                        <input type='text' name='role' value={this.state.role} onChange={this.handleChange} noValidate />
                                    </div>
                                    : ""}
                                <div className='register'>
                                    <button type='submit'>Register</button>
                                </div>

                                <div className="alrdyuser">
                                    <p onClick={this.alrdyuser}>Already user ?</p>
                                </div>
                            </form>
                        </div>

                    </div>
                </section>
            </React.Fragment>

        );
    }
}

export default Register
/* eslint-disable */
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import ReactDOM from 'react-dom';
import './form.scss';

class Form extends Component {
    
    state = {

        // rating1: 'Select',
        // score1: 'Select',
        // rating2: 'Select',
        // score2: 'Select',
        // rating3: 'Select',
        // score3: 'Select',
        // rating4: 'Select',
        // score4: 'Select',
        // rating5: 'Select',
        // score5: 'Select',
        // rating6: 'Select',
        // score6: 'Select',
        // rating7: 'Select',
        // score7: 'Select',
        // rating8: 'Select',
        // score8: 'Select',
        // rating9: 'Select',
        // score9: 'Select',
        // rating10: 'Select',
        // score10: 'Select',
        // rating11: 'Select',
        // score11: 'Select',
        // rating12: 'Select',
        // score12: 'Select',
    }

    handleNameChange = evt => {
        console.log(evt.target.value)
        this.setState({ [evt.target.name]: evt.target.value });
    };

    render() {
        const { singleUserData, downloadUserData } = this.state;
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
                                <td>COMPLIANCE</td>
                                <td>Are there any regulatory compliance requirements for this application?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating1}
                                        onChange={this.handleNameChange}
                                        name="rating1"
                                        className="projectclass"
                                        >
                                        <option defaultValue>Select</option>
                                        <option value="High">HIGH</option>
                                        <option value="Medium">MEDIUM</option>
                                        <option value="Low">LOW</option>
                                    </select></p>
                                </td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.score1}
                                        onChange={this.handleNameChange}
                                        name="score1"
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
                                    </select></p>
                                </td>
                            </tr>
                            <tr>
                            <td>2</td>
                                <td>STANDARDS</td>
                                <td>Are there any specific global standards in effect for the application?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating2}
                                        onChange={this.handleNameChange}
                                        name="rating2"
                                        className="projectclass"
                                        >
                                        <option defaultValue>Select</option>
                                        <option value="High">HIGH</option>
                                        <option value="Medium">MEDIUM</option>
                                        <option value="Low">LOW</option>
                                    </select></p>
                                </td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.score2}
                                        onChange={this.handleNameChange}
                                        name="score2"
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
                                    </select></p>
                                </td>
                            </tr>

                            <tr>
                            <td>3</td>
                                <td>STANDARDS</td>
                                <td>Are there SLAs tied to the application?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating3}
                                        onChange={this.handleNameChange}
                                        name="rating3"
                                        className="projectclass"
                                        >
                                        <option defaultValue>Select</option>
                                        <option value="High">HIGH</option>
                                        <option value="Medium">MEDIUM</option>
                                        <option value="Low">LOW</option>
                                    </select></p>
                                </td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.score3}
                                        onChange={this.handleNameChange}
                                        name="score3"
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
                                    </select></p>
                                </td>
                            </tr>

                            <tr>
                            <td>4</td>
                                <td>DATA GOVERNANCE</td>
                                <td>Does the application data have any integrity constraints?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating4}
                                        onChange={this.handleNameChange}
                                        name="rating4"
                                        className="projectclass"
                                        >
                                        <option defaultValue>Select</option>
                                        <option value="High">HIGH</option>
                                        <option value="Medium">MEDIUM</option>
                                        <option value="Low">LOW</option>
                                    </select></p>
                                </td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.score4}
                                        onChange={this.handleNameChange}
                                        name="score4"
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
                                    </select></p>
                                </td>
                            </tr>

                            <tr>
                            <td>5</td>
                                <td>DATA GOVERNANCE</td>
                                <td>Are there measures in place to improve and maintain data quality?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating5}
                                        onChange={this.handleNameChange}
                                        name="rating5"
                                        className="projectclass"
                                        >
                                        <option defaultValue>Select</option>
                                        <option value="High">HIGH</option>
                                        <option value="Medium">MEDIUM</option>
                                        <option value="Low">LOW</option>
                                    </select></p>
                                </td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.score5}
                                        onChange={this.handleNameChange}
                                        name="score5"
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
                                    </select></p>
                                </td>
                            </tr>

                            <tr>
                            <td>6</td>
                                <td>DATA GOVERNANCE</td>
                                <td>Should the data be stored in a specific location?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating6}
                                        onChange={this.handleNameChange}
                                        name="rating6"
                                        className="projectclass"
                                        >
                                        <option defaultValue>Select</option>
                                        <option value="High">HIGH</option>
                                        <option value="Medium">MEDIUM</option>
                                        <option value="Low">LOW</option>
                                    </select></p>
                                </td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.score6}
                                        onChange={this.handleNameChange}
                                        name="score6"
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
                                    </select></p>
                                </td>
                            </tr>

                            <tr>
                            <td>7</td>
                                <td>DATA GOVERNANCE</td>
                                <td>Do the application and its information go through audits?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating7}
                                        onChange={this.handleNameChange}
                                        name="rating7"
                                        className="projectclass"
                                        >
                                        <option defaultValue>Select</option>
                                        <option value="High">HIGH</option>
                                        <option value="Medium">MEDIUM</option>
                                        <option value="Low">LOW</option>
                                    </select></p>
                                </td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.score7}
                                        onChange={this.handleNameChange}
                                        name="score7"
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
                                    </select></p>
                                </td>
                            </tr>

                            <tr>
                            <td>8</td>
                                <td>INFORMATION SECURITY</td>
                                <td>Does the application handle customer or other type of sensitive/critical data?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating8}
                                        onChange={this.handleNameChange}
                                        name="rating8"
                                        className="projectclass"
                                        >
                                        <option defaultValue>Select</option>
                                        <option value="High">HIGH</option>
                                        <option value="Medium">MEDIUM</option>
                                        <option value="Low">LOW</option>
                                    </select></p>
                                </td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.score8}
                                        onChange={this.handleNameChange}
                                        name="score8"
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
                                    </select></p>
                                </td>
                            </tr>

                            <tr>
                            <td>9</td>
                                <td>INFORMATION SECURITY</td>
                                <td>Are there hardware/software security tools utilized to secure the application and its data?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating9}
                                        onChange={this.handleNameChange}
                                        name="rating9"
                                        className="projectclass"
                                        >
                                        <option defaultValue>Select</option>
                                        <option value="High">HIGH</option>
                                        <option value="Medium">MEDIUM</option>
                                        <option value="Low">LOW</option>
                                    </select></p>
                                </td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.score9}
                                        onChange={this.handleNameChange}
                                        name="score9"
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
                                    </select></p>
                                </td>
                            </tr>

                            <tr>
                            <td>10</td>
                                <td>INFORMATION SECURITY</td>
                                <td>Is the data encrypted while in transit and at rest?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating10}
                                        onChange={this.handleNameChange}
                                        name="rating10"
                                        className="projectclass"
                                        >
                                        <option defaultValue>Select</option>
                                        <option value="High">HIGH</option>
                                        <option value="Medium">MEDIUM</option>
                                        <option value="Low">LOW</option>
                                    </select></p>
                                </td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.score10}
                                        onChange={this.handleNameChange}
                                        name="score10"
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
                                    </select></p>
                                </td>
                            </tr>

                            <tr>
                            <td>11</td>
                                <td>BUSINESS CONTINUITY</td>
                                <td>Does the application have stringent BCP/DR requirements?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating11}
                                        onChange={this.handleNameChange}
                                        name="rating11"
                                        className="projectclass"
                                        >
                                        <option defaultValue>Select</option>
                                        <option value="High">HIGH</option>
                                        <option value="Medium">MEDIUM</option>
                                        <option value="Low">LOW</option>
                                    </select></p>
                                </td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.score11}
                                        onChange={this.handleNameChange}
                                        name="score11"
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
                                    </select></p>
                                </td>
                            </tr>

                            <tr>
                            <td>12</td>
                                <td>BUSINESS CONTINUITY</td>
                                <td>Are the RTO, RPO and DR requirements well documented for the application?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating12}
                                        onChange={this.handleNameChange}
                                        name="rating12"
                                        className="projectclass"
                                        >
                                        <option defaultValue>Select</option>
                                        <option value="High">HIGH</option>
                                        <option value="Medium">MEDIUM</option>
                                        <option value="Low">LOW</option>
                                    </select></p>
                                </td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.score12}
                                        onChange={this.handleNameChange}
                                        name="score12"
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
                                    </select></p>
                                </td>
                            </tr>

                            </tbody>
                        </Table>
                        
                    </div>
                </div>
                <div className="Buttons">
                    <div>
                        <button type="submit" className="small"> Save </button>
                    </div>
                </div>
                
            </React.Fragment>);
    }
}
export default Form;
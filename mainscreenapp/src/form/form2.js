/* eslint-disable */
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import ReactDOM from 'react-dom';
import './form2.scss';

export default class Form2 extends React.Component {
    constructor(props){
        super(props);
    }
     state = {

    //     rating1: "",
    //     score1: "",
    //     rating2: "",
    //     score2: "",
    //     rating3: 'Select',
    //     score3: 'Select',
    //     rating4: 'Select',
    //     score4: 'Select',
    //     rating5: 'Select',
    //     score5: 'Select',
    //     rating6: 'Select',
    //     score6: 'Select',
    //     rating7: 'Select',
    //     score7: 'Select',
    //     rating8: 'Select',
    //     score8: 'Select',
    //     rating9: 'Select',
    //     score9: 'Select',
    //     rating10: 'Select',
    //     score10: 'Select',
    //     rating11: 'Select',
    //     score11: 'Select',
    //     rating12: 'Select',
    //     score12: 'Select',
    //     rating13: 'Select',
    //     score13: 'Select',
    //     rating14: 'Select',
    //     score14: 'Select',
    //     rating15: 'Select',
    //     score15: 'Select',
    //     rating16: 'Select',
    //     score16: 'Select',
    //     rating17: 'Select',
    //     score17: 'Select',
    //     rating18: 'Select',
    //     score18: 'Select',
    //     rating19: 'Select',
    //     score19: 'Select',
    //     rating20: 'Select',
    //     score20: 'Select',
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
                                <td>VIRTUALIZATION</td>
                                <td>Does the application have any inherent clustering features?</td>
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
                                <td>LEGACY</td>
                                <td>Does the application have any inherent clustering features?</td>
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
                                <td>LEGACY</td>
                                <td>Is any part of  the application code or any of its subcomponents outdated and non-portable?</td>
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
                                <td>APPLICATION DEPENDENCIES</td>
                                <td>Does it rely on other applications for its functioning?</td>
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
                                <td>APPLICATION DEPENDENCIES</td>
                                <td>How many integration points are there for this application?</td>
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
                                <td>USERS</td>
                                <td>Are the users of the application geographically scattered?</td>
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
                                <td>LIFECYCLE MANAGEMENT</td>
                                <td>Does the application have any maintenance cycle?</td>
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
                                <td>LIFECYCLE MANAGEMENT</td>
                                <td>Is there application level monitoring?</td>
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
                                <td>LICENSING</td>
                                <td>Will the current licenses within the application stack be valid on a cloud deployment?</td>
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
                                <td>LICENSING</td>
                                <td>Are there any sub systems (or the application itself) nearing EoS/EoL?</td>
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
                                <td>NETWORK</td>
                                <td>Is it sensitive to network latencies?</td>
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

                            <tr>
                            <td>13</td>
                                <td>NETWORK</td>
                                <td>Can the application handle interruptions in the transactions?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating13}
                                        onChange={this.handleNameChange}
                                        name="rating13"
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
                                        value={this.state.score13}
                                        onChange={this.handleNameChange}
                                        name="score13"
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
                            <td>14</td>
                                <td>NETWORK</td>
                                <td>Does it need a special kind of network configuration to work?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating14}
                                        onChange={this.handleNameChange}
                                        name="rating14"
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
                                        value={this.state.score14}
                                        onChange={this.handleNameChange}
                                        name="score14"
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
                            <td>15</td>
                                <td>NETWORK</td>
                                <td>Are there non-standard protocols within the components of the application stack?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating15}
                                        onChange={this.handleNameChange}
                                        name="rating15"
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
                                        value={this.state.score15}
                                        onChange={this.handleNameChange}
                                        name="score15"
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
                            <td>16</td>
                                <td>WORKLOAD</td>
                                <td>Is the application's workload cyclical (i.e. follows a pattern)?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating16}
                                        onChange={this.handleNameChange}
                                        name="rating16"
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
                                        value={this.state.score16}
                                        onChange={this.handleNameChange}
                                        name="score16"
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
                            <td>17</td>
                                <td>WORKLOAD</td>
                                <td>Is it a high volume, highly transactional application?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating17}
                                        onChange={this.handleNameChange}
                                        name="rating17"
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
                                        value={this.state.source17}
                                        onChange={this.handleNameChange}
                                        name="source17"
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
                            <td>18</td>
                                <td>ARCHITECTURE</td>
                                <td>Mention the high level architecture type of the application from the list</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating18}
                                        onChange={this.handleNameChange}
                                        name="rating18"
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
                                        value={this.state.score18}
                                        onChange={this.handleNameChange}
                                        name="score18"
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
                            <td>19</td>
                                <td>ARCHITECTURE</td>
                                <td>Are there any hardware/platform/application refresh in pipeline or in-flight?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating19}
                                        onChange={this.handleNameChange}
                                        name="rating19"
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
                                        value={this.state.score19}
                                        onChange={this.handleNameChange}
                                        name="score19"
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
                            <td>20</td>
                                <td>ARCHITECTURE</td>
                                <td>Are there special middleware/platform configurations for this application?</td>
                                <td>
                                <p><select style={{marginTop: "15px"}}
                                        value={this.state.rating20}
                                        onChange={this.handleNameChange}
                                        name="rating20"
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
                                        value={this.state.score20}
                                        onChange={this.handleNameChange}
                                        name="score20"
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
//export default Form2;
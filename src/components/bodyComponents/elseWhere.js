import React, { Component, useState, useEffect, useRef } from 'react';
import {MdSettingsRemote, MdDirectionsBike} from 'react-icons/md';
import {FaHeart, FaMale, FaHandSpockO, FaThList} from 'react-icons/fa';
import { SiAngularjs, SiCplusplus, SiDjango, SiPython, SiPytorch, SiReact, SiVisualstudiocode, SiWindows, SiLinux} from 'react-icons/si';
import { DiDocker, DiJava, DiJavascript } from 'react-icons/di';
import  CanvasDraw from 'react-canvas-draw';
import { render } from 'react-dom';

// `https://flask-pytorch-rnn.herokuapp.com/predict?name={this.state.value}`

class ElseWhere extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            resp: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleClick() {
        console.log(this.state.value);
        this.fetchData().then(resp => resp.json())
        .then(data => {
            console.log("Success", data);
            this.setState({resp: data.prediction});
        }).then(err => {
            console.log("error: ", err);
        });

        // this.fetchData().then(result => {
        //     console.log("Result==", result);
        //     this.setState({resp: result});
        // });

        // console.log(this.state.resp);
    }

    async fetchData() {

        return await fetch(`https://flask-pytorch-rnn.herokuapp.com/predict?name=${this.state.value}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    }

    render() {
        return (
            <section id="elsewhere">
                <div id="working" className="module">
                    <h5>Work Preferences</h5>
                    <ul>
                        <li><span className="vertical-algin"><MdSettingsRemote /> </span> <span>Remote Friendly</span></li>
                        <li><span className="vertical-algin"><FaHeart /> </span> <span>Diverse Workforce</span></li>
                        <li><span className="vertical-algin"><MdDirectionsBike /> </span> <span>Work Life Balance</span></li>
                        <li><span className="vertical-algin"><FaMale /> </span> <span>Family Friendly</span></li>
                    </ul>
                </div>
                <div id="setup" className="tags module">
                    <h5>Devices & Tools</h5>
                    <div className="row">
                        <p className="tool"><span className="icon"><SiVisualstudiocode /></span> Visual Studio Code</p>
                        <p className="tool"><span className="icon"><DiDocker /></span>Docker</p>
                        <p className="tool"><span className="icon"><SiWindows /></span>Windows</p>
                        <p className="tool"><span className="icon"><SiLinux /></span> Linux </p>
                    </div>
                </div>
                <div id="coding" className="tags module">
                    <h5>Technical Skills</h5>
                    {/* Column use will be better then p tags */}
                    <div className="row"> 
                        <p className="language"><span className="icon"><SiCplusplus /></span>C++</p>
                        <p className="language"><span className="icon"><DiJava /></span> Java</p>
                        <p className="language"><span className="icon"><SiPython /></span> Python</p>
                        <p className="language"><span className="icon"><DiJavascript /></span> JavaScript</p>
                    </div>
                    <div className="row">
                        <p className="framework"><span className="icon"><SiReact /></span> React</p>
                        <p className="framework"><span className="icon"><SiAngularjs /></span> Angular</p>
                        <p className="framework"><span className="icon"><SiPytorch /></span> PyTorch</p>
                        <p className="framework"><span className="icon"><SiDjango /></span> Django</p>
                    </div>
                </div>
                <div id="Digit Recogition" className="module">
                    <h5>Random Ethnicity Guess:</h5>
                    <div className="module">
                        <p>Write your first name and model predicts what's your Ethnicity. (My model isn't that great yet. It will be better, eventually). As well huge credit to <a href="https://www.youtube.com/channel/UCbXgNpp0jedKWcQiULLbDTA">Python Engineer</a></p>
                        <input
                            type="text"
                            placeholder="Enter Your First Name"
                            value={this.state.value}
                            onChange={this.handleChange}
                        ></input>
                        <button
                            onClick={this.handleClick}
                        >
                            Enter
                        </button>
                        <p>You possbily belong to: {this.state.resp}</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default ElseWhere;
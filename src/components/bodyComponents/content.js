import React from 'react';
import {FaGithub, FaStackOverflow, FaUsb, FaUserSecret, FaWrench} from 'react-icons/lib/fa';
import {IoNetwork} from 'react-icons/lib/io';
import Card from '../cards/Card';


const Content = () => {
    return (
        <section id="content">
            <div id="project" className="module">
                <h5>Projects</h5>
                <div className="module">
                    <p><span className="verticalalign"><FaGithub /></span>  <a href="pose-estimation">Neural Networks Projects</a></p>
                    <Card 
                        title="Pose-Estimation"
                        description="This software recongize a pose human is performing in a image or in real-time. For now it's just two pose 1) Standing 2) Squatting."
                        img="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=90&h=70"
                    />
                    <Card 
                        title="Neural Network"
                        description="Neural Network from scrath, to show the inner details for the network"
                    />
                    <Card 
                        title="Neural Network Library"
                        description="Neural Network library build on java that let the user create a neual network with just lines of code."
                    />
                </div>
                {/* <div className="module">
                    <p><FaGithub /> <a href="pose-estimation">Neural Networks</a></p>
                    <Card 
                        title="Another App"
                        description="Neural Network from scrath, to show the inner details for the network"
                    />
                </div> */}
                <div className="module">
                    <h5>Writing</h5>
                    <ul>
                        <li><span className="verticalalign"><FaStackOverflow /> </span> <a href="https://github.com/AbubakarSaad/PyTorch-Practices/blob/master/Linear%20Regression.ipynb">Simple Linear Regression with PyTorch</a></li>
                        <li><span className="verticalalign"><FaUsb /> </span> <a href="#">Coming Soon!</a></li>
                        <li><span className="verticalalign"><FaUserSecret /> </span> <a href="#">Coming Soon!</a></li>
                        <li><span className="verticalalign"><FaWrench /> </span> <a href="#">Coming Soon!</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Content;
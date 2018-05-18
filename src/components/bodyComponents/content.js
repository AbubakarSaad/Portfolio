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
                    <p><FaGithub style={{ verticalAlign: '-.125em' }}/> <a href="pose-estimation">pose-estimation</a></p>
                    <Card 
                        title="App"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet iaculis justo. Sed tincidunt pellentesque nulla nec malesuada"

                    />
                </div>
                <div className="module">
                    <p><IoNetwork /><a href="#">Neural Network Library</a> - 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet iaculis justo. Sed tincidunt pellentesque nulla nec malesuada. Pellentesque a neque in mi.</p>
                </div>
                <div className="module">
                    <p><FaGithub style={{ verticalAlign: '-.125em' }}/> <a href="pose-estimation">Neural Networks</a></p>
                    <Card 
                        title="Another App"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet iaculis justo. Sed tincidunt pellentesque nulla nec malesuada"
                    />
                </div>
                <div className="module">
                    <h5>Writing</h5>
                    <ul>
                        <li><FaStackOverflow style={{ verticalAlign: '-.125em' }}/> <a href="#">Coming Soon!</a></li>
                        <li><FaUsb style={{ verticalAlign: '-.125em' }}/> <a href="#">Coming Soon!</a></li>
                        <li><FaUserSecret style={{ verticalAlign: '-.125em' }}/> <a href="#">Coming Soon!</a></li>
                        <li><FaWrench style={{ verticalAlign: '-.125em' }}/> <a href="#">Coming Soon!</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Content;
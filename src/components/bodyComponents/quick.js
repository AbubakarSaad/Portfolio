import React from 'react';
import Commenting from 'react-icons/fa';
import {FaGithub, FaLinkedin } from 'react-icons/fa';
import {MdBusinessCenter, MdWebAsset, MdFreeBreakfast} from 'react-icons/md';

import {GoLocation, GoTools} from 'react-icons/go';

const Quick = () => {
    return (
        <section id="quick">
            <div id="quick-head" className="module">
                <h5>Abubakar Saad</h5>
                <br /><br />
                <div className="text-left">
                    <ul>
                        <li><span className="vertical-algin"><GoLocation /></span> Toronto, ON</li>
                        <li><span className="vertical-algin"><FaLinkedin /></span> <a href="https://www.linkedin.com/in/abubakar-saad-032b7bb6"> Linkedin</a></li>
                        <li><span className="vertical-algin"><FaGithub /> </span><a href="https://github.com/AbubakarSaad"> Github</a></li>
                    </ul>
                
                </div>
            </div>
            <div id="about" className="module">
                <h5>About me</h5>
                <p>By night, I am a Deep learning enthusiast and by day a curious full-stack developer. I love understanding the intricate details of how things work, and often learn by hacking, just to make things fun! My current learning excitement involves Convolution Networks and NLP filters.</p>
                <p>Aside from the computer scientist in me, I enjoy working out and learning to play piano in my free time. I continuously strive to push myself forward both as professionally and more importantly, as a person.</p>
                <p>I am always open to new ideas and possible projects, so don't hesitate to contact me if you have got one!</p>
            </div>
            <div id="timeline" className="module">
                <h5>Timeline</h5>
                <ul>
                    <li><span className="vertical-algin height-width"><MdFreeBreakfast /></span> Freelance Developer</li>
                    <li><span className="vertical-algin height-width"></span> DevOps Specalist at RBC</li>
                    <li><span className="vertical-algin height-width"><MdBusinessCenter /></span> Developer at RBC</li>
                    <li><span className="vertical-algin height-width"><MdWebAsset /> </span> Web Developer at Entomogen</li>
                    <li><span className="vertical-algin height-width"><GoTools /></span> Software Developer at Elmwood Fine Custom Cabinetry</li>
                </ul>
            </div>
        </section>
    );
}

export default Quick;
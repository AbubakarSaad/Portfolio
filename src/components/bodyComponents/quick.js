import React from 'react';
import Commenting from 'react-icons/lib/fa/commenting';
import {FaGithub, FaLinkedinSquare} from 'react-icons/lib/fa';
import {MdBusinessCenter, MdWebAsset, MdFreeBreakfast} from 'react-icons/lib/md';
import IoIosCog from 'react-icons/lib/io/ios-cog';
import {GoLocation, GoTools} from 'react-icons/lib/go';

const Quick = () => {
    return (
        <section id="quick">
            <div id="quick-head" className="module">
                <h5>Abubakar Saad</h5>
                <br /><br />
                <div className="text-left">
                    <ul>
                        <li><Commenting style={{ verticalAlign: '-.125em' }}/> he/him/his/Mr</li>
                        <li><GoLocation style={{ verticalAlign: '-.125em' }}/> Toronto, ON</li>
                        <li><FaLinkedinSquare style={{ verticalAlign: '-.125em' }}/> <a href="https://www.linkedin.com/in/abubakar-saad-032b7bb6">linkedin</a></li>
                        <li><FaGithub style={{ verticalAlign: '-.125em' }}/> <a href="https://github.com/AbubakarSaad">github</a></li>
                    </ul>
                
                </div>
            </div>
            <div id="about" className="module">
                <h5>About me</h5>
                <p>I am a Deep learing enthusiast by night and full-stack dev by day. In my free time I workout and solve problems. I am currently learning NLP with Convolution networks creating models and NLP filters. </p>
                <p>I love understanding the intricate details of things I learn and hack it to make something fun. </p>
                <p>I like learning new things and just applying them into my daily life. I am alway looking for ways to improve myself professionally and as well as a person.</p>
            </div>
            <div id="timeline" className="module">
                <h5>Timeline</h5>
                <ul>
                    <li><MdFreeBreakfast style={{ verticalAlign: '-.125em', height:'1.5em', width:'1.5em' }}/> Freelance Developer</li>
                    <li><IoIosCog style={{ verticalAlign: '-.125em', height:'1.5em', width:'1.5em' }}/> DevOps Specalist at RBC</li>
                    <li><MdBusinessCenter style={{ verticalAlign: '-.125em', height:'1.5em', width:'1.5em' }}/> Developer at RBC</li>
                    <li><MdWebAsset style={{ verticalAlign: '-.125em', height:'1.5em', width:'1.5em' }}/> Web Developer at Entomogen</li>
                    <li><GoTools style={{ verticalAlign: '-.125em', height:'1.5em', width:'1.5em' }}/> Software Developer at Elmwood Fine Custom Cabinetry</li>
                </ul>
            </div>
        </section>
    );
}

export default Quick;
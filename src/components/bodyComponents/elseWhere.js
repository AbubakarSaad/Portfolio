import React from 'react';
import {MdSettingsRemote, MdDirectionsBike} from 'react-icons/lib/md';
import {FaHeart, FaMale, FaHandSpockO} from 'react-icons/lib/fa';


const ElseWhere = () => {
    return (
        <section id="elsewhere">
            <div id="working" className="module">
                <h5>Work Preferences</h5>
                <ul>
                    <li><span className="vertical-algin"><MdSettingsRemote /> </span> <span>Remote Friendly</span></li>
                    <li><span className="vertical-algin"><FaHeart /> </span> <span>Diverse Workforce</span></li>
                    <li><span className="vertical-algin"><MdDirectionsBike /> </span> <span>Work Life Balance</span></li>
                    <li><span className="vertical-algin"><FaMale /> </span> <span>Family Friendly</span></li>
                    <li><span className="vertical-algin"><FaHandSpockO /> </span> <span>Encourages OSS</span></li>
                </ul>
            </div>
            <div id="setup" className="tags module">
                <h5>Devices & Tools</h5>
                <p>
                    <a href="#" className="tool">Visual Studio Code</a>
                    <a href="#" className="tool">Postman</a>
                    <a href="#" className="tool">Windows</a>
                </p>
                <p>
                    <a href="#" className="tool">Google Chrome</a>
                    <a href="#" className="tool">Linux</a>
                    <a href="#" className="tool">Visual Studio</a>
                </p>
            </div>
            <div id="coding" className="tags module">
                <h5>Technical Skills</h5>
                <p>
                    <a href="#" className="language">Java</a>
                    <a href="#" className="language">Python</a>
                    <a href="#" className="language">JavaScript</a>
                    <a href="#" className="language">C#</a>
                </p>
                <p>
                    <a href="#" className="framework">React</a>
                    <a href="#" className="framework">Tensorflow</a>
                    <a href="#" className="framework">Flask</a>
                    <a href="#" className="framework">.NET Core</a>
                </p>
            </div>
            <div id="coding" className="tags module">
                <h5>Actively Learning</h5>
                <p>
                    <a href="#">Deep Learning</a>
                    <a href="#">Web Dev</a>
                </p>
            </div>
            <div id="videos" className="module">
                <h5>Videos</h5>
                <div className="module">
                    <p>Coming Soon</p>
                </div>
            </div>
        </section>
    );
}

export default ElseWhere;
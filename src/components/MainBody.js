
import React, { Component } from 'react';
import Quick from './bodyComponents/quick';
import Content from './bodyComponents/content';
import Elsewhere from './bodyComponents/elseWhere';
import '../css/mainbody.css';

class MainBody extends Component {

    render() {
        return(
            <div id="main">
                <div id="profile">
                    <Quick />
                    <Content />
                    <Elsewhere />
                </div>
            </div>
        );
    }
}

export default MainBody;
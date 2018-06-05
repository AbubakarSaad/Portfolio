import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, Button, Row, Col } from 'reactstrap';

import ProjectCard from '../components/cards/projectCard';
import '../css/projects.css';
  

class FreeProjects extends Component {

    render() {
        return (
            <div className="container">
                <Row>
                    <ProjectCard 
                        title="Workplace Bullying"
                        imgName="workplace-bullying"
                        description="Workplace Bullying app helps users take the necessary steps to recover from their experiences, it provides consulling, legal resources and steps required for them to better work enviroment."
                        
                    />
                </Row>
            </div>

        );
    }

};

export default FreeProjects;
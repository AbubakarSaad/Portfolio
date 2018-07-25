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
                        description="Workplace Bullying helps users take the necessary steps to recover from their experiences, it provides counselling, legal resources and steps required for them to better work enviroment. Users can start feeling as a victor."
                        link="https://play.google.com/store/apps/details?id=com.lisa.workbullyingapp"
                        cardLink="Workplace Bullying"
                    />
                    <ProjectCard 
                        title="Entomogen"
                        imgName="entomogen"
                        description="Entomogen Inc. was established in 1999 as an Environmental Consulting and Scientific Research and Experimental Development (SR & ED) firm. They provide insect identification services and other virus studies."
                        link="https://www.entomogen.ca/"
                        cardLink="Entomogen"
                    />
                </Row>
            </div>

        );
    }

};

export default FreeProjects;
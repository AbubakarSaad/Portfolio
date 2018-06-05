import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, Button, Row, Col } from 'reactstrap';


const ProjectCard = (props) => {
    return (<Col sm="4">
        <Card className="freelance-projects">
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
            </CardBody>
            <img width="100%" src={require(`../../images/${props.imgName}.jpg`)} alt="Card cap" />
            <CardBody>
                <CardText>{props.description}</CardText>
                <CardLink href="#">Card Link</CardLink>
            </CardBody>
        </Card>
    </Col>);
}

export default ProjectCard;
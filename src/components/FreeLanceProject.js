import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, Button, Row, Col } from 'reactstrap';
  

class FreeProjects extends Component {

    renderCard = () => {
        return (<Col sm="4">
            <Card>
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                </CardBody>
                <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card cap" />
                <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
                </CardBody>
            </Card>
        </Col>);
    }

    render() {
        return (
            <div className="container">
                <Row>
                    {this.renderCard()}
                </Row>
            </div>

        );
    }

};

export default FreeProjects;
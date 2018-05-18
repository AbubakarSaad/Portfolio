import React from 'react';
import { Card, CardTitle } from 'reactstrap';


const ProjectCard = (props) => {
    
    return(
        <Card style={{ padding: '10px', boxShadow: '0.1px 0.1px'}}>
            <div className="row">
                <div className="col-2">
                    <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=90&h=70" alt="Card image cap" />
                </div>
                <div className="col-8">
                    <CardTitle>{props.title}</CardTitle>
                </div>
                <div className="col-2">
                    <button className="float-right btn btn-light">Star</button>
                </div>
            </div>
            <p>{props.description}</p>
            <div className="project-footer">
                <span className="status">
                    <strong>1</strong>
                    fork
                </span>
                <span className="status">
                    <strong>2</strong>
                    star
                </span>
            </div>
        </Card>
    );
}


export default ProjectCard;
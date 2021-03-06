import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import {IoNetwork} from 'react-icons/io';


const ProjectCard = (props) => {
    
    return(
        <Card className="cardStyle">
            {props.img ? (
                <div>
                    <div className="row">
                        <div className="col-2">
                            <img src={props.img} alt="Card cap" />
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
                            <strong>0</strong>
                            fork
                        </span>
                        <span className="status">
                            <strong>0</strong>
                            star
                        </span>
                    </div>
                </div>) : (<p><a href="#">{props.title}</a> - 
                     {props.description}</p>)
            }
        </Card>
    );
}


export default ProjectCard;
import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import {IoNetwork} from 'react-icons/lib/io';


const ProjectCard = (props) => {
    
    return(
        <Card style={{ padding: '10px', boxShadow: '0.1px 0.1px', margin: '5px', marginTop: '8px'}}>
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
                </div>) : (<p><IoNetwork /><a href="#">{props.title}</a> - 
                     {props.description}</p>)
            }
        </Card>
    );
}


export default ProjectCard;
import React from 'react';
import { Link } from 'react-router-dom';

const Experience = (props) => {


    return (
        <>
            
                <div className="timeline-item">
                    <span className="date">{props.time}</span>
                    <h4><a href={props.certificate} target="__blank" style={{textDecoration:'none'}}>Certificate</a></h4>
                    <p>{props.description}</p>
                         
                </div>


        </>
    )
}

export default Experience;
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
const Pcard = (props) => {


    return (
        <>
                <div className="skill mb-4 ">
                    <>
                        <h6 className="font-weight-bold skill-item">{props.sname}</h6>
                        {/* <h6 className="font-weight-bold">{props.svalue}%</h6> */}
                    </>
                        {/* <ProgressBar variant={props.color} now={props.svalue} label={`${props.svalue}%`} /> */}
                </div>
        </>
    )
}

export default Pcard;
import React from 'react';
import Edata from './Edata'
import Education from './Education';
const Myedu = () => {

    function ecard(val) {
        return (
            <Education
                date={val.date}
                course={val.course}
                inst={val.inst}
                description={val.description}
            />
        )
    }

    return (
        <>
            <div className="tab-content active" id="education">
                <div className="timeline">
                    {Edata.map(ecard)}
                </div>
            </div>
        </>
    )
}

export default Myedu;
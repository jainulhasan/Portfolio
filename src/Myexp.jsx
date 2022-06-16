import React from 'react';
import Expdata from './Expdata'
import Experience from './Experience';
const Myexp = () => {

    function expcard(val){
        return(
            <Experience
            time={val.time}
            certificate={val.certificate}
            description={val.description}
            />
        );
    }

    return (
        <>
        <div className="tab-content" id="expereince">
                            <div className="timeline">
            {Expdata.map(expcard)}
                            
                            </div>
                            </div>
        </>
    );
}

export default Myexp;
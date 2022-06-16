import React from 'react';
import Pcard from './Pcard'
import Sdata from './Sdata';

function scard(val){
    return(
        <Pcard 
        sname={val.sname}
        />
    )
}
const Skills = () => {


    return (
        <div className='s-data'>
            {Sdata.map(scard)}
        </div>
    )
}

export default Skills;
import React from 'react';
import Project from './Project';
import Pdata from './Pdata';
const Myedu = () => {

    function pcard(val) {
        return (
            <Project
                id={val.id}
                title={val.title}
                link={val.link}
                desp={val.desp}
                created={val.created}
                tech={val.tech}
                github={val.github}
                image={val.imagelink}
            />
        )
    }

    return (
        <>
            {Pdata.map(pcard)}
        </>
    )
}

export default Myedu;
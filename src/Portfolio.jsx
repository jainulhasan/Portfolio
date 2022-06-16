import React from 'react';
import Myproject from './Myproject'
import Header from './Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BgCircle from './BgCircle'
import { Link } from 'react-router-dom';

const Portfolio = () => {


    return (
        <>
            <div className="main" id="projects">
            <Header/>
                <BgCircle/>
                <section className="portfolio-section sec-padding">
                    <div className="container">
                        <div className="row">
                            <div className="section-title">
                                <h2>My projects</h2>
                            </div>
                        </div>
                        <div className="projects">
                            <Myproject/>
                        </div>
                    </div>
                    <div className='cv'>
                    <a className="btnn" href="https://drive.google.com/file/d/1l0HUWBHBNBgat3emnLxx7ndq2Mp1I4RS/view?usp=sharing" target="__blank" style={{textDecoration:'none'}}>Resume</a>
                    <Link to="/contact" className="btnn">Contact</Link>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Portfolio;
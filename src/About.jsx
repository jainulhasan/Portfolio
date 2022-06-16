import React from 'react';
import { Link } from 'react-router-dom'
import Skills from './Skills';
import Myedu from './Myedu';
import Myexp from './Myexp';
import { useState } from 'react';
import Header from './Header'
import BgCircle from './BgCircle'
import SocialFollow from './SocialFollow';


const Main = () => {

    const [active, setactive] = useState("first");

    const fun2 = (e) => {
        setactive("second");
        e.target.classList.add("active");
        const c = document.getElementById("myedu");
        c.classList.remove("active");

    }

    const fun1 = (e) => {
        setactive("first");
        e.target.classList.add("active");

        const c = document.getElementById("myexp");
        c.classList.remove("active");

    }


    return (
        <>
            <div className="main">
                <Header />
                <BgCircle />
                <section className="about-section sec-padding">
                    <div className="container">
                        <div className="row">
                            <div className="section-title">
                                <h2>about page</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-md-4">
                                <div className="about-img">
                                    <div className="img-box">
                                        <img src="images/about.png" alt="about-img" />
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <b>My Coding Profiles</b><br/>
                                        
                                        <a href='https://github.com/jainulhasan'>Github</a><br/>
                                        <a href='https://leetcode.com/jain_coder/'>Leetcode</a><br/>
                                        <a href='https://auth.geeksforgeeks.org/user/jainulhasan11/practice/'>geeksforgeeks</a><br/>
                                        <a href='https://codeforces.com/profile/jainulhasan11'>Codeforces</a><br/>
                                        <a href='https://www.codechef.com/users/jainul123'>Codechef</a><br/>
                                        <a href='https://www.hackerrank.com/jainul_hasan'>Hackerrank</a><br/>
                            </div>
                            
                            <div class="col-md-8">
                                <div className="about-text ">
                                    <p>Hi 👋 I'm <b>Jainul Hasan </b>
                                         I am a passionate engineer; here with an aim to create positive impact - 
                                        with the power of code. Programming in simple terms actually boils down to one purpose - 
                                        `Problem Solving`. Thus, I don't prefer confining myself to a particular language or framework; 
                                        and instead being extremely dynamic to learn and build whatever problem demands. 
                                        💻 I love to explore new tech and build cool stuff with it. 
                                        I am currently a <b>3rd Year Undergrad</b> at Shri Mata Vaishno Devi University Katra pursuing 
                                        a Bachelor of Technology majoring in <b>Computer Science and Engineering</b>.
                                        <br/>
                                        Presently, I am aligned to Web Technologies and Tooling and play with Frontend everyday. 
                                        I have learned various Computer Science fundamentals and practical interpersonal skills
                                         like teamwork, networking, and leadership. I am a passionate Competitive Programmer and 
                                         am highly interested in Algorithmic Problem Solving with a firm grasp in Data Structures 
                                         and Algorithms. I also like science. I represented my school in regional science congress 
                                         and in many science exhibitions on regional level. I've good general and current affairs knowledge also.
                                        <br/>
                                        Apart from Computer and technologies, I'm a sporty guy, I'm  in university volleyball team and played many tournaments under the banner of my university,
                                        I am also a national level player of yoga, other than these i am good in badminton and basketball and played on regional level representing my school 
                                        
                                        Feel free to check out my Resume and Projects .



                                        
                                    </p>
                                    <div class="about_info">
                                        <div>
                                            <span className="about_info-title">20+</span>
                                            <span className="about_info-name">Completed <br /> projects</span>
                                        </div>
                                        <div>
                                            <span className="about_info-title">15+</span>
                                            <span className="about_info-name">Technologies <br /> used</span>
                                        </div>
                                        <div>
                                            <span className="about_info-title">80k+</span>
                                            <span className="about_info-name">lines of <br /> code</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <h3 className="skill-title ">Skills</h3>
                            <div class="col">

                            </div>
                            <div class="col-8">
                                <Skills />
                            </div>
                            <div class="col">

                            </div>
                        </div>
                        <div className="about-tabs">
                            <button type="button" className="tab-items active right" onClick={fun1} id="myedu">Education</button>
                            <button type="button" className="tab-items " onClick={fun2} id="myexp">Achievements & Certificates</button>
                        </div>
                        <div>
                            {active === "first" && <Myedu />}
                            {active === "second" && <Myexp />}
                        </div>
                        <div className="cv">
                        <Link to="/portfolio" className="btnn">Portfolio</Link>
                            <a className="btnn" href="https://drive.google.com/file/d/1l0HUWBHBNBgat3emnLxx7ndq2Mp1I4RS/view?usp=sharing" target="__blank" style={{textDecoration:'none'}}>Resume</a>
                            <Link to="/contact" className="btnn">Contact</Link>
                        </div>

                    </div>
                    <SocialFollow />
                </section>

            </div>
        </>
    )
}

export default Main;
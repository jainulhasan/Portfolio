import React from 'react';
import { Link} from 'react-router-dom'
import Typewriter from "typewriter-effect";
import Header from './Header'
import BgCircle from './BgCircle'
import SocialFollow from './SocialFollow';
const Main=()=>{


return (
    <>
        
                    
        <div className="main" id="mainSection">
        <Header/>
            <BgCircle/>
            <section className="home-section align-item-centree">
                <div className="container">
                    <div className="roww align-item-centree">
                        <div className="home-text">
                            <p>Hello I'm</p>
                            <h1>Jainul hasan</h1>
                           <h2> <Typewriter
                                options={{
                                strings: ["MERN stack developer","Frontend Developer","Backend Developer"],
                                autoStart: true,
                                loop: true,
                                delay: 50
                                }}/>
                            </h2>
                            <Link to="/about" className="btnn">About me</Link>
                            <Link to="/portfolio" className="btnn">Portfolio</Link>
                            {/* <a className="btnn" href="https://drive.google.com/file/d/1l0HUWBHBNBgat3emnLxx7ndq2Mp1I4RS/view?usp=sharing" target="__blank" style={{textDecoration:'none'}}>Resume</a> */}
                        </div>
                        <div className="home-img">
                            <div className="img-box">
                                <img src="images/cover.png" alt="profile-img" />
                            </div>
                        </div>
                    </div>

                </div>
            <SocialFollow/>
            </section>
        </div>

    </>
)
}

export default Main;
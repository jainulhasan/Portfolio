import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import BgCircle from './BgCircle'

import TwitterIcon from '@mui/icons-material/Twitter';
import SocialFollow from './SocialFollow';
const Contact = () => {

    return (
        <>
            <div className="main">
            <Header/>
                <BgCircle/>
                
                
                <section className="contact-section ">
                {/* <a href="#"><FontAwesomeIcon icon="fa-brands fa-github" /></a> */}
                    <div className="container"> 
                        <div className="row">
                            <div className="section-title contact">
                                <h2>Contact me</h2>
                            </div>
                        </div>
                        
                        <div className="boxes">
                            <div className="light-box box-hover ">
                                <h2>mobile</h2>
                                <div className="hover-icon"><PhoneIcon color="secondary" fontSize="large"/></div>
                                <p><a href="tel:+918474903914" target="__blank">+91 8474903914</a>
                                </p>
                            </div>
                            <div className="light-box box-hover ">
                                <h2>Email</h2>
                                <div className="hover-icon"><EmailIcon  color="secondary" fontSize="large"/></div>
                                <p>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jainulhasan11@gmail.com" target="__blank">jainulhasan11@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div> 
                   <SocialFollow/>
                </section>
        </div >
       


        </>
    )
}

export default Contact;
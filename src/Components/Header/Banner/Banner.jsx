import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Banner.css"
import TypeWriter from './TypeWriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase ,faArrowRight, faFileDownload} from '@fortawesome/free-solid-svg-icons'
const Banner = () => {
    return (
        <section>
            <div className="banner-container d-flex justify-content-center">
                <div className="text-center banner-info">
                    <div style ={{marginTop:"150px"}}>
                        <h5 classname="text-left" style={{ color: " #3A4256" }}>HEY THERE !</h5>
                        <h1>I'm <span style={{ color: "rgb(179,182,150)" }}>Mosharof Hossen </span> </h1>
                        <h1>A Front-end Developer</h1>
                        <TypeWriter></TypeWriter>
                        <div className=" mt-5 mb-sm-5" >
                            <a className="mx-2" href="#contact-details"><Button className="header-btn text-white" style={{ backgroundColor: " #3A4256" }} variant="outline-primary"><FontAwesomeIcon icon={faBriefcase} /> Hire me</Button></a>
                            <a className="mx-2 " href="https://drive.google.com/file/d/1Fb_WOFrSGtWi0_fIsKTcSAoV9DT2qVMC/view?usp=sharing" rel="noopener noreferrer"target="_blank"><Button className="header-btn text-white" style={{ backgroundColor: " #3A4256" }} variant="outline-primary"><FontAwesomeIcon icon={faFileDownload} /> Download Resume</Button></a>
   

                        </div>
                        <div className="social-Link mt-1 mt-md-5">
                            <a href="mailto:mosharofhossen1998@gmail.com" rel="noopener noreferrer"><Button className="header-btn text-white mx-2" style={{ backgroundColor: " #3A4256" }}variant="outline-primary">EMAIL <FontAwesomeIcon icon={faArrowRight} /></Button></a>
                            <a href="https://www.facebook.com/mosharofhossen.mosharofhossen.35" target="_blank" rel="noopener noreferrer"><Button className="header-btn text-white mx-2" style={{ backgroundColor: " #3A4256" }} variant="outline-primary">FACEBOOK <FontAwesomeIcon icon={faArrowRight} /></Button></a>
                            <a href="https://www.linkedin.com/in/mosharof-hossen-005323171/" target="_blank" rel="noopener noreferrer"><Button className="header-btn text-white mx-2" style={{ backgroundColor: " #3A4256" }} variant="outline-primary">LINKEDIN <FontAwesomeIcon icon={faArrowRight} /></Button></a>
                            <a href="https://github.com/Mosharof-Hossen" target="_blank" rel="noopener noreferrer"><Button className="header-btn text-white mx-2" style={{ backgroundColor: " #3A4256" }} variant="outline-primary">GitHub <FontAwesomeIcon icon={faArrowRight} /></Button></a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
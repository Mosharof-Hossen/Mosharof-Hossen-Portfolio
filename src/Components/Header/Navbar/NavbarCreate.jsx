import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const NavbarCreate = () => {
    return (
        // style={{position:"fixed",overflow:"hidden",width:"100%"}}
        <div className ="fixed-top">
            <Navbar style ={{backgroundColor:"rgba(0,0,0,.4)" ,color : "white"}}  expand="lg">
                <Navbar.Brand className="text-white" href="/home"> <p className = "me">Me.</p></Navbar.Brand>
                <Navbar.Toggle style ={{color:"white"}} className="text-white"  aria-controls="basic-navbar-nav" ><span class="fas fa-bars navbar-icon"></span></Navbar.Toggle>
                <Navbar.Collapse className="text-white" id="basic-navbar-nav">
                    <Nav className="ml-auto text-white">

                        <a data-aos="fade-up" className = "mx-2" href="#home"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">HOME</Button></a>
                        <a data-aos="fade-down" className = "mx-2" href="#projects"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">PROJECTS</Button></a>
                        <a data-aos="fade-up" className = "mx-2" href="#blogs"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">BLOG</Button></a>
                        <Link data-aos="fade-down" className = "mx-2" to="/resume"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">RESUME</Button></Link>
                        <a data-aos="fade-up" className = "mx-2" href="#contact-details"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">CONTACT</Button></a>
                        
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarCreate;
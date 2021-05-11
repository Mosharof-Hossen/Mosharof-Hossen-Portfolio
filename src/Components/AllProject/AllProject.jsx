import React from 'react';
import { Button } from 'react-bootstrap';
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';
import photographer from "../images/phography.png"
import fruitsShop from "../images/fruitsShop.png"
import country from "../images/country.png"
import slider from "../images/slider.png"
import cooking from "../images/cooking.png"
import panda from "../images/panda.png"
import panguin from "../images/panguin.png"

import BPL from "../images/BPL-.png"
import { Link } from 'react-router-dom';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';

const AllProject = () => {
    return (
        <div style={{ backgroundColor: "#E5DDC8", margin: "0" }} id="projects">

            <div className="text-center pt-5">
                <div className="text-left">
                <Link className="mx-2" to="/home"><Button  style={{ backgroundColor: " #3A4256" }}  className="header-btn text-white" variant="outline-primary"><ReplyAllIcon></ReplyAllIcon>  HOME</Button></Link>

                </div>
                <p style={{ color: "#B1B493", fontWeight: "bold" }}>A C C O M P L I S H M E N T S</p>
                <h1 style={{ color: "#3A4256", fontWeight: "bold" }}>ALL My Projects</h1>
                <p style={{ color: "#3A4256", fontWeight: "bold" }}>Below are a few of the many projects I have done.</p>

            </div>
            <div className="d-flex flex-wrap card-container py-4">
                {/* <!-- Topic Cards -->? */}
                <div id="cards_landscape_wrap-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                <div class="card-flyer" style={{ width: '25rem' }}>
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={photographer} alt="" />
                                        </div>
                                        <div class="text-containers">
                                            <h4>Professional Photographer Website </h4>
                                            <p style={{ fontSize: "18px" }} className="mb-3 ">This is a full-stack- web application</p>

                                            <button disabled>React js</button>
                                            <button disabled>Firebase</button>
                                            <button disabled>MongoDb</button>
                                            <button disabled>Node js</button>
                                            <button disabled> Material UI</button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <a href="https://phography-site.web.app/" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">Live Preview <LaunchIcon></LaunchIcon></Button></a>
                                        <a href="https://github.com/Mosharof-Hossen/professional-photographer" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn1" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">GitHub <GitHubIcon></GitHubIcon></Button></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div id="cards_landscape_wrap-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                <div class="card-flyer" style={{ width: '25rem' }}>
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={fruitsShop} alt="" />
                                        </div>
                                        <div class="text-containers">
                                            <h4>Fresh Fruits Shop Web Application </h4>
                                            <p style={{ fontSize: "18px" }} className="mb-3 ">This is a full-stack- web application</p>

                                            <button disabled>React js</button>
                                            <button disabled>Firebase</button>
                                            <button disabled>MongoDb</button>
                                            <button disabled>Node js</button>
                                            <button disabled> Material UI</button>
                                            <button disabled>BootStrap</button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <a href="https://fresh-fruits-pro.web.app/" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">Live Preview <LaunchIcon></LaunchIcon></Button></a>
                                        <a href="https://github.com/Mosharof-Hossen/Fruits-Shop" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn1" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">GitHub <GitHubIcon></GitHubIcon></Button></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div id="cards_landscape_wrap-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                <div class="card-flyer" style={{ width: '25rem' }}>
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={country} alt="" />
                                        </div>
                                        <div class="text-containers">
                                            <h4>Country Details Web Application </h4>
                                            <p style={{ fontSize: "18px" }} className="mb-3 ">This is a React js web application</p>

                                            <button disabled>React js</button>
                                            <button disabled>CSS</button>
                                            <button disabled>JavaScript</button>
                                            <button disabled>React Router</button>
                                            <button disabled> Material UI</button>
                                            <button disabled>BootStrap</button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <a href="https://react-country-details.netlify.app/" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">Live Preview <LaunchIcon></LaunchIcon></Button></a>
                                        <a href="https://github.com/Mosharof-Hossen/React-country-details" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn1" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">GitHub <GitHubIcon></GitHubIcon></Button></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <div id="cards_landscape_wrap-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                <div class="card-flyer" style={{ width: '25rem' }}>
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={BPL} alt="" />
                                        </div>
                                        <div class="text-containers">
                                            <h4>BPL(2021)-Cricket team Selection website</h4>
                                            <p style={{ fontSize: "18px" }} className="mb-3 ">This is a full-stack- web application</p>

                                            <button disabled>React js</button>
                                            <button disabled>Firebase</button>
                                            <button disabled>MongoDb</button>
                                            <button disabled>Node js</button>
                                            <button disabled> Material UI</button>
                                            <button disabled>Express</button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <a href="https://bpl-react-application2021.netlify.app/" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">Live Preview <LaunchIcon></LaunchIcon></Button></a>
                                        <a href="https://github.com/Mosharof-Hossen/BPL-Team-Selection" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn1" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">GitHub <GitHubIcon></GitHubIcon></Button></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div id="cards_landscape_wrap-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                <div class="card-flyer" style={{ width: '25rem' }}>
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={slider} alt="" />
                                        </div>
                                        <div class="text-containers">
                                            <h4>Create Fancy Slider Web Application  </h4>
                                            <p style={{ fontSize: "18px" }} className="mb-3 ">This is HTML web application</p>

                                            <button disabled>HTML</button>
                                            <button disabled>CSS</button>
                                            <button disabled>BootStrap</button>
                                            <button disabled>API KEY</button>
                                            <button disabled> Material UI</button>
                                            <button disabled>Sass</button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <a href="https://mosharof-hossen.github.io/fancy-slider-Assignment/" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">Live Preview <LaunchIcon></LaunchIcon></Button></a>
                                        <a href="https://github.com/Mosharof-Hossen/fancy-slider-Assignment" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn1" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">GitHub <GitHubIcon></GitHubIcon></Button></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div id="cards_landscape_wrap-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                <div class="card-flyer" style={{ width: '25rem' }}>
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={cooking} alt="" />
                                        </div>
                                        <div class="text-containers">
                                            <h4>Cooking Master Web Application  </h4>
                                            <p style={{ fontSize: "18px" }} className="mb-3 ">This is HTML web application</p>

                                            <button disabled>HTML</button>
                                            <button disabled>CSS</button>
                                            <button disabled>BootStrap</button>
                                            <button disabled>API KEY</button>
                                            <button disabled> Material UI</button>
                                            <button disabled>Sass</button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <a href="https://mosharof-hossen.github.io/cooking-master-Assignment/" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">Live Preview <LaunchIcon></LaunchIcon></Button></a>
                                        <a href="https://github.com/Mosharof-Hossen/cooking-master-Assignment" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn1" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">GitHub <GitHubIcon></GitHubIcon></Button></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div id="cards_landscape_wrap-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                <div class="card-flyer" style={{ width: '25rem' }}>
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={panda} alt="" />
                                        </div>
                                        <div class="text-containers">
                                            <h4>Panda HTML commercial Web Application  </h4>
                                            <p style={{ fontSize: "18px" }} className="mb-3 ">This is HTML web application</p>

                                            <button disabled>HTML</button>
                                            <button disabled>CSS</button>
                                            <button disabled>BootStrap</button>
                                            <button disabled>GitHub</button>
                                            <button disabled> Material UI</button>
                                            <button disabled>Sass</button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <a href="https://mosharof-hossen.github.io/panda-site-bootstrap-P-4.2/" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">Live Preview <LaunchIcon></LaunchIcon></Button></a>
                                        <a href="https://github.com/Mosharof-Hossen/panda-site-bootstrap-P-4.2" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn1" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">GitHub <GitHubIcon></GitHubIcon></Button></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div id="cards_landscape_wrap-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                <div class="card-flyer" style={{ width: '25rem' }}>
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={panguin} alt="" />
                                        </div>
                                        <div class="text-containers">
                                            <h4>Panguin HTML commercial Web Application  </h4>
                                            <p style={{ fontSize: "18px" }} className="mb-3 ">This is HTML web application</p>

                                            <button disabled>HTML</button>
                                            <button disabled>CSS</button>
                                            <button disabled>BootStrap</button>
                                            <button disabled>GitHub</button>
                                            <button disabled> Material UI</button>
                                            <button disabled>Sass</button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <a href="https://mosharof-hossen.github.io/Penguin-fashion-responsive-assignment/" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">Live Preview <LaunchIcon></LaunchIcon></Button></a>
                                        <a href="https://github.com/Mosharof-Hossen/Penguin-fashion-responsive-assignment" target="_blank" rel="noopener noreferrer"><Button className="text-white card-btn1" style={{ backgroundColor: " #3A4256", width: "50%", borderRadius: "0px" }} variant="outline-primary">GitHub <GitHubIcon></GitHubIcon></Button></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>








            </div>
        </div>
    );
};

export default AllProject;
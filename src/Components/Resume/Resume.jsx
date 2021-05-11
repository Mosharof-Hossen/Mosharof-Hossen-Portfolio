import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Resume.css"
import ReplyAllIcon from '@material-ui/icons/ReplyAll';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Resume = () => {
    return (
        <div className="p-5" style={{ backgroundColor: "#E5DDC8" }} >
            <Link className="mx-2" to="/home"><Button style={{ backgroundColor: " #3A4256" }} className="header-btn text-white" variant="outline-primary"><ReplyAllIcon></ReplyAllIcon> HOME</Button></Link>

            <div className=" text-center mb-4">
                <h1 style={{ color: "#3A4256", fontWeight: "bold" }}>My Resume</h1>
            </div>
            <div className = "text-center mb-5">             
                <a className="mx-2 " href="https://drive.google.com/file/d/1vuMlOtb95uGjAmnAMJcL3NJW1n4TcbDS/view?usp=sharing" rel="noopener noreferrer" target="_blank"><Button className="header-btn text-white" style={{ backgroundColor: " #3A4256" }} variant="outline-primary"><FontAwesomeIcon icon={faFileDownload} /> Download Resume</Button></a>

            </div>
            <div className=" row p-3">

                <div className="col-md-6 skill-div-1 p-2">
                    <div>
                        <h1 style={{ color: "#3A4256", fontWeight: "bold" }}>SKILLS</h1>
                        <div className="pl-5">
                            <p><span style={{ color: "#3A4256", fontWeight: "bold" }}>Front-End:</span> Javascript, ES6, React js, HTML, CSS3, TypeScipt, Bootstrap, Material UI, React Router.</p>
                            <p><span style={{ color: "#3A4256", fontWeight: "bold" }}>Back-End:</span> Node Js, Express js, Firebase Authentication, MongoDB</p>
                            <p><span style={{ color: "#3A4256", fontWeight: "bold" }}>Hosting:</span> Firebase, Heroku, Netlify, Github.</p>
                            <p><span style={{ color: "#3A4256", fontWeight: "bold" }}>Tools:</span> VS code, Git, Github, Chrome Deb Tools, NodeBook, Atom, Code Blocks, Node pad+, Jupeter Nodebook</p>
                            <p><span style={{ color: "#3A4256", fontWeight: "bold" }}>Others:</span> Python(200+ Problem Solved), C, Machine learning, Pandas, Numpy, Deep Learning,Neural Networks, CNN, Keras, Image Processing, Computer vision, Data Science,,Matplotlib, Seaborn, Robotics.</p>

                        </div>
                    </div>
                    <div>
                        <h1 style={{ color: "#3A4256", fontWeight: "bold" }}>PROJECTS</h1>
                        <div className="pl-5">
                            <h4 style={{ color: "#3A4256", fontWeight: "bold" }}>● Professional Photographer Site [web Application] (April 2021)</h4>
                            <div className="pl-3">
                                <h5 style={{ color: "#3A4256", fontWeight: "bold" }}>Features:</h5>
                                <div className="pl-3">
                                    <p>● Firebase authentication has been used so that admins and users can access it.</p>
                                    <p>● The user can take the service and give the review.</p>
                                    <p>● Admin can add, delete, update new services.</p>
                                </div>
                                <h5 style={{ color: "#3A4256", fontWeight: "bold" }}><span>Tech and Tools: </span></h5>
                                <div className="pl-3">
                                    <p>React js, Node js, Firebase, MongoDB, Javascript, HTML.</p>
                                </div>

                            </div>
                        </div>

                        <div className="pl-5">
                            <h4 style={{ color: "#3A4256", fontWeight: "bold" }}>● Fresh Fruits Shop [Web Application] (March 2021)</h4>
                            <div className="pl-3">
                                <h5 style={{ color: "#3A4256", fontWeight: "bold" }}>Features:</h5>
                                <div className="pl-3">
                                    <p>● Firebase authentication has been used so that admins and users can access it.</p>
                                    <p>● Users can select and order many products.</p>
                                    <p>● Users can add and delete products.</p>
                                </div>
                                <h5 style={{ color: "#3A4256", fontWeight: "bold" }}><span>Tech and Tools: </span></h5>
                                <div className="pl-3">
                                    <p>React js, Node js, Firebase, MongoDB, Javascript, HTML, CSS3, Metatial UI.</p>
                                </div>

                            </div>
                        </div>

                        <div className="pl-5">
                            <h4 style={{ color: "#3A4256", fontWeight: "bold" }}>● Professional Photographer Site [web Application] (April 2021)</h4>
                            <div className="pl-3">
                                <h5 style={{ color: "#3A4256", fontWeight: "bold" }}>Features:</h5>
                                <div className="pl-3">
                                    <p>● Firebase authentication has been used so that admins and users can access it.</p>
                                    <p>● The user can take the service and give the review.</p>
                                    <p>● Admin can add, delete, update new services.</p>
                                </div>
                                <h5 style={{ color: "#3A4256", fontWeight: "bold" }}><span>Tech and Tools: </span></h5>
                                <div className="pl-3">
                                    <p>React js, Node js, Firebase, MongoDB, Javascript, HTML.</p>
                                </div>

                            </div>
                        </div>


                    </div>


                </div>
                <div className="col-md-6 skill-div-2 p-2">
                    <h1 style={{ color: "#3A4256", fontWeight: "bold" }}>EDUCATION</h1>
                    <div className="pl-5">
                        <h5 style={{ color: "#3A4256", fontWeight: "bold" }}>Hajee Mohammad Danesh Science and Technology University, Dinajpur</h5>
                        <p>Electrical & Electronics Engineering (EEE) <br /><small>February 2018 - February 2022</small></p>
                        <br />
                        <h5 style={{ color: "#3A4256", fontWeight: "bold" }}>Advanced Residential Model College, Mymensingh</h5>
                        <p>Science <br /><small>February 2014 - February 2016</small></p>
                    </div>

                    <div>
                        <h1 style={{ color: "#3A4256", fontWeight: "bold" }}>AWARDS</h1>
                        <div className="pl-5">
                            <p>● Manual Control Robot(Runner UP)-Project Hub, <span style={{ color: "#3A4256", fontWeight: "bold" }}>EEE club of HSTU-2019</span></p>
                            <p>● Soccer Robot(Champion)-Maker Faire of <span style={{ color: "#3A4256", fontWeight: "bold" }}>IEEE HSTU Student Branch -2020</span></p>
                            <p>● Chess(Runner UP),<span style={{ color: "#3A4256", fontWeight: "bold" }}>CPGHS - 2010</span></p>
                        </div>
                    </div>

                    <div>
                        <h1 style={{ color: "#3A4256", fontWeight: "bold" }}>CERTIFICATIONS</h1>
                        <div className="pl-5">
                            <p>● Complete Web Development Course, <span style={{ color: "#3A4256", fontWeight: "bold" }}>Programming Hero</span>.</p>
                            <p>● Python, <span style={{ color: "#3A4256", fontWeight: "bold" }}> NBICT LAB</span>. </p>
                            <p>● Machine Learning, <span style={{ color: "#3A4256", fontWeight: "bold" }}> Coursera</span>.</p>
                            <p>● Image Super-Resolution Using Autoencoders in Keras,  <span style={{ color: "#3A4256", fontWeight: "bold" }}> Coursera</span>.</p>
                            <p>● Image Classification with CNNs using Keras,  <span style={{ color: "#3A4256", fontWeight: "bold" }}> Coursera</span>.</p>
                            <p>● Convolutional Neural Networks,  <span style={{ color: "#3A4256", fontWeight: "bold" }}> Coursera</span>. </p>
                            <p>● Neural Networks and Deep Learning, <span style={{ color: "#3A4256", fontWeight: "bold" }}> Coursera</span>.</p>

                        </div>
                    </div>

                    <div>
                        <h1 style={{ color: "#3A4256", fontWeight: "bold" }}>EXTRA-CURRICULAR ACTIVITIES</h1>
                        <div className="pl-5">
                            <p>● Member at <span style={{ color: "#3A4256", fontWeight: "bold" }}>Skill Development Club of HSTU</span>.</p>
                            <p>● Robotics committee Executive at <span style={{ color: "#3A4256", fontWeight: "bold" }}>IEEE HSTU Student Branch</span>.</p>
                            <p>● General Member at <span style={{ color: "#3A4256", fontWeight: "bold" }}>EEE CLUB OF HSTU</span>.</p>
                            <p>● Founder, <span style={{ color: "#3A4256", fontWeight: "bold" }}>HSTU ROBO MAKER team</span>.</p>
                        </div>
                    </div>

                    <div>
                        <h1 style={{ color: "#3A4256", fontWeight: "bold" }}>HOBBIES</h1>
                        <div className="pl-5">
                            <p>● Coding</p>
                            <p>● Learning</p>
                            <p>● Triler Movie Watching</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className = "text-center mt-5">
                <a className="mx-2 " href="https://drive.google.com/file/d/1vuMlOtb95uGjAmnAMJcL3NJW1n4TcbDS/view?usp=sharing" rel="noopener noreferrer" target="_blank"><Button className="header-btn text-white" style={{ backgroundColor: " #3A4256" }} variant="outline-primary"><FontAwesomeIcon icon={faFileDownload} /> Download Resume</Button></a>

            </div>
        </div>
    );
};

export default Resume;
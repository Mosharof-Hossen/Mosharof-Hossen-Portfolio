import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Skill.css"

const Skill = () => {
    const percentage = 66;
    return (
        <div className="pt-5" style={{ backgroundColor: "#F7F5EF" }}>
            <div className="text-center" >
                <p style={{ color: "#B1B493", fontWeight: "bold" }}>S K I L L S</p>
                <h1 style={{ color: "#3A4256", fontWeight: "bold" }}>My Skills</h1>
                <p style={{ color: "#3A4256", fontWeight: "bold" }}>I have acquired the following skills through a lot of time and hard work.</p>

            </div>
            <div className="skill-list p-5 "  >
                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >React js</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={85} text={`85%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>

                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >HTML</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={95} text={`95%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>

                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >CSS</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={85} text={`85%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>

                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >JavaScript</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={80} text={`80%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>

                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Node js</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={60} text={`60%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>

                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Bootstrap</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={95} text={`95%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>

                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Firebase</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={63} text={`63%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>

                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >MongoDB</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={78} text={`78%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>

                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Metarial UI</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={82} text={`82%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>

                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Express</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={60} text={`60%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Python</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={83} text={`83%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>

                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Machine Learning</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={60} text={`60%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Deep Learning</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={63} text={`63%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Keras</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={78} text={`78%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >CNN</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={90} text={`90%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Neural Network</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={80} text={`80%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Matplotlib</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={70} text={`70%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Numpy</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={60} text={`60%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 200, height: 200 }} data-aos="zoom-in">
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Pandas</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={65} text={`65%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Skill;
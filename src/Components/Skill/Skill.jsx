import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Skill.css"

const Skill = () => {
    const percentage = 66;
    return (
        <div className="pt-5" style = {{backgroundColor:"#F7F5EF"}}>
            <div className ="text-center">
                <p style={{ color: "#B1B493", fontWeight: "bold" }}>S K I L L S</p>
                <h1 style={{ color: "#3A4256", fontWeight: "bold" }}>My Skills</h1>
                <p style={{ color: "#3A4256", fontWeight: "bold" }}>I have acquired the following skills through a lot of time and hard work.</p>

            </div>
            <div className="skill-list p-5 " >

                <div className="skill-div text-center " style={{ width: 250, height: 250 }}>
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >React js</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={80} text={`80%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                    <div className="my-3" style={{ color: "#3A4256", fontWeight: "bold" }}>
                        <div className="last-week mr-5  " style={{ display: 'inline-block' }}>
                            <h4 >22%</h4>
                            <p>Last Week</p>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <h4>70%</h4>
                            <p>Last Month</p>
                        </div>
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 250, height: 250 }}>
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >HTML</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={95} text={`95%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                    <div className="my-3" style={{ color: "#3A4256", fontWeight: "bold" }}>
                        <div className="last-week mr-5  " style={{ display: 'inline-block' }}>
                            <h4 >33%</h4>
                            <p>Last Week</p>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <h4>75%</h4>
                            <p>Last Month</p>
                        </div>
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 250, height: 250 }}>
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >CSS</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={85} text={`85%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                    <div className="my-3" style={{ color: "#3A4256", fontWeight: "bold" }}>
                        <div className="last-week mr-5  " style={{ display: 'inline-block' }}>
                            <h4 >28%</h4>
                            <p>Last Week</p>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <h4>75%</h4>
                            <p>Last Month</p>
                        </div>
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 250, height: 250 }}>
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >JavaScript</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={78} text={`78%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                    <div className="my-3" style={{ color: "#3A4256", fontWeight: "bold" }}>
                        <div className="last-week mr-5  " style={{ display: 'inline-block' }}>
                            <h4 >20%</h4>
                            <p>Last Week</p>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <h4>70%</h4>
                            <p>Last Month</p>
                        </div>
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 250, height: 250 }}>
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Node js</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={60} text={`60%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                    <div className="my-3" style={{ color: "#3A4256", fontWeight: "bold" }}>
                        <div className="last-week mr-5  " style={{ display: 'inline-block' }}>
                            <h4 >15%</h4>
                            <p>Last Week</p>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <h4>45%</h4>
                            <p>Last Month</p>
                        </div>
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 250, height: 250 }}>
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Bootstrap</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={80} text={`80%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                    <div className="my-3" style={{ color: "#3A4256", fontWeight: "bold" }}>
                        <div className="last-week mr-5  " style={{ display: 'inline-block' }}>
                            <h4 >29%</h4>
                            <p>Last Week</p>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <h4>72%</h4>
                            <p>Last Month</p>
                        </div>
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 250, height: 250 }}>
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Firebase</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={63} text={`63%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                    <div className="my-3" style={{ color: "#3A4256", fontWeight: "bold" }}>
                        <div className="last-week mr-5  " style={{ display: 'inline-block' }}>
                            <h4 >15%</h4>
                            <p>Last Week</p>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <h4>45%</h4>
                            <p>Last Month</p>
                        </div>
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 250, height: 250 }}>
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >MongoDB</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={78} text={`78%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                    <div className="my-3" style={{ color: "#3A4256", fontWeight: "bold" }}>
                        <div className="last-week mr-5  " style={{ display: 'inline-block' }}>
                            <h4 >23%</h4>
                            <p>Last Week</p>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <h4>70%</h4>
                            <p>Last Month</p>
                        </div>
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 250, height: 250 }}>
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Metarial UI</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={82} text={`82%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                    <div className="my-3" style={{ color: "#3A4256", fontWeight: "bold" }}>
                        <div className="last-week mr-5  " style={{ display: 'inline-block' }}>
                            <h4 >26%</h4>
                            <p>Last Week</p>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <h4>73%</h4>
                            <p>Last Month</p>
                        </div>
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 250, height: 250 }}>
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Python</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={83} text={`83%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                    <div className="my-3" style={{ color: "#3A4256", fontWeight: "bold" }}>
                        <div className="last-week mr-5  " style={{ display: 'inline-block' }}>
                            <h4 >33%</h4>
                            <p>Last Week</p>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <h4>68%</h4>
                            <p>Last Month</p>
                        </div>
                    </div>
                </div>

                <div className="skill-div text-center " style={{ width: 250, height: 250 }}>
                    <h3 className="my-3 " style={{ color: "#3A4256", fontWeight: "bold" }} >Express</h3>
                    <div className="text-center m-auto " style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={60} text={`60%`} styles={buildStyles({ textSize: '20px', pathColor: `#3A4256`, textColor: "#3A4256" })} />
                    </div>
                    <div className="my-3" style={{ color: "#3A4256", fontWeight: "bold" }}>
                        <div className="last-week mr-5  " style={{ display: 'inline-block' }}>
                            <h4 >15%</h4>
                            <p>Last Week</p>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <h4>35%</h4>
                            <p>Last Month</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Skill;
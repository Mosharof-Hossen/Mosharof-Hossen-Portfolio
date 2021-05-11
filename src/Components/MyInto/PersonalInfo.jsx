import React from 'react';
import "./PersonalInfo.css"
import HeadsetIcon from '@material-ui/icons/Headset';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';

const PersonalInfo = () => {
    return (
        <div>
            {/*  #3A4256  */}
            <h5 style ={{fontWeight:"bolder", color :"#B1B493"}}>M Y &nbsp;&nbsp; I N T R O</h5>
            <h1 style = {{color :" #3A4256",fontWeight:"bolder"}}>About Me</h1>
            <p  className="my-5"style = {{color :" #3A4256",fontSize:"18px"}}>I am a student of the EEE department, I started my journey in programming in 2016 and I started working in web development in 2019. I have done a lot of personal and corporate projects through my hard work.</p>

            <div>
                <p><span className="adress">Name: </span><span className="adress-detail">Mosharof Hossen</span></p>
                <p><span className="adress">Date of birth: </span><span className="adress-detail">January 01,1998</span></p>
                <p><span className="adress">University: </span><span className="adress-detail">Hajee Mohammad Danesh Science & Technology University</span></p>
                <p><span className="adress">Adress: </span><span className="adress-detail">Mymensingh,2290,Bangladesh</span></p>
                <p><span className="adress">Email: </span><span className="adress-detail">mosharofhossen1998@gmail.com</span></p>
                <p><span className="adress">Phone: </span><span className="adress-detail">+8801757674850</span></p>
            </div>
            <div className= "entertainment-head">
                <div className="entertainment"><span className="a"><HeadsetIcon style={{fontSize:"2.5rem"}}className="entertainment-icon"></HeadsetIcon> </span> Music</div>
                <div className="entertainment"><span><AirportShuttleIcon style={{fontSize:"2.5rem"}}className="entertainment-icon"></AirportShuttleIcon></span> Travel</div>
                <div className="entertainment"><span><SubscriptionsIcon style={{fontSize:"2.5rem"}}className="entertainment-icon"></SubscriptionsIcon></span> Movie</div>
                <div className="entertainment"><span><SportsCricketIcon style={{fontSize:"2.5rem"}}className="entertainment-icon"></SportsCricketIcon></span> Sports</div>
            </div>
        </div>
    );
};

export default PersonalInfo;
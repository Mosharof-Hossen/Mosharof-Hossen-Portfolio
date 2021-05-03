import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileImage from "../images/mosharof-1 (1).png"
import "./MyInto.css"
import PersonalInfo from './PersonalInfo';
import SimpleTabs from './TabInfo';

const MyInto = () => {
    return (
        <div className="cover2">
            <div className="row p-0 m-0">
                <div className="profile col-md-6 ">
                    <Image src={profileImage} fluid></Image>
                </div>
                <div className="about-info col-md-6 p-5">

                    <SimpleTabs></SimpleTabs>
                </div>

            </div>
        </div>
    );
};

export default MyInto;
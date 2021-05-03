import React from 'react';
import NavbarCreate from './Navbar/NavbarCreate';
import "./Header.css"
import Banner from './Banner/Banner';
import cover1 from "../images/cover2.jpg"
const Header = () => {
    return (
        <div className="header-style-head">
            <img className ="headerbg" src={cover1} alt=""/>
            <div className="header-style">
                <NavbarCreate></NavbarCreate>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;
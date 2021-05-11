import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import MyInto from '../MyInto/MyInto';
import Projects from '../Project/Project';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <MyInto></MyInto>
            <Skill></Skill>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;
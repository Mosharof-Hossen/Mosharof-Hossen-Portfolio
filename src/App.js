import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Projects from './Components/Project/Project';
import Blogs from './Components/Blogs/Blogs';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';



function App() {
    return ( <
        Router >

        <
        Switch >
        <
        Route exact path = "/" >
        <
        Home > < /Home> < /
        Route >

        <
        Route path = "/home" >
        <
        Home > < /Home> < /
        Route >

        <
        Route path = "/projects" >
        <
        Projects > < /Projects> < /
        Route >

        <
        Route path = "/blogs" >
        <
        Blogs > < /Blogs> < /
        Route >

        <
        Route path = "/resume" >
        <
        Resume > < /Resume> < /
        Route >

        <
        Route path = "/contact" >
        <
        Contact > < /Contact> < /
        Route >

        <
        /Switch> < /
        Router >
    );
}

export default App;
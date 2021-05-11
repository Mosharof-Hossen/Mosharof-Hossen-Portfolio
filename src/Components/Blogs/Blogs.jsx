import React, { useEffect, useState } from 'react';
import ImgMediaCard from './BlogsTamplate';
import blogsData from "./BlogsData";
import "./Blogs.css"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Blogs = () => {
    const [blogData , SetBlogData] = useState([])
    
    useEffect(() => {
        SetBlogData(blogsData.slice(0, 2))
        
    }, [])
    return (
        <div className="py-5"  style= {{backgroundColor:'#F7F5EF'}} id="blogs">
            <div className="text-center pt-5">
                <p style={{ color: "#B1B493", fontWeight: "bold" }}>B L O G S</p>
                <h1 style={{ color: "#3A4256", fontWeight: "bold" }}>My Blogs</h1>
                <p style={{ color: "#3A4256", fontWeight: "bold" }}>Below are a few of the many BLOGS I have done.</p>

            </div>
            <div className = "p-5">

                <div className="blogs">
                    {
                        blogData.map(data => <ImgMediaCard key={data.img} data={data}></ImgMediaCard>)
                    }
                </div>
                {/* <ImgMediaCard data = {blogData}></ImgMediaCard> */}

            </div>
            <div className="text-center p-2 ">

                <Link className="mx-2" to="/allBlogs"><Button style={{ backgroundColor: " #3A4256" }}className="header-btn text-white" variant="outline-primary">See All Blogs</Button></Link>

            </div>
        </div>
    );
};

export default Blogs;
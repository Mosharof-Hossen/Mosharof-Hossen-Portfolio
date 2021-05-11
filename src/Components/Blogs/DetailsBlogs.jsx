import React, { useEffect, useState } from 'react';
import ImgMediaCard from './BlogsTamplate';
import blogsData from "./BlogsData";
import "./Blogs.css"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';


const DetailsBlogs = () => {
    const [blogData, SetBlogData] = useState([])

    useEffect(() => {
        SetBlogData(blogsData.slice(0, 3))

    }, [])
    return (
        <div className="py-0" style={{ backgroundColor: '#F7F5EF' }}>
            <div className="text-left  pt-3">
                <Link className="mx-2" to="/home"><Button style={{ backgroundColor: " #3A4256" }} className="header-btn text-white" variant="outline-primary"><ReplyAllIcon></ReplyAllIcon>  HOME</Button></Link>

            </div>
            <div className="text-center">
                <p style={{ color: "#B1B493", fontWeight: "bold" }}>B L O G S</p>
                <h1 style={{ color: "#3A4256", fontWeight: "bold" }}>My Blogs</h1>
                

            </div>
            <div className="p-5">

                <div className="blogs">
                    {
                        blogData.map(data => <ImgMediaCard key={data.img} data={data}></ImgMediaCard>)
                    }
                </div>

            </div>

        </div>
    );
};

export default DetailsBlogs;
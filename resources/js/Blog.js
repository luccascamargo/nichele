/* eslint-disable no-irregular-whitespace */
/* eslint-disable import/no-unresolved */
import ReactDOM from "react-dom";
import { useState, useEffect } from 'react';

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { api } from './plugins/api';

import "../sass/blog.scss";

export default function Blog() {
    const [cmsInfo, setCmsInfo] = useState({});
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getCmsInfo = async () => {
            await fetch('http://localhost:1337/api/info', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => setCmsInfo(data.data.attributes));
        }
        getCmsInfo();
    }, [])

    useEffect(() => {
        const getBlog = async () => {
            await fetch('http://localhost:1337/api/blogs?populate=*', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => setPosts(data.data));
        }
        getBlog();
    }, [])

    return (
        <>
            <header className="header__blog">
                <Navbar />
                <div className="content__blog">
                    <h1>Blog</h1>
                </div>
            </header>

            <div className="blog">
                <div className="container">
                    {posts?.map(item => {
                        const imageBlog = `${
                            item.attributes.image.data.attributes.url.startsWith(`/`)
                              ? "http://localhost:1337"
                              : ``
                          }${item.attributes.image.data.attributes.url}`;
                        return (
                            <a key={item.id} href={`/blogcontent?code=${item.id}`} className="item">
                            <img src={imageBlog} alt={item.attributes.title} />
                            <div className="info">
                                <span className="date">{item.attributes.createdAt}</span>
                                <h2>{item.attributes.title}</h2>
                                <a className="more" href={`/blogcontent?code=${item.id}`}>
                                    Leia mais
                                </a>
                            </div>
                        </a>
                        )
                    })}
                </div>
            </div>

            <Footer data={cmsInfo}/>
        </>)}

if (document.getElementById("blog")) {
    ReactDOM.render(<Blog />, document.getElementById("blog"));
}

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

    useEffect(async () => {
        const { data } = await api.get('api/posts')
        setPosts(data);
    }, []);

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
                    {posts?.data?.map(item => (
                        <a key={item.id} href={`/blog/${item.slug}`} className="item">
                            <img src={item.media.path} alt={item.title} />
                            <div className="info">
                                <span className="date">{item.created_at}</span>
                                <h2>{item.title}</h2>
                                <a className="more" href={`/blog/${item.slug}`}>
                                    Leia mais
                                </a>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <Footer data={cmsInfo}/>
        </>
    );
}

if (document.getElementById("blog")) {
    ReactDOM.render(<Blog />, document.getElementById("blog"));
}

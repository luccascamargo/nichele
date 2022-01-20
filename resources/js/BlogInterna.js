/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable import/no-unresolved */
import ReactDOM from "react-dom";
import { useState, useEffect } from 'react';

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { api } from './plugins/api';

import "../sass/blog.scss";

import imageBack from "../../public/assets/svg/back-icon.svg";
import facebookShare from "../../public/assets/svg/facebook-share.svg";
import linkedinShare from "../../public/assets/svg/linkedin-share.svg";
import whatsShare from "../../public/assets/svg/whats-share.svg";

export default function BlogInterna() {
    const [post, setPost] = useState({});

    useEffect(async () => {
        const slug = new URL(window.location.href).pathname.split('/blog/')[1]
        setPost((await api.get(`/api/posts/${slug}`)).data);
    }, [])
    return (
        <>
            <header className="header__blog">
                <Navbar />
                <div className="content__blog">
                    <h1>Blog</h1>
                </div>
            </header>

            <div className="bloginterna">
                <span className="date">{post.created_at}</span>
                <h1>{post.title}</h1>
                <img className="imagem" src={post?.media?.path} alt={post.title} />
                <p className="text">
                    {post.content}
                </p>

                <div className="redes">
                    <a href="/blog" className="back">
                        <img src={imageBack} alt="Voltar" /> voltar
                    </a>
                    <div className="shareButtons">
                        <span>compartilhe nas redes</span>
                        <a href="#facebook">
                            <img src={facebookShare} alt="Facebook" />
                        </a>
                        <a href="#linkedin">
                            <img src={linkedinShare} alt="Linkedin" />
                        </a>
                        <a href="#whats">
                            <img src={whatsShare} alt="WhatsApp" />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

if (document.getElementById("bloginterna")) {
    ReactDOM.render(<BlogInterna />, document.getElementById("bloginterna"));
}

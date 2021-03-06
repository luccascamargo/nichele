/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable import/no-unresolved */
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import "../sass/blog.scss";

import imageBack from "../../public/assets/svg/back-icon.svg";
import facebookShare from "../../public/assets/svg/facebook-share.svg";
import linkedinShare from "../../public/assets/svg/linkedin-share.svg";
import whatsShare from "../../public/assets/svg/whats-share.svg";

export default function BlogInterna() {
    const [cmsInfo, setCmsInfo] = useState({});
    const [post, setPost] = useState({
        id: 0,
        attributes: {
            content: "",
            createdAt: "",
            title: "",
            image: { data: { attributes: { url: "" } } },
        },
    });

    useEffect(async () => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("code");
        const getBlog = async () => {
            await fetch(
                `https://fathomless-chamber-79732.herokuapp.com/api/blogs/${id}?populate=*`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => setPost(data.data));
        };
        getBlog();
    }, []);

    useEffect(() => {
        const getCmsInfo = async () => {
            await fetch(
                "https://fathomless-chamber-79732.herokuapp.com/api/info",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => setCmsInfo(data.data.attributes));
        };
        getCmsInfo();
    }, []);

    const imagePost = `${
        post?.attributes.image.data.attributes.url.startsWith(`/`)
            ? "https://fathomless-chamber-79732.herokuapp.com/"
            : ``
    }${post?.attributes.image.data.attributes.url}`;

    let date = new Date(post?.attributes.createdAt);
    date = date.toLocaleString();

    return (
        <>
            <header className="header__blog">
                <Navbar />
                <div className="content__blog">
                    <h1>Blog</h1>
                </div>
            </header>

            <div className="bloginterna">
                <span className="date">{date}</span>
                <h1>{post?.attributes.title}</h1>
                <img
                    className="imagem"
                    src={imagePost}
                    alt={post?.attributes.title}
                />
                <div className="text">
                    <Markdown>{post?.attributes.content}</Markdown>
                </div>

                <div className="redes">
                    <a href="/blog" className="back">
                        <img src={imageBack} alt="Voltar" /> voltar
                    </a>
                    <div className="shareButtons">
                        <span>compartilhe nas redes</span>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                            <img src={facebookShare} alt="Facebook" />
                        </a>
                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}>
                            <img src={linkedinShare} alt="Linkedin" />
                        </a>
                        <a href={`https://api.whatsapp.com/send?text=${window.location.href}`}>
                            <img src={whatsShare} alt="WhatsApp" />
                        </a>
                    </div>
                </div>
            </div>

            <Footer data={cmsInfo} />
        </>
    );
}

if (document.getElementById("bloginterna")) {
    ReactDOM.render(<BlogInterna />, document.getElementById("bloginterna"));
}

/* eslint-disable no-irregular-whitespace */
/* eslint-disable import/no-unresolved */
import ReactDOM from "react-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import "../sass/blog.scss";

import imageInfo from "../../public/assets/images/banner-info.png";

export default function Blog() {
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
                    <a href="/blog/interna" className="item">
                        <img src={imageInfo} alt="Image" />
                        <div className="info">
                            <span className="date">16/08/2021</span>
                            <h2>As mulheres e o mercado imobiliário</h2>
                            <a className="more" href="/blog/interna">
                                Leia mais
                            </a>
                        </div>
                    </a>

                    <a href="/blog/interna" className="item">
                        <img src={imageInfo} alt="Image" />
                        <div className="info">
                            <span className="date">16/08/2021</span>
                            <h2>As mulheres e o mercado imobiliário</h2>
                            <a className="more" href="/blog/interna">
                                Leia mais
                            </a>
                        </div>
                    </a>
                    <a href="/blog/interna" className="item">
                        <img src={imageInfo} alt="Image" />
                        <div className="info">
                            <span className="date">16/08/2021</span>
                            <h2>As mulheres e o mercado imobiliário</h2>
                            <a className="more" href="/blog/interna">
                                Leia mais
                            </a>
                        </div>
                    </a>
                </div>
            </div>

            <Footer />
        </>
    );
}

if (document.getElementById("blog")) {
    ReactDOM.render(<Blog />, document.getElementById("blog"));
}

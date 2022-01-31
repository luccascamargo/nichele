/* eslint-disable no-irregular-whitespace */
/* eslint-disable import/no-unresolved */
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

import "../sass/sobre.scss";

import imageInfo from "../../public/assets/images/banner-info.png";
import imageCarousel from "../../public/assets/images/image-carousel.png";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 961 },
        items: 1,
        partialVisibilityGutter: 40,
    },
    tablet: {
        breakpoint: { max: 961, min: 641 },
        items: 1,
        partialVisibilityGutter: 30,
    },
    mobile: {
        breakpoint: { max: 641, min: 0 },
        items: 1,
        partialVisibilityGutter: 10,
    },
};

export default function Sobre() {
    const [cmsInfo, setCmsInfo] = useState({});
    const [cms, setCms] = useState({});

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
        const getCms = async () => {
            await fetch('http://localhost:1337/api/about?populate=*', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => setCms(data.data.attributes));
        }
        getCms();
    }, [])

    const images = cms?.gallery?.data




    return (
        <>
            <header className="header__sobre">
                <Navbar />
                <div className="content__sobre">
                    <span>Sobre nós</span>
                    <h1>
                        {cms.title}
                    </h1>
                </div>
            </header>

            <div className="content__infos">
                <div className="info">
                    <p>{cms.description}</p>
                </div>
                <div className="img">
                    <img src={imageInfo} alt="Imagem 50 anos" />
                </div>
            </div>

            <div className="content__carousel">
                <div className="carousel">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        // spaceBetween={5}
                        pagination={{ clickable: true }}
                        className="container__swiper"
                    >
                        {images?.map(image => {
                            const imageProduct = `${
                                image.attributes.url.startsWith(`/`)
                                  ? "http://localhost:1337"
                                  : ``
                              }${image.attributes.url}`;
                            return (
                                <SwiperSlide key={image.id}>
                                    <div className="box__carousel">
                                        <img src={imageProduct} alt="Carousel" />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="infos__carousel">
                    <h2>
                        {cms.componentFundation?.title}
                    </h2>
                    <p>{cms.componentFundation?.description}</p>
                </div>
            </div>
            <Footer data={cmsInfo}/>
        </>
    );
}

if (document.getElementById("sobre")) {
    ReactDOM.render(<Sobre />, document.getElementById("sobre"));
}

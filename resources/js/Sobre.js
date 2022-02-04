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

import imageInfo from "../../public/assets/images/video_nichele.jpg";
import imageCarousel from "../../public/assets/images/image-carousel.png";
import { Box, Button, Modal, Typography } from "@mui/material";

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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Sobre() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [cmsInfo, setCmsInfo] = useState({});
    const [cms, setCms] = useState({});

    useEffect(() => {
        const getCmsInfo = async () => {
            await fetch('https://fathomless-chamber-79732.herokuapp.com/api/info', {
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
            await fetch('https://fathomless-chamber-79732.herokuapp.com/api/about?populate=*', {
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
                    <img src={imageInfo} onClick={handleOpen} alt="Imagem 50 anos" />
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                            <iframe width="950" height="534" src="https://www.youtube.com/embed/OXctR22VCOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Box>
                        </Modal>
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

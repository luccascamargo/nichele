/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import {api} from '../plugins/api';

import imgMovel from "../../../public/assets/images/movel.png";
import imgBed from "../../../public/assets/svg/bed-icon.svg";
import imgCar from "../../../public/assets/svg/car-icon.png";
import imgSize from "../../../public/assets/svg/size-icon.svg";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 220,
    },
    desktopSmall: {
        breakpoint: { max: 1024, min: 600 },
        items: 2,
        partialVisibilityGutter: 100,
    },
    mobileLargue: {
        breakpoint: { max: 600, min: 415 },
        items: 1,
        partialVisibilityGutter: 100,
    },
    mobile: {
        breakpoint: { max: 415, min: 0 },
        items: 1,
        partialVisibilityGutter: 20,
    },
};

const ButtonGroup = ({ next, previous }) => {
    return (
        <div className="carouselButtonGroup">
            <div className="carouselHeader">
                <h2>Imóveis comerciais</h2>
                <div>
                    <button onClick={previous} aria-label="Previous">
                        <IoIosArrowRoundBack />
                    </button>
                    <button onClick={next} aria-label="Next">
                        <IoIosArrowRoundForward />
                    </button>
                </div>
            </div>
            <div>
                <a href="/imoveis">encontre mais imóveis</a>
            </div>
        </div>
    );
};

const CarouselMoveisComerciais = ({ deviceType, items = [] }) => {
    const [commercials, setCommercials] = useState([]);

    useEffect( async () => {
        const commercial = async () => {
            const {data} = await api.get('api/commercials');

            return data;
        }

        setCommercials(await commercial());
    }, [])
    return (
        <div className="moveis">
            <Carousel
                partialVisible={true}
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={8000}
                centerMode={false}
                className=""
                containerClass="carousel-container"
                customButtonGroup={<ButtonGroup />}
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass="item"
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside
                renderDotsOutside={false}
                responsive={responsive}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                customTransition={"transform 800ms ease-in-out"}
            >
                {commercials.map(item => (
                    <div key={item.id} className="box">
                        <a href="/">
                            <span className="tipo">{item.type}</span>
                            <img
                                className="image"
                                src={imgMovel}
                                width={"384px"}
                                height={"384px"}
                                alt="teste"
                            />
                            <div className="content">
                                <div className="info">
                                    <div>
                                        <p className="title">{item.building_type.name}</p>
                                        <p className="local">
                                            {item.address.place}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="price">{item.price}</p>
                                        <p className="code">Cód:{item.code}</p>
                                    </div>
                                </div>
                                <div className="data">
                                    <div>
                                        <img
                                            src={imgBed}
                                            width={imgBed.width}
                                            height={imgBed.height}
                                            alt="Quartos"
                                        />
                                        <p>{item.rooms} quartos</p>
                                    </div>
                                    <div>
                                        <img
                                            src={imgCar}
                                            width={imgCar.width}
                                            height={imgCar.height}
                                            alt="Vagas"
                                        />
                                        <p>{item.garage} vaga</p>
                                    </div>
                                    <div>
                                        <img
                                            src={imgSize}
                                            width={imgSize.width}
                                            height={imgSize.height}
                                            alt="Metros"
                                        />
                                        <p>{item.private_area} mª</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselMoveisComerciais;

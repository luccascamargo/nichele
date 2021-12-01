/* eslint-disable no-unused-vars */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import imgMovel from "../../../public/assets/images/movel.png";
import imgBed from "../../../public/assets/svg/bed-icon.svg";
import imgCar from "../../../public/assets/svg/car-icon.png";
import imgSize from "../../../public/assets/svg/size-icon.svg";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 40,
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
                <h2>Imóveis em destaque</h2>
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
                <a href="/">encontre mais imóveis</a>
            </div>
        </div>
    );
};

const CarouselMoveis = ({ deviceType, items = [] }) => {
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
                infinite={true}
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
                <div className="box">
                    <a href="/">
                        <span className="tipo">Aluguel</span>
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
                                    <p className="title">Apartamento</p>
                                    <p className="local">
                                        Universitário - Caxias do Sul
                                    </p>
                                </div>
                                <div>
                                    <p className="price">R$1.000,00</p>
                                    <p className="code">Cód:1934</p>
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
                                    <p>2 quartos</p>
                                </div>
                                <div>
                                    <img
                                        src={imgCar}
                                        width={imgCar.width}
                                        height={imgCar.height}
                                        alt="Vagas"
                                    />
                                    <p>1 vaga</p>
                                </div>
                                <div>
                                    <img
                                        src={imgSize}
                                        width={imgSize.width}
                                        height={imgSize.height}
                                        alt="Metros"
                                    />
                                    <p>28 mª</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="box">
                    <a href="/">
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
                                    <p className="title">Apartamento</p>
                                    <p className="local">
                                        Universitário - Caxias do Sul
                                    </p>
                                </div>
                                <div>
                                    <p className="price">R$1.000,00</p>
                                    <p className="code">Cód:1934</p>
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
                                    <p>2 quartos</p>
                                </div>
                                <div>
                                    <img
                                        src={imgCar}
                                        width={imgCar.width}
                                        height={imgCar.height}
                                        alt="Vagas"
                                    />
                                    <p>1 vaga</p>
                                </div>
                                <div>
                                    <img
                                        src={imgSize}
                                        width={imgSize.width}
                                        height={imgSize.height}
                                        alt="Metros"
                                    />
                                    <p>28 mª</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="box">
                    <a href="/">
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
                                    <p className="title">Apartamento</p>
                                    <p className="local">
                                        Universitário - Caxias do Sul
                                    </p>
                                </div>
                                <div>
                                    <p className="price">R$1.000,00</p>
                                    <p className="code">Cód:1934</p>
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
                                    <p>2 quartos</p>
                                </div>
                                <div>
                                    <img
                                        src={imgCar}
                                        width={imgCar.width}
                                        height={imgCar.height}
                                        alt="Vagas"
                                    />
                                    <p>1 vaga</p>
                                </div>
                                <div>
                                    <img
                                        src={imgSize}
                                        width={imgSize.width}
                                        height={imgSize.height}
                                        alt="Metros"
                                    />
                                    <p>28 mª</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="box">
                    <a href="/">
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
                                    <p className="title">Apartamento</p>
                                    <p className="local">
                                        Universitário - Caxias do Sul
                                    </p>
                                </div>
                                <div>
                                    <p className="price">R$1.000,00</p>
                                    <p className="code">Cód:1934</p>
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
                                    <p>2 quartos</p>
                                </div>
                                <div>
                                    <img
                                        src={imgCar}
                                        width={imgCar.width}
                                        height={imgCar.height}
                                        alt="Vagas"
                                    />
                                    <p>1 vaga</p>
                                </div>
                                <div>
                                    <img
                                        src={imgSize}
                                        width={imgSize.width}
                                        height={imgSize.height}
                                        alt="Metros"
                                    />
                                    <p>28 mª</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselMoveis;

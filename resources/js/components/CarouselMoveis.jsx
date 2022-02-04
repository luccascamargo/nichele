/* eslint-disable no-unused-vars */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import '../../sass/carouselMoveis.scss'
import imageBox from "../../../public/assets/images/image-imovel.png";
import imgMovel from "../../../public/assets/images/movel.png";
import imgBed from "../../../public/assets/svg/bed-icon.svg";
import imgCar from "../../../public/assets/svg/car-icon.png";
import imgSize from "../../../public/assets/svg/size-icon.svg";

const responsive = {
    desktopFull: {
        breakpoint: { max: 3000, min: 1440 },
        items: 3,
        partialVisibilityGutter: 220,
    },
    desktop: {
        breakpoint: { max: 1440, min: 1024 },
        items: 3,
        partialVisibilityGutter: 20,
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
                <a href="/imoveis">encontre mais imóveis</a>
            </div>
        </div>
    );
};

const CarouselMoveis = ({data}) => {
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
                draggable={false}
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
                <div />
                {data?.map(item => {
                    return (
                    <a href={`/imovel?code=${item?.CODIGOIMOVEL}`} key={item?.CODIGOIMOVEL} className="box">
                        <div>
                            <span className="tipo">{item?.TIPOALUGUEL === "S" ? 'Aluguel': '' || item?.TIPOVENDA === 'S' ? 'Venda' : ''}</span>
                            {/* <img
                                className="image"
                                src={imgMovel}
                                width={"384px"}
                                height={"384px"}
                                alt="teste"
                            /> */}
                            {item?.ALBUM?.length > 0 ? (
                                <img
                                src={"/images/viasw/fotos/" + item?.ALBUM}
                                alt="Imagem Imovel"
                                width={"384px"}
                                height={"384px"}
                                style={{borderTopLeftRadius: "40px", borderTopRightRadius: "40px"}}
                            />
                            ) : (
                                <img
                                    src={imageBox}
                                    alt="Imagem teste"
                                    width={"384px"}
                                    height={"384px"}
                                    style={{borderTopLeftRadius: "40px", borderTopRightRadius: "40px"}}
                                />
                            )}
                            <div className="content">
                                <div className="info">
                                    <div>
                                        <p className="title">{item?.TIPOIMOVEL}</p>
                                        <p className="local">
                                            {item?.ENDERECO}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="price">
                                        {item?.TIPOVENDA === "S"
                                        ? Number(
                                              item?.VALORVENDA
                                          ).toLocaleString("pt-br", {
                                              style: "currency",
                                              currency: "BRL",
                                          })
                                        : Number(
                                              item?.VALORALUGUEL
                                          ).toLocaleString("pt-br", {
                                              style: "currency",
                                              currency: "BRL",
                                          })}
                                        </p>
                                        <p className="code">Cód:{item?.CODIGOIMOVEL}</p>
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
                                        <p>{item?.QUANTIDADEDORMITORIO || '0'} quartos</p>
                                    </div>
                                    <div>
                                        <img
                                            src={imgCar}
                                            width={imgCar.width}
                                            height={imgCar.height}
                                            alt="Vagas"
                                        />
                                        <p>{item?.QUANTIDADEGARAGEM || '0'} vagas</p>
                                    </div>
                                    <div>
                                        <img
                                            src={imgSize}
                                            width={imgSize.width}
                                            height={imgSize.height}
                                            alt="Metros"
                                        />
                                        <p>{item?.AREAPRIVATIVA || '0'} mª</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                )})}
            </Carousel>
        </div>
    );
};

export default CarouselMoveis;

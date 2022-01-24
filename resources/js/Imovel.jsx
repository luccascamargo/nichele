/* eslint-disable no-irregular-whitespace */
/* eslint-disable import/no-unresolved */
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useForm } from "react-hook-form";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import Swiper core and required modules
import SwiperCore from "swiper";

import { api } from "./plugins/api";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ButtonPrimary } from "./components/Button";

import iconFacebook from "../../public/assets/images/imovel/icon-facebook.png";
import iconWhats from "../../public/assets/images/imovel/icon-whats.png";
import iconFav from "../../public/assets/images/imovel/icon-favorito.png";
import iconCar from "../../public/assets/images/imovel/icon-car.png";
import iconRegua from "../../public/assets/images/imovel/icon-regua.png";
import iconSol from "../../public/assets/images/imovel/icon-sol.png";
import iconChuveiro from "../../public/assets/images/imovel/icon-chuveiro.png";
import iconCama from "../../public/assets/images/imovel/icon-cama.png";
import iconAgua from "../../public/assets/images/imovel/icon-agua.png";
import iconElevador from "../../public/assets/images/imovel/icon-elevador.png";
import iconMobiliado from "../../public/assets/images/imovel/icon-mobiliado.png";
import iconTerraco from "../../public/assets/images/imovel/icon-terraco.png";
import iconLoc from "../../public/assets/images/imovel/icon-loc.png";
import iconInfo from "../../public/assets/images/imovel/icon-info.png";
import imageBox from "../../public/assets/images/image-imovel.png";

import image from "../../public/assets/images/img-carousel.png";

import "../sass/imovel.scss";

const responsive = {
    desktopFull: {
        breakpoint: { max: 3000, min: 1440 },
        items: 4,
        partialVisibilityGutter: 40,
    },
    desktop: {
        breakpoint: { max: 1440, min: 1024 },
        items: 4,
        // partialVisibilityGutter: 30,
    },
    desktopSmall: {
        breakpoint: { max: 1024, min: 600 },
        items: 3,
        // partialVisibilityGutter: 100,
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        partialVisibilityGutter: 20,
    },
};

export const Imovel = () => {
    const [building, setBuilding] = useState({
        pending: false,
        value: undefined,
    });
    const [characteristics, setCharacteristics] = useState({
        pending: false,
        value: undefined,
    });
    const [album, setAlbum] = useState({
        pending: false,
        value: undefined,
    });

    useEffect(() => {
        setBuilding({ pending: true, value: undefined });
        setCharacteristics({ pending: true, value: undefined });
        setAlbum({ pending: true, value: undefined });

        const params = new URLSearchParams(window.location.search);
        const id = params.get("code");

        const fetchBuildingById = async () => {
            params.append("code", id);
            let response = await api.get(`/api/buildings?${params.toString()}`);
            response = await response.data.data[0];
            setBuilding({
                pending: true,
                value: response,
            });
        };

        const fetchCharacteristicsById = async () => {
            let response = await api.get(`/api/characteristics/${id}`);
            response = await response.data;
            setCharacteristics({
                pending: true,
                value: response,
            });
        };

        const fetchAlbumById = async () => {
            let response = await api.get(`/api/photos/${id}`);
            response = await response.data;
            setAlbum({
                pending: true,
                value: response,
            });
        };

        fetchBuildingById();
        fetchCharacteristicsById();
        fetchAlbumById();
    }, []);

    console.log(album);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    const Image = ({ src, alt, fallback }) => {
        const [error, setError] = useState(false);

        const onError = () => {
            setError(true);
        };

        return error ? (
            fallback
        ) : (
            <div className="image">
                <img src={src} alt={alt} onError={onError} />
            </div>
        );
    };

    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className="wrap">
                <div className="navegacao">
                    <div className="esq">
                        <a href="/home">Home {">"}</a>
                        <a href="/home">Imóveis {">"}</a>
                        <span>Locação</span>
                    </div>
                    <div className="dir">
                        <a href="/imoveis">{"< "}Voltar</a>
                    </div>
                </div>
            </div>
            {album?.value?.length > 0 ? (
                <Carousel
                    partialVisible={true}
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlaySpeed={8000}
                    centerMode={false}
                    containerClass="carousel-container-imovel"
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass="item"
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderDotsOutside={false}
                    responsive={responsive}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    customTransition={"transform 800ms ease-in-out"}
                >
                    {album?.value?.map((photo) => (
                        <Image
                            src={"/images/viewsw/fotos/" + photo.ARQUIVOFOTO}
                            alt={photo.DESCRICAO}
                            fallback={<div></div>}
                        />
                    ))}
                </Carousel>
            ) : (
                ""
            )}
            <div className="container__aside">
                <div className="content__aside">
                    <div className="top">
                        <div className="top__esq">
                            <a href="#">Veja todas as fotos</a>
                            <a href="#">Localização</a>
                        </div>
                        <div className="top__dir">
                            <div className="compartilhar">
                                <span>Compartilhar:</span>
                                <img src={iconFacebook} alt="Facebook" />
                                <img src={iconWhats} alt="Whats" />
                            </div>
                            <div className="favoritar">
                                <img src={iconFav} alt="Favorito" />
                                <span>Favoritar</span>
                            </div>
                        </div>
                    </div>
                    <div className="line" />
                    <div className="bottom">
                        <div className="item">
                            <img src={iconCar} alt="" />
                            <span>
                                {building?.value?.QUANTIDADEGARAGEM === null
                                    ? "Sem garagem"
                                    : building?.value?.QUANTIDADEGARAGEM +
                                      "vaga(s)"}
                            </span>
                        </div>
                        <div className="border" />
                        <div className="item">
                            <img src={iconRegua} alt="" />
                            <span>{building?.value?.AREATOTAL} m</span>
                        </div>
                        <div className="border" />
                        <div className="item">
                            <img src={iconCama} alt="" />
                            <span>
                                {building?.value?.QUANTIDADEDORMITORIO}{" "}
                                quarto(s)
                            </span>
                        </div>
                        <div className="border" />
                        <div className="item">
                            <img src={iconChuveiro} alt="" />
                            <span>
                                {building?.value?.QUANTIDADEBANHEIRO}{" "}
                                banheiro(s)
                            </span>
                        </div>
                        <div className="border" />
                        <div className="item">
                            <img src={iconSol} alt="" />
                            <span>Oeste</span>
                        </div>
                    </div>
                </div>
            </div>

            <main id="main__imovel">
                <div className="content__main">
                    <div className="esq">
                        <div className="header__main">
                            <div className="title">
                                <p>{building?.value?.TIPOIMOVEL}</p>
                                <p>
                                    {building?.value?.BAIRRO} -{" "}
                                    {building?.value?.CIDADE}
                                </p>
                                <p>Cód: #{building?.value?.CODIGOIMOVEL}</p>
                            </div>
                            <div className="price">
                                <div className="tag">
                                    <span>
                                        {building?.value?.TIPOVENDA === "N"
                                            ? "Aluguel"
                                            : "Venda"}
                                    </span>
                                </div>
                                <span>
                                    {building?.value?.TIPOVENDA === "S"
                                        ? Number(
                                              building?.value?.VALORVENDA
                                          ).toLocaleString("pt-br", {
                                              style: "currency",
                                              currency: "BRL",
                                          })
                                        : Number(
                                              building?.value?.VALORALUGUEL
                                          ).toLocaleString("pt-br", {
                                              style: "currency",
                                              currency: "BRL",
                                          })}
                                </span>
                            </div>
                        </div>
                        <div className="line__esq" />
                        <div className="body__main">
                            <span>Principais características</span>
                            <div className="diferenciais">
                                {characteristics?.value?.map((d) => (
                                    <div
                                        className="item"
                                        key={d.CODIGOCARACTERISTICA}
                                    >
                                        <img src={iconAgua} alt="" />
                                        <span>{d.descricao}</span>
                                    </div>
                                ))}
                            </div>
                            <span>Sobre o imovel</span>
                            <p>
                                {building?.value?.DESCRICAOVENDA === null
                                    ? building?.value?.DESCRICAOALUGUEL
                                    : building?.value?.DESCRICAOVENDA}
                            </p>

                            <div className="proximidade">
                                <div className="top__proximidade">
                                    <img src={iconLoc} alt="" />
                                    <span>Proximidade</span>
                                </div>
                                <span>Colégio Madre Imilda</span>
                            </div>
                        </div>
                    </div>
                    <div className="dir">
                        <div className="header__dir">
                            <span>Informacoes adicionais</span>
                            <div className="item__header__dir">
                                <div className="esq__header__dir">
                                    <img src={iconInfo} alt="" />
                                    <span>Condomínio</span>
                                </div>
                                <div className="dir__header__dir">
                                    <span>
                                        {building?.value?.VALORCONDOMINIO ===
                                        null
                                            ? "-"
                                            : Number(
                                                  building?.value
                                                      ?.VALORCONDOMINIO
                                              ).toLocaleString("pt-br", {
                                                  style: "currency",
                                                  currency: "BRL",
                                              })}
                                    </span>
                                </div>
                            </div>
                            <div className="item__header__dir">
                                <div className="esq__header__dir">
                                    <img src={iconInfo} alt="" />
                                    <span>IPTU</span>
                                </div>
                                <div className="dir__header__dir">
                                    <span>
                                        {building?.value?.VALORIPTU === null
                                            ? "-"
                                            : Number(
                                                  building?.value?.VALORIPTU
                                              ).toLocaleString("pt-br", {
                                                  style: "currency",
                                                  currency: "BRL",
                                              })}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="formulario">
                            <h3>Tenho interesse</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Nome"
                                    className={errors.name && "error"}
                                />
                                <input
                                    type="text"
                                    {...register("email", { required: true })}
                                    placeholder="E-mail"
                                />
                                <input
                                    type="text"
                                    {...register("phone", { required: true })}
                                    placeholder="Telefone"
                                />
                                <textarea
                                    type="text"
                                    {...register("message", { required: true })}
                                    placeholder="Mensagem"
                                />
                                <div className="checkbox">
                                    <input
                                        type="checkbox"
                                        {...register("checkbox", {
                                            required: true,
                                        })}
                                        name="teste"
                                        id="teste"
                                    />
                                    <span className="text">
                                        Li e aceito os <a href="/">termos</a>
                                    </span>
                                </div>

                                <ButtonPrimary type="submit">
                                    Fale conosco
                                </ButtonPrimary>
                            </form>
                        </div>

                        <div className="contact">
                            <span>Entre em contato pelo whats</span>
                            <ButtonPrimary>
                                <img src={iconWhats} alt="" />
                                Whats locação
                            </ButtonPrimary>
                        </div>
                    </div>
                </div>
            </main>
            <div className="carousel__relacionais">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        425: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1920: {
                            slidesPerView: 5,
                            spaceBetween: 60,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="box__imoveis">
                            <div className="sticker">
                                <span>Venda</span>
                            </div>
                            <img src={imageBox} alt="Imagem imovel" />
                            <div className="infos">
                                <div className="top">
                                    <div className="title__box">
                                        <span>Casa</span>
                                        <p>Centro - Caxias do sul</p>
                                    </div>
                                    <div className="value__box">
                                        <span>R$1.000,00</span>
                                        <p>Cód:1934</p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="desc">
                                        <img src={iconCama} alt="" />
                                        <p>2 quartos</p>
                                    </div>
                                    <div className="desc">
                                        <img src={iconCar} alt="" />
                                        <p>1 vaga</p>
                                    </div>
                                    <div className="desc">
                                        <img src={iconRegua} alt="" />
                                        <p>98 m²</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box__imoveis">
                            <div className="sticker">
                                <span>Venda</span>
                            </div>
                            <img src={imageBox} alt="Imagem imovel" />
                            <div className="infos">
                                <div className="top">
                                    <div className="title__box">
                                        <span>Casa</span>
                                        <p>Centro - Caxias do sul</p>
                                    </div>
                                    <div className="value__box">
                                        <span>R$1.000,00</span>
                                        <p>Cód:1934</p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="desc">
                                        <img src={iconCama} alt="" />
                                        <p>2 quartos</p>
                                    </div>
                                    <div className="desc">
                                        <img src={iconCar} alt="" />
                                        <p>1 vaga</p>
                                    </div>
                                    <div className="desc">
                                        <img src={iconRegua} alt="" />
                                        <p>98 m²</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box__imoveis">
                            <div className="sticker">
                                <span>Venda</span>
                            </div>
                            <img src={imageBox} alt="Imagem imovel" />
                            <div className="infos">
                                <div className="top">
                                    <div className="title__box">
                                        <span>Casa</span>
                                        <p>Centro - Caxias do sul</p>
                                    </div>
                                    <div className="value__box">
                                        <span>R$1.000,00</span>
                                        <p>Cód:1934</p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="desc">
                                        <img src={iconCama} alt="" />
                                        <p>2 quartos</p>
                                    </div>
                                    <div className="desc">
                                        <img src={iconCar} alt="" />
                                        <p>1 vaga</p>
                                    </div>
                                    <div className="desc">
                                        <img src={iconRegua} alt="" />
                                        <p>98 m²</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box__imoveis">
                            <div className="sticker">
                                <span>Venda</span>
                            </div>
                            <img src={imageBox} alt="Imagem imovel" />
                            <div className="infos">
                                <div className="top">
                                    <div className="title__box">
                                        <span>Casa</span>
                                        <p>Centro - Caxias do sul</p>
                                    </div>
                                    <div className="value__box">
                                        <span>R$1.000,00</span>
                                        <p>Cód:1934</p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="desc">
                                        <img src={iconCama} alt="" />
                                        <p>2 quartos</p>
                                    </div>
                                    <div className="desc">
                                        <img src={iconCar} alt="" />
                                        <p>1 vaga</p>
                                    </div>
                                    <div className="desc">
                                        <img src={iconRegua} alt="" />
                                        <p>98 m²</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box__imoveis">
                            <div className="sticker">
                                <span>Venda</span>
                            </div>
                            <img src={imageBox} alt="Imagem imovel" />
                            <div className="infos">
                                <div className="top">
                                    <div className="title__box">
                                        <span>Casa</span>
                                        <p>Centro - Caxias do sul</p>
                                    </div>
                                    <div className="value__box">
                                        <span>R$1.000,00</span>
                                        <p>Cód:1934</p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="desc">
                                        <img src={iconCama} alt="" />
                                        <p>2 quartos</p>
                                    </div>
                                    <div className="desc">
                                        <img src={iconCar} alt="" />
                                        <p>1 vaga</p>
                                    </div>
                                    <div className="desc">
                                        <img src={iconRegua} alt="" />
                                        <p>98 m²</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box__imoveis">
                            <div className="sticker">
                                <span>Venda</span>
                            </div>
                            <img src={imageBox} alt="Imagem imovel" />
                            <div className="infos">
                                <div className="top">
                                    <div className="title__box">
                                        <span>Casa</span>
                                        <p>Centro - Caxias do sul</p>
                                    </div>
                                    <div className="value__box">
                                        <span>R$1.000,00</span>
                                        <p>Cód:1934</p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="desc">
                                        <img src={iconCama} alt="" />
                                        <p>2 quartos</p>
                                    </div>
                                    <div className="desc">
                                        <img src={iconCar} alt="" />
                                        <p>1 vaga</p>
                                    </div>
                                    <div className="desc">
                                        <img src={iconRegua} alt="" />
                                        <p>98 m²</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <Footer />
        </>
    );
};

if (document.getElementById("imovel")) {
    ReactDOM.render(<Imovel />, document.getElementById("imovel"));
}

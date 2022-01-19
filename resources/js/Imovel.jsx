/* eslint-disable no-irregular-whitespace */
/* eslint-disable import/no-unresolved */
import ReactDOM from "react-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useForm } from "react-hook-form";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


// import Swiper core and required modules
import SwiperCore from "swiper";

// install Swiper modules


import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CarouselMoveis } from "./components/CarouselMoveis";
import {ButtonPrimary} from './components/Button'

import iconFacebook from '../../public/assets/images/imovel/icon-facebook.png'
import iconWhats from '../../public/assets/images/imovel/icon-whats.png'
import iconFav from '../../public/assets/images/imovel/icon-favorito.png'
import iconCar from '../../public/assets/images/imovel/icon-car.png'
import iconRegua from '../../public/assets/images/imovel/icon-regua.png'
import iconSol from '../../public/assets/images/imovel/icon-sol.png'
import iconChuveiro from '../../public/assets/images/imovel/icon-chuveiro.png'
import iconCama from '../../public/assets/images/imovel/icon-cama.png'
import iconAgua from '../../public/assets/images/imovel/icon-agua.png'
import iconElevador from '../../public/assets/images/imovel/icon-elevador.png'
import iconMobiliado from '../../public/assets/images/imovel/icon-mobiliado.png'
import iconTerraco from '../../public/assets/images/imovel/icon-terraco.png'
import iconLoc from '../../public/assets/images/imovel/icon-loc.png'
import iconInfo from '../../public/assets/images/imovel/icon-info.png'
import imageBox from "../../public/assets/images/image-imovel.png";

import image from '../../public/assets/images/img-carousel.png'

import '../sass/imovel.scss'
import { ErrorSharp } from "@mui/icons-material";

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
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className="wrap">
                <div className="navegacao">
                    <div className="esq">
                        <a href="/home">Home {'>'}</a>
                        <a href="/home">Imóveis {'>'}</a>
                        <span>Locação</span>
                    </div>
                    <div className="dir">
                        <a href="/imoveis">{'< '}Voltar</a>
                    </div>
                </div>
            </div>
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
                <div className="image">
                    <img src={image} alt="image" />
                </div>
                <div className="image">
                    <img src={image} alt="image" />
                </div>
                <div className="image">
                    <img src={image} alt="image" />
                </div>
                <div className="image">
                    <img src={image} alt="image" />
                </div>
                <div className="image">
                    <img src={image} alt="image" />
                </div>
                <div className="image">
                    <img src={image} alt="image" />
                </div>
            </Carousel>
            <div className="container__aside">
                <div className="content__aside">
                    <div className="top">
                        <div className="top__esq">
                            <a href="#">
                                Veja todas as fotos
                            </a>
                            <a href="#">
                                Localização
                            </a>
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
                    <div className="line"/>
                    <div className="bottom">
                        <div className="item">
                            <img src={iconCar} alt="" />
                            <span>1 vaga</span>
                        </div>
                        <div className="border" />
                        <div className="item">
                            <img src={iconRegua} alt="" />
                            <span>98 m</span>
                        </div>
                        <div className="border" />
                        <div className="item">
                            <img src={iconCama} alt="" />
                            <span>2 quartos</span>
                        </div>
                        <div className="border" />
                        <div className="item">
                            <img src={iconChuveiro} alt="" />
                            <span>1 banheiro</span>
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
                                <p>Apartamento</p>
                                <p>Centro - Caxias do Sul</p>
                                <p>Cód: #9959</p>
                            </div>
                            <div className="price">
                                <div className="tag">
                                    <span>Alugel</span>
                                </div>
                                <span>R$1.000,00</span>
                            </div>
                        </div>
                        <div className="line__esq" />
                        <div className="body__main">
                            <span>Principais características</span>
                            <div className="diferenciais">
                                <div className="item">
                                    <img src={iconAgua} alt="" />
                                    <span>Agua quente</span>
                                </div>
                                <div className="item">
                                    <img src={iconElevador} alt="" />
                                    <span>Elevador</span>
                                </div>
                                <div className="item">
                                    <img src={iconMobiliado} alt="" />
                                    <span>Mobiliado</span>
                                </div>
                                <div className="item">
                                    <img src={iconTerraco} alt="" />
                                    <span>Terraço</span>
                                </div>
                            </div>
                            <span>Sobre o imovel</span>
                            <p>
                            In donec in convallis in neque, auctor nisl. Diam enim leo consectetur feugiat neque nisl fermentum semper mauris. Nisl orci, id velit sapien eu. Facilisis tempus convallis aliquam tortor netus volutpat nisl, neque eget. Pellentesque in id amet molestie id enim dictum.

                            Laoreet quam quisque dictumst sit hac ligula euismod vel in. Mauris, mauris et adipiscing urna, nunc ipsum pellentesque. Commodo gravida aliquam purus integer.

                            Apartamento mobiliado com:

                            {'>'} 1 dormitório
                            {'>'} Sala de estar
                            {'>'} Cozinha
                            {'>'} Banheiro social
                            {'>'} Área de serviço
                            {'>'} Água quente
                            {'>'} Gás encanado
                            {'>'} Piso laminado e porcelanato
                            {'>'} 1 vaga de garagem
                            {'>'} Salão de Festas
                            {'>'} Sala de TV
                            Condomínio Sujeito a Alteração: R$170,00
                            ENTREGA DO APTO EM JAN/2021

                            CONFIRA: (54) 3289-2900
                            OU VIA WHATSAPP: (54) 99658-3631
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
                                    <span>R$250,00</span>
                                </div>
                            </div>
                            <div className="item__header__dir">
                                <div className="esq__header__dir">
                                    <img src={iconInfo} alt="" />
                                    <span>IPTU</span>
                                </div>
                                <div className="dir__header__dir">
                                    <span>R$250,00</span>
                                </div>
                            </div>
                        </div>

                        <div className="formulario">
                            <h3>Tenho interesse</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" {...register("name", { required: true })} placeholder="Nome" className={errors.name && 'error'}/>
                                <input type="text" {...register("email", { required: true })} placeholder="E-mail" />
                                <input type="text" {...register("phone", { required: true })} placeholder="Telefone" />
                                <textarea type="text" {...register("message", { required: true })} placeholder="Mensagem" />
                                <div className="checkbox">
                                    <input
                                        type="checkbox"
                                        {...register("checkbox", { required: true })}
                                        name="teste"
                                        id="teste"
                                    />
                                    <span className="text">
                                        Li e aceito os <a href="/">termos</a>
                                    </span>
                                </div>

                                <ButtonPrimary type="submit">Fale conosco</ButtonPrimary>
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
                    "320": {
                        slidesPerView: 1,
                        spaceBetween: 10
                      },
                    "425": {
                      slidesPerView: 1,
                      spaceBetween: 10
                    },
                    "768": {
                        slidesPerView: 2,
                        spaceBetween: 20
                      },
                    "1024": {
                      slidesPerView: 3,
                      spaceBetween: 30
                    },
                    "1440": {
                      slidesPerView: 4,
                      spaceBetween: 40
                    },
                    "1920": {
                        slidesPerView: 5,
                        spaceBetween: 60
                      }
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
}

if (document.getElementById("imovel")) {
    ReactDOM.render(<Imovel />, document.getElementById("imovel"));
}





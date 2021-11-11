/* eslint-disable no-irregular-whitespace */
/* eslint-disable import/no-unresolved */
import ReactDOM from "react-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import "../sass/sobre.scss";

import imageInfo from "../../public/assets/images/banner-info.png";
import imageCarousel from "../../public/assets/images/image-carousel.png";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 961 },
        items: 1,
        // partialVisibilityGutter: 40,
    },
    tablet: {
        breakpoint: { max: 961, min: 641 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 641, min: 0 },
        items: 1,
    },
};

export default function Sobre() {
    return (
        <>
            <header className="header__sobre">
                <Navbar />
                <div className="content__sobre">
                    <span>Sobre nós</span>
                    <h1>
                        A mais de 50 anos no mercado, oferecendo soluções
                        imobiliárias
                    </h1>
                </div>
            </header>

            <div className="content__infos">
                <div className="info">
                    <p>
                        A mais de 50 anos no mercado, oferecendo soluções
                        imobiliárias na Administração de Aluguéis e na Venda de
                        Imóveis.
                    </p>
                    <p>
                        Somos uma empresa moderna, com visão de futuro. Buscamos
                        permanentemente a qualificação dos serviços prestados,
                        comprometidos com a satisfação, lucratividade e a
                        qualidade de vida dos nossos clientes, parceiros e
                        colaboradores.
                    </p>
                    <p>
                        Dispomos de uma equipe de profissionais especializados,
                        tecnologia e diversos canais de atendimento, que
                        proporcionam aos nossos clientes soluções inteligentes
                        com excelência de qualidade e confiança.Com sede
                        própria, localizada no centro da cidade, nossa estrutura
                        oferece comodidade e agilidade.
                    </p>
                </div>
                <div className="img">
                    <img src={imageInfo} alt="Imagem 50 anos" />
                </div>
            </div>

            <div className="content__carousel">
                <div className="carousel">
                    <Carousel
                        partialVisible={true}
                        additionalTransfrom={0}
                        arrows={false}
                        autoPlaySpeed={3000}
                        centerMode={false}
                        containerClass="content__carousel__sobre"
                        dotListClass="content__carousel__sobre__dotList"
                        draggable
                        focusOnSelect={false}
                        infinite={false}
                        itemClass="content__carousel__sobre__item"
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside
                        renderDotsOutside={false}
                        responsive={responsive}
                        showDots={true}
                        sliderClass=""
                        slidesToSlide={1}
                        customTransition={"transform 800ms ease-in-out"}
                    >
                        <div className="box__carousel">
                            <img src={imageCarousel} alt="Carousel" />
                        </div>
                        <div className="box__carousel">
                            <img src={imageCarousel} alt="Carousel" />
                        </div>
                    </Carousel>
                </div>
                <div className="infos__carousel">
                    <h2>
                        Somos conhecidos no mercado imobiliário pelo
                        profissionalismo e pela ética com que conduzimos os
                        negócios
                    </h2>
                    <p>
                        A Imobiliária Nichele foi fundada em 1969, em Caxias do
                        Sul, pelo seu atual Diretor Ivor Emilio Nichele. Em
                        1987, ampliamos as atividades, ingressando na construção
                        civil de imóveis residenciais e comerciais. Somos
                        responsáveis pela construção de milhares de metros
                        quadrados em apartamentos, sobrados, lojas e salas
                        comerciais.
                    </p>
                    <p>
                        A confiança e a credibilidade adquirida nesses anos de
                        atuação, são os motivos que nos levam ao sucesso na
                        administração, nas vendas e na construção de imóveis,
                        contribuindo assim para o desenvolvimento da região e do
                        setor imobiliário com o respeito e a confiança que a
                        cidade merece.
                    </p>
                    <p>
                        A direção da Imobiliária Nichele é exercida pelo sócio
                        fundador Ivor Emilio Nichele e seu filho Ricardo Antonio
                        Nichele.
                    </p>
                    <p>
                        Somos conhecidos no mercado imobiliário pelo
                        profissionalismo e pela ética com que conduzimos os
                        negócios, proporcionando segurança e tranquilidade na
                        gestão de imóveis.
                    </p>
                    <p>
                        A realização do seu sonho está aqui, descomplique com a
                        Nichele.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

if (document.getElementById("sobre")) {
    ReactDOM.render(<Sobre />, document.getElementById("sobre"));
}

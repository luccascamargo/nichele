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
    return (
        <>
            <header className="header__sobre">
                <Navbar />
                <div className="content__sobre">
                    <span>Sobre nós</span>
                    <h1>
                        Há mais de 50 anos no mercado, oferecendo soluções
                        imobiliárias
                    </h1>
                </div>
            </header>

            <div className="content__infos">
                <div className="info">
                    <p>
                    Há mais de 50 anos no mercado, oferecendo soluções imobiliárias na administração de alugueis e na venda de imóveis.
                    </p>
                    <p>
                        Somos uma empresa moderna e que tem visão de futuro. Buscamos
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
                    Reconhecimento, profissionalismo e ética na condução dos negócios
                    </h2>
                    <p>
                    Fundada em 1969, em Caxias do Sul, por Ivor Emilio Nichele, a Imobiliária Nichele ampliou suas atividades no ano de 1987, ingressando na construção civil de imóveis residenciais e comerciais. Ao longo desse período, milhares de metros quadrados em apartamentos, sobrados, lojas e salas comerciais foram construídos.
                    </p>
                    <p>
                    A confiança e a credibilidade adquiridas nesses anos foram os motivos que levaram a empresa ao sucesso na administração, vendas e construção de imóveis que possui nos dias atuais.
                    </p>
                    <p>
                    Hoje, o sócio fundador Ivor Emilio Nichele e seu filho Ricardo Antônio Nichele administram juntos a Imobiliária, que segue crescendo e contribuindo para o desenvolvimento da região e do setor imobiliário com o respeito e a confiança que a cidade merece.
                    </p>
                    <p>
                    A realização do seu sonho está aqui. Descomplique com a Nichele.
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

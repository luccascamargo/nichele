/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable import/no-unresolved */
import ReactDOM from "react-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import "../sass/blog.scss";

import imageInfo from "../../public/assets/images/banner-info.png";
import imageBack from "../../public/assets/svg/back-icon.svg";
import facebookShare from "../../public/assets/svg/facebook-share.svg";
import linkedinShare from "../../public/assets/svg/linkedin-share.svg";
import whatsShare from "../../public/assets/svg/whats-share.svg";

export default function BlogInterna() {
    return (
        <>
            <header className="header__blog">
                <Navbar />
                <div className="content__blog">
                    <h1>Blog</h1>
                </div>
            </header>

            <div className="bloginterna">
                <span className="date">16/08/2021</span>
                <h1>As mulheres e o mercado imobiliário</h1>
                <img className="imagem" src={imageInfo} alt="Image" />
                <p className="text">
                    Durante o mês de março, tempo de homenagear as mulheres e
                    seu trabalho incrível em diversas áreas, não poderia faltar
                    uma retrospectiva sobre a atuação das mulheres no mercado
                    imobiliário. Apesar da profissão de corretor de imóveis já
                    existir há muitos anos, a atuação das mulheres no setor só
                    foi permitida a partir de março de 1958. Isso porque o
                    artigo 37 do Código Comercial Brasileiro, proibia as
                    mulheres de atuarem como corretora de imóveis até essa data.
                    Mas esse passado de exclusão há algum tempo está sendo
                    deixado para trás, pois uma pesquisa de 2013 do Conselho
                    Federal de Corretores de Imóveis (Cofeci) apontou que, entre
                    2003 e 2013, o crescimento do número de mulheres na
                    categoria foi de 144%. Já a Revista Exame divulgou em 2016,
                    uma pesquisa indicando que 48% dos profissionais corretores
                    de imóveis brasileiros já são mulheres. Além da busca por
                    uma formação técnica e capacitação constante, as mulheres no
                    mercado imobiliário se destacam em diversos aspectos. Um
                    desses aspectos é uma atenção maior aos detalhes, a
                    imaginação e criatividade, a capacidade de enxergar as
                    necessidades de cada cliente, habilidade de negociação e
                    facilidade na comunicação. Mas apesar de estar conquistando
                    seu espaço, as mulheres enfrentam ainda muitos desafios,
                    muitas vezes relacionados com estereótipos de gênero e
                    ligados às expectativas comportamentais e exigências que a
                    sociedade tem para mulheres. Alguns desafios enfrentados
                    estão ligados à diferença de salários, dificuldade para
                    conquistar reconhecimento e promoções, os empregadores
                    muitas vezes possuem um estereótipo de que será difícil a
                    mulher conciliar o trabalho e os filhos. Além das
                    dificuldades impostas pela dupla jornada. As estatísticas no
                    Brasil apontam que as mulheres ainda são as que mais se
                    dedicam às atividades domésticas e cuidados com pessoas,
                    esse quadro é ainda mais desafiador. Mais do que educar,
                    devemos apoiar e trabalhar por uma sociedade igualitária que
                    valoriza o respeito às diferenças e promove a garantia ao
                    trabalho igual, tanto no mercado imobiliário, quanto em
                    qualquer outra áreas para as mulheres.
                </p>

                <div className="redes">
                    <a href="/blog" className="back">
                        <img src={imageBack} alt="Voltar" /> voltar
                    </a>
                    <div className="shareButtons">
                        <span>compartilhe nas redes</span>
                        <a href="#facebook">
                            <img src={facebookShare} alt="Facebook" />
                        </a>
                        <a href="#linkedin">
                            <img src={linkedinShare} alt="Linkedin" />
                        </a>
                        <a href="#whats">
                            <img src={whatsShare} alt="WhatsApp" />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

if (document.getElementById("bloginterna")) {
    ReactDOM.render(<BlogInterna />, document.getElementById("bloginterna"));
}

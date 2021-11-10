/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable import/no-unresolved */
import ReactDOM from "react-dom";

import "../sass/contato.scss";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import iconPhone from "../../public/assets/svg/contato/phone.svg";
import iconEmail from "../../public/assets/svg/contato/mail.svg";
import iconWhats from "../../public/assets/svg/contato/whats.svg";
import { Form } from "./components/Form";
import { Button } from "./components/Button";

export default function Contato() {
    return (
        <>
            <header>
                <Navbar />
                <div className="content__contato">
                    <div className="infos__contato">
                        <div className="title__contato">
                            <span>Contato</span>
                            <h1>Envia suas dúvidas, críticas ou sugestões</h1>
                        </div>
                        <section>
                            <div className="phone__contato">
                                <img
                                    src={iconPhone}
                                    alt="Telefone de contato"
                                />
                                <span>(54) 3289.2900</span>
                            </div>
                            <div className="email__contato">
                                <img src={iconEmail} alt="E-mail de contato" />
                                <a href="mailto:nichele@nicheleimoveis.com.br">
                                    nichele@nicheleimoveis.com.br
                                </a>
                            </div>
                            <div className="content__whats__contato">
                                <div className="w1">
                                    <img
                                        src={iconWhats}
                                        alt="Whatsapp Nichele"
                                    />
                                    <div className="w1__info__contato">
                                        <span>whats locação</span>
                                        <a href="tel:(54)999678976">
                                            (54) 99967.8976
                                        </a>
                                    </div>
                                </div>
                                <div className="w1">
                                    <img
                                        src={iconWhats}
                                        alt="Whatsapp Nichele"
                                    />
                                    <div className="w1__info__contato">
                                        <span>whats locação</span>
                                        <a href="tel:(54)999678976">
                                            (54) 99967.8976
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Form />
                </div>
            </header>
            <div className="anuncio">
                <div className="content__anuncio">
                    <h2>Anuncie seu imóvel</h2>
                    <p>
                        Anunciar seu imóvel na Nichele é fácil e seguro. Tenha
                        mais visibilidade na venda ou locação, além da
                        possibilidade de fechar negócios em menos tempo e mais
                        confiáveis.{" "}
                    </p>
                    <Button>Clique aqui</Button>
                </div>
            </div>
            <div className="iframe__contato">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d871.0003160668039!2d-51.18218117075731!3d-29.16463499888818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea2d50beee271%3A0xf340d87dc688966c!2sImobili%C3%A1ria%20Nichele!5e0!3m2!1spt-BR!2sbr!4v1636566475597!5m2!1spt-BR!2sbr" />
            </div>

            <Footer />
        </>
    );
}

if (document.getElementById("contato")) {
    ReactDOM.render(<Contato />, document.getElementById("contato"));
}

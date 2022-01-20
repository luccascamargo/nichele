/* eslint-disable import/no-unresolved */
import "../../sass/footer.scss";

import logoNichele from "../../../public/assets/svg/nichele-logo.svg";
import logoFacebook from "../../../public/assets/svg/facebook.svg";
import logoInstagram from "../../../public/assets/svg/instagram.svg";
import logoLinkedin from "../../../public/assets/svg/linkedin.svg";
import logoWhats from "../../../public/assets/svg/whats.svg";
import iconPhone from "../../../public/assets/svg/phone.svg";
import iconLocation from "../../../public/assets/svg/location.svg";
import logoMacaw from "../../../public/assets/svg/macaw.svg";

import { ButtonPrimary, ButtonClient } from "./Button";

export const Footer = () => {
    return (
        <div className="container__footer">
            <div className="content">
                <div className="one">
                    <div className="logo__sociais">
                        <div className="logo">
                            <a href="/">
                                <img
                                    src={logoNichele}
                                    alt="Imobiliaria Nichele"
                                />
                            </a>
                        </div>
                        <div className="sociais">
<<<<<<< HEAD
                        <a href="https://www.facebook.com/NicheleImoveis" target="_blank" rel="noreferrer">
=======
                            <a href="https://www.facebook.com/NicheleImoveis" target="_blank" rel="noreferrer">
>>>>>>> eac65508f7c7f439bd176f077db3505a60821368
                                <img
                                    src={logoFacebook}
                                    alt="Instagram Nichele"
                                />
                            </a>
                            <a href="https://www.instagram.com/nicheleimoveis/" target="_blank" rel="noreferrer">
                                <img
                                    src={logoInstagram}
                                    alt="Instagram Nichele"
                                />
                            </a>
                            <a href="https://www.linkedin.com/company/imobili%C3%A1ria-nichele/" target="_blank" rel="noreferrer">
                                <img
                                    src={logoLinkedin}
                                    alt="Instagram Nichele"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="buttons">
<<<<<<< HEAD
                    <a href="https://wa.me/54981158489" className="box" target="_blank" rel="noreferrer">
=======
                        <a href="https://wa.me/54999678976" className="box" target="_blank" rel="noreferrer">
>>>>>>> eac65508f7c7f439bd176f077db3505a60821368
                            <ButtonPrimary>
                                <img src={logoWhats} alt="Whats Nichele" />
                                Whats vendas
                            </ButtonPrimary>
                        </a>
<<<<<<< HEAD
                        <a href="https://wa.me/54996583631" className="box" target="_blank" rel="noreferrer">
=======

                        <a href="https://wa.me/54999678976" className="box" target="_blank" rel="noreferrer">
>>>>>>> eac65508f7c7f439bd176f077db3505a60821368
                            <ButtonPrimary>
                                <img src={logoWhats} alt="Whats Nichele" />
                                Whats locação
                            </ButtonPrimary>
                        </a>
<<<<<<< HEAD
                        <a href="https://portal.viaimob.com.br/" target="_blank" rel="noreferrer">
                            <ButtonClient text="Área do cliente" footer />
                        </a>
=======


                        <ButtonClient text="Área do cliente" footer />
>>>>>>> eac65508f7c7f439bd176f077db3505a60821368
                    </div>
                </div>
                <div className="line" />
                <div className="two">
                    <div className="infos">
                        <div className="phone">
                            <p>
                                <img
                                    src={iconPhone}
                                    alt="Telefone Imobiliária Nichele"
                                />
                                <a href="tel:5432892900">
                                    <span>54</span> 3289 2900
                                </a>
                            </p>
                        </div>
                        <div className="location">
                            <aside>
                                <div className="img">
                                    <img
                                        src={iconLocation}
                                        alt="Localização Imobiliária Nichele"
                                    />
                                </div>
                                <span>
                                    Rua Visconde de Pelotas, 381, Centro -
                                    Caxias do Sul / RS
                                    <p>com estacionamento para clientes</p>
                                </span>
                            </aside>
                        </div>
                    </div>
                    <div className="nav">
                        <dl>
                            <dt>Institucional</dt>
                            <dd>
<<<<<<< HEAD
                                <a href="/Sobre">
=======
                                <a href="/sobre">
>>>>>>> eac65508f7c7f439bd176f077db3505a60821368
                                    Sobre
                                </a>
                            </dd>
                            <dd>
<<<<<<< HEAD
                                <a href="/Blog">
=======
                                <a href="/blog">
>>>>>>> eac65508f7c7f439bd176f077db3505a60821368
                                    Blog
                                </a>
                            </dd>
                            <dd>
<<<<<<< HEAD
                                <a href="/Contato">
=======
                                <a href="/contato">
>>>>>>> eac65508f7c7f439bd176f077db3505a60821368
                                    Contato
                                </a>
                            </dd>
                        </dl>
                        <dl>
                            <dt>Imóveis</dt>
                            <dd>
<<<<<<< HEAD
                                <a href="/imoveis#alugar">
=======
                                <a href="/imveis#alugar">
>>>>>>> eac65508f7c7f439bd176f077db3505a60821368
                                    Alugar
                                </a>
                            </dd>
                            <dd>
<<<<<<< HEAD
                                <a href="/imoveis/comprar">
=======
                                <a href="/imoveis#comprar">
>>>>>>> eac65508f7c7f439bd176f077db3505a60821368
                                    Comprar
                                </a>
                            </dd>
                            <dd>
<<<<<<< HEAD
                                <a href="/imoveis#comperciais">
=======
                                <a href="/imoveis#comerciais">
>>>>>>> eac65508f7c7f439bd176f077db3505a60821368
                                    Imóveis comerciais
                                </a>
                            </dd>
                        </dl>
                    </div>
                    <div className="other">
                        <span>Junho 2021</span>
                        <table>
                            <tbody>
                                <tr>
                                    <th>INCC-M</th>
                                    <th>IGP-M</th>
                                </tr>
                                <tr>
                                    <td>2,20%</td>
                                    <td>4,20%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="macaw">
                    <a
                        href="https://macawbrasil.com.br"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={logoMacaw} alt="Macaw Marketing Vivo" />
                    </a>
                </div>
            </div>
        </div>
    );
};

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

import { Button, ButtonClient } from "./Button";

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
                            <a href="/">
                                <img
                                    src={logoFacebook}
                                    alt="Instagram Nichele"
                                />
                            </a>
                            <a href="/">
                                <img
                                    src={logoInstagram}
                                    alt="Instagram Nichele"
                                />
                            </a>
                            <a href="/">
                                <img
                                    src={logoLinkedin}
                                    alt="Instagram Nichele"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="buttons">
                        <Button>
                            <img src={logoWhats} alt="Whats Nichele" />
                            Whats vendas
                        </Button>
                        <Button>
                            <img src={logoWhats} alt="Whats Nichele" />
                            Whats locação
                        </Button>
                        <ButtonClient text="Área do cliente" footer />
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
                            <dd>Sobre</dd>
                            <dd>Blog</dd>
                            <dd>Contato</dd>
                        </dl>
                        <dl>
                            <dt>Imóveis</dt>
                            <dd>Alugar</dd>
                            <dd>Comprar</dd>
                            <dd>Imóveis comerciais</dd>
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

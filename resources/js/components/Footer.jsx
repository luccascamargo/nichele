/* eslint-disable import/no-unresolved */
import "../../sass/footer.scss";

import logoNichele from "../../../public/assets/svg/nichele-logo.svg";
import logoFacebook from "../../../public/assets/svg/Facebook.svg";
import logoInstagram from "../../../public/assets/svg/Instagram.svg";
import logoLinkedin from "../../../public/assets/svg/Linkedin.svg";
import logoWhats from "../../../public/assets/svg/whats.svg";
import iconPhone from "../../../public/assets/svg/phone.svg";
import iconLocation from "../../../public/assets/svg/location.svg";
import logoMacaw from "../../../public/assets/svg/macaw.svg";

import { ButtonPrimary, ButtonClient } from "./Button";

export const Footer = ({data}) => {
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
                        <a href={data.facebook} target="_blank" rel="noreferrer">
                                <img
                                    src={logoFacebook}
                                    alt="Instagram Nichele"
                                />
                            </a>
                            <a href={data.instagram} target="_blank" rel="noreferrer">
                                <img
                                    src={logoInstagram}
                                    alt="Instagram Nichele"
                                />
                            </a>
                            <a href={data.linkedin} target="_blank" rel="noreferrer">
                                <img
                                    src={logoLinkedin}
                                    alt="Instagram Nichele"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="buttons">
                    <a href={`https://wa.me/55054981158489`} className="box" target="_blank" rel="noreferrer">
                            <ButtonPrimary>
                                <img src={logoWhats} alt="Whats Nichele" />
                                Whats vendas
                            </ButtonPrimary>
                        </a>
                        <a href={`https://wa.me/55054996583631`} className="box" target="_blank" rel="noreferrer">
                            <ButtonPrimary>
                                <img src={logoWhats} alt="Whats Nichele" />
                                Whats locação
                            </ButtonPrimary>
                        </a>
                        <a href="https://portal.viaimob.com.br/42" target="_blank" rel="noreferrer">
                            <ButtonClient text="Área do cliente" footer />
                        </a>
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
                                <a href={`tel:5432892900`}>
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
                                    {data.address}
                                    <p>com estacionamento para clientes</p>
                                </span>
                            </aside>
                        </div>
                    </div>
                    <div className="nav">
                        <dl>
                            <dt>Institucional</dt>
                            <dd>
                                <a href="/sobre">
                                    Sobre
                                </a>
                            </dd>
                            <dd>
                                <a href="/blog">
                                    Blog
                                </a>
                            </dd>
                            <dd>
                                <a href="/contato">
                                    Contato
                                </a>
                            </dd>
                        </dl>
                        <dl>
                            <dt>Imóveis</dt>
                            <dd>
                                <a href="/imoveis#alugar">
                                    Alugar
                                </a>
                            </dd>
                            <dd>
                                <a href="/imoveis#comprar">
                                    Comprar
                                </a>
                            </dd>
                            <dd>
                                <a href="/imoveis#comperciais">
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

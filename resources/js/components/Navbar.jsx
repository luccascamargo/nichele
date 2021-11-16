/* eslint-disable import/no-unresolved */
import "../../sass/navbar.scss";

import logoNichele from "../../../public/assets/svg/nichele-logo.svg";
import { ButtonClient, ButtonMenu } from "./Button";

export const Navbar = () => {
    return (
        <div className="container__navbar">
            <div className="navbar">
                <div className="logo">
                    <a href="/">
                        <img src={logoNichele} alt="Nichele" />
                    </a>
                </div>

                <nav className="navbar__items">
                    <ul>
                        <a href="/">Home</a>
                        <a href="/">Imóveis</a>
                        <a href="/sobre">Sobre</a>
                        <a href="/blog">Blog</a>
                        <a href="/duvidas">Dúvidas</a>
                        <a href="/contato">Contato</a>
                    </ul>
                </nav>
                <div className="buttons">
                    <ButtonClient text="Área do cliente" />
                    <ButtonMenu text="Anuncie seu imóvel" />
                </div>
            </div>
        </div>
    );
};

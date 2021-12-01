/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonClient, ButtonMenu } from "./Button";

import "../../sass/mobileMenu.scss";

export function MobileMenu() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="container__menu__mobile">
                <div
                    className={
                        sidebar ? "navbar__mobile clear" : "navbar__mobile"
                    }
                >
                    <MenuIcon
                        onClick={showSidebar}
                        fontSize="large"
                        sx={{ color: "#fff" }}
                    />
                </div>
                <nav className={sidebar ? `nav-menu active` : `nav-menu`}>
                    <div className="container">
                        <div className="navbar-toggle">
                            <CloseIcon onClick={showSidebar} />
                        </div>
                        <ul className="nav-menu-items">
                            <li className="menu__items">
                                <a href="/">Home</a>
                            </li>
                            <li className="menu__items">
                                <a href="/imoveis">Imóveis</a>
                            </li>
                            <li className="menu__items">
                                <a href="/sobre">Sobre</a>
                            </li>
                            <li className="menu__items">
                                <a href="/blog">Blog</a>
                            </li>
                            <li className="menu__items">
                                <a href="/duvidas">Dúvidas</a>
                            </li>
                            <li className="menu__items">
                                <a href="/contato">Contato</a>
                            </li>
                        </ul>
                        <div className="buttons__mobile">
                            <a href="/">
                                <ButtonClient text="Área do cliente" />
                            </a>
                            <a href="/anuncie">
                                <ButtonMenu text="Anuncie seu imóvel" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

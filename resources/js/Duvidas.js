/* eslint-disable import/no-unresolved */
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { DuvidaAluguel } from "./components/DuvidaAluguel.jsx";
import { DuvidaAnuncios } from "./components/DuvidaAnuncios.jsx";
import { DuvidaDoc } from "./components/DuvidaDoc.jsx";
import { DuvidaVendas } from "./components/DuvidaVendas.jsx";
import { Footer } from "./components/Footer.jsx";

import { api } from './plugins/api';

import "../sass/duvidas.scss";

import iconSearch from "../../public/assets/svg/icon-search.svg";
import iconDoc from "../../public/assets/svg/icon-doc.svg";
import iconAnuncio from "../../public/assets/svg/icon-anuncio.svg";
import iconAluguel from "../../public/assets/svg/icon-aluguel.svg";
import iconVenda from "../../public/assets/svg/icon-venda.svg";

export default function Duvidas() {
    const [changeContent, setChangeContent] = useState("doc");
    const [faq, setFaq] = useState({doc: [], rent: [], buy: [], ad: []});

    const handleContent = (event) => {
        setChangeContent(event);
    };

    useEffect(async () => {
        const faqs = async () => {
            const { data } = await api.get('api/faqs');

            return data;
        }

        setFaq(await faqs());
    }, [])

    return (
        <>
            <header className="header__duvidas">
                <Navbar />
                <h1>Dúvidas</h1>
            </header>
            <div className="search__duvida">
                <span>
                    Selecione abaixo uma categoria ou procure no campo de busca
                    ao lado
                </span>

                <div className="content__search">
                    <input
                        type="text"
                        placeholder="Digite sua dúvida ou termo"
                    />

                    <button type="submit">
                        <img src={iconSearch} alt="Search" />
                    </button>
                </div>
            </div>

            <div className="container__buttons">
                <button
                    type="button"
                    className={changeContent === "doc" ? "active" : ""}
                    onClick={() => handleContent("doc")}
                >
                    <img src={iconDoc} alt="Doc" />
                    <span>Documentacao</span>
                </button>
                <button
                    type="button"
                    className={changeContent === "rent" ? "active" : ""}
                    onClick={() => handleContent("rent")}
                >
                    <img src={iconAluguel} alt="Doc" />
                    <span>Aluguel</span>
                </button>
                <button
                    type="button"
                    className={changeContent === "buy" ? "active" : ""}
                    onClick={() => handleContent("buy")}
                >
                    <img src={iconVenda} alt="Doc" />
                    <span>Venda</span>
                </button>
                <button
                    type="button"
                    className={changeContent === "ad" ? "active" : ""}
                    onClick={() => handleContent("ad")}
                >
                    <img src={iconAnuncio} alt="Doc" />
                    <span>Anuncio</span>
                </button>
            </div>

            <div className="container__conteudo">
                {changeContent === "doc" && <DuvidaDoc datas={faq.doc} />}
                {changeContent === "rent" && <DuvidaAluguel datas={faq.rent} />}
                {changeContent === "buy" && <DuvidaVendas datas={faq.buy} />}
                {changeContent === "ad" && <DuvidaAnuncios datas={faq.ad} />}
            </div>

            <Footer />
        </>
    );
}

if (document.getElementById("duvidas")) {
    ReactDOM.render(<Duvidas />, document.getElementById("duvidas"));
}

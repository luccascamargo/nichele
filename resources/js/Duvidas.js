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
    const [cmsInfo, setCmsInfo] = useState({});
    const [changeContent, setChangeContent] = useState("doc");
    const [documentation, setDocumentation] = useState([]);
    const [rent, setRent] = useState([]);
    const [sale, setSale] = useState([]);
    const [announcement, setAnnouncement] = useState([]);

    const handleContent = (event) => {
        setChangeContent(event);
    };

    useEffect(() => {
        const getCmsInfo = async () => {
            await fetch('http://localhost:1337/api/info', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => setCmsInfo(data.data.attributes));
        }
        getCmsInfo();
    }, [])


    useEffect(() => {
        const getRent = async () => {
            await fetch('http://localhost:1337/api/rents?populate=*', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => setRent(data.data));
        }
        getRent();
    }, [])

    useEffect(() => {
        const getAnnouncement = async () => {
            await fetch('http://localhost:1337/api/announcements?populate=*', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => setAnnouncement(data.data));
        }
        getAnnouncement();
    }, [])

    useEffect(() => {
        const getSale = async () => {
            await fetch('http://localhost:1337/api/sales?populate=*', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => setSale(data.data));
        }
        getSale();
    }, [])

    useEffect(() => {
        const getDocumentations = async () => {
            await fetch('http://localhost:1337/api/documentations?populate=*', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => setDocumentation(data.data));
        }
        getDocumentations();
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
                {changeContent === "doc" && <DuvidaDoc datas={documentation} />}
                {changeContent === "rent" && <DuvidaAluguel datas={rent} />}
                {changeContent === "buy" && <DuvidaVendas datas={sale} />}
                {changeContent === "ad" && <DuvidaAnuncios datas={announcement} />}
            </div>

            <Footer data={cmsInfo}/>
        </>
    );
}

if (document.getElementById("duvidas")) {
    ReactDOM.render(<Duvidas />, document.getElementById("duvidas"));
}

/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable import/no-unresolved */
import { useState } from "react";
import ReactDOM from "react-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Select from "react-select";
import InputRange from "react-input-range";

import { Button } from "./components/Button";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import CarouselMoveis from "../js/components/CarouselMoveis";

import imgDropdown from "../../public/assets/svg/dropdown-icon.svg";
import imgWhats from "../../public/assets/svg/whats-icon.svg";
import imgEmail from "../../public/assets/svg/email-icon.svg";
import imgFace from "../../public/assets/svg/face-icon.svg";
import imgInsta from "../../public/assets/svg/insta-icon.svg";
import imgLinke from "../../public/assets/svg/linke-icon.svg";

function Home() {
    const [range, setRange] = useState({
        value4: {
            min: 500,
            max: 1200,
        },
    });
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];

    return (
        <div className="container">
            <Navbar />
            <main className="main">
                <h1>A realização do seu sonho está aqui!</h1>

                <Tabs>
                    <TabList>
                        <Tab>Alugar</Tab>
                        <Tab>Comprar</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="containerTab">
                            <div className="div">
                                <label htmlFor="tipoMovel">
                                    Tipo de Imóvel{" "}
                                    <img
                                        src={imgDropdown}
                                        width={imgDropdown.width}
                                        height={imgDropdown.height}
                                        alt="Selecione"
                                    />
                                </label>
                                <Select
                                    id="tipoMovel"
                                    className="select"
                                    options={options}
                                    isSearchable
                                    autoFocus
                                    isClearable
                                    placeholder="Selecione..."
                                />
                            </div>

                            <div className="div">
                                <label htmlFor="cidade">
                                    Cidade{" "}
                                    <img
                                        src={imgDropdown}
                                        width={imgDropdown.width}
                                        height={imgDropdown.height}
                                        alt="Selecione"
                                    />
                                </label>
                                <Select
                                    id="cidade"
                                    className="select"
                                    options={options}
                                    isSearchable
                                    autoFocus
                                    isClearable
                                    placeholder="Selecione..."
                                />
                            </div>

                            <div className="div">
                                <label htmlFor="bairro">
                                    Bairro{" "}
                                    <img
                                        src={imgDropdown}
                                        width={imgDropdown.width}
                                        height={imgDropdown.height}
                                        alt="Selecione"
                                    />
                                </label>
                                <Select
                                    id="bairro"
                                    className="select"
                                    options={options}
                                    isSearchable
                                    autoFocus
                                    isClearable
                                    placeholder="Selecione..."
                                />
                            </div>

                            <div className="div">
                                <label htmlFor="valor">
                                    Valor{" "}
                                    <img
                                        src={imgDropdown}
                                        width={imgDropdown.width}
                                        height={imgDropdown.height}
                                        alt="Selecione"
                                    />
                                </label>
                                {/* <span className="range">
                                    R$ ${range.value4.min} - R$ $
                                    {range.value4.max}
                                </span> */}
                                <InputRange
                                    draggableTrack
                                    maxValue={10000}
                                    minValue={500}
                                    step={500}
                                    formatLabel={() => ``}
                                    value={range.value4}
                                    onChange={(value) =>
                                        setRange({ value4: value })
                                    }
                                    onChangeComplete={(value) =>
                                        console.log(value)
                                    }
                                />
                            </div>

                            <Button>Encontre seu imóvel</Button>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </main>

            <section className="redes">
                <div className="wrap">
                    <a href="/" className="box">
                        <img
                            src={imgWhats}
                            width={imgWhats.width}
                            height={imgWhats.height}
                            alt="WhatsApp"
                        />
                        <div className="boxInner">
                            <span>whats locação</span>
                            <p>(54) 99967.8976</p>
                        </div>
                    </a>

                    <a href="/" className="box">
                        <img
                            src={imgWhats}
                            width={imgWhats.width}
                            height={imgWhats.height}
                            alt="WhatsApp"
                        />
                        <div className="boxInner">
                            <span>whats vendas</span>
                            <p>(54) 99967.8976</p>
                        </div>
                    </a>

                    <a href="/" className="box">
                        <img
                            src={imgEmail}
                            width={imgEmail.width}
                            height={imgEmail.height}
                            alt="E-mail"
                        />
                        <div className="boxInner">
                            <span>envie um e-mail</span>
                            <p className="p12">contato@nicheleimoveis.com.br</p>
                        </div>
                    </a>

                    <div className="box">
                        <div className="boxInner">
                            <span>nos siga nas redes</span>
                            <div className="social">
                                <a href="/">
                                    <img
                                        src={imgFace}
                                        width={imgFace.width}
                                        height={imgFace.height}
                                        alt="Facebook"
                                    />
                                </a>
                                <a href="/">
                                    <img
                                        src={imgInsta}
                                        width={imgInsta.width}
                                        height={imgInsta.height}
                                        alt="Instagram"
                                    />
                                </a>
                                <a href="/">
                                    <img
                                        src={imgLinke}
                                        width={imgLinke.width}
                                        height={imgLinke.height}
                                        alt="Linkedin"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <CarouselMoveis />
            </section>

            <Footer />
        </div>
    );
}

export default Home;

// DOM element
if (document.getElementById("home")) {
    ReactDOM.render(<Home />, document.getElementById("home"));
}

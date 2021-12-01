/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable import/no-unresolved */
import { useState } from "react";
import ReactDOM from "react-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Select from "react-select";
import InputRange from "react-input-range";

import { ButtonPrimary } from "./components/Button";
import Button from "@mui/material/Button";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import CarouselMoveis from "../js/components/CarouselMoveis";

import imgDropdown from "../../public/assets/svg/dropdown-icon.svg";
import arrowTop from "../../public/assets/svg/arrow-top.svg";
import imgWhats from "../../public/assets/svg/whats-icon.svg";
import imgEmail from "../../public/assets/svg/email-icon.svg";
import imgFace from "../../public/assets/svg/face-icon.svg";
import imgInsta from "../../public/assets/svg/insta-icon.svg";
import imgLinke from "../../public/assets/svg/linke-icon.svg";
import { CarouselBanner } from "./components/CarouselBanner";
import { SectionAbout } from "./components/SectionAbout";
import { BannerAnuncie } from "./components/BannerAnuncie";
import { DuvidasHome } from "./components/DuvidasHome";
import { Box } from "@mui/system";
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Typography,
} from "@mui/material";

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? "#7dafeb" : "#000000",
        padding: 20,
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        border: "none",
        display: "flex",
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return { ...provided, opacity, transition };
    },
};

function Home() {
    const [val, setVal] = useState({ min: 0, max: 10000 });
    const [area, setArea] = useState({ min: 0, max: 10000 });
    const [advanced, setAdvanced] = useState(false);
    const [codeSearch, setCodeSearch] = useState(false);

    const [dorms, setDorms] = useState("1");
    const [suites, setSuites] = useState("1");
    const [bathroom, setBathroom] = useState("1");
    const [vacancies, setVacancies] = useState("1");

    const handleDorms = (event) => setDorms(event);
    const handleSuites = (event) => setSuites(event);
    const handleBathroom = (event) => setBathroom(event);
    const handleVacancies = (event) => setVacancies(event);

    const handleAdvanced = () => setAdvanced(!advanced);
    const handleCode = () => setCodeSearch(!codeSearch);

    const maxValue = 10000;

    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];

    return (
        <div className="container">
            <Navbar />
            <main className={advanced ? "main addHeight" : "main"}>
                <h1>A realização do seu sonho está aqui!</h1>

                {codeSearch ? (
                    <>
                        <Tabs>
                            <TabList>
                                <Tab>Alugar</Tab>
                                <Tab>Comprar</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="containerTab">
                                    <div className="div__code">
                                        <input
                                            type="text"
                                            id="input__code"
                                            placeholder="Digite aqui o código do imóvel"
                                        />
                                        <ButtonPrimary>
                                            Encontre seu imóvel
                                        </ButtonPrimary>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="containerTab">
                                    <div className="div__code">
                                        <input
                                            type="text"
                                            id="input__code"
                                            placeholder="Digite aqui o código do imóvel"
                                        />
                                        <ButtonPrimary>
                                            Encontre seu imóvel
                                        </ButtonPrimary>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                        <div className="buttons__advanced">
                            <button type="button" onClick={handleCode}>
                                {codeSearch
                                    ? "< Voltar para a busca"
                                    : "Busca por codigo"}
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <Tabs>
                            <TabList>
                                <Tab>Alugar</Tab>
                                <Tab>Comprar</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="containerTab">
                                    <div className="simple__search">
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
                                                styles={customStyles}
                                                isSearchable
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
                                                styles={customStyles}
                                                isSearchable
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
                                                styles={customStyles}
                                                isSearchable
                                                isClearable
                                                placeholder="Selecione..."
                                            />
                                        </div>

                                        <div className="div">
                                            <label htmlFor="valor">
                                                Valor{" "}
                                            </label>
                                            <div className="div__range">
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "1rem",
                                                        fontWeight: 500,
                                                        color: "#5C6476",
                                                    }}
                                                >
                                                    <div>{`R$${val.min}`}</div>
                                                    <div>-</div>
                                                    <div>{`R$${val.max}`}</div>
                                                </div>
                                                <div className="div__input__range">
                                                    <InputRange
                                                        step={5}
                                                        formatLabel={(value) =>
                                                            null
                                                        }
                                                        draggableTrack={false}
                                                        allowSameValues={false}
                                                        maxValue={maxValue}
                                                        minValue={0}
                                                        value={val}
                                                        onChange={setVal}
                                                        onChangeComplete={(
                                                            args
                                                        ) => console.log(args)}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <ButtonPrimary>
                                            Encontre seu imóvel
                                        </ButtonPrimary>
                                    </div>
                                    <div
                                        className={
                                            advanced
                                                ? "advanced__search active"
                                                : "advanced__search"
                                        }
                                    >
                                        <div className="content__advanced">
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "0.5rem",
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "0.87rem",
                                                        color: "##45565B",
                                                        fontWeight: "bold",
                                                        fontFamily: "Roboto",
                                                        lineHeight: "21px",
                                                    }}
                                                >
                                                    Dormitórios
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        gap: "0.5rem",
                                                    }}
                                                >
                                                    <Button
                                                        onClick={() =>
                                                            handleDorms("1")
                                                        }
                                                        sx={
                                                            dorms === "1"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        1
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleDorms("2")
                                                        }
                                                        sx={
                                                            dorms === "2"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        2
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleDorms("3")
                                                        }
                                                        sx={
                                                            dorms === "3"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        3
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleDorms("4")
                                                        }
                                                        sx={
                                                            dorms === "4"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        4+
                                                    </Button>
                                                </Box>
                                            </Box>

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "0.5rem",
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "0.87rem",
                                                        color: "##45565B",
                                                        fontWeight: "bold",
                                                        fontFamily: "Roboto",
                                                        lineHeight: "21px",
                                                    }}
                                                >
                                                    Suítes
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        gap: "0.5rem",
                                                    }}
                                                >
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("1")
                                                        }
                                                        sx={
                                                            suites === "1"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        1
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("2")
                                                        }
                                                        sx={
                                                            suites === "2"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        2
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("3")
                                                        }
                                                        sx={
                                                            suites === "3"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        3
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("4")
                                                        }
                                                        sx={
                                                            suites === "4"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        4+
                                                    </Button>
                                                </Box>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "0.5rem",
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "0.87rem",
                                                        color: "##45565B",
                                                        fontWeight: "bold",
                                                        fontFamily: "Roboto",
                                                        lineHeight: "21px",
                                                    }}
                                                >
                                                    Suítes
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        gap: "0.5rem",
                                                    }}
                                                >
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("1")
                                                        }
                                                        sx={
                                                            suites === "1"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        1
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("2")
                                                        }
                                                        sx={
                                                            suites === "2"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        2
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("3")
                                                        }
                                                        sx={
                                                            suites === "3"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        3
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("4")
                                                        }
                                                        sx={
                                                            suites === "4"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        4+
                                                    </Button>
                                                </Box>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "0.5rem",
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "0.87rem",
                                                        color: "##45565B",
                                                        fontWeight: "bold",
                                                        fontFamily: "Roboto",
                                                        lineHeight: "21px",
                                                    }}
                                                >
                                                    Suítes
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        gap: "0.5rem",
                                                    }}
                                                >
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("1")
                                                        }
                                                        sx={
                                                            suites === "1"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        1
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("2")
                                                        }
                                                        sx={
                                                            suites === "2"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        2
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("3")
                                                        }
                                                        sx={
                                                            suites === "3"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        3
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("4")
                                                        }
                                                        sx={
                                                            suites === "4"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        4+
                                                    </Button>
                                                </Box>
                                            </Box>
                                            <div className="div">
                                                <label htmlFor="area">
                                                    Área{" "}
                                                </label>
                                                <div className="div__range">
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            gap: "1rem",
                                                            fontWeight: 500,
                                                            color: "#5C6476",
                                                        }}
                                                    >
                                                        <div>{`${area.min}m²`}</div>
                                                        <div>-</div>
                                                        <div>{`${area.max}m²`}</div>
                                                    </div>
                                                    <div>
                                                        <InputRange
                                                            step={5}
                                                            formatLabel={(
                                                                value
                                                            ) => null}
                                                            draggableTrack={
                                                                false
                                                            }
                                                            allowSameValues={
                                                                false
                                                            }
                                                            maxValue={maxValue}
                                                            minValue={0}
                                                            value={area}
                                                            onChange={setArea}
                                                            onChangeComplete={(
                                                                args
                                                            ) =>
                                                                console.log(
                                                                    args
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <FormGroup
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    gap: "1rem",
                                                }}
                                            >
                                                <FormControlLabel
                                                    sx={{
                                                        fontFamily: "Roboto",
                                                        fontWeight: "normal",
                                                        fontSize: "14px",
                                                        lineHeight: "21px",
                                                        color: "#8C9193",
                                                    }}
                                                    control={
                                                        <Checkbox
                                                            onChange={() =>
                                                                console.log(
                                                                    "imoveis na planta"
                                                                )
                                                            }
                                                            sx={{
                                                                "&.Mui-checked":
                                                                    {
                                                                        color: "#205CA4",
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="Imóveis na planta"
                                                />
                                                <FormControlLabel
                                                    sx={{
                                                        fontFamily: "Roboto",
                                                        fontWeight: "normal",
                                                        fontSize: "14px",
                                                        lineHeight: "21px",
                                                        color: "#8C9193",
                                                    }}
                                                    control={
                                                        <Checkbox
                                                            onChange={() =>
                                                                console.log(
                                                                    "ofertas"
                                                                )
                                                            }
                                                            sx={{
                                                                "&.Mui-checked":
                                                                    {
                                                                        color: "#205CA4",
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="Ofertas"
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="containerTab">
                                    <div className="simple__search">
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
                                                styles={customStyles}
                                                isSearchable
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
                                                styles={customStyles}
                                                isSearchable
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
                                                styles={customStyles}
                                                isSearchable
                                                isClearable
                                                placeholder="Selecione..."
                                            />
                                        </div>

                                        <div className="div">
                                            <label htmlFor="valor">
                                                Valor{" "}
                                            </label>
                                            <div className="div__range">
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "1rem",
                                                        fontWeight: 500,
                                                        color: "#5C6476",
                                                    }}
                                                >
                                                    <div>{`R$${val.min}`}</div>
                                                    <div>-</div>
                                                    <div>{`R$${val.max}`}</div>
                                                </div>
                                                <div>
                                                    <InputRange
                                                        step={5}
                                                        formatLabel={(value) =>
                                                            null
                                                        }
                                                        draggableTrack={false}
                                                        allowSameValues={false}
                                                        maxValue={maxValue}
                                                        minValue={0}
                                                        value={val}
                                                        onChange={setVal}
                                                        onChangeComplete={(
                                                            args
                                                        ) => console.log(args)}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <ButtonPrimary>
                                            Encontre seu imóvel
                                        </ButtonPrimary>
                                    </div>
                                    <div
                                        className={
                                            advanced
                                                ? "advanced__search active"
                                                : "advanced__search"
                                        }
                                    >
                                        <div className="content__advanced">
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "0.5rem",
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "0.87rem",
                                                        color: "##45565B",
                                                        fontWeight: "bold",
                                                        fontFamily: "Roboto",
                                                        lineHeight: "21px",
                                                    }}
                                                >
                                                    Dormitórios
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        gap: "0.5rem",
                                                    }}
                                                >
                                                    <Button
                                                        onClick={() =>
                                                            handleDorms("1")
                                                        }
                                                        sx={
                                                            dorms === "1"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        1
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleDorms("2")
                                                        }
                                                        sx={
                                                            dorms === "2"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        2
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleDorms("3")
                                                        }
                                                        sx={
                                                            dorms === "3"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        3
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleDorms("4")
                                                        }
                                                        sx={
                                                            dorms === "4"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        4+
                                                    </Button>
                                                </Box>
                                            </Box>

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "0.5rem",
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "0.87rem",
                                                        color: "##45565B",
                                                        fontWeight: "bold",
                                                        fontFamily: "Roboto",
                                                        lineHeight: "21px",
                                                    }}
                                                >
                                                    Suítes
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        gap: "0.5rem",
                                                    }}
                                                >
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("1")
                                                        }
                                                        sx={
                                                            suites === "1"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        1
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("2")
                                                        }
                                                        sx={
                                                            suites === "2"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        2
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("3")
                                                        }
                                                        sx={
                                                            suites === "3"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        3
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("4")
                                                        }
                                                        sx={
                                                            suites === "4"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        4+
                                                    </Button>
                                                </Box>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "0.5rem",
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "0.87rem",
                                                        color: "##45565B",
                                                        fontWeight: "bold",
                                                        fontFamily: "Roboto",
                                                        lineHeight: "21px",
                                                    }}
                                                >
                                                    Suítes
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        gap: "0.5rem",
                                                    }}
                                                >
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("1")
                                                        }
                                                        sx={
                                                            suites === "1"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        1
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("2")
                                                        }
                                                        sx={
                                                            suites === "2"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        2
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("3")
                                                        }
                                                        sx={
                                                            suites === "3"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        3
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("4")
                                                        }
                                                        sx={
                                                            suites === "4"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        4+
                                                    </Button>
                                                </Box>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "0.5rem",
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "0.87rem",
                                                        color: "##45565B",
                                                        fontWeight: "bold",
                                                        fontFamily: "Roboto",
                                                        lineHeight: "21px",
                                                    }}
                                                >
                                                    Suítes
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        gap: "0.5rem",
                                                    }}
                                                >
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("1")
                                                        }
                                                        sx={
                                                            suites === "1"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        1
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("2")
                                                        }
                                                        sx={
                                                            suites === "2"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        2
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("3")
                                                        }
                                                        sx={
                                                            suites === "3"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        3
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleSuites("4")
                                                        }
                                                        sx={
                                                            suites === "4"
                                                                ? {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      color: "#ffffff",
                                                                      backgroundColor:
                                                                          "#205CA4",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#205CA4",
                                                                              color: "#ffffff",
                                                                          },
                                                                  }
                                                                : {
                                                                      minWidth:
                                                                          "2rem",
                                                                      height: "2rem",
                                                                      borderRadius:
                                                                          "10px",
                                                                      backgroundColor:
                                                                          "#f2f3f3",
                                                                      "&:hover":
                                                                          {
                                                                              backgroundColor:
                                                                                  "#f2f3f3",
                                                                              color: "#205CA4",
                                                                          },
                                                                  }
                                                        }
                                                    >
                                                        4+
                                                    </Button>
                                                </Box>
                                            </Box>
                                            <div className="div">
                                                <label htmlFor="area">
                                                    Área{" "}
                                                </label>
                                                <div className="div__range">
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            gap: "1rem",
                                                            fontWeight: 500,
                                                            color: "#5C6476",
                                                        }}
                                                    >
                                                        <div>{`${area.min}m²`}</div>
                                                        <div>-</div>
                                                        <div>{`${area.max}m²`}</div>
                                                    </div>
                                                    <div>
                                                        <InputRange
                                                            step={5}
                                                            formatLabel={(
                                                                value
                                                            ) => null}
                                                            draggableTrack={
                                                                false
                                                            }
                                                            allowSameValues={
                                                                false
                                                            }
                                                            maxValue={maxValue}
                                                            minValue={0}
                                                            value={area}
                                                            onChange={setArea}
                                                            onChangeComplete={(
                                                                args
                                                            ) =>
                                                                console.log(
                                                                    args
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <FormGroup
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    gap: "1rem",
                                                }}
                                            >
                                                <FormControlLabel
                                                    sx={{
                                                        fontFamily: "Roboto",
                                                        fontWeight: "normal",
                                                        fontSize: "14px",
                                                        lineHeight: "21px",
                                                        color: "#8C9193",
                                                    }}
                                                    control={
                                                        <Checkbox
                                                            onChange={() =>
                                                                console.log(
                                                                    "imoveis na planta"
                                                                )
                                                            }
                                                            sx={{
                                                                "&.Mui-checked":
                                                                    {
                                                                        color: "#205CA4",
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="Imóveis na planta"
                                                />
                                                <FormControlLabel
                                                    sx={{
                                                        fontFamily: "Roboto",
                                                        fontWeight: "normal",
                                                        fontSize: "14px",
                                                        lineHeight: "21px",
                                                        color: "#8C9193",
                                                    }}
                                                    control={
                                                        <Checkbox
                                                            onChange={() =>
                                                                console.log(
                                                                    "ofertas"
                                                                )
                                                            }
                                                            sx={{
                                                                "&.Mui-checked":
                                                                    {
                                                                        color: "#205CA4",
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="Ofertas"
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                        <div className="buttons__advanced">
                            {codeSearch ? (
                                ""
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        onClick={handleAdvanced}
                                    >
                                        {advanced ? (
                                            <>
                                                <span>Busca simples</span>
                                                <img src={arrowTop} alt="" />
                                            </>
                                        ) : (
                                            "Busca avançada +"
                                        )}
                                    </button>
                                </>
                            )}
                            <button type="button" onClick={handleCode}>
                                Busca por código
                            </button>
                        </div>
                    </>
                )}
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

            <CarouselBanner />

            <SectionAbout />

            <BannerAnuncie />

            <DuvidasHome />

            <Footer />
        </div>
    );
}

export default Home;

// DOM element
if (document.getElementById("home")) {
    ReactDOM.render(<Home />, document.getElementById("home"));
}

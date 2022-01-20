/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Select from "react-select";
import InputRange from "react-input-range";

import { ButtonPrimary } from "./components/Button";
import Button from "@mui/material/Button";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import CarouselMoveis from "../js/components/CarouselMoveis";
import CarouselMoveisComerciais from "../js/components/CarouselMoveisComerciais";

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

import { api } from './plugins/api'

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? "#7dafeb" : "#000000",
        padding: 20,
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        border: "1px solid #5C6476",
        display: "flex",
        borderRadius: '10px',
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return { ...provided, opacity, transition };
    },
};

function Home() {
    const [tabSelect, setTabSelect] = useState(0);
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [types, setTypes] = useState([]);
    const [code, setCode] = useState('');
    const [plant, setPlant] = useState(false);
    const [offer, setOffer] = useState(false);

    const [area, setArea] = useState({ min: 0, max: 10000 });
    const [advanced, setAdvanced] = useState(false);
    const [codeSearch, setCodeSearch] = useState(false);
    const [buildingType, setBuildingType] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [price, setPrice] = useState({ min: 0, max: 10000 });

    const [room, setRoom] = useState('');
    const [suites, setSuites] = useState('');
    const [toilet, setToilet] = useState('');
    const [garage, setGarage] = useState('');

    const handleDorms = (event) => setRoom(event);
    const handleSuites = (event) => setSuites(event);
    const handleBathroom = (event) => setToilet(event);
    const handleVacancies = (event) => setGarage(event);

    const handleAdvanced = () => setAdvanced(!advanced);
    const handleCode = () => setCodeSearch(!codeSearch);

    const maxValue = 10000;

    function handleSubmit() {
        const params = new URLSearchParams();

        if(buildingType) {
            params.append('building_type', buildingType);
        }

        if(city) {
           params.append('city',city);
        }

        if(district) {
            params.append('district',district);
        }

        if(price) {
            params.append('price',JSON.stringify(price));
        }

        if(room) {
            params.append('room', room);
        }

        if(suites) {
            params.append('suites',suites);
        }

        if(toilet) {
            params.append('toilet', toilet);
        }

        if(garage) {
            params.append('garage', garage);
        }

        if(area) {
            params.append('area', JSON.stringify(area));
        }

        if(code) {
            params.append('code', code);
        }

        if(plant) {
            params.append('plant', plant);
        }

        if(offer) {
            params.append('offer', offer);
        }

        params.append('type', tabSelect);


        window.location.href = `/imoveis?${params.toString()}`;
    }

    useEffect(async function() {
        const city = async () => {
            const {data} = await api.get('api/cities');
            return data;
        }

        setCities(await city());

        const neigh = async () => {
            const {data} = await api.get('api/districts');

            return data;
        }

        setDistricts(await neigh());

        const types = async () => {
            const {data} = await api.get('api/types');

            return data;
        }

        setTypes(await types());
    },[])

    return (
        <div className="container">
            <Navbar />
            <main className={advanced ? "main addHeight" : "main"}>
                <h1>A realização do seu sonho está aqui!</h1>

                {codeSearch ? (
                    <>
                        <Tabs selectedIndex={tabSelect} onSelect={(index) => setTabSelect(index)}>
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
                                            value={code}
                                            onChange={(event) => setCode(event?.target.value)}
                                            placeholder="Digite aqui o código do imóvel"
                                        />
                                        <ButtonPrimary onClick={() => handleSubmit()}>
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
                                        <ButtonPrimary onClick={() => handleSubmit()}>
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
                       <Tabs selectedIndex={tabSelect} onSelect={(index) => setTabSelect(index)}>
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
                                            </label>
                                            <Select
                                                id="tipoMovel"
                                                className="select"
                                                options={types}
                                                onChange={(event) => setBuildingType(event?.value)}
                                                styles={customStyles}
                                                isSearchable={true}
                                                isClearable={true}
                                                placeholder="Selecione..."
                                            />
                                        </div>

                                        <div className="div">
                                            <label htmlFor="cidade">
                                                Cidade{" "}

                                            </label>
                                            <Select
                                                id="cidade"
                                                className="select"
                                                options={cities}
                                                onChange={(event) => setCity(event?.value)}
                                                styles={customStyles}
                                                isSearchable
                                                isClearable
                                                placeholder="Selecione..."
                                            />
                                        </div>

                                        <div className="div">
                                            <label htmlFor="bairro">
                                                Bairro{" "}

                                            </label>
                                            <Select
                                                id="bairro"
                                                className="select"
                                                options={districts}
                                                onChange={(event) => setDistrict(event?.value)}
                                                styles={customStyles}
                                                isSearchable
                                                isClearable
                                                placeholder="Selecione..."
                                            />
                                        </div>

                                        <div className="div value">
                                            <label htmlFor="valor">
                                                Valor{" "}
                                            </label>
                                            <div className="div__range">
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "space-between",
                                                        gap: "1rem",
                                                        fontWeight: 500,
                                                        color: "#5C6476",
                                                    }}
                                                >
                                                    <div>{`R$${price.min}`}</div>
                                                    <div>-</div>
                                                    <div>{`R$${price.max}`}</div>
                                                </div>
                                                <div className="div__input__range">
                                                    <InputRange
                                                        step={5}
                                                        draggableTrack={false}
                                                        allowSameValues={false}
                                                        maxValue={maxValue}
                                                        minValue={0}
                                                        value={price}
                                                        onChange={setPrice}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <ButtonPrimary onClick={() => handleSubmit() }>
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
                                                            room === "1"
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
                                                            room === "2"
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
                                                            room === "3"
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
                                                            room === "4"
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
                                                    Banheiros
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
                                                            handleBathroom("1")
                                                        }
                                                        sx={
                                                            toilet === "1"
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
                                                            handleBathroom("2")
                                                        }
                                                        sx={
                                                            toilet === "2"
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
                                                            handleBathroom("3")
                                                        }
                                                        sx={
                                                            toilet === "3"
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
                                                            handleBathroom("4")
                                                        }
                                                        sx={
                                                            toilet === "4"
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
                                                    Garagem
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
                                                            handleVacancies("1")
                                                        }
                                                        sx={
                                                            garage === "1"
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
                                                            handleVacancies("2")
                                                        }
                                                        sx={
                                                            garage === "2"
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
                                                            handleVacancies("3")
                                                        }
                                                        sx={
                                                            garage === "3"
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
                                                            handleVacancies("4")
                                                        }
                                                        sx={
                                                            garage === "4"
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
                                                            onChange={(event) => setPlant(event?.target.checked)}
                                                            checked={plant}
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
                                                            onChange={(event) => setOffer(event?.target.checked)}
                                                            checked={offer}
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

                                            </label>
                                            <Select
                                                id="tipoMovel"
                                                className="select"
                                                onChange={(event) => setBuildingType(event?.value)}
                                                options={types}
                                                styles={customStyles}
                                                isSearchable
                                                isClearable
                                                placeholder="Selecione..."
                                            />
                                        </div>

                                        <div className="div">
                                            <label htmlFor="cidade">
                                                Cidade{" "}

                                            </label>
                                            <Select
                                                id="cidade"
                                                className="select"
                                                onChange={(event) => setCity(event?.value)}
                                                options={cities}
                                                styles={customStyles}
                                                isSearchable
                                                isClearable
                                                placeholder="Selecione..."
                                            />
                                        </div>

                                        <div className="div">
                                            <label htmlFor="bairro">
                                                Bairro{" "}

                                            </label>
                                            <Select
                                                id="bairro"
                                                className="select"
                                                onChange={(event) => setDistrict(event?.value)}
                                                options={districts}
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
                                                    <div>{`R$${area.min}`}</div>
                                                    <div>-</div>
                                                    <div>{`R$${area.max}`}</div>
                                                </div>
                                                <div>
                                                    <InputRange
                                                        step={5}
                                                        draggableTrack={false}
                                                        allowSameValues={false}
                                                        maxValue={maxValue}
                                                        minValue={0}
                                                        value={area}
                                                        onChange={setArea}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <ButtonPrimary onClick={() => handleSubmit()}>
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
                                                            room === "1"
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
                                                            room === "2"
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
                                                            room === "3"
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
                                                            room === "4"
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
                    <a href="https://wa.me/54999678976" className="box" target="_blank" rel="noreferrer">
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

                    <a href="https://wa.me/54999678976" className="box" target="_blank" rel="noreferrer">
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

                    <a href="mailto:nichele@nicheleimoveis.com.br" className="box">
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
                                <a href="https://www.facebook.com/NicheleImoveis" target="_blank" rel="noreferrer">
                                    <img
                                        src={imgFace}
                                        width={imgFace.width}
                                        height={imgFace.height}
                                        alt="Facebook"
                                    />
                                </a>
                                <a href="https://www.instagram.com/nicheleimoveis/" target="_blank" rel="noreferrer">
                                    <img
                                        src={imgInsta}
                                        width={imgInsta.width}
                                        height={imgInsta.height}
                                        alt="Instagram"
                                    />
                                </a>
                                <a href="https://www.linkedin.com/company/imobili%C3%A1ria-nichele/" target="_blank" rel="noreferrer"
                                >
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

            <section>
                <CarouselMoveisComerciais />
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

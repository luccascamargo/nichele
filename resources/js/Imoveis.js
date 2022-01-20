/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable import/no-unresolved */
import { useEffect } from "react";
import ReactDOM from "react-dom";

import "../sass/imoveis.scss";

import Button from "@mui/material/Button";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import imageBox from "../../public/assets/images/image-imovel.png";
import iconRegua from "../../public/assets/svg/icon-regua.svg";
import iconQuarto from "../../public/assets/svg/icon-quarto.svg";
import iconCar from "../../public/assets/svg/icon-car.svg";
import { useState } from "react";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import InputRange from "react-input-range";
import { api } from "./plugins/api";

export default function Imoveis() {
    const [buildings, setBuildings] = useState([]);

    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [types, setTypes] = useState([]);
    const [code, setCode] = useState("");
    const [plant, setPlant] = useState(false);
    const [offer, setOffer] = useState(false);

    const [area, setArea] = useState({ min: 0, max: 10000 });
    const [buildingType, setBuildingType] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [price, setPrice] = useState({ min: 0, max: 10000 });

    const [activeButton, setActiveButton] = useState("1");

    const [room, setRoom] = useState("");
    const [suites, setSuites] = useState("");
    const [toilet, setToilet] = useState("");
    const [garage, setGarage] = useState("");

    const maxValue = 10000;

    const handleActiveButton = (e) => {
        const url = new URL(window.location.href).searchParams;

        if (!url.has("type")) {
            url.append("type", e);
        } else {
            url.set("type", e);
        }

        setActiveButton(e);
    };

    const handleDorms = (event) => {
        const url = new URL(window.location.href).searchParams;

        if (!url.has("room")) {
            url.append("room", event);
        } else {
            url.set("room", event);
        }

        setRoom(event);
    };

    const handleSuites = (event) => {
        const url = new URL(window.location.href).searchParams;

        if (!url.has("suites")) {
            url.append("suites", event);
        } else {
            url.set("suites", event);
        }

        setSuites(event);
    };

    const handleBathroom = (event) => {
        const url = new URL(window.location.href).searchParams;

        if (!url.has("toilet")) {
            url.append("toilet", event);
        } else {
            url.set("toilet", event);
        }

        setToilet(event);
    };

    const handleVacancies = (event) => {
        const url = new URL(window.location.href).searchParams;

        if (!url.has("garage")) {
            url.append("garage", event);
        } else {
            url.set("garage", event);
        }

        setGarage(event);
    };

    const handleCode = (event) => {
        const url = new URL(window.location.href).searchParams;

        if (!url.has("code")) {
            url.append("code", event);
        } else {
            url.set("code", event);
        }

        if (!event) {
            url.delete("code");
        }

        setCode(event);
    };

    const handleBuildingType = (event) => {
        const url = new URL(window.location.href).searchParams;

        if (!url.has("building_type")) {
            url.append("building_type", event);
        } else {
            url.set("building_type", event);
        }
        setBuildingType(event);
    };

    const handleCity = (event) => {
        const url = new URL(window.location.href).searchParams;

        if (!url.has("city")) {
            url.append("city", event);
        } else {
            url.set("city", event);
        }

        setCity(event);
    };

    const handleDistrict = (event) => {
        const url = new URL(window.location.href).searchParams;

        if (!url.has("district")) {
            url.append("district", event);
        } else {
            url.set("district", event);
        }

        setDistrict(event);
    };

    const handlePrice = (event) => {
        const url = new URL(window.location.href).searchParams;

        if (!url.has("price")) {
            url.append("price", event);
        } else {
            url.set("price", event);
        }

        setPrice(event);
    };

    const handleArea = (event) => {
        const url = new URL(window.location.href).searchParams;

        if (!url.has("area")) {
            url.append("area", event);
        } else {
            url.set("area", event);
        }

        setArea(event);
    };

    const handlePlant = (event) => {
        const url = new URL(window.location.href).searchParams;

        if (!url.has("plant")) {
            url.append("plant", event);
        } else {
            url.set("plant", event);
        }

        setPlant(event);
    };

    const handleOffer = (event) => {
        const url = new URL(window.location.href).searchParams;

        if (!url.has("plant")) {
            url.append("plant", event);
        } else {
            url.set("plant", event);
        }
        setOffer(event);
    };

    function compareParamAndSet(param, state) {
        const url = new URL(window.location.href).searchParams;

        if (url.has(param)) {
            if (url.get(param).indexOf("{") > -1) {
                state(JSON.parse(url.get(param)));
                return;
            }

            if (url.get(param) === "true") {
                state(Boolean(url.get(param)));
                return;
            }
        }
    }

    const handleSubmitSearch = async () => {
        const params = new URLSearchParams();

        if (buildingType) {
            params.append("building_type", buildingType);
        }

        if (city) {
            params.append("city", city);
        }

        if (district) {
            params.append("district", district);
        }

        if (price) {
            params.append("price", JSON.stringify(price));
        }

        if (room) {
            params.append("room", room);
        }

        if (suites) {
            params.append("suites", suites);
        }

        if (toilet) {
            params.append("toilet", toilet);
        }

        if (garage) {
            params.append("garage", garage);
        }

        if (area) {
            params.append("area", JSON.stringify(area));
        }

        if (code) {
            params.append("code", code);
        }

        if (plant) {
            params.append("plant", plant);
        }

        if (offer) {
            params.append("offer", offer);
        }

        setBuildings(
            (await api.get(`api/buildings?${params.toString()}`)).data
        );
    };

    useEffect(async () => {
        // compareParamAndSet('price', setPrice)

        // compareParamAndSet('area', setArea)

        // compareParamAndSet('room', setRoom)

        // compareParamAndSet('building_type', setBuildingType)

        // compareParamAndSet('district', setDistrict)

        // compareParamAndSet('suites', setSuites)

        // compareParamAndSet('toilet', setToilet)

        // compareParamAndSet('garage', setGarage)

        // compareParamAndSet('type', setActiveButton)

        // compareParamAndSet('city', setCity)

        // compareParamAndSet('code', setCode)

        // compareParamAndSet('plant', setPlant)

        // compareParamAndSet('offer', setOffer)

        // const city = async () => {
        //     const {data} = await api.get('api/cities');
        //     return data;
        // }

        // setCities(await city());

        // const neigh = async () => {
        //     const {data} = await api.get('api/districts');

        //     return data;
        // }

        // setDistricts(await neigh());

        // const types = async () => {
        //     const {data} = await api.get('api/types');

        //     return data;
        // }

        // setTypes(await types());

        const buildings = async () => {
            const url = new URL(window.location.href).searchParams;
            let params = "";
            if (url.toString() !== "") {
                params = `?${url.toString()}`;
            }

            const { data } = await api.get(`api/buildings${params}`);
            return data;
        };

        setBuildings(await buildings());
    }, []);

    const handleSubmitReset = async () => {
        setBuildingType("");
        setCity("");
        setDistrict("");
        setPrice({ min: 0, max: 10000 });
        setRoom(0);
        setSuites(0);
        setToilet(0);
        setGarage(0);
        setArea({ min: 0, max: 10000 });
        setCode("");
        setPlant(false);
        setOffer(false);

        setBuildings(await api.get(`api/buildings`));
    };

    return (
        <div className="container__imoveis">
            <header className="header__imoveis">
                <Navbar />
                <h1 className="title__imoveis">Imóveis</h1>
            </header>
            <main className="content__main">
                <section className="section__filter">
                    <div className="buttons__content">
                        <Button
                            onClick={() => handleActiveButton("1")}
                            sx={
                                activeButton === "1"
                                    ? {
                                          borderRadius: "10px",
                                          backgroundColor: "#FFDB21",
                                          color: "#205CA4",
                                          width: "10.5rem",
                                          height: "3rem",
                                          fontFamily: "Nunito",
                                          fontWeight: "bold",
                                          lineHeight: "18px",
                                          letterSpacing: "-0.01em",
                                          "&:hover": {
                                              backgroundColor: "#FFDB21",
                                              color: "#205CA4",
                                          },
                                      }
                                    : {
                                          borderRadius: "10px",
                                          backgroundColor: "#F2F2F2",
                                          color: "#B2B2B2",
                                          width: "10.5rem",
                                          height: "3rem",
                                          fontFamily: "Nunito",
                                          fontWeight: "bold",
                                          lineHeight: "18px",
                                          letterSpacing: "-0.01em",
                                          "&:hover": {
                                              backgroundColor: "#FFDB21",
                                              color: "#205CA4",
                                          },
                                      }
                            }
                        >
                            Comprar
                        </Button>
                        <Button
                            onClick={() => handleActiveButton("0")}
                            sx={
                                activeButton === "0"
                                    ? {
                                          borderRadius: "10px",
                                          backgroundColor: "#FFDB21",
                                          color: "#205CA4",
                                          width: "10.5rem",
                                          height: "3rem",
                                          fontFamily: "Nunito",
                                          fontWeight: "bold",
                                          lineHeight: "18px",
                                          letterSpacing: "-0.01em",
                                          "&:hover": {
                                              backgroundColor: "#FFDB21",
                                              color: "#205CA4",
                                          },
                                      }
                                    : {
                                          borderRadius: "10px",
                                          backgroundColor: "#F2F2F2",
                                          color: "#B2B2B2",
                                          width: "10.5rem",
                                          height: "3rem",
                                          fontFamily: "Nunito",
                                          fontWeight: "bold",
                                          lineHeight: "18px",
                                          letterSpacing: "-0.01em",
                                          "&:hover": {
                                              backgroundColor: "#FFDB21",
                                              color: "#205CA4",
                                          },
                                      }
                            }
                        >
                            Alugar
                        </Button>
                    </div>

                    <TextField
                        id="standard-basic"
                        label="Código"
                        value={code}
                        onChange={(event) => handleCode(event?.target.value)}
                        variant="outlined"
                        sx={{
                            width: "22rem",
                            height: "3rem",
                            color: "#205CA4",
                        }}
                    />

                    <FormControl
                        variant="filled"
                        sx={{
                            width: "22rem",
                        }}
                    >
                        <InputLabel id="demo-simple-select-filled-label">
                            Tipo de imóvel
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={buildingType}
                            onChange={(event) =>
                                handleBuildingType(event?.target.value)
                            }
                            sx={{
                                width: "100%",
                                borderRadius: "10px",
                                '&:before': {
                                    display: "none",
                                }
                            }}
                        >
                            {types.map(({ value, label }, index) => (
                                <MenuItem key={index} value={value}>
                                    {label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        variant="filled"
                        sx={{
                            width: "22rem",
                        }}
                    >
                        <InputLabel id="cidade-label">Cidade</InputLabel>
                        <Select
                            labelId="cidade-label"
                            id="cidade"
                            options={cities}
                            value={city}
                            onChange={(event) =>
                                handleCity(event?.target.value)
                            }
                            sx={{
                                width: "100%",
                                borderRadius: "10px",
                                '&:before': {
                                    display: "none",
                                }
                            }}
                        >
                            {cities.map(({ value, label }, index) => (
                                <MenuItem key={index} value={value}>
                                    {label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        variant="filled"
                        sx={{
                            width: "22rem",
                        }}
                    >
                        <InputLabel id="bairro-label">Bairro</InputLabel>
                        <Select
                            labelId="bairro-label"
                            id="bairro"
                            options={districts}
                            value={district}
                            onChange={(event) =>
                                handleDistrict(event?.target.value)
                            }
                            sx={{
                                width: "100%",
                                borderRadius: "10px",
                                '&:before': {
                                    display: "none",
                                }
                            }}
                        >
                            {districts.map(({ value, label }, index) => (
                                <MenuItem key={index} value={value}>
                                    {label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        variant="filled"
                        sx={{
                            width: "22rem",
                        }}
                    >
                        <InputLabel id="caracteristica-label">
                            Características do imóvel
                        </InputLabel>
                        <Select
                            labelId="caracteristica-label"
                            id="caracteristica"
                            value={city}
                            onChange={(event) => setCity(event?.target.value)}
                            sx={{
                                width: "100%",
                                borderRadius: "10px",
                                '&:before': {
                                    display: "none",
                                }
                            }}
                        >
                            <MenuItem value="caracteristica">teste</MenuItem>
                        </Select>
                    </FormControl>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            gap: "1rem",
                        }}
                    >
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
                                    onClick={() => handleDorms("1")}
                                    sx={
                                        room === "1"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                                    onClick={() => handleDorms("2")}
                                    sx={
                                        room === "2"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                                    onClick={() => handleDorms("3")}
                                    sx={
                                        room === "3"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                                    onClick={() => handleDorms("4")}
                                    sx={
                                        room === "4"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                                    onClick={() => handleSuites("1")}
                                    sx={
                                        suites === "1"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                                    onClick={() => handleSuites("2")}
                                    sx={
                                        suites === "2"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                                    onClick={() => handleSuites("3")}
                                    sx={
                                        suites === "3"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                                    onClick={() => handleSuites("4")}
                                    sx={
                                        suites === "4"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            gap: "1rem",
                        }}
                    >
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
                                    onClick={() => handleBathroom("1")}
                                    sx={
                                        toilet === "1"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                                    onClick={() => handleBathroom("2")}
                                    sx={
                                        toilet === "2"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                                    onClick={() => handleBathroom("3")}
                                    sx={
                                        toilet === "3"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                                    onClick={() => handleBathroom("4")}
                                    sx={
                                        toilet === "4"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                                Vagas
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "0.5rem",
                                }}
                            >
                                <Button
                                    onClick={() => handleVacancies("1")}
                                    sx={
                                        garage === "1"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                                    onClick={() => handleVacancies("2")}
                                    sx={
                                        garage === "2"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                                    onClick={() => handleVacancies("3")}
                                    sx={
                                        garage === "3"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                                    onClick={() => handleVacancies("4")}
                                    sx={
                                        garage === "4"
                                            ? {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  color: "#ffffff",
                                                  backgroundColor: "#205CA4",
                                                  "&:hover": {
                                                      backgroundColor:
                                                          "#205CA4",
                                                      color: "#ffffff",
                                                  },
                                              }
                                            : {
                                                  minWidth: "2rem",
                                                  height: "2rem",
                                                  borderRadius: "10px",
                                                  backgroundColor: "#f2f3f3",
                                                  "&:hover": {
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
                    </Box>

                    <div className="div">
                        <label htmlFor="valor">Valor </label>
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
                                <div>{`R$${price.min}`}</div>
                                <div>-</div>
                                <div>{`R$${price.max}`}</div>
                            </div>
                            <div>
                                <InputRange
                                    step={5}
                                    draggableTrack={false}
                                    allowSameValues={false}
                                    maxValue={maxValue}
                                    minValue={0}
                                    value={price}
                                    onChange={(event) => handlePrice(event)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="div">
                        <label htmlFor="area">Área</label>
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
                                <div>{`${area.min}m²`}</div>
                                <div>-</div>
                                <div>{`${area.max}m²`}</div>
                            </div>
                            <div>
                                <InputRange
                                    step={5}
                                    draggableTrack={false}
                                    allowSameValues={false}
                                    maxValue={maxValue}
                                    minValue={0}
                                    value={area}
                                    onChange={(event) => handleArea(event)}
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
                                    onChange={(event) =>
                                        handlePlant(event?.target.value)
                                    }
                                    checked={plant}
                                    sx={{
                                        "&.Mui-checked": {
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
                                    onChange={(event) =>
                                        handleOffer(event?.target.value)
                                    }
                                    checked={offer}
                                    sx={{
                                        "&.Mui-checked": {
                                            color: "#205CA4",
                                        },
                                    }}
                                />
                            }
                            label="Ofertas"
                        />
                    </FormGroup>

                    <div className="buttons__content">
                        <Button
                            onClick={() => handleSubmitReset()}
                            sx={
                                activeButton === "clear"
                                    ? {
                                          borderRadius: "10px",
                                          backgroundColor: "#FFDB21",
                                          color: "#205CA4",
                                          width: "7.37rem",
                                          height: "3rem",
                                          fontFamily: "Nunito",
                                          fontWeight: "bold",
                                          lineHeight: "18px",
                                          letterSpacing: "-0.01em",
                                          "&:hover": {
                                              backgroundColor: "#FFDB21",
                                              color: "#205CA4",
                                          },
                                      }
                                    : {
                                          borderRadius: "10px",
                                          backgroundColor: "#F2F2F2",
                                          color: "#B2B2B2",
                                          width: "7.37rem",
                                          height: "3rem",
                                          fontFamily: "Nunito",
                                          fontWeight: "bold",
                                          lineHeight: "18px",
                                          letterSpacing: "-0.01em",
                                          "&:hover": {
                                              backgroundColor: "#FFDB21",
                                              color: "#205CA4",
                                          },
                                      }
                            }
                        >
                            Limpar
                        </Button>
                        <Button
                            onClick={() => handleSubmitSearch()}
                            sx={
                                {borderRadius: "10px",
                                backgroundColor: "#FFDB21",
                                color: "#205CA4",
                                width: "13.5rem",
                                height: "3rem",
                                fontFamily: "Nunito",
                                fontWeight: "bold",
                                lineHeight: "18px",
                                letterSpacing: "-0.01em",
                                "&:hover": {
                                    backgroundColor: "#FFDB21",
                                    color: "#205CA4",
                                },}
                            }
                        >
                            Encontre seu imóvel
                        </Button>
                    </div>
                </section>
                <section className="section__imoveis">
                    {buildings?.data?.map((item) => (
                        <div key={item.id} className="box__imoveis">
                            <div className="sticker">
                                <span>{item.type}</span>
                            </div>
                            <img src={imageBox} alt="Imagem imovel" />
                            <div className="infos">
                                <div className="top">
                                    <div className="title__box">
                                        <span>{item.building_type.name}</span>
                                        <p>{item.address.place}</p>
                                    </div>
                                    <div className="value__box">
                                        <span>{item.price}</span>
                                        <p>Cód: {item.code}</p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="desc">
                                        <img src={iconQuarto} alt="" />
                                        <p>{item.rooms} quartos</p>
                                    </div>
                                    <div className="desc">
                                        <img src={iconCar} alt="" />
                                        <p>{item.garage} vaga</p>
                                    </div>
                                    <div className="desc">
                                        <img src={iconRegua} alt="" />
                                        <p>{item.private_area} m²</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
}

if (document.getElementById("imoveis")) {
    ReactDOM.render(<Imoveis />, document.getElementById("imoveis"));
}

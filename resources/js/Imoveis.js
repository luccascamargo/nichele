/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable import/no-unresolved */
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

export default function Imoveis() {
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [activeButton, setActiveButton] = useState("buy");
    const [val, setVal] = useState({ min: 0, max: 10000 });
    const [area, setArea] = useState({ min: 0, max: 100 });

    const [dorms, setDorms] = useState("1");
    const [suites, setSuites] = useState("1");
    const [bathroom, setBathroom] = useState("1");
    const [vacancies, setVacancies] = useState("1");

    const maxValue = 10000;

    const handleActiveButton = (e) => setActiveButton(e);

    const handleDorms = (event) => setDorms(event);
    const handleSuites = (event) => setSuites(event);
    const handleBathroom = (event) => setBathroom(event);
    const handleVacancies = (event) => setVacancies(event);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleCity = (event) => {
        setCity(event.target.value);
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
                            onClick={() => handleActiveButton("buy")}
                            sx={
                                activeButton === "buy"
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
                            onClick={() => handleActiveButton("rent")}
                            sx={
                                activeButton === "rent"
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
                            value={age}
                            onChange={handleChange}
                            sx={{
                                width: "100%",
                                borderRadius: "10px",
                                '&:before': {
                                    display: "none",
                                }
                            }}
                        >
                            <MenuItem value="Ap">Apartamento</MenuItem>
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
                            value={city}
                            onChange={handleCity}
                            sx={{
                                width: "100%",
                                borderRadius: "10px",
                                '&:before': {
                                    display: "none",
                                }
                            }}
                        >
                            <MenuItem value="city">Caxias</MenuItem>
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
                            value={city}
                            onChange={handleCity}
                            sx={{
                                width: "100%",
                                borderRadius: "10px",
                                '&:before': {
                                    display: "none",
                                }
                            }}
                        >
                            <MenuItem value="bairro">Jardim Eldorado</MenuItem>
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
                            onChange={handleCity}
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
                                        dorms === "1"
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
                                        dorms === "2"
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
                                        dorms === "3"
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
                                        dorms === "4"
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
                                        bathroom === "1"
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
                                        bathroom === "2"
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
                                        bathroom === "3"
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
                                        bathroom === "4"
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
                                        vacancies === "1"
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
                                        vacancies === "2"
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
                                        vacancies === "3"
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
                                        vacancies === "4"
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
                                <div>{`R$${val.min}`}</div>
                                <div>-</div>
                                <div>{`R$${val.max}`}</div>
                            </div>
                            <div>
                                <InputRange
                                    step={5}
                                    formatLabel={(value) => null}
                                    draggableTrack={false}
                                    allowSameValues={false}
                                    maxValue={maxValue}
                                    minValue={0}
                                    value={val}
                                    onChange={setVal}
                                    onChangeComplete={(args) =>
                                        console.log(args)
                                    }
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
                                    formatLabel={(value) => null}
                                    draggableTrack={false}
                                    allowSameValues={false}
                                    maxValue={100}
                                    minValue={0}
                                    value={area}
                                    onChange={setArea}
                                    onChangeComplete={(args) =>
                                        console.log(args)
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
                                        console.log("imoveis na planta")
                                    }
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
                                    onChange={() => console.log("ofertas")}
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
                            onClick={() => handleActiveButton("clear")}
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
                            onClick={() => handleActiveButton("buscar")}
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
                    <div className="box__imoveis">
                        <div className="sticker">
                            <span>Venda</span>
                        </div>
                        <img src={imageBox} alt="Imagem imovel" />
                        <div className="infos">
                            <div className="top">
                                <div className="title__box">
                                    <span>Casa</span>
                                    <p>Centro - Caxias do sul</p>
                                </div>
                                <div className="value__box">
                                    <span>R$1.000,00</span>
                                    <p>Cód:1934</p>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="desc">
                                    <img src={iconQuarto} alt="" />
                                    <p>2 quartos</p>
                                </div>
                                <div className="desc">
                                    <img src={iconCar} alt="" />
                                    <p>1 vaga</p>
                                </div>
                                <div className="desc">
                                    <img src={iconRegua} alt="" />
                                    <p>98 m²</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box__imoveis">
                        <div className="sticker">
                            <span>Venda</span>
                        </div>
                        <img src={imageBox} alt="Imagem imovel" />
                        <div className="infos">
                            <div className="top">
                                <div className="title__box">
                                    <span>Casa</span>
                                    <p>Centro - Caxias do sul</p>
                                </div>
                                <div className="value__box">
                                    <span>R$1.000,00</span>
                                    <p>Cód:1934</p>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="desc">
                                    <img src={iconQuarto} alt="" />
                                    <p>2 quartos</p>
                                </div>
                                <div className="desc">
                                    <img src={iconCar} alt="" />
                                    <p>1 vaga</p>
                                </div>
                                <div className="desc">
                                    <img src={iconRegua} alt="" />
                                    <p>98 m²</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box__imoveis">
                        <div className="sticker">
                            <span>Venda</span>
                        </div>
                        <img src={imageBox} alt="Imagem imovel" />
                        <div className="infos">
                            <div className="top">
                                <div className="title__box">
                                    <span>Casa</span>
                                    <p>Centro - Caxias do sul</p>
                                </div>
                                <div className="value__box">
                                    <span>R$1.000,00</span>
                                    <p>Cód:1934</p>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="desc">
                                    <img src={iconQuarto} alt="" />
                                    <p>2 quartos</p>
                                </div>
                                <div className="desc">
                                    <img src={iconCar} alt="" />
                                    <p>1 vaga</p>
                                </div>
                                <div className="desc">
                                    <img src={iconRegua} alt="" />
                                    <p>98 m²</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box__imoveis">
                        <div className="sticker">
                            <span>Venda</span>
                        </div>
                        <img src={imageBox} alt="Imagem imovel" />
                        <div className="infos">
                            <div className="top">
                                <div className="title__box">
                                    <span>Casa</span>
                                    <p>Centro - Caxias do sul</p>
                                </div>
                                <div className="value__box">
                                    <span>R$1.000,00</span>
                                    <p>Cód:1934</p>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="desc">
                                    <img src={iconQuarto} alt="" />
                                    <p>2 quartos</p>
                                </div>
                                <div className="desc">
                                    <img src={iconCar} alt="" />
                                    <p>1 vaga</p>
                                </div>
                                <div className="desc">
                                    <img src={iconRegua} alt="" />
                                    <p>98 m²</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

if (document.getElementById("imoveis")) {
    ReactDOM.render(<Imoveis />, document.getElementById("imoveis"));
}

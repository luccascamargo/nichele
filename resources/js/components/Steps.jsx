import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StepConnector, {
    stepConnectorClasses,
} from "@mui/material/StepConnector";
import {
    Checkbox,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
        color: "#784af4",
    }),
    "& .QontoStepIcon-completedIcon": {
        color: "#784af4",
        zIndex: 1,
        fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "currentColor",
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                "linear-gradient( 136deg, rgb(34, 43, 158) 0%, #4340e9 50%, #205CA4 100%)",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                "linear-gradient( 136deg, rgb(34, 43, 158) 0%, #4340e9 50%, #205CA4 100%)",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
        backgroundImage:
            "linear-gradient( 136deg, #205CA4 0%, #205CA4 50%, #205CA4 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
        backgroundImage:
            "linear-gradient( 136deg, #205CA4 0%, #205CA4 50%, #205CA4 100%)",
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <AccountCircleIcon />,
        2: <HomeWorkIcon />,
        3: <CheckCircleIcon />,
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const steps = ["Dados pessoais", "Cadastro do imóvel", "Finalização"];

export function Steps() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };

    const BtnStep1 = () => {
        const [age, setAge] = React.useState("");
        const [activeButton, setActiveButton] = React.useState("buy");

        const handleChange = (event) => {
            setAge(event.target.value);
        };

        const handleActiveButton = (e) => setActiveButton(e);

        return (
            <>
                <Stack
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                        paddingBottom: "4rem",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "2rem",
                            color: "#124480",
                            fontWeight: "bold",
                            fontFamily: "Nunito",
                            lineHeight: "42px",
                        }}
                    >
                        Possui imovel para vender ou alugar?
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "1rem",
                        }}
                    >
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
                        <Button
                            onClick={() => handleActiveButton("sell")}
                            sx={
                                activeButton === "sell"
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
                            Vender
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            width: "34.56rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "1.5rem",
                            paddingTop: "3.5rem",
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Nome"
                            style={{
                                width: "100%",
                                height: "3.5rem",
                                background: "#F2F2F2",
                                borderRadius: "10px",
                                border: "none",
                                paddingLeft: "1rem",
                            }}
                        />
                        <input
                            type="text"
                            placeholder="E-mail"
                            style={{
                                width: "100%",
                                height: "3.5rem",
                                background: "#F2F2F2",
                                borderRadius: "10px",
                                border: "none",
                                paddingLeft: "1rem",
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Telefone"
                            style={{
                                width: "100%",
                                height: "3.5rem",
                                background: "#F2F2F2",
                                borderRadius: "10px",
                                border: "none",
                                paddingLeft: "1rem",
                            }}
                        />
                        <Typography>
                            Qual tipo de imóvel deseja anunciar?
                        </Typography>

                        <FormControl variant="filled" sx={{ width: "100%" }}>
                            <InputLabel id="demo-simple-select-filled-label">
                                Selecione o tipo de imóvel
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={age}
                                onChange={handleChange}
                                sx={{ width: "100%" }}
                            >
                                <MenuItem value="Ap">Apartamento</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            onClick={handleNext}
                            sx={{
                                borderRadius: "10px",
                                backgroundColor: "#FFDB21",
                                color: "#205CA4",
                                width: "13.5rem",
                                height: "3rem",
                                fontFamily: "Nunito",
                                fontWeight: "bold",
                                fontSize: "1rem",
                                lineHeight: "18px",
                                letterSpacing: "-0.01em",
                                "&:hover": {
                                    backgroundColor: "#FFDB21",
                                    color: "#205CA4",
                                },
                            }}
                        >
                            {/* {activeStep === steps.length - 1 ? "Finish" : "Next"} */}
                            {activeStep === 0 ? "Cadastre seu imovel" : ""}
                        </Button>
                    </Box>
                </Stack>
            </>
        );
    };

    const BtnStep2 = () => {
        const [uf, setUf] = React.useState("");
        const [dorms, setDorms] = React.useState("1");
        const [suites, setSuites] = React.useState("1");
        const [bathroom, setBathroom] = React.useState("1");
        const [vacancies, setVacancies] = React.useState("1");
        const [checkTerms, setCheckTerms] = React.useState(false);

        const handleCheckTerms = (event) => setCheckTerms(event.target.checked);

        const handleChange = (event) => setUf(event.target.value);
        const handleDorms = (event) => setDorms(event);
        const handleSuites = (event) => setSuites(event);
        const handleBathroom = (event) => setBathroom(event);
        const handleVacancies = (event) => setVacancies(event);

        return (
            <>
                <Stack
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2rem",
                        paddingBottom: "4rem",
                    }}
                >
                    <Box
                        sx={{
                            width: "28.12rem",
                            margin: "0 auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem",
                            textAlign: "center",
                        }}
                    >
                        <input
                            type="text"
                            placeholder="CEP"
                            style={{
                                width: "28rem",
                                height: "3.5rem",
                                background: "#F2F2F2",
                                borderRadius: "10px",
                                border: "none",
                                paddingLeft: "1rem",
                            }}
                        />

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "1rem",
                                width: "100%",
                            }}
                        >
                            <FormControl variant="filled" sx={{ width: "20%" }}>
                                <InputLabel id="demo-simple-select-filled-label">
                                    UF
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={uf}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="rs">RS</MenuItem>
                                </Select>
                            </FormControl>
                            <input
                                type="text"
                                placeholder="Cidade"
                                style={{
                                    width: "90%",
                                    height: "3.5rem",
                                    background: "#F2F2F2",
                                    borderRadius: "10px",
                                    border: "none",
                                    paddingLeft: "1rem",
                                }}
                            />
                        </Box>

                        <input
                            type="text"
                            placeholder="Bairro"
                            style={{
                                width: "28rem",
                                height: "3.5rem",
                                background: "#F2F2F2",
                                borderRadius: "10px",
                                border: "none",
                                paddingLeft: "1rem",
                            }}
                        />

                        <input
                            type="text"
                            placeholder="Bairro"
                            style={{
                                width: "28rem",
                                height: "3.5rem",
                                background: "#F2F2F2",
                                borderRadius: "10px",
                                border: "none",
                                paddingLeft: "1rem",
                            }}
                        />

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "1rem",
                                width: "100%",
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Número"
                                style={{
                                    width: "40%",
                                    height: "3.5rem",
                                    background: "#F2F2F2",
                                    borderRadius: "10px",
                                    border: "none",
                                    paddingLeft: "1rem",
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Complemento"
                                style={{
                                    width: "60%",
                                    height: "3.5rem",
                                    background: "#F2F2F2",
                                    borderRadius: "10px",
                                    border: "none",
                                    paddingLeft: "1rem",
                                }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                fontSize: "2rem",
                                color: "#124480",
                                fontWeight: "bold",
                                fontFamily: "Nunito",
                                lineHeight: "42px",
                            }}
                        >
                            Dados do imóvel
                        </Typography>

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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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
                                                      backgroundColor:
                                                          "#205CA4",
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
                                                      backgroundColor:
                                                          "#f2f3f3",
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

                        <textarea
                            placeholder="Mensagem"
                            style={{
                                width: "100%",
                                height: "10rem",
                                background: "#F2F2F2",
                                borderRadius: "10px",
                                border: "none",
                                paddingLeft: "1rem",
                                paddingTop: "1rem",
                                resize: "none",
                            }}
                        />

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <Checkbox
                                onChange={handleCheckTerms}
                                inputProps={{ "aria-label": "controlled" }}
                            />
                            <Typography
                                sx={{
                                    fontSize: "0.87rem",
                                    color: "###8C9193",
                                    fontWeight: "normal",
                                    fontFamily: "Roboto",
                                    lineHeight: "21px",
                                }}
                            >
                                Li e aceito os <a href="/">termos</a>
                            </Typography>
                        </Box>

                        <Button
                            onClick={handleNext}
                            sx={{
                                borderRadius: "10px",
                                backgroundColor: "#FFDB21",
                                color: "#205CA4",
                                width: "13.5rem",
                                height: "3rem",
                                fontFamily: "Nunito",
                                fontWeight: "bold",
                                fontSize: "1rem",
                                lineHeight: "18px",
                                letterSpacing: "-0.01em",
                                "&:hover": {
                                    backgroundColor: "#FFDB21",
                                    color: "#205CA4",
                                },
                            }}
                        >
                            {/* {activeStep === steps.length - 1 ? "Finish" : "Next"} */}
                            {activeStep === 1 ? "Finalizar Cadastro" : ""}
                        </Button>
                    </Box>
                </Stack>
            </>
        );
    };

    const BtnStep3 = () => {
        return (
            <>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        paddingBottom: "4rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "2rem",
                            maxWidth: "30rem",
                            margin: "0 auto",
                            textAlign: "center",
                        }}
                    >
                        <CheckCircleIcon
                            sx={{ fontSize: "6rem", color: "#3D994C" }}
                        />

                        <Typography
                            sx={{
                                fontSize: "2rem",
                                color: "#124480",
                                fontWeight: "bold",
                                fontFamily: "Nunito",
                                lineHeight: "42px",
                            }}
                        >
                            Cadastro de imóvel finalizado
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "1.1rem",
                                color: "#7D8596",
                                fontWeight: "normal",
                                fontFamily: "Roboto",
                                lineHeight: "27px",
                                letterSpacing: "-0.01em",
                                maxWidth: "19rem",
                            }}
                        >
                            Seus dados foram enviados com sucesso! Retornaremos
                            em breve
                        </Typography>

                        <a href="/anuncie">
                            <Button
                                onClick={handleNext}
                                sx={{
                                    borderRadius: "10px",
                                    backgroundColor: "#FFDB21",
                                    color: "#205CA4",
                                    width: "19rem",
                                    height: "3rem",
                                    fontFamily: "Nunito",
                                    fontWeight: "bold",
                                    fontSize: "0.9rem",
                                    lineHeight: "18px",
                                    letterSpacing: "-0.01em",
                                    "&:hover": {
                                        backgroundColor: "#FFDB21",
                                        color: "#205CA4",
                                    },
                                }}
                            >
                                {/* {activeStep === steps.length - 1 ? "Finish" : "Next"} */}
                                {activeStep === 2
                                    ? "Retornar para pagina inicial"
                                    : ""}
                            </Button>
                        </a>
                    </Box>
                </Stack>
            </>
        );
    };

    return (
        <Stack sx={{ width: "100%", paddingTop: "6rem" }} spacing={4}>
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === 0 ? <BtnStep1 /> : ""}
            {activeStep === 1 ? <BtnStep2 /> : ""}
            {activeStep === 2 ? <BtnStep3 /> : ""}
            {/* <React.Fragment>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                </Box>
            </React.Fragment> */}
        </Stack>
    );
}

// handle reset

{
    /* {activeStep === steps.length ? (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        Step {activeStep + 1}
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1
                                ? "Finish"
                                : "Next"}
                        </Button>
                    </Box>
                </React.Fragment>
            )} */
}

/* eslint-disable no-irregular-whitespace */
/* eslint-disable import/no-unresolved */
import ReactDOM from "react-dom";
import MultiStep from "react-multistep";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";

import "../sass/anuncie.scss";

const steps = [
    { name: "Step One", component: <StepOne /> },
    { name: "Step Two", component: <StepTwo /> },
];

// custom styles
const prevStyle = { background: "#33c3f0" };
const nextStyle = { background: "#33c3f0" };

export default function Anuncie() {
    return (
        <>
            <header className="header__anuncie">
                <Navbar />
                <div className="content__anuncie">
                    <span>Anuncie seu imóvel</span>
                    <h1>Ajudamos você a fazer o melhor negócio!</h1>
                    <p>
                        Anunciar seu imóvel na Nichele é fácil e seguro. Tenha
                        mais visibilidade na venda ou locação, além da
                        possibilidade de fechar negócios em menos tempo e mais
                        confiáveis. Preencha o formulário abaixo e entraremos em
                        contato.
                    </p>
                </div>
            </header>

            <div className="step">
                <MultiStep
                    steps={steps}
                    prevStyle={prevStyle}
                    nextStyle={nextStyle}
                />
            </div>

            <Footer />
        </>
    );
}

if (document.getElementById("anuncie")) {
    ReactDOM.render(<Anuncie />, document.getElementById("anuncie"));
}

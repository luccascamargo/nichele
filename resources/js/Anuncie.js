/* eslint-disable no-irregular-whitespace */
/* eslint-disable import/no-unresolved */
import ReactDOM from "react-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Steps } from "./components/Steps";
import { Steps2 } from "./components/Steps2";

import "../sass/anuncie.scss";
import { useEffect } from "react";
import { useState } from "react";

export default function Anuncie() {
    const [cmsInfo, setCmsInfo] = useState({});
    useEffect(() => {
        const getCmsInfo = async () => {
            await fetch('https://fathomless-chamber-79732.herokuapp.com/api/info', {
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

            <Steps2 />

            <Footer data={cmsInfo}/>
        </>
    );
}

if (document.getElementById("anuncie")) {
    ReactDOM.render(<Anuncie />, document.getElementById("anuncie"));
}

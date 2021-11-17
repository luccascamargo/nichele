/* eslint-disable import/no-unresolved */
import "../../sass/bannerAnuncie.scss";

import { Button } from "./Button";

import woman from "../../../public/assets/images/image-woman.png";

export const BannerAnuncie = () => {
    return (
        <>
            <div className="container__anuncie">
                <img src={woman} alt="Woman" />
                <div className="anuncie__infos">
                    <h3>Anuncie seu imóvel</h3>
                    <p>
                        Anunciar seu imóvel na Nichele é fácil e seguro. Tenha
                        mais visibilidade na venda ou locação, além da
                        possibilidade de fechar negócios em menos tempo e mais
                        confiáveis.
                    </p>
                    <a href="/anuncie">
                        <Button>Clique aqui</Button>
                    </a>
                    <div className="bg" />
                </div>
            </div>
        </>
    );
};

/* eslint-disable import/no-unresolved */
import "../../sass/bannerAnuncie.scss";

import { ButtonPrimary } from "./Button";

import woman from "../../../public/assets/images/image-woman.png";

export const BannerAnuncie = () => {
    return (
        <>
            <div className="container__anuncie">
                <img src={woman} alt="Woman" />
                <div className="anuncie__infos">
                    <h3>Anuncie seu imóvel</h3>
                    <p>
                        Anunciar seu imóvel na Nichele é fácil e seguro.
                        Tenha mais visibilidade na venda ou locação. Divulgamos o seu imóvel no site, nos principais portais imobiliários, em anúncios no Google,
                        no Facebook e no Instagram. Conte conosco!
                    </p>
                    <a href="/anuncie">
                        <ButtonPrimary>Clique aqui</ButtonPrimary>
                    </a>
                    <div className="bg" />
                </div>
            </div>
        </>
    );
};

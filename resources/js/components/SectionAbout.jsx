/* eslint-disable import/no-unresolved */
import { ButtonPrimary } from "./Button";

import "../../sass/sectionAbout.scss";

import imageSobre from "../../../public/assets/images/image-sobre.png";

export const SectionAbout = ({data}) => {
    return (
        <>
            <div className="container__sobre">
                <div className="content__sobre">
                    <div className="esq">
                        <h2>
                            {data?.title}
                        </h2>
                        <p>
                            {data?.description}
                        </p>
                        <a href="/sobre">
                            <ButtonPrimary>Conheça a Nichele</ButtonPrimary>
                        </a>
                    </div>
                    <div className="dir">
                        <img src={imageSobre} alt="Imagem Nichele" />
                    </div>
                </div>
            </div>
        </>
    );
};

/* eslint-disable import/no-unresolved */
import { Button } from "./Button";

import "../../sass/sectionAbout.scss";

import imageSobre from "../../../public/assets/images/image-sobre.png";

export const SectionAbout = () => {
    return (
        <>
            <div className="container__sobre">
                <div className="content__sobre">
                    <div className="esq">
                        <h2>
                            A mais de 50 anos no mercado, oferecendo soluções
                            imobiliárias
                        </h2>
                        <p>
                            Somos uma empresa moderna, com visão de futuro.
                            Buscamos permanentemente a qualificação dos serviços
                            prestados, comprometidos com a satisfação,
                            lucratividade e a qualidade de vida dos nossos
                            clientes, parceiros e colaboradores.
                        </p>
                        <a href="/sobre">
                            <Button>Conheça a Nichele</Button>
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

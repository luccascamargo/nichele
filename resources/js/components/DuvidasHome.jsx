/* eslint-disable import/no-unresolved */
import "../../sass/duvidasHome.scss";

import icon1 from "../../../public/assets/svg/icon-duvida.svg";
import icon2 from "../../../public/assets/svg/icon-link-duvida.svg";

import { list } from "../lib/listDuvidas";
import { DuvidaItemsHome } from "./DuvidaItemsHome";

export const DuvidasHome = () => {
    return (
        <>
            <div className="container__duvidas__home">
                <div className="content__esq">
                    <img src={icon1} alt="icon" />
                    <h4>Você tem alguma dúvida?</h4>
                    <p>Confira ao lado as dúvidas frequentes</p>
                    <span>
                        <img src={icon2} alt="icon" />
                        <a href="/duvidas">Confira todas as dúvidas</a>
                    </span>
                </div>
                <div className="content__dir">
                    <ul className="list__duvidas__home">
                        {list.map((item, index) => (
                            <div key={index}>
                                <li key={index} className="list__item__home">
                                    <DuvidaItemsHome
                                        title={item.title}
                                        description={item.description}
                                    />
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

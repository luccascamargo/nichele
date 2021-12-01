/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import "../../sass/duvidaDoc.scss";

import { DuvidaItems } from "../components/DuvidaItems";
import { list } from "../lib/listDuvidas";

export const DuvidaVendas = () => {
    return (
        <>
            <div className="container__duvidas__doc">
                <ul className="list_container">
                    {list.map((item, index) => (
                        <div key={index}>
                            <li key={index} className="list__item">
                                <DuvidaItems
                                    title={item.title}
                                    description={item.description}
                                />
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
};

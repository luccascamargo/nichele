/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import "../../sass/duvidaDoc.scss";

import { DuvidaItems } from "../components/DuvidaItems";

export const DuvidaDoc = ({datas}) => {
    return (
        <>
            <div className="container__duvidas__doc">
                <ul className="list_container">
                    {datas.map((item, index) => (
                        <div key={index}>
                            <li key={index} className="list__item">
                                <DuvidaItems
                                    title={item.title}
                                    description={item.content}
                                />
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
};

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import Markdown from "markdown-to-jsx";

import "../../sass/duvidaDoc.scss";
import iconList from "../../../public/assets/svg/icon-list.svg";

export const DuvidaItems = ({ ...props }) => {
    const [listItem, setListItem] = useState(false);

    const handleItem = () => setListItem(!listItem);

    return (
        <>
            <div className="header__duvida__item" onClick={handleItem}>
                <span>{props.title}</span>
                <div className={listItem ? "rotate__img" : "img"}>
                    <img src={iconList} alt="Icone lista" />
                </div>
            </div>

            <div
                className={
                    listItem
                        ? "content__duvida__item active__item"
                        : "content__duvida__item"
                }
            >
                <Markdown>{props.description}</Markdown>
            </div>
        </>
    );
};

import iconClient from "../../../public/assets/svg/icon-button-client.svg";

export function Button({ ...props }) {
    return <button className="button" {...props} />;
}

export const ButtonMenu = ({ ...props }) => {
    return <button className="buttons__menu">{props.text}</button>;
};

export const ButtonClient = ({ ...props }) => {
    return (
        <button
            className={
                props.footer ? "buttons__menu button__footer" : "buttons__menu"
            }
        >
            <img src={iconClient} alt="Icon area do cliente" />
            {props.text}
        </button>
    );
};

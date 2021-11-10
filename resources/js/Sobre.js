import ReactDOM from "react-dom";

export default function Sobre() {
    return <h1>sobre</h1>;
}

if (document.getElementById("sobre")) {
    ReactDOM.render(<Sobre />, document.getElementById("sobre"));
}

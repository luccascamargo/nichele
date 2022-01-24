import  { useState } from "react";

import { Sucess } from './Sucess';
import { PersonalInfo } from './PersonalInfo';
import { PropertyRegistration } from './PropertyRegistration';

import axios from "axios";

import '../../sass/steps2.scss'

export const Steps2 = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tipoImovel: "",
    cep: "",
    uf: "",
    city: "",
    address: "",
    number: "",
    complement: "",
    dormitories: "",
    suits: "",
    bathrooms: "",
    vacancies: "",
    message: "",
  });

  const FormTitles = ["Dados Pessoais", "Cadastrar Imóvel", "Finalização"];

    axios
        .post("/api/send/email/advertise", formData)
        .then((response) => console.log(JSON.stringify(response.data))) // trocar
        .catch((error) => {
            console.log("ERROR:: ", error.response.data);
    });

  const PageDisplay = () => {
    if (page === 0) {
        return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
        return <PropertyRegistration formData={formData} setFormData={setFormData} />;
    } else {
      return <Sucess formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div className="bg-line">
            <div className="line" style={{ width: page === 0 ? "0%" : page == 1 ? "50%" : "100%" }}/>
            <div className="one" style={{ background: page === 0 ? "#205CA4" : page == 1 ? '#205CA4' : page == 2 ? '#205CA4' : '#C4C4C4'}}>1</div>
            <div className="two" style={{ background: page === 1 ? "#205CA4" : page == 2 ? '#205CA4' : '#C4C4C4'}}>2</div>
            <div className="three" style={{ background: page === 2 ? "#205CA4" : "#C4C4C4" }}>3</div>
        </div>
      </div>
      <div className="form-container">
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Voltar
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("Cadastro Finalizado");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Enviar" : "Próximo"}
          </button>
        </div>
      </div>
    </div>
  );
}



// style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}

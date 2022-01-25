export const Sucess = ({ formData, setFormData }) => {
    return (
        <div className="other-info-container">
            <h4>Revise seus dados</h4>
            <div className="revisao_dados">
                <p>{formData.typeFor}</p>
                <p>Nome: <span id="data">{formData.name}</span></p>
                <p>E-mail: <span id="data">{formData.email}</span></p>
                <p>Telefone: <span id="data">{formData.phone}</span></p>
                <p>Tipo de imóvel: <span id="data">{formData.tipoImovel}</span></p>
                <p>CEP: <span id="data">{formData.cep}</span></p>
                <p>UF: <span id="data">{formData.uf}</span></p>
                <p>Cidade: <span id="data">{formData.city}</span></p>
                <p>Bairro: <span id="data">{formData.district}</span></p>
                <p>Endereço: <span id="data">{formData.address}</span></p>
                <p>Número: <span id="data">{formData.number}</span></p>
                <p>Complemento: <span id="data">{formData.complement}</span></p>
                <p>Dormitórios: <span id="data">{formData.dormitories}</span></p>
                <p>Suítes: <span id="data">{formData.suits}</span></p>
                <p>Banheiros: <span id="data">{formData.bathrooms}</span></p>
                <p>Vagas: <span id="data">{formData.vacancies}</span></p>
                <p>Mensagem: <span id="data">{formData.message}</span></p>
            </div>
        </div>
    );
};

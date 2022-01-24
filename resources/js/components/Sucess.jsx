export const Sucess = ({ formData, setFormData }) => {
  return (
    <div className="other-info-container">
      <span>Revise seus dados</span>
        <p>Nome: {formData.nome}</p>
        <p>E-mail: {formData.email}</p>
        <p>Telefone: {formData.phone}</p>
        <p>Tipo de imóvel: {formData.tipoImovel}</p>
        <p>CEP: {formData.cep}</p>
        <p>UF: {formData.uf}</p>
        <p>Cidade: {formData.city}</p>
        <p>Bairro: {formData.district}</p>
        <p>Endereço: {formData.address}</p>
        <p>Número: {formData.number}</p>
        <p>Complemento: {formData.complement}</p>
        <p>Mensagem: {formData.message}</p>
    </div>
  );
}


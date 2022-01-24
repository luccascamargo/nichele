export const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div className="personal-info-container">
        <span>Possui imóvel par vender ou alugar?</span>
        <div className="buttons">
            <button type="button" >Comprar</button>
            <button type="button" >Alugar</button>
            <button type="button" >Ambos</button>
        </div>
      <input
        type="text"
        placeholder="Nome"
        value={formData.name}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="E-mail"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={formData.phone}
        onChange={(e) => {
          setFormData({ ...formData, phone: e.target.value });
        }}
      />

      <p>Que tipo de imóvel deseja anunciar?</p>

      <select name="tipoImovel" onChange={(e) => {
          setFormData({ ...formData, tipoImovel: e.target.value });
        }}>
          <option value="selecione">Selecione</option>
          <option value="ap">Apartamento</option>
          <option value="teste">Teste</option>
      </select>
    </div>
  );
}


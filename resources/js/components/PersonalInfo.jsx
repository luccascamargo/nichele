export const PersonalInfo = ({ formData, setFormData }) => {
    return (
        <div className="personal-info-container">
            <span>Possui imóvel par vender ou alugar?</span>
            <div className="buttons">
                <button
                    type="button"
                    onClick={(e) => {
                        setFormData({ ...formData, typeFor: "Comprar" });
                    }}
                    className={formData.typeFor === "Comprar" ? "active" : ""}
                >
                    Comprar
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        setFormData({ ...formData, typeFor: "Alugar" });
                    }}
                    className={formData.typeFor === "Alugar" ? "active" : ""}
                >
                    Alugar
                </button>
                <button
                    type="button"
                    onClick={(e) => {
                        setFormData({ ...formData, typeFor: "Ambos" });
                    }}
                    className={formData.typeFor === "Ambos" ? "active" : ""}
                >
                    Ambos
                </button>
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

            <select
                name="tipoImovel"
                onChange={(e) => {
                    setFormData({ ...formData, tipoImovel: e.target.value });
                }}
            >
                <option value="selecione">Selecione</option>
                <option value="ap">Apartamento</option>
                <option value="teste">Teste</option>
            </select>
        </div>
    );
};

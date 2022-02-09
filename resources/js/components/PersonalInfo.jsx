export const PersonalInfo = ({ formData, setFormData }) => {
    return (
        <div className="personal-info-container">
            <span>Possui imóvel para vender ou alugar?</span>
            <div className="buttons">
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
                        setFormData({ ...formData, typeFor: "Vender" });
                    }}
                    className={formData.typeFor === "Vender" ? "active" : ""}
                >
                    Vender
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
                <option value="apto-cobertura">Apto Cobertura</option>
                <option value="apto-loft">Apto Loft</option>
                <option value="apto-studio">Apto Studio</option>
                <option value="box">Box</option>
                <option value="casa">Casa</option>
                <option value="casa-comercial">Casa Comercial</option>
                <option value="casa-condominio">Casa em Condomínio</option>
                <option value="chacara">Chácara</option>
                <option value="empreendimento">Empreendimento</option>
                <option value="loja">Loja</option>
                <option value="pavilhao">Pavilhão</option>
                <option value="predio-comercial">Prédio Comercial</option>
                <option value="salas-conjunto">Salas/Conjuntos</option>
                <option value="terreno">Terreno</option>
            </select>
        </div>
    );
};

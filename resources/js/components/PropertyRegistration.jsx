export const PropertyRegistration = ({ formData, setFormData }) => {
  return (
    <div className="sign-up-container">
        <span>Onde fica seu imóvel?</span>
      <input
        type="text"
        placeholder="CEP"
        value={formData.cep}
        onChange={(event) =>
          setFormData({ ...formData, cep: event.target.value })
        }
      />
        <div className="group-uf">
            <input
                type="text"
                placeholder="uf"
                id="uf"
                value={formData.uf}
                onChange={(event) =>
                setFormData({ ...formData, uf: event.target.value })
            }
            />
            <input
                type="text"
                placeholder="Cidade"
                value={formData.city}
                onChange={(event) =>
                setFormData({ ...formData, city: event.target.value })
                }
            />
        </div>
      <input
        type="text"
        placeholder="Bairro"
        value={formData.district}
        onChange={(event) =>
          setFormData({ ...formData, district: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Endereço"
        value={formData.city}
        onChange={(event) =>
          setFormData({ ...formData, address: event.target.value })
        }
      />
      <div className="group-inputs">
        <input
            type="text"
            placeholder="Número"
            value={formData.number}
            onChange={(event) =>
            setFormData({ ...formData, number: event.target.value })
            }
        />
        <input
            type="text"
            placeholder="Complemento"
            value={formData.complement}
            onChange={(event) =>
            setFormData({ ...formData, complement: event.target.value })
            }
        />
      </div>

      <div className="dados-imovel">
          <span>Dados do imóvel</span>
          <div className="section">
              <div className="box">
                  <p>Dormitórios</p>
                  <div className="opcoes">
                      <div className="opcoao">1</div>
                      <div className="opcoao">2</div>
                      <div className="opcoao">3</div>
                      <div className="opcoao">4+</div>
                  </div>
              </div>
              <div className="box">
                  <p>Suítes</p>
                  <div className="opcoes">
                      <div className="opcoao">1</div>
                      <div className="opcoao">2</div>
                      <div className="opcoao">3</div>
                      <div className="opcoao">4+</div>
                  </div>
              </div>
          </div>
          <div className="section">
              <div className="box">
                  <p>Dormitórios</p>
                  <div className="opcoes">
                      <div className="opcoao">1</div>
                      <div className="opcoao">2</div>
                      <div className="opcoao">3</div>
                      <div className="opcoao">4+</div>
                  </div>
              </div>
              <div className="box">
                  <p>Suítes</p>
                  <div className="opcoes">
                      <div className="opcoao">1</div>
                      <div className="opcoao">2</div>
                      <div className="opcoao">3</div>
                      <div className="opcoao">4+</div>
                  </div>
              </div>
          </div>
      </div>
      <textarea
        type="text"
        placeholder="Mensagem"
        id="mensagem"
        value={formData.message}
        onChange={(event) =>
          setFormData({ ...formData, message: event.target.value })
        }
      />
    </div>
  );
}


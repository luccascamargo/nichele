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
                value={formData.address}
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
                        setFormData({
                            ...formData,
                            complement: event.target.value,
                        })
                    }
                />
            </div>

            <div className="dados-imovel">
                <span>Dados do imóvel</span>
                <div className="section">
                    <div className="box">
                        <p>Dormitórios</p>
                        <div className="opcoes">
                            <div
                                className="opcoao"
                                style={{
                                    background:
                                        formData.dormitories === "1"
                                            ? "#205CA4"
                                            : "",
                                    color: formData.dormitories === "1"
                                            ? "#ffffff"
                                            : '',
                                }}
                            >
                                <input
                                    id="d1"
                                    type="radio"
                                    value="1"
                                    checked={
                                        formData.dormitories === "1"
                                            ? "checked"
                                            : ""
                                    }
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            dormitories: event.target.value,
                                        })
                                    }
                                />
                                <label htmlFor="d1">1</label>
                            </div>
                            <div
                                className="opcoao"
                                style={{
                                    background:
                                        formData.dormitories === "2"
                                            ? "#205CA4"
                                            : "",
                                    color: formData.dormitories === "2"
                                            ? "#ffffff"
                                            : '',
                                }}
                            >
                                <input
                                    id="d2"
                                    type="radio"
                                    value="2"
                                    checked={formData.dormitories === "2"}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            dormitories: event.target.value,
                                        })
                                    }
                                />
                                <label htmlFor="d2">2</label>
                            </div>
                            <div
                                className="opcoao"
                                style={{
                                    background:
                                        formData.dormitories === "3"
                                            ? "#205CA4"
                                            : "",
                                        color: formData.dormitories === "3"
                                            ? "#ffffff"
                                            : '',
                                }}
                            >
                                <input
                                    id="d3"
                                    type="radio"
                                    value="3"
                                    checked={formData.dormitories === "3"}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            dormitories: event.target.value,
                                        })
                                    }
                                />
                                <label htmlFor="d3">3</label>
                            </div>
                            <div
                                className="opcoao"
                                style={{
                                    background:
                                        formData.dormitories === "4+"
                                            ? "#205CA4"
                                            : "",
                                    color: formData.dormitories === "4+"
                                            ? "#ffffff"
                                            : '',
                                }}
                            >
                                <input
                                    id="d4"
                                    type="radio"
                                    value="4+"
                                    checked={formData.dormitories === "4+"}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            dormitories: event.target.value,
                                        })
                                    }
                                />
                                <label htmlFor="d4">4+</label>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <p>Suítes</p>
                        <div className="opcoes">
                            <div className="opcoes">
                                <div
                                    className="opcoao"
                                    style={{
                                        background:
                                            formData.suits === "1"
                                                ? "#205CA4"
                                                : "",
                                            color: formData.suits === "1"
                                                ? "#ffffff"
                                                : '',
                                    }}
                                >
                                    <input
                                        id="s1"
                                        type="radio"
                                        value="1"
                                        checked={
                                            formData.suits === "1"
                                                ? "checked"
                                                : ""
                                        }
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                suits: event.target.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="s1">1</label>
                                </div>
                                <div
                                    className="opcoao"
                                    style={{
                                        background:
                                            formData.suits === "2"
                                                ? "#205CA4"
                                                : "",
                                                color: formData.suits === "2"
                                                ? "#ffffff"
                                                : '',
                                    }}
                                >
                                    <input
                                        id="s2"
                                        type="radio"
                                        value="2"
                                        checked={formData.suits === "2"}
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                suits: event.target.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="s2">2</label>
                                </div>
                                <div
                                    className="opcoao"
                                    style={{
                                        background:
                                            formData.suits === "3"
                                                ? "#205CA4"
                                                : "",
                                                color: formData.suits === "3"
                                                ? "#ffffff"
                                                : '',
                                    }}
                                >
                                    <input
                                        id="s3"
                                        type="radio"
                                        value="3"
                                        checked={formData.suits === "3"}
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                suits: event.target.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="s3">3</label>
                                </div>
                                <div
                                    className="opcoao"
                                    style={{
                                        background:
                                            formData.suits === "4+"
                                                ? "#205CA4"
                                                : "",
                                                color: formData.suits === "4+"
                                                ? "#ffffff"
                                                : '',
                                    }}
                                >
                                    <input
                                        id="s4"
                                        type="radio"
                                        value="4+"
                                        checked={formData.suits === "4+"}
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                suits: event.target.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="s4">4+</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <p>Banheiros</p>
                        <div className="opcoes">
                            <div
                                className="opcoao"
                                style={{
                                    background:
                                        formData.bathrooms === "1"
                                            ? "#205CA4"
                                            : "",
                                            color: formData.bathrooms === "1"
                                                ? "#ffffff"
                                                : '',
                                }}
                            >
                                <input
                                    id="b1"
                                    type="radio"
                                    value="1"
                                    checked={
                                        formData.bathrooms === "1"
                                            ? "checked"
                                            : ""
                                    }
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            bathrooms: event.target.value,
                                        })
                                    }
                                />
                                <label htmlFor="b1">1</label>
                            </div>
                            <div
                                className="opcoao"
                                style={{
                                    background:
                                        formData.bathrooms === "2"
                                            ? "#205CA4"
                                            : "",
                                            color: formData.bathrooms === "2"
                                                ? "#ffffff"
                                                : '',
                                }}
                            >
                                <input
                                    id="b2"
                                    type="radio"
                                    value="2"
                                    checked={formData.bathrooms === "2"}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            bathrooms: event.target.value,
                                        })
                                    }
                                />
                                <label htmlFor="b2">2</label>
                            </div>
                            <div
                                className="opcoao"
                                style={{
                                    background:
                                        formData.bathrooms === "3"
                                            ? "#205CA4"
                                            : "",
                                            color: formData.bathrooms === "3"
                                                ? "#ffffff"
                                                : '',
                                }}
                            >
                                <input
                                    id="b3"
                                    type="radio"
                                    value="3"
                                    checked={formData.bathrooms === "3"}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            bathrooms: event.target.value,
                                        })
                                    }
                                />
                                <label htmlFor="b3">3</label>
                            </div>
                            <div
                                className="opcoao"
                                style={{
                                    background:
                                        formData.bathrooms === "4+"
                                            ? "#205CA4"
                                            : "",
                                            color: formData.bathrooms === "4+"
                                                ? "#ffffff"
                                                : '',
                                }}
                            >
                                <input
                                    id="b4"
                                    type="radio"
                                    value="4+"
                                    checked={formData.bathrooms === "4+"}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            bathrooms: event.target.value,
                                        })
                                    }
                                />
                                <label htmlFor="b4">4+</label>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <p>Vagas</p>
                        <div className="opcoes">
                            <div
                                className="opcoao"
                                style={{
                                    background:
                                        formData.vacancies === "1"
                                            ? "#205CA4"
                                            : "",
                                            color: formData.vacancies === "1"
                                                ? "#ffffff"
                                                : '',
                                }}
                            >
                                <input
                                    id="v1"
                                    type="radio"
                                    value="1"
                                    checked={
                                        formData.vacancies === "1"
                                            ? "checked"
                                            : ""
                                    }
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            vacancies: event.target.value,
                                        })
                                    }
                                />
                                <label htmlFor="v1">1</label>
                            </div>
                            <div
                                className="opcoao"
                                style={{
                                    background:
                                        formData.vacancies === "2"
                                            ? "#205CA4"
                                            : "",
                                            color: formData.vacancies === "2"
                                                ? "#ffffff"
                                                : '',
                                }}
                            >
                                <input
                                    id="dv2"
                                    type="radio"
                                    value="2"
                                    checked={formData.vacancies === "2"}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            vacancies: event.target.value,
                                        })
                                    }
                                />
                                <label htmlFor="dv2">2</label>
                            </div>
                            <div
                                className="opcoao"
                                style={{
                                    background:
                                        formData.vacancies === "3"
                                            ? "#205CA4"
                                            : "",
                                            color: formData.vacancies === "3"
                                                ? "#ffffff"
                                                : '',
                                }}
                            >
                                <input
                                    id="v3"
                                    type="radio"
                                    value="3"
                                    checked={formData.vacancies === "3"}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            vacancies: event.target.value,
                                        })
                                    }
                                />
                                <label htmlFor="v3">3</label>
                            </div>
                            <div
                                className="opcoao"
                                style={{
                                    background:
                                        formData.vacancies === "4+"
                                            ? "#205CA4"
                                            : "",
                                            color: formData.vacancies === "4+"
                                                ? "#ffffff"
                                                : '',
                                }}
                            >
                                <input
                                    id="v4"
                                    type="radio"
                                    value="4+"
                                    checked={formData.vacancies === "4+"}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            vacancies: event.target.value,
                                        })
                                    }
                                />
                                <label htmlFor="v4">4+</label>
                            </div>
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
};

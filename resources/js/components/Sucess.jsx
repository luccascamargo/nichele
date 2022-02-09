import imageOk from '../../../public/assets/images/enviado.png'

export const Sucess = ({ formData, setFormData }) => {
    return (
        <div className="other-info-container">
            <img src={imageOk} alt="" />
            <h4>Cadastro de imóvel finalizado</h4>
            <p>Seus dados foram enviados com sucesso! Retornaremos em breve</p>
            <a href="/">
             <button>Retornar para a página inicial</button>
            </a>
        </div>
    );
};

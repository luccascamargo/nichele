/* eslint-disable import/no-unresolved */
import "../../sass/form.scss";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { ButtonPrimary } from "./Button";
import axios from "axios";

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? "#7dafeb" : "#000000",
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        display: "flex",
        alignItems: "center",
        border: "none",
        borderRadius: "10px",
        height: "3.5rem",
        backgroundColor: "#f2f2f2",
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return { ...provided, opacity, transition };
    },
};

export const Form = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        axios
            .post("/api/send/email", data)
            .then((response) => alert(JSON.stringify(response.data))) // trocar
            .catch((error) => {
                console.log("ERROR:: ", error.response.data);
            });
    };

    return (
        <>
            <div className="form__contato">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", { required: true })}
                        placeholder="Nome"
                    />
                    {errors.name && <span>This field is required</span>}

                    <input
                        {...register("email", { required: true })}
                        placeholder="E-mail"
                    />
                    {errors.email && <span>This field is required</span>}

                    <input
                        {...register("phone", { required: true })}
                        placeholder="Telefone"
                    />
                    {errors.phone && <span>This field is required</span>}

                    <Controller
                        name="Subject"
                        className="select__subject"
                        placeholder="teste"
                        render={({ field }) => (
                            <Select
                                {...field}
                                styles={customStyles}
                                placeholder="Selecione"
                                className="select__input"
                                options={[
                                    { value: "chocolate", label: "Chocolate" },
                                    {
                                        value: "strawberry",
                                        label: "Strawberry",
                                    },
                                    { value: "vanilla", label: "Vanilla" },
                                ]}
                            />
                        )}
                        control={control}
                        defaultValue=""
                    />
                    {errors.subject && <span>This field is required</span>}

                    <textarea
                        {...register("message", { required: true })}
                        placeholder="Mensagem"
                        id="mensagem"
                    />
                    {errors.message && <span>This field is required</span>}

                    <div className="checkbox">
                        <input
                            type="checkbox"
                            {...register("checkbox", { required: false })}
                            name="teste"
                            id="teste"
                        />
                        {errors.checkbox && (
                            <span>This checkbox is required</span>
                        )}
                        <span>
                            Li e aceito os <a href="/">termos</a>
                        </span>
                    </div>

                    <ButtonPrimary type="submit">Enviar mensagem</ButtonPrimary>
                </form>
            </div>
        </>
    );
};

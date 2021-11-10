/* eslint-disable import/no-unresolved */
import "../../sass/form.scss";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Button } from "./Button";

export const Form = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

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
                                placeholder="teste"
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
                            {...register("checkbox", { required: true })}
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

                    <Button type="submit">Enviar mensagem</Button>
                </form>
            </div>
        </>
    );
};

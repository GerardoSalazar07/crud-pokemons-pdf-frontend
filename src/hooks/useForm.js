import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    name: yup.string().required("Nombre requerido"),
    type: yup.string().required("Tipo requerido"),
    height: yup.number("Altura no válida").transform((value) => Number.isNaN(value) ? null : value).nullable().min(0, "Altura no válida"),
    weight: yup.number("Peso no válido").transform((value) => Number.isNaN(value) ? null : value).nullable().min(0, "Peso no válido")
}).required()

export function useFormulario (savePokemon, fields) {
    const { formState: { errors }, register, setValue, handleSubmit, reset } = useForm({ resolver: yupResolver(schema) })

    useEffect(() => {
        reset()

        setValue('name', fields.name)
        setValue('type', fields.type)
        setValue('height', fields.height)
        setValue('weight', fields.weight)
        setValue('imageURL', fields.imageURL)
    }, [fields, reset, setValue])
    
    const onSubmit = (data) => savePokemon({ data, reset })

    return {
        errors,
        register,
        setValue,
        handleSubmit,
        reset,
        onSubmit
    }
}
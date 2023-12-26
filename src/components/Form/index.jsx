import { Label } from "keep-react"

// eslint-disable-next-line react/prop-types
export default function FormComponent ({ register, errors = {} }) {
    return (
        <div>
            <div className="flex gap-2">
                <div>
                    <Label htmlFor="#name" value="Nombre" />
                    <input
                        id="#name"
                        {...register("name")}
                        className="block w-full focus:outline-none focus:ring-0 text-metal-800 border-metal-300 caret-metal-800 p-2.5 text-body-5 border rounded-md bg-white placeholder:text-metal-400 focus:placeholder:text-metal-300"
                        placeholder="Pikachu"
                    />
                    {errors.name && <span className="error">{errors.name.message}</span>}
                </div>
                <div>
                    <Label htmlFor="#type" value="Tipo" />
                    <input
                        id="#type"
                        {...register("type")}
                        className="block w-full focus:outline-none focus:ring-0 text-metal-800 border-metal-300 caret-metal-800 p-2.5 text-body-5 border rounded-md bg-white placeholder:text-metal-400 focus:placeholder:text-metal-300"
                        placeholder="Eléctrico"
                    />
                    {errors.type && <span className="error">{errors.type.message}</span>}
                </div>
            </div>
            <div className="flex gap-2">
                <div>
                    <Label htmlFor="#height" value="Altura" />
                    <input
                        id="#height"
                        {...register("height")}
                        className="block w-full focus:outline-none focus:ring-0 text-metal-800 border-metal-300 caret-metal-800 p-2.5 text-body-5 border rounded-md bg-white placeholder:text-metal-400 focus:placeholder:text-metal-300"
                        placeholder="0.4"
                        type="number"
                        step="any"
                    />
                    {errors.height && <span className="error">{errors.height.message}</span>}
                </div>
                <div>
                    <Label htmlFor="#weight" value="Peso" />
                    <input
                        id="#weight"
                        {...register("weight")}
                        className="block w-full focus:outline-none focus:ring-0 text-metal-800 border-metal-300 caret-metal-800 p-2.5 text-body-5 border rounded-md bg-white placeholder:text-metal-400 focus:placeholder:text-metal-300"
                        placeholder="6.0"
                        type="number"
                        step="any"
                    />
                    {errors.weight && <span className="error">{errors.weight.message}</span>}
                </div>
            </div>
            <div>
                <Label htmlFor="#imageURL" value="URL Imagen" />
                <input
                    id="#imageURL"
                    {...register("imageURL")}
                    className="block w-full focus:outline-none focus:ring-0 text-metal-800 border-metal-300 caret-metal-800 p-2.5 text-body-5 border rounded-md bg-white placeholder:text-metal-400 focus:placeholder:text-metal-300"
                    placeholder="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
                />
                {errors.imageURL && <span className="error">{errors.imageURL.message}</span>}
            </div>
        </div>
    )
}
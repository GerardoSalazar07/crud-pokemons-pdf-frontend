import { Avatar, Button, Table } from "keep-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// eslint-disable-next-line react/prop-types
export default function TableComponent ({ pokemons = [], newPokemon, catchPokemon, editPokemon, removePokemon }) {
    return (
        <Table>
            <Table.Caption>
                <div className="my-5 flex items-center justify-between px-6">
                    <div className="flex items-center gap-5">
                        <p className="text-body-1 font-semibold text-metal-600">POKEMONS</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <Button type="outlineGray" size="sm" onClick={newPokemon}>
                            Nuevo pokémon
                        </Button>
                    </div>
                </div>
            </Table.Caption>
            <Table.Head>
                <Table.HeadCell className="min-w-[250px]">
                    <p className="text-body-6 font-medium text-metal-400">Nombre</p>
                </Table.HeadCell>
                <Table.HeadCell>Tipo</Table.HeadCell>
                <Table.HeadCell>Altura</Table.HeadCell>
                <Table.HeadCell>Peso</Table.HeadCell>
                <Table.HeadCell />
            </Table.Head>
            <Table.Body className="divide-gray-25 divide-y">
                {pokemons.map((pokemon) => (
                    <Table.Row className="bg-white" key={pokemon.id}>
                        <Table.Cell>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <Avatar shape="circle" img={pokemon.imageURL} size="md" />
                                        <div>
                                            <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{pokemon.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Table.Cell>
                        <Table.Cell>
                            <p>{pokemon.type}</p>
                        </Table.Cell>
                        <Table.Cell>
                            <p>{pokemon.height} m</p>
                        </Table.Cell>
                        <Table.Cell>
                            <p>{pokemon.weight} kg</p>
                        </Table.Cell>
                        <Table.Cell>
                            <ul className="flex">
                                <li className="rounded px-2 py-1 hover:bg-metal-100">
                                    <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600" onClick={() => catchPokemon({ id: pokemon.id })}>
                                        <span>
                                            <FontAwesomeIcon icon="fa-solid fa-file-pdf" />
                                        </span>
                                    </button>
                                </li>
                                <li className="rounded px-2 py-1 hover:bg-metal-100">
                                    <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600" onClick={() => editPokemon({ fields: pokemon })}>
                                        <span>
                                            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                                        </span>
                                    </button>
                                </li>
                                <li className="rounded px-2 py-1 hover:bg-metal-100">
                                    <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600" onClick={() => removePokemon({ id: pokemon.id })}>
                                        <span>
                                            <FontAwesomeIcon icon="fa-solid fa-trash" />
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}
import { useContext, useEffect, useState } from "react"
import { toast } from 'sonner'
import PokemonsContext from '../context/PokemonsContext'
import createPokemon from '../services/createPokemon'
import getPokemons from '../services/getPokemons'
import getPokemon from '../services/getPokemon'
import updatePokemon from '../services/updatePokemon'
import deletePokemon from '../services/deletePokemon'

export function usePokemons (toggleModal) {
    const { pokemons, setPokemons, loading, setLoading } = useContext(PokemonsContext)
    const [ fields, setFields ] = useState({})

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const pokemons = await getPokemons()
                setPokemons(pokemons)
            } catch (err) {
                toast.error(err.message)
            } finally {
                setLoading(false)
            }
        })()
    }, [setPokemons, setLoading])

    const savePokemon = async({ data, reset }) => {
        try {
            setLoading(true)
            if (fields.id) {
                const updatedPokemon = await updatePokemon({ id: fields.id, data })
                setPokemons((pokemons) => pokemons.map(pokemon => pokemon.id === updatedPokemon.id ? updatedPokemon : pokemon))
            } else {
                const pokemon = await createPokemon({ data })
                setPokemons((pokemons) => pokemons.concat(pokemon))
            }
            reset()
            toggleModal()
            toast.success(`Pokémon ${fields.id ? "modificado" : "agregado"} exitosamente`)
        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    }

    const newPokemon = () => {
        setFields({})
        toggleModal()
    }

    const catchPokemon = async({ id }) => {
        try {
            setLoading(true)
            const link = await getPokemon({ id })
            link.click()
            toast.success('PDF Pokémon creado exitosamente')
        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    }

    const editPokemon = ({ fields }) => {
        setFields(fields)
        toggleModal()
    }

    const removePokemon = async({ id }) => {
        try {
            setLoading(true)
            const deletedPokemon = await deletePokemon({ id })
            setPokemons((pokemons) => pokemons.filter(pokemon => pokemon.id !== deletedPokemon.id))
            toast.success('Pokémon eliminado exitosamente')
        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    }
    
    return {
        pokemons,
        loading,
        fields,
        savePokemon,
        newPokemon,
        catchPokemon,
        editPokemon,
        removePokemon
    }
}
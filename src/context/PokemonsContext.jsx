import { useState, createContext } from 'react'

const Context = createContext({})

// eslint-disable-next-line react/prop-types
export function PokemonsContextProvider ({ children }) {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)

  return <Context.Provider value={{ pokemons, setPokemons, loading, setLoading }}>
    {children}
  </Context.Provider>
}

export default Context
const ENDPOINT = 'http://localhost:8080'

export default function createPokemon ({ data }) {
  return fetch(`${ENDPOINT}/pokemons`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const { pokemon } = res
    return pokemon
  })
}
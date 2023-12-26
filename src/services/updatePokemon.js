const ENDPOINT = 'http://localhost:8080'

export default function updatePokemon ({ id, data }) {
  return fetch(`${ENDPOINT}/pokemons/${id}`, {
    method: 'PUT',
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
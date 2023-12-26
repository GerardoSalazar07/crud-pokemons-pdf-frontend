const ENDPOINT = 'http://localhost:8080'

export default function deletePokemon ({ id }) {
  return fetch(`${ENDPOINT}/pokemons/${id}`, {
    method: 'DELETE'
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const { pokemon } = res
    return pokemon
  })
}
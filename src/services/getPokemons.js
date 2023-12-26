const ENDPOINT = 'http://localhost:8080'

export default function getPokemons () {
  return fetch(`${ENDPOINT}/pokemons`, {
    method: 'GET'
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const { pokemons } = res
    return pokemons
  })
}
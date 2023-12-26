const ENDPOINT = 'http://localhost:8080'

export default function getPokemon ({ id }) {
  return fetch(`${ENDPOINT}/pokemons/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/pdf'
    }
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.blob()
  }).then(res => {
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(res)
    link.download = `Pokemon_${id}.pdf`
    return link
  })
}
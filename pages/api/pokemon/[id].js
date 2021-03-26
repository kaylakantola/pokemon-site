async function getPokemonById(id) {
  return fetch(`https://pokemon-api-5zoiaieeoq-ue.a.run.app/pokemon/${id}`)
    .then(r => r.json())
    .then(d => d)
    .catch(console.log)
}


export default async function handler(req, res) {
  const {id} = req.query
  const pokemon = await getPokemonById(id)
  res.send(pokemon)
}
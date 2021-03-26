export async function getPokemon() {
  return fetch('https://pokemon-api-5zoiaieeoq-ue.a.run.app/pokemon')
    .then(r => r.json())
    .then(d => d)
    .catch(console.log)
}

const types = {
  "bug": { "color": "#A8B81F"},
  "dragon": { "color": "#7037F8"},
  "electric": { "color": "#F6CF30"},
  "fighting": { "color": "#C03029"},
  "fire": { "color": "#F08031"},
  "flying": { "color": "#A890F0"},
  "ghost": { "color": "#705898"},
  "grass": { "color": "#78C84F"},
  "ground": { "color": "#E0C068"},
  "ice": { "color": "#98D8D8"},
  "normal": { "color": "#A8A878"},
  "poison": { "color": "#A040A0"},
  "psychic": { "color": "#F35788"},
  "rock": { "color": "#B8A039"},
  "water": { "color": "#6890F0"}
}
export default function TypeShowcase({type}) {
  const typeColor = types[type].color
  return(
    <div style={{borderRadius: 10, backgroundColor: typeColor, fontColor: 'white', padding: 5}}>
      {type}
    </div>
  )
}
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
export default function TypeShowcase({type, width = "100%"}) {
  const typeColor = types[type].color
  return(
    <div style={{      border: "1px solid black", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: 10, backgroundColor: typeColor, fontColor: 'white', padding: 15, width, textAlign: "center"}}>
      {type.toUpperCase()}
    </div>
  )
}
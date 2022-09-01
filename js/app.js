let characters = JSON.parse(file).results // array de personajes

let input_character_name = document.getElementById("input_character_name")

function search_character_button_click() {
  let character_details = search_character(input_character_name.value)
  container.innerHTML = `
  <p>
    <span style="color: red">Nombre: ${character_details.name}</span><br />
    <span>Género: ${character_details.gender}</span><br />
    <span>Altura: ${character_details.height}</span><br />
    <span>Color de ojos: ${character_details.eye_color}</span>
    <img src="${character_details.image}"/>
  </p>`

}

function search_character(character_name) {
  
  // Busqueda secuencial
  for(let i = 0; i<characters.length;i++) {
    // characters[i] => { name: "Luke Skywalker", age...}
    if(characters[i].name == character_name) {
       return characters[i]
    }
  }
}

class Character {
  constructor(name, gender) {
    
    
  }
  
  obtener_iniciales() {
    
  }
  
}
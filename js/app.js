let characters = JSON.parse(file).results // array de personajes

let input_character_name = document.getElementById("input_character_name")
let datos = document.getElementById("datos")
let imagen = document.getElementById("personaje")
let main = document.getElementById("main")

function search_character_button_click() {
  let character_details = search_character(input_character_name.value)

  imagen.src = character_details.img
  imagen.style.display = "inline"
  console.log(character_details.afiliacion)

  if(character_details.afiliacion==="jedi"){
    main.style.boxShadow = "10px 10px 30px 10px rgba(0,252,10,0.4)";
    console.log("true")

    
  }
  else if(character_details.afiliacion=="sith"){
    main.style.boxShadow = "10px 10px 30px 10px rgba(252,0,0,0.4)"
  }

  datos.innerHTML = `
  <h2 class="tabla_nombre" id="nombre">Nombre: ${character_details.name}</h2>
        <h2 class="tabla_nombre" id="altura">Altura: ${character_details.height} cm</h2>  
        <h2 class="tabla_nombre" id="peso">Peso: ${character_details.mass} Kg</h2>   
        <h2 class="tabla_nombre" id="genero">Genero: ${character_details.gender}</h2>    
        <h2 class="tabla_nombre" id="color_cabello">Color de cabello: ${character_details.hair_color}</h2>   
        <h2 class="tabla_nombre" id="color_ojos:">Color de ojos: ${character_details.eye_color}</h2>  
        <h2 class="tabla_nombre" id="año:">Año de nacimiento: ${character_details.birth_year}</h2>`

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
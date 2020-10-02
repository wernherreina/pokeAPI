// URL DE LA API
const API = "https://pokeapi.co/api/v2/pokemon?limit=151";
const getData =(api) => {
    return fetch(api)
    .then((response) => response.json())
    .then((json)=>{
        llenarDatos(json) , favorito(json.results);
    })
    .catch ((error) =>{
        console.log("Error:", error)
       // alert("no se encontró la API Pokemon")
    })
}
const seleccion = [8];
const comprobar = document.getElementById('comprobar')
comprobar.addEventListener('click', (e)=>{
    e.preventDefault() 
    const textNumero = document.getElementById('mostrar').value
    seleccion.push(textNumero)
    getData(API);
})
const llenarDatos = (data) => {
    let html = " ";
    data.results.slice(0,seleccion.pop()).forEach((personajes, pokeID) => {
        html += '<div class="col">';
        html += '<div class="card" style="width: 10rem;">';
        html += `<img src="https://pokeres.bastionbot.org/images/pokemon/${pokeID+1}.png" class="card-img-top" alt="...">`;
        html+=  '<div class="card-body">';
        html += `<h5 class="card-title">${personajes.name}</h5>`
        html += '</div>';
        html += '</div>';
        html += '</div>';
    }); 
    document.getElementById("datosPersonajes").innerHTML = html;
}
const favoritoArray = [1];
const favoritoButton = document.getElementById('favoritoButton')
favoritoButton.addEventListener('click', (e)=>{
    e.preventDefault() 
    const textFavorito = document.getElementById('favoritoInput').value
    favoritoArray.push(textFavorito)
    getData(API);
  }) 
const favorito = (results) =>{
    const elegido = favoritoArray.pop()-1 ;
    let html = " ";
    html += `<h5 class="card-title">${results[elegido].name}</h5>`
    html += `<img src="https://pokeres.bastionbot.org/images/pokemon/${elegido+1}.png" class="card-img-top" alt="...">`;
    console.log(elegido);
    document.getElementById("favorito").innerHTML = html;
  
}
getData(API);







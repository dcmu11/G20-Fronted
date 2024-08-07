//primer ejercuicio realizar una funcion asyncrona que traiga la lista de poekmones de

//la sgte api
//https://pokeapi.co/api/v2/pokemon?limit=20
//logicA DE JS

const pokemonsContainer = document.querySelector("#row-pokemons");
const pokemonsName = document.querySelector("#pokemoName");
const pokemonImg = document.querySelector("#imgPokemon");
const pokemonhabili = document.querySelector("#habilidadPokemon");
const pokemonhabili2 = document.querySelector("#habilidadPokemon2");
const pokemontamaño = document.querySelector("#tamaño");
//const pokemonaudio= document.querySelector("#sonido");

//funcion que consuime los datos del api
const obtenerPokemones = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data = await response.json();

  //console.log(data.results);
  setPokemonsView(data.results);
};

// vamos a crear una funcion que se encargue de poder pintar nuestros poekmones
const setPokemonsView = (results) => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";




  results.map(async (result, index) => {
    const html = `
  <div class="col-md-3">
  <div class="card">
  <img class= "card-img-top mt-2"
   widht="100"
   height="100"
   src=${imgUrl}${index + 1}.svg
     alt=p${index + 1}>
   <div class="card-body text-center">
   <h6 class="text-title text-white " >N.${index + 1}</h6>
   <h4 class="text-title">${result.name}</h4>
   <button type="button" class="btn btn-primary" onclick='obtenerDetallePokemon("${result.url}")' data-bs-toggle="modal" data-bs-target="#pokemonModal">
 Ver detalle
</button>
   </div>
   </div>`;

    pokemonsContainer.innerHTML += html;
  });
};

const obtenerDetallePokemon=async(url)=>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    pokemonsName.innerHTML=data.name
    pokemontamaño.innerHTML=data.weight
    pokemonImg.src=data.sprites.other.showdown.front_shiny
   // pokemonaudio.src=data.cries.legacy
    pokemonhabili.innerHTML=data.abilities[0].ability.name
    pokemonhabili2.innerHTML=data.abilities[1].ability.name
}
obtenerDetallePokemon();
obtenerPokemones();

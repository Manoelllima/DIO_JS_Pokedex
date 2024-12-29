const pokeResquet = {};


pokeResquet.pokemonDetail = function(pokemon){
    return fetch(pokemon.url).then((response)=> response.json());
}

pokeResquet.getPokemons = function (offset = 0, limit =  12) {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((responseBody) => responseBody.results)
        .then((pokemons)=>pokemons.map(pokeResquet.pokemonDetail))
        .then((requestDetail)=> Promise.all(requestDetail))
        .then((pokemonDetail)=> pokemonDetail)        
        .catch((error) => console.log(error))

}


let show = document.querySelector('button')
let offset = 0;
let page = 12;
show.addEventListener('click',()=>{
    offset += page;
    page = 4;
    pokeResquet.getPokemons(offset, page).then((pokemon = []) => {
        const newList = pokemon.map((value) => {       
            pokedexList.innerHTML += pokemonList(value);
        })
        pokemon = document.querySelectorAll('.pokedex > .center > .flex > .item_flex');
        info(pokemon);
    })
})

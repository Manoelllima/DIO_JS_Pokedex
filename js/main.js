function pokemonList(pokemon) {
    return `
        <div class="item_flex">
            <div class="content  ${pokemon.types[0].type.name}">
                <p class="id">#<span>${pokemon.id}</span></p>
                <p class="name">${pokemon.name}</p>
                <div class="flex">  
                    <div class="item_flex types">
                        ${pokemon.types.map((value)=>{return `<span class=" ${value.type.name} ">${value.type.name}</span>`;}).join('')}
                    </div><!-- item_flex -->

                    <div class="item_flex sprite">
                        <div class="img">
                            <img src=${pokemon.sprites.other["official-artwork"].front_default} alt="">
                        </div> <!-- img -->
                    </div><!-- item_flex -->
                </div><!-- flex -->
            </div><!-- content -->
        </div><!-- item_flex -->
        `
}

let pokedexList = document.querySelector('.pokedex .center .flex');
pokeResquet.getPokemons().then((pokemon = []) => {
    const newList = pokemon.map((value, index) => {
        pokedexList.innerHTML += pokemonList(value);
        
    })
    pokemon = document.querySelectorAll('.pokedex > .center > .flex > .item_flex');
    info(pokemon);

})




function info(elemento) {
    let info = document.querySelector('.pokemon');
    let closeInfo = document.querySelector('.pokemon .content .close');

    for (let i = 0; i < elemento.length; i++) {
        elemento[i].addEventListener('click', function () {
            info.style.display = 'block';
            console.log(this);
            
        })
    }

    closeInfo.addEventListener('click', function () {
        info.style.display = 'none';

    })
}
// catalogoPokemon.js
function mostrarLista(catalogoPokemon) {
    const app = document.getElementById("app");
    app.innerHTML = '<h1 class="titulo-catalogo">Catálogo Pokémon</h1>';
    
    const seccion = document.createElement("section");
    seccion.classList.add("lista-pokemon");

    catalogoPokemon.forEach((pokemon, index) => {
        const id = index + 1;
        const pokemonElement = document.createElement("div");
        pokemonElement.className = "pokemon-card";
        pokemonElement.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" 
                 alt="${pokemon.name}" class="pokemon-img">
            <div class="pokemon-info">
                <p class="pokemon-id">#${id.toString().padStart(3, '0')}</p>
                <p class="pokemon-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
            </div>
        `;
        pokemonElement.addEventListener('click', () => mostrarDetalle(pokemon.name));
        seccion.appendChild(pokemonElement);
    });
    
    app.appendChild(seccion);
}
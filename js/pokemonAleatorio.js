// pokemonAleatorio.js
// pokemonAleatorio.js
async function buscarAleatorio() {
    const app = document.getElementById("app");
    app.innerHTML = '<p class="loading">Buscando Pokémon sorpresa...</p>';
    
    try {
        const pokemons = await conexionApi();
        const randomIndex = Math.floor(Math.random() * pokemons.length);
        const randomPokemon = pokemons[randomIndex];
        mostrarDetalle(randomPokemon.name);
    } catch (error) {
        console.error("Error:", error);
        app.innerHTML = '<p class="error">No se pudo encontrar un Pokémon aleatorio</p>';
    }
}
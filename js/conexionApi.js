// conexionApi.js
// conexionApi.js
// conexionApi.js
async function conexionApi() {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching Pokémon:", error);
        return [];
    }
}

async function cargarCatalogo() {
    const app = document.getElementById("app");
    app.innerHTML = '<p class="loading">Cargando Pokémon...</p>';
    
    try {
        const pokemons = await conexionApi();
        if (pokemons.length > 0) {
            mostrarLista(pokemons);
        } else {
            app.innerHTML = '<p class="error">No se pudieron cargar los Pokémon</p>';
        }
    } catch (error) {
        console.error("Error:", error);
        app.innerHTML = '<p class="error">Error al cargar el catálogo</p>';
    }
}
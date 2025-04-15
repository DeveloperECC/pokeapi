// detallePokemon.js
async function mostrarDetalle(nombrePokemon) {
    const app = document.getElementById("app");
    app.innerHTML = '<p class="loading">Cargando detalles...</p>';
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
        const pokemon = await response.json();
        
        app.innerHTML = `
            <div class="pokemon-detalle">
                <img src="${pokemon.sprites.other['official-artwork'].front_default}" 
                     alt="${pokemon.name}" class="detail-img">
                <h2>${pokemon.name.toUpperCase()}</h2>
                <div class="detail-meta">
                    <span>#${pokemon.id.toString().padStart(3, '0')}</span>
                    <span>${pokemon.height / 10}m</span>
                    <span>${pokemon.weight / 10}kg</span>
                </div>
                <div class="detail-types">
                    ${pokemon.types.map(t => `
                        <span class="type-badge type-${t.type.name}">${t.type.name}</span>
                    `).join('')}
                </div>
                <button onclick="cargarCatalogo()" class="btn btn-back">Volver al catálogo</button>
            </div>
        `;
    } catch (error) {
        console.error("Error:", error);
        app.innerHTML = '<p class="error">Error al cargar los detalles</p>';
    }
}
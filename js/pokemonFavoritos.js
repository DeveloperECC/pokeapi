// pokemonFavoritos.js
function verMisFavoritos() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <h2>Mis Favoritos</h2>
        <div class="favoritos-container">
            <p class="empty-message">Aún no tienes Pokémon favoritos</p>
        </div>
    `;
    
    // lógica para mostrar los Pokémon favoritos
    // desde localStorage u otra fuente de datos
}
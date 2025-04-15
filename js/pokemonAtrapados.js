function verMiColeccion() {
    const app = document.getElementById("app");
    app.innerHTML = "<h2>Mi Colección</h2>";
    //cargar los atrapados desde localStorage// pokemonAtrapados.js
function verMiColeccion() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <h2>Mi Colección</h2>
        <div class="coleccion-container">
            <p class="empty-message">Aún no has capturado Pokémon</p>
        </div>
    `;
    
    //lógica para mostrar los Pokémon capturados
    // desde localStorage u otra fuente de datos
}
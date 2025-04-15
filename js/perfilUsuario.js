// perfilUsuario.js
function mostrarPerfil() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <div class="perfil-container">
            <h2>Mi Perfil</h2>
            <div class="perfil-info">
                <p>Nombre: Entrenador</p>
                <p>Pokémon capturados: 0</p>
                <p>Pokémon favoritos: 0</p>
            </div>
        </div>
    `;
}
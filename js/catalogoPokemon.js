function mostrarLista(catalogoPokemon){
    const app = document.getElementById("app");
    
    let Pokes = " ";

    const seccion = document.createElement("section");
    seccion.classList.add("c-lista"); 

    for (let i = 0; i < catalogoPokemon.length; i++) {
        let id = catalogoPokemon[i].url.split("/")[6];
        Pokes += `
        <div class="c-lista-pokemon poke-${id}" onclick="mostrarDetalle('${catalogoPokemon[i].name}')">
            <p>#${id}</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" width="auto" height="60" loading="lazy" alt="${listaPokes[i].name}">
            <p>${catalogoPokemon[i].name}</p>
        </div>`;
    }
    seccion.innerHTML = Pokes;
    
    /*app.appendChild(buscador);*/
    app.appendChild(seccion);
}
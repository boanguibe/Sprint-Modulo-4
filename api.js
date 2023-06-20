const url ="https://pokeapi.co/api/v2/pokemon/"
const imgPokemon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
const searchInput = document.getElementById("search");
const pokemonContainer = document.getElementById("pokemon");

function showError(msg){
    pokemonContainer.innerHTML = `<p class="error">${msg}</p>`;
}

    async function searchPokemon(){
    const searchPokemon = searchInput.value.toLocaleLowerCase();

    try{
        const response = await fetch(url+searchPokemon);
        
        if(!response.ok){
            showError(`No se encontro el pokemon llamado ${searchPokemon}`);
            return;
        }
        
        const data = await response.json();
        console.log(response.value)

        pokemonContainer.innerHTML = 
        `
            
            <img src="${imgPokemon}/${data.id}.svg">
            <h2>${data.name.toUpperCase()}</h2>
            <p>Id: ${data.id}</p>
            <p>Altura: ${data.height/10} m</p>
            <p>Peso: ${data.weight/10} Kg</p>
        
        `;

    }catch (error){
        showError('Valor ingresado vacio o no valido')
    }
}

document.getElementById("btn-search").addEventListener("click",searchPokemon);

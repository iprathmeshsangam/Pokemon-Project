//fetching Data from API 



async function fetchPokemon(){
    try{
        const PokemonName = document.getElementById("PokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`); 

        if(!response.ok){
            throw new Error("Could not connect to api");

        }if(PokemonName == ""){
            alert("Enter Pokemon name")
        }
        const data = await response.json();
        console.log(data);
        
        const back_default =  document.getElementById('back_default');
        const front_default = document.getElementById('front_default');

        back_default.src = data.sprites.back_default;
        front_default.src = data.sprites.front_default;

        front_default.classList.remove("hide");
        back_default.classList.remove("hide");

        back_default.classList.add("show");
        front_default.classList.add("show");

        document.getElementById('PokemonName').value = ""
    }
    catch(error){
        console.error(error);
    }

};
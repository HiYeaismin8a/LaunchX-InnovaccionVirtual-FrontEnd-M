const cambiarImagen = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    //Promesa
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pikachu-llorando.gif")
        }
        else {
            return res.json();
        } 
    //INFORMACIÓN - DATOS 
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default; //
            let pokeHability;

            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}





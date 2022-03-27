const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    var myself=this;
    fetch(url).then((res) => { 
        if(res.status !=200){
            console.log(res);
            pokeImage("img/pokemonsad.png");
            NamePoke("------");
            pokeNumber("--");
            habilidad([]);
            tipo([]);
            pokeAltura("");
            pokePeso("");
            starStats([]);
        }     
        else{
            return res.json();
        }        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeName = data.name.toString();
        let pokeId = data.id.toString();
        let pokeHeight = data.height.toString();
        let pokeWeigth =data.weight.toString();

        pokeNumber(pokeId);
        NamePoke(pokeName);
        pokeImage(pokeImg);
        habilidad(data.abilities);
        tipo(data.types);
        starStats(data.stats);
        pokeAltura(pokeHeight);
        pokePeso(pokeWeigth);
        starStats(data.stats);
        console.log(pokeImg);
    })
}


const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const NamePoke = (name) => {
    const pokeNApi = document.getElementById("pokeNameA");
    pokeNApi.textContent = name;
}

const pokeNumber = (id) => {
    const pokeId = document.getElementById("pokeId");
    pokeId.textContent = id;
}

const pokeAltura = (altura) => {
    const pokeAltura = document.getElementById("pokeAltura");
    pokeAltura.textContent = altura +"\"";
}

const pokePeso = (peso) => {
    const pokepeso = document.getElementById("pokePeso");
    pokepeso.textContent = peso +"lbs";
}

const habilidad = (habilidades) => {
    const pokeHability = document.getElementById("habilidad");
    var habilidad="";
    habilidades.forEach(function (data, i){
        if(i<(habilidades.length -1)){
        habilidad+= data.ability.name +", ";
    }else{
        habilidad+= data.ability.name +".";
    }
    });
    pokeHability.textContent = habilidad;
}

const tipo = (tipos) => {
    const poketype = document.getElementById("tipo");
    var tipo="";
    tipos.forEach(function (data, i){
        if(i<(tipos.length-1)){
            tipo+= data.type.name +", ";
    }else{
        tipo+= data.type.name +".";
    }
    });
    poketype.textContent = tipo;
}

const starStats = (stats) => {
    var maxstatvalue=150;
    if(stats.length>0){
    stats.forEach(function (data,i){
        var valuestat = data.base_stat;
        if(valuestat!=undefined){
            var namestat= data.stat.name.toString();
            const pokestat = document.getElementById(namestat);
            const pokestatnum = document.getElementById(namestat+"-p");
            pokestat.value =  valuestat;
            pokestatnum.textContent=valuestat;
            /// mostraria por cada iteracion HP: 23, attack: 45
        }

    })
  }else{
      var stats = ["hp","attack" ,"defense","special-attack","special-defense","speed"];
      stats.forEach(function (stat,i){
        const pokestat = document.getElementById(stat);
        const pokestatnum = document.getElementById(stat+"-p");
        pokestat.value =  0;
        pokestatnum.textContent=0;
      })
  }
}

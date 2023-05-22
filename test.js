const pokemonArray = [
  {
    id: 1,
    name: "Bulbasaur",
    types: ["grass"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  }, 
  {
    id: 2,
    name: "IvySaur",
    types: ["poison"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  }, 
  {
    id: 3,
    name: "Venusaur",
    types: ["grass", "poison"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    id: 4,
    name: "Charmander",
    types: ["fire"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
];


const filterTypes = (arr) => {
    const typeList = [];
    for(let i = 0; i < arr.length; i ++) {
      console.log(arr[i].types);
      for(let j = 0; j < arr[i].types.length; j++) {
        typeList.push(arr[i].types[j])
      }
    }
    let typeContainer = {};
    for(let k = 0; k < typeList.length; k++) {
      if(!typeContainer[typeList[k]]) {
        typeContainer[typeList[k]] = 1;
      } 
    }
    let typeArray = [];
    for(const key in typeContainer) {
      typeArray.push(key);
    }
    console.log(typeArray);
  }
  
  filterTypes(pokemonArray);
import React, { useState, useEffect } from 'react'

import PokemonRow from './PokemonRow';

import './App.css';

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


function App() {
  const [data, setData] = useState(pokemonArray);
  const [types, setTypes] = useState([]);
  const [type, setType] = useState("");
  
  useEffect(()=> {
    setData(pokemonArray);
    
    const filterTypes = (arr) => {
      const typeList = [];
      for(let i = 0; i < arr.length; i ++) {
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
      setTypes(typeArray);
    }
    filterTypes(data);
  }, [data])
  
  const filterType = (val) => {
    const filteredPokemonArray = pokemonArray.filter(el => el.type === val);
    console.log(filteredPokemonArray);
    setData(filteredPokemonArray);
  }
  
  
  return(
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(el => {
              return (
                <PokemonRow
                  id={el.id}
                  name={el.name}
                  types={el.types[0]}
                  sprite={el.sprite}
                  key={el.id}
                />
              )
            })
          }
        </tbody>
      </table>
      
      <div>
      <form>
        <label htmlFor="pokemonType">Choose a Type:</label>
        <select 
          name="pokemonType" 
          id="pokemonType" 
          value={type} 
          onChange={(e) => setType(e.target.value)}
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </form>
      <button onClick={() => filterType(type)}>Submit</button>
      </div>
    </div>
    )
}

export default App;

import React, {useState, useEffect} from 'react'

const PokeAPI = (props) => {
    const [poke, setPoke] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=808')
            .then(response => response.json())
            .then(response => setPoke(response.results))
    }, []);

    return (
        <div>
            {poke.length > 0 && poke.map((pokemon, index) => {
                return (<div key={index}>{index+1}: {pokemon.name}</div>)
            })}
        </div>
    );
}
export default PokeAPI;

import React, {useState, useEffect} from 'react'

const PokeFetch = () => {
    const [poke, setPoke] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=808')
            .then(response => response.json())
            .then(response => setPoke(response.results))
    }, []);

    return (
        <div>
            <h1>Pokemon 1-807 via Fetch:</h1>
            {
            poke.length > 0 && poke.map((pokemon, index) => {
                return (<p key={index}>{index+1}: {pokemon.name}</p>)
            })
            }
        </div>
    );
}
export default PokeFetch;
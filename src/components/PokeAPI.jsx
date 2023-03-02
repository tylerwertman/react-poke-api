import React, {useState, useEffect} from 'react'
import axios from 'axios';

const PokeAPI = (props) => {
    // const [poke, setPoke] = useState([]);
    const [responseData, setResponseData] = useState(null);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=808')
            .then(response => {setResponseData(response.data.results)})
        }, []);
        console.log(responseData)
        
    return (
        <div>
            <h1>Pokemon 1-807</h1>
            {
            responseData.map((item, i)=>
            <p key={i}>{i+1}: {item.name}</p>
            )}
        </div>
    );
}
export default PokeAPI;

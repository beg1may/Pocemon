import React, { useEffect, useState } from 'react';
import Card from "./Components/Card";

function App() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6');
                const data = await response.json();
                const results = await Promise.all(data.results.map(pokemon => fetch(pokemon.url).then(res => res.json())));
                setPokemon(results);
            } catch (error) {
                console.error('Error fetching pokemons:', error);
            }
        };
        fetchPokemon();
    }, []);

    return (
        <div>
            <div className="pokemon-grid">
                {pokemon.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}

export default App;

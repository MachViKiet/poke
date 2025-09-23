import { useState, useEffect } from "react";
import { getPokemonDetails, getPokemonSpecie, getPokemonEvolution } from "../services/pokemon";

export function usePokemons(start = 1, end = 151) {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const ids = []

        for (let i = start; i <= end; i++) ids.push(i);

        const detailsPromises = ids.map(id => getPokemonDetails(id));
        const speciesPromises = ids.map(id => getPokemonSpecie(id));

        Promise.all([Promise.all(detailsPromises), Promise.all(speciesPromises)])
            .then(([pokeResponses, specieResponses]) => {
                const pokemons = pokeResponses.map(response => response.data);
                const species = specieResponses.map(response => response.data);

                const evolutionPromises = species.map(specie => {
                    const evolutionChainUrl = specie.evolution_chain.url;
                    const evolutionChainId = evolutionChainUrl.split('/').filter(Boolean).pop();
                    return getPokemonEvolution(evolutionChainId);
                });

                Promise.all(evolutionPromises).then(evolutionResponses => {
                    const evolutions = evolutionResponses.map(response => response.data);
                    setPokemons(pokemons.map((pokemon, idx) => ({
                        ...pokemon,
                        specie: species[idx],
                        evolution: evolutions[idx],
                    })));
                    setLoading(false);
                });
            })
            .catch(err => {
                setLoading(false);
                console.error(err);
            });
    }, [start, end]);

    return { pokemons, loading };
}
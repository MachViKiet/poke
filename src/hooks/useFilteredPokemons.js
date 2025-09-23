import { useMemo } from "react";
import { filterPokemons, sortPokemons } from "../utils/pokemonUtils";


const useFilteredPokemons = (pokemons, filters) => {
    return useMemo(()=> {
        const filtered = filterPokemons(pokemons, filters);
        return sortPokemons(filtered, filters.sortBy);
    
    }, [pokemons, filters])
}

export default useFilteredPokemons;
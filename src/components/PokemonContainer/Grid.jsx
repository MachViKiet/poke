import PokemonCard from "./Card";
import { useState, lazy, Suspense, useEffect } from "react";
// import { usePokemons } from "../../hooks/usePokemons";
// import { regionRanges } from "../../utils/pokemonUtils";
import PokemonLoading from "./Loading";
import styles from "./Grid.module.css";
// import useFilteredPokemons from "../../hooks/useFilteredPokemons";
import { useDispatch, useSelector } from 'react-redux'
import { load_pokemon_details, load_pokemon_list, load_pokemon_species } from "../../stores/actions/actions";

const PokemonModal = lazy(() => import("./PokemonModal/Modal"));

const PokemonGrid = () => {
  // const regionKey = filters.region?.toLowerCase();
  // const [start, end] = regionRanges[regionKey] || [1, 151];

  // const { pokemons, loading } = usePokemons(start, end);

  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [open, setOpen] = useState(false);

  // const sortedPokemons = useFilteredPokemons(pokemons, filters);

  const pokemon_selectors = useSelector((state) => state.reducers.pokemons);
  const pokemon_detail_selectors = useSelector((state) => state.reducers.details);
  const pokemon_species_selectors = useSelector((state) => state.reducers.species);

  const dispatch = useDispatch()

  const limit = 5;
  const [state, setState] = useState({
    loading: true,
    modalLoading: false,
    err: null,
    page: null
  });

  useEffect(() => {
    pokemon_selectors || load_pokemon_list(limit).then((res) => {
      res.payload.list.forEach(async (pokemon) => {
        await load_pokemon_details(pokemon.name).then((res) => {
          dispatch(res)
        })
      
      })
      setState(prev => { return { ...prev, loading: false } })
      dispatch(res)
    })
  }, [dispatch, pokemon_selectors]);

  useEffect(() => {
    console.log('pokemons updated:', pokemon_selectors);
  }, [pokemon_selectors]);

  if (state.loading) return <PokemonLoading />;

  return (
    <>
      {pokemon_selectors.list.length > 0 ? (
        <ul className={styles.pokemonGrid}>
          {pokemon_selectors.list.map((pokemon, index) => (
            <li key={index} style={{ animationDelay: `${index * 350}ms` }}
                onClick={async () => {
                  if (pokemon_species_selectors && pokemon_species_selectors[pokemon.name] &&
                    pokemon_species_selectors[pokemon.name]?.base_happiness
                  ) {
                    console.log('Details already loaded for:', pokemon.name);
                  }
                  else {
                    await load_pokemon_species(pokemon.name).then((res) => {
                      dispatch(res)
                    }).then(() => {
                      console.log('Loaded species for:', pokemon.name);
                    });
                  }
                  
                  setSelectedPokemon(pokemon.name);
                  setOpen(true);
                }}>

              {pokemon_detail_selectors && pokemon_detail_selectors[pokemon.name] && <PokemonCard
                pokemon={pokemon_detail_selectors[pokemon.name]}
                pokemonSpecie={pokemon}
              />}

            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.noData}>No such Pokémon :/</div>
      )}

      {selectedPokemon && (
        <Suspense fallback={<div>Carregando...</div>}>
          <PokemonModal
            open={open}
            setOpen={setOpen}
            pokemon_data= {{
              pokemon_name: selectedPokemon,
              details: pokemon_detail_selectors && pokemon_detail_selectors[selectedPokemon],
              specie: pokemon_detail_selectors && pokemon_species_selectors && pokemon_species_selectors[selectedPokemon]
            }}
            // pokemon={pokemon_detail_selectors[selectedPokemon]}
            // pokemonSpecie={pokemon_species_selectors[selectedPokemon]}
            // pokemonEvolution={selectedPokemon.evolution}
            // pokemons={pokemons}
          />
        </Suspense>
      )}
    </>
  );
};

export default PokemonGrid;

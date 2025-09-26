import PokemonCard from "./Card";
import { useState, lazy, Suspense } from "react";
import { usePokemons } from "../../hooks/usePokemons";
import { regionRanges } from "../../utils/pokemonUtils";
import PokemonLoading from "./Loading";
import styles from "./Grid.module.css";
import useFilteredPokemons from "../../hooks/useFilteredPokemons";
const PokemonModal = lazy(() => import("./PokemonModal/Modal"));

const PokemonGrid = ({ filters }) => {
  const regionKey = filters.region?.toLowerCase();
  const [start, end] = regionRanges[regionKey] || [1, 151];

  const { pokemons, loading } = usePokemons(start, end);

  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [open, setOpen] = useState(false);

  const sortedPokemons = useFilteredPokemons(pokemons, filters);

  if (loading) return <PokemonLoading />;

  return (
    <>
      {sortedPokemons.length > 0 ? (
        <ul className={styles.pokemonGrid}>
          {sortedPokemons.map((pokemon, index) => (
            <li key={pokemon.id} style={{ animationDelay: `${index * 350}ms` }}>
              <PokemonCard
                pokemon={pokemon}
                pokemonSpecie={pokemon.specie}
                onClick={() => {
                  setSelectedPokemon(pokemon);
                  setOpen(true);
                }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.noData}>No such Pokémon in this region :/</div>
      )}
      {selectedPokemon && (
        <Suspense fallback={<div>Carregando...</div>}>
          <PokemonModal
            open={open}
            setOpen={setOpen}
            pokemon={selectedPokemon}
            pokemonSpecie={selectedPokemon.specie}
            pokemonEvolution={selectedPokemon.evolution}
            pokemons={pokemons}
          />
        </Suspense>
      )}
    </>
  );
};

export default PokemonGrid;

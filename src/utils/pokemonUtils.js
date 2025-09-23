export const regionRanges = {
  kanto: [1, 151],
  johto: [152, 251],
  hoenn: [252, 386],
  sinnoh: [387, 494],
  unova: [495, 649],
  kalos: [650, 721],
  alola: [722, 809],
  galar: [810, 898]
};

export function filterPokemons(pokemons, filters) {
  return pokemons
    .filter(pokemon =>
      !filters.type || pokemon.types.some(t => t.type.name === filters.type)
    )
    .filter(pokemon =>
      !filters.search || pokemon.name.toLowerCase().includes(filters.search.toLowerCase())
    );
}

export function sortPokemons(pokemons, sortBy) {
  const sorted = [...pokemons];
  if (sortBy === "id") {
    sorted.sort((a, b) => a.id - b.id);
  } else if (sortBy === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
  return sorted;
}
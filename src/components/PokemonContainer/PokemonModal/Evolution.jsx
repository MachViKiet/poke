import styles from "./Modal.module.css";

const PokemonEvolution = ({ pokemonEvolution, pokemons }) => {
  const renderEvolutionChain = (chain) => {
    const pokemon = pokemons.find((p) => p.name === chain.species.name);
    const spriteUrl = pokemon?.sprites?.other["dream_world"]?.front_default;
    const hasNextEvolution = chain.evolves_to && chain.evolves_to.length > 0;

    return (
      <div className={styles.evolutionSubBox} key={chain.species.name}>
        <div>
          <div className={styles.evolutionImageContainer}>
            <img
              className={styles.evolutionImage}
              src={spriteUrl}
              alt={chain.species.name}
            ></img>
          </div>
          <div className={styles.evolutionName}>
            {chain.species.name.charAt(0).toUpperCase() +
              chain.species.name.slice(1)}
          </div>
        </div>
        {hasNextEvolution && (
          <div className={styles.evolutionArrow}>
            <svg
              fill="#000000"
              height="200px"
              width="200px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <polygon points="17,12 17,13 15,13 15,15 13,15 13,3 11,3 11,15 9,15 9,13 7,13 7,12 5,12 5,15 7,15 7,17 9,17 9,19 10,19 10,20 11,20 11,21 13,21 13,20 14,20 14,19 15,19 15,17 17,17 17,15 19,15 19,12 "></polygon>{" "}
              </g>
            </svg>
          </div>
        )}
        {hasNextEvolution &&
          chain.evolves_to.map((evo) => renderEvolutionChain(evo))}
      </div>
    );
  };

  return (
    <div className={styles.evolutionContainer}>
      <div className={styles.evolutionTitle}>Evolution</div>
      <div className={styles.evolutionBox}>
        {renderEvolutionChain(pokemonEvolution.chain)}
      </div>
    </div>
  );
};

export default PokemonEvolution;

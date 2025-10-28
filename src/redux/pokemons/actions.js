import axios from "axios";

// actions/pokemonActions.js
export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";
export const SELECT_POKEMON = "SELECT_POKEMON";

export const getNumberOfPages = (count) => Math.ceil(count / 20);

export const selectPokemon = (pokemon) => {
  return async dispatch => {
    dispatch({ type: SELECT_POKEMON, payload: pokemon });
  }

}

export const fetchPokemons = () => {
  return async dispatch => {
    dispatch({ type: FETCH_POKEMON_REQUEST });

    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`);
      dispatch({
        type: FETCH_POKEMON_SUCCESS,
        payload: {
          list: data.results,
          count: data.count,
        },
      });
    } catch (error) {
      dispatch({
        type: FETCH_POKEMON_FAILURE,
        payload: error.message,
      });
    }
  };
};

import axios from "axios";

// actions/pokemonActions.js
export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";
export const SELECT_POKEMON = "SELECT_POKEMON";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const ADD_NEW_POKEMON = "ADD_NEW_POKEMON";
export const ADD_MORE_POKEMON_REQUEST = "ADD_POKEMON_REQUEST";
export const SEARCH_POKEMON = "SEARCH_POKEMON";

export const getNumberOfPages = (count) => Math.ceil(count / 20);

export const selectPokemon = (pokemon) => {
  return async dispatch => {
    dispatch({ type: SELECT_POKEMON, payload: pokemon });
  }

}

export const fetchPokemons = (api = null) => {
  const API = api ? api : `https://pokeapi.co/api/v2/pokemon?limit=3`;
  
  return async dispatch => {
    dispatch({ type: FETCH_POKEMON_REQUEST });

    try {
      const { data } = await axios.get(API);
      dispatch({
        type: FETCH_POKEMON_SUCCESS,
        payload: {
          list: data.results,
          count: data.count,
          next: data.next,
          previous: data.previous
        },
      });
      console.log('LoadData: ', data)
    } catch (error) {
      dispatch({
        type: FETCH_POKEMON_FAILURE,
        payload: error.message,
      });
    }
  };
};

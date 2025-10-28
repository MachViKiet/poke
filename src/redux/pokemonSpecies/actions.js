// import axios from "axios";

// // actions/pokemonActions.js
// export const FETCH_POKEMONSPECIES_REQUEST = "FETCH_POKEMONSPECIES_REQUEST";
// export const FETCH_POKEMONSPECIES_SUCCESS = "FETCH_POKEMONSPECIES_SUCCESS";
// export const FETCH_POKEMONSPECIES_FAILURE = "FETCH_POKEMONSPECIES_FAILURE";

// export const getNumberOfPages = (count) => Math.ceil(count / 20);

// export const fetchPokemonSpecies = () => {
//   return async (dispatch) => {
//     dispatch({ type: FETCH_POKEMONSPECIES_REQUEST });

//     return axios.get(`https://pokeapi.co/api/v2/pokemon-species/`).then(({ data }) => {
//         return {
//             type: FETCH_POKEMONSPECIES_SUCCESS,
//             payload: {
//                 list: data.results
//             },
//         };
//     }).catch((err) => {
//         console.error(err);
//         return {
//             type: FETCH_POKEMONSPECIES_FAILURE,
//             payload: err,
//         };
//     });
//   };
// };


export const FETCH_POKEMONSPECIES_REQUEST = "FETCH_POKEMONSPECIES_REQUEST";
export const FETCH_POKEMONSPECIES_SUCCESS = "FETCH_POKEMONSPECIES_SUCCESS";
export const FETCH_POKEMONSPECIES_FAILURE = "FETCH_POKEMONSPECIES_FAILURE";
export const ADD_POKEMONSPECIES = "ADD_POKEMONSPECIES";

export const getNumberOfPages = (count) => Math.ceil(count / 20);

import axios from "axios";
// Thunk action creator to fetch pokemon details
// Parameter: pokemon - object with at least a 'name' property
export const fetchPokemonSpecies = (pokemon) => {
  return async (dispatch) => {

    dispatch({ type: FETCH_POKEMONSPECIES_REQUEST });

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`);
      const data = response.data;

      dispatch({
        type: FETCH_POKEMONSPECIES_SUCCESS,
        name: pokemon.name,
        payload: data,
      });
    } catch (err) {
      console.error("Lỗi khi tải thuoc tinh Pokemon:", err);
      dispatch({
        type: FETCH_POKEMONSPECIES_FAILURE,
        payload: err.message || "Lỗi không xác định khi tải dữ liệu",
      });
    }
  };
};

export const fetchPokemonSpecies_all = (pokemon_list) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_POKEMONSPECIES_REQUEST });
    for (const pokemon of pokemon_list) {
        try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`);
        const data = response.data;
            dispatch({
                type: ADD_POKEMONSPECIES,
                name: pokemon.name,
                payload: data,
            });
            // console.log('Fetched species for:', pokemon.name, data);
        } catch (err) {
            console.error("Lỗi khi tải chi tiết Pokemon:", err);
            dispatch({
                type: FETCH_POKEMONSPECIES_FAILURE,
                payload: err.message || "Lỗi không xác định khi tải dữ liệu",
            });
            return;
        }
    };
    dispatch({
        type: FETCH_POKEMONSPECIES_SUCCESS,
    });
  };
};
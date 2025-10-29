import axios from "axios";

// actions/pokemonActions.js
export const FETCH_POKEMONDETAILS_REQUEST = "FETCH_POKEMONDETAILS_REQUEST";
export const FETCH_POKEMONDETAILS_SUCCESS = "FETCH_POKEMONDETAILS_SUCCESS";
export const FETCH_POKEMONDETAILS_FAILURE = "FETCH_POKEMONDETAILS_FAILURE";
export const ADD_POKEMONDETAILS = "ADD_POKEMONDETAILS";

export const getNumberOfPages = (count) => Math.ceil(count / 20);

// Thunk action creator to fetch pokemon details
// Parameter: pokemon - object with at least a 'name' property
export const fetchPokemonDetails = (pokemon) => {
  return async (dispatch) => {

    dispatch({ type: FETCH_POKEMONDETAILS_REQUEST });

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      const data = response.data;

      dispatch({
        type: ADD_POKEMONDETAILS,
        name: pokemon.name,
        payload: data,
      });

      dispatch({
        type: FETCH_POKEMONDETAILS_SUCCESS,
      });
    } catch (err) {
      console.error("Lỗi khi tải chi tiết Pokemon:", err);
      dispatch({
        type: FETCH_POKEMONDETAILS_FAILURE,
        payload: err.message || "Lỗi không xác định khi tải dữ liệu",
      });
    }
  };
};

export const fetchPokemonDetails_all = (pokemon_list) => {
  return async (dispatch) => {
    console.log('🔍 fetchPokemonDetails_all called with:', pokemon_list);
    dispatch({ type: FETCH_POKEMONDETAILS_REQUEST });
    for (const pokemon of pokemon_list) {
        try {
        console.log('📡 Fetching details for:', pokemon.name);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = response.data;
            dispatch({
                type: ADD_POKEMONDETAILS,
                name: pokemon.name,
                payload: data,
            });
        } catch (err) {
            console.error("Lỗi khi tải chi tiết Pokemon:", err);
            dispatch({
                type: FETCH_POKEMONDETAILS_FAILURE,
                payload: err.message || "Lỗi không xác định khi tải dữ liệu",
            });
            return;
        }
    };
    dispatch({
        type: FETCH_POKEMONDETAILS_SUCCESS,
    });
  };
};
// actions/pokemonActions.js
export const POKEMONFAVORITES_REQUEST = "POKEMONFAVORITES_REQUEST";
export const POKEMONFAVORITES_FAILURE = "POKEMONDETAILS_FAILURE";
export const POKEMONFAVORITES_SUCCESS = "POKEMONDETAILS_SUCCESS";

export const ADD_POKEMONFAVORITES = "ADD_POKEMONFAVORITES";

export const getNumberOfPages = (count) => Math.ceil(count / 20);

// Thunk action creator to fetch pokemon details
// Parameter: pokemon - object with at least a 'name' property
export const addPokemonFavorite = (pokemon) => {
  return async (dispatch) => {

    dispatch({ type: POKEMONFAVORITES_REQUEST });

    try {
      dispatch({
        type: ADD_POKEMONFAVORITES,
        name: pokemon.name,
        payload: pokemon,
      });
      dispatch({
        type: POKEMONFAVORITES_SUCCESS,
      });
    } catch (err) {
      console.error("Lỗi khi tải chi tiết Pokemon:", err);
      dispatch({
        type:POKEMONFAVORITES_FAILURE,
        payload: err.message || "Lỗi không xác định khi tải dữ liệu",
      });
    }
  };
};
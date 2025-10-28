import { POKEMONFAVORITES_REQUEST, POKEMONFAVORITES_FAILURE, POKEMONFAVORITES_SUCCESS, ADD_POKEMONFAVORITES } from "./actions";

const initialState = {
  data: [],
  loading: false,
  success: false,
  error: null
};

const pokemonFavoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEMONFAVORITES_REQUEST:
      return {
        ...state, 
        loading: true,
        success: false,
        error: null
      };
    case POKEMONFAVORITES_FAILURE:
      return {
        ...state, 
        loading: false,
        success: false,
        error: action.payload
      };
    case POKEMONFAVORITES_SUCCESS:
      return {
        ...state, 
        loading: false,
        success: true,
        error: null
      };
    case ADD_POKEMONFAVORITES:
      return {
        ...state, 
        data: [...state.data, action.payload ],
      };
    
    default:
      return state;
  }
};

export default pokemonFavoritesReducer;

import { FETCH_POKEMONSPECIES_SUCCESS, FETCH_POKEMONSPECIES_REQUEST, FETCH_POKEMONSPECIES_FAILURE, ADD_POKEMONSPECIES } from "./actions";

const initialState = {
  data: null,
  loading: false,
  success: false,
  error: null
};

const pokemonSpeciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONSPECIES_REQUEST:
      return {
        ...state, 
        loading: true,
        success: false,
        error: null
      };
    case FETCH_POKEMONSPECIES_SUCCESS:
      return {
        ...state, 
        loading: false,
        success: true,
        error: null
      };
    case ADD_POKEMONSPECIES:
      return {
        ...state, 
        loading: true,
        data:  { ...state.data, [action.name]: action.payload },
        success: true,
        error: null
      };
    case FETCH_POKEMONSPECIES_FAILURE:
        return {
            ...state, 
            loading: false,
            data: null,
            success: false,
            error: action.payload
        };    
    default:
      return state;
  }
};

export default pokemonSpeciesReducer;

import { ADD_NEW_POKEMON, ADD_MORE_POKEMON_REQUEST, FETCH_POKEMON_FAILURE, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, POKEMON_SUCCESS, SELECT_POKEMON } from "./actions";

const initialState = {
  data: null,
  loading: false,
  success: false,
  error: null,
  selected: null
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {
        ...state, 
        loading: true,
        data: null,
        success: false,
        error: null
      };
    case ADD_MORE_POKEMON_REQUEST:
      return {
        ...state, 
        loading: true,
        success: false,
        error: null
      };
    case ADD_NEW_POKEMON:
      return {
        ...state, 
        data: [ ...state.data, ...action.payload ],
      };
    case POKEMON_SUCCESS:
      return {
        ...state, 
        loading: false,
        success: true,
        error: null
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state, 
        loading: false,
        data: action.payload,
        success: true,
        error: null
      };
    case FETCH_POKEMON_FAILURE:
        return {
            ...state, 
            loading: false,
            data: null,
            success: false,
            error: action.payload
        };
      case SELECT_POKEMON:
        return {
            ...state, 
            selected: action.payload
        };
    default:
      return state;
  }
};

export default pokemonsReducer;

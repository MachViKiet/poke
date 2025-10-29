import { ADD_NEW_POKEMON, ADD_MORE_POKEMON_REQUEST, FETCH_POKEMON_FAILURE, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, POKEMON_SUCCESS, SELECT_POKEMON, SEARCH_POKEMON_REQUEST, SEARCH_POKEMON_SUCCESS, SEARCH_POKEMON_FAILURE } from "./actions";

const initialState = {
  data: null,
  loading: false,
  success: false,
  error: null,
  selected: null,
  searchResult: null,
  searchLoading: false,
  searchError: null
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
      case SEARCH_POKEMON_REQUEST:
        return {
            ...state,
            searchLoading: true,
            searchResult: null,
            searchError: null
        };
      case SEARCH_POKEMON_SUCCESS:
        return {
            ...state,
            searchLoading: false,
            searchResult: action.payload,
            searchError: null
        };
      case SEARCH_POKEMON_FAILURE:
        return {
            ...state,
            searchLoading: false,
            searchResult: null,
            searchError: action.payload
        };
    default:
      return state;
  }
};

export default pokemonsReducer;

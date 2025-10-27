import { LOAD_POKEMON_DETAILS, LOAD_POKEMON_LIST, LOAD_POKEMON_SPECIES} from "../actions/actions";

const initialState = {
  pokemons: null,
  details: null,
  species: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POKEMON_LIST:
      return {
        ...state, 
        pokemons: action.payload,
      };
    case LOAD_POKEMON_DETAILS:
      return {
        ...state, 
        details: {...state.details, [action.payload.name]: action.payload.data},
      };
    case LOAD_POKEMON_SPECIES:
      return {
        ...state, 
        species: {...state.details, [action.payload.name]: action.payload.data},
      };
    
    default:
      return state;
  }
};

export default reducers;

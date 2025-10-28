import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux'
import { thunk } from 'redux-thunk';
import pokemonsReducer from "./pokemons/reducers";
import pokemonSpeciesReducer from "./pokemonSpecies/reducers";
import pokemonDetailsReducer from "./pokemonDetails/reducers";

const rootReducer = combineReducers({
  pokemonsReducer,
  pokemonDetailsReducer,
  pokemonSpeciesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
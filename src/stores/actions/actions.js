import axios from "axios";

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export const LOAD_POKEMON_LIST = "LOAD_POKEMON_LIST";
export const LOAD_POKEMON_DETAILS = "LOAD_POKEMON_DETAILS";
export const LOAD_POKEMON_SPECIES = "LOAD_POKEMON_SPECIES";
export const TARGETED_POKEMON = "TARGETED_POKEMON";

export const getNumberOfPages = (count) => Math.ceil(count / 20);

export const load_pokemon_list = async (limit = 20) => {
  return axios.get(`pokemon/?limit=${limit}`).then(({ data }) => {
    const numberOfPages = getNumberOfPages(data.count);
    return {
      type: LOAD_POKEMON_LIST,
      payload: {
        list: data.results,
        numberOfPages
      },
    };
  }).catch((err) => {
      console.error(err);
      return {
        type: LOAD_POKEMON_LIST,
        payload: null,
    };
  });
};

export const load_pokemon_details = async (name = null) => {
  if(name === null) {
    return {
        type: LOAD_POKEMON_DETAILS,
        payload: null,
    }; 
  }
  return axios.get(`pokemon/${name}`).then(({ data }) => {
    return {
      type: LOAD_POKEMON_DETAILS,
      payload: {
        data: data,
        name: name
      },
    };
  }).catch((err) => {
      console.error(err);
      return {
        type: LOAD_POKEMON_DETAILS,
        payload: null,
    };
  });
};

export const load_pokemon_species = async (name = null) => {
  if(name === null) {
    return {
        type: LOAD_POKEMON_SPECIES,
        payload: null,
    }; 
  }
  return axios.get(`pokemon-species/${name}`).then(({ data }) => {
    return {
      type: LOAD_POKEMON_SPECIES,
      payload: {
        data: data,
        name: name
      },
    };
  }).catch((err) => {
      console.error(err);
      return {
        type: LOAD_POKEMON_SPECIES,
        payload: null,
    };
  });
};

export const tagetedPokemon = (pokemon) => {
  return {
    type: 'TARGETED_POKEMON',
    payload: pokemon
  };
}
import api from "./api"

export const getPokemonDetails = (nameOrId) => {
    return api.get(`/pokemon/${nameOrId}`)
}

export const getPokemonSpecie = (nameOrId) => {
    return api.get(`/pokemon-species/${nameOrId}`)
}

export const getPokemonEvolution = (id) => {
    return api.get(`/evolution-chain/${id}/`)
}

export const getRegions = () => {
    return api.get(`/region/`)
}

export const getTypes = () => {
    return api.get(`/type/`)
}
import { createSelector } from 'reselect'

export const pokemonSelector = state => state.pokemons

export const allPokemonSelector = createSelector(
    [pokemonSelector, state => state.pokemons.items ],
    (state) => state.pokemons.items
)


import pokeapi from '../apis';
import {
    POKEMON_SUCCESS,
    POKEMON_LOADING,
    POKEMON_SEARCH
} from '../constants';

export const pokemonFetch = () => {
    return (dispatch, getState) => {
        // dispatch(pokemonLoading(true));
        [...Array(151)].map( async (el, number) => {
            let {data} = await pokeapi.get(`/pokemon/${(number + 1)}`)
            const { id, name, types, base_experience, weight } = data;

            dispatch(pokemonSuccess({ 
                id, name, types, base_experience, weight 
            }));
        });
        // dispatch(pokemonLoading(false));
    } 
}

export const pokemonSearch = word => ({
    type: POKEMON_SEARCH,
    payload: word
})

export const pokemonSuccess = data => ({
    type: POKEMON_SUCCESS,
    payload: data
});

export const pokemonLoading = loading => ({
    type: POKEMON_LOADING,
    payload: loading
})

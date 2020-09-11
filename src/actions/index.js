import pokeapi from '../apis';
import {
    POKEMON_SUCCESS,
    POKEMON_LOADING,
    POKEMON_SEARCH
} from '../constants';

export const pokemonFetch = () => {
    debugger;
    return dispatch => {
        //dispatch(pokemonLoading());
        [...Array(151)].map( async number => {
            let {data} = await pokeapi.get(`/pokeapi/${number}`)
            dispatch(pokemonSuccess(data));
        });
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

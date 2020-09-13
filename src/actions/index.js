import pokeapi from '../apis';
import {
    POKEMON_FETCH_SUCCESS,
    POKEMON_SEARCH_SUCCESS
} from '../constants';

export const pokemonFetchRequest = () => {
    return (dispatch, getState) => {
        [...Array(151)].map( async (el, number) => {
            let {data} = await pokeapi.get(`/pokemon/${(number + 1)}`)
            const { id, name, types, base_experience, weight } = data;

            dispatch(pokemonFetchSuccess({ 
                id, name, types, base_experience, weight 
            }));
        });
    } 
}

export const pokemonFetchSuccess = data => ({
    type: POKEMON_FETCH_SUCCESS,
    payload: data
});

export const pokemonSearchRequest = word => {
    return (dispatch, getState) => {
        dispatch(pokemonSearchSuccess(word))
    }
}

export const pokemonSearchSuccess = data => {
    return {
        type: POKEMON_SEARCH_SUCCESS,
        payload: data
    }
}

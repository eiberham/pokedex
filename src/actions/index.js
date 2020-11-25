import {
    POKEMON_FETCH_SUCCESS,
    POKEMON_STATS_SUCCESS,
    POKEMON_SEARCH_SUCCESS
} from '../constants';

export const pokemonFetchRequest = () => {
    return (dispatch, getState) => {
        [...Array(151)].map( async (el, number) => {
            const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${(number + 1)}`);
            let data = await request.json();
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

export const pokemonStatsRequest = id => {
    return async (dispatch, getState) => {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await request.json();
        dispatch(pokemonStatsSuccess(data));
    }
}

export const pokemonStatsSuccess = data => ({
    type: POKEMON_STATS_SUCCESS,
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

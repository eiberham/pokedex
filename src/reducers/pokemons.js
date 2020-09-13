import {
    POKEMON_FETCH_SUCCESS,
    POKEMON_SEARCH_SUCCESS
} from '../constants';

const INITIAL_STATE = { items: [], search: ''};

const pokemons = (state = INITIAL_STATE, action) => {
    const { payload, type } = action;
    switch(type) {
        case POKEMON_FETCH_SUCCESS:
            return {
                ...state,
                items: [
                    ...new Set([
                        ...state.items, 
                        ...[{ ...payload}]
                    ])
                ]
            }
        case POKEMON_SEARCH_SUCCESS:
            return {
                ...state,
                search: payload
            }
        default:
            return state;
    }
};

export default pokemons;
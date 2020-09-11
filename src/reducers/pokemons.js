import {
    POKEMON_SUCCESS,
    POKEMON_LOADING
} from '../constants';

const INITIAL_STATE = []

const pokemons = (state = INITIAL_STATE, action) => {
    const { payload, type } = action;
    switch(type) {
        case POKEMON_SUCCESS:
            return {
                ...state,
                ...payload
            }
        case POKEMON_LOADING:
            return {
                ...state,
                loading: payload
            }
        default:
            return state;
    }
};

export default pokemons;
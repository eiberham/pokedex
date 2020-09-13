import {
    POKEMON_SUCCESS,
    POKEMON_LOADING
} from '../constants';

const INITIAL_STATE = { items: [], loading: true, search: []};

const pokemons = (state = INITIAL_STATE, action) => {
    const { payload, type } = action;
    switch(type) {
        case POKEMON_SUCCESS:
            return {
                ...state,
                items: [...state.items, ...[{ ...payload}]]
            }
        case POKEMON_LOADING:
            return {
                ...state,
                ...{loading: payload}
            }
        default:
            return state;
    }
};

export default pokemons;
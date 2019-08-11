import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import PokeImage from '../components/PokeImage'

let pokemon;

describe('PokeImage', () => {

    test('renders image', () => {
        pokemon = {
            "name": "bulbasur",
            "sprites": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            }
        };
        const { container } = render(
            <PokeImage pokemon={pokemon} handleClick={() => {} }/>
        );
        expect(container.getElementsByTagName('img')).toHaveLength(1)
    })

})

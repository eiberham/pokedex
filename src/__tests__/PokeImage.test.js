import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import PokeImage from '../components/PokeImage'

let pokemon = {
    "name": "bulbasur",
    "sprites": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    }
};

describe('PokeImage', () => {

    test('renders image', () => {
        const { container } = render(
            <PokeImage pokemon={pokemon} handleClick={() => {} }/>
        );
        expect(container.getElementsByTagName('img'))
            .toHaveLength(1)
    })

    test('click event works', () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(
            <PokeImage
                pokemon={ pokemon }
                handleClick={ handleClick }
            />
        );

        fireEvent.click(getByTestId('image'));
        expect(handleClick).toHaveBeenCalled()
    })

})

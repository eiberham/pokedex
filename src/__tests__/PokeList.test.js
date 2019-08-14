import React from 'react';
import { render, fireEvent, waitForElement, act } from '@testing-library/react';
import PokeList from '../components/PokeList';
import { Link, Route, Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('PokeList', () => {

    function renderWithRouter(
        ui,
        {
            route = '/',
            history = createMemoryHistory({ initialEntries: [route] }),
        } = {}
    ) {
        return {
            ...render(<Router history={history}>{ui}</Router>),
            // adding `history` to the returned utilities to allow us
            // to reference it in our tests (just try to avoid using
            // this to test implementation details).
            history,
        }
    }


    test('Renders a list of pokemons', async (done) => {
        // Arrange
        const pokemon1 = {"sprites": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            }
        };

        const pokemon2 = {"sprites": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            }
        };

        const props = { pokemons : [ pokemon1 , pokemon2]};

        // Act

        const { container, getByTestId, debug } = renderWithRouter(<PokeList { ...props } />);
        const figures = await waitForElement(
            () => getByTestId('image')
        );

        //debug();

        //const figure = await waitForElement(() => container.getElementsByTagName('figure'));

        // Assert
        expect(figures).toHaveLength(100)
    })
})
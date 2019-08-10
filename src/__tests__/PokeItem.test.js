import React from "react";
import { shallow } from "enzyme";
import PokeItem from "../components/PokeItem";

describe('<PokeItem />', () => {
    const pokemonMockObject = {
        name: "Pikachu",
        sprites: {
            front_default: "http://lorempixel.com/400/200"
        }
    };

    it('should render', () => {
        shallow(<PokeItem pokemon={pokemonMockObject} id="1" handleClick={ () => {} } />)
    });

    it('should show the <PokeImage /> component when loaded', () => {
        const wrapper = shallow(<PokeItem pokemon={pokemonMockObject} id="1" handleClick={ () => {} } />);
        const pokeItem = wrapper.find('PokeImage');
        expect(pokeItem.length).toBe(1);
    })
});
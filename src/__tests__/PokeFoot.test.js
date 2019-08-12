import PokeFoot from "../components/PokeFoot";
import React from "react";
import { render } from '@testing-library/react';

describe('PokeFoot', () => {

    test('displays text', () => {
        const { getByText } = render(<PokeFoot />);
        expect(getByText('(Hooks Practice) Abraham @2019')).toBeDefined()
    })

});


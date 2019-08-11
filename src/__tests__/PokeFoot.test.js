import PokeFoot from "../components/PokeFoot";
import React from "react";
import { render } from '@testing-library/react';


test('should display copyright', () => {
    const { getByText } = render(<PokeFoot copyright="Hooks Practice @2019" />);
    getByText('Hooks Practice @2019')
})

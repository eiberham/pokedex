import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {

    test('fires the handleSearch callback', () => {
        const handleSearch = jest.fn();
        const { getByTestId } = render (<SearchBar handleSearch={handleSearch} />);

        fireEvent.click(getByTestId('btn-submit'));
        expect(handleSearch).toHaveBeenCalled();
    })
});
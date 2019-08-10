import React from "react";
import { shallow } from 'enzyme';
import SearchBar from '../components/SearchBar';

describe('<SearchBar />', () => {
    it('should render', () => {
        shallow(<SearchBar/>)
    });
});
import React from "react";
import { shallow } from "enzyme";
import PokeList from "../components/PokeList";

describe('<PokeList />', () => {
    it('should render', () => {
        shallow(<PokeList/>)
    })
});
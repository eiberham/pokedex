import React from "react";
import { shallow } from "enzyme";
import PokeDetail from "../components/PokeDetail";

describe('<PokeDetail />', () => {
    it('should render', () => {
        shallow(<PokeDetail/>)
    })
});
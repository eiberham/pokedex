import React from "react";
import { shallow } from "enzyme";
import PokeDetail from "../components/PokeDetail";

describe('<PokeStats />', () => {
    it('should render', () => {
        shallow(<PokeDetail/>)
    })
});
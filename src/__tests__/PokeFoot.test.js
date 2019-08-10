import React from "react";
import { shallow } from "enzyme";
import PokeFoot from "../components/PokeFoot";

describe('<PokeFoot />', () => {
    it('should render', () => {
        shallow(<PokeFoot/>)
    })
});
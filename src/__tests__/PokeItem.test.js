import React from "react";
import { shallow } from "enzyme";
import PokeItem from "../components/PokeItem";

describe('<PokeItem />', () => {
    it('should render', () => {
        shallow(<PokeItem />)
    })
});
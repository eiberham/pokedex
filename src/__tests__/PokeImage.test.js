import React from "react";
import { shallow } from "enzyme";
import PokeImage from "../components/PokeImage";

describe('<PokeImage />', () => {
    it('should render', () => {
        shallow(<PokeImage />)
    });
});
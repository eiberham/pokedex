import React from 'react';
import styled from '@emotion/styled';
import { ImSpinner4 } from 'react-icons/im';

const Div = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Loader = () => {
    return (
        <Div>
            <ImSpinner4 size={80} color="green" />
        </Div>
    )
};

export default Loader;
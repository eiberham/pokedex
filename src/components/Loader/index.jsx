import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { ImSpinner4 } from 'react-icons/im';

const spin = keyframes`
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
`

const Div = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Loader = () => {
    return (
        <Div css={css`animation: ${spin} .8s linear infinite;`}>
            <ImSpinner4 size={80} color="green" />
        </Div>
    )
};

export default Loader;
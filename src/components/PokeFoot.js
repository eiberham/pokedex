import React from "react";
import styled from '@emotion/styled';

const Footer = styled.footer `
    font-family: 'Lacquer', sans-serif;
    width: 40vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    color: white;
    background: black;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
`;

const PokeFoot = () => {
    return (
        <Footer>
            <span data-testid="footer-text">(Hooks Practice) Abraham @2019</span>
        </Footer>
    )
};

export default PokeFoot;
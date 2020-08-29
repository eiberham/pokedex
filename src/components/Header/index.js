import React from 'react';
import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';

const Header = styled.div `
    position: relative;
    top: 0;
    width: 100%;
    background: red;
    height: 350px;
    clip-path: polygon(50% 0%, 100% 0, 100% 26%, 100% 64%, 65% 64%, 38% 100%, 0 100%, 0% 43%, 0 0);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input `
    float: left;
    padding: 10px;
    width: 80vw;
    max-width: 600px;
    height: 2.2rem;
    border: none;
    &:focus {
        border: none;
    }
`;

const Button = styled.button `
    width: 10vw;
    height: 2.2rem;
    border: none;
`;

const Index = props => {
    return (
        <Header>
            <img src="images/pokemon.svg" alt="logo" />
            <form onSubmit={() => {}}>
                <Input type="text" placeholder="which pokemon would you like to look up?" />
                <Button type="submit"><FaSearch /></Button>
            </form>
        </Header>
    )
};

export default Index;
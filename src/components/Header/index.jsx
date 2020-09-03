import React from 'react';
import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';
import logo from '../../logo.svg';

const Header = styled.div `
    position: relative;
    top: 0;
    width: 100%;
    background: red;
    height: 350px;
    clip-path: polygon(50% 0%, 100% 0, 100% 26%, 100% 64%, 65% 64%, 38% 100%, 0 100%, 0% 43%, 0 0);
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem;
`;

const Input = styled.input `
    margin: 1.2rem 0;
    float: left;
    padding: 10px;
    width: 70vw;
    max-width: 600px;
    height: 2.2rem;
    border: none;
    &:focus {
        border: none;
    }
    @media (max-width: 450px) {
        width: 60vw;
    }
`;

const Button = styled.button `
    margin: 1.2rem 0;
    width: 10vw;
    height: 2.2rem;
    border: none;
`;

const Index = props => {
    return (
        <Header>
            <img src={logo} alt="logo" />
            <form onSubmit={() => {}}>
                <Input type="text" placeholder="who are you looking for?" />
                <Button type="submit"><FaSearch /></Button>
            </form>
        </Header>
    )
};

export default Index;
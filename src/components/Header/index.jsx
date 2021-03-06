import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import logo from '../../logo.svg';
import { pokemonSearchRequest } from '../../actions';

const Header = styled.div `
    position: relative;
    top: 0;
    width: 100%;
    background: red;
    height: 350px;
    clip-path: polygon(50% 0%, 100% 0, 100% 79%, 71% 90%, 41% 75%, 25% 88%, 0 92%, 0% 43%, 0 0);
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem;
    @media (max-width: 411px) {
        clip-path: none;
        height: 250px;
    }
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
        outline: none;
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
    const dispatch = useDispatch();

    const timeout = useRef();

    const debounce = (fn, delay) => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(fn, delay);
    }

    const onChange = (e) => {
        e.persist();
        const word = e.target.value;
        debounce(() => 
            dispatch(pokemonSearchRequest(word))
        , 500);
    }

    return (
        <Header>
            <img src={logo} alt="logo" />
            <form>
                <Input 
                    type="text" 
                    placeholder="who are you looking for?" 
                    onChange={onChange}
                />
            </form>
            {props.children}
        </Header>
    )
};

export default Index;
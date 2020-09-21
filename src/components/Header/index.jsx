import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';
import logo from '../../logo.svg';
import { pokemonSearchRequest } from '../../actions';

const Header = styled.div `
    position: relative;
    top: 0;
    width: 100%;
    background: red;
    height: 350px;
    clip-path: polygon(50% 0%, 100% 0, 100% 79%, 71% 90%, 41% 75%, 25% 88%, 0 92%, 0% 43%, 0 0);
    z-index: 2;
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
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        // dispatch(pokemonSearchRequest(query));
    };

    const timeout = useRef();

    const debounce = (fn, delay) => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(fn, delay);
    }

    const onChange = (e) => {
        debounce(() => 
            dispatch(pokemonSearchRequest(e.target.value))
        , 500);
    }

    return (
        <Header>
            <img src={logo} alt="logo" />
            <form onSubmit={onFormSubmit}>
                <Input 
                    type="text" 
                    placeholder="who are you looking for?" 
                    onChange={onChange}
                />
                <Button type="submit"><FaSearch /></Button>
            </form>
            {props.children}
        </Header>
    )
};

export default Index;
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import pokeapi from "../apis";
import styled from '@emotion/styled';
import {useSpring, animated} from 'react-spring';
import PokeStats from './PokeStats';

const Section = styled(animated.section) `
    margin: 0 auto;
    width: 408px;
    height: 385px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const PokeDetail = ({match}) => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const [pokemon, setPokemon] = useState( {});

    /* useEffect(() => {
        const fetchPokemon = async() => {
            let {data} = await pokeapi.get(`/pokemon/${match.params.name}`);
            setPokemon(data)
        };

        fetchPokemon();

    }, [match.params.name]); */

    if(!pokemon) return <div>Loading ...</div>;
    return (
        <Section style={props}>
            <><PokeStats pokemon={pokemon} /></>
        </Section>
    )
};

export default withRouter(PokeDetail);
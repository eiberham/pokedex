import React, { useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import pokeapi from "../apis/pokeapi";
import styled from '@emotion/styled';
import {useSpring, animated} from 'react-spring';

const Section = styled(animated.section) `
    margin: 0 auto;
    width: 40vw;
    height: 60vh;
    background: black;
`;

const Div = styled.div `
    display: flex;
    flex-direction: column;
    justify-content:  space-around;
    align-items: center;
    font-family: 'Lacquer', sans-serif;
    img { transform: scale(1);}
    figure {
        display: flex;
        flex-direction:column;
        align-items: center;
        font-family: inherit;
        font-size: 2rem;
        color: white;
    }
    .details {
        font-size: 1.5rem;
        font-weight: 700;
        color: red;
        span { display: flex; justify-content: center;}
        h2 {
            font-size: 2rem;
            color: green;
        }
    }
`;

const PokeDetail = ({match}) => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const fetchPokemon = async() => {
            let {data} = await pokeapi.get(`/pokemon/${match.params.name}`);
            setPokemon(data)
        };

        fetchPokemon();

    }, [match.params.name]);

    const renderDetail = (pokemon) => {
        if(!pokemon.sprites) return <Div></Div>;
        return (
            <Div>
                <figure>
                    <img src={pokemon.sprites.front_shiny} alt={pokemon.name}/>
                    <figcaption>{pokemon.name}</figcaption>
                </figure>
                <section className="details">
                    {pokemon.types.map(element => (
                        <span>{element.type.name}</span>
                    ))}
                    <h2>Base Experience: {pokemon.base_experience}</h2>
                </section>
            </Div>
        );
    };

    if(!pokemon) return <div>Loading ...</div>;
    return (
        <Section style={props}>
            <>{renderDetail(pokemon)}</>
        </Section>
    )
};

export default withRouter(PokeDetail);
import React, {useState, useEffect} from "react";
import pokeapi from "../apis/pokeapi";
import styled from '@emotion/styled';

const Div = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-family: 'Lacquer', sans-serif;
    font-size: 0.8rem;
    color: white;
    text-transform: uppercase;
    &:hover {
        cursor: pointer;
    }
`;

const PokeItem = ({id, handleClick}) => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const {data} = await pokeapi.get(`/pokemon/${id}`);
                setPokemon(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPokemon()

    }, []);

    const renderThumbnail = (pokemon) => {
        if(!pokemon.sprites) return <Div></Div>;
        return (
            <Div>
                <figure>
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        onClick={ () => handleClick(pokemon.name)}
                    />
                    <figcaption>{pokemon.name}</figcaption>
                </figure>
            </Div>
        );
    };

    if(!pokemon) return <div>Loading ...</div>;
    return (
        <>
             {renderThumbnail(pokemon)}
        </>
    )
};

export default PokeItem;
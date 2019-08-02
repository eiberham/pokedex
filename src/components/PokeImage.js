import React from "react";
import PropTypes from "prop-types";
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

function PokeImage({pokemon, handleClick}){
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
    )
};

PokeImage.propTypes = {
    pokemon: PropTypes.object,
    handleClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default PokeImage;
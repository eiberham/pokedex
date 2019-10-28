import React from "react";
import PropTypes from "prop-types";
import styled from '@emotion/styled';

const Div = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    color: black;
    text-transform: uppercase;
    &:hover {
        cursor: pointer;
    }
    figure {
        margin: 0;
        img {
            width: 75px;
            height: 75px;
        }
    }
`;

function PokeImage({pokemon, handleClick}){
    if(!pokemon.sprites) return <Div></Div>;
    return (
        <Div>
            <figure>
                <img
                    data-testid="image"
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
    pokemon: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default PokeImage;
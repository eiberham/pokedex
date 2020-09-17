import React from "react";
import PropTypes from "prop-types";
import styled from '@emotion/styled';

const Div = styled.div `
    position: relative;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    &:hover {
        cursor: pointer;
    }
    figure {
        padding: 1rem;
        position: relative;
        margin: 0;
        img {
            position: absolute;
            right: -.5rem;
            top: -0.5rem;
            width: 125px;
            height: 110px;
            transition: all .3s ease;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
`;

const Types = styled.div `
    display: flex;
    justify-content: space-around;
    max-width: 50%;
`;

function Image({pokemon, handleClick}){
    const id = pokemon.id;
    if(!id) return null;

    return (
        <Div>
            <figure>
                <img
                    data-testid="image"
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3, "0")}.png`}
                    alt={pokemon.name}
                    onClick={ () => handleClick(pokemon.name)}
                    loading="lazy"
                />
                <figcaption>{pokemon.name}</figcaption>
            </figure>
            <Types>
                {pokemon.types.map(element => (
                    <div key={element.type.name} className={`type type--${element.type.name}`}>{element.type.name}</div>
                ))}
            </Types>
        </Div>
    )
};

Image.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string
    }).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Image;
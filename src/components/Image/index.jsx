import React from "react";
import PropTypes from "prop-types";
import styled from '@emotion/styled';

const Scene = styled.div `
    perspective: 600px;
`;

const Card = styled.div `
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
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

    .card__face {
        position: absolute;
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
    }

    .card__face--front {
        background: red;
    }
      
    .card__face--back {
        background: blue;
        transform: rotateY( 180deg );
    }

    .card.is-flipped {
        transform: rotateY(180deg);
    }
`;

function Image({pokemon, handleClick}){
    const id = pokemon.id;
    if(!id) return null;

    return (
        <Scene>
            <Card>
                <div className="card">
                    <div className="card card__face--front">
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
                    </div>
                    <div className="card card__face--back">back</div>
                </div>
            </Card>
        </Scene>
    )
};

Image.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string
    }).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Image;
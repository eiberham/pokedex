import React, { useRef, useCallback } from "react";
import PropTypes from "prop-types";
import styled from '@emotion/styled';

const Scene = styled.div `
    perspective: 600px;
`;

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

    .card {
        position: relative;
        transition: transform 1s;
        transform-style: preserve-3d;
        width: 100%;
        height: 100%;
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

function Image({pokemon}){
    const ref = useRef(null);
    const id = pokemon.id;
    if(!id) return null;

    function flip() {
        if(ref.current.classList.contains('is-flipped')) {
            ref.current.classList.remove('is-flipped')
        } else ref.current.classList.add('is-flipped')
    }

    return (
        <Div>
            <Scene>
                <div className="card" ref={ref} onClick={() => flip()}>
                    <div className="card__face card__face--front">
                        <figure>
                            <img
                                data-testid="image"
                                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3, "0")}.png`}
                                alt={pokemon.name}
                                onClick={() => flip()}
                                loading="lazy"
                            />
                            <figcaption>{pokemon.name}</figcaption>
                        </figure>
                    </div>
                    <div className="card__face card__face--back">back</div>
                </div>
            </Scene>
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
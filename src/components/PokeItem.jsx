import React, {useState, useEffect} from "react";
import styled from '@emotion/styled';
import PropTypes from "prop-types";
import pokeapi from "../apis/pokeapi";
import PokeImage from './PokeImage';
import LazyLoad from "react-lazyload";
import topograpy from '../../topography.svg'

const PokeItem = ({id, handleClick}) => {
    const [pokemon, setPokemon] = useState(null);

    const Div = styled.div `
        border-radius: 8px;
        margin: 1rem;
        min-width: 30%;
        min-height: 15%;
        background-color: ${props => props.color ? 'gray': 'orange'}
        box-shadow: -4px 33px 26px -27px orange;
        background-image: url('./images/topography.svg');
        @media (max-width: 1024px) {
            min-width: 90%;
        }
    `;


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

    if(!pokemon) return <div>Loading ...</div>;

    return (
        <Div className={`--${pokemon.types.shift().type.name}`}>
            <LazyLoad once height={140} overflow throttle={100}>
                <PokeImage pokemon={pokemon} handleClick={handleClick} key={pokemon.name}/>
            </LazyLoad>
        </Div>
    )
};

PokeItem.propTypes = {
    id: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default PokeItem;
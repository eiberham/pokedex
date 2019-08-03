import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import pokeapi from "../apis/pokeapi";
import PokeImage from './PokeImage';
import LazyLoad from "react-lazyload";

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

    if(!pokemon) return <div>Loading ...</div>;
    return (
        <>
            <LazyLoad once height={140} overflow throttle={100}>
                <PokeImage pokemon={pokemon} handleClick={handleClick} key={pokemon.name}/>
            </LazyLoad>
        </>
    )
};

PokeItem.propTypes = {
    id: PropTypes.string,
    handleClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default PokeItem;
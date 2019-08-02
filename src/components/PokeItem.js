import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import pokeapi from "../apis/pokeapi";
import PokeImage from './PokeImage';

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
             <PokeImage pokemon={pokemon} handleClick={handleClick}/>
        </>
    )
};

PokeItem.propTypes = {
    id: PropTypes.string,
    handleClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default PokeItem;
import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import queryString from 'query-string';
import { pokemonFetch } from '../../actions';

import Item from '../Item';
import Loader from '../Loader';

const List = ({ pokemons, loading, pokemonFetch }) => {
    const location = useLocation();
    const { search } = queryString.parse(location.search);

    console.log("#### LOADING: ", loading);

    useEffect(() => {
        // call action creator here
        console.log("pasa por el search");
        pokemonFetch()
    }, []);
    

    function handleClick (name) {
        console.log(name);
    };

    return (
        <>
            {loading && !pokemons.length ? (
                <Loader />
            ) : ( 
                <React.Fragment>
                    {pokemons.length > 0 && pokemons.map( (element, id) => (
                        <Item key={id.toString()} item={element} handleClick={handleClick} />
                    ))}
                </React.Fragment>
            )}
        </>
    )
};

List.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        types: PropTypes.arrayOf(PropTypes.shape({
            slot: PropTypes.number,
            type: PropTypes.shape({
                name: PropTypes.string
            })
        })),
        weight: PropTypes.number,
        base_experience: PropTypes.number
    })).isRequired
}

const mapStateToProps = state => ({
    pokemons: state.pokemons.items,
    loading: state.pokemons.loading
});

export default connect(mapStateToProps, { pokemonFetch })(List);
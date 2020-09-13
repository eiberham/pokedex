import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pokemonFetchRequest } from '../../actions';

import Item from '../Item';
import Loader from '../Loader';

const List = ({ items, search, pokemonFetchRequest }) => {

    useEffect(() => {
        pokemonFetchRequest()
        return () => {}
    }, []);

    function handleClick (name) {
        console.log(name);
    };

    return (
        <>
            {!items.length ? (
                <Loader />
            ) : ( 
                <React.Fragment>
                    {items.length > 0 && items.filter(item => item.name.includes(search)).map( (element, id) => (
                        <Item key={id.toString()} item={element} handleClick={handleClick} />
                    ))}
                </React.Fragment>
            )}
        </>
    )
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired,
    search: PropTypes.string,
    pokemonFetchRequest: PropTypes.func
}

const mapStateToProps = state => ({
    items: state.pokemons.items,
    search: state.pokemons.search
});

export default connect(mapStateToProps, { pokemonFetchRequest })(List);
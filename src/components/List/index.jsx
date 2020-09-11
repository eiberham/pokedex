import React, { lazy, Suspense, useEffect } from "react";
import PropTypes from 'prop-types';
import { withRouter, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import queryString from 'query-string';
import { pokemonFetch } from '../../actions';

const Item = lazy(() => import('../Item'));

const renderLoader = () => <p>Loading</p>;

const List = ({ pokemons, pokemonFetch }) => {
    const location = useLocation();
    const { search } = queryString.parse(location.search);

    useEffect(() => {
        // call action creator here
        console.log("pasa por el search");
        pokemonFetch()
    }, []);
    

    const handleClick = (name) => {
        
    };

    // if (!pokemons) return <></>;
    console.log(pokemons)
    return (
        <>
            {pokemons.length > 0 && pokemons.map( (element,id) => (
                <Suspense fallback={renderLoader()} key={id.toString()}>
                    <Item item={element} handleClick={handleClick}/>
                </Suspense>
            ))}
        </>
    )
};

List.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.shape).isRequired
}

const mapStateToProps = state => ({
    pokemons: state
});

export default connect(mapStateToProps, { pokemonFetch })(List);
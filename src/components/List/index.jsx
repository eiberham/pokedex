import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { pokemonFetchRequest } from '../../actions';

import Item from '../Item';
import Loader from '../Loader';

const List = () => {
    const dispatch = useDispatch();
    const { items, search } = useSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(pokemonFetchRequest())
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
                    {items.length > 0 && items.filter(item => 
                        item.name.includes(search.toLowerCase())).map( (element, id) => (
                            <Item key={id.toString()} item={element} handleClick={handleClick} />
                    ))}
                </React.Fragment>
            )}
        </>
    )
};

export default List;
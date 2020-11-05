import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { pokemonFetchRequest } from '../../actions';

import Item from '../Item';
import Loader from '../Loader';
import Detail from '../Detail';

const List = () => {
    const dispatch = useDispatch();
    const { items, search } = useSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(pokemonFetchRequest())
        return () => {}
    }, []);

    return (
        <>
            {!items.length ? (
                <Loader />
            ) : ( 
                <React.Fragment>
                    {items.length > 0 && items.filter(item => 
                        item.name.includes(search.toLowerCase()))
                            .sort(() => Math.random() - 0.5).map( (element, id) => (
                            <Item key={id.toString()} item={element} />
                    ))}
                </React.Fragment>
            )}
            <Detail />
        </>
    )
};

export default List;
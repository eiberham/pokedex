import React, { useEffect } from "react";
import styled from '@emotion/styled';
import PropTypes from "prop-types";
import Image from '../Image';
import LazyLoad from "react-lazyload";
import topograpy from '../../../topography.svg'

const Item = ({item, handleClick}) => {

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

    return (
        <Div className={`--${item.types.shift().type.name}`}>
            <LazyLoad once height={140} overflow throttle={100}>
                <Image pokemon={item} handleClick={handleClick} key={pokemon.name} />
            </LazyLoad>
        </Div>
    )
};

Item.propTypes = {
    item: PropTypes.shape.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default Item;
import React, { useEffect } from "react";
import styled from '@emotion/styled';
import PropTypes from "prop-types";
import Image from '../Image';
import LazyLoad from "react-lazyload";
import topography from '../../../topography.svg'

const Item = ({item, handleClick}) => {
    const Div = styled.div `
        border-radius: 8px;
        margin: 1rem;
        min-width: 30%;
        min-height: 15%;
        background-color: ${props => props.color ? 'gray': 'orange'}
        box-shadow: -4px 33px 26px -27px orange;
        background-image: url('${topography}');
        background-position: 0 0;
        background-size: 40%;
        transition: all .3s ease;
        box-shadow: -3px 0px 10px -1px black;
        @media (max-width: 1024px) {
            min-width: 90%;
        }
    `;

    if (!item) return null;

    const type = [...item.types].shift().type.name

    return (
        <Div className={`--${type}`}>
            <LazyLoad once height={140} overflow throttle={100}>
                <Image pokemon={item} handleClick={handleClick} key={item.name} />
            </LazyLoad>
        </Div>
    )
};

Item.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
    }).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Item;
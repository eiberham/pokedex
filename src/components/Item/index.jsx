import React, { useRef } from "react";
import styled from '@emotion/styled';
import PropTypes from "prop-types";
import Image from '../Image';
import LazyLoad from "react-lazyload";
import topography from '../../../topography.svg'

const Scene = styled.div `
    perspective: 1000px;
    min-width: 30%;
    min-height: 15%;
    width: 320px;
	height: 100px;
    margin: 1rem;

    @media (max-width: 1024px) {
        min-width: 90%;
    }

    .card {
        position: relative;
        transition: 0.6s;
        transform-style: preserve-3d;
        border-radius: 8px;
        min-width: 100px;
        min-height: 100px;
        transition: all .3s ease;

        .card__face--front, .card__face--back {
            backface-visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }
    
        .card__face--front {
            background-image: url('${topography}');
            background-position: 0 0;
            background-size: 40%;
            transform: rotateY(0deg);
            z-index: 2;
        }
          
        .card__face--back {
            transform: rotateY( -180deg );
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
    }

    .card.is-flipped {
        transform: rotateY(180deg);
    }
`;

const Item = ({item}) => {
    const ref = useRef(null);

    function flip() {
        ref.current.classList.toggle('is-flipped');
    }

    if (!item) return null;

    const type = [...item.types].shift().type.name

    return (
        <Scene>
            <div className={`card --${type}`} ref={ref} onClick={flip}>
                <div className="card__face--front">
                    <LazyLoad once height={140} overflow throttle={100}>
                        <Image pokemon={item} key={item.name} />
                    </LazyLoad>
                </div>
                <div className="card__face--back">
                    <div className={`type type--${type}`} />
                </div>
            </div>
        </Scene>
    )
};

Item.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
    }).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Item;
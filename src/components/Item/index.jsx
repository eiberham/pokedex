import React, { useRef } from "react";
import styled from '@emotion/styled';
import PropTypes from "prop-types";
import Image from '../Image';
import LazyLoad from "react-lazyload";
import topography from '../../../topography.svg'

const Scene = styled.div `
    background-color: transparent;
    perspective: 600px;
    min-width: 30%;
    min-height: 15%;
    margin: 1rem;

    @media (max-width: 1024px) {
        min-width: 90%;
    }

    .card {
        position: absolute;
        transition: transform 1s;
        transform-style: preserve-3d;
        border-radius: 8px;
        min-width: 100%;
        min-height: 100%;
        transition: all .3s ease;

        .card__face--front, .card__face--back {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            backface-visibility: hidden;
        }
    
        .card__face--front {
            background-image: url('${topography}');
            background-position: 0 0;
            background-size: 40%;
        }
          
        .card__face--back {
            background-color: blue;
            transform: rotateY( 180deg );
            z-index: 0;
        }
        
    }

    .card.is-flipped {
        transform: rotateY(180deg);

        .card__face--front {
            //transform: rotateY(180deg);
            z-index:0;
        }

        .card__face--back {
            transform: rotateY(360deg);
            background-color: blue;
            z-index:10;
        }
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
                <div className="card__face--back">back</div>
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
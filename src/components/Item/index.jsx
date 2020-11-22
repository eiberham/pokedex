import React, { useEffect, useRef, useState } from "react";
import styled from '@emotion/styled';
import PropTypes from "prop-types";
import Image from '../Image';
import LazyLoad from "react-lazyload";
import topography from '../../../topography.svg'

import colors  from '../../colors';

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
            background-size: 20%;
            transform: rotateY(0deg);
            z-index: 2;
        }
          
        .card__face--back {
            transform: rotateY( -180deg );
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .card__face__button {
            position: absolute;
            right: 2rem;
            padding: 0.8rem;
            border: none;
            border-radius: 2px;
            font-weight: bold;
            color: #fff;

            &--grass {
                background-color: ${colors.grass};
                filter: brightness(70%);
            }
            &--water {
                background-color: ${colors.water};
                filter: brightness(70%);
            }
            &--fire {
                background-color: ${colors.fire};
                filter: brightness(70%);
            }
            &--bug {
                background-color: ${colors.bug};
                filter: brightness(70%);
            }
            &--normal {
                background-color: ${colors.normal};
                filter: brightness(70%);
            }
            &--poison { 
                background-color: ${colors.poison};
                filter: brightness(70%);
            }
            &--electric { 
                background-color: ${colors.electric};
                filter: brightness(70%);
            }
            &--ground {
                background-color: ${colors.ground};
                filter: brightness(70%);
            }
            &--fairy {
                background-color: ${colors.fairy};
                filter: brightness(70%);
            }
            &--psychic {
                background-color: ${colors.psychic};
                filter: brightness(70%);
            }
            &--ice {
                background-color: ${colors.ice};
                filter: brightness(70%);
            }
            &--rock {
                background-color: ${colors.rock};
                filter: brightness(70%);     
            }
            &--fighting {
                background-color: ${colors.fighting};
                filter: brightness(70%);
            }
            &--dragon {
                background-color: ${colors.dragon};
                filter: brightness(70%);
            }
            &--ghost {
                background-color: ${colors.ghost};
                filter: brightness(70%);
            }
            &--flying {
                background-color: ${colors.flying};
                filter: brightness(70%);
            }
        }
        
    }

    .card.is-flipped {
        transform: rotateY(180deg);
    }
`;

const Item = ({item}) => {
    const ref = useRef(null);
    const [showStats, setShowStats] = useState(false);

    useEffect(() => {
        const detail = document.querySelector('.slider');
        detail.setAttribute('data-id', item.id);
        detail.classList.toggle('close');
    }, [showStats])

    function flip() {
        ref.current.classList.toggle('is-flipped');
    }

    function getStats(e) {
        e.stopPropagation();
        setShowStats(!showStats);
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
                    <button 
                        type="button" 
                        className={`card__face__button card__face__button--${type}`} 
                        onClick={getStats}
                    >
                        Stats
                    </button>
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
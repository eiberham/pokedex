import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import close from '../../../close.svg';

import { pokemonStatsRequest } from '../../actions';

const Stats = styled.div `
    position: absolute;
    width: 100%;
    height: 45%;
    top: 0;
    overflow: hidden;
    padding: 4rem;
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h16v2h-6v6h6v8H8v-6H2v6H0V0zm4 4h2v2H4V4zm8 8h2v2h-2v-2zm-8 0h2v2H4v-2zm8-8h2v2h-2V4z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-position: center;
    background-size: contain;
    color: #FFF;
    transition: all 1s;

    &.hide { display: none; }

    .wrapper {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .pokemon {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .name { 
            text-transform: uppercase; 
            text-align: center;
        }

    }

    .summary {
        display: flex;
        flex-direction: column;
        text-transform: uppercase;
        font-weight: bolder;
        color: #fff;
        line-height: 1.2;

        .stars {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }
`;

const Close = styled.button `
    position: absolute;
    right: 2px;
    top: 0;
    background: url("${close}") no-repeat top center;
    background-size: contain;
    background-color: white; 
    width: 20px;
    height: 20px;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
    }
`;

const Star = styled.div `
    display: inline-block;
    width: 16px;
    height: 16px;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    background-color: yellow;
`

export default function() {
    const [id, setId] = useState("");
    const dispatch = useDispatch();
    const ref = useRef(null);
    const stats = useSelector(state => state.pokemons.stats);
    let type = null;

    useEffect(() => {
        if (!ref.current.classList.contains('hide'))
            ref.current.classList.add('hide')
        const stats = document.querySelector('.stats');
        const observer = new MutationObserver(nodes => {
            for(const mutation of nodes) {
                if (mutation.attributeName === 'data-id'){
                    const id = stats.getAttribute('data-id');
                    setId(id);
                }
            }
        })
        observer.observe(stats, { attributes: true });
        return () => observer.disconnect();
    }, [])

    useEffect(() => {
        if (id !== "") dispatch(pokemonStatsRequest(id))
    }, [id])

    function toggleClose(){
        ref.current.classList.add('hide')
    }

    if (!stats) return null;
    
    for (var prop in stats.types) {
        type = stats.types[prop].type.name;
        break;
    }

    return (
        <>
            <Stats 
                className={`stats --${type}`}
                ref={ref} 
                data-id={id}
            >
                <Close onClick={toggleClose} />
                <div className="wrapper">
                    {stats && (
                        <>
                            <div className="pokemon">
                                <h1 className="name">{stats.name}</h1>
                                <img 
                                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3, "0")}.png`} 
                                    alt="image" 
                                    width="180"
                                    height="180"
                                />
                            </div>
                            <div className="summary">
                                <span>Id: #{stats.id}</span>
                                <span>Base Experience: {stats.base_experience}</span>
                                <span>Weight: {stats.weight * 0.1}kg</span>
                                <span>Height: {stats.height * 0.1}m</span>
                                {stats.stats && stats.stats.map(stat => {
                                    const baseline = stat.base_stat * 100 / 255;
                                    const stars = Math.floor(baseline * 0.1);
                                    return (
                                        <span key={`stat-${stat.stat.name}`} className="stars">
                                            {stat.stat.name}: {Array.from(Array(stars).keys()).map(_ => (
                                                <Star />
                                            ))}
                                        </span>
                                    )
                                })}
                            </div>
                        </>
                    )}
                </div>
            </Stats>
        </>
    );
}
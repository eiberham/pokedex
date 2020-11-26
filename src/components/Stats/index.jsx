import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { pokemonStatsRequest } from '../../actions';

const Slider = styled.div `
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

    &.close {
        top: 100%;
        height: 0;
    }

    .hide { display: none; }

    .name { 
        text-transform: uppercase; 
        text-align: center;
    }

    .wrapper {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .stats {
        display: flex;
        flex-direction: column;
        text-transform: uppercase;
        font-weight: bolder;
        color: #fff;
        line-height: 1.2;
    }
`;

const Close = styled.button `
    position: absolute;
    right: 2px;
    top: 0;
    background-image: url(https://i.e-planning.net/esb/4/1/3fb8/ea7d639f35554c9b/close.png);
    background-position: center;
    background-size: cover;
    width: 20px;
    height: 20px;
    border-radius: 10px;
`;

export default function() {
    const [id, setId] = useState(1);
    const dispatch = useDispatch();
    const ref = useRef(null);
    const { stats } = useSelector(state => state.pokemons);
    let type = null;

    useEffect(() => {
        debugger;
        const detail = document.querySelector('.slider');
        const observer = new MutationObserver(() => {
            const id = detail.getAttribute('data-id');
            setId(parseInt(id));
        })
        observer.observe(detail, { attributes: true });
        return () => observer.disconnect();
    }, [id])

    useEffect(() => {
        dispatch(pokemonStatsRequest(id))
    }, [id])

    function toggleClose(){
        ref.current.classList.toggle('close')
        //ref.current.classList.toggle('hide')
    }

    if (!stats) return null;
    
    for (var prop in stats.types) {
        type = stats.types[prop].type.name;
        break;
    }

    return (
        <>
            <Slider 
                className={`slider close --${type}`}
                ref={ref} 
                data-id="" 
            >
                <Close onClick={toggleClose} />
                <div className="wrapper">
                    {stats && (
                        <>
                            <div className="info">
                                <h1 className="name">{stats.name}</h1>
                                <img 
                                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3, "0")}.png`} 
                                    alt="image" 
                                    width="180"
                                    height="180"
                                />
                            </div>
                            <div className="stats">
                                <span>Id: {stats.id}</span>
                                <span>Base Experience: {stats.base_experience}</span>
                                <span>Weight: {stats.weight}</span>
                                <span>Height: {stats.height}</span>
                                {stats.stats && stats.stats.map(stat => (
                                    <span key={Math.random() * 100}>{stat.stat.name}: {stat.base_stat}</span>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </Slider>
        </>
    );
}
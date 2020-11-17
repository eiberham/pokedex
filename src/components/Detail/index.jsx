import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

const Slider = styled.div `
    position: absolute;
    width: 100%;
    height: 45%;
    top: 0;
    overflow: hidden;
    background-color: #1F2327; color: #FFF;
    transition: all 1s;

    &.close {
        top: 100%;
        height: 0;
    }

    .name {
        text-transform: uppercase;
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

const Detail = props => {
    const [id, setId] = useState(1);
    const ref = useRef(null);
    const { items } = useSelector(state => state.pokemons);

    useEffect(() => {
        const detail = document.querySelector('.slider');
        const observer = new MutationObserver(() => {
            const id = detail.getAttribute('data-id');
            setId(
                parseInt(id)
            );
        })
        observer.observe(detail, { attributes: true });
        return () => observer.disconnect();
    }, [id])

    function toggleClose(){
        ref.current.classList.toggle('close')
    }
    
    const pokemon = items.some(item => item.id === id) 
        ? items.find(item => item.id === id) 
        : null;

    return (
        <>
            <Slider 
                className="slider close" 
                ref={ref} 
                data-id="" 
                onBlur={ref.current && ref.current.classList.toggle('close')}
            >
                <Close onClick={toggleClose} />
                <div>
                    {pokemon && (
                        <>
                            <h1 className="name">{pokemon.name}</h1>
                            <img 
                                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3, "0")}.png`} 
                                alt="image" 
                                width="180"
                                height="180"
                            />
                        </>
                    )}
                </div>
            </Slider>
        </>
    );
}

export default Detail;
import React from "react";
import styled from "@emotion/styled";

const Div = styled.div `
    display: flex;
    flex-direction: column;
    justify-content:  space-around;
    align-items: center;
    font-family: 'Lacquer', sans-serif;
    img { transform: scale(1);}
    figure {
        display: flex;
        flex-direction:column;
        align-items: center;
        font-family: inherit;
        font-size: 2rem;
        color: white;
    }
    .details {
        font-size: 1.5rem;
        font-weight: 700;
        color: red;
        span { display: flex; justify-content: center;}
        h2 {
            font-size: 2rem;
            color: green;
        }
    }
`;

const PokeStats = ({pokemon}) => {
    if(!pokemon.sprites) return <Div></Div>;
    return (
        <Div>
            <figure>
                <img src={pokemon.sprites.front_shiny} alt={pokemon.name}/>
                <figcaption>{pokemon.name}</figcaption>
            </figure>
            <section className="details">
                {pokemon.types.map(element => (
                    <span>{element.type.name}</span>
                ))}
                <h2>Base Experience: {pokemon.base_experience}</h2>
            </section>
        </Div>
    )
};

export default PokeStats;
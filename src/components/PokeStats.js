import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Div = styled.div `
    display: flex;
    flex-direction: column;
    justify-content:  center;
    align-items: center;
    font-family: 'Lacquer', sans-serif;
    img { transform: scale(1);}
    figure {
        margin: 0;
        display: flex;
        flex-direction:column;
        align-items: center;
        font-family: inherit;
        font-size: 2rem;
        color: black;
    }
    .details {
        
        font-size: 1.2rem;
        font-weight: 700;
        color: red;
        span { display: flex; justify-content: center;}
        h5 {
            font-size: 1.2rem;
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
                <h5>Base Experience: {pokemon.base_experience}</h5>
            </section>
        </Div>
    )
};

PokeStats.propTypes = {
    children: PropTypes.node.isRequired
};

export default PokeStats;
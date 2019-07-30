import React, { useState } from "react";
import styled from '@emotion/styled';

const Section = styled.section `
    margin: 5rem auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #302D2F;
    width: 40vw;
    height: 15vh;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
`;

const SearchBar = (props) => {
    const [query, setQuery] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.handleSearch(query);
    };

    return (
        <Section>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="Search a pokémon"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </Section>
    )
}

export default SearchBar;
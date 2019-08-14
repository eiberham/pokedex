import React, { lazy, Suspense } from "react";
import { withRouter } from "react-router-dom";
import styled from '@emotion/styled';
import {useSpring, animated} from 'react-spring';

const PokeItem = lazy(() => import('./PokeItem'));

const renderLoader = () => <p>Loading</p>;

const Section = styled(animated.section) `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background-color: black;
    width: 40vw;
    height: 60vh;
    margin: 0 auto;
    overflow-y: scroll;
`;

const PokeList = ({history}) => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    const handleClick = (name) => {
        history.push({
            pathname: `/pokemon/${name}`
        })
    };

    return (
        <Section style={props} data-testid="list-items">
            {[...Array(151)].map( (e,id) => (
                <Suspense fallback={renderLoader()}>
                    <PokeItem id={(id + 1).toString()} key={id.toString()} handleClick={handleClick}/>
                </Suspense>
            ))}
        </Section>
    )
};

export default withRouter(PokeList);
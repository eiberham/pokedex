import React, { lazy, Suspense } from "react";
import { withRouter } from "react-router-dom";
import styled from '@emotion/styled';
import {useSpring, animated} from 'react-spring';

const PokeItem = lazy(() => import('../PokeItem'));

const renderLoader = () => <p>Loading</p>;

const Section = styled(animated.section) `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background-color: white;
    padding-top: 0px;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    border: 6px solid black;
    overflow-y: scroll;
`;

const Header = styled.div `
    position: relative;
    top: 0;
    width: 100%;
    background: red;
    height: 250px;
    clip-path: polygon(50% 0%, 100% 0, 100% 26%, 100% 64%, 65% 64%, 38% 100%, 0 100%, 0% 43%, 0 0);
    z-index: 2;
    overflow: hidden;
`;

const Wrap = styled.span `
    position: relative;
    top: 0;
    margin: 0 0 3rem 0;
    width: 100%;
    background: black;
    height: 256px;
    clip-path: polygon(50% 0%, 100% 0, 100% 26%, 100% 64%, 65% 64%, 38% 100%, 0 100%, 0% 43%, 0 0);
    border-bottom: 6px solid black;
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
            <Wrap>
                <Header />
            </Wrap>
            {[...Array(151)].map( (e,id) => (
                <Suspense fallback={renderLoader()}>
                    <PokeItem id={(id + 1).toString()} key={id.toString()} handleClick={handleClick}/>
                </Suspense>
            ))}
        </Section>
    )
};

export default withRouter(PokeList);
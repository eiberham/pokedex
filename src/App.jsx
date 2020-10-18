import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import {useSpring, animated} from 'react-spring';
import Header from './components/Header';
import List from './components/List';
import './app.scss';

const Section = styled(animated.section) `
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    background-color: white;
    padding-top: 0px;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    border: 6px solid black;
    overflow-y: scroll;
`;

const Wrap = styled.span `
    position: relative;
    top: 0;
    margin: 0 0 3rem 0;
    width: 100%;
    background: black;
    height: 356px;
    clip-path: polygon(50% 0%, 100% 0, 100% 79%, 71% 90%, 41% 75%, 25% 88%, 0 92%, 0% 43%, 0 0);
    border-bottom: 6px solid black;
    @media (max-width: 411px) {
        clip-path: none;
        height: 256px;
    }
`;

function App() {
    // const props = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <div>
            <Global
                styles={css`
                    .--grass { background-color: #62b759; box-shadow: -4px 33px 26px -27px #62b759; }
                    .--fire { background-color: #E37F6E; box-shadow: -4px 33px 26px -27px #E37F6E; }
                    .--water { background-color: #637EA6; box-shadow: -4px 33px 26px -27px #637EA6; }
                    .--bug { background-color: #C8B57D; box-shadow: -4px 33px 26px -27px #C8B57D; }
                    .--normal { background-color: #919AA3; box-shadow: -4px 33px 26px -27px #919AA3; }
                    .--poison { background-color: #AC6ACA; box-shadow: -4px 33px 26px -27px #AC6ACA; }
                    .--electric { background-color: #F6D857; box-shadow: -4px 33px 26px -27px #F6D857; }
                    .--ground { background-color: #db7745; box-shadow: -4px 33px 26px -27px #db7745; }
                    .--fairy { background-color: #F9D0D3; box-shadow: -4px 33px 26px -27px #F9D0D3; }
                    .--psychic { background-color: #77645F; box-shadow: -4px 33px 26px -27px #7FCFEA; }
                    .--ice { background-color: #7FCFEA; box-shadow: -4px 33px 26px -27px #62b759; }
                    .--rock { background-color: #5B5A61; box-shadow: -4px 33px 26px -27px #5B5A61; }
                    .--fighting { background-color: #CF3E69; box-shadow: -4px 33px 26px -27px #CF3E69; }
                    .--dragon { background-color: #0c68bf; box-shadow: -4px 33px 26px -27px #0c68bf; }
                    .--ghost { background-color: #150E0F; box-shadow: -4px 33px 26px -27px #150E0F; }

                    .type {
                        font-size: 0.6rem;
                        background-color: white;
                        min-width: 7em;
                        padding: 0.8rem;
                        text-align: center;
                        color: white;
                        clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);

                        &--grass { color: #62b759; }
                        &--water { color: #637EA6; }
                        &--fire { color: #E37F6E; }
                        &--bug { color: #C8B57D; }
                        &--normal { color: #919AA3; }
                        &--poison { color: #AC6ACA; }
                        &--electric { color: #F6D857; }
                        &--ground { color: #db7745; }
                        &--fairy { color: #F9D0D3; }
                        &--psychic { color: #77645F; }
                        &--ice { color: #7FCFEA; }
                        &--rock { color: #5B5A61; }
                        &--fighting { color: #CF3E69; }
                        &--dragon { color: #0c68bf; }
                        &--ghost { color: #150E0F; }
                    }
                `}
            />
            <Section data-testid="list-items">
                <HashRouter>
                    <Wrap>
                        <Header handleSearch={() => {}} />
                    </Wrap>
                    <Switch>
                        <Route path="/" component={List}></Route>
                    </Switch>
                </HashRouter>
            </Section>
        </div>
    );
}

export default App;


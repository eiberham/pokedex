import React, { lazy, Suspense } from 'react';
import { Router, Route, HashRouter, Switch, Redirect, useHistory, withRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import {useSpring, animated} from 'react-spring';
import './app.scss';

const PokeList  = lazy(() => import('./components/Pokelist/PokeList'));
const SearchBar = lazy(() => import('./components/SearchBar'));
const PokeDetail = lazy(() => import('./components/PokeDetail'));
const Header = lazy(() => import('./components/Header'));

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

const Wrap = styled.span `
    position: relative;
    top: 0;
    margin: 0 0 3rem 0;
    width: 100%;
    background: black;
    height: 356px;
    clip-path: polygon(50% 0%, 100% 0, 100% 26%, 100% 64%, 65% 64%, 38% 100%, 0 100%, 0% 43%, 0 0);
    border-bottom: 6px solid black;
`;

function App() {
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <div>
            <Global
                styles={css`
                    .--grass { background-color: #62b759; }
                    .--fire { background-color: #E37F6E; }
                    .--water { background-color: #637EA6; }
                    .--bug { background-color: #C8B57D; }
                    .--normal { background-color: #919AA3; }
                    .--poison { background-color: #AC6ACA; }
                    .--electric { background-color: #F6D857; }
                    .--ground { background-color: #db7745; }
                    .--fairy { background-color: #F9D0D3; }
                    .--psychic { background-color: #77645F; }
                    .--ice { background-color: #7FCFEA; }
                    .--rock { background-color: #5B5A61; }
                    .--fighting { background-color: #CF3E69; }
                    .--dragon { background-color: #0c68bf; }
                    .--ghost { background-color: #150E0F; }
                `}
            />
            <Suspense fallback={renderLoader()}>
                <Section style={props} data-testid="list-items">
                    <Wrap>
                        <Header handleSearch={handleSearch} />
                    </Wrap>
                    <HashRouter>
                        <Switch>
                            <Route path="/" exact component={PokeList}></Route>
                            <Route path="/pokemon" component={PokeList}></Route>
                            <Route path="/pokemon/:name" component={PokeDetail}></Route>
                        </Switch>
                    </HashRouter>
                </Section>
            </Suspense>
        </div>
    );
}

export default withRouter(App);


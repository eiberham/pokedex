import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import {useSpring, animated} from 'react-spring';
import Header from './components/Header';
import List from './components/List';
import './app.scss';

import poison from './assets/img/poison.svg';
import bug from './assets/img/bug.svg';
import ground from './assets/img/ground.svg';
import fire from './assets/img/fire.svg';
import grass from './assets/img/grass.svg';
import rock from './assets/img/rock.svg';
import electric from './assets/img/electric.svg';
import ghost from './assets/img/ghost.svg';
import flying from './assets/img/flying.svg';
import fairy from './assets/img/fairy.svg';

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
                        position: fixed;
                        top: 0;
                        width: 150px;
                        height: 100%;

                        &--grass { 
                            background-image: url('${grass}');
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        &--water {}
                        &--fire { 
                            background-image: url('${fire}');
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        &--bug { 
                            background-image: url('${bug}');
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        &--normal { color: #919AA3; }
                        &--poison { 
                            background-image: url('${poison}');
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        &--electric { 
                            background-image: url('${electric}');
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        &--ground { 
                            background-image: url('${ground}');
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        &--fairy {
                            background-image: url('${fairy}');
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        &--psychic {}
                        &--ice { color: #7FCFEA; }
                        &--rock { 
                            background-image: url('${rock}');
                            background-position: center;
                            background-repeat: no-repeat;    
                        }
                        &--fighting {}
                        &--dragon { color: #0c68bf; }
                        &--ghost { 
                            background-image: url('${ghost}');
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        &--flying {
                            background-image: url('${flying}');
                            background-position: center;
                            background-repeat: no-repeat;
                        }
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


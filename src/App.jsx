import React, { lazy, Suspense } from 'react';
import { Router, Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import { Global, css } from '@emotion/core'
import './app.scss';

const PokeList  = lazy(() => import('./components/Pokelist/PokeList'));
const SearchBar = lazy(() => import('./components/SearchBar'));
const PokeDetail = lazy(() => import('./components/PokeDetail'));

const renderLoader = () => <p>Loading</p>;

function App() {
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
              {/* <SearchBar handleSearch={handleSearch}/> */}
              <HashRouter>
                  <Switch>
                      <Route path="/" exact component={PokeList}></Route>
                      <Route path="/pokemon/:name" component={PokeDetail}></Route>
                  </Switch>
              </HashRouter>
          </Suspense>
      </div>
  );
}

export default App;

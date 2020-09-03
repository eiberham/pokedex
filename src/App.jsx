import React, { lazy, Suspense } from 'react';
import { Router, Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import history from './history';
import './app.scss';

const PokeList  = lazy(() => import('./components/Pokelist/PokeList'));
const SearchBar = lazy(() => import('./components/SearchBar'));
const PokeDetail = lazy(() => import('./components/PokeDetail'));

const renderLoader = () => <p>Loading</p>;

function App() {

  const handleSearch = (query) => {
      history.push({
          pathname: `/pokemon/${query}`
      });
  };

  return (
      <div>
          <Suspense fallback={renderLoader()}>
              {/* <SearchBar handleSearch={handleSearch}/> */}
              <HashRouter>
                  <Switch>
                      <Route exact path="/" render={ ()=>( <Redirect to="pokemon" /> )} />
                      <Route path="/pokemon" exact component={PokeList}></Route>
                      <Route path="/pokemon/:name" component={PokeDetail}></Route>
                  </Switch>
              </HashRouter>
          </Suspense>
      </div>
  );
}

export default App;

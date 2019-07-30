import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';

const PokeList  = lazy(() => import('./components/PokeList'));
const SearchBar = lazy(() => import('./components/SearchBar'));
const PokeDetail = lazy(() => import('./components/PokeDetail'));
const PokeFoot = lazy(() => import('./components/PokeFoot'));

const renderLoader = () => <p>Loading</p>;

function App() {

  const handleSearch = (query) => {
      history.push({
          pathname: `/pokemon/${query}`
      });
  };

  return (
      <div className="App">
          <Suspense fallback={renderLoader()}>
              <SearchBar handleSearch={handleSearch}/>
              <Router history={history}>
                  <Switch>
                      <Route exact path="/" render={ ()=>( <Redirect to="pokemon" /> )} />
                      <Route path="/pokemon" exact component={PokeList}></Route>
                      <Route path="/pokemon/:name" component={PokeDetail}></Route>
                  </Switch>
              </Router>
              <PokeFoot />
          </Suspense>
      </div>
  );
}

export default App;

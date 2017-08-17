import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container.jsx';
import PokemonIndex from './pokemon/pokemon_index.jsx';
import { HashRouter, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>

      <Route path="/" component={PokemonIndexContainer} />
    </HashRouter>
  </Provider>
);

export default Root;

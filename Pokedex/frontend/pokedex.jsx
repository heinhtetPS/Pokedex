import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, RECEIVE_ALL_POKEMON, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util.js';
import { selectAllPokemon } from './reducers/selectors';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';
// /Users/appacademy/Desktop/W7D3/Pokedex/frontend/store/store.js
// /Users/appacademy/Desktop/W7D3/Pokedex/frontend/pokedex.jsx

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(< Root store={store}/>, root);
});

window.selectAllPokemon = selectAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;

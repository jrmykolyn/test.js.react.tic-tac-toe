import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

function App({ game }) {
  return <Game game={ game } />;
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './ui/index.css';
import App from './ui/App';
import * as serviceWorker from './serviceWorker';
import { Game } from './core';

const isSingle = window.location.search.includes('mode=single');

ReactDOM.render(<App game={ new Game() } mode={ isSingle ? 'single' : 'default' } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

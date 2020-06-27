import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

import 'main.css';
import {store} from 'redux/store';

const reRenderTree = () => {
  ReactDOM.render( 
    <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
    document.getElementById('root')
  )
}

reRenderTree(store.getState(), store.dispatch);

store.subscribe(reRenderTree);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, {addProduct, dellProduct, subscribe} from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
root.render(
  <React.StrictMode>
    <App state={state} addProduct={addProduct} dellProduct={dellProduct} />
  </React.StrictMode>
);}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)




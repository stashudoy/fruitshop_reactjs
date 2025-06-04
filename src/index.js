import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, {addProduct, dellProduct} from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} addProduct={addProduct} dellProduct={dellProduct} />
  </React.StrictMode>
);



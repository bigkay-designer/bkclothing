import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './components/contextApi/cartContext';
import cartReducer, { cartInitialState} from './components/reducers/cartReducer';

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider cartInitialState={cartInitialState} cartReducer={cartReducer}>
      <App />
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import CartContextProvider from './components/contextApi/cartContext';
import AuthContextProvider from './components/contextApi/authContext';
// import cartReducer, { cartInitialState} from './components/reducers/cartReducer';
// cartInitialState={cartInitialState} cartReducer={cartReducer}
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

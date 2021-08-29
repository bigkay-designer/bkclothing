import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Nav from '../components/nav/Nav';
import Landing from '../components/landingPages/Landing';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import './App.css';
// Products section
import { CartContext } from '../components/contextApi/cartContext';
import ProductDetail from '../components/pages/ProductDetail';
import SortFilter from '../components/pages/SortFilter';
import FilterContextProvider from '../components/contextApi/filterContext';
import ProductDisplay from '../components/pages/ProductDisplay';
import Checkout from '../components/pages/checkout/Checkout';
import Success from '../components/pages/checkout/Success';
import Canceled from '../components/pages/checkout/Canceled';
import NotFound from '../components/NotFound';
import Signup from '../components/pages/auth/Signup';
import Login from '../components/pages/auth/Login';
import MyAccount from '../components/pages/auth/MyAccount';
// import Loading from '../components/Loading';

function App() {
  const stripePromise = loadStripe(
    'pk_test_51ITBiPDkKKCnsU3mzowRSuptSxuYu1YiPtFZfC0octwgDMKJj9uYHHxlwJFlCPSUBIATHHQjtc3MmuJGOkDQTEtp00X30SP1ZT'
  );
  const { cart } = useContext(CartContext);
  // Stripe session id from sessionStorage
  const [activeSession, setActiveSession] = useState(false);
  const [canceledPayment, setCancelPayment] = useState(true);
  useEffect(() => {
    const stripeSession = sessionStorage.getItem('stripe_session_id');
    const successTrans = sessionStorage.getItem('success');
    if (stripeSession) setActiveSession(true);
    if (successTrans) setCancelPayment(false);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('success') && cart.length > 0) {
      sessionStorage.clear();
    }
  }, [cart.length]);

  return (
    <div className="App">
      {/* <Loading /> */}
      <Router>
        <div className="app__div">
          <Nav />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            {/* stripe element router */}
            <Route path="/checkout" exact={true}>
              <Elements stripe={stripePromise}>
                <Checkout />
              </Elements>
            </Route>
            {canceledPayment && (
              <Route path="/canceled">
                <Canceled />
              </Route>
            )}
            {activeSession && (
              <Route path="/success">
                <Success />
              </Route>
            )}

            <Route path="/myAccount">
              <MyAccount />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/get/product/:name/:id">
              <ProductDetail />
            </Route>
            <Route path={`/page/:gender`}>
              <FilterContextProvider>
                <div className="grid__filter__pages">
                  <SortFilter />
                  <ProductDisplay />
                </div>
              </FilterContextProvider>
            </Route>
            <Route path="">
              <NotFound />
            </Route>
          </Switch>

          {/*  */}
          <div className="footer__wrapper">
            <NewsLetter />
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

import React from 'react'
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js' 
import Nav from '../components/Nav'
import Landing from '../components/landingPages/Landing'
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import './App.css';
// Products section
import ProductDetail from '../components/pages/ProductDetail';
import SortFilter from '../components/pages/SortFilter';
import FilterContextProvider from '../components/contextApi/filterContext';
import ProductDisplay from '../components/pages/ProductDisplay';
import Checkout from '../components/pages/Checkout';
import Payment from '../components/pages/Payment';
import { useStateValue } from '../components/contextApi/cartContext'

const location = window.location.pathname
function App() {
  const promise = loadStripe("pk_test_51ITBiPDkKKCnsU3mzowRSuptSxuYu1YiPtFZfC0octwgDMKJj9uYHHxlwJFlCPSUBIATHHQjtc3MmuJGOkDQTEtp00X30SP1ZT");

  const [{cart}] = useStateValue()
  return (
        <div className="App">
          <Router>
            <Nav />
            <Switch>
              <FilterContextProvider>
                <Route path={`/all/:gender`}>
                  <SortFilter />
                  <ProductDisplay />
                </Route>
              </FilterContextProvider>
            </Switch>
            <Switch>
              {
                cart.length >= 1 ?
                <Route path="/payment"> 
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                </Route>
                : null
              }
              <Route path="/checkout"> <Checkout /></Route>
              <Route path="/get/product"><ProductDetail /></Route>
              <Route path="/" exact component={Landing} />
            </Switch>
            <NewsLetter />
            <Footer />
          </Router>
        </div>
  );
}

export default App;

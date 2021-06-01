import React from 'react'
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom'
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

const location = window.location.pathname
function App() {
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
              <Route path="/payment"> <Payment /></Route>
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

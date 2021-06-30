import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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
import Success from '../components/pages/checkout/Success'
import Canceled from '../components/pages/checkout/Canceled'
import NotFound from '../components/NotFound'

function App() {
  const stripePromise = loadStripe("pk_test_51ITBiPDkKKCnsU3mzowRSuptSxuYu1YiPtFZfC0octwgDMKJj9uYHHxlwJFlCPSUBIATHHQjtc3MmuJGOkDQTEtp00X30SP1ZT");

  // Stripe session id from sessionStorage
  const [activeSession, setActiveSession] = useState(false)
  const [canceledPayment, setCancelPayment] = useState(false)
  useEffect(()=> {
    if(sessionStorage.getItem('stripe_session_id')){
      setActiveSession(true)
    }
    if(!sessionStorage.getItem('sucess')){
      setCancelPayment(true)
    }
  }, [activeSession])

  return (
        <div className="App">
          <Router>
            <div className="app__div">
              <Nav />
              <Switch>
                <Route exact path="/"><Landing /></Route>
                <Route path={`/all/:gender`}>
                  <FilterContextProvider>
                    <SortFilter />
                    <ProductDisplay />
                  </FilterContextProvider>
                </Route>
                <Route path="/get/product"><ProductDetail /></Route>
                  {/* stripe element router */}
                <Route path="/checkout"> 
                  <Elements stripe={stripePromise}>
                    <Checkout />
                  </Elements>
                </Route>
                {
                  canceledPayment && <Route path="/canceled"><Canceled /></Route>
                }
                {
                  activeSession && <Route path="/success"><Success /></Route>
                }
                <Route path=""><NotFound /></Route>
              </Switch>
              
              {/*  */}
              <NewsLetter />
              <Footer />
            </div>
          </Router>
        </div>
  );
}

export default App;



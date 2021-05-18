import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from '../components/Nav'
import Landing from '../components/landingPages/Landing'
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import './App.css';
// Products section
import Men from '../components/pages/Mens';
import ProductDetail from '../components/pages/ProductDetail';
import SortFilter from '../components/pages/SortFilter';
import FilterContextProvider from '../components/contextApi/filterContext';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          {/* Product route */}
          <Route path="/men"> 
            <FilterContextProvider>
                <SortFilter />
                <Men /> 
            </FilterContextProvider>
          </Route>
          <Route path={'/productDetail'}> <ProductDetail /> </Route>
          {/* Landing route */}
          <Route path="/" exact> <Landing /> </Route>
        </Switch>
        <NewsLetter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

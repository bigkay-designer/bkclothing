import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from '../components/Nav'
import Landing from '../components/Landing'
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
// Products section
import './App.css';
import Men from '../components/pages/Mens';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          {/* Product route */}
          <Route path="/men"> <Men /> </Route>
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

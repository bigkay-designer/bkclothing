import React from 'react'
import Nav from '../components/Nav'
import Landing from '../components/Landing'
import NewsLetter from '../components/NewsLetter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <NewsLetter />
    </div>
  );
}

export default App;

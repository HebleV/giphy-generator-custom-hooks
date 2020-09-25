import React from 'react';
import RandomGiphy from './components/RandomGiphy';
import TagGiphy from './components/TagGiphy';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Giphy Generator</h1>
      <RandomGiphy />
      <TagGiphy />
    </div>
  );
}

export default App;

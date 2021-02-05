import React from 'react';
import RandomGiphy from './components/RandomGiphy';
import TagGiphy from './components/TagGiphy';
import './App.css';
import ErrorBoundary from '../src/ErrorBoundary';
function App() {
  return (
    <div className="App">
      <h1>Giphy Generator</h1>
      <ErrorBoundary>
      <RandomGiphy />
      <TagGiphy />
      </ErrorBoundary>
    </div>
  );
}

export default App;

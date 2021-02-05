import React from 'react';
import RandomGiphys from './components/RandomGiphy';
import TagGiphy from './components/TagGiphy';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
function App() {
  return (
    <div className="App">
      <h1>Giphy Generator</h1>
      <ErrorBoundary>
      <RandomGiphys />
      <TagGiphy />
      </ErrorBoundary>
    </div>
  );
}

export default App;

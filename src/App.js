import React from 'react';
// import RandomGiphys from './components/RandomGiphy';
// import TagGiphy from './components/TagGiphy';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Hero from './components/Hero';
function App() {
  return (
    <div className="App">
      <h1>Giphy Generator</h1>
      {/* <ErrorBoundary>
      <RandomGiphys />
      <TagGiphy />
      </ErrorBoundary> */}
      <ErrorBoundary>
      <Hero heroName='batman'></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='superman'></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='joker'></Hero>
      </ErrorBoundary>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Hero from "./components/Hero";
import RandomGiphys from "./components/RandomGiphy";
import TagGiphy from "./components/TagGiphy";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/random"
          render={() => (
            <ErrorBoundary>
              <RandomGiphys />
            </ErrorBoundary>
          )}
        />

        <Route
          path="/tag"
          render={() => (
            <ErrorBoundary>
              <TagGiphy />
            </ErrorBoundary>
          )}
        />

        <Route
          path="/hero"
          render={() => (
            <ErrorBoundary>
              <Hero heroName='joker'/>
            </ErrorBoundary>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;

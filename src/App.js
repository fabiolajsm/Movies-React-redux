import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import Watch from "./components/Movies/Watch";
import Watched from "./components/Movies/Watched";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Movies} />
      <Route exact path="/watch" component={Watch} />
      <Route exact path="/watched" component={Watched} />
    </React.Fragment>
  );
}

export default App;
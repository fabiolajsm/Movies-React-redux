import React from "react";
import './App.css';
import { Route } from "react-router-dom";
// import Favorites from "./components/Favorites/Favorites";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Route path="/" component={Movies} />
      {/* <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />  */}
    </React.Fragment>
  );
}

export default App;

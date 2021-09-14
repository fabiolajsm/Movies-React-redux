import React from "react";
// import { Route } from "react-router-dom";

// import Favorites from "./components/Favorites/Favorites";
// import Buscador from "./components/Buscador/Buscador";
// import Movie from "./components/Movie/Movie";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
      <React.Fragment>
          <NavBar />
          {/* <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} /> */}
      </React.Fragment>
  );
}

export default App;

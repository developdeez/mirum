import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import Carousel from "./components/Carousel";
import Details from "./components/Details";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" component={Carousel} exact />
          <Route path="/details" component={Details} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <footer className="footer">
        <a href="/">Words</a>
      </footer>
    </div>
  );
}

export default App;

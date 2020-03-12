import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Nav from "./components/nav";
import Footer from "./components/footer";
import Content from "./components/body";
import Redirect from "./components/redirect";
import Errorpage from "./components/error";

const MainContent = () => (
  <div className="App">
    <Nav />
    <Content />
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/error" component={Errorpage} />
        <Route exact path="/" component={MainContent} />
        <Route exact path="/:id" component={Redirect} />
      </Switch>
    </Router>
  );
};

export default App;

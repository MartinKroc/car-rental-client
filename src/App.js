import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Main} from "./pages/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navi} from "./containers/Navi";
import {SignIn} from "./pages/SignIn";
import {UserPanel} from "./pages/UserPanel";
import {Offers} from "./pages/Offers";
import {Opinions} from "./pages/Opinions";
import {Contact} from "./pages/Contact";
import {FooterBar} from "./containers/Footer";
import {Demo} from "./pages/Demo";

function App() {
  return (
  <Router>
    <Navi />
    <div>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/user">
          <UserPanel />
        </Route>
        <Route path="/offers">
          <Offers />
        </Route>
        <Route path="/opinions">
          <Opinions />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/demo">
          <Demo />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
    <FooterBar />
  </Router>
  );
}

export default App;

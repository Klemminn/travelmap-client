import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Containers, Footer, Header } from 'components';

import HomePage from 'pages/HomePage';
import PlacePage from 'pages/PlacePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/GlobalOverride.css';

const App = () => (
  <Router>
    <Containers.AppContainer>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/places/:placeSlug" component={PlacePage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Containers.AppContainer>
  </Router>
);

export default App;

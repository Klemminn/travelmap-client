import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Containers, Footer, Header } from 'components';

import HomePage from 'pages/HomePage';
import ExperiencePage from 'pages/ExperiencePage';
import PlacePage from 'pages/PlacePage';
import RegionPage from 'pages/RegionPage';
import ScrollToTop from 'components/ScrollToTop';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/GlobalOverride.css';

const App = () => (
  <Router>
    <ScrollToTop />
    <Containers.AppContainer>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/places/:slug" component={PlacePage} />
        <Route exact path="/experience/:slug" component={ExperiencePage} />
        <Route exact path="/regions/:slug" component={RegionPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Containers.AppContainer>
  </Router>
);

export default App;

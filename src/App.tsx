import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Containers, Footer, Header } from 'components';

import BlogPage from 'pages/BlogPage';
import ExperiencePage from 'pages/ExperiencePage';
import FrontPage from 'pages/FrontPage';
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
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/places/:slug" component={PlacePage} />
        <Route exact path="/blog/:slug" component={BlogPage} />
        <Route exact path="/experience/:slug" component={ExperiencePage} />
        <Route exact path="/regions/:slug" component={RegionPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Containers.AppContainer>
  </Router>
);

export default App;

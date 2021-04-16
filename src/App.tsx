import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';

import { Containers, Footer, Header } from 'components';

import BlogPage from 'pages/BlogPage';
import ExperiencePage from 'pages/ExperiencePage';
import FrontPage from 'pages/FrontPage';
import PlacePage from 'pages/PlacePage';
import PreviewPage from 'pages/PreviewPage';
import RegionPage from 'pages/RegionPage';
import ScrollToTop from 'components/ScrollToTop';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/GlobalOverride.css';
import styled from 'styled-components';

const StyledPageTransition = styled(PageTransition)`
  overflow-y: scroll;
  > div {
    height: auto;
  }
`;

const CONTAINER_ID = 'route-container';

const App = () => (
  <Router>
    <ScrollToTop elementId={CONTAINER_ID} />
    <Containers.AppContainer>
      <Route
        render={({ location }) => {
          return (
            <StyledPageTransition
              preset="moveToLeftFromRight"
              transitionKey={location.pathname}
              id={CONTAINER_ID}
            >
              <Header />
              <Switch location={location}>
                <Route exact path="/" component={FrontPage} />
                <Route exact path="/preview" component={PreviewPage} />
                <Route exact path="/places/:slug" component={PlacePage} />
                <Route
                  exact
                  path="/placePreview/:token"
                  component={PlacePage}
                />
                <Route exact path="/blog/:slug" component={BlogPage} />
                <Route
                  exact
                  path="/experience/:slug"
                  component={ExperiencePage}
                />
                <Route exact path="/regions/:slug" component={RegionPage} />
                <Redirect to="/" />
              </Switch>
              <Footer />
            </StyledPageTransition>
          );
        }}
      />
    </Containers.AppContainer>
  </Router>
);

export default App;

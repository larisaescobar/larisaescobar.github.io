import React, { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import theme from './theme/theme';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';

const history = createBrowserHistory();

const AppWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    padding: 32px 72px;
  }
`;

function App() {

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        
        <Router history={history}>
          <AppWrapper>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/work" component={Work} />
              <Route path="/about" component={About} />
            </Switch>
            <Footer />
          </AppWrapper> 
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

import React, { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import theme from './theme/theme';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import NotFound from './pages/NotFound';

const history = createBrowserHistory();

const AppWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px;
  position: relative;
  box-sizing: border-box;

  @media (min-width: 1024px) {
  }
`;

const Container = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
`;

function App() {

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        
        <Router history={history}>
          <AppWrapper>
            <Container>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/work" component={Work} />
              <Route path="/about" component={About} />
              <Route path="*" component={NotFound} /> 
            </Switch>
            <Footer />
            </Container>
          </AppWrapper> 
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

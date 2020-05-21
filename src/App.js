import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'
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
      <Helmet>
        <title>Larisa - Product Designer + Developer</title>
        <meta name="title" content="Larisa - Product Designer + Developer" />
        <meta name="description" content="Vienna based product designer with experience in user research, visual design and user experience." />

       
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/"/>
        <meta property="og:title" content="Larisa - Product Designer + Developer"/>
        <meta property="og:description" content="Vienna based product designer with experience in user research, visual design and user experience. "/>
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
      </Helmet>
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

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
          <meta name="description" content="Larisa's portfolio. I'm a product designer with experience in user research, visual design and user experience." />
          <meta name="image" content="https://images.prismic.io/larisaescobar-portfolio/53486fc4-3d1c-48e1-a9b8-515452d4d893_larisa+portfolio.png?auto=compress,format" />

          <meta itemprop="name" content="Larisa - Product Designer + Developer" />
          <meta itemprop="description" content="Larisa's portfolio. I'm a product designer with experience in user research, visual design and user experience." />
          <meta itemprop="image" content="https://images.prismic.io/larisaescobar-portfolio/53486fc4-3d1c-48e1-a9b8-515452d4d893_larisa+portfolio.png?auto=compress,format" />

          <meta name="og:title" content="Larisa - Product Designer + Developer" />
          <meta name="og:description" content="Larisa's portfolio. I'm a product designer with experience in user research, visual design and user experience." />
          <meta name="og:image" content="https://images.prismic.io/larisaescobar-portfolio/53486fc4-3d1c-48e1-a9b8-515452d4d893_larisa+portfolio.png?auto=compress,format" />
          <meta name="og:url" content="https://larisaescobar.github.io/#/" />
          <meta name="og:site_name" content="Larisa - Product Designer + Developer" />
          <meta name="og:type" content="website" />
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

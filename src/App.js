import React, { Fragment } from "react";
import styled from "styled-components";
import GlobalStyle from "./theme/globalStyle";
import Header from "./components/Header";

const AppWrapper = styled.div`
  font-family: "Raleway", sans-serif;
  text-align: left;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Header />
      </AppWrapper>
    </Fragment>
  );
}

export default App;

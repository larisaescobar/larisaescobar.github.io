import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  padding: 24px 0;
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: 700;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 4.25em;
  }
`;

function Header(props) {
  return (
    <HeaderWrapper>
      { props.title && <Title>{props.title}</Title> }
    </HeaderWrapper>
  );
}

export default Header;

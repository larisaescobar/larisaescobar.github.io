import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  max-width: 1010px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1``;

function Header(props) {
  return (
    <HeaderWrapper>
      <Title>Larisa</Title>
    </HeaderWrapper>
  );
}

export default Header;

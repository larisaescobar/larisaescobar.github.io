import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopbarWrapper = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items:center;
    flex: 1 100%;
    
    @media (min-width: 768px) {
        padding: 16px;
    }
`;

const NavItemWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const NavItem = styled(Link)`
    font-size: 1.25em;
    font-weight: 500;
    text-decoration: none;
    padding-left: 32px;
    color: #121212;

    &:active,visited {
        font-weight: 600;
    }
`;

const SiteTitle = styled(Link)`
    font-weight: 600;
    font-size: 1.25em;
    color: #121212;
    text-decoration: none;
`;


function Navbar(props) {
    return (
      <TopbarWrapper>
            <SiteTitle to='/'>Larisa.</SiteTitle>
            <NavItemWrapper>
                <NavItem to='work'>Work</NavItem>
                <NavItem to='about'>About</NavItem>
            </NavItemWrapper>
      </TopbarWrapper>
    );
  }
  
  export default Navbar;
  
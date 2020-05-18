import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const NotFoundWrapper = styled.div`
flex: 1 100%;   
min-height: 430px;

@media (min-width: 768px) {
    min-height: 550px;
}
`;

const StyledLink = styled(Link)`
    font-size: 1.25em;
    font-weight: 500;
    text-decoration: none;
    color: #121212;
`;

function NotFound() {
    return (
        <NotFoundWrapper>
            <Header title={'Oops, page not found'} />
            <StyledLink to='/'>Go back home</StyledLink>
        </NotFoundWrapper>
    );
}

export default NotFound;
import React from 'react';
import styled from 'styled-components';

const ContactLink = styled.a`
    font-size: 1em;
    font-weight: 500;
    padding-bottom: 8px;
    text-decoration: none;
    color: #121212;
    flex-shrink: 0;

    @media (min-width: 768px) {
        font-size: 1.25em;
        padding-right: 32px;
      }
`;

const ContactLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px 0;
    width: 100%;
    box-sizing: border-box;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        padding: 16px;
      }
`;

const links = [
    {
        name: 'Dribbble',
        url: 'https://dribbble.com/larisaescobar'
    },
    {
        name: 'Github',
        url: 'https://github.com/larisaescobar/'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/larinena/'
    },
    {
        name: 'Email',
        url: 'mailto:larisaesco@gmail.com?subject=Hola Larisa!'
    }
];

function Footer() {
    return (
        <ContactLinkWrapper>
            {links.map( link => (
                <ContactLink href={link.url}>
                    {link.name}
                </ContactLink>
            ))}
        </ContactLinkWrapper>
    )
}

export default Footer;
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const AboutWrapper = styled.div`
    flex: 1 100%;   
`;

const AboutContent = styled.p`
    font-size: 1em;
    line-height: 32px;
    margin: 0;
    padding-bottom: 8px;

    @media (min-width: 768px) {
        font-size: 1.5em;
        max-width: 720px;
        padding-bottom: 16px;
        line-height: 42px;
      }
    `;

const ContactLink = styled.a`
    text-decoration: none;
    font-weight: 500;
    color: #212121;
    font-size: 1.5em;
`;
function About() {
    return (
        <AboutWrapper>
            <Header title={'About'} />
            <AboutContent>
                Hey there, thanks for visiting my site! I’m Larisa, 
                a self-taught web developer and designer. When I’m not working I like to embroider shirts, ride my cruiser board or cook new recipes. 
                Got any feedback, want to collaborate or just say hello? 
            </AboutContent>
            <ContactLink href='mailto:larisaesco@gmail.com?subject=Hola Larisa!'>Get in touch!</ContactLink>
        </AboutWrapper>
    )
} 

export default About;
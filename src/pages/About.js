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
        max-width: 1000px;
        padding-bottom: 16px;
        line-height: 42px;
      }
    `;

function About() {
    return (
        <AboutWrapper>
            <Header title={'About'} />
            <AboutContent>
                Hey there, thanks for visiting my site! 
                I’m a self-taught product designer with coding skills. I like to build products from research to pixel perfect design. 
                I have experience in visual design, ux design and user research. 
            </AboutContent>
            <AboutContent>
                When I’m not working I like to embroider shirts, ride my cruiser board or cook new recipes. 
            </AboutContent>
            <AboutContent>
                Got any feedback, want to collaborate or just say hello? 
            </AboutContent>
       
        </AboutWrapper>
    )
} 

export default About;
import React from 'react';
import styled from  'styled-components';
import Header from '../components/Header';

const WorkWrapper = styled.div`
    flex: 1 100%;
`;
const ProjectWrapper = styled.div`
    display: inline-flex;
`;
const Project = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    }

    @media (min-width: 768px) {
        margin-right: 56px;
        width: 330px;
        height: 350px;
      }
  
`;
const ProjectDetailsWrapper = styled.div`
position: absolute;
text-align: center;
padding-left: 1em;
padding-right: 1em;
width: 100%;
height: 100%;
top: 50%;
left: 50%;
opacity: 0;
-webkit-transform: translate(-50%, -50%);
-moz-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
-webkit-transition: all 0.3s ease-in-out 0s;
-moz-transition: all 0.3s ease-in-out 0s;
transition: all 0.3s ease-in-out 0s;
`;
const ProjectDetailTitle = styled.h3`
    font-size: 1.5em;
    color: #FCF7F7;
    font-weight: 500;
`;
const ProjectDetailType = styled.p`
    font-size: 1.125em;
    color: #FCF7F7;
    font-weight: 400;
`;
const Overlay = styled.div`
    background: #121212;
    opacity: 0;
    width: 100%;
    height: 99%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;

    &:hover {
        opacity: 75%;
    }
`;

 const ProjectImg = styled.img`
    width: 100%;
    height: auto;
 `;

function Work() {
    return (
        <WorkWrapper>
            <Header title={'Work'} />
            <ProjectWrapper>
                <Project>
                    <Overlay/>
                    <ProjectImg src='https://images.prismic.io/larisaescobar-portfolio/cc774a89-5dc8-4618-984a-4ca027ddb5d4_checkin_kiosk+%281%29.svg?auto=compress,format' />
                   
                </Project>
            </ProjectWrapper>
        </WorkWrapper>
    )
} 

export default Work;
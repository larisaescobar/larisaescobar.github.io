import React from 'react';
import styled from  'styled-components';
import Header from '../components/Header';


const Projects = [
    {
        name: 'Checkin kiosk',
        type: 'Product design',
        src: 'checkin_kiosk',
        imageAlt: 'checkin kiosk ui',
    },
    {
        name: 'Designer portfolio',
        type: 'Code',
        src: 'david_portfolio',
        imageAlt: 'designer portfolio',
    },
    {
        name: 'Email templates',
        type: 'UI design',
        src: 'email_template',
        imageAlt: 'email templates design',
    },
    {
        name: 'Food delivery app',
        type: 'UI design',
        src: 'food_delivery',
        imageAlt: 'food delivery ui',
    },
    {
        name: 'Release notes page',
        type: 'UX/UI design',
        src: 'release_notes',
        imageAlt: 'release notes page ui',
    }
];

const WorkWrapper = styled.div`
    flex: 1 100%;
    box-sizing: border-box;
`;
const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: center;
  
    width: 100%;
`;

const ProjectScroller = styled.div`
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    display: grid;
    grid-gap: 1rem;
    grid-auto-flow: column;
    grid-auto-columns: 330px;
    height: 350px;
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
const ProjectTitle = styled.h3`
    font-size: 1.5em;
    color: #FCF7F7;
    font-weight: 500;
`;
const ProjectType = styled.p`
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

function Work(project) {
    return (
        <WorkWrapper>
            <Header title={'Work'} />
            <ProjectsWrapper>
                <ProjectScroller>
                {Projects.map(project => (
                    <Project>
                        <ProjectTitle>
                            {project.title}
                        </ProjectTitle>
                        <ProjectType>
                            {project.type}
                        </ProjectType>
                        <ProjectImg src={require(`../assets/${project.src}.png`)} alt={project.imageAlt} />
                    </Project>
                ))}
                  </ProjectScroller>
            </ProjectsWrapper>
          
        </WorkWrapper>
    )
} 

export default Work;
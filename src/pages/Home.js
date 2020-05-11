import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const ContentWrapper = styled.div`
    flex: 1 100%;
`;

const BodyListWrapper = styled.div`
    padding: 0;
    display: flex;
`;

const List = styled.ul`
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
`;

const ListItem = styled.li`
    font-size: 1em;
    list-style: none;
    padding-bottom: 8px;

    @media (min-width: 768px) {
        font-size: 2em;
        line-height: 48px; 
      }
`;
const CrossedText = styled.span`
    text-decoration: line-through;
    padding-right: 4px;
`;

const myList = [{
    text: 'I design digital products',
    id: 0
  },
  {
    text: 'I like reactjs a lot',
    id: 1
  },
  {
    crossedText: ' Prague',
    text: 'Vienna based',
    id: 2
  },
  {
    text: 'Newbie skater',
    id: 3
  },
  {
    text: 'Pretty dope overall',
    id: 4
  }
];

function Home(props) {
    return (
        <ContentWrapper>
            <Header title={'Hola, Im Larisa'} />
            <BodyListWrapper>
                <List>
                    {myList.map(item => (
                        <ListItem key={item.id}>
                            <CrossedText>{item.crossedText}</CrossedText>{item.text}
                        </ListItem>
                    ))}
                </List>
            </BodyListWrapper>
        </ContentWrapper>
    )
} 

export default Home;

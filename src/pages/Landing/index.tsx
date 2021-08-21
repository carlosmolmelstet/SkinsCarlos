import React from 'react';
import { 
  Container,
  Wrapper,
  Main,
  Background
} from './styles';
import BackgroundImg from '../../images/bgHome.jpg';
import NavBar from '../../components/NavBar';

const Landing: React.FC = () => {
  return (
    <Container>
      <Wrapper>
      <NavBar />
        <Main>
          <h1>Tudo sobre os Campeões  de <br /> <span>league of legends</span></h1>    
        </Main>
      </Wrapper>
      <Background bg={BackgroundImg} />
    </Container>
  );
}

export default Landing;
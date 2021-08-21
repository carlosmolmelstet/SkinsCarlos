import styled from 'styled-components';

interface BackgroundProps {
    bg: string;
  }

export const Container = styled.div`
    display: flex;
    justify-content: center;

    width: 100vw;
    height: 100vh;
`;

export const Background = styled.div<BackgroundProps>`
    display: flex;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background: url(${(props) => props.bg}) ;
    background-size: cover;
    position: absolute;
    filter: blur(5px) brightness(0.5);
    z-index: 1;
`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 99;
`;

export const Main = styled.div`
    min-height: calc(100vh - 128px);
    max-width: 50vw;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 { 
        font-family: "Beaufort W01 Heavy Italic";
        font-size: 80px;
        text-transform: uppercase;
        color: #FFF;
        text-align: center;
        line-height: 70px;
        margin-top: -100px;
        z-index:2;
        
        span {
            color: #C7A93F;
        }
    }

`;
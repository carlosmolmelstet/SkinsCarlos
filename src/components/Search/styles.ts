import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    width: 400px;
    z-index: 999;

    h1 {
        width: 80%;
        margin-left: 10%;

        font-size: 60px;
        color: ${(props) => props.color};

        @media(max-width: 900px) {
            color: #FFF;
        }

        @media(max-width: 450px) {
            font-size: 26px;

        }
    }

   


`;

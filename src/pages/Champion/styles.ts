import styled from 'styled-components';

interface BackgroundProps {
    bg: string;
}

export const Container = styled.div`
   display: flex;
    justify-content: center;

    min-height: 100vh;
    max-width: 100vw;
    overflow: height;
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

export const Main = styled.div<BackgroundProps>`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin-top: 100px;
    height: 70vh;
    border-radius: 32px;
    background: url(${(props) => props.bg}) ;

    h3 {
        margin-right: 30px;
        margin-top: 16px;
    }

    .overlay{
        width: 600px;
        height: 70vh;
        content: “ ”;
        background: inherit; 
        position: absolute;
        left: 0;
        right: 0;
        top: 0; 
        bottom: 0;
        backdrop-filter: blur(8px) ;
        box-shadow: inset 0 0 0 3000px rgba(0,0,0,0.5);
        z-index: 1;
    }

   
`;

export const SideBar = styled.div`
    width: 600px;
    height: 70vh;
    border-radius: 32px 0 0 32px;
    z-index: 60;
    padding: 16px;

    .header {
        border-bottom: 1px solid #252525;
        height: 50px;
    }

    .body {
        height: calc(70vh - 130px);

        .skinsList {
            display: flex;
            flex-direction: column;
            margin-top: 32px;
            height: calc(70vh - 130px);
            overflow-y: auto;

            .item {
                width: 100%;
                margin: 16px 0;
                display: flex;
                align-items: center;
                transition: .5s;

                .thumbnail {
                    border-radius: 16px 32px 16px 32px;
                    width: 80px;
                    overflow: hidden;
                    transition: .5s;

                    img {
                        width: 80px;
                        transition: .5s;
                    }
                }

                p {
                    margin-left: 16px;
                    font-size: 20px;
                    color: #CAC9C9;
                }

                &:hover, &.active {
                    border-radius: 32px 32px 32px 32px;
                    background: linear-gradient(90.1deg,  rgba(255, 255, 255, 0.07) -1.48%, rgba(0, 0, 0, 0) 98.95%);
                    cursor: pointer;

                p {
                    color: #FFF;
                } 
                
                .thumbnail {
                        border-radius: 8px;

                        img {
                            border-radius: 8px;
                        }
                }
                }
            }

            &::-webkit-scrollbar {
                width: 8px;
            }
    
            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background: #1A1A1A; 
            }
        }
    }
`;


export const Background = styled.div<BackgroundProps>`
    display: flex;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background: url(${(props) => props.bg}) ;
    background-size: cover;
    position: absolute;
    filter: blur(8px) brightness(0.8);
    z-index: 1;
    top: 0;
`;
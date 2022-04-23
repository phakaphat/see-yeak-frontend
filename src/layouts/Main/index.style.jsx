import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #355070;
`;

export const AppBody = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
    padding-top: 64px;
    @media (min-width: 769px) {
        padding-left: 256px;
    }
`;

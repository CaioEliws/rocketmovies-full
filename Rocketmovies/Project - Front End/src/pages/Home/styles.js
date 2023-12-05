import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: hidden;
        padding: 50px 0; 
    }
`;

export const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > section {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding-bottom: 40px;

        > h1 {
            font-size: 40px;
            text-align: center;
        }

        > button {
            width: 200px;
        }
        
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 24px;

        height: 70vh;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 6px;
        }
    }
`;

export const NewMovie = styled(Link)`
    width: 200px;

    text-align: center;
    font-size: 16px;
    align-items: center;
    justify-content: center;

    display: flex;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND1};

    height: 56px;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 500;
`;
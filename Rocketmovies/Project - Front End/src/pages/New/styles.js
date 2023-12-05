import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    .tags {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    width: 1120px;
    margin: 40px auto;
    padding-right: 16px;

    > h1 {
        margin-top: 24px;
        margin-bottom: 40px;

        font-size: 36px;
        font-weight: 500;
    }

    > main {
        display: flex;

        gap: 40px;
        margin-bottom: 40px;
    }

    > section {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    > section > div {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        padding: 16px;
        gap: 24px;
        border-radius: 8px;
    }

    > footer {
        display: flex;
        gap: 40px;
    }
    
    > footer > button:nth-child(1) {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 6px;
    }
`;
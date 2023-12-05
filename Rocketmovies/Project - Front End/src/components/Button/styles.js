import styled from "styled-components";

export const Content = styled.button`
    width: 100%;

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

    &:disabled {
        opacity: 0.5;
    }
`;
import styled from "styled-components";

export const Content = styled.textarea`
    width: 100%;
    height: 250px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND2};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    &:placeholder {
        color: ${({ theme }) => theme.COLORS.BACKGROUND2};
    }
`;
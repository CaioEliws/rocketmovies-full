import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    /* height: 56px; */
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND2};
    color: ${({ theme }) => theme.COLORS.BUTTON};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.BUTTON};
        }
    }

    > svg {
        margin-left: 16px;
    }
`;
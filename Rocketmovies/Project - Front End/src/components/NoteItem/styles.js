import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, $isNew }) => $isNew ? 'transparent' : theme.COLORS.BACKGROUND2};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.BUTTON}` : "none"};

    border-radius: 10px;
    gap: 16px;

    /* margin: 0 auto; */

    > button {
        border: none;
        background: none;

        padding-right: 16px;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        width: 100%;
        height: 56px;

        padding: 16px;

        margin: 0 auto;

        color: ${({ theme }) => theme.COLORS.WHITE};

        background: transparent;
        border: none;
    }
`;
import styled from "styled-components";

import { Link } from "react-router-dom";

export const Content = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    gap: 64px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};

    display: flex;
    justify-content: space-between;

    padding: 0 64px;

    align-items: center;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;


    > button {
        border: none;
        background: none;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > a > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        line-height: 24px;
        width: 120px;

        > a {
            border: none;
            background: none;
            text-align: end;
            margin-right: 6px;
            color: ${({ theme }) => theme.COLORS.BUTTON};
        }

        > strong {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            display: flex;
            margin-right: 6px;
            justify-content: end;
        }
    }
`;

export const Logotipo = styled(Link)`
    color: ${({ theme }) => theme.COLORS.PINK};
    align-items: center;
    background: transparent;
    border: none;
`;
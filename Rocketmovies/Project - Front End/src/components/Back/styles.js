import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Content = styled.div`

`;

export const Button = styled(Link)`
    display: flex;
    align-items: center;

    border: none;
    background: transparent;

    font-size: 16px;
    gap: 8px;
    width: 100px;

    color: ${({ theme }) => theme.COLORS.PINK};
`;
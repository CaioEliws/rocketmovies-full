import styled from "styled-components";
import backgroundImg from '../../assets/backgroundimg.svg'

export const Content = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK}
    }

    > h2 {
        font-size: 24px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY}
    }

    > a {
        margin-top: 50px;
        color: ${({ theme }) => theme.COLORS.PINK};

        text-align: center;
    }

    > button {
        margin-top: 24px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;
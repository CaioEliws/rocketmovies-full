import styled from "styled-components";

export const Content = styled.div`
    width: 1120px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    padding: 32px;
    border-radius: 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUNDPINK};

    #stars {
        color: ${({ theme }) => theme.COLORS.PINK};
        display: flex;
    }
    
    #stars > svg {
        width: 20px;
    }
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    
    h1 {
        font-size: 28px;
        padding-bottom: 8px;
    }

    > h2 {
        font-size: 12px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Paragraph = styled.p`
    height: 60px;

    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY};

    button {
    color: ${({ theme }) => theme.COLORS.PINK};
    text-decoration: none;
    font-weight: bold;

    border: none;
    background: transparent;

    margin-left: 10px;
    }
`;

export const Tag = styled.div`
    display: flex;
    padding-top: 15px;
`;
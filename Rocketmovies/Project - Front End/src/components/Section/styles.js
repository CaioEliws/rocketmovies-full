import styled from "styled-components";

export const Content = styled.section`
    > h2 {
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY};

        padding-bottom: 24px;
    }
`;
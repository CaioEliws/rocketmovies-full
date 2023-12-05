import styled from "styled-components";

export const Content = styled.div`
    margin-bottom: 50px;

    > main {
        padding-top: 50px;
    }
`;

export const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    #header {
        display: flex;
        justify-content: space-between;
    }

    > #header > button {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.PINK};

        border: none;
        border-radius: 10px;
        height: 40px;
        width: 200px;
        gap: 8px;
    }

    > header {
        padding-top: 24px;

        > h1 {
            display: flex;
            align-items: center;
            gap: 10px;

            > svg {
                    color: ${({ theme }) => theme.COLORS.PINK};
                }
        }

        > div {
            display: flex;
            align-items: center;
            gap: 8px;

            padding-top: 24px;

            > img {
                width: 16px;
                height: 16px;
                border-radius: 50%;
            }

            > span {
                display: flex;
                align-items: center;
                gap: 5px;

                > svg {
                    color: ${({ theme }) => theme.COLORS.PINK};
                }
            }
        }

        > aside {
            padding-top: 40px;
        }
    }

    > p {
        padding-top: 40px;

        font-size: 16px;
    }
`;

export const Tag = styled.div`
    padding-top: 40px;
`;
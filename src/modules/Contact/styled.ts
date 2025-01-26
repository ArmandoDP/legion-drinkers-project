import { Container } from "@components/Container";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const ContactStyled = styled.section`
    background: ${Theme.primary};
    padding-top: 90px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 90px;
    z-index: 1;
    position: relative;
    text-align: center;

    img {
            height: 50dvh;
            width: 44dvh;
            object-fit: contain;
            border-radius: 50px;
        }
`;


export const ContactStyledWrapper = styled.div`
    max-width: 920px;
    margin: 0 auto;
`;

export const ContactTitle = styled.h2`
    &,
    &:last-child {
        margin-bottom: 90px;
    }
`;

export const ContainerStyled = styled(Container)`
    display: grid;
    grid-template-columns: 1fr 1fr;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
    }

    ${MediaQuery.min("xxxl")} {
        max-width: 1500px;
    }
`;

export const ContactBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin: 40px 0;
    text-align: left;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
    }
`;

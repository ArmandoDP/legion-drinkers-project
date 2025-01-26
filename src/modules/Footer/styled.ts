import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const FooterStyled = styled.footer`
    width: 100%;

    background: ${Theme.tertiary};

    padding: 90px 0;
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${MediaQuery.max("lg")} {
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    ${MediaQuery.max("lg")} {
        flex-direction: column;
        text-align: center;
    }

    p {
        margin: 0;
        color: ${Theme.primary};
    }
`;

export const FooterLink = styled.div`
    display: grid; /* Cambiar a una cuadrícula */
    place-items: center; /* Centra los elementos */
    gap: 20px;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr; /* Configuración para pantallas más pequeñas */
        text-align: center;
    }

    p {
        margin: 0;
        color: ${Theme.primary};
    }
`;
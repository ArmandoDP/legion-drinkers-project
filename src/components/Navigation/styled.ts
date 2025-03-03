import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const NavigationStyled = styled.div`
    display: flex;
    gap: 50px;

    ${MediaQuery.max("xl")} {
        gap: 20px;
    }
`;

export const NavigationListWrapper = styled.nav<{
    $isOpen: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${MediaQuery.max("lg")} {
        position: fixed;
        top: 0;
        right: -100%;
        background: ${Theme.secondary};
        height: 100dvh;
        z-index: 2;
        transform: translateX(100%);
        transition: transform 0.3s linear, right 0.7s;
        padding-top: 85px;
        width: clamp(300px, 80%, 300px);

        ${({ $isOpen }) =>
            $isOpen &&
            css`
                right: 0;
                transform: translateX(0);
            `};
    }
`;

export const NavigationList = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;

    ${MediaQuery.min("lg")} {
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    ${MediaQuery.max("lg")} {
        gap: 10px;
        padding: 20px 10px 53px;
        overflow: auto;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    > li a {
        text-decoration: none;
        color: ${Theme.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        line-height: 25px;
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 1px;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
        padding: 10px;
        border-radius: 5px;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;

        ${MediaQuery.max("lg")} {
            padding: 10px 20px;
        }

        &:hover {
            background-color: ${Theme.primary};
            color: ${Theme.secondary};
            text-shadow: none;
        }

        img {
            margin: 0 15px 0 0;
            max-width: 30px;
            max-height: 30px;

            ${MediaQuery.max("xl")} {
                margin: 0 10px 0 0;
            }
        }
    }
`;

export const DropdownWrapper = styled.div<{ $isOpen: boolean }>`
    display: ${props => (props.$isOpen ? 'block' : 'none')};
    opacity: ${props => (props.$isOpen ? 1 : 0)};
    max-height: ${props => (props.$isOpen ? '500px' : '0')};
    transition: opacity 0.3s ease, max-height 0.5s ease;
    background-color: ${Theme.primary};
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: 2px solid ${Theme.yellow};
    margin-top: 10px;
    padding: 10px 0;
    position: absolute;
    top: 100%;
    left: 0;
`;

export const DropdownItem = styled.div`
    padding: 10px 20px;
    color: ${Theme.secondary};
    cursor: pointer;
    font-weight: 700;
    transition: background-color 0.5s ease;
    border-radius: 10px;

    &:hover {
        background-color: ${Theme.secondary};
        color: ${Theme.primary};
        border-radius: 10px;
    }
`;

export const DropdownList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; // Crear dos columnas
    gap: 5px;
    padding: 0;
    margin: 0;
    list-style-type: none;

    > a {
      font-size: 15px !important;
      padding: 0 !important;
      text-shadow: none !important;
    }
    
    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
`;

export const DropdownListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
`;

import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const LogoStyled = styled.div`
    position: relative;
    z-index: 3;

    a {
        font-size: 35px;
        line-height: 30px;
        font-weight: 700;
        display: inline-flex;
        position: relative;

        span {
            &:after {
                content: "";
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 25%;
                height: 3px;
                background-color: ${Theme.primary};
                z-index: 1;
                transition: width 0.2s linear;
            }
        }

        &:hover span:after {
            width: 100%;
        }

        img {
            height: 150px;
            width: 150px;
            object-fit: contain;
        
            ${MediaQuery.max("lg")} {
                height: 100px;
                width: 100px;
            }
        }
    }
`;

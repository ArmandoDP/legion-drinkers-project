import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";
import { Socials } from "@components/Socials";

export const Footer: FC = () => {
    return (
        <S.FooterStyled>
            <Container>
                <S.FooterContainer>
                    <Logo />
                    <S.FooterContent>
                        <p>© 2024 All rights reserved by codexcode.pl</p>
                    </S.FooterContent>
                </S.FooterContainer>
                        <S.FooterLink>
                    <p>
                        <p>links</p>
                        <p>
                            <a href="#">Privacy Policy</a> |{" "}
                            <a href="#">Terms & Conditions</a> |{" "}
                            <a href="#">Contact Us</a> |{" "}
                            <a href="#">Support</a> |{" "}
                            <a href="#">FAQ</a> |{" "}
                            <a href="#">Careers</a> |{" "}
                            </p>
                        </p>
                        </S.FooterLink>
                <Socials />
            </Container>
        </S.FooterStyled>
    );
};

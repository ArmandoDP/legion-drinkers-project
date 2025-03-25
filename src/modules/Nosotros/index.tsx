import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";
import { Image } from "@static/images";

export const Nosotros: FC = () => {
    return (
        <S.NosotrosStyled>
            <S.ContainerStyled>
                <FadeIn delay={0.0}>
                    <h1>Nosotros</h1>
                    <img src="assets/branding/Codigo-Honor.jpg" alt="logo" />
                </FadeIn>
                <S.NosotrosBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            target="_blank"
                        >
                            <h3>¿QUIÉNES SOMOS?</h3>
                            <p>
                            Una empresa comercializadora de vinos y licores en la zona metropolitana del Valle de Toluca en el Estado de México.
                            </p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            target="_blank"
                        >
                            <h3>MISIÓN</h3>
                            <p>
                            Proporcionar a nuestros clientes una experiencia única de compra, ofreciendo la mejor selección de vinos y licores, promociones todos los días del año con una atención y servicio personalizado.
                            </p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            target="_blank"
                        >
                            <h3>VISIÓN</h3>
                            <p>
                            Ser la empresa líder en comercialización de vinos y licores a través de la apertura nuevas sucursales y con presencia en más localidades.
                            </p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            target="_blank"
                        >
                            <h3>AGRADECIMIENTO</h3>
                            <p>
                            Agradecemos a nuestros clientes y amigos su preferencia y nos comprometemos a seguirles llevando la mejor selección de vinos y licores.
                            </p>
                        </TextBox>
                    </FadeIn>
                </S.NosotrosBox>
            </S.ContainerStyled>
        </S.NosotrosStyled>
    );
};

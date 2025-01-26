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
                    <h1>Nosotros Somos</h1>
                    <Image srcLocal="logo" alt="logo" />
                </FadeIn>
                <S.NosotrosBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            target="_blank"
                        >
                            <h3>MISION</h3>
                            <p>
                            Proveer una experiencia única y satisfactoria en la compra de vinos y licores, ofreciendo una amplia variedad de opciones, promociones exclusivas durante todo el año y un servicio personalizado que haga que cada visita sea memorable.
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
                            <h3>VISIÓN</h3>
                            <p>
                            Convertirnos en líderes del mercado regional, expandiendo nuestra presencia a más localidades y llevando nuestra pasión por los vinos y licores a más clientes, siempre con un enfoque en la calidad, la innovación y la satisfacción de quienes confían en nosotros.
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
                            <h3>COMPROMISO CON LA COMUNIDAD</h3>
                            <p>
                            Nos enorgullece ser parte activa de nuestra comunidad, apoyando eventos locales, promoviendo el consumo responsable y colaborando con iniciativas que fomenten el desarrollo social y económico de la región.
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
                            Agradecemos la preferencia y confianza de nuestros clientes, quienes son el motor que nos impulsa a seguir creciendo. Nos comprometemos a ofrecerles siempre lo mejor en vinos y licores, acompañado de un servicio de excelencia.
                            </p>
                        </TextBox>
                    </FadeIn>
                </S.NosotrosBox>
            </S.ContainerStyled>
        </S.NosotrosStyled>
    );
};

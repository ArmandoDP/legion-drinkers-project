import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";
import { Image } from "@static/images";

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <FadeIn delay={0.0}>
                    <h1>Legion Drinkers</h1>
                    <img src="assets/branding/Atencion-Clientes.jpg" alt="logo" />
                </FadeIn>
                <S.ContactBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            href="tel:+52 722 850 6594"
                            target="_blank"
                        >
                            <h3>+52 722 850 6594</h3>
                            <p>¡Contáctanos ahora! Nuestro equipo está listo para atender tus dudas, ayudarte a encontrar lo que necesitas y brindarte la mejor experiencia. ¡Llámanos y descubre más!</p>
                            
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="legiondrinkers@gmail.com"
                            target="_blank"
                        >
                            <h3>legiondrinkers@gmail.com</h3>
                            <p>¡Escríbenos! Estamos aquí para responder tus preguntas, atender tus pedidos y brindarte toda la información que necesitas. ¡Tu mensaje es importante para nosotros!</p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            target="_blank"
                        >
                            <h3>CONOCE TODAS NUESTRAS SUCURSALES</h3>
                            <p>¡Descubre la tienda más cercana a ti! Contamos con ubicaciones estratégicas que te ofrecen comodidad, variedad y un servicio excepcional.</p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:youremail@gmail.com"
                            target="_blank"
                        >
                            <h3>SIGUENOS EN NUESTRAS REDES</h3>
                            <p>
                            Agradecemos la preferencia y confianza de nuestros clientes, quienes son el motor que nos impulsa a seguir creciendo. Nos comprometemos a ofrecerles siempre lo mejor en vinos y licores, acompañado de un servicio de excelencia.
                            </p>
                        </TextBox>
                    </FadeIn>
                </S.ContactBox>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};

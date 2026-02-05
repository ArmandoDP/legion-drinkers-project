import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";
import { Image } from "@static/images";
// import facebook from "../../../public/assets/shared/desktop/icon-facebook.svg";
// import twitter from "../../../public/assets/shared/desktop/icon-twitter-dark.svg";
// import instagram from "../../../public/assets/shared/desktop/icon-instagram-dark.svg";
// import whatsapp from "../../../public/assets/shared/desktop/icon-whatsapp.svg";

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <FadeIn delay={0.0}>
                    <h1>CONTACTO</h1>
                    <img src="assets/branding/Atencion-Clientes.jpg" alt="logo" />
                </FadeIn>
                <S.ContactBox>
                    <FadeIn delay={0.1}>
                        <S.StyleBox>
                            <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            href="tel:+52 722 850 6594"
                            target="_blank"
                            >
                            <h3>+52 722 850 6594</h3>
                            <p>¡Contáctanos ahora! Nuestro equipo está listo para atender tus dudas, ayudarte a encontrar lo que necesitas y brindarte la mejor experiencia. ¡Llámanos y descubre más!</p>
                            <h4>Llamar</h4>
                            </TextBox>
                        </S.StyleBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <S.StyleBox>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:legiondrinkers@gmail.com"
                            target="_blank"
                            >
                            <h3>legiondrinkers@gmail.com</h3>
                            <p>¡Escríbenos! Estamos aquí para responder tus preguntas, atender tus pedidos y brindarte información que necesitas. ¡Tu mensaje es importante para nosotros!</p>
                            <h4>Enviar un correo</h4>
                            </TextBox>
                        </S.StyleBox>
                    </FadeIn>
                    {/* <FadeIn delay={0.1}>
                        <S.StyleBox>
                            <TextBox
                                variant="background-text"
                                bgText="Phone"
                                boxAsLink={true}
                                href="/infinite"
                                target="_blank"
                                >
                                <h3>CONOCE TODAS NUESTRAS SUCURSALES</h3>
                                <p>¡Descubre la tienda más cercana a ti! Contamos con ubicaciones estratégicas que te ofrecen comodidad, variedad y un servicio excepcional.</p>
                                <h4>Buscar Sucursales</h4>
                            </TextBox>
                        </S.StyleBox>
                    </FadeIn> */}
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            target="_blank"
                        >
                            <h3>SIGUENOS EN NUESTRAS REDES</h3>
                            <p>¿Tienes alguna consulta o sugerencia? ¡No dudes en escribirnos! ¡Tu opinión es fundamental para mejorar nuestro servicio!</p>
                            <div style={{ 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center", 
                                marginTop: "40px", 
                                gap: "15px" // controla el espacio entre los íconos
                            }}>
                                <a href="https://www.facebook.com/share/12EzfqLicBs/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                                    <img src="/assets/shared/desktop/icon-facebook.svg" alt="Facebook icon" />
                                </a>
                                <a href="https://www.instagram.com/legion.drinkers?igsh=ODBwdTRsZDdjc3dx&utm_source=qr" target="_blank" rel="noopener noreferrer">
                                    <img src="/assets/shared/desktop/instagram.svg" alt="Instagram icon" />
                                </a>
                                <a href="https://wa.link/8or624" target="_blank" rel="noopener noreferrer">
                                    <img src="/assets/shared/desktop/icon-whatsapp.svg" alt="Whatsapp icon" />
                                </a>
                            </div>
                        </TextBox>
                    </FadeIn>
                </S.ContactBox>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};

import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            href="tel:+52 123 233 421"
                            target="_blank"
                        >
                            <h3>+52 123 233 421</h3>
                            <p>
                                you can call me if you have any questions or
                                just want to say hi
                            </p>
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
                            <h3>youremail@gmail.com</h3>
                            <p>
                                also you can write me an email if you have any
                                questions
                            </p>
                        </TextBox>
                    </FadeIn>
                </S.ContactBox>
                <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>Address</h3>
                        <p>Some street 123, 12345 City, Country</p>
                        <p>Office: Mystr street 321, 54321 City, Country</p>
                        <div style={{ position: "relative", marginTop: "1rem" }}>
                            {/* Texto de ubicación */}
                            {/* Imagen del mapa */}
                            <a
                                href="https://www.google.com/maps?q=Florida,+USA"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/assets/exported/ubicacion3.png"
                                    alt="Map preview"
                                    style={{
                                        width: "70%",
                                    height: "auto",
                                    borderRadius: "40px",
                                    marginTop: "3rem",
                                    marginBottom: "1rem",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    display: "block",
                                    opacity: 0.8,
                                    boxShadow: "10px 10px 10px rgba(2, 2, 2, 2)",
                                    }}
                                />
                            </a>
                            {/* Punto azul parpadeante */}
                            <span
                                style={{
                                    position: "absolute",
                                    top: "6%",
                                    left: "18%",
                                    color: "white",
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    textShadow: "2px 2px 8px rgba(5, 5, 5, 5)",
                                }}
                            >
                                Toluca, Mexico
                            </span>
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    width: "30px",
                                    height: "30px",
                                    backgroundColor: "black",
                                    borderRadius: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            ></div>
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    width: "17px",
                                    height: "17px",
                                    backgroundColor: "#00c9ff",
                                    borderRadius: "50%",
                                    transform: "translate(-50%, -50%)",
                                    animation: "blink 1s infinite",
                                }}
                            ></div>
                        </div>
                    </TextBox>
                </FadeIn>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};

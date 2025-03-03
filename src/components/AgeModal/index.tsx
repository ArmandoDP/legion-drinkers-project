import { useState, useEffect } from "react";
import { Overlay, ModalContent, Button, Disclaimer, Title, Description } from "./styled";
import { Logo } from "@components/Logo";

const AgeModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isOldEnough = localStorage.getItem("ageConfirmed");
    if (!isOldEnough) {
      setShowModal(true);
    }
  }, []);

  const handleAgeConfirmation = (isAdult: boolean) => {
    if (isAdult) {
      localStorage.setItem("ageConfirmed", "true");
      setShowModal(false);
    } else {
      window.location.href = "https://www.alcoholinformate.org.mx/";
    }
  };

  if (!showModal) return null;

  return (
    <Overlay>
      <ModalContent>
        <Logo />
        <Title>¡Bienvenido a Legion Drinkers!</Title>
        <Description>
          Descubre la mejor selección de <strong>Whisky, Tequila, Vodka, Vinos y Licores</strong>.  
          Estamos comprometidos con el consumo responsable de alcohol.  
          ¿Eres mayor de 18 años?
        </Description>
        <Button confirm onClick={() => handleAgeConfirmation(true)}>
          SOY MAYOR DE EDAD
        </Button>
        <Button onClick={() => handleAgeConfirmation(false)}>
          SOY MENOR DE EDAD
        </Button>
        <Disclaimer>
          Al aceptar que eres mayor de edad, confirmas que has leído y aceptado nuestros  
          <a href="/terminos-y-condiciones"> Términos y Condiciones</a> y nuestra  
          <a href="/politica-de-privacidad"> Política de Privacidad</a>.
          <br />
          <a href="https://www.alcoholinformate.org.mx/">https://www.alcoholinformate.org.mx/</a>
        </Disclaimer>
      </ModalContent>
    </Overlay>
  );
};

export default AgeModal;

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  max-width: 450px;
  box-shadow: 0px 5px 20px rgba(255, 215, 0, 0.4);
  border: 3px solid #ffd700; /* Amarillo dorado */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const Button = styled.button<{ confirm?: boolean }>`
  width: 100%;
  padding: 12px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  color: ${(props) => (props.confirm ? "#000" : "#fff")};
  background: ${(props) => (props.confirm ? "#ffd700" : "#d32f2f")};
  transition: all 0.3s ease-in-out;
  margin: 8px 0;

  &:hover {
    background: ${(props) => (props.confirm ? "#ffcc00" : "#b71c1c")};
    transform: scale(1.05);
  }
`;

export const Disclaimer = styled.p`
  margin-top: 15px;
  font-size: 13px;
  color: #000;
  text-align: center;

  a {
    color: #b8a31d;
    text-decoration: underline;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: #ffcc00;
  }
`;
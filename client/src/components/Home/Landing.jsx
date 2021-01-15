import styled from "styled-components";
import { Link } from 'react-router-dom'

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3cb371;
  height: 67em;
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccd7d1;
  height: 40em;
  width: 50em;
  position: relative;
  bottom: 5em;
`;

const LoginText = styled.p`
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 1.75px;
  text-transform: uppercase;
  position: relative;
  left: 4em;
  bottom: 8em;
  cursor: pointer;
`;

const LoginButton = styled.button`
  padding: 8px 12px;
  font-size: 25px;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  position: relative;
  right: 14em;
  transition: background-color 0.2s linear, color 0.2s linear;
  &:hover {
    background-color: white;
    color: black;
  }
  &:focus {
    outline-offset: 2px;
  }
  &:active {
    background-color: green;
    border-color: black;
    color: black;
  }
`;

const RegisterButton = styled.button`
  padding: 8px 12px;
  font-size: 25px;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  position: relative;
  right: 10em;
  transition: background-color 0.2s linear, color 0.2s linear;
  &:hover {
    background-color: white;
    color: black;
  }
  &:focus {
    outline-offset: 2px;
  }
  &:active {
    background-color: green;
    border-color: black;
    color: black;
  }
`;

const Landing = () => {
  return (
    <Box>
      <Modal>
        <LoginText>Login or Register to upload photos</LoginText>
        <LoginButton>Login</LoginButton>
        <RegisterButton>Register</RegisterButton>
      </Modal>
    </Box>
  );
};

export default Landing;

import React from "react";
import { Image } from "react-native";
import Button from "./../../src/components/Button";
import Input from "./../../src/components/Input";
import logoImg from "./../../src/assets/logo.png";
import { Container, Title } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Fazer login</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="passowrd" icon="lock" placeholder="Senha" />
      <Button
        onPress={() => console.log("Clicou")}
      >Entrar</Button>
    </Container>
  );
};

export default SignIn;

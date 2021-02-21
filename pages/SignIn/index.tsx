import React from "react";
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Button from "./../../src/components/Button";
import Input from "./../../src/components/Input";
import logoImg from "./../../src/assets/logo.png";
import Icon from "react-native-vector-icons/Feather";
import AppStyles from "./../../config/styles";
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountText,
} from "./styles";

const SignIn: React.FC = () => {
  return (
    <>
      {/**
       * KeyboardAvoidingView: View que tenta se adequar
       * ao abrir o teclado para que nao fique sobre o input
       * que o usuario esta digitando
       *
       * enabled: Define que estara habilitado por padrao
       *   */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >

        {/**
             * ScrollView: Tera a funcao de permitir o scroll da tela
             * com o teclado aberto
             * 
             * keyboardShouldPersistTaps: Adiciona o comportamento padrao
             * do sistema para acao fechar ou nao de clicar fora do teclado
             * */}
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}
        >
          <Container>
            <Image source={logoImg} />
            {/**
             * Essa View em volta de um componente Text faz com que,
             * no iOS, o Text tenha um efeito de transicao suave, pois
             * elementos Text nao refletem esse comportamento no iOS
             * */}
            <View>
              <Title>Fazer login</Title>
            </View>

            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="passowrd" icon="lock" placeholder="Senha" />
            <Button onPress={() => console.log("Clicou")}>Entrar</Button>

            <ForgotPassword>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton activeOpacity={0.7}>
        <Icon name="log-in" size={20} color={AppStyles.orange} />
        <CreateAccountText>Criar uma conta</CreateAccountText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;

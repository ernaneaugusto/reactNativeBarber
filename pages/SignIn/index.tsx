import React, { useCallback, useRef } from "react";
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from "react-native";
import Button from "./../../src/components/Button";
import Input from "./../../src/components/Input";
import logoImg from "./../../src/assets/logo.png";
import Icon from "react-native-vector-icons/Feather";
import AppStyles from "./../../config/styles";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountText,
} from "./styles";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import getValidationErrors from "./../../src/utils/getValidationsErros";
import * as Yup from "yup";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  // passwordInputRef.current?.focus();

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required("E-mail obrigatório"),
        password: Yup.string().required("E-mail obrigatório"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });

      // history.push('/dashboard');
    } catch (err) {

      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }

      Alert.alert(
        "Erro na autenticação",
        "Ocorreu um erro ao fazer login, cheque as credenciais.",
      );
    }
  }, []);

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
          contentContainerStyle={{ flex: 1 }}
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

            <Form
              style={{ flex: 1, width: "100%" }}
              ref={formRef}
              onSubmit={handleSignIn}
            >
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <Button onPress={() => formRef.current?.submitForm()}>
                Entrar
              </Button>
              <ForgotPassword>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              </ForgotPassword>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton
        onPress={() => navigation.navigate("SignUp")}
        activeOpacity={0.7}
      >
        <Icon name="log-in" size={20} color={AppStyles.orange} />
        <CreateAccountText>Criar uma conta</CreateAccountText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;

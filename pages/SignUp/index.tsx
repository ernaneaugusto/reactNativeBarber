import React, { useRef, useCallback } from "react";
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
import {
  Container,
  Title,
  BackToSignInButton,
  BackToSignInText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";
import getValidationErrors from "../../src/utils/getValidationsErros";
import * as Yup from "yup";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(async (data: SignUpFormData) => {
    
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("E-mail obrigatório"),
        password: Yup.string().min(6, "No mínimo 6 dígitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await api.post('/users', data);

      // history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        "Erro no cadastro",
        "Ocorreu um erro ao fazer cadastro, tente novamente.",
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
              <Title>Crie sua conta</Title>
            </View>

            <Form
              style={{ flex: 1, width: "100%" }}
              ref={formRef}
              onSubmit={handleSignUp}
            >
              <Input
                autoCapitalize={"words"}
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef.current?.focus()}
              />
              <Input
                ref={emailInputRef}
                onSubmitEditing={() => passwordInputRef.current?.focus()}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <Button onPress={() => formRef.current?.submitForm()}>
                Entrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignInButton
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={20} color={AppStyles.grayLight} />
        <BackToSignInText>Voltar para Login</BackToSignInText>
      </BackToSignInButton>
    </>
  );
};

export default SignUp;

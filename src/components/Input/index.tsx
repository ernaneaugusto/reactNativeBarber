import React, { useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import { TextInputProps } from "react-native";
import { Container, TextInput, Icon } from "./styles";
import AppStyles from "./../../../config/styles";
import { useField } from "@unform/core";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueRef {
  value: string;
}

interface InputRef {
  focus(): void;
}

// ForwardRefRenderFunction: Utilizado em componentes que precisam receber uma ref
const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  // defaultValue: deixar acima do inputValueRef passando seu valor para inputValueRef
  const { registerField, defaultValue = "", fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueRef>({ value: defaultValue });

  // envia informacoes do componente filho para o componente pai
  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
      setValue: (ref: any, value: string) => {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeOrops({ text: value });
      },
      clearValue: () => {
        inputValueRef.current.value = "";
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon name={icon} size={20} color={AppStyles.gray} />
      <TextInput
        ref={inputElementRef}
        placeholderTextColor={AppStyles.gray}
        keyboardAppearance="dark"
        onChangeText={(value: string) => (inputValueRef.current.value = value)}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
};

// forwardRef: adicionado em componentes que exportam uma ref para componentes pai
export default forwardRef(Input);

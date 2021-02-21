import React, { useRef, useEffect } from "react";
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

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const inputElementRef = useRef<any>(null);
  // defaultValue: deixar acima do inputValueRef passando seu valor para inputValueRef
  const { registerField, defaultValue = "", fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueRef>({ value: defaultValue });

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
      }
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

export default Input;

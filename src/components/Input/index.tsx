import React from "react";
import { TextInputProps } from "react-native";
import { Container, TextInput, Icon } from "./styles";
import AppStyles from "./../../../config/styles";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color={AppStyles.gray} />
      <TextInput
        placeholderTextColor={AppStyles.gray}
        keyboardAppearance="dark"
        {...rest}
      />
    </Container>
  );
};

export default Input;

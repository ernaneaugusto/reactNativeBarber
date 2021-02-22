import styled, { css } from "styled-components/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import AppStyles from "./../../../config/styles";

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${AppStyles.btnHeightDefault};
  padding: 0 16px;
  background-color: ${AppStyles.grayExtremeDark};
  border-radius: ${AppStyles.bdRadiusDefault};
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border: 2px solid transparent;

  ${(props: ContainerProps) =>
    props.isErrored &&
    css`
      border-color: ${AppStyles.red};
    `}

  ${(props: ContainerProps) =>
    props.isFocused &&
    css`
      border-color: ${AppStyles.orange};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${AppStyles.white};
  font-size: ${AppStyles.fonts.sizeDefault};
  font-family: ${AppStyles.fonts.robotoRegular};
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import AppStyles from "./../../config/styles";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${AppStyles.paddingDefault};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${AppStyles.grayLight};
  font-family: ${AppStyles.fonts.robotoMedium};
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: ${AppStyles.grayLight};
  font-size: 16px;
  font-family: ${AppStyles.fonts.robotoRegular};
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${AppStyles.grayDark};
  border-top-width: 1px;
  border-color: ${AppStyles.grayExtremeDark};
  padding: 16px 0 ${10 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountText = styled.Text`
  color: ${AppStyles.orange};
  font-size: 18px;
  font-family: ${AppStyles.fonts.robotoRegular};
  margin-left: 16px;
`;

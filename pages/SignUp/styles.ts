import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Platform } from 'react-native';
import AppStyles from "./../../config/styles";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${AppStyles.paddingDefault} ${Platform.OS === "android" ? 160 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${AppStyles.grayLight};
  font-family: ${AppStyles.fonts.robotoMedium};
  margin: 64px 0 24px;
`;

export const BackToSignInButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${AppStyles.grayDark};
  border-top-width: 1px;
  border-color: ${AppStyles.grayExtremeDark};
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: ${AppStyles.grayLight};
  font-size: 18px;
  font-family: ${AppStyles.fonts.robotoRegular};
  margin-left: 16px;
`;

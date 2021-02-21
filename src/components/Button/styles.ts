import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import AppStyles from "./../../../config/styles";

export const Container = styled(RectButton)`
  width: 100%;
  height: ${AppStyles.btnHeightDefault};
  background-color: ${AppStyles.orange};
  border-radius: ${AppStyles.bdRadiusDefault};
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${AppStyles.fonts.robotoMedium};
  color: ${AppStyles.grayLight};
  font-size: 18px;
`;

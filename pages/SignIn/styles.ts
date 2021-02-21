import styled from "styled-components/native";
import MyStyles from "./../../config/styles";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${MyStyles.textColor};
  font-family: ${MyStyles.fonts.robotoMedium};
  margin: 64px 0 24px;
`;

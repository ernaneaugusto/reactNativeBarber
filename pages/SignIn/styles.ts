import styled from "styled-components/native";
import MyStyles from "./../../config/styles";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${MyStyles.paddingDefault};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${MyStyles.grayLight};
  font-family: ${MyStyles.fonts.robotoMedium};
  margin: 64px 0 24px;
`;

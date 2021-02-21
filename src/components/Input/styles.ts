import styled from "styled-components/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import AppStyles from "./../../../config/styles";

export const Container = styled.View`
  width: 100%;
  height: ${AppStyles.btnHeightDefault};
  padding: 0 16px;
  background-color: ${AppStyles.grayExtremeDark};
  border-radius: ${AppStyles.bdRadiusDefault};
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
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
